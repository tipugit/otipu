/** Flat SVG curve used at a section's bottom edge to scoop into the next section's color. */
export function CurveDivider({ fill, className = "" }: { fill: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 translate-y-px overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[44px] sm:h-[68px] lg:h-[96px]"
      >
        <path d="M0,86 C 320,6 1120,6 1440,86 L1440,120 L0,120 Z" fill={fill} />
      </svg>
    </div>
  );
}
