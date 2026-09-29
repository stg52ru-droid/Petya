import type { ReactNode } from "react";

export const INK = "#1a1a1a";

export function Frame({
  page,
  title,
  children,
  w = "100%",
  h = "100%",
}: {
  page: number;
  title: string;
  children: ReactNode;
  w?: number | string;
  h?: number | string;
}) {
  return (
    <svg viewBox="0 0 800 1131" width={w} height={h} role="img" aria-label={title} style={{ display: "block" }}>
      <rect width="800" height="1131" fill="#ffffff" />
      <rect x="16" y="16" width="768" height="1099" rx="10" fill="none" stroke={INK} strokeWidth="3.2" />
      <rect x="26" y="26" width="748" height="1079" rx="6" fill="none" stroke={INK} strokeWidth="1.1" />
      <Corner x={40} y={40} />
      <Corner x={760} y={40} flipX />
      <Corner x={40} y={1012} flipY />
      <Corner x={760} y={1012} flipX flipY />
      {children}
      <g>
        <rect x="78" y="1038" width="644" height="46" rx="23" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <circle cx="112" cy="1061" r="15" fill="#ffffff" stroke={INK} strokeWidth="2" />
        <text
          x="112"
          y="1067"
          textAnchor="middle"
          fontFamily="Nunito, sans-serif"
          fontSize="15"
          fontWeight="800"
          fill={INK}
        >
          {page}
        </text>
        <text
          x="408"
          y="1068"
          textAnchor="middle"
          fontFamily="Pangolin, cursive"
          fontSize="22"
          fill={INK}
        >
          {title}
        </text>
      </g>
    </svg>
  );
}

function Corner({
  x,
  y,
  flipX = false,
  flipY = false,
}: {
  x: number;
  y: number;
  flipX?: boolean;
  flipY?: boolean;
}) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${flipX ? -1 : 1} ${flipY ? -1 : 1})`}
      d="M0 18 C8 18 14 12 14 0 M0 10 C16 10 22 18 34 8"
      fill="none"
      stroke={INK}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  );
}

export function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke={INK} strokeWidth={1.6 / s} strokeLinejoin="round">
      <ellipse cx="0" cy="6" rx="26" ry="14" />
      <ellipse cx="-18" cy="10" rx="16" ry="11" />
      <ellipse cx="20" cy="10" rx="18" ry="12" />
      <ellipse cx="4" cy="-2" rx="14" ry="12" />
    </g>
  );
}

export function Star({ x, y, r = 10, sw = 1.5 }: { x: number; y: number; r?: number; sw?: number }) {
  const d = [0, 1, 2, 3]
    .map((i) => {
      const a = (Math.PI / 2) * i - Math.PI / 2;
      const ax = Math.cos(a) * r;
      const ay = Math.sin(a) * r;
      const b = a + Math.PI / 4;
      const bx = Math.cos(b) * r * 0.38;
      const by = Math.sin(b) * r * 0.38;
      return `${i === 0 ? "M" : "L"}${ax.toFixed(1)} ${ay.toFixed(1)} L${bx.toFixed(1)} ${by.toFixed(1)}`;
    })
    .join(" ");
  return <path d={`${d} Z`} transform={`translate(${x} ${y})`} fill="#fff" stroke={INK} strokeWidth={sw} strokeLinejoin="round" />;
}

export function Windows({
  x,
  y,
  cols,
  rows,
  w = 18,
  h = 24,
  gap = 10,
  sw = 1.25,
}: {
  x: number;
  y: number;
  cols: number;
  rows: number;
  w?: number;
  h?: number;
  gap?: number;
  sw?: number;
}) {
  const nodes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      nodes.push(
        <rect
          key={`${r}-${c}`}
          x={x + c * (w + gap)}
          y={y + r * (h + gap)}
          width={w}
          height={h}
          rx="1.5"
          fill="#fff"
          stroke={INK}
          strokeWidth={sw}
        />,
      );
    }
  }
  return <g>{nodes}</g>;
}

export function Building({
  x,
  y,
  w,
  h,
  winCols,
  winRows,
  roof = "flat",
  door = true,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  winCols: number;
  winRows: number;
  roof?: "flat" | "peak" | "dome" | "spire";
  door?: boolean;
}) {
  const winW = Math.min(18, (w - 24) / winCols - 8);
  const winH = Math.min(26, (h - 70) / winRows - 8);
  return (
    <g fill="#fff" stroke={INK} strokeWidth="1.7" strokeLinejoin="round">
      {roof === "peak" && <path d={`M${x - 8} ${y} L${x + w / 2} ${y - 42} L${x + w + 8} ${y} Z`} />}
      {roof === "dome" && (
        <>
          <ellipse cx={x + w / 2} cy={y} rx={w * 0.28} ry="26" />
          <path d={`M${x + w / 2} ${y - 26} L${x + w / 2} ${y - 48}`} fill="none" />
          <circle cx={x + w / 2} cy={y - 52} r="4" />
        </>
      )}
      {roof === "spire" && (
        <path d={`M${x + w / 2 - 10} ${y} L${x + w / 2} ${y - 92} L${x + w / 2 + 10} ${y} Z`} />
      )}
      <rect x={x} y={y} width={w} height={h} />
      <Windows
        x={x + 14}
        y={y + 16}
        cols={winCols}
        rows={winRows}
        w={winW}
        h={winH}
        gap={8}
      />
      {door && <rect x={x + w / 2 - 12} y={y + h - 36} width="24" height="36" />}
      <path d={`M${x} ${y + h} L${x + w} ${y + h}`} fill="none" strokeWidth="2.2" />
    </g>
  );
}

export function Lamp({ x, y, h = 250 }: { x: number; y: number; h?: number }) {
  return (
    <g fill="#fff" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M${x} ${y} L${x} ${y - h + 36}`} />
      <path d={`M${x - 16} ${y} L${x + 16} ${y} L${x + 10} ${y - 8} L${x - 10} ${y - 8} Z`} />
      <path d={`M${x} ${y - h + 36} Q${x + 28} ${y - h + 20} ${x + 34} ${y - h + 46}`} fill="none" />
      <path d={`M${x + 22} ${y - h + 28} L${x + 46} ${y - h + 18} L${x + 42} ${y - h + 40} Z`} />
      <circle cx={x + 34} cy={y - h + 30} r="7" />
    </g>
  );
}

export function Birch({ x, y, h = 220 }: { x: number; y: number; h?: number }) {
  return (
    <g fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinecap="round">
      <path d={`M${x - 8} ${y} Q${x - 4} ${y - h * 0.5} ${x - 2} ${y - h} L${x + 6} ${y - h} Q${x + 8} ${y - h * 0.45} ${x + 10} ${y} Z`} />
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={i}
          d={`M${x - 5} ${y - 28 - i * (h / 8)} h10`}
          fill="none"
          strokeWidth="2.4"
        />
      ))}
      <ellipse cx={x - 28} cy={y - h + 10} rx="34" ry="26" />
      <ellipse cx={x + 24} cy={y - h + 4} rx="30" ry="22" />
      <ellipse cx={x} cy={y - h - 16} rx="26" ry="22" />
    </g>
  );
}

export function Fir({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke={INK} strokeWidth={1.6 / s} strokeLinejoin="round">
      <path d="M-6 0 H6 V-28 H-6 Z" />
      <path d="M0 -150 L46 -36 L-46 -36 Z" />
      <path d="M0 -118 L38 -16 L-38 -16 Z" />
      <path d="M0 -86 L30 0 L-30 0 Z" />
    </g>
  );
}

export function Snowflake({ x, y, r = 14 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="none" stroke={INK} strokeWidth="1.3" strokeLinecap="round">
      {[0, 60, 120].map((deg) => (
        <g key={deg} transform={`rotate(${deg})`}>
          <path d={`M0 ${-r} V${r}`} />
          <path d={`M0 ${-r * 0.55} l-4 -6 M0 ${-r * 0.55} l4 -6`} />
        </g>
      ))}
      <circle r="2.2" fill="#fff" />
    </g>
  );
}

export function Pear({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke={INK} strokeWidth={1.7 / s} strokeLinecap="round">
      <path d="M0 -10 C12 -8 16 8 8 20 C2 28 -8 26 -12 14 C-18 2 -10 -12 0 -10 Z" />
      <path d="M-1 -10 C2 -20 8 -24 12 -30" fill="none" />
      <ellipse cx="10" cy="-24" rx="6" ry="3.5" transform="rotate(-30 10 -24)" />
    </g>
  );
}

export function Soap({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke={INK} strokeWidth={1.6 / s} strokeLinejoin="round">
      <rect x="-10" y="-6" width="20" height="32" rx="4" />
      <rect x="-6" y="-14" width="12" height="10" rx="2" />
      <path d="M0 -14 V-22" fill="none" />
      <path d="M0 -22 h8" fill="none" />
      <path d="M-5 6 h10 M-5 12 h10" fill="none" />
      <path d="M14 2 c6 2 6 10 0 12" fill="none" />
    </g>
  );
}

export function BubbleText({
  x,
  y,
  children,
  size = 54,
  sw = 6,
}: {
  x: number;
  y: number;
  children: string;
  size?: number;
  sw?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontFamily="Pangolin, cursive"
      fontSize={size}
      fill="#ffffff"
      stroke={INK}
      strokeWidth={sw}
      strokeLinejoin="round"
      paintOrder="stroke fill"
    >
      {children}
    </text>
  );
}
