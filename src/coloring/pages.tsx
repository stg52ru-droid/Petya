import {
  Birch,
  BubbleText,
  Building,
  Cloud,
  Fir,
  Frame,
  INK,
  Lamp,
  Pear,
  Snowflake,
  Soap,
  Star,
  Windows,
} from "./bits";
import {
  BabaYaga,
  Bogatyr,
  Cat,
  Dad,
  DedMoroz,
  Firebird,
  FrogPrincess,
  Gnome,
  Gorynych,
  Grandpa,
  Hut,
  IceCart,
  Kolobok,
  Koschei,
  Mermaid,
  Mom,
  OfficialDaughter,
  Petya,
  PetyaSide,
  Portal,
  Snegurochka,
  Vodyanoy,
  Wardrobe,
  Wolf,
  WolfSit,
} from "./cast";
import { PAGES } from "./meta";

export function ColoringPage({ id, pixel = false }: { id: number; pixel?: boolean }) {
  const info = PAGES[id - 1];
  const w = pixel ? 794 : "100%";
  const h = pixel ? 1123 : "100%";
  return (
    <Frame page={id} title={info.title} w={w} h={h}>
      {id === 1 && <Cover />}
      {id === 2 && <Crossing />}
      {id === 3 && <WardrobeScene />}
      {id === 4 && <Family />}
      {id === 5 && <YagaScene />}
      {id === 6 && <Skates />}
      {id === 7 && <Dragon />}
      {id === 8 && <Frost />}
      {id === 9 && <Lukomorye />}
      {id === 10 && <Parade />}
    </Frame>
  );
}

function Ground({ y = 900 }: { y?: number }) {
  return <path d={`M48 ${y} H752`} fill="none" stroke={INK} strokeWidth="1.4" strokeDasharray="2 7" />;
}

function Cover() {
  return (
    <g>
      <Cloud x={120} y={300} s={0.8} />
      <Cloud x={660} y={310} s={0.95} />
      <Skyline y={400} />
      <Portal x={400} y={560} rx={128} ry={150} />
      <Star x={330} y={470} r={12} />
      <Star x={470} y={500} r={9} />
      <Star x={360} y={620} r={8} />
      <Star x={500} y={450} r={11} />
      <Star x={290} y={560} r={7} />
      <Star x={520} y={600} r={8} />
      <Star x={400} y={430} r={10} />
      <path d="M400 500 l10 18 h-20 Z" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <Petya x={250} y={860} s={1.02} mood="smile" arm="up" pack />
      <Wolf x={545} y={868} s={1.02} mood="smirk" />
      <Pear x={600} y={820} s={0.8} />
      <BubbleText x={400} y={108} size={58} sw={6}>
        Приключения
      </BubbleText>
      <BubbleText x={400} y={172} size={52} sw={6}>
        Пети и Волка
      </BubbleText>
      <text x="400" y="214" textAnchor="middle" fontFamily="Pangolin, cursive" fontSize="22" fill={INK}>
        раскраска · 10 страниц · формат А4
      </text>
      <text x="400" y="246" textAnchor="middle" fontFamily="Nunito, sans-serif" fontSize="13" fill={INK}>
        по мотивам мультсериала киностудии «Союзмультфильм»
      </text>
      <PaletteRow y={900} />
    </g>
  );
}

function PaletteRow({ y }: { y: number }) {
  const items = ["кофта", "штаны", "волк", "морда", "брюшко", "мама", "платье", "туфли", "Кощей", "Горыныч"];
  return (
    <g>
      {items.map((name, i) => {
        const x = 78 + i * 66;
        return (
          <g key={name}>
            <circle cx={x + 20} cy={y} r="14" fill="#fff" stroke={INK} strokeWidth="1.5" />
            <text x={x + 20} y={y + 4} textAnchor="middle" fontFamily="Nunito, sans-serif" fontSize="11" fontWeight="800" fill={INK}>
              {i + 1}
            </text>
            <text x={x + 20} y={y + 30} textAnchor="middle" fontFamily="Nunito, sans-serif" fontSize="9" fill={INK}>
              {name}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function Skyline({ y }: { y: number }) {
  return (
    <g fill="#fff" stroke={INK} strokeWidth="1.5" strokeLinejoin="round">
      <path d={`M60 ${y} V${y - 70} H110 V${y - 40} H150 V${y - 90} H190 V${y}`} />
      <path d={`M210 ${y} V${y - 50} H250 L270 ${y - 130} L290 ${y - 50} H330 V${y}`} />
      <circle cx="270" cy={y - 136} r="5" />
      <path d={`M360 ${y} V${y - 80} H420 V${y - 36} H470 V${y - 96} H520 V${y}`} />
      <path d={`M540 ${y} V${y - 46} H600 Q630 ${y - 90} 660 ${y - 46} V${y}`} />
      <path d={`M680 ${y} V${y - 70} H730 V${y}`} />
    </g>
  );
}

function Crossing() {
  return (
    <g>
      <rect x="40" y="48" width="720" height="200" fill="#fff" stroke="none" />
      <Cloud x={150} y={90} s={0.8} />
      <Cloud x={560} y={80} s={1} />
      <Building x={55} y={150} w={130} h={300} winCols={3} winRows={5} roof="dome" />
      <Building x={190} y={120} w={120} h={330} winCols={3} winRows={6} roof="spire" />
      <Building x={320} y={180} w={170} h={270} winCols={4} winRows={4} roof="peak" />
      <Building x={500} y={140} w={140} h={310} winCols={3} winRows={5} roof="flat" />
      <Building x={645} y={190} w={100} h={260} winCols={2} winRows={4} roof="dome" />
      <text x="390" y="250" textAnchor="middle" fontFamily="Pangolin, cursive" fontSize="18" fill={INK}>
        ШКОЛА
      </text>
      <Lamp x={78} y={620} h={230} />
      <path d="M48 620 H752" stroke={INK} strokeWidth="2.4" />
      <path d="M48 700 H752" stroke={INK} strokeWidth="2" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={150 + i * 62} y={640} width="28" height="52" fill="#fff" stroke={INK} strokeWidth="1.5" />
      ))}
      <g fill="none" stroke={INK} strokeWidth="1.6">
        <rect x="470" y="668" width="54" height="28" rx="3" />
        <path d="M478 676 h8 M490 676 h8 M502 676 h8 M478 686 h8 M490 686 h8" />
      </g>
      <g fill="#fff" stroke={INK} strokeWidth="1.6">
        <path d="M600 760 h120 l-16 36 H616 Z" />
        <circle cx="632" cy="802" r="10" />
        <circle cx="700" cy="802" r="10" />
        <rect x="630" y="768" width="28" height="16" />
        <rect x="668" y="768" width="28" height="16" />
      </g>
      <g transform="translate(640 560)">
        <rect x="0" y="0" width="16" height="46" fill="#fff" stroke={INK} />
        <circle cx="8" cy="10" r="5" fill="#fff" stroke={INK} />
        <circle cx="8" cy="23" r="5" fill="#fff" stroke={INK} />
        <circle cx="8" cy="36" r="5" fill="#fff" stroke={INK} />
      </g>
      <Petya x={230} y={618} s={0.92} mood="wow" arm="down" pack />
      <Soap x={292} y={500} s={1.1} />
      <WolfSit x={430} y={628} s={1.15} />
      <Pear x={390} y={590} s={0.7} />
      <path d="M48 900 H752" stroke={INK} strokeWidth="2" />
      {Array.from({ length: 18 }).map((_, i) => (
        <path key={i} d={`M${55 + i * 40} 900 q20 14 40 0`} fill="none" stroke={INK} strokeWidth="1.2" />
      ))}
      <g fill="none" stroke={INK} strokeWidth="1.4">
        <path d="M90 930 q8 -16 4 -8 q10 -18 6 0" />
        <path d="M700 940 q10 -14 4 -6 q12 -16 5 2" />
      </g>
      <text x="400" y="980" textAnchor="middle" fontFamily="Pangolin, cursive" fontSize="18" fill={INK}>
        «Это же говорящая собака?»
      </text>
    </g>
  );
}

function WardrobeScene() {
  return (
    <g>
      <rect x="48" y="56" width="704" height="400" fill="none" stroke={INK} strokeWidth="1.2" />
      <Windows x={70} y={80} cols={6} rows={4} w={22} h={28} gap={12} />
      <path d="M250 80 v150" stroke={INK} strokeWidth="3" />
      <Skyline y={230} />
      <path d="M60 250 H250" stroke={INK} strokeWidth="1.2" />
      {/* poster */}
      <g fill="#fff" stroke={INK} strokeWidth="1.4">
        <rect x="560" y="80" width="120" height="150" />
        <circle cx="620" cy="140" r="28" />
        <text x="620" y="146" textAnchor="middle" fontFamily="Pangolin, cursive" fontSize="18" fill={INK}>
          П+В
        </text>
        <path d="M580 190 H660 M590 206 H650" />
      </g>
      <Wardrobe x={390} y={860} s={1.45} />
      <Portal x={390} y={620} rx={78} ry={120} />
      <Star x={360} y={540} r={10} />
      <Star x={430} y={570} r={8} />
      <Star x={350} y={640} r={7} />
      <Star x={450} y={650} r={9} />
      <Star x={390} y={520} r={8} />
      <Star x={410} y={700} r={6} />
      <Star x={330} y={600} r={7} />
      {/* desk */}
      <path d="M60 700 H250 V860 H60 Z" fill="#fff" stroke={INK} strokeWidth="1.7" />
      <path d="M70 620 H230 V700 H70 Z" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <rect x="90" y="636" width="70" height="46" fill="#fff" stroke={INK} />
      <path d="M150 700 v160 M60 780 H250" stroke={INK} strokeWidth="1.3" />
      <rect x="180" y="640" width="36" height="48" fill="#fff" stroke={INK} />
      <path d="M188 652 h20 M188 662 h16" stroke={INK} strokeWidth="1" />
      {/* ghost repeller */}
      <g transform="translate(120 760)" fill="#fff" stroke={INK} strokeWidth="1.4">
        <rect x="0" y="0" width="28" height="16" rx="3" />
        <path d="M14 -12 v12" />
        <path d="M6 -10 q8 -8 16 0" fill="none" />
        <circle cx="8" cy="8" r="2" />
      </g>
      {/* bed */}
      <path d="M500 760 H730 V900 H500 Z" fill="#fff" stroke={INK} strokeWidth="1.7" />
      <path d="M500 760 q20 -40 50 -20 q30 -30 50 0 q20 -28 40 8" fill="#fff" stroke={INK} />
      <circle cx="560" cy="820" r="6" fill="#fff" stroke={INK} />
      <circle cx="600" cy="840" r="6" fill="#fff" stroke={INK} />
      <circle cx="640" cy="820" r="6" fill="#fff" stroke={INK} />
      <circle cx="680" cy="845" r="6" fill="#fff" stroke={INK} />
      <Petya x={620} y={900} s={0.82} outfit="pajama" mood="wow" arm="up" />
      <Wolf x={455} y={860} s={0.78} mood="smile" arm="up" />
      <Pear x={200} y={900} s={0.75} />
      <ellipse cx="250" cy="910" rx="10" ry="7" fill="#fff" stroke={INK} />
      <ellipse cx="268" cy="916" rx="8" ry="6" fill="#fff" stroke={INK} />
      <ellipse cx="400" cy="960" rx="120" ry="16" fill="none" stroke={INK} strokeWidth="1.3" />
    </g>
  );
}

function Family() {
  return (
    <g>
      <path d="M48 200 H752" stroke={INK} strokeWidth="1.2" />
      {Array.from({ length: 5 }).map((_, i) => (
        <circle key={i} cx={120 + i * 140} cy={120} r="16" fill="#fff" stroke={INK} strokeWidth="1.3" />
      ))}
      <ellipse cx="400" cy="70" rx="46" ry="16" fill="#fff" stroke={INK} strokeWidth="1.5" />
      <path d="M400 86 V130" stroke={INK} strokeWidth="1.4" />
      <Windows x={80} y={230} cols={5} rows={3} w={20} h={26} gap={10} />
      <path d="M70 220 H250 V400 H70 Z" fill="none" stroke={INK} strokeWidth="1.6" />
      <path d="M48 400 H190 V680 H48 Z" fill="#fff" stroke={INK} strokeWidth="1.7" />
      <path d="M48 520 H190 M48 600 H190" stroke={INK} strokeWidth="1.3" />
      <rect x="78" y="430" width="70" height="40" fill="#fff" stroke={INK} />
      <Wolf x={118} y={590} s={0.36} mood="smirk" />
      <path d="M180 860 H340 V930 H180 Z" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <ellipse cx="250" cy="830" rx="22" ry="10" fill="#fff" stroke={INK} />
      <path d="M250 830 V800" stroke={INK} />
      <rect x="430" y="800" width="70" height="70" fill="#fff" stroke={INK} strokeWidth="1.5" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}${c}`}
            x={438 + c * 20}
            y={808 + r * 20}
            width="18"
            height="18"
            fill={(r + c) % 2 ? "#fff" : "none"}
            stroke={INK}
            strokeWidth="1"
          />
        )),
      )}
      <Mom x={130} y={900} s={0.72} tray />
      <Dad x={300} y={908} s={0.7} />
      <Petya x={455} y={912} s={0.68} mood="smile" />
      <Grandpa x={610} y={912} s={0.7} />
      <Ground y={912} />
    </g>
  );
}

function Pie({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke={INK} strokeWidth={1.5 / s}>
      <path d="M-16 0 Q0 -16 16 0 Q12 10 -12 10 Z" />
      <path d="M-8 -2 Q0 -8 8 -2" fill="none" />
      <circle cx="0" cy="-6" r="2" />
    </g>
  );
}

function YagaScene() {
  return (
    <g>
      <Fir x={90} y={430} s={0.7} />
      <Birch x={180} y={460} h={200} />
      <Fir x={680} y={450} s={0.85} />
      <Birch x={600} y={480} h={180} />
      <Hut x={400} y={560} s={1.05} />
      <BabaYaga x={590} y={300} s={0.95} />
      <Star x={520} y={180} r={8} />
      <Star x={660} y={220} r={7} />
      <Pie x={250} y={760} s={1.3} />
      <Pie x={300} y={790} s={1.1} />
      <Pie x={210} y={800} s={1} />
      <Pie x={340} y={750} s={0.9} />
      <Pie x={170} y={760} s={0.85} />
      <path d="M150 820 h220 l-16 28 H166 Z" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <OfficialDaughter x={120} y={900} s={0.72} />
      <Grandpa x={300} y={910} s={0.72} horns mood="wow" />
      <Petya x={470} y={910} s={0.7} mood="worry" arm="point" />
      <Wolf x={640} y={918} s={0.68} mood="worry" arm="point" />
      <ellipse cx="250" cy="960" rx="16" ry="8" fill="#fff" stroke={INK} />
      <ellipse cx="300" cy="970" rx="12" ry="7" fill="#fff" stroke={INK} />
      <Ground y={912} />
    </g>
  );
}

function Skates() {
  return (
    <g>
      <Building x={60} y={160} w={200} h={280} winCols={4} winRows={4} roof="peak" />
      <Building x={280} y={120} w={240} h={320} winCols={5} winRows={5} roof="dome" />
      <Building x={540} y={170} w={180} h={270} winCols={4} winRows={4} roof="flat" />
      <path d="M48 560 H752" stroke={INK} strokeWidth="2" />
      {Array.from({ length: 14 }).map((_, i) => (
        <path key={i} d={`M${70 + i * 48} 560 v18`} stroke={INK} strokeWidth="1.4" />
      ))}
      <path d="M48 700 H752" stroke={INK} strokeWidth="1.6" />
      <path d="M80 640 H200 M520 620 H680 M140 680 H260" stroke={INK} strokeWidth="1.2" strokeLinecap="round" />
      <Koschei x={300} y={700} s={1.05} skates />
      <Grandpa x={500} y={705} s={0.92} skates mood="smile" />
      {/* joined hands suggestion */}
      <path d="M360 560 Q400 540 450 555" fill="none" stroke={INK} strokeWidth="1.6" />
      <g fill="#fff" stroke={INK} strokeWidth="1.5">
        <rect x="70" y="760" width="150" height="28" rx="4" />
        <path d="M80 788 v30 M210 788 v30" />
      </g>
      <Petya x={120} y={900} s={0.48} mood="wow" />
      <Wolf x={190} y={905} s={0.48} mood="smirk" />
      {/* still life: chest, egg, duck, hare, guitar */}
      <g fill="#fff" stroke={INK} strokeWidth="1.5" strokeLinejoin="round">
        <path d="M560 860 h70 l8 28 h-86 Z" />
        <path d="M570 860 v-12 h50 v12" />
        <ellipse cx="680" cy="870" rx="16" ry="20" />
        <path d="M700 850 q20 -10 16 20 q-8 8 -16 0" />
        <ellipse cx="640" cy="930" rx="12" ry="16" />
        <path d="M720 900 q8 -20 22 -6 q-8 10 -18 8" />
        <path d="M600 940 q-20 -30 -8 -50 q16 8 10 28" fill="none" />
        <circle cx="586" cy="884" r="8" />
      </g>
      <text x="400" y="980" textAnchor="middle" fontFamily="Pangolin, cursive" fontSize="18" fill={INK}>
        пояс с черепом · корона с кристаллом · ролики
      </text>
    </g>
  );
}

function Dragon() {
  return (
    <g>
      <path d="M80 280 Q400 80 720 300 V620 Q400 520 80 620 Z" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M140 360 q40 30 20 70 M220 340 q30 40 0 80 M620 350 q-40 30 -10 80" fill="none" stroke={INK} strokeWidth="1.3" />
      <Gorynych x={300} y={760} s={1.35} />
      <Bogatyr x={130} y={560} s={0.7} />
      <Petya x={130} y={960} s={0.62} mood="focus" arm="up" />
      <g transform="translate(150 760)" fill="#fff" stroke={INK} strokeWidth="1.4">
        <path d="M0 0 h34 v44 H0 Z" />
        <path d="M8 12 h18 M8 22 h18 M8 32 h12" />
      </g>
      <Wolf x={280} y={970} s={0.58} mood="smile" arm="point" />
      <Grandpa x={640} y={960} s={0.6} />
      <g transform="translate(690 860)" fill="#fff" stroke={INK} strokeWidth="1.4">
        <path d="M0 0 q14 -20 0 -36" fill="none" />
        <ellipse cx="0" cy="4" rx="10" ry="6" />
      </g>
      <g fill="#fff" stroke={INK} strokeWidth="1.4">
        <path d="M500 900 q30 -10 20 20 q-20 8 -24 -8" />
        <ellipse cx="620" cy="930" rx="16" ry="10" />
        <path d="M608 930 h24" />
      </g>
      <Ground y={962} />
    </g>
  );
}

function Frost() {
  return (
    <g>
      <Building x={50} y={140} w={180} h={260} winCols={4} winRows={4} roof="peak" />
      <Building x={250} y={100} w={220} h={300} winCols={5} winRows={5} roof="spire" />
      <Building x={500} y={150} w={200} h={250} winCols={4} winRows={4} roof="dome" />
      <Fir x={700} y={430} s={0.55} />
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={80 + i * 28} cy={250} r="8" fill="#fff" stroke={INK} strokeWidth="1.2" />
      ))}
      <Snowflake x={120} y={90} r={16} />
      <Snowflake x={230} y={70} r={12} />
      <Snowflake x={640} y={80} r={18} />
      <Snowflake x={720} y={160} r={11} />
      <Snowflake x={400} y={90} r={14} />
      <Snowflake x={80} y={480} r={10} />
      <path d="M48 560 Q200 540 400 560 T752 540" fill="none" stroke={INK} strokeWidth="1.5" />
      <DedMoroz x={150} y={860} s={0.92} confused />
      <g transform="translate(70 620)" fill="#fff" stroke={INK} strokeWidth="1.4">
        <circle r="22" />
        <circle r="8" />
        <path d="M-6 -30 h12 l-2 10 h-8 Z" />
      </g>
      <IceCart x={470} y={820} s={1} />
      <Snegurochka x={455} y={760} s={0.62} melt />
      <ellipse cx="450" cy="860" rx="40" ry="8" fill="none" stroke={INK} />
      <PetyaSide x={690} y={830} s={0.78} flip mood="focus" />
      <Wolf x={300} y={870} s={0.62} mood="worry" />
      <Ground y={860} />
      <text x="400" y="980" textAnchor="middle" fontFamily="Pangolin, cursive" fontSize="18" fill={INK}>
        Снегурочка тает — скорее на тележку!
      </text>
    </g>
  );
}

function Oak() {
  return (
    <g fill="#fff" stroke={INK} strokeWidth="1.7" strokeLinejoin="round">
      <path d="M370 980 C340 760 300 640 250 520 C220 430 180 390 120 360" fill="none" />
      <path d="M400 980 C430 700 500 560 620 430" fill="none" />
      <path d="M390 700 C360 560 300 500 220 470" fill="none" />
      <path d="M410 640 C480 520 560 500 680 470" fill="none" />
      <path d="M360 980 H430 C450 820 470 700 400 520 C340 700 330 840 360 980 Z" />
      <ellipse cx="180" cy="330" rx="70" ry="36" />
      <ellipse cx="300" cy="280" rx="80" ry="40" />
      <ellipse cx="460" cy="250" rx="90" ry="42" />
      <ellipse cx="620" cy="300" rx="70" ry="34" />
      <ellipse cx="240" cy="390" rx="60" ry="28" />
      <ellipse cx="560" cy="380" rx="66" ry="30" />
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 1.3 + 0.4;
        const rx = 46;
        const ry = 70;
        return <ellipse key={i} cx={390 + Math.cos(a) * rx} cy={760 + Math.sin(a) * ry} rx="8" ry="12" />;
      })}
    </g>
  );
}

function Lukomorye() {
  return (
    <g>
      <Oak />
      <Cat x={250} y={360} s={0.55} show={false} />
      <Firebird x={620} y={300} s={0.85} />
      <ellipse cx="160" cy="860" rx="90" ry="28" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <path d="M80 860 q20 10 40 0 q20 10 40 0 q20 10 40 0" fill="none" stroke={INK} />
      <Mermaid x={130} y={820} s={0.55} />
      <Vodyanoy x={210} y={860} s={0.5} />
      <ellipse cx="300" cy="900" rx="28" ry="10" fill="#fff" stroke={INK} />
      <FrogPrincess x={300} y={890} s={0.7} />
      <Kolobok x={520} y={900} s={0.7} />
      <Gnome x={680} y={900} s={0.75} />
      <Petya x={390} y={960} s={0.48} mood="smile" arm="point" />
      <Wolf x={470} y={968} s={0.46} mood="smile" />
      <g transform="translate(360 900)" fill="#fff" stroke={INK} strokeWidth="1.2">
        <path d="M0 0 h36 v24 H0 Z" />
        <path d="M6 8 h12 M6 14 h18 M22 6 l8 6 -8 6" />
      </g>
      {/* tiny theatre curtain */}
      <path d="M430 300 q20 20 0 40 q20 -10 40 0 q-10 -20 0 -40 Z" fill="#fff" stroke={INK} strokeWidth="1.3" />
    </g>
  );
}

function Parade() {
  return (
    <g>
      <Cloud x={130} y={78} s={0.85} />
      <Cloud x={600} y={86} s={0.8} />
      <Skyline y={210} />
      <g fill="none" stroke={INK} strokeWidth="1.7" strokeLinejoin="round">
        <path d="M90 250 L170 150" />
        <path d="M700 250 L620 150" />
        <path d="M90 250 H230 M560 250 H710" />
      </g>
      <g transform="translate(400 190)" fill="#fff" stroke={INK} strokeWidth="1.3">
        <path d="M-18 16 q18 -26 36 -6 l6 14 h-48 Z" />
        <circle cx="16" cy="-6" r="5" />
        <path d="M8 0 L-6 16" />
      </g>
      <g transform="translate(230 240)" fill="#fff" stroke={INK} strokeWidth="1.3">
        <path d="M-28 8 Q0 20 36 6 L28 16 H-18 Z" />
        <path d="M0 8 V-26" />
        <path d="M0 -24 L20 -8 L0 -6 Z" />
      </g>
      <path d="M48 390 q50 18 100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t52 0" fill="none" stroke={INK} strokeWidth="1.4" />
      <path d="M48 430 H752" stroke={INK} strokeWidth="2.2" />
      {Array.from({ length: 15 }).map((_, i) => (
        <g key={i} fill="#fff" stroke={INK} strokeWidth="1.3">
          <path d={`M${62 + i * 46} 430 v28`} />
          <circle cx={62 + i * 46} cy="466" r="5" />
        </g>
      ))}
      <Lamp x={80} y={760} h={180} />
      <Lamp x={720} y={760} h={170} />
      <BabaYaga x={150} y={520} s={0.48} />
      <Firebird x={300} y={500} s={0.42} />
      <DedMoroz x={560} y={560} s={0.42} />
      <Snegurochka x={680} y={555} s={0.4} />
      <Petya x={100} y={900} s={0.52} pack mood="smile" arm="up" />
      <Wolf x={205} y={908} s={0.52} mood="smile" />
      <Mom x={325} y={900} s={0.5} />
      <Dad x={450} y={906} s={0.46} paper={false} />
      <Grandpa x={565} y={906} s={0.48} />
      <Koschei x={690} y={898} s={0.5} skates />
      <Pear x={230} y={840} s={0.5} />
      <Ground y={902} />
    </g>
  );
}

export function ReferenceCard({ page }: { page: number }) {
  return (
    <svg viewBox="0 0 320 168" className="h-auto w-full">
      <rect width="320" height="168" rx="12" fill="#fffaf2" />
      {page === 1 && (
        <>
          <Petya x={110} y={150} s={0.42} show pack />
          <Wolf x={220} y={154} s={0.42} show />
        </>
      )}
      {page === 2 && (
        <>
          <Petya x={90} y={150} s={0.4} show mood="wow" pack />
          <WolfSit x={210} y={150} s={0.55} show />
        </>
      )}
      {page === 3 && (
        <>
          <Petya x={100} y={152} s={0.4} show outfit="pajama" mood="wow" arm="up" />
          <Wolf x={210} y={154} s={0.4} show mood="smile" arm="up" />
        </>
      )}
      {page === 4 && (
        <>
          <Mom x={50} y={152} s={0.32} show />
          <Dad x={120} y={156} s={0.3} show paper={false} />
          <Petya x={185} y={156} s={0.3} show />
          <Grandpa x={250} y={156} s={0.3} show />
        </>
      )}
      {page === 5 && (
        <>
          <BabaYaga x={70} y={130} s={0.42} show />
          <Grandpa x={170} y={152} s={0.32} show horns />
          <OfficialDaughter x={250} y={152} s={0.32} show />
        </>
      )}
      {page === 6 && (
        <>
          <Koschei x={110} y={150} s={0.4} show skates />
          <Grandpa x={220} y={152} s={0.36} show skates />
        </>
      )}
      {page === 7 && <Gorynych x={70} y={140} s={0.55} show />}
      {page === 8 && (
        <>
          <DedMoroz x={90} y={150} s={0.36} show confused />
          <Snegurochka x={200} y={150} s={0.4} show melt />
        </>
      )}
      {page === 9 && (
        <>
          <Firebird x={90} y={90} s={0.4} show />
          <Cat x={200} y={130} s={0.45} show />
          <FrogPrincess x={270} y={140} s={0.5} show />
        </>
      )}
      {page === 10 && (
        <>
          <Petya x={70} y={150} s={0.32} show />
          <Wolf x={140} y={154} s={0.32} show />
          <Mom x={210} y={150} s={0.28} show />
          <Koschei x={275} y={150} s={0.3} show />
        </>
      )}
    </svg>
  );
}
