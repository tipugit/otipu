import { APPS } from "../data";

export function MarqueeBand() {
  const items = [...APPS, ...APPS];

  return (
    <div className="border-y border-border bg-card/60 overflow-hidden py-3">
      <div className="marquee-track">
        {items.map((app, i) => (
          <span
            key={`${app.id}-${i}`}
            className="inline-flex items-center gap-2 px-5 text-sm font-semibold font-display whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: app.color }} />
            {app.name}
            <span className="text-muted-foreground font-body font-normal text-xs">· {app.tagline}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
