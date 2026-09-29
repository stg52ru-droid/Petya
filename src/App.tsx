import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { PAGES, SHOW_PALETTE } from "./coloring/meta";
import { ColoringPage, ReferenceCard } from "./coloring/pages";

export default function App() {
  const [page, setPage] = useState(1);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const sheetRefs = useRef<Array<HTMLDivElement | null>>([]);
  const info = PAGES[page - 1];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setPage((p) => Math.min(10, p + 1));
      if (e.key === "ArrowLeft") setPage((p) => Math.max(1, p - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function downloadPdf() {
    setBusy(true);
    setError("");
    setProgress(0);
    try {
      await document.fonts.ready;
      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      pdf.setProperties({
        title: "The Adventures of Petya and the Wolf — A4 coloring book",
        subject: "10-page fan coloring book inspired by the Soyuzmultfilm series",
        creator: "Fan coloring studio",
      });
      for (let i = 0; i < 10; i++) {
        const node = sheetRefs.current[i];
        if (!node) throw new Error("Страница не готова");
        const dataUrl = await toPng(node, {
          cacheBust: true,
          pixelRatio: 2,
          backgroundColor: "#ffffff",
          width: 794,
          height: 1123,
        });
        if (i > 0) pdf.addPage();
        pdf.addImage(dataUrl, "PNG", 0, 0, 210, 297, undefined, "FAST");
        setProgress(i + 1);
      }
      pdf.save("Petya-i-Volk-raskraska-A4.pdf");
    } catch (err) {
      console.error(err);
      setError("Не удалось собрать PDF. Откройте печать и сохраните как PDF — получится тот же альбом А4.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#121a27] text-[#f6efe2]">
      <div className="no-print pointer-events-none fixed inset-0 bg-[radial-gradient(900px_500px_at_80%_-10%,rgba(226,196,138,0.16),transparent_55%),radial-gradient(800px_500px_at_0%_100%,rgba(56,120,160,0.22),transparent_50%)]" />

      <header className="no-print relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e2c48a] text-[#1a1a1a] shadow-lg">
            <WolfMark />
          </div>
          <div>
            <p className="font-hand text-xl leading-none text-[#f3e2bc]">Приключения Пети и Волка</p>
            <p className="mt-1 text-xs text-white/60">
              Фан-раскраска · Союзмультфильм · 10 страниц А4
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/10"
          >
            Печать
          </button>
          <button
            type="button"
            onClick={downloadPdf}
            disabled={busy}
            className="rounded-full bg-[#e25b45] px-4 py-2 text-sm font-extrabold text-white shadow-lg shadow-black/20 hover:bg-[#cf4d38] disabled:opacity-60"
          >
            {busy ? `Собираем PDF ${progress}/10` : "Скачать PDF"}
          </button>
        </div>
      </header>

      <div className="relative z-10 grid min-h-[calc(100vh-72px)] lg:grid-cols-[220px_minmax(0,1fr)_320px]">
        <aside className="no-print hidden gap-2 overflow-auto border-white/10 p-3 lg:flex lg:flex-col lg:border-r">
          {PAGES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPage(item.id)}
              className={`rounded-2xl border px-3 py-2 text-left transition ${
                page === item.id
                  ? "border-[#e2c48a] bg-[#e2c48a]/15"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <span className="font-hand text-lg text-[#f3e2bc]">{item.id}</span>
              <span className="mt-0.5 block text-sm font-bold leading-tight">{item.title}</span>
              <span className="text-[11px] text-white/50">{item.titleEn}</span>
            </button>
          ))}
        </aside>

        <main className="no-print flex min-w-0 flex-col items-center px-3 py-4 md:px-6">
          <div className="mb-3 flex w-full max-w-3xl items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-bold hover:bg-white/15"
            >
              ← Назад
            </button>
            <p className="font-hand text-center text-lg text-[#f3e2bc]">
              {page} / 10 · {info.title}
            </p>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(10, p + 1))}
              className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-bold hover:bg-white/15"
            >
              Дальше →
            </button>
          </div>
          <div className="page-shadow relative w-full max-w-[760px]" style={{ aspectRatio: "210 / 297" }}>
            <div className="absolute inset-0 overflow-hidden bg-white">
              <ColoringPage id={page} />
            </div>
          </div>
          <div className="mt-3 flex gap-1.5 lg:hidden">
            {PAGES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPage(item.id)}
                className={`h-2.5 w-2.5 rounded-full ${page === item.id ? "bg-[#e2c48a]" : "bg-white/30"}`}
                aria-label={item.title}
              />
            ))}
          </div>
        </main>

        <aside className="no-print space-y-4 overflow-auto border-white/10 p-4 lg:border-l">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#e2c48a]">
              {info.episode}
            </p>
            <h1 className="font-hand mt-1 text-3xl leading-none">{info.title}</h1>
            <p className="text-sm text-white/55">{info.titleEn}</p>
          </div>
          <p className="text-sm leading-relaxed text-white/85">{info.blurb}</p>
          <p className="text-sm leading-relaxed text-white/55">{info.blurbEn}</p>
          <div className="rounded-2xl bg-white/5 p-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#e2c48a]">Как в мультике</p>
            <div className="mt-2 overflow-hidden rounded-xl">
              <ReferenceCard page={page} />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-white/70">{info.tip}</p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#e2c48a]">Найди и раскрась</p>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              {info.finds.map((find) => (
                <li key={find}>· {find}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#e2c48a]">Палитра сериала</p>
            <ul className="mt-2 grid grid-cols-1 gap-1.5">
              {SHOW_PALETTE.map((swatch) => (
                <li key={swatch.name} className="flex items-center gap-2 text-xs text-white/75">
                  <span className="h-4 w-4 shrink-0 rounded-full border border-white/30" style={{ background: swatch.hex }} />
                  <span>
                    <b className="text-white/90">{swatch.name}</b> — {swatch.hint}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[11px] leading-relaxed text-white/40">
            Неофициальная фанатская раскраска для домашней печати. Герои нарисованы заново по описаниям
            внешности из сериала Алексея Лебедева: большая голова и взъерошенные волосы Пети, кофта поверх
            рубашки, маленький Волк без одежды, высокая оранжевая причёска мамы, короткая борода дедушки,
            рокерский Кощей и средняя голова Горыныча с букварём. Это не продукция киностудии «Союзмультфильм».
          </p>
          {error && <p className="rounded-xl bg-[#e25b45]/20 p-3 text-sm text-[#ffd0c8]">{error}</p>}
        </aside>
      </div>

      <div className="print-stack" aria-hidden>
        {PAGES.map((item, index) => (
          <div
            key={item.id}
            ref={(node) => {
              sheetRefs.current[index] = node;
            }}
            className="a4-sheet"
            style={{ width: 794, height: 1123, background: "#ffffff" }}
          >
            <ColoringPage id={item.id} pixel />
          </div>
        ))}
      </div>

      {busy && (
        <div className="no-print fixed inset-0 z-20 grid place-items-center bg-[#121a27]/70">
          <div className="w-[min(90vw,360px)] rounded-3xl bg-[#1c2738] p-6 text-center shadow-2xl">
            <p className="font-hand text-2xl text-[#f3e2bc]">Печатаем альбом</p>
            <p className="mt-1 text-sm text-white/70">Страница {progress} из 10 · формат А4</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-[#e2c48a] transition-all" style={{ width: `${progress * 10}%` }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WolfMark() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
      <path d="M10 30 L16 8 L28 26 Z" fill="#1a1a1a" />
      <path d="M36 26 L48 8 L54 30 Z" fill="#1a1a1a" />
      <circle cx="32" cy="34" r="16" fill="#1a1a1a" />
      <ellipse cx="32" cy="40" rx="8" ry="6" fill="#f6efe2" />
      <circle cx="26" cy="32" r="2.4" fill="#f6efe2" />
      <circle cx="38" cy="32" r="2.4" fill="#f6efe2" />
      <path d="M18 46 q-8 8 2 10" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
