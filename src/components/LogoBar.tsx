export default function LogoBar() {
  const logos = [
    { name: "Notion", shape: "square" },
    { name: "Figma", shape: "circle" },
    { name: "Linear", shape: "rounded" },
    { name: "Vercel", shape: "triangle" },
    { name: "Stripe", shape: "square-sm" },
    { name: "Slack", shape: "square-sm" },
  ];

  return (
    <section className="flex items-center justify-between h-[72px] px-[160px] bg-[var(--color-bg-light)]">
      {logos.map((logo) => (
        <div key={logo.name} className="flex items-center gap-[6px]">
          <div
            className={`w-[18px] h-[18px] bg-[var(--color-border-logo)] ${
              logo.shape === "circle"
                ? "rounded-full"
                : logo.shape === "rounded"
                ? "rounded-[9px]"
                : logo.shape === "triangle"
                ? "clip-triangle"
                : "rounded-[3px]"
            }`}
            style={
              logo.shape === "triangle"
                ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }
                : undefined
            }
          />
          <span className="text-[14px] font-semibold text-[#0A0A0A50]">
            {logo.name}
          </span>
        </div>
      ))}
    </section>
  );
}
