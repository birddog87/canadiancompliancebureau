export function NoticeBar() {
  return (
    <div className="bg-navy-50 border-b border-navy-100 py-3.5">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-3 text-[13.5px] text-navy-700">
        <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 animate-pulse-dot" />
        <span>
          <strong className="font-semibold text-navy-800">
            Active Advisory:
          </strong>{" "}
          The CCB has identified a pattern of employee self-dealing at online
          auction houses in the Greater Toronto and Hamilton Area. If you have
          experienced unfair bidding practices, we encourage you to{" "}
          <a
            href="#complaint"
            className="text-navy-700 underline hover:text-navy-900"
          >
            file a complaint
          </a>
          .
        </span>
      </div>
    </div>
  );
}
