export default function FinalCTA() {
  return (
    <section className="flex flex-col items-center gap-[28px] bg-[var(--color-bg-dark)] py-[90px] px-[120px]">
      <h2 className="text-[68px] font-extrabold text-[var(--color-text-white)] text-center leading-[1.05] tracking-[-2.5px]">
        Know them. Grow them.
      </h2>

      <p className="text-[16px] text-[#FFFFFF50] text-center leading-[1.5] max-w-[520px]">
        Start predicting consumer behavior today with ProWin&apos;s AI-powered
        platform.
      </p>

      <div className="flex items-center gap-[10px]">
        <a
          href="/demo"
          className="flex items-center px-[24px] py-[12px] rounded-[5px] bg-[var(--color-text-white)] text-[14px] font-medium text-[#071519] hover:bg-white/90 transition-colors"
        >
          Get Started
        </a>
        <a
          href="https://wa.me/919871183680"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-[24px] py-[12px] rounded-[5px] border border-[#FFFFFF25] text-[14px] text-[#FFFFFF70] hover:bg-white/5 transition-colors"
        >
          Talk to Sales
        </a>
      </div>
    </section>
  );
}
