export default function Testimonial() {
  const avatars = [
    "https://images.unsplash.com/photo-1737000703763-5a2fe16bdbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  ];

  return (
    <section className="flex flex-col items-center gap-[28px] bg-[var(--color-bg-light)] py-[72px] px-[200px] border-y border-[var(--color-border-muted)]">
      <p className="text-[34px] font-medium text-[var(--color-text-primary)] text-center leading-[1.3] tracking-[-0.5px] max-w-[600px]">
        &ldquo;The most powerful
        <br />
        consumer intelligence
        <br />
        we&rsquo;ve used.&rdquo;
      </p>

      {/* Avatars */}
      <div className="flex -space-x-[8px]">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="w-[36px] h-[36px] rounded-full overflow-hidden border-2 border-[var(--color-text-white)]"
          >
            <img
              src={src}
              alt={`Avatar ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center gap-[6px]">
        <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-text-primary)]" />
        <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-border-gray)]" />
        <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-border-gray)]" />
      </div>
    </section>
  );
}
