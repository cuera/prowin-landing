const FOOTER_ROUTES: Record<string, string> = {
  Platform: "/saas-platform",

  Integrations: "#",
  Changelog: "#",
  About: "/about",
  Blog: "#",
  Careers: "#",
  Contact: "https://wa.me/919871183680",
  Documentation: "#",
  "Help Center": "#",
  "API Reference": "#",
  Status: "#",
};

export default function Footer() {
  const linkColumns = [
    {
      title: "Product",
      links: ["Platform", "Pricing", "Integrations", "Changelog"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "API Reference", "Status"],
    },
  ];

  return (
    <footer className="flex flex-col gap-[40px] bg-[var(--color-bg-dark)] pt-[48px] pb-[32px] px-[80px]">
      {/* Top */}
      <div className="flex justify-between w-full">
        {/* Brand */}
        <div className="flex flex-col gap-[10px] w-[260px]">
          <div className="flex items-center gap-[7px]">

            <span className="text-[15px] font-bold text-[var(--color-text-white)]">
              prowin
            </span>
          </div>
          <p className="text-[12px] text-[var(--color-text-white-25)] leading-[1.5]">
            Predict consumer results
            <br />
            before they happen.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-[64px]">
          {linkColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-[10px]">
              <span className="text-[12px] font-semibold text-[var(--color-text-white)]">
                {col.title}
              </span>
              {col.links.map((link) => (
                <a
                  key={link}
                  href={FOOTER_ROUTES[link] ?? "#"}
                  className="text-[12px] text-[var(--color-text-white-25)] hover:text-[var(--color-text-white)] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#FFFFFF12]" />

      {/* Bottom */}
      <div className="flex items-center justify-between w-full">
        <span className="text-[11px] text-[#FFFFFF30]">
          &copy; 2026 ProWin. All rights reserved.
        </span>
        <div className="flex gap-[20px]">
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[11px] text-[#FFFFFF30] hover:text-[var(--color-text-white)] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
