export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 560"
      className="h-full w-full"
      role="img"
      aria-label="KALBİM topluluğunu temsil eden üç figür ve halkalar"
    >
      {/* concentric dotted rings */}
      <g className="origin-center motion-safe:animate-spin-slow" style={{ transformBox: 'fill-box' }}>
        <circle cx="260" cy="300" r="205" fill="none" stroke="#a7a5a7" strokeWidth="1.4" strokeDasharray="2 9" opacity="0.45" />
      </g>
      <circle cx="260" cy="300" r="160" fill="none" stroke="#92298e" strokeWidth="1.4" strokeDasharray="2 9" opacity="0.4" />
      <circle cx="260" cy="300" r="118" fill="none" stroke="#be8fc0" strokeWidth="1.4" strokeDasharray="2 9" opacity="0.4" />

      {/* gray arch (was gold) */}
      <path
        d="M120 340 a140 140 0 0 1 280 0 v18 h-58 v-18 a82 82 0 0 0 -164 0 v18 h-58 z"
        fill="#a7a5a7"
      />

      {/* figures: lavender (left), neon pink (center), gray (right) */}
      {/* right gray */}
      <g fill="#515152">
        <circle cx="377" cy="278" r="30" />
        <rect x="346" y="300" width="64" height="244" rx="26" />
      </g>
      {/* left lavender */}
      <g fill="#be8fc0">
        <circle cx="158" cy="270" r="30" />
        <rect x="126" y="296" width="64" height="244" rx="32" />
      </g>
      {/* center neon pink (front) */}
      <g fill="#92298e">
        <circle cx="262" cy="232" r="34" />
        <rect x="226" y="262" width="72" height="278" rx="36" />
      </g>

      {/* floating confetti shapes */}
      <circle cx="96" cy="118" r="9" fill="#be8fc0" />
      <rect x="392" y="92" width="20" height="20" rx="5" fill="#be8fc0" transform="rotate(18 402 102)" />
      <circle cx="430" cy="150" r="10" fill="#d1a8d3" />
      <circle cx="455" cy="278" r="7" fill="#92298e" />
      <circle cx="74" cy="340" r="7" fill="#a7a5a7" />
      <rect x="88" y="446" width="16" height="16" rx="4" fill="#92298e" transform="rotate(-20 96 454)" />
      <circle cx="262" cy="178" r="6" fill="#a7a5a7" />
    </svg>
  );
}
