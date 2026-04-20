export default function Results() {
  const results = [
    {
      img: "https://images.unsplash.com/photo-1758599543112-311aa231f542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Case Study: Acme Corp",
      desc: "How Acme increased revenue by 340% using ProWin's predictive analytics platform.",
    },
    {
      img: "https://images.unsplash.com/photo-1709377418835-304afc0e064a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Webinar: Future of Analytics",
      desc: "Industry leaders discuss the next wave of consumer intelligence.",
    },
    {
      img: "https://images.unsplash.com/photo-1758396756521-7314d116282c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Report: Market Trends 2026",
      desc: "Our comprehensive analysis of emerging consumer trends and market opportunities.",
    },
  ];

  return (
    <section id="results" className="flex flex-col gap-[36px] bg-[var(--color-bg-light)] py-[64px] px-[80px]">
      {/* Head */}
      <div className="flex items-center gap-[10px]">
        <h2 className="text-[38px] font-semibold text-[var(--color-text-primary)] tracking-[-1px]">
          The Results
        </h2>
        <svg
          className="w-[22px] h-[22px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      {/* Grid */}
      <div className="flex gap-[16px] h-[380px]">
        {results.map((r) => (
          <div
            key={r.title}
            className="relative flex-1 rounded-[10px] overflow-hidden bg-[var(--color-bg-gray)]"
          >
            <img
              src={r.img}
              alt={r.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[3px] p-[14px_18px] bg-[#FFFFFFEE]">
              <h3 className="text-[13px] font-semibold text-[var(--color-text-primary)]">
                {r.title}
              </h3>
              <p className="text-[11px] text-[var(--color-text-secondary)] leading-[1.45] max-w-[340px]">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
