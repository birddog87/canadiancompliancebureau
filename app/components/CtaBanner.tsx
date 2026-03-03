import { FileText } from "./Icons";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-700 py-16 text-center">
      <div className="absolute inset-0 grid-pattern-subtle pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif text-[30px] font-bold text-white mb-3.5 tracking-tight">
          Fair Auctions Are Not Optional
        </h2>
        <p className="text-base text-navy-200 mb-7 max-w-[520px] mx-auto">
          If you&apos;ve experienced unfair practices at a Canadian online
          auction, your complaint matters. Every report strengthens our ability
          to hold operators accountable.
        </p>
        <a
          href="#complaint"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white no-underline bg-red-600 px-7 py-3.5 rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:bg-red-700 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all"
        >
          <FileText className="w-4 h-4" />
          File a Complaint Now
        </a>
      </div>
    </section>
  );
}
