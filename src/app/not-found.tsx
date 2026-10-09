import Link from "next/link";
import { Home, Compass, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-porcelain">
      <div className="max-w-xl w-full text-center space-y-8 bg-white border border-border p-8 sm:p-12 shadow-card rounded-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-porcelain border border-border text-lion-gold-dark text-xs font-mono uppercase tracking-widest rounded-full">
          <span>Error 404</span>
          <span>&bull;</span>
          <span>Record Not Found</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl text-obsidian tracking-tight font-normal">
            Institutional Record Unavailable
          </h1>
          <p className="text-sm text-slate max-w-md mx-auto leading-relaxed">
            The archive ledger, page, or document you requested cannot be located in the Kiran Singh Foundation digital registry.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-obsidian text-porcelain text-xs font-mono uppercase tracking-wider hover:bg-lion-gold hover:text-white transition-colors rounded-full"
          >
            <Home className="w-3.5 h-3.5" />
            Return to Sanctuary
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-porcelain text-obsidian border border-border text-xs font-mono uppercase tracking-wider hover:bg-white hover:border-lion-gold/50 transition-colors rounded-full"
          >
            <Compass className="w-3.5 h-3.5" />
            Foundation Archive
          </Link>
          <Link
            href="/emergency"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-crimson-alert/10 text-crimson-alert border border-crimson-alert/30 text-xs font-mono uppercase tracking-wider hover:bg-crimson-alert/15 transition-colors rounded-full"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Crisis Grid
          </Link>
        </div>

        <div className="pt-4 border-t border-border text-[11px] font-mono text-slate">
          Kiran Singh Foundation &bull; Working towards Change
        </div>
      </div>
    </div>
  );
}
