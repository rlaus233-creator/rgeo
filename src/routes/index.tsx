import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";

const faqs = [
  { q: "RGEO Labs(알지오랩스)는 어떤 회사인가요?", a: "RGEO Labs(알지오랩스)는 개발자 채용 없이 웹·앱·AI 서비스를 시작할 수 있도록 돕는 AI 시대의 기술 운영 파트너입니다. 월 구독형 개발 구조를 기반으로 초기 서비스 출시의 문턱을 낮추고 빠른 MVP 검증이 가능하도록 설계합니다. 웹사이트 제작, 앱 개발, 유지보수, AI 자동화, GEO·SEO 최적화까지 하나의 팀으로 함께합니다." },
  { q: "GEO란 무엇인가요?", a: "GEO(Generative Engine Optimization)는 ChatGPT·Perplexity·Google AI 같은 생성형 AI 검색 환경에서 브랜드와 서비스가 더 잘 이해되고 언급될 수 있도록 구조화하는 최적화 방식입니다. SEO가 구글 검색 최적화라면, GEO는 AI 검색 최적화입니다." },
  { q: "GEO·SEO는 왜 개발 단계부터 해야 하나요?", a: "웹사이트 구조, FAQ, 콘텐츠 흐름, 메타 정보는 처음 설계될 때부터 함께 고려해야 AI와 검색엔진이 더 쉽게 이해할 수 있습니다. 나중에 추가하는 것보다 개발 단계에서 함께 설계하는 것이 훨씬 효율적입니다." },
  { q: "개발자 채용 대비 어떤 점이 다른가요?", a: "개발자 채용에는 연봉 외에도 채용 기간, 4대보험, 장비, 운영 비용, 이직 리스크가 발생합니다. RGEO Labs는 월 구독 기반으로 개발·운영·GEO·SEO까지 하나의 팀으로 대응해 초기 부담과 운영 리스크를 낮출 수 있습니다." },
  { q: "초기 개발비 0원으로도 가능한가요?", a: "프로젝트 규모와 협업 방식에 따라 초기 구축 비용 부담 없이 시작 가능한 경우가 있습니다. 다만 이후 월 운영·개발 구독 비용은 발생하며, 모든 프로젝트가 동일 조건으로 진행되지는 않습니다." },
  { q: "앱 개발도 가능한가요?", a: "네. 웹서비스, 관리자 시스템, iOS·Android 앱까지 통합적으로 대응합니다. 프로젝트 목적과 예산에 따라 가장 효율적인 방식으로 MVP 구조를 먼저 제안드립니다." },
  { q: "이미 운영 중인 서비스도 맡길 수 있나요?", a: "가능합니다. 기존 서비스의 유지보수, 기능 개선, 신규 기능 추가, AI 자동화, GEO·SEO 구조 개선까지 함께 진행할 수 있습니다." },
  { q: "AI·노코드·바이브 코딩으로 만든 서비스도 운영이 가능한가요?", a: "최근에는 AI·노코드·바이브 코딩으로 빠르게 MVP를 만드는 경우가 많아졌습니다. 하지만 실제 운영 단계에서는 유지보수, 확장성, 배포 구조, 데이터 관리 문제가 발생하는 경우도 많습니다. RGEO Labs는 빠른 제작뿐 아니라 장기적으로 운영 가능한 구조까지 함께 고려합니다." },
  { q: "월 구독형 개발은 어떻게 진행되나요?", a: "상담 후 필요한 기능과 우선순위를 먼저 정리하고, 월 단위로 개발·수정·배포·운영 개선을 이어갑니다. 처음부터 크게 만들기보다 작게 출시하고 빠르게 개선하는 방식을 권장합니다." },
];

function Icon({ name, size = 22, color = "currentColor" }: { name: string; size?: number; color?: string }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, ReactNode> = {
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z" />,
    trending: <><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>,
    server: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></>,
    monitor: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
    search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
    sparkles: <><path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" /><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></>,
    building: <><rect x="4" y="2" width="16" height="20" rx="1" /><line x1="9" y1="14" x2="15" y2="14" /></>,
    repeat: <><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, center = false }: { children: ReactNode; delay?: number; center?: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`, textAlign: center ? "center" as const : undefined }}>
      {children}
    </div>
  );
}


function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{ borderBottom: "1px solid rgba(255,255,255,.08)", padding: "24px 0", cursor: "pointer" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
        <span style={{ fontSize: "clamp(14px,1.8vw,17px)", fontWeight: 600, color: "#f0ece8", lineHeight: 1.5 }}>{q}</span>
        <span style={{ color: "#7eecd4", fontSize: 22, flexShrink: 0, transition: "transform .3s", transform: open ? "rotate(45deg)" : "none", display: "inline-block" }}>+</span>
      </div>
      {open && <p style={{ fontSize: 14, color: "rgba(255,255,255,.45)", lineHeight: 1.85, marginTop: 14, maxWidth: 680 }}>{a}</p>}
    </div>
  );
}

function Avatar({ seed }: { seed: string }) {
  return (
    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=transparent`}
      alt="" width={72} height={72}
      style={{ borderRadius: "50%", background: "#fff", border: "2px solid #f0f0f0", flexShrink: 0 }} />
  );
}

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "RGEO Labs",
  alternateName: "알지오랩스",
  serviceType: "월 구독형 개발·운영 파트너",
  provider: { "@type": "Organization", name: "RGEO Labs", alternateName: "알지오랩스", url: "https://rgeo.ai", email: "hello@rgeo.ai" },
  areaServed: "KR",
  description: "RGEO Labs(알지오랩스)는 개발자 채용 없이 웹·앱·AI 서비스를 시작할 수 있도록 돕는 AI 시대의 기술 운영 파트너입니다. 웹·앱·MVP 개발부터 유지보수, AI 자동화, GEO·SEO 구조 설계까지 하나의 팀이 함께합니다.",
  offers: { "@type": "Offer", priceCurrency: "KRW", availability: "https://schema.org/InStock", description: "월 구독형 개발·운영 구조 · 초기 비용 부담 완화" }
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RGEO Labs",
  alternateName: "알지오랩스",
  url: "https://rgeo.ai",
  logo: "https://rgeo.ai/og.jpg",
  description: "RGEO Labs(알지오랩스)는 AI 시대의 기술 운영 파트너입니다."
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RGEO Labs(알지오랩스) — AI 시대 기술 운영 파트너" },
      { name: "description", content: "RGEO Labs(알지오랩스)는 개발자 채용 없이 웹·앱·MVP 개발, AI 자동화, 유지보수, GEO·SEO 최적화를 함께 제공하는 월 구독형 기술 운영 파트너입니다." },
      { property: "og:title", content: "RGEO Labs(알지오랩스) — 월 구독형 개발·운영 파트너" },
      { property: "og:description", content: "개발자 채용 대신 월 구독으로 웹·앱·MVP 개발부터 AI 자동화, GEO·SEO 구조 설계까지 한 팀이 함께합니다." },
      { property: "og:image", content: "https://rgeo.ai/og.jpg" },
      { property: "og:url", content: "https://rgeo.ai" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://rgeo.ai" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(SERVICE_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(ORG_JSONLD) },
    ],
  }),
  component: Index,
});

function Index() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif", background: "#fff", color: "#111", overflowX: "hidden" }}>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        *{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        ::selection{background:#7eecd4;color:#000;}
        .btn-dark{display:inline-flex;align-items:center;gap:8px;background:#0a0a0a;color:#fff;font-weight:700;font-size:15px;padding:16px 32px;border-radius:100px;text-decoration:none;border:none;cursor:pointer;transition:all .2s;font-family:inherit;}
        .btn-dark:hover{background:#333;transform:translateY(-2px);}
        .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#111;font-weight:700;font-size:15px;padding:15px 32px;border-radius:100px;text-decoration:none;border:2px solid #ddd;cursor:pointer;transition:all .2s;font-family:inherit;}
        .btn-outline:hover{border-color:#111;background:#f9f9f9;}
        .btn-mint{display:inline-flex;align-items:center;gap:8px;background:#7eecd4;color:#000;font-weight:700;font-size:15px;padding:16px 32px;border-radius:100px;text-decoration:none;border:none;cursor:pointer;transition:all .2s;font-family:inherit;}
        .btn-mint:hover{background:#5de0c5;transform:translateY(-2px);}
        .sw{background:#fff;color:#111;}
        .sb{background:#0a0a0a;color:#fff;}
        .sg{background:#f7f7f7;color:#111;}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .kakao-quick{display:none!important;}
        @media(max-width:768px){
          .hm{display:none!important;}
          .mc{flex-direction:column!important;}
          .kakao-quick{display:flex!important;}
        }
        input:focus,textarea:focus,select:focus{outline:none;border-color:#7eecd4!important;}
        a{font-family:inherit;}
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrollY > 60 ? "rgba(255,255,255,.95)" : "transparent", backdropFilter: scrollY > 60 ? "blur(12px)" : "none", borderBottom: scrollY > 60 ? "1px solid rgba(0,0,0,.06)" : "none", transition: "all .3s", padding: "0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#0a0a0a", letterSpacing: "-.03em" }}>RGEO Labs</span>
            <span style={{ fontSize: 11, color: "#999", fontWeight: 500 }}>알지오랩스</span>
          </a>
          <div className="hm" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {[["서비스", "#services"], ["팀", "#team"], ["비용", "#pricing"], ["FAQ", "#faq"]].map(([t, h]) => (
              <a key={t} href={h} style={{ fontSize: 14, color: "#555", textDecoration: "none", fontWeight: 500 }}>{t}</a>
            ))}
          </div>
          <a href="#apply" className="btn-dark hm" style={{ padding: "10px 22px", fontSize: 14 }}>무료 상담 신청</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="sw" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", textAlign: "center" }}>
        <Reveal center>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f0fdf9", border: "1px solid #7eecd4", borderRadius: 100, padding: "6px 16px", marginBottom: 40 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7eecd4", display: "inline-block" }} />
            <span style={{ fontSize: 13, color: "#059669", fontWeight: 600 }}>개발자 채용 대신 월 구독으로</span>
          </div>
        </Reveal>
        <Reveal center delay={0.1}>
          <h1 style={{ fontSize: "clamp(40px,7vw,88px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.05, marginBottom: 32, color: "#0a0a0a" }}>
            월 구독형 개발팀<br />
            <span style={{ background: "linear-gradient(110deg,#0a0a0a 0%,#059669 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>웹·앱·AI 자동화</span><br />
            AI시대 운영파트너
          </h1>
        </Reveal>

           <Reveal center delay={0.3}>
          <div style={{ display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center",marginBottom:64 }}>
            <a href="#apply" className="btn-dark">무료 상담 신청 →</a>
            <a href="http://pf.kakao.com/_HyuxjX/chat" className="btn-outline" target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#191919"><path d="M12 3C6.477 3 2 6.477 2 10.667c0 2.676 1.82 5.028 4.56 6.365L5.5 21l4.215-2.31c.74.105 1.503.16 2.285.16 5.523 0 10-3.477 10-7.667S17.523 3 12 3z"/></svg>
              카카오톡 상담
            </a>
          </div>
        </Reveal>
        <Reveal center delay={0.4}>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center", paddingTop: 40, borderTop: "1px solid #f0f0f0" }}>
            {[["초기 비용 0원~", "가능"], ["월 50만원~", "부터 시작"], ["대기업 포함", "파트너십 운영 중"], ["높은 재계약률", "2~3개월 지속 협업"]].map(([v, l]) => (
              <div key={v} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 900, color: "#0a0a0a", letterSpacing: "-.03em" }}>{v}</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MARQUEE */}
      <div className="sb" style={{ padding: "16px 0", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ display: "flex", width: "max-content", animation: "marquee 34s linear infinite" }}>
          {[...Array(2)].map((_, di) => (
            <div key={di} style={{ display: "flex", alignItems: "center" }}>
              {["외주 맡겼다가 런칭도 못 하고 연락이 끊겼다", "만들었는데 아무도 모른다. 노출이 안 된다", "개발사 견적이 수천만 원부터 시작해 포기했다", "MVP만 먼저 만들고 싶은데 그것도 비용이 너무 크다", "운영 중인데 유지보수 해줄 개발자가 없다", "개발자 연봉이 부담되서 채용을 못 하고 있다"].map((t, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 24px", fontSize: 14, color: "rgba(255,255,255,.35)", whiteSpace: "nowrap", fontWeight: 500 }}>
                  <span style={{ color: "#7eecd4", fontSize: 10 }}>◆</span>{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="sb" style={{ padding: "200px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal center>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7eecd4", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 32 }}>현실</p>
            <h2 style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#fff" }}>
              개발자가 없어서,<br />개발비가 없어서<br />시작 못하고 있다면
            </h2>
          </Reveal>
        </div>
      </section>

      {/* PAIN POINTS - 캐릭터 카드 */}
      <section className="sw" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#059669", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>이런 상황, 혹시 공감되시나요?</p>
            <h2 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#0a0a0a", marginBottom: 64 }}>
              개발 때문에 멈춰있는 분들이<br />생각보다 많습니다
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 72 }}>
            {[
              { seed: "startup", name: "스타트업 창업자", situation: "개발사 견적이\n수천만원부터 시작해요", sub: "아이디어는 있는데 비용이 너무 커서 시작을 못 하고 있어요", border: "#e0ecf8", bg: "#f8fbff" },
              { seed: "merchant", name: "소상공인 사장님", situation: "외주 맡겼다가\n런칭도 못 했어요", sub: "계약금 줬는데 연락이 끊겼어요. 이제 누굴 믿어야 하나요", border: "#f5ddd8", bg: "#fefaf9" },
              { seed: "operator", name: "서비스 운영자", situation: "개발자가 나갔는데\n코드를 아무도 몰라요", sub: "버그가 생겨도 고칠 사람이 없어요. 서비스가 멈출 것 같아요", border: "#d8eed8", bg: "#f9fef9" },
              { seed: "vibecoder", name: "바이브코더", situation: "AI로 만들었는데\n운영이 안 돼요", sub: "만드는 건 됐는데 버그 수정, 확장, 배포를 어떻게 해야 할지 모르겠어요", border: "#e4d8f5", bg: "#fdfaff" },
              { seed: "enterprise", name: "중소기업 담당자", situation: "개발자 채용을\n6개월째 못 하고 있어요", sub: "연봉이 너무 높고 채용도 어려워요. 그 사이 서비스는 멈춰있어요", border: "#d8e4f5", bg: "#f9fbff" },
              { seed: "solo", name: "1인 창업자", situation: "만들었는데\n아무도 못 찾아요", sub: "열심히 만들었는데 구글에도 안 나오고 방문자가 없어요", border: "#f5e8d8", bg: "#fefcf8" },
            ].map(({ seed, name, situation, sub, border, bg }, i) => (
              <Reveal key={name} delay={i * 0.07}>
                <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 20, padding: "28px 22px" }}>
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=transparent`} alt={name} width={72} height={72}
                    style={{ borderRadius: "50%", background: "#fff", border: `2px solid ${border}`, marginBottom: 16, display: "block" }} />
                  <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", marginBottom: 10, border: `1px solid ${border}`, boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "#0a0a0a", lineHeight: 1.45, whiteSpace: "pre-line" }}>{situation}</p>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#aaa", marginBottom: 5 }}>{name}</div>
                  <p style={{ fontSize: 13, color: "#999", lineHeight: 1.65 }}>{sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 개발자 채용 vs 월 구독 비교 박스 */}
          <Reveal>
            <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid #e8e8e8" }}>
              {/* 모바일: 세로 / 데스크탑: 가로 */}
              <style>{`
                @media(max-width:640px){
                  .compare-grid{display:flex!important;flex-direction:column;}
                  .compare-header{display:flex!important;flex-direction:column;}
                  .compare-header>div{border-right:none!important;border-bottom:1px solid rgba(255,255,255,.08);}
                  .compare-row{display:flex!important;flex-direction:column;}
                  .compare-row>div{border-right:none!important;border-bottom:1px solid #f0f0f0;}
                  .compare-row>div:last-child{border-bottom:none;}
                }
              `}</style>
              {/* 헤더 */}
              <div className="compare-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#0a0a0a" }}>
                <div style={{ padding: "20px 24px", borderRight: "1px solid rgba(255,255,255,.08)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.3)", letterSpacing: ".1em", marginBottom: 4 }}>기존 방식</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>개발자 직접 채용</div>
                </div>
                <div style={{ padding: "20px 24px", background: "rgba(126,236,212,.08)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#7eecd4", letterSpacing: ".1em", marginBottom: 4 }}>추천 방식</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#7eecd4" }}>RGEO Labs 구독</div>
                </div>
              </div>
              {/* 항목들 */}
              {[
                ["연봉 6,000~8,000만 원 + 4대보험", "채용 대비 낮은 월 비용"],
                ["장비·복지·퇴직금 추가 비용", "즉시 시작 · 공백 없음"],
                ["이직 리스크 · 채용 공백 기간", "웹·앱·GEO·SEO 풀커버"],
                ["채용에만 평균 4개월 소요", "기술 방향 함께 설계"],
                ["한 명의 스택에 기술이 한정", "장기 파트너십 구조"],
              ].map(([bad, good], i) => (
                <div key={i} className="compare-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: 10, borderRight: "1px solid #f0f0f0" }}>
                    <span style={{ color: "#e53e3e", fontSize: 10, flexShrink: 0 }}>✕</span>
                    <span style={{ fontSize: 14, color: "#888" }}>{bad}</span>
                  </div>
                  <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: 10, background: i % 2 === 0 ? "#fafffe" : "#f5fefc" }}>
                    <span style={{ color: "#059669", fontSize: 10, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#0a0a0a", fontWeight: 500 }}>{good}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIBE CODING */}
      <section className="sb" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal center>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7eecd4", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>바이브 코딩으로 만드셨나요?</p>
            <h2 style={{ fontSize: "clamp(24px,4vw,48px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#fff", marginBottom: 20, textAlign: "center" }}>
              직접 만드신 거 대단해요.<br /><span style={{ color: "#7eecd4" }}>저희가 거기서부터 함께합니다.</span>
            </h2>
            <p style={{ fontSize: "clamp(14px,2vw,17px)", color: "rgba(255,255,255,.45)", lineHeight: 1.75, textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
              운영, 버그 수정, 확장까지<br />만드는 것보다 그 이후가 더 중요합니다
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[["wrench", "버그 수정", "AI가 만든 코드, 수정할 사람이 없을 때"], ["trending", "확장 대응", "사용자 늘어날 때 구조가 버티지 못할 때"], ["gear", "운영 지속", "배포·모니터링·유지보수를 이어갈 때"]].map(([icon, title, desc], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, padding: "28px 22px", textAlign: "center" }}>
                  <div style={{ marginBottom: 12, color: "#7eecd4", display: "flex", justifyContent: "center" }}><Icon name={icon} size={28} /></div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.65 }}>{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="sw" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#059669", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>서비스</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#0a0a0a", marginBottom: 16 }}>
              MVP만이 아닙니다.<br />전부 합니다.
            </h2>
            <p style={{ fontSize: "clamp(14px,2vw,17px)", color: "#666", lineHeight: 1.7, maxWidth: 520, marginBottom: 64 }}>
              처음 만드는 것부터 이미 운영 중인 서비스까지,<br />웹부터 앱까지, 개발부터 노출까지
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
            {[
              ["웹 서비스 · SaaS", "아이디어를 실제 운영 가능한 서비스로 구현합니다"],
              ["iOS · Android 앱", "네이티브·크로스플랫폼 환경 모두 대응합니다"],
              ["유지보수 · 운영", "기존 코드 인수부터 개선·운영까지 지속 대응합니다"],
              ["MVP · 프로토타입", "빠른 제작으로 시장 반응을 먼저 검증합니다"],
              ["AI 자동화", "반복 업무를 자동화하고 AI 도구를 연동합니다"],
              ["GEO · SEO 설계", "AI 검색과 구글에 발견되는 구조를 처음부터 설계합니다"],
            ].map(([title, desc], i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div style={{ padding: "40px 36px", background: i % 2 === 0 ? "#f9f9f9" : "#fff", border: "1px solid #f0f0f0", transition: "background .2s", cursor: "default" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f0fdf9")}
                  onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "#f9f9f9" : "#fff")}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#ccc", marginBottom: 16 }}>0{i + 1}</div>
                  <div style={{ fontSize: "clamp(16px,2vw,20px)", fontWeight: 800, color: "#0a0a0a", marginBottom: 10, letterSpacing: "-.02em" }}>{title}</div>
                  <div style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* GEO 강조 배너 */}
          <Reveal delay={0.2}>
            <div style={{ marginTop: 2, padding: "32px 36px", background: "#f0fdf9", border: "1px solid #7eecd4", display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
              <div style={{ flexShrink: 0, color: "#059669" }}><Icon name="globe" size={24} /></div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#0a0a0a", marginBottom: 8 }}>개발과 동시에 GEO·SEO 구조를 심습니다</div>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75 }}>
                  <strong>GEO</strong>는 ChatGPT·Perplexity·Google AI 같은 AI 검색에서 내 서비스가 먼저 언급되도록 구조화하는 최적화입니다.
                  처음 설계부터 AI 검색과 구글에 발견되는 구조로 시작합니다. 런칭 시점부터 노출 효과가 시작됩니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GEO 섹션 */}
      <section className="sb" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal center>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7eecd4", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>GEO · AI 검색 최적화</p>
            <h2 style={{ fontSize: "clamp(28px,4.5vw,56px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#fff", marginBottom: 24, textAlign: "center" }}>
              요즘은 AI에 나오지 않으면<br /><span style={{ color: "#7eecd4" }}>없는 거나 마찬가지입니다.</span>
            </h2>
            <p style={{ fontSize: "clamp(14px,2vw,18px)", color: "rgba(255,255,255,.45)", lineHeight: 1.8, textAlign: "center", maxWidth: 580, margin: "0 auto 56px" }}>
              구글 검색만으로는 부족합니다. 이제 사람들은 ChatGPT, Perplexity, Google AI에게 먼저 물어봅니다.
              거기서 당신의 서비스가 언급되지 않으면, 존재하지 않는 것과 같습니다.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { icon: "search", title: "SEO", desc: "구글·네이버 검색 최적화.\n키워드로 검색했을 때 상위에 노출되는 구조", label: "기존 방식" },
              { icon: "sparkles", title: "GEO", desc: "AI 검색 최적화.\nChatGPT·Perplexity가 질문에 답할 때 내 서비스를 언급하는 구조", label: "새로운 기준", highlight: true },
            ].map(({ icon, title, desc, label, highlight }) => (
              <Reveal key={title}>
                <div style={{ background: highlight ? "rgba(126,236,212,.08)" : "rgba(255,255,255,.04)", border: `1px solid ${highlight ? "rgba(126,236,212,.25)" : "rgba(255,255,255,.08)"}`, borderRadius: 20, padding: "32px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span style={{ color: highlight ? "#7eecd4" : "#fff", display: "flex" }}><Icon name={icon} size={24} /></span>
                    <span style={{ fontSize: 22, fontWeight: 900, color: highlight ? "#7eecd4" : "#fff" }}>{title}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: highlight ? "#7eecd4" : "rgba(255,255,255,.3)", background: highlight ? "rgba(126,236,212,.12)" : "rgba(255,255,255,.06)", padding: "3px 10px", borderRadius: 100 }}>{label}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.8, whiteSpace: "pre-line" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal center delay={0.15}>
            <div style={{ background: "rgba(126,236,212,.06)", border: "1px solid rgba(126,236,212,.15)", borderRadius: 16, padding: "24px 28px", textAlign: "center" }}>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", lineHeight: 1.8 }}>
                RGEO Labs는 <strong style={{ color: "#7eecd4" }}>개발 단계부터 GEO·SEO 구조를 함께 설계</strong>합니다.<br />
                
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* TEAM */}
      <section id="team" className="sg" style={{ padding: "120px 24px" }}>
        <style>{`
          .team-roles{ grid-template-columns: repeat(3, 1fr); }
          .team-stats{ flex-direction: row; }
          @media(max-width:768px){
            .team-roles{ grid-template-columns: 1fr; }
            .team-stats{ flex-direction: column; }
            .team-stats > div{ border-right: none !important; border-bottom: 1px solid #efefef; }
            .team-stats > div:last-child{ border-bottom: none; }
          }
        `}</style>

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal center>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#059669", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>팀</p>
            <h2 style={{ fontSize: "clamp(26px,4.5vw,48px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.15, color: "#0a0a0a", marginBottom: 24, textAlign: "center" }}>
              10년 이상 경력의<br />시니어 개발자들이 직접 만듭니다
            </h2>
            <p style={{ fontSize: "clamp(14px,2vw,16px)", color: "#888", lineHeight: 1.7, textAlign: "center", maxWidth: 520, margin: "0 auto 56px" }}>
              대기업 SI부터 자체 서비스 출시까지<br />실무로 검증된 개발자들이 프로젝트를 담당합니다
            </p>
          </Reveal>

          {/* 신뢰 수치 */}
          <Reveal>
            <div className="team-stats" style={{ display: "flex", borderRadius: 20, overflow: "hidden", border: "1px solid #efefef", marginBottom: 48 }}>
              {[["10년+", "평균 실무 경력", false], ["풀스택", "웹·앱·AI 전부", true], ["기획~운영", "전 과정 대응", false]].map(([v, l, dark]) => (
                <div key={v as string} style={{ flex: 1, padding: "28px 16px", textAlign: "center", background: dark ? "#0a0a0a" : "#fff", borderRight: "1px solid #efefef" }}>
                  <div style={{ fontSize: "clamp(18px,3vw,26px)", fontWeight: 900, color: dark ? "#7eecd4" : "#0a0a0a", letterSpacing: "-.03em", marginBottom: 6 }}>{v}</div>
                  <div style={{ fontSize: 13, color: dark ? "rgba(255,255,255,.5)" : "#888" }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 역할 카드 */}
          <div className="team-roles" style={{ display: "grid", gap: 16 }}>
            {[
              { ico: "layout", title: "기획 · PM", exp: "경력 20년+", desc: "대규모 시스템 설계와 프로젝트 총괄. 무엇을 어떤 순서로 만들지 함께 정리합니다." },
              { ico: "server", title: "백엔드 · 설계", exp: "경력 15년+", desc: "실무경험 기반의 안정적인 서버와 데이터 구조. 대기업 운영 시스템 경험." },
              { ico: "monitor", title: "프론트 · 앱", exp: "경력 8년+", desc: "웹·모바일 화면 개발과 UX. 사용자가 실제로 편하게 쓰는 결과물을 만듭니다." },
            ].map(({ ico, title, exp, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div style={{ background: "#fff", border: "1px solid #efefef", borderRadius: 18, padding: "32px 26px", height: "100%" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f0fdf9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, color: "#059669" }}><Icon name={ico} size={22} /></div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#0a0a0a", marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#059669", fontWeight: 700, marginBottom: 12 }}>{exp}</div>
                  <div style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7 }}>{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
         


      <section className="sb" style={{ padding: "120px 24px" }}>
       
        <style>{`
          .track-grid{ grid-template-columns: repeat(4, 1fr); }
          @media(max-width:768px){ .track-grid{ grid-template-columns: repeat(2, 1fr); } }
        `}</style>

        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal center>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7eecd4", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 20, textAlign: "center" }}>검증된 실적</p>
            <h2 style={{ fontSize: "clamp(24px,5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.18, color: "#fff", marginBottom: 18, textAlign: "center" }}>
              이미 증명해왔습니다.
            </h2>
            <p style={{ fontSize: "clamp(13px,2vw,16px)", color: "rgba(255,255,255,.45)", lineHeight: 1.7, textAlign: "center", maxWidth: 540, margin: "0 auto 40px" }}>
              참여 개발자들이 아래 기업·기관의 프로젝트를 수행한 경험이 있습니다
            </p>
          </Reveal>

          <Reveal center delay={0.1}>
            <div className="track-grid" style={{ display: "grid", gap: 1, borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.08)" }}>
              {[
                { name: "삼성전자", work: "금형관리·갤럭시스토어" },
                { name: "SK하이닉스", work: "반도체 생산운영\n투자·부품관리" },
                { name: "KT", work: "통합 포털" },
                { name: "LG", work: "기지국 운영관리" },
                { name: "LH공사", work: "임대주택 등록·조회" },
                { name: "교육부", work: "초등 디지털교과서" },
                { name: "도로공사", work: "통합 데이터베이스" },
                { name: "우리은행", work: "PMS 프로젝트관리" },
              ].map(({ name, work }) => (
                <div key={name} style={{ background: "#0a0a0a", padding: "26px 14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, minHeight: 118, textAlign: "center" }}>
                  <span style={{ fontSize: "clamp(15px,2vw,19px)", fontWeight: 800, color: "#fff", letterSpacing: "-.02em" }}>{name}</span>
                  <span style={{ fontSize: "clamp(10.5px,1.6vw,12px)", color: "rgba(255,255,255,.4)", lineHeight: 1.5, whiteSpace: "pre-line" }}>{work}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal center delay={0.2}>
            <p style={{ fontSize: "clamp(13px,2vw,16px)", color: "rgba(255,255,255,.5)", textAlign: "center", marginTop: 28, lineHeight: 1.7 }}>
              반도체 · 제조 · 금융 · 통신 · 공공 분야{" "}
              <strong style={{ color: "#7eecd4" }}>50건 이상</strong>의 프로젝트 수행 경험
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="sw" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#059669", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>비용</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#0a0a0a", marginBottom: 12 }}>
              수천만 원 선결제 대신,<br />월 단위로 시작합니다.
            </h2>
            <p style={{ fontSize: "clamp(14px,2vw,17px)", color: "#666", lineHeight: 1.7, maxWidth: 500, marginBottom: 16 }}>
              초기 서비스는 완벽한 개발보다 빠른 출시와 반복 개선이 더 중요합니다.
            </p>

          </Reveal>
          <br />
          <br />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 20 }}>
            {[
              { range: "월 50만원~", label: "소규모 운영·유지보수", desc: "기능 추가·버그 수정·배포 등 운영 중심", highlight: false },
              { range: "월 100~200만원", label: "MVP · 신규 서비스", desc: "핵심 기능 개발 + GEO·SEO 구조 포함", highlight: true },
              { range: "월 200만원~", label: "풀스택 파트너십", desc: "웹·앱·자동화·운영 전담 기술팀 구조", highlight: false },
            ].map(({ range, label, desc, highlight }) => (
              <Reveal key={label}>
                <div style={{ padding: "36px 28px", borderRadius: 20, background: highlight ? "#0a0a0a" : "#f9f9f9", border: highlight ? "none" : "1px solid #f0f0f0", position: "relative", overflow: "hidden" }}>
                  {highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#7eecd4" }} />}
                  {highlight && <div style={{ fontSize: 11, fontWeight: 700, color: "#7eecd4", letterSpacing: ".1em", marginBottom: 14 }}>가장 많이 선택</div>}
                  <div style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 900, color: highlight ? "#7eecd4" : "#0a0a0a", letterSpacing: "-.04em", marginBottom: 10 }}>{range}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: highlight ? "#fff" : "#0a0a0a", marginBottom: 8 }}>{label}</div>
                  <div style={{ fontSize: 13, color: highlight ? "rgba(255,255,255,.45)" : "#888", lineHeight: 1.6 }}>{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
              {[["building", "대기업 포함", "다수 기업 파트너십 운영 중"], ["repeat", "높은 재계약률", "평균 2~3개월 단위 지속 협업"], ["zap", "즉시 시작", "상담 후 빠르면 1주 내 착수"]].map(([icon, value, label]) => (
                <div key={value} style={{ padding: "20px", borderRadius: 14, background: "#f9f9f9", border: "1px solid #f0f0f0", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ flexShrink: 0, color: "#059669", display: "flex" }}><Icon name={icon} size={20} /></div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#0a0a0a", marginBottom: 3 }}>{value}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 13, color: "#bbb", marginTop: 20, textAlign: "center" }}>※ 프로젝트 범위에 따라 달라집니다. 서버비는 별도 청구됩니다. 정확한 금액은 상담 후 제안드립니다.</p>
          </Reveal>
        </div>
      </section>

 

      {/* SOLUTION CASES */}
      <section className="sb" style={{ padding: "120px 24px" }}>
        <style>{`
          .sol-grid{ grid-template-columns: repeat(3, 1fr); }
          @media(max-width:768px){ .sol-grid{ grid-template-columns: 1fr; } }
        `}</style>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7eecd4", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>우리가 하는 일</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,50px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.12, color: "#fff", marginBottom: 56 }}>
              이런 고민, 이렇게 풉니다
            </h2>
          </Reveal>
          <div className="sol-grid" style={{ display: "grid", gap: 20 }}>
            {[
              { tag: "외주 실패", prob: "\"외주를 두 번 날렸어요\"", sol: "남이 만들다 만 코드도 인수해서 안정화합니다. 연락 끊길 걱정 없이, 월 단위로 계속 함께 갑니다." },
              { tag: "채용 한계", prob: "\"개발자 채용이 6개월째 막혔어요\"", sol: "채용 없이 바로 시작합니다. 연봉·4대보험 부담 없이, 필요한 만큼 월 단위로 유연하게 대응합니다." },
              { tag: "운영 막힘", prob: "\"바이브코딩으로 만들었는데 운영이 안 돼요\"", sol: "빠르게 만든 결과물을 실제 운영 가능한 구조로 다듬습니다. 버그 수정, 확장, 배포까지 이어받습니다." },
            ].map(({ tag, prob, sol }, i) => (
              <Reveal key={tag} delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, padding: "32px 28px", height: "100%" }}>
                  <span style={{ display: "inline-block", fontSize: 12, fontWeight: 700, color: "#7eecd4", background: "rgba(126,236,212,.1)", padding: "6px 14px", borderRadius: 100, marginBottom: 20 }}>{tag}</span>
                  <div style={{ fontSize: 19, fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: 16 }}>{prob}</div>
                  <div style={{ color: "#7eecd4", fontSize: 18, marginBottom: 12 }}>↓</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>{sol}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sg" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#059669", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>진행 방식</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#0a0a0a", marginBottom: 64 }}>
              요청부터 배포까지,<br />흐름은 단순하게.
            </h2>
          </Reveal>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 28, left: 28, right: 28, height: 1, background: "linear-gradient(90deg,#7eecd4,rgba(126,236,212,.1))", zIndex: 0 }} className="hm" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, position: "relative", zIndex: 1 }}>
              {[["01", "상담", "서비스 범위와 우선순위를 함께 정리합니다"], ["02", "설계", "구조와 일정을 협의하고 계약합니다"], ["03", "개발", "월 단위로 개발·배포를 진행합니다"], ["04", "운영", "출시 후 유지보수·개선을 이어갑니다"]].map(([step, title, desc], i) => (
                <Reveal key={step} delay={i * 0.1}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: i === 0 ? "#0a0a0a" : "#fff", border: `2px solid ${i === 0 ? "#0a0a0a" : "#e0e0e0"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: i === 0 ? "#fff" : "#888", marginBottom: 20 }}>{step}</div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: "#0a0a0a", marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="sb" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7eecd4", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#fff", marginBottom: 56 }}>자주 묻는 질문</h2>
          </Reveal>
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="sb" style={{ padding: "140px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Reveal center>
            <h2 style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.1, color: "#fff", marginBottom: 20 }}>
              좋은 아이디어가<br />개발 비용 때문에<br /><span style={{ color: "#7eecd4" }}>멈추지 않도록.</span>
            </h2>
            <p style={{ fontSize: "clamp(14px,2vw,17px)", color: "rgba(255,255,255,.45)", lineHeight: 1.75, marginBottom: 52 }}>
              기획서 없어도 됩니다. 아이디어만 있으면 시작할 수 있어요.
            </p>
          </Reveal>
          <Reveal center delay={0.1}>
            <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 24, padding: "44px 36px", maxWidth: 540, margin: "0 auto" }}>
              <form action="https://formspree.io/f/xvzynngd" method="POST" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[["text", "name", "이름 또는 회사명"], ["email", "email", "이메일"], ["tel", "phone", "연락처 (선택)"]].map(([type, name, placeholder]) => (
                  <input key={name} type={type} name={name} placeholder={placeholder} required={name !== "phone"}
                    style={{ width: "100%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: "14px 18px", color: "#fff", fontSize: 15, fontFamily: "inherit" }} />
                ))}
                <select name="type" style={{ width: "100%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: "14px 18px", color: "rgba(255,255,255,.6)", fontSize: 15, fontFamily: "inherit", cursor: "pointer" }}>
                  <option value="" style={{ background: "#111" }}>프로젝트 유형 선택</option>
                  {[["web", "웹서비스 / 홈페이지"], ["app", "앱 개발"], ["mvp", "MVP / 프로토타입"], ["maintenance", "유지보수 / 기능개선"], ["vibe", "바이브 코딩 이후 운영"], ["geo", "GEO / SEO / AI 노출"]].map(([v, l]) => (
                    <option key={v} value={v} style={{ background: "#111" }}>{l}</option>
                  ))}
                </select>
                <textarea name="message" placeholder="간단한 프로젝트 설명 (선택)" rows={3}
                  style={{ width: "100%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: "14px 18px", color: "#fff", fontSize: 15, fontFamily: "inherit", resize: "none" }} />
                <button type="submit" className="btn-mint" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "18px" }}>무료 상담 신청하기 →</button>
              </form>
            </div>
          </Reveal>
          <Reveal center delay={0.2}>
            <div style={{ marginTop:24,display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" }}>
              <a href="http://pf.kakao.com/_HyuxjX/chat" target="_blank" rel="noreferrer"
                style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#FEE500",color:"#191919",fontWeight:800,fontSize:14,padding:"12px 24px",borderRadius:100,textDecoration:"none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#191919"><path d="M12 3C6.477 3 2 6.477 2 10.667c0 2.676 1.82 5.028 4.56 6.365L5.5 21l4.215-2.31c.74.105 1.503.16 2.285.16 5.523 0 10-3.477 10-7.667S17.523 3 12 3z"/></svg>
                카카오톡 상담하기
              </a>
              <a href="mailto:hello@rgeo.ai"
                style={{ display:"inline-flex",alignItems:"center",gap:8,color:"rgba(255,255,255,.5)",fontSize:14,padding:"12px 24px",borderRadius:100,textDecoration:"none",border:"1px solid rgba(255,255,255,.15)" }}>
                ✉️ hello@rgeo.ai
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 카카오 퀵버튼 (모바일) */}
      <a href="http://pf.kakao.com/_HyuxjX/chat" target="_blank" rel="noreferrer"
        style={{ position:"fixed",bottom:24,right:24,zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",width:56,height:56,borderRadius:"50%",background:"#FEE500",boxShadow:"0 4px 20px rgba(0,0,0,.2)",textDecoration:"none" }}
        className="kakao-quick">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#191919"><path d="M12 3C6.477 3 2 6.477 2 10.667c0 2.676 1.82 5.028 4.56 6.365L5.5 21l4.215-2.31c.74.105 1.503.16 2.285.16 5.523 0 10-3.477 10-7.667S17.523 3 12 3z"/></svg>
      </a>

      {/* FOOTER */}
      <footer className="sb" style={{ borderTop: "1px solid rgba(255,255,255,.06)", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 900, color: "#fff", marginBottom: 4 }}>RGEO Labs(알지오랩스)</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.3)" }}>hello@rgeo.ai · rgeo.ai</div>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.2)" }}>© 2025 RGEO Labs. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
