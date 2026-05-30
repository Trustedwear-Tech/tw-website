import { cn } from "@/lib/utils";

/**
 * On-brand illustration of the enterprise command dashboard.
 * Self-contained SVG (no external assets) themed to the dark corporate palette.
 */
export function EnterpriseDashboardSvg({ className }: { className?: string }) {
  const panel = "hsl(222, 44%, 11%)";
  const tile = "hsl(217, 33%, 14%)";
  const tileLight = "hsl(217, 30%, 18%)";
  const border = "hsl(217, 33%, 24%)";
  const primary = "hsl(221, 83%, 53%)";
  const cyan = "hsl(187, 85%, 53%)";
  const dim = "hsl(215, 20%, 38%)";
  const dimLight = "hsl(215, 20%, 52%)";

  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="Trustedwear enterprise command dashboard"
      className={cn("h-full w-full", className)}
    >
      {/* Panel */}
      <rect x="4" y="4" width="632" height="352" rx="16" fill={panel} stroke={border} />

      {/* Title bar */}
      <line x1="4" y1="44" x2="636" y2="44" stroke={border} />
      <circle cx="26" cy="24" r="4" fill="hsl(0, 72%, 55%)" />
      <circle cx="42" cy="24" r="4" fill="hsl(40, 90%, 55%)" />
      <circle cx="58" cy="24" r="4" fill="hsl(140, 60%, 50%)" />
      <rect x="86" y="18" width="150" height="12" rx="6" fill={tileLight} />
      <rect x="520" y="16" width="96" height="16" rx="8" fill={primary} opacity="0.18" />
      <rect x="534" y="21" width="68" height="6" rx="3" fill={primary} />

      {/* Sidebar */}
      <line x1="160" y1="44" x2="160" y2="356" stroke={border} />
      <rect x="24" y="70" width="112" height="16" rx="6" fill={primary} opacity="0.22" />
      <rect x="34" y="75" width="78" height="6" rx="3" fill={primary} />
      {[110, 142, 174, 206].map((y) => (
        <g key={y}>
          <circle cx="32" cy={y + 4} r="4" fill={dim} />
          <rect x="44" y={y} width="84" height="8" rx="4" fill={tileLight} />
        </g>
      ))}
      <rect x="24" y="300" width="112" height="36" rx="8" fill={tile} stroke={border} />
      <circle cx="44" cy="318" r="8" fill={cyan} opacity="0.25" />
      <rect x="60" y="312" width="60" height="5" rx="2.5" fill={dimLight} />
      <rect x="60" y="321" width="40" height="5" rx="2.5" fill={dim} />

      {/* Map / live operations region */}
      <rect x="184" y="64" width="296" height="176" rx="10" fill={tile} stroke={border} />
      {/* faint grid */}
      <g stroke={border} opacity="0.5">
        <line x1="184" y1="108" x2="480" y2="108" />
        <line x1="184" y1="152" x2="480" y2="152" />
        <line x1="184" y1="196" x2="480" y2="196" />
        <line x1="258" y1="64" x2="258" y2="240" />
        <line x1="332" y1="64" x2="332" y2="240" />
        <line x1="406" y1="64" x2="406" y2="240" />
      </g>
      {/* route */}
      <path
        d="M214 210 C 270 150, 300 200, 348 140 S 430 110, 452 96"
        fill="none"
        stroke={cyan}
        strokeWidth="2"
        strokeDasharray="5 5"
        opacity="0.8"
      />
      {/* live pins with pulse */}
      <g>
        <circle cx="214" cy="210" r="6" fill={primary} />
        <circle cx="214" cy="210" r="6" fill="none" stroke={primary} strokeWidth="1.5">
          <animate attributeName="r" values="6;16" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </g>
      <g>
        <circle cx="452" cy="96" r="6" fill={cyan} />
        <circle cx="452" cy="96" r="6" fill="none" stroke={cyan} strokeWidth="1.5">
          <animate attributeName="r" values="6;16" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>
      <circle cx="332" cy="170" r="5" fill={dimLight} />
      {/* region label */}
      <rect x="196" y="76" width="92" height="9" rx="4.5" fill={dimLight} />

      {/* Stat cards (right) */}
      <g>
        <rect x="496" y="64" width="124" height="82" rx="10" fill={tile} stroke={border} />
        <rect x="510" y="78" width="44" height="7" rx="3.5" fill={dim} />
        <rect x="510" y="94" width="60" height="14" rx="4" fill={primary} opacity="0.85" />
        {/* sparkline bars */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x={510 + i * 18}
            y={132 - (i % 3) * 8 - 6}
            width="10"
            height={(i % 3) * 8 + 6}
            rx="2"
            fill={i === 5 ? cyan : primary}
            opacity={i === 5 ? 1 : 0.55}
          />
        ))}
      </g>
      <g>
        <rect x="496" y="158" width="124" height="82" rx="10" fill={tile} stroke={border} />
        <rect x="510" y="172" width="52" height="7" rx="3.5" fill={dim} />
        <rect x="510" y="188" width="48" height="14" rx="4" fill={cyan} opacity="0.85" />
        {/* line chart */}
        <path
          d="M510 224 L526 214 L542 220 L558 204 L574 210 L590 196 L606 200"
          fill="none"
          stroke={cyan}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Incident list (bottom) */}
      <rect x="184" y="256" width="436" height="84" rx="10" fill={tile} stroke={border} />
      {[
        { y: 272, c: primary },
        { y: 296, c: cyan },
        { y: 320, c: dim },
      ].map((row) => (
        <g key={row.y}>
          <circle cx="202" cy={row.y + 4} r="4" fill={row.c} />
          <rect x="216" y={row.y} width="150" height="8" rx="4" fill={tileLight} />
          <rect x="396" y={row.y} width="90" height="8" rx="4" fill={tileLight} />
          <rect x="540" y={row.y} width="60" height="8" rx="4" fill={row.c} opacity="0.45" />
        </g>
      ))}
    </svg>
  );
}
