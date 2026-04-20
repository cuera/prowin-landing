// Server Component. Pure static — zero JS shipped to the client.
// Numbers below are PLACEHOLDERS. Per the approved plan, this component must be
// fed verified ProWin impact data before it ships in page.tsx. The component is
// imported but commented out in src/app/page.tsx until real numbers land.

const supportingStats = [
  { value: "650+", label: "Producer brands meeting EPR targets" },
  { value: "98%", label: "On-time EPR fulfilment rate" },
  { value: "27", label: "States and union territories covered" },
  { value: "4.2M", label: "MT CO\u2082e avoided through circular recovery" },
];

export default function ImpactProof() {
  return (
    <section
      aria-labelledby="impact-proof-heading"
      className="w-full bg-[var(--color-bg-dark)] py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-[67px]">
        {/* Eyebrow */}
        <p className="text-[12px] font-medium font-mono uppercase tracking-[0.18em] text-[var(--color-text-white-50)] mb-12 sm:mb-16">
          Proof &middot; In numbers
        </p>

        {/* Visually hidden h2 for accessibility — the giant number is decorative display */}
        <h2 id="impact-proof-heading" className="sr-only">
          ProWin impact in numbers
        </h2>

        {/* Asymmetric two-column: lead stat | supporting stats */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16">
          {/* Lead stat panel — the one bold typographic moment */}
          <div className="relative bg-[var(--color-bg-card-dark)] border border-[var(--color-border-light)] p-8 sm:p-12 lg:p-16 transition-colors duration-200 hover:border-[var(--color-border-dark)]">
            <p
              aria-hidden="true"
              className="text-[88px] sm:text-[140px] lg:text-[180px] font-medium leading-[0.9] tracking-[-0.04em] text-white"
            >
              30M+
            </p>
            {/* Single accent use — 1px line, not a fill */}
            <div className="mt-3 h-px w-24 sm:w-32 bg-[var(--color-accent)]" />
            <p className="mt-6 text-[14px] sm:text-[16px] uppercase tracking-[0.12em] text-[var(--color-text-white-60)]">
              Metric tonnes channelized
            </p>
            <p className="mt-6 max-w-[280px] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
              Across India&rsquo;s EPR ecosystem &mdash; e-waste, plastic, battery, and packaging streams unified under one chain of custody.
            </p>
          </div>

          {/* Supporting stats column */}
          <div className="flex flex-col justify-center divide-y divide-[var(--color-border-muted)]">
            {supportingStats.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline gap-6 py-6 first:pt-0 last:pb-0"
              >
                <span className="text-[36px] sm:text-[42px] font-medium tracking-[-0.02em] text-white shrink-0 min-w-[110px]">
                  {s.value}
                </span>
                <span className="text-[14px] leading-[1.4] text-[var(--color-text-white-60)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cert strip */}
        <p className="mt-16 sm:mt-20 text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.18em] font-mono text-[var(--color-text-white-40)]">
          CPCB-authorized &middot; ISO 14001 &middot; ISO 27001 &middot; R2v3 certified
        </p>
      </div>
    </section>
  );
}
