import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { toast } from "sonner";
import Dither from "../components/react-bits/Dither";

// Edit these values to customize the landing page for your own project.
const SITE = {
  name: "v/ADDONZ",
  tagline: "Menadżer dodatków do gry Margonem",
  description:
    "Całkowicie darmowy i rozbudowany menadżer dodatków. Wszystko, czego potrzebujesz - w jednym miejscu.",
  versionUrl:
    "https://pub-05e2f98fb5b34633ae42c4866ef64081.r2.dev/version.json",
  tampermonkeyUrl: "https://www.tampermonkey.net/",
  scriptUrl: "https://vumocode.github.io/vaddonz/install.user.js",
  discordUrl: "http://discord.gg/NAW8XNyym7",
  supportUrl: "https://buycoffee.to/vumo",
  email: "vumocode@gmail.com",
  year: 2026,
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE.name },
      { name: "description", content: SITE.description },
      { property: "og:title", content: SITE.name },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function DownloadIcon(props: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

function LinkIcon(props: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
}

function useRemoteVersion() {
  const [info, setInfo] = useState<{
    version: string;
    mode: string;
    timestamp?: string;
  } | null>(null);

  useEffect(() => {
    let active = true;
    fetch(SITE.versionUrl, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data?.version) setInfo(data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return info;
}

function formatUpdated(version?: string) {
  if (!version) return null;
  const match = version.match(/^(\d{4})[.-](\d{2})[.-](\d{2})$/);
  if (!match) return version;
  const [, y, m, d] = match;
  return `${d}.${m}.${y.slice(2)}`;
}

const SECTION_IDS = ["top", "install", "support", "faq"] as const;

function usePagedSections(ids: readonly string[]) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const lockRef = useRef(0);

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(ids.length - 1, next));
    if (clamped === indexRef.current) return;
    indexRef.current = clamped;
    lockRef.current = Date.now();
    setIndex(clamped);
  };


  useEffect(() => {
    if (typeof window === "undefined") return;

    const paneAt = (i: number) =>
      document.getElementById(ids[i] ?? "") as HTMLElement | null;

    const canScrollInside = (dir: number) => {
      const pane = paneAt(indexRef.current);
      if (!pane) return false;
      const scroller = pane.querySelector<HTMLElement>("[data-pane-scroll]");
      const el = scroller ?? pane;
      if (el.scrollHeight - el.clientHeight <= 2) return false;
      if (dir > 0) return el.scrollTop + el.clientHeight < el.scrollHeight - 2;
      return el.scrollTop > 2;
    };

    const step = (dir: number) => {
      if (Date.now() - lockRef.current < 700) return;
      goTo(indexRef.current + dir);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || Math.abs(e.deltaY) < 4) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      if (canScrollInside(dir)) return;
      e.preventDefault();
      step(dir);
    };

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      const down = ["ArrowDown", "PageDown", " "].includes(e.key);
      const up = ["ArrowUp", "PageUp"].includes(e.key);
      if (!down && !up) {
        if (e.key === "Home") {
          e.preventDefault();
          goTo(0);
        } else if (e.key === "End") {
          e.preventDefault();
          goTo(ids.length - 1);
        }
        return;
      }
      const dir = down ? 1 : -1;
      if (canScrollInside(dir)) return;
      e.preventDefault();
      step(dir);
    };

    let touchStart = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const end = e.changedTouches[0]?.clientY ?? 0;
      const delta = touchStart - end;
      if (Math.abs(delta) < 50) return;
      const dir = delta > 0 ? 1 : -1;
      if (canScrollInside(dir)) return;
      step(dir);
    };

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1) ?? "";
      const target = ids.indexOf(id);
      if (target < 0) return;
      e.preventDefault();
      lockRef.current = 0;
      goTo(target);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("click", onAnchorClick);

    const initial = ids.indexOf(window.location.hash.slice(1));
    if (initial > 0) goTo(initial);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("click", onAnchorClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { index, goTo, activeId: ids[index] ?? ids[0] ?? "" };
}


function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: ReactNode;
  active: boolean;
}) {
  return (
    <a
      href={href}
      data-active={active}
      aria-current={active ? "true" : undefined}
      className="relative text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-brand transition-colors py-1 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-brand after:rounded-full after:transition-all after:duration-300 after:ease-out data-[active=true]:text-brand data-[active=true]:after:w-full hover:after:w-full"
    >
      {children}
    </a>
  );
}

function useMousePosition(ref: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return { position, isHovering };
}

function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { position, isHovering } = useMousePosition(ref);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, color-mix(in oklab, var(--color-brand) 18%, transparent), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

function FadeInWhenVisible({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className ?? ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-zinc-100 via-brand-400 to-zinc-100 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent ${
        className ?? ""
      }`}
    >
      {children}
    </span>
  );
}

function ChevronIcon(props: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FAQS = [
  {
    question: "Czy v/ADDONZ jest bezpieczny?",
    answer:
      "Każdy skrypt spoza wbudowanych w grę niesie ze sobą ryzyko blokady, ale jako twórca i użytkownik dokładam wszelkich starań, aby wszystko zawarte w menadżerze było bezpieczne w użytku.",
  },
  {
    question: "Czy muszę płacić za używanie dodatku?",
    answer:
      "Nie. Menadżer jest i będzie całkowicie darmowy. Wspieranie jest dobrowolne i nie niesie ze sobą żadnych korzyści typu premium, neon itp.",
  },
  {
    question: "Jakie interfejsy są wspierane?",
    answer:
      "Wspierany jest tylko nowy interfejs gry. Nigdy nie będzie wsparcia dla starego interfejsu.",
  },
  {
    question: "Co zrobić, jeśli dodatek nie działa?",
    answer: (
      <>
        Sprawdź dokładnie instrukcje z zakładki{" "}
        <a
          href="#install"
          className="text-brand hover:text-brand-400 underline underline-offset-2 transition-colors"
        >
          Instalacja
        </a>{" "}
        i wykonaj wszystkie kroki po kolei. Jeśli problem nadal występuje,
        stwórz ticket na naszym serwerze Discord.
      </>
    ),
  },
];

function AccordionItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        open
          ? "bg-zinc-900/90 ring-1 ring-brand/30 shadow-[0_0_24px_-12px_color-mix(in_oklab,var(--color-brand)_12%,transparent)]"
          : "bg-zinc-900/80 ring-1 ring-white/5 hover:ring-brand/20"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span
          className={`text-base font-medium transition-colors ${
            open ? "text-brand-400" : "text-zinc-100"
          }`}
        >
          {question}
        </span>
        <ChevronIcon
          className={`shrink-0 size-5 transition-transform duration-300 ${
            open ? "rotate-180 text-brand" : "text-zinc-500"
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height }}
      >
        <div
          ref={contentRef}
          className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed"
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

function PageBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-black">
      <div className="absolute inset-0" style={{ filter: "blur(1.5px)" }}>
        <Dither
          waveColor={[1, 1, 1]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={1}
          colorNum={18}
          pixelSize={2}
          waveAmplitude={0.35}
          waveFrequency={4.5}
          waveSpeed={0.03}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)",
        }}
      />
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="h-screen w-full shrink-0 relative overflow-hidden"
    >
      <div
        data-pane-scroll
        className="h-full overflow-y-auto overscroll-contain flex items-center justify-center px-6 pt-20 pb-28"
      >
        <div className="max-w-5xl mx-auto relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeInWhenVisible className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-zinc-100 mb-3">
                FAQ
              </h2>
              <p className="text-sm text-zinc-500 text-pretty max-w-[35ch]">
                Najczęściej zadawane pytania i odpowiedzi na temat menadżera.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={150} className="lg:col-span-2 space-y-4">
              {FAQS.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/5 bg-zinc-950/60 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-xs text-zinc-600 text-center md:text-left">
            Grafiki wykorzystane na stronie są własnością Garmory sp. z o.o.
          </span>
          <span className="text-xs text-zinc-500">
            {SITE.name} © {SITE.year}
          </span>
        </div>
      </footer>
    </section>
  );
}


function CopyIconSvg(props: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5"
      />
    </svg>
  );
}

function CheckIcon(props: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function CodeCopy({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Skopiowano do schowka", {
      description: "Wklej link w pasku adresu nowej karty.",
    });
  };

  return (
    <div className="mt-4 flex items-center gap-2 rounded-md bg-zinc-950/60 ring-1 ring-white/10 pl-3 pr-1.5 py-1.5">
      <code className="flex-1 min-w-0 truncate font-mono text-xs text-zinc-300">
        {value}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Kopiuj adres"
        className="shrink-0 inline-flex items-center justify-center size-7 rounded-md bg-zinc-800 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all active:scale-95 cursor-pointer"
      >
        {copied ? (
          <CheckIcon className="size-3.5 text-brand" />
        ) : (
          <CopyIconSvg className="size-3.5 text-zinc-100" />
        )}
      </button>
    </div>
  );
}

type Step = {
  title: string;
  description: string;
  note?: string;
  code?: string;
  action?: { kind: "link"; href: string; label: string };
};

const STEPS: Step[] = [
  {
    title: "Zainstaluj Tampermonkey",
    description:
      "Dodatek wymaga menadżera skryptów użytkownika. Pobierz i zainstaluj rozszerzenie Tampermonkey dla swojej przeglądarki.",
    action: {
      kind: "link",
      href: SITE.tampermonkeyUrl,
      label: "Zainstaluj rozszerzenie",
    },
  },
  {
    title: "Zainstaluj dodatek",
    description: `Otwórz plik userscriptu ${SITE.name}. Tampermonkey wyświetli okno instalacji, potwierdź aby dodać dodatek do przeglądarki.`,
    action: {
      kind: "link",
      href: SITE.scriptUrl,
      label: `Zainstaluj ${SITE.name}`,
    },
  },
  {
    title: "Włącz tryb developera w przeglądarce",
    description:
      "Wejdź pod adres poniżej, a następnie w prawym górnym rogu włącz tryb developera.",
    note: "Tylko przeglądarki oparte na Chromium, np. Chrome, Edge, Brave, Opera.",
    code: "chrome://extensions/",
  },
  {
    title: "Zezwól na skrypty użytkownika w Tampermonkey",
    description:
      "Wejdź w szczegóły rozszerzenia Tampermonkey pod adresem poniżej i włącz opcję zezwalającą na skrypty użytkownika.",
    note: "Tylko przeglądarki oparte na Chromium, np. Chrome, Edge, Brave, Opera.",
    code: "chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo",
  },
  {
    title: "Uruchom stronę docelową",
    description: `Odśwież stronę Margonem. W lewym górnym rogu pojawi się widget ${SITE.name}.`,
  },
];

function Index() {

  const versionInfo = useRemoteVersion();
  const updated = formatUpdated(versionInfo?.version);
  const { index, goTo, activeId: activeSection } = usePagedSections(SECTION_IDS);

  useEffect(() => {
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden text-zinc-300 font-sans select-none">

      <PageBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="size-10 rounded-md bg-zinc-900/40 ring-1 ring-white/[0.04] p-[2px] flex items-center justify-center overflow-hidden">
              <img
                src="/favicon.gif"
                alt={SITE.name}
                className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                width="36"
                height="36"
              />
            </div>
            <span className="font-mono text-sm tracking-tight text-zinc-100">
              {SITE.name}
            </span>
          </a>
          <div className="flex items-center gap-8">
            <NavLink href="#install" active={activeSection === "install"}>
              Instalacja
            </NavLink>
            <NavLink href="#support" active={activeSection === "support"}>
              Wsparcie
            </NavLink>
            <NavLink href="#faq" active={activeSection === "faq"}>
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Section indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {SECTION_IDS.map((id, i) => (
          <button
            key={id}
            type="button"
            aria-label={id}
            onClick={() => goTo(i)}
            className={`size-2.5 rounded-full cursor-pointer transition-all ${
              i === index
                ? "bg-brand scale-125 shadow-[0_0_12px_var(--color-brand)]"
                : "bg-zinc-700 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>

      <main className="h-screen overflow-hidden">
        <div
          className="h-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateY(-${index * 100}%)` }}
        >
          {/* Hero Section */}
          <section
            id="top"
            className="h-screen w-full shrink-0 relative overflow-hidden"
          >
            <div
              data-pane-scroll
              className="h-full overflow-y-auto overscroll-contain flex items-center justify-center px-6 pt-20 pb-10"
            >
          <div className="max-w-5xl mx-auto relative w-full flex flex-col items-center text-center">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-8 hover:border-brand/30 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand animate-pulse-glow" />
              </span>
              <span className="text-[10px] font-mono text-brand uppercase tracking-tighter">
                {updated
                  ? `Ostatnia aktualizacja: ${updated}`
                  : "Sprawdzanie wersji…"}
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl font-semibold leading-none tracking-tight mb-4">
              <GradientText>{SITE.name}</GradientText>
            </h1>
            <p className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-8">
              {SITE.tagline}
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed text-pretty max-w-[56ch] mb-12">
              Całkowicie darmowy i rozbudowany menadżer dodatków.
              <br />
              Wszystko, czego potrzebujesz - w jednym miejscu.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#install"
                className="group relative inline-flex items-center py-2 pr-3 pl-2 bg-brand text-zinc-950 text-sm font-medium rounded-md ring-1 ring-brand ring-offset-2 ring-offset-zinc-950 transition-all hover:shadow-[0_0_32px_-4px_var(--color-brand)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <DownloadIcon className="shrink-0 size-4 mr-2 relative" />
                <span className="relative">Rozpocznij instalację</span>
              </a>
            </div>
          </div>
            </div>
          </section>

          {/* Installation Section */}
          <section
            id="install"
            className="h-screen w-full shrink-0 relative overflow-hidden"
          >
            <div
              data-pane-scroll
              className="h-full overflow-y-auto overscroll-contain flex items-center justify-center px-6 pt-20 pb-10"
            >
          <div className="max-w-5xl mx-auto relative w-full">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <FadeInWhenVisible className="lg:col-span-1">
                <h2 className="text-2xl font-semibold text-zinc-100 mb-3">
                  Instalacja
                </h2>
                <p className="text-sm text-zinc-500 text-pretty max-w-[35ch]">
                  Wykonaj pięć prostych kroków, aby zainstalować {SITE.name} w
                  swojej przeglądarce.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={150} className="lg:col-span-2 space-y-4">
                {STEPS.map((step, i) => (
                  <SpotlightCard
                    key={step.title}
                    className="group p-6 bg-zinc-900/80 rounded-xl ring-1 ring-white/5 hover:ring-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--color-brand)_15%,transparent)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="flex gap-6 relative items-start">
                      <span className="shrink-0 font-mono text-sm leading-6 text-brand/40 group-hover:text-brand transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base text-zinc-100 font-medium group-hover:text-brand-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed mt-1">
                          {step.description}
                        </p>
                        {step.note ? (
                          <p className="text-sm text-zinc-500 mt-1">
                            {step.note}
                          </p>
                        ) : null}
                        {step.code ? <CodeCopy value={step.code} /> : null}
                        {step.action?.kind === "link" ? (
                          <a
                            href={step.action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 py-1 px-2.5 bg-zinc-800 text-zinc-100 text-sm font-medium rounded-md ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all"
                          >
                            <LinkIcon className="shrink-0 size-3.5" />
                            {step.action.label}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </FadeInWhenVisible>
            </div>

          </div>
            </div>
          </section>

          {/* Support Section */}
          <section
            id="support"
            className="h-screen w-full shrink-0 relative overflow-hidden"
          >
            <div
              data-pane-scroll
              className="h-full overflow-y-auto overscroll-contain flex items-center justify-center px-6 pt-20 pb-10"
            >
          <div className="max-w-5xl mx-auto relative w-full">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <FadeInWhenVisible className="lg:col-span-1">
                <h2 className="text-2xl font-semibold text-zinc-100 mb-3">
                  Wsparcie
                </h2>
                <p className="text-sm text-zinc-500 text-pretty max-w-[35ch]">
                  {SITE.name} jest i zawsze będzie darmowy.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={150} className="lg:col-span-2 space-y-4">
                <SpotlightCard className="group p-6 bg-zinc-900/80 rounded-xl ring-1 ring-white/5 hover:ring-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--color-brand)_15%,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="flex gap-6 relative">
                    <span className="shrink-0 font-mono text-xl text-brand/40">
                      01
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base text-zinc-100 font-medium mb-2 group-hover:text-brand-400 transition-colors">
                        Postaw kawę twórcy
                      </h3>
                      <p className="text-sm text-zinc-400 mb-6 text-pretty max-w-[52ch]">
                        Jeśli dodatek Ci pomaga, możesz wesprzeć jego rozwój
                        dobrowolną wpłatą. Każde wsparcie motywuje do dalszej
                        pracy.
                      </p>
                      <a
                        href={SITE.supportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center py-2 pr-3 pl-2 bg-brand text-zinc-950 text-sm font-medium rounded-md transition-all hover:shadow-[0_0_32px_-4px_var(--color-brand)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        <LinkIcon className="shrink-0 size-4 mr-2 relative" />
                        <span className="relative">Wesprzyj na buycoffee.to</span>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard className="group p-6 bg-zinc-900/80 rounded-xl ring-1 ring-white/5 hover:ring-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--color-brand)_15%,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="flex gap-6 relative">
                    <span className="shrink-0 font-mono text-xl text-brand/40">
                      02
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base text-zinc-100 font-medium mb-2 group-hover:text-brand-400 transition-colors">
                        Feedback i pomysły na Discordzie
                      </h3>
                      <p className="text-sm text-zinc-400 mb-6 text-pretty max-w-[52ch]">
                        Masz pomysł na nową funkcję lub znalazłeś błąd? Dołącz na
                        serwer Discord i podziel się opinią, wspólnie tworzymy
                        lepszy dodatek.
                      </p>
                      <a
                        href={SITE.discordUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center py-2 pr-3 pl-2 bg-zinc-800 text-zinc-100 text-sm font-medium rounded-md ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        <LinkIcon className="shrink-0 size-4 mr-2 relative" />
                        <span className="relative">Dołącz do serwera Discord</span>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeInWhenVisible>
            </div>
          </div>
            </div>
          </section>

          <FAQSection />
        </div>
      </main>
    </div>

  );
}
