export function LogoMark({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="8"
        fill="#132440"
        stroke="#234170"
        strokeWidth="1"
      />
      <path
        d="M22 8L22 12"
        stroke="#6B9CCE"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 32L22 36"
        stroke="#6B9CCE"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="22" cy="22" r="9" stroke="#A3C4E4" strokeWidth="1.5" />
      <path
        d="M22 16V22L26 26"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13L15.5 15.5"
        stroke="#6B9CCE"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M28.5 28.5L31 31"
        stroke="#6B9CCE"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M8 22H12"
        stroke="#6B9CCE"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 22H36"
        stroke="#6B9CCE"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoText({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col leading-tight">
      <span
        className={`font-serif font-bold text-[17px] tracking-tight ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        Canadian Compliance Bureau
      </span>
      <span
        className={`text-[10.5px] font-medium tracking-widest uppercase mt-px ${
          light ? "text-navy-400" : "text-navy-400"
        }`}
      >
        Marketplace Integrity &amp; Oversight
      </span>
    </div>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-3.5 no-underline">
      <LogoMark />
      <LogoText light={light} />
    </a>
  );
}
