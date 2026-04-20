export default function Stats() {
  const stats = [
    { value: "10,000+", label: "Active Brands" },
    { value: "2.4B+", label: "Data Points Analyzed" },
    { value: "340%", label: "Avg. Revenue Increase" },
    { value: "99.9%", label: "Uptime SLA" },
  ];

  return (
    <section className="flex flex-col items-center gap-[32px] bg-[var(--color-bg-muted)] py-[48px] px-[120px] border-y border-[var(--color-border-muted)]">
      <p className="text-[14px] text-[var(--color-text-secondary)] text-center">
        Trusted by 10,000+ brands worldwide to drive consumer growth.
      </p>

      <div className="flex justify-around w-full">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-[2px]"
          >
            <span className="text-[30px] font-bold text-[var(--color-text-primary)] tracking-[-0.5px]">
              {s.value}
            </span>
            <span className="text-[12px] text-[var(--color-text-secondary)]">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
