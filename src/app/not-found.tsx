import Link from "next/link";
import { ArrowLeft, Home, Compass, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center space-y-8 bg-white border border-sand-warm/60 p-8 sm:p-12 shadow-sm rounded-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-subtle border border-sand-warm text-lion-gold text-xs font-mono uppercase tracking-widest">
          <span>Error 404</span>
          <span>•</span>
          <span>Record Not Found</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl text-obsidian tracking-tight">
            Institutional Record Unavailable
          </h1>
          <p className="text-sm text-sand-dark max-w-md mx-auto leading-relaxed">
            The archive ledger, page, or document you requested cannot be located in the Kiran Singh Foundation digital registry.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-obsidian text-porcelain text-xs font-mono uppercase tracking-wider hover:bg-lion-gold hover:text-obsidian transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            Return to Sanctuary
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sand-subtle text-obsidian border border-sand-warm text-xs font-mono uppercase tracking-wider hover:bg-sand-warm transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
            Foundation Archive
          </Link>
          <Link
            href="/emergency"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono uppercase tracking-wider hover:bg-amber-100 transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Crisis Grid
          </Link>
        </div>

        <div className="pt-4 border-t border-sand-warm/40 text-[11px] font-mono text-sand-muted">
          Kiran Singh Foundation • Working towards Change
        </div>
      </div>
    </div>
  );
}
