import type { AnchorHTMLAttributes, ReactNode } from "react";
import Image from "next/image";

type ChildrenProps = {
  children: ReactNode;
  className?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MicrositeHeader({
  logoSrc,
  logoAlt = "QueryPie",
  homeHref,
  ctaHref,
  ctaLabel = "お問い合わせ",
  links,
}: {
  logoSrc: string;
  logoAlt?: string;
  homeHref: string;
  ctaHref: string;
  ctaLabel?: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-[90%] max-w-[1080px] items-center justify-between">
        <a href={homeHref} className="flex items-center" aria-label={logoAlt}>
          <Image src={logoSrc} alt={logoAlt} width={100} height={28} priority className="h-7 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function MicrositeFooter({
  logoSrc,
  logoAlt = "QueryPie",
  links,
}: {
  logoSrc: string;
  logoAlt?: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-sm text-slate-500">
      <div className="mx-auto flex w-[90%] max-w-[1080px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Image src={logoSrc} alt={logoAlt} width={100} height={28} className="h-6 w-auto opacity-80" />
        <nav className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-200">
              {link.label}
            </a>
          ))}
        </nav>
        <p>© QueryPie AIP. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function HeroSection({ children, className }: ChildrenProps) {
  return (
    <section className={cx("relative overflow-hidden bg-[#05070a] pb-24 pt-36 text-slate-100", className)}>
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 -top-32 h-[600px] w-[600px] rounded-full bg-blue-950/70 blur-[90px]" />
        <div className="absolute -bottom-24 -left-20 h-[520px] w-[520px] rounded-full bg-indigo-950/60 blur-[90px]" />
        <div className="absolute left-[45%] top-[30%] h-[350px] w-[350px] rounded-full bg-blue-800/25 blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="relative z-10 mx-auto grid w-[90%] max-w-[1080px] gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        {children}
      </div>
    </section>
  );
}

export function HeroBadge({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-300">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />
      {children}
    </div>
  );
}

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">{children}</span>;
}

export function PrimaryCta({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cx(
        "inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-[0_20px_50px_-22px_rgba(59,130,246,.9)] transition hover:-translate-y-0.5 hover:shadow-blue-500/30",
        className,
      )}
      {...props}
    />
  );
}

export function SecondaryCta({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cx(
        "inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}

export function Section({ children, id, className }: ChildrenProps & { id?: string }) {
  return (
    <section id={id} className={cx("bg-[#05070a] py-24 text-slate-200", className)}>
      <div className="mx-auto w-[90%] max-w-[1080px]">{children}</div>
    </section>
  );
}

export function SectionIntro({ title, body }: { title: ReactNode; body?: ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-[820px] text-center">
      <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">{body}</p> : null}
    </div>
  );
}

export function Card({ children, className }: ChildrenProps) {
  return (
    <div className={cx("rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_80px_-48px_rgba(15,23,42,.9)]", className)}>
      {children}
    </div>
  );
}

export function StatCard({ value, label }: { value: ReactNode; label: ReactNode }) {
  return (
    <div className="border-r border-white/10 pr-5 last:border-r-0 last:pr-0">
      <strong className="block text-2xl font-black text-white">{value}</strong>
      <span className="mt-1 block text-xs leading-5 text-slate-400">{label}</span>
    </div>
  );
}
