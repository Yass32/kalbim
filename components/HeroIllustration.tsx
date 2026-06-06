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
        <circle cx="260" cy="300" r="205" fill="none" stroke="#C9A23B" strokeWidth="1.4" strokeDasharray="2 9" opacity="0.45" />
      </g>
      <circle cx="260" cy="300" r="160" fill="none" stroke="#B83A52" strokeWidth="1.4" strokeDasharray="2 9" opacity="0.4" />
      <circle cx="260" cy="300" r="118" fill="none" stroke="#4C7A5D" strokeWidth="1.4" strokeDasharray="2 9" opacity="0.4" />

      {/* gold arch */}
      <path
        d="M120 340 a140 140 0 0 1 280 0 v18 h-58 v-18 a82 82 0 0 0 -164 0 v18 h-58 z"
        fill="#D4A849"
      />

      {/* figures: green (left), crimson (center), gold (right) */}
      {/* right gold */}
      <g fill="#D4A849">
        <circle cx="372" cy="278" r="26" />
        <rect x="346" y="300" width="52" height="240" rx="26" />
      </g>
      {/* left green */}
      <g fill="#4C7A5D">
        <circle cx="158" cy="270" r="30" />
        <rect x="126" y="296" width="64" height="244" rx="32" />
      </g>
      {/* center crimson (front) */}
      <g fill="#B83A52">
        <circle cx="262" cy="232" r="34" />
        <rect x="226" y="262" width="72" height="278" rx="36" />
      </g>

      {/* floating confetti shapes */}
      <circle cx="96" cy="118" r="9" fill="#B6A4E0" />
      <rect x="392" y="92" width="20" height="20" rx="5" fill="#4C7A5D" transform="rotate(18 402 102)" />
      <circle cx="430" cy="150" r="10" fill="#F2A07E" />
      <circle cx="455" cy="278" r="7" fill="#B83A52" />
      <circle cx="74" cy="340" r="7" fill="#D4A849" />
      <rect x="88" y="446" width="16" height="16" rx="4" fill="#B83A52" transform="rotate(-20 96 454)" />
      <circle cx="262" cy="178" r="6" fill="#D4A849" />
    </svg>
  );
}
