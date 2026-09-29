import { INK } from "./bits";

type Base = {
  x: number;
  y: number;
  s?: number;
  flip?: boolean;
  show?: boolean;
};

function xf({ x, y, s = 1, flip = false }: Base) {
  return `translate(${x} ${y}) scale(${flip ? -s : s} ${s})`;
}

function sw(s = 1) {
  const a = Math.abs(s) || 1;
  return { o: 2.9 / a, m: 1.85 / a, t: 1.25 / a };
}

const LINE = {
  skin: "#fff",
  hair: "#fff",
  sweater: "#fff",
  shirt: "#fff",
  pants: "#fff",
  boots: "#fff",
  pack: "#fff",
  fur: "#fff",
  muzzle: "#fff",
  belly: "#fff",
  paw: "#fff",
  dress: "#fff",
  shoe: "#fff",
  cuff: "#fff",
  cheek: "#fff",
  cardigan: "#fff",
  jacket: "#fff",
  gold: "#fff",
  gem: "#fff",
  dragon: "#fff",
  dragonLite: "#fff",
  coat: "#fff",
  furTrim: "#fff",
  beard: "#fff",
};

function fills(show?: boolean) {
  if (!show) return LINE;
  return {
    skin: "#f6d2b0",
    hair: "#2b211c",
    sweater: "#1e4b86",
    shirt: "#f7f9fc",
    pants: "#8ec8ea",
    boots: "#242424",
    pack: "#c4554a",
    fur: "#a7b0ba",
    muzzle: "#5c6770",
    belly: "#f3efe4",
    paw: "#4e5963",
    dress: "#b7def3",
    shoe: "#d4a017",
    cuff: "#ffffff",
    cheek: "#f5b7b1",
    cardigan: "#8d4b3c",
    jacket: "#1c1c1c",
    gold: "#e6c15a",
    gem: "#d64545",
    dragon: "#3e8f55",
    dragonLite: "#8dcea0",
    coat: "#c0392b",
    furTrim: "#f7f4ee",
    beard: "#f4f1ea",
  };
}

function Eye({
  cx,
  cy,
  r = 11,
  look = 2,
  lid = 0,
  s = 1,
}: {
  cx: number;
  cy: number;
  r?: number;
  look?: number;
  lid?: number;
  s?: number;
}) {
  const { m } = sw(s);
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#fff" stroke={INK} strokeWidth={m} />
      {lid > 0 && (
        <path
          d={`M${cx - r + 1} ${cy - r * 0.15} Q${cx} ${cy - r * 0.2} ${cx + r - 1} ${cy - r * 0.35}`}
          fill="none"
          stroke={INK}
          strokeWidth={m}
        />
      )}
      <circle cx={cx + look} cy={cy + 1} r={r * 0.34} fill={INK} stroke="none" />
      <circle cx={cx + look - r * 0.12} cy={cy - r * 0.08} r={r * 0.12} fill="#fff" stroke="none" />
    </g>
  );
}

export function Petya({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  mood = "smile",
  arm = "down",
  outfit = "day",
  pack = false,
}: Base & {
  mood?: "smile" | "wow" | "worry" | "focus";
  arm?: "down" | "up" | "point";
  outfit?: "day" | "pajama";
  pack?: boolean;
}) {
  const { m, t } = sw(s);
  const c = fills(show);
  const wow = mood === "wow";
  const worry = mood === "worry";
  const eyeR = wow ? 13 : 11.2;
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      {pack && (
        <g fill={c.pack}>
          <path d="M-46 -168 Q-58 -166 -58 -100 Q-58 -82 -40 -80 L-24 -84 L-24 -160 Q-24 -170 -46 -168 Z" />
          <path d="M-52 -128 H-30" fill="none" strokeWidth={t} />
          <circle cx="-36" cy="-116" r="3.5" fill={show ? "#f2d16b" : "#fff"} />
        </g>
      )}

      {/* back arm */}
      <path
        fill={outfit === "day" ? c.sweater : c.shirt}
        d="M-20 -150 C-42 -140 -54 -112 -48 -84 C-44 -72 -32 -74 -32 -86 C-36 -110 -28 -134 -12 -148 Z"
      />
      <circle cx="-42" cy="-78" r="8" fill={c.skin} />

      {/* legs */}
      <path fill={outfit === "day" ? c.pants : c.shirt} d="M-22 -86 L-26 -28 H-6 L-4 -86 Z" />
      <path fill={outfit === "day" ? c.pants : c.shirt} d="M8 -86 L6 -28 H28 L30 -86 Z" />
      {outfit === "day" ? (
        <g fill={c.boots}>
          <path d="M-32 -30 Q-36 -8 -24 4 Q-8 8 -2 -6 L-4 -30 Z" />
          <path d="M4 -28 Q2 -6 14 6 Q32 10 36 -8 L30 -28 Z" />
          <path d="M8 -16 H28 M10 -8 H26" fill="none" stroke={show ? "#d9d9d9" : INK} strokeWidth={t} />
        </g>
      ) : (
        <g fill={c.skin}>
          <ellipse cx="-14" cy="-4" rx="12" ry="6" />
          <ellipse cx="18" cy="-4" rx="12" ry="6" />
        </g>
      )}

      {outfit === "day" && <path fill={c.shirt} d="M-18 -88 L-6 -68 L4 -88 Z" />}

      {/* torso */}
      {outfit === "day" ? (
        <g>
          <path fill={c.sweater} d="M-32 -158 C-42 -136 -40 -104 -34 -84 H34 C40 -108 40 -140 28 -158 C14 -170 -12 -172 -32 -158 Z" />
          <path d="M-30 -98 Q0 -90 30 -98 M-28 -106 Q0 -98 28 -106" fill="none" strokeWidth={t} />
          <path fill={c.shirt} d="M-6 -160 L6 -138 L18 -158 Z" />
          <path fill={c.shirt} d="M4 -162 L14 -144 L26 -160 Z" />
        </g>
      ) : (
        <g>
          <path fill={c.shirt} d="M-34 -156 C-44 -132 -40 -100 -32 -82 H34 C40 -104 38 -138 26 -156 C12 -170 -14 -172 -34 -156 Z" />
          {[-12, 0, 14].map((dx) =>
            [-130, -112, -96].map((dy) => <circle key={`${dx}${dy}`} cx={dx} cy={dy} r="4.2" fill={show ? "#e25b45" : "#fff"} strokeWidth={t} />),
          )}
        </g>
      )}

      {/* front arm */}
      {arm === "down" && (
        <g>
          <path fill={outfit === "day" ? c.sweater : c.shirt} d="M22 -148 C44 -136 56 -108 50 -80 C46 -68 34 -70 34 -82 C40 -106 32 -130 16 -148 Z" />
          <circle cx="44" cy="-74" r="8.5" fill={c.skin} />
        </g>
      )}
      {arm === "up" && (
        <g>
          <path fill={outfit === "day" ? c.sweater : c.shirt} d="M20 -152 C40 -166 54 -190 50 -214 C48 -226 36 -226 34 -214 C36 -192 28 -168 14 -152 Z" />
          <circle cx="42" cy="-220" r="8.5" fill={c.skin} />
        </g>
      )}
      {arm === "point" && (
        <g>
          <path fill={outfit === "day" ? c.sweater : c.shirt} d="M22 -146 C48 -132 74 -122 92 -112 C100 -108 96 -98 86 -100 C66 -106 42 -124 16 -146 Z" />
          <circle cx="94" cy="-106" r="7.5" fill={c.skin} />
        </g>
      )}

      <path fill={c.skin} d="M-4 -170 L-6 -152 H18 L20 -172 Z" />
      <ellipse cx="-30" cy="-188" rx="7" ry="11" fill={c.skin} />
      <circle cx="2" cy="-198" r="44" fill={c.skin} />

      {/* tousled hair — the show's permanent-surprise silhouette */}
      <g fill={c.hair}>
        <path d="M-30 -220 L-48 -258 L-16 -228 Z" />
        <path d="M-18 -236 L-6 -282 L14 -236 Z" />
        <path d="M6 -238 L26 -276 L34 -230 Z" />
        <path d="M24 -220 L48 -252 L36 -208 Z" />
        <path d="M-40 -202 L-56 -230 L-32 -208 Z" />
        <path d="M-28 -226 C-8 -244 22 -242 36 -220 C20 -214 -2 -216 -22 -220 Z" />
      </g>

      <Eye cx={-10} cy={-190} r={eyeR} look={wow ? 3 : 2} s={s} />
      <Eye cx={16} cy={-188} r={eyeR + 0.4} look={wow ? 3 : 2} s={s} />
      <path
        d={worry ? "M-20 -208 Q-10 -202 0 -210" : "M-20 -210 Q-8 -218 2 -206"}
        fill="none"
        strokeWidth={m}
      />
      <path
        d={worry ? "M8 -210 Q18 -202 30 -208" : wow ? "M8 -214 Q20 -224 32 -206" : "M8 -208 Q20 -218 32 -204"}
        fill="none"
        strokeWidth={m}
      />
      <path d="M18 -176 Q26 -170 18 -166" fill="none" strokeWidth={m} />
      {mood === "wow" ? (
        <ellipse cx="6" cy="-158" rx="7" ry="8" />
      ) : mood === "worry" ? (
        <path d="M-6 -158 Q6 -152 16 -160" fill="none" strokeWidth={m} />
      ) : mood === "focus" ? (
        <path d="M-4 -158 H16" fill="none" strokeWidth={m} />
      ) : (
        <path d="M-8 -160 Q6 -150 18 -160" fill="none" strokeWidth={m} />
      )}
    </g>
  );
}

export function PetyaSide({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  mood = "focus",
}: Base & { mood?: "focus" | "wow" | "smile" }) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={c.sweater} d="M-8 -150 C-30 -140 -36 -110 -28 -78 L8 -74 C4 -110 8 -140 20 -154 C10 -164 -2 -162 -8 -150 Z" />
      <path fill={c.pants} d="M-16 -78 L-28 -18 H-8 L-2 -78 Z" />
      <path fill={c.pants} d="M2 -76 L8 -16 H28 L22 -76 Z" />
      <g fill={c.boots}>
        <path d="M-36 -20 Q-40 2 -22 6 Q-6 4 -8 -16 Z" />
        <path d="M4 -16 Q2 4 18 8 Q36 4 32 -14 Z" />
      </g>
      <path fill={c.sweater} d="M8 -140 C28 -132 48 -118 58 -100 C64 -92 56 -86 50 -90 C38 -102 22 -120 6 -138 Z" />
      <circle cx="58" cy="-92" r="7" fill={c.skin} />
      <path fill={c.shirt} d="M6 -156 L16 -142 L26 -154 Z" />
      <circle cx="18" cy="-188" r="38" fill={c.skin} />
      <g fill={c.hair}>
        <path d="M-8 -206 L-24 -246 L6 -214 Z" />
        <path d="M4 -214 L14 -258 L28 -210 Z" />
        <path d="M22 -200 L40 -232 L36 -186 Z" />
        <path d="M-16 -190 L-30 -214 L-8 -196 Z" />
        <path d="M-4 -200 C10 -214 28 -206 32 -188 C18 -182 4 -186 -4 -194 Z" />
      </g>
      <Eye cx={26} cy={-190} r={mood === "wow" ? 11 : 9.5} look={2} s={s} />
      <path d="M40 -178 Q50 -172 46 -164" fill="none" strokeWidth={m} />
      <path d={mood === "wow" ? "M24 -166 Q32 -158 40 -166" : "M22 -168 Q32 -160 42 -168"} fill="none" strokeWidth={m} />
      <path d="M14 -206 Q24 -214 34 -204" fill="none" strokeWidth={t} />
    </g>
  );
}

export function Wolf({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  mood = "smirk",
  arm = "down",
}: Base & { mood?: "smirk" | "wow" | "smile" | "worry"; arm?: "down" | "point" | "up" }) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      {/* tail */}
      <path fill={c.fur} d="M-6 -62 C-34 -54 -62 -78 -54 -112 C-48 -132 -26 -128 -18 -108 C-30 -116 -44 -100 -40 -80 C-34 -66 -16 -66 -6 -72 Z" />
      <path fill={c.muzzle} d="M-46 -100 C-56 -112 -42 -128 -28 -116 C-36 -106 -42 -100 -46 -100 Z" />

      <path fill={c.paw} d="M-18 -52 L-24 -12 Q-26 2 -10 2 L-4 -12 L-6 -52 Z" />
      <ellipse cx="-14" cy="2" rx="13" ry="6.5" fill={c.paw} />
      <path fill={c.paw} d="M12 -50 L10 -10 Q8 4 26 4 L30 -12 L26 -50 Z" />
      <ellipse cx="20" cy="3" rx="14" ry="6.5" fill={c.paw} />

      <ellipse cx="4" cy="-78" rx="34" ry="36" fill={c.fur} />
      <ellipse cx="8" cy="-70" rx="16" ry="20" fill={c.belly} />

      {arm === "point" ? (
        <path fill={c.fur} d="M18 -96 C40 -88 62 -78 74 -66 C80 -60 72 -52 66 -56 C50 -66 30 -82 14 -98 Z" />
      ) : arm === "up" ? (
        <path fill={c.fur} d="M16 -100 C32 -112 40 -136 34 -154 C30 -164 20 -162 20 -150 C22 -134 16 -116 8 -104 Z" />
      ) : (
        <path fill={c.fur} d="M20 -100 C36 -90 42 -70 36 -54 C30 -46 22 -52 22 -60 C26 -76 22 -92 12 -102 Z" />
      )}
      <path fill={c.fur} d="M-12 -98 C-30 -90 -36 -70 -28 -56 C-22 -48 -14 -54 -16 -64 C-18 -78 -12 -92 -4 -102 Z" />
      <circle cx={arm === "point" ? 72 : arm === "up" ? 28 : 30} cy={arm === "point" ? -60 : arm === "up" ? -156 : -52} r="7" fill={c.paw} />

      <circle cx="6" cy="-128" r="30" fill={c.fur} />
      <path fill={c.fur} d="M-16 -146 L-24 -184 L2 -150 Z" />
      <path fill={show ? "#c5ced6" : "#fff"} d="M-12 -150 L-16 -172 L-2 -152 Z" />
      <path fill={c.fur} d="M10 -150 L16 -188 L34 -148 Z" />
      <path fill={show ? "#c5ced6" : "#fff"} d="M16 -154 L18 -174 L30 -152 Z" />

      <ellipse cx="8" cy="-116" rx="16" ry="12" fill={c.muzzle} />
      <ellipse cx="8" cy="-118" rx="5.5" ry="4.2" fill={INK} stroke={INK} />
      <path d="M8 -114 V-106" fill="none" strokeWidth={t} />
      <path d="M2 -106 Q8 -102 14 -106" fill="none" strokeWidth={t} />

      <Eye cx={-8} cy={-134} r={mood === "wow" ? 11 : 10} look={1} lid={0} s={s} />
      <Eye cx={16} cy={-136} r={mood === "wow" ? 11.2 : 10.2} look={1.5} lid={0} s={s} />
      <path
        d={mood === "worry" ? "M-2 -108 Q8 -102 18 -110" : "M-2 -108 Q8 -100 18 -108"}
        fill="none"
        strokeWidth={m}
      />
      <path d="M-18 -122 h-8 M22 -124 h8" fill="none" strokeWidth={t} />
    </g>
  );
}

export function WolfSit({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
}: Base) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={c.fur} d="M-20 -20 C-48 -10 -70 -40 -58 -70 C-50 -86 -34 -78 -30 -62 C-40 -66 -50 -50 -44 -34 C-38 -22 -26 -22 -20 -28 Z" />
      <path fill={c.fur} d="M-10 -8 C-28 6 10 10 28 -6 C34 -28 10 -48 -8 -36 C-16 -24 -12 -12 -10 -8 Z" />
      <ellipse cx="6" cy="-28" rx="16" ry="12" fill={c.belly} />
      <path fill={c.paw} d="M20 -34 C40 -28 58 -18 62 -4 C66 4 54 6 50 -2 C46 -14 32 -24 18 -32 Z" />
      <ellipse cx="58" cy="0" rx="10" ry="6" fill={c.paw} />
      <path d="M52 0 h4 M58 -2 v4" fill="none" strokeWidth={t} />
      <circle cx="8" cy="-62" r="26" fill={c.fur} />
      <path fill={c.fur} d="M-8 -78 L-14 -108 L8 -80 Z" />
      <path fill={c.fur} d="M8 -82 L16 -112 L30 -78 Z" />
      <ellipse cx="24" cy="-56" rx="14" ry="10" fill={c.muzzle} />
      <ellipse cx="34" cy="-58" rx="4.5" ry="3.5" fill={INK} />
      <Eye cx={12} cy={-66} r={7.5} look={2} lid={4} s={s} />
      <path d="M20 -50 Q28 -46 34 -52" fill="none" strokeWidth={m} />
    </g>
  );
}

export function Mom({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  tray = false,
}: Base & { tray?: boolean }) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={c.dress} d="M-46 -150 C-54 -80 -50 -10 -36 2 H40 C52 -16 50 -90 36 -152 C20 -166 -24 -168 -46 -150 Z" />
      <path d="M-20 -80 Q2 -60 24 -90" fill="none" strokeWidth={t} />
      <path fill={c.cuff} d="M-40 -146 L-54 -92 L-38 -88 L-28 -142 Z" />
      <path fill={c.cuff} d="M28 -144 L40 -90 L54 -96 L40 -148 Z" />
      <path fill={c.dress} d="M-36 -150 C-58 -140 -62 -108 -50 -86 C-42 -74 -32 -80 -34 -94 C-38 -118 -30 -140 -18 -152 Z" />
      <path fill={c.dress} d="M30 -150 C50 -138 62 -108 54 -82 C48 -70 36 -76 36 -90 C42 -114 36 -138 22 -152 Z" />
      <circle cx="-48" cy="-80" r="8" fill={c.skin} />
      <circle cx="52" cy="-78" r="8" fill={c.skin} />
      <path fill={c.shoe} d="M-30 0 Q-34 12 -16 12 Q-4 10 -8 0 Z" />
      <path fill={c.shoe} d="M10 0 Q8 12 26 12 Q40 10 34 0 Z" />
      <path fill={c.cuff} d="M-16 -158 L0 -136 L16 -158 Z" />
      <circle cx="0" cy="-196" r="36" fill={c.skin} />
      {/* tall orange updo — compared by viewers to a Marge Simpson silhouette */}
      <g fill={show ? "#ff7a18" : "#fff"}>
        <ellipse cx="0" cy="-248" rx="30" ry="42" />
        <ellipse cx="-18" cy="-214" rx="16" ry="18" />
        <ellipse cx="18" cy="-210" rx="16" ry="16" />
        <path d="M-10 -270 Q0 -286 12 -268" fill="none" strokeWidth={t} />
        <path d="M-16 -250 Q0 -236 16 -252" fill="none" strokeWidth={t} />
        <circle cx="8" cy="-274" r="3.5" fill={show ? "#f2d16b" : "#fff"} />
      </g>
      <Eye cx={-12} cy={-198} r={10} look={1} s={s} />
      <Eye cx={12} cy={-198} r={10} look={1} s={s} />
      <path d="M-22 -204 l-6 -6 M-20 -198 l-8 -2 M22 -204 l6 -6 M20 -198 l8 -2" fill="none" strokeWidth={t} />
      <path d="M0 -188 Q6 -182 2 -178" fill="none" strokeWidth={m} />
      <path d="M-10 -170 Q0 -162 10 -170" fill="none" strokeWidth={m} />
      <circle cx="-18" cy="-182" r="5" fill={c.cheek} strokeWidth={t} />
      <circle cx="18" cy="-182" r="5" fill={c.cheek} strokeWidth={t} />
      {tray && (
        <g>
          <ellipse cx="0" cy="-70" rx="36" ry="10" />
          <path d="M-10 -78 v-16 M6 -78 v-14" fill="none" strokeWidth={t} />
          <ellipse cx="-10" cy="-96" rx="8" ry="4" />
          <ellipse cx="8" cy="-94" rx="7" ry="3.5" />
        </g>
      )}
    </g>
  );
}

export function Dad({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  paper = true,
}: Base & { paper?: boolean }) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={show ? "#6e8b74" : "#fff"} d="M-48 -140 C-58 -70 -46 -8 -30 2 H36 C52 -12 54 -78 40 -142 C22 -160 -28 -162 -48 -140 Z" />
      <path d="M-10 -80 Q8 -50 28 -86" fill="none" strokeWidth={t} />
      <path fill={show ? "#6e8b74" : "#fff"} d="M-36 -136 C-58 -120 -60 -88 -46 -70 C-38 -60 -28 -66 -30 -78 C-34 -100 -28 -124 -14 -138 Z" />
      <path fill={show ? "#6e8b74" : "#fff"} d="M28 -138 C48 -122 58 -90 46 -68 C38 -58 28 -64 28 -78 C34 -102 30 -126 16 -140 Z" />
      <circle cx="-46" cy="-64" r="9" fill={c.skin} />
      <circle cx="48" cy="-62" r="9" fill={c.skin} />
      <path fill={show ? "#3d4f63" : "#fff"} d="M-22 -8 H-4 L-2 4 Q-14 12 -26 2 Z" />
      <path fill={show ? "#3d4f63" : "#fff"} d="M10 -8 H30 L34 2 Q20 12 8 2 Z" />
      <path fill={c.shirt} d="M-8 -150 L4 -128 L18 -150 Z" />
      <circle cx="2" cy="-186" r="38" fill={c.skin} />
      <path fill={show ? "#5c4033" : "#fff"} d="M-30 -200 Q0 -230 32 -198 Q28 -176 -24 -180 Z" />
      <Eye cx={-12} cy={-186} r={9} look={0} s={s} />
      <Eye cx={14} cy={-186} r={9} look={0} s={s} />
      <circle cx="-12" cy="-186" r="13" fill="none" strokeWidth={m} />
      <circle cx="14" cy="-186" r="13" fill="none" strokeWidth={m} />
      <path d="M1 -186 H6" fill="none" strokeWidth={m} />
      <path d="M-24 -200 Q-12 -208 0 -198" fill="none" strokeWidth={m} />
      <path d="M8 -198 Q20 -208 28 -196" fill="none" strokeWidth={m} />
      <path d="M2 -170 Q8 -164 4 -160" fill="none" strokeWidth={t} />
      <path d="M-8 -158 Q2 -150 14 -158" fill="none" strokeWidth={m} />
      {paper && (
        <g>
          <rect x="28" y="-78" width="34" height="42" rx="2" />
          <path d="M34 -68 H56 M34 -60 H54 M34 -52 H50" fill="none" strokeWidth={t} />
        </g>
      )}
    </g>
  );
}

export function Grandpa({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  horns = false,
  skates = false,
  mood = "smile",
}: Base & { horns?: boolean; skates?: boolean; mood?: "smile" | "wow" }) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={show ? "#d7c4a3" : "#fff"} d="M-16 -86 L-22 -16 H-4 L0 -86 Z" />
      <path fill={show ? "#d7c4a3" : "#fff"} d="M8 -86 L6 -16 H26 L28 -86 Z" />
      {skates ? (
        <g>
          <path fill={c.boots} d="M-30 -18 Q-34 0 -16 2 Q-2 0 -4 -16 Z" />
          <path fill={c.boots} d="M2 -16 Q0 2 18 4 Q34 2 30 -16 Z" />
          <circle cx="-24" cy="8" r="4" />
          <circle cx="-12" cy="8" r="4" />
          <circle cx="10" cy="10" r="4" />
          <circle cx="24" cy="10" r="4" />
        </g>
      ) : (
        <g fill={show ? "#8a5a3b" : "#fff"}>
          <path d="M-28 -16 Q-32 6 -12 6 Q0 4 -2 -16 Z" />
          <path d="M4 -16 Q2 6 22 6 Q34 4 28 -16 Z" />
        </g>
      )}
      <path fill={c.cardigan} d="M-36 -150 C-46 -120 -42 -92 -32 -78 H32 C42 -94 44 -126 30 -152 C16 -166 -18 -168 -36 -150 Z" />
      {[ -118, -104, -90 ].map((yy) => (
        <circle key={yy} cx="2" cy={yy} r="2.4" fill={show ? "#f2d16b" : "#fff"} strokeWidth={t} />
      ))}
      <path fill={c.cardigan} d="M-28 -146 C-48 -132 -50 -104 -38 -86 C-30 -76 -22 -82 -24 -94 C-28 -116 -22 -136 -8 -148 Z" />
      <path fill={c.cardigan} d="M24 -148 C42 -132 50 -104 40 -84 C32 -74 22 -80 24 -94 C28 -118 24 -138 10 -150 Z" />
      <circle cx="-40" cy="-80" r="8" fill={c.skin} />
      <circle cx="42" cy="-78" r="8" fill={c.skin} />
      <path fill={c.shirt} d="M-8 -154 L4 -136 L16 -154 Z" />
      <circle cx="2" cy="-188" r="36" fill={c.skin} />
      <path fill={show ? "#d5d8de" : "#fff"} d="M-32 -196 Q-36 -214 -16 -210 Q-8 -188 -28 -186 Z" />
      <path fill={show ? "#d5d8de" : "#fff"} d="M14 -186 Q28 -184 34 -206 Q18 -214 8 -196 Z" />
      {/* short trimmed beard and mustache — deliberately not a wizard beard */}
      <path fill={show ? "#e6e8ee" : "#fff"} d="M-16 -166 Q2 -150 20 -166 Q16 -176 2 -176 Q-12 -176 -16 -166 Z" />
      <path d="M-8 -174 Q2 -168 12 -174" fill="none" strokeWidth={t} />
      <Eye cx={-10} cy={-190} r={mood === "wow" ? 9 : 7.5} look={1} lid={mood === "wow" ? 0 : 2} s={s} />
      <Eye cx={12} cy={-190} r={mood === "wow" ? 9 : 7.5} look={1} lid={mood === "wow" ? 0 : 2} s={s} />
      <path d="M-20 -202 Q-10 -210 0 -200" fill="none" strokeWidth={m} />
      <path d="M8 -200 Q18 -210 24 -198" fill="none" strokeWidth={m} />
      <path d="M2 -178 Q6 -174 4 -172" fill="none" strokeWidth={t} />
      <path d="M-6 -162 Q2 -156 12 -162" fill="none" strokeWidth={m} />
      {horns && (
        <g fill={show ? "#f0d78c" : "#fff"}>
          <path d="M-16 -214 L-22 -242 L-6 -216 Z" />
          <path d="M12 -216 L16 -246 L24 -214 Z" />
        </g>
      )}
    </g>
  );
}

export function BabaYaga({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
}: Base) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      {/* mortar */}
      <path fill={show ? "#c9844a" : "#fff"} d="M-46 -20 Q-54 28 -10 36 H54 Q78 24 62 -18 Q40 -6 -20 -8 Q-40 -10 -46 -20 Z" />
      <path d="M-30 8 Q20 20 58 -4" fill="none" strokeWidth={t} />
      <path d="M-36 -4 Q10 8 60 -16" fill="none" strokeWidth={t} />
      <path fill={show ? "#8d5a32" : "#fff"} d="M46 -70 L62 -10 L78 -16 L60 -78 Z" />
      <path fill={show ? "#2f6b4f" : "#fff"} d="M-28 -78 C-40 -40 -24 -8 4 -4 H36 C44 -30 34 -70 16 -86 C0 -96 -16 -92 -28 -78 Z" />
      <path fill={show ? "#f2e6c9" : "#fff"} d="M-20 -80 L-8 -108 L8 -78 Z" />
      <path fill={show ? "#9b2335" : "#fff"} d="M-34 -96 Q-6 -118 28 -92 Q20 -78 -8 -80 Q-28 -84 -34 -96 Z" />
      <path d="M-20 -100 Q0 -92 16 -102" fill="none" strokeWidth={t} />
      <circle cx="-2" cy="-118" r="22" fill={c.skin} />
      <path d="M8 -112 Q28 -108 24 -96 Q14 -100 8 -108 Z" fill={c.skin} />
      <Eye cx={-10} cy={-122} r={6.5} look={2} s={s} />
      <Eye cx={6} cy={-124} r={6} look={2} s={s} />
      <path d="M-8 -104 Q-2 -98 4 -106" fill="none" strokeWidth={m} />
      <path d="M-4 -100 h6" fill="none" strokeWidth={t} />
      <path d="M18 -40 L34 -70" fill="none" strokeWidth={m} />
    </g>
  );
}

export function OfficialDaughter({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
}: Base) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={show ? "#243044" : "#fff"} d="M-22 -120 L-26 -8 H-6 L-2 -120 Z" />
      <path fill={show ? "#243044" : "#fff"} d="M6 -120 L8 -8 H28 L24 -120 Z" />
      <path fill={show ? "#1c1c1c" : "#fff"} d="M-28 -8 Q-30 8 -14 8 Q-2 6 -6 -8 Z" />
      <path fill={show ? "#1c1c1c" : "#fff"} d="M8 -8 Q6 8 24 8 Q36 6 30 -8 Z" />
      <path fill={show ? "#4c6e8a" : "#fff"} d="M-32 -150 C-40 -120 -36 -96 -26 -88 H28 C36 -100 36 -128 24 -152 C10 -164 -16 -164 -32 -150 Z" />
      <path fill={c.shirt} d="M-8 -152 L2 -132 L14 -152 Z" />
      <path fill={show ? "#4c6e8a" : "#fff"} d="M-24 -146 C-42 -130 -40 -104 -30 -90 C-22 -82 -16 -88 -18 -100 C-22 -122 -16 -140 -6 -150 Z" />
      <circle cx="-32" cy="-86" r="7" fill={c.skin} />
      <path fill={show ? "#4c6e8a" : "#fff"} d="M20 -146 C36 -132 48 -100 36 -78 L24 -84 C32 -104 26 -128 12 -146 Z" />
      <rect x="30" y="-78" width="22" height="16" rx="2" fill={show ? "#6b4a2f" : "#fff"} />
      <circle cx="2" cy="-180" r="28" fill={c.skin} />
      <path fill={show ? "#3a2a22" : "#fff"} d="M-26 -186 Q-6 -214 24 -184 Q20 -166 -22 -168 Z" />
      <Eye cx={-8} cy={-180} r={7} look={2} s={s} />
      <Eye cx={10} cy={-180} r={7} look={2} s={s} />
      <path d="M-16 -192 Q-8 -186 -2 -192" fill="none" strokeWidth={m} />
      <path d="M4 -192 Q12 -186 18 -192" fill="none" strokeWidth={m} />
      <path d="M-4 -166 H10" fill="none" strokeWidth={m} />
      <circle cx="-18" cy="-138" r="5" fill="none" strokeWidth={t} />
      {/* broken flasher */}
      <g transform="translate(40 -40)">
        <rect x="-8" y="0" width="16" height="8" rx="1" />
        <path d="M-6 -2 Q0 -14 6 -2" />
        <path d="M-2 -6 L4 0" fill="none" strokeWidth={t} />
      </g>
    </g>
  );
}

export function Koschei({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  skates = false,
}: Base & { skates?: boolean }) {
  const { m, t } = sw(s);
  const c = fills(show);
  const skin = show ? "#d5e6c8" : "#fff";
  const hair = show ? "#dedede" : "#fff";
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={hair} d="M-24 -188 C-42 -150 -40 -70 -22 -28 L-6 -36 C-16 -80 -20 -140 -8 -180 Z" />
      <path fill={hair} d="M20 -186 C40 -140 36 -60 18 -24 L4 -34 C14 -78 16 -140 6 -178 Z" />
      <path fill={skin} d="M-12 -150 L-16 -20 H-2 L2 -150 Z" />
      <path fill={skin} d="M10 -150 L8 -20 H24 L26 -150 Z" />
      {skates ? (
        <g fill={c.boots}>
          <path d="M-24 -20 Q-28 0 -10 2 Q2 0 -2 -20 Z" />
          <path d="M6 -20 Q4 2 22 4 Q36 2 30 -20 Z" />
          <circle cx="-18" cy="8" r="3.5" />
          <circle cx="-8" cy="8" r="3.5" />
          <circle cx="12" cy="10" r="3.5" />
          <circle cx="24" cy="10" r="3.5" />
        </g>
      ) : (
        <g fill={skin}>
          <ellipse cx="-8" cy="-4" rx="10" ry="5" />
          <ellipse cx="16" cy="-4" rx="10" ry="5" />
        </g>
      )}
      <path fill={c.jacket} d="M-28 -168 C-36 -140 -32 -118 -22 -108 H24 C32 -122 32 -150 20 -170 C8 -180 -14 -180 -28 -168 Z" />
      <path fill={c.gold} d="M-8 -112 H10 L8 -102 H-6 Z" />
      <circle cx="1" cy="-108" r="3.2" fill="#fff" />
      <path d="M-1 -110 v4 M-3 -108 h4" fill="none" strokeWidth={t} />
      <path fill={c.jacket} d="M-22 -164 C-40 -150 -36 -120 -24 -108 L-10 -112 C-16 -132 -14 -154 -4 -166 Z" />
      <path fill={c.jacket} d="M16 -166 C32 -152 40 -124 28 -106 L16 -110 C24 -130 20 -152 8 -166 Z" />
      <path fill={c.gold} d="M-30 -130 l-8 4 6 8 8 -6 Z" />
      <path fill={c.gold} d="M28 -128 l10 2 -2 8 -8 -4 Z" />
      <circle cx="-26" cy="-104" r="6" fill={skin} />
      <circle cx="30" cy="-102" r="6" fill={skin} />
      <circle cx="2" cy="-198" r="26" fill={skin} />
      <path fill={hair} d="M-20 -200 C-28 -230 -4 -246 2 -220 C-8 -210 -16 -204 -20 -200 Z" />
      <path fill={hair} d="M4 -214 C8 -246 28 -236 30 -206 C20 -200 10 -204 4 -214 Z" />
      <path fill={hair} d="M-8 -230 C2 -258 16 -240 8 -214 C2 -224 -6 -226 -8 -230 Z" />
      <path fill={c.gold} d="M-16 -214 L2 -230 L18 -212 L12 -206 L2 -216 L-10 -206 Z" />
      <path fill={c.gem} d="M-2 -214 L2 -224 L6 -214 L2 -210 Z" />
      <Eye cx={-8} cy={-198} r={6.5} look={1} s={s} />
      <Eye cx={10} cy={-198} r={6.5} look={1} s={s} />
      <path d="M-14 -192 Q-8 -188 -4 -194" fill="none" strokeWidth={t} />
      <path d="M6 -194 Q12 -188 16 -194" fill="none" strokeWidth={t} />
      <path d="M-6 -184 H8" fill="none" strokeWidth={m} strokeDasharray="2 2" />
    </g>
  );
}

export function Gorynych({
  x,
  y,
  s = 1,
  show = false,
}: Base) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={c.dragon} d="M-70 0 C-90 -40 -40 -70 0 -60 C40 -78 110 -40 90 0 C70 16 -40 18 -70 0 Z" />
      <path d="M-40 -20 q16 -12 32 0 M-10 -28 q18 -14 36 0 M30 -22 q16 -12 30 2" fill="none" strokeWidth={t} />
      <ellipse cx="10" cy="-20" rx="36" ry="18" fill={show ? "#d7e7a1" : "#fff"} />
      <path fill={c.dragon} d="M70 -20 C110 -10 130 -40 150 -20 C160 0 120 10 90 -8 Z" />
      <path fill={show ? "#2f6b45" : "#fff"} d="M-20 -50 C-70 -90 -40 -150 10 -120 C30 -150 70 -100 20 -60 Z" />
      <path fill={show ? "#2f6b45" : "#fff"} d="M40 -46 C90 -70 120 -130 70 -140 C50 -100 40 -70 40 -46 Z" />
      {/* necks */}
      <path fill={c.dragon} d="M-36 -40 C-50 -90 -70 -120 -48 -150 L-20 -140 C-30 -110 -24 -80 -10 -50 Z" />
      <path fill={c.dragonLite} d="M-4 -48 C0 -110 6 -150 8 -170 L28 -162 C20 -130 16 -90 20 -48 Z" />
      <path fill={c.dragon} d="M24 -44 C48 -90 70 -130 96 -150 L112 -132 C84 -112 60 -80 46 -46 Z" />
      {/* left older grumpy head */}
      <g>
        <ellipse cx="-46" cy="-162" rx="28" ry="22" fill={c.dragon} />
        <path fill={c.dragon} d="M-66 -176 L-78 -198 L-50 -176 Z" />
        <path fill={c.dragon} d="M-36 -176 L-28 -196 L-16 -170 Z" />
        <ellipse cx="-30" cy="-156" rx="12" ry="8" fill={show ? "#d7e7a1" : "#fff"} />
        <Eye cx={-52} cy={-166} r={6} look={1} lid={2} s={s} />
        <Eye cx={-34} cy={-168} r={6} look={1} lid={2} s={s} />
        <path d="M-54 -178 Q-46 -174 -38 -180" fill="none" strokeWidth={m} />
        <path d="M-40 -150 Q-30 -144 -22 -152" fill="none" strokeWidth={m} />
      </g>
      {/* middle younger head with book */}
      <g>
        <ellipse cx="16" cy="-186" rx="24" ry="20" fill={c.dragonLite} />
        <path fill={c.dragonLite} d="M2 -198 L-2 -218 L16 -198 Z" />
        <path fill={c.dragonLite} d="M22 -200 L30 -220 L36 -194 Z" />
        <ellipse cx="28" cy="-180" rx="10" ry="7" fill={show ? "#f4f7df" : "#fff"} />
        <Eye cx={8} cy={-190} r={7} look={2} s={s} />
        <Eye cx={24} cy={-192} r={7} look={2} s={s} />
        <path d="M18 -174 Q26 -168 32 -176" fill="none" strokeWidth={m} />
        <rect x="34" y="-176" width="28" height="20" rx="2" />
        <path d="M40 -168 H56 M40 -162 H54" fill="none" strokeWidth={t} />
      </g>
      {/* right sleepy head */}
      <g>
        <ellipse cx="108" cy="-156" rx="28" ry="22" fill={c.dragon} />
        <path fill={c.dragon} d="M92 -170 L84 -194 L108 -172 Z" />
        <path fill={c.dragon} d="M116 -172 L128 -194 L136 -164 Z" />
        <ellipse cx="124" cy="-150" rx="12" ry="8" fill={show ? "#d7e7a1" : "#fff"} />
        <path d="M94 -160 Q104 -154 112 -160" fill="none" strokeWidth={m} />
        <path d="M116 -162 Q126 -156 134 -162" fill="none" strokeWidth={m} />
        <path d="M108 -146 Q118 -140 128 -148" fill="none" strokeWidth={m} />
        <path d="M140 -170 q8 -8 6 2" fill="none" strokeWidth={t} />
      </g>
      <path fill={c.dragon} d="M-20 -10 L-36 8 L-8 6 Z" />
      <path fill={c.dragon} d="M40 -8 L56 10 L28 6 Z" />
    </g>
  );
}

export function DedMoroz({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  confused = false,
}: Base & { confused?: boolean }) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={c.coat} d="M-40 -150 C-52 -80 -44 -8 -28 4 H34 C48 -12 46 -90 32 -152 C16 -168 -22 -170 -40 -150 Z" />
      <path fill={c.furTrim} d="M-34 -20 Q2 8 36 -18 L32 4 Q2 16 -30 4 Z" />
      <path fill={c.furTrim} d="M-18 -156 Q2 -136 22 -156 Q16 -146 2 -146 Q-12 -146 -18 -156 Z" />
      <path fill={c.coat} d="M-30 -146 C-50 -130 -46 -96 -34 -80 L-18 -88 C-24 -112 -20 -136 -8 -150 Z" />
      <path fill={c.coat} d="M24 -148 C42 -128 46 -96 32 -76 L18 -84 C26 -110 22 -136 8 -150 Z" />
      <circle cx="-36" cy="-74" r="9" fill={c.furTrim} />
      <circle cx="36" cy="-70" r="9" fill={c.furTrim} />
      <path fill={show ? "#8b5a2b" : "#fff"} d="M-24 2 Q-28 16 -8 14 Q2 12 -2 2 Z" />
      <path fill={show ? "#8b5a2b" : "#fff"} d="M8 2 Q6 16 26 14 Q38 12 32 2 Z" />
      <path fill={c.beard} d="M-22 -150 Q-28 -80 -8 -40 Q2 -70 14 -40 Q28 -90 20 -152 Q8 -138 -22 -150 Z" />
      <path d="M-8 -120 Q2 -100 8 -130 M-4 -90 Q4 -70 10 -96" fill="none" strokeWidth={t} />
      <circle cx="0" cy="-186" r="30" fill={c.skin} />
      <path fill={c.coat} d="M-26 -200 L0 -246 L26 -200 Q0 -188 -26 -200 Z" />
      <path fill={c.furTrim} d="M-28 -200 Q0 -182 28 -200 Q0 -214 -28 -200 Z" />
      <circle cx="0" cy="-248" r="5" fill={c.furTrim} />
      <Eye cx={-10} cy={-186} r={6.5} look={0} lid={confused ? 1 : 0} s={s} />
      <Eye cx={10} cy={-186} r={6.5} look={0} lid={confused ? 1 : 0} s={s} />
      <path d={confused ? "M-16 -198 Q-8 -192 0 -200" : "M-16 -200 Q-8 -206 0 -198"} fill="none" strokeWidth={m} />
      <path d={confused ? "M4 -200 Q12 -192 18 -198" : "M4 -198 Q12 -206 18 -198"} fill="none" strokeWidth={m} />
      <circle cx="0" cy="-176" r="4" fill={show ? "#f0b8b0" : "#fff"} strokeWidth={t} />
      <path d="M46 -120 L62 -170" fill="none" strokeWidth={m * 1.4} />
      <path d="M56 -176 l8 -16 6 14 Z" fill={c.gold} />
      <ellipse cx="-48" cy="-40" rx="16" ry="20" />
    </g>
  );
}

export function Snegurochka({
  x,
  y,
  s = 1,
  flip = false,
  show = false,
  melt = false,
}: Base & { melt?: boolean }) {
  const { m, t } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={show ? "#5dade2" : "#fff"} d="M-28 -120 C-36 -70 -30 -16 -18 0 H22 C32 -20 30 -80 20 -122 C8 -132 -16 -132 -28 -120 Z" />
      <path fill={c.furTrim} d="M-24 -8 Q2 8 24 -6 L20 2 Q2 12 -20 2 Z" />
      <path fill={c.furTrim} d="M-12 -122 Q2 -108 16 -122 Q10 -114 2 -114 Q-6 -114 -12 -122 Z" />
      <path fill={show ? "#f6e7a1" : "#fff"} d="M8 -110 C14 -70 12 -30 16 -8" />
      <circle cx="16" cy="-4" r="5" fill={show ? "#f6e7a1" : "#fff"} />
      <path fill={show ? "#3d7eab" : "#fff"} d="M-16 0 Q-18 12 -4 10 Q4 8 0 0 Z" />
      <path fill={show ? "#3d7eab" : "#fff"} d="M8 0 Q8 12 22 10 Q30 8 24 0 Z" />
      <circle cx="0" cy="-148" r="24" fill={c.skin} />
      <path fill={show ? "#f6e7a1" : "#fff"} d="M-22 -150 Q-8 -170 20 -150 Q8 -140 -16 -142 Z" />
      <path fill={show ? "#f4d03f" : "#fff"} d="M-20 -156 Q0 -186 22 -154 L12 -150 Q0 -168 -12 -150 Z" />
      <circle cx="0" cy="-170" r="3.5" fill={show ? "#d64545" : "#fff"} />
      <Eye cx={-8} cy={-150} r={6} look={1} s={s} />
      <Eye cx={8} cy={-150} r={6} look={1} s={s} />
      <path d="M-6 -136 Q0 -130 6 -136" fill="none" strokeWidth={m} />
      {melt && (
        <g fill="none" strokeWidth={t}>
          <path d="M-10 8 q4 10 0 16" />
          <path d="M6 8 q3 12 0 18" />
          <path d="M16 6 q4 8 1 14" />
        </g>
      )}
    </g>
  );
}

export function Cat({ x, y, s = 1, flip = false, show = false }: Base) {
  const { m, t } = sw(s);
  const fur = show ? "#e6d3b3" : "#fff";
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={fur} d="M-28 -10 C-36 -40 -10 -58 8 -46 C20 -60 40 -36 28 -8 C18 2 -16 2 -28 -10 Z" />
      <path fill={fur} d="M20 -20 C40 -28 48 -8 36 0" />
      <circle cx="0" cy="-62" r="22" fill={fur} />
      <path fill={fur} d="M-16 -74 L-22 -96 L-4 -76 Z" />
      <path fill={fur} d="M6 -78 L14 -100 L22 -74 Z" />
      <path fill={show ? "#f7e7c6" : "#fff"} d="M-14 -78 L-16 -90 L-6 -78 Z" />
      <path fill={show ? "#f7e7c6" : "#fff"} d="M8 -80 L12 -92 L18 -76 Z" />
      <ellipse cx="2" cy="-54" rx="8" ry="6" fill={show ? "#f7e7c6" : "#fff"} />
      <path d="M2 -52 v4" fill="none" strokeWidth={t} />
      <Eye cx={-8} cy={-64} r={5} look={1} s={s} />
      <Eye cx={8} cy={-64} r={5} look={1} s={s} />
      <circle cx="-8" cy="-64" r="8" fill="none" strokeWidth={t} />
      <circle cx="8" cy="-64" r="8" fill="none" strokeWidth={t} />
      <path d="M1 -64 H5" fill="none" strokeWidth={t} />
      <path d="M-6 -48 Q2 -44 8 -48" fill="none" strokeWidth={m} />
      <path d="M-16 -56 h-8 M10 -56 h8" fill="none" strokeWidth={t} />
      {/* theatre mask pushed up */}
      <ellipse cx="20" cy="-86" rx="10" ry="8" />
      <path d="M14 -86 h4 M20 -88 v3" fill="none" strokeWidth={t} />
    </g>
  );
}

export function Firebird({ x, y, s = 1, flip = false, show = false }: Base) {
  const { t } = sw(s);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="0" cy="-10" rx="22" ry="14" fill={show ? "#f39c12" : "#fff"} />
      <circle cx="20" cy="-24" r="12" fill={show ? "#f6c945" : "#fff"} />
      <path fill={show ? "#e74c3c" : "#fff"} d="M12 -32 L16 -46 L26 -32 Z" />
      <path d="M28 -24 l10 -2" fill="none" />
      <Eye cx={22} cy={-26} r={3.4} look={1} s={s} />
      {[
        [-70, 20, "#e74c3c"],
        [-46, 34, "#f39c12"],
        [-24, 42, "#f1c40f"],
        [-2, 36, "#e67e22"],
        [18, 24, "#d35400"],
      ].map(([fx, fy, col], i) => (
        <g key={i}>
          <ellipse cx={Number(fx)} cy={Number(fy)} rx={18 - i} ry="28" transform={`rotate(${-20 + i * 8} ${fx} ${fy})`} fill={show ? String(col) : "#fff"} />
          <circle cx={Number(fx)} cy={Number(fy) + 8} r="4.5" fill="none" strokeWidth={t} />
          <circle cx={Number(fx)} cy={Number(fy) + 8} r="1.6" fill={INK} stroke="none" />
        </g>
      ))}
    </g>
  );
}

export function Mermaid({ x, y, s = 1, flip = false, show = false }: Base) {
  const { m } = sw(s);
  const c = fills(show);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={show ? "#1abc9c" : "#fff"} d="M-12 -40 C-28 0 -10 40 2 70 C8 40 28 10 16 -36 Z" />
      <path d="M-8 -10 Q2 0 12 -8 M-6 16 Q4 26 14 14 M-2 40 Q6 48 12 36" fill="none" strokeWidth={m} />
      <path fill={show ? "#148f77" : "#fff"} d="M-8 64 L2 92 L16 60 Z" />
      <path fill={show ? "#5dade2" : "#fff"} d="M-16 -70 C-24 -50 -8 -36 4 -40 H16 C20 -56 8 -74 -4 -74 C-12 -78 -14 -74 -16 -70 Z" />
      <circle cx="2" cy="-96" r="18" fill={c.skin} />
      <path fill={show ? "#1a5276" : "#fff"} d="M-16 -100 C-8 -130 20 -120 18 -92 C8 -84 -14 -86 -16 -100 Z" />
      <path fill={show ? "#1a5276" : "#fff"} d="M6 -92 C14 -40 8 0 12 20" />
      <Eye cx={-4} cy={-98} r={4.5} look={1} s={s} />
      <Eye cx={8} cy={-98} r={4.5} look={1} s={s} />
      <path d="M-4 -86 Q2 -80 8 -86" fill="none" strokeWidth={m} />
    </g>
  );
}

export function Vodyanoy({ x, y, s = 1, show = false }: Base) {
  const { m, t } = sw(s);
  return (
    <g transform={xf({ x, y, s })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="0" cy="-30" rx="36" ry="30" fill={show ? "#1e8449" : "#fff"} />
      <ellipse cx="0" cy="-24" rx="18" ry="14" fill={show ? "#7dcea0" : "#fff"} />
      <circle cx="0" cy="-70" r="22" fill={show ? "#1e8449" : "#fff"} />
      <path fill={show ? "#145a32" : "#fff"} d="M-20 -78 Q-8 -96 2 -78 Q8 -98 20 -76 Q8 -70 -8 -72 Z" />
      <path d="M-16 -60 Q-24 -40 -10 -36 M0 -58 Q-2 -34 8 -38 M14 -60 Q24 -42 10 -34" fill="none" strokeWidth={t} />
      <Eye cx={-8} cy={-72} r={5} look={0} s={s} />
      <Eye cx={8} cy={-72} r={5} look={0} s={s} />
      <path d="M-6 -60 Q0 -54 6 -60" fill="none" strokeWidth={m} />
    </g>
  );
}

export function FrogPrincess({ x, y, s = 1, show = false }: Base) {
  const { m } = sw(s);
  return (
    <g transform={xf({ x, y, s })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinejoin="round">
      <ellipse cx="0" cy="-16" rx="28" ry="18" fill={show ? "#58d68d" : "#fff"} />
      <circle cx="-10" cy="-34" r="10" fill={show ? "#58d68d" : "#fff"} />
      <circle cx="10" cy="-34" r="10" fill={show ? "#58d68d" : "#fff"} />
      <Eye cx={-10} cy={-34} r={4} look={0} s={s} />
      <Eye cx={10} cy={-34} r={4} look={0} s={s} />
      <path d="M-6 -18 Q0 -12 6 -18" fill="none" strokeWidth={m} />
      <path fill={show ? "#f4d03f" : "#fff"} d="M-12 -44 L0 -58 L12 -44 L6 -42 L0 -50 L-6 -42 Z" />
      <path fill={show ? "#c0392b" : "#fff"} d="M-8 -16 L-18 2 L8 -8 Z" />
    </g>
  );
}

export function Kolobok({ x, y, s = 1, show = false }: Base) {
  const { m, t } = sw(s);
  return (
    <g transform={xf({ x, y, s })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round">
      <circle cx="0" cy="-22" r="26" fill={show ? "#e8c07a" : "#fff"} />
      <path d="M-16 -36 Q0 -28 16 -38" fill="none" strokeWidth={t} />
      <Eye cx={-8} cy={-26} r={4} look={1} s={s} />
      <Eye cx={8} cy={-26} r={4} look={1} s={s} />
      <path d="M-8 -12 Q0 -6 8 -12" fill="none" strokeWidth={m} />
      <path d="M-20 -8 L-30 6 M20 -8 L30 6 M-8 2 L-12 16 M8 2 L12 16" fill="none" strokeWidth={m} />
    </g>
  );
}

export function Gnome({ x, y, s = 1, flip = false, show = false }: Base) {
  const { m } = sw(s);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinecap="round" strokeLinejoin="round">
      <path fill={show ? "#1f6f8b" : "#fff"} d="M-16 -20 L0 -92 L16 -20 Z" />
      <ellipse cx="0" cy="-16" rx="22" ry="16" fill={show ? "#d7c4a3" : "#fff"} />
      <path fill={show ? "#f4f1ea" : "#fff"} d="M-18 -20 Q0 8 18 -20 Q12 -4 0 -2 Q-12 -4 -18 -20 Z" />
      <circle cx="0" cy="-36" r="12" fill={show ? "#f6d2b0" : "#fff"} />
      <Eye cx={-4} cy={-38} r={3} look={1} s={s} />
      <Eye cx={5} cy={-38} r={3} look={1} s={s} />
      <circle cx="0" cy="-32" r="2.4" fill={show ? "#e6a090" : "#fff"} strokeWidth={m * 0.7} />
      <path fill={show ? "#8b5a2b" : "#fff"} d="M-12 0 Q-14 10 -4 8 Q2 6 -2 0 Z" />
      <path fill={show ? "#8b5a2b" : "#fff"} d="M4 0 Q4 10 14 8 Q20 6 16 0 Z" />
      <g transform="translate(26 -28)">
        <rect x="-6" y="0" width="12" height="16" rx="2" />
        <path d="M-4 -2 H4 L6 -10 H-6 Z" fill={show ? "#f4d03f" : "#fff"} />
        <path d="M0 -10 V-18" fill="none" />
      </g>
    </g>
  );
}

export function Bogatyr({ x, y, s = 1, flip = false, show = false }: Base) {
  const { m } = sw(s);
  return (
    <g transform={xf({ x, y, s, flip })} fill="#fff" stroke={INK} strokeWidth={sw(s).o} strokeLinejoin="round">
      <path fill={show ? "#7f8c8d" : "#fff"} d="M-22 -90 C-30 -50 -22 -8 -12 0 H16 C24 -16 22 -60 12 -92 C4 -100 -12 -100 -22 -90 Z" />
      <path d="M-14 -70 H14 M-12 -54 H12 M-10 -38 H10" fill="none" strokeWidth={m} />
      <path fill={show ? "#c0392b" : "#fff"} d="M-8 -92 L-28 -40 L-8 -50 Z" />
      <circle cx="0" cy="-112" r="16" fill={show ? "#f6d2b0" : "#fff"} />
      <path fill={show ? "#b0b7bf" : "#fff"} d="M-14 -116 Q0 -136 14 -116 L8 -110 Q0 -122 -8 -110 Z" />
      <path fill={show ? "#d5d8de" : "#fff"} d="M-8 -100 Q0 -90 10 -100 Q6 -108 0 -108 Q-4 -108 -8 -100 Z" />
      <Eye cx={-5} cy={-112} r={3.2} look={1} s={s} />
      <Eye cx={6} cy={-112} r={3.2} look={1} s={s} />
      <path d="M18 -70 L28 -110" fill="none" />
      <path d="M24 -112 l6 -16 4 14 Z" fill={show ? "#d5d8de" : "#fff"} />
    </g>
  );
}

export function IceCart({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const { t } = sw(s);
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke={INK} strokeWidth={2.2 / s} strokeLinejoin="round">
      <path d="M-70 -20 H70 L58 -70 H-58 Z" />
      <path d="M-58 -70 H58 L46 -96 H-46 Z" fill={fills(false).shirt} />
      <path d="M-30 -84 c8 -16 22 -16 30 0" fill="none" strokeWidth={t} />
      <circle cx="-78" cy="-8" r="12" />
      <circle cx="78" cy="-8" r="12" />
      <circle cx="-78" cy="-8" r="3" fill={INK} stroke="none" />
      <circle cx="78" cy="-8" r="3" fill={INK} stroke="none" />
      <path d="M-20 -46 h16 l-4 18 h-8 Z" />
      <path d="M10 -50 h18 l-4 22 h-10 Z" />
      <path d="M40 -8 H92" fill="none" />
    </g>
  );
}

export function Hut({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke={INK} strokeWidth={2 / s} strokeLinejoin="round">
      <path d="M-18 0 C-28 -30 -8 -70 2 -90" fill="none" />
      <path d="M18 0 C28 -30 8 -70 -2 -90" fill="none" />
      <path d="M-24 -10 l-8 16 M-12 -24 l-8 14 M14 -10 l8 16 M6 -26 l8 14" fill="none" />
      <path d="M-54 -150 L0 -196 L54 -150 V-70 H-54 Z" />
      <path d="M-62 -150 L0 -208 L62 -150" fill="none" />
      <rect x="-16" y="-120" width="32" height="36" />
      <path d="M0 -120 V-84 M-16 -102 H16" fill="none" />
      <rect x="20" y="-132" width="18" height="22" />
    </g>
  );
}

export function Wardrobe({ x, y, s = 1, open = true }: { x: number; y: number; s?: number; open?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" stroke={INK} strokeWidth={2.1 / s} strokeLinejoin="round">
      <path d="M-90 -280 H90 V0 H-90 Z" />
      <path d="M-90 -280 H90 L78 -300 H-78 Z" />
      {open ? (
        <>
          <path d="M-90 -270 L-150 -240 V-20 L-90 -8 Z" />
          <path d="M90 -270 L150 -240 V-20 L90 -8 Z" />
          <circle cx="-128" cy="-130" r="4" />
          <circle cx="128" cy="-130" r="4" />
        </>
      ) : (
        <>
          <path d="M0 -270 V-8" />
          <circle cx="-12" cy="-140" r="4" />
          <circle cx="12" cy="-140" r="4" />
        </>
      )}
    </g>
  );
}

export function Portal({ x, y, rx = 70, ry = 100 }: { x: number; y: number; rx?: number; ry?: number }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="#fff" stroke={INK} strokeWidth="1.6">
      <ellipse cx="0" cy="0" rx={rx} ry={ry} />
      <ellipse cx="0" cy="0" rx={rx * 0.72} ry={ry * 0.72} />
      <ellipse cx="0" cy="0" rx={rx * 0.46} ry={ry * 0.46} />
      <ellipse cx="0" cy="0" rx={rx * 0.22} ry={ry * 0.22} />
      <path d={`M0 ${-ry * 0.18} l8 22 h-16 Z`} fill="none" />
    </g>
  );
}
