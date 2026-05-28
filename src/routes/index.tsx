import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/* ── DATA ── */
const painPoints = [
  "개발자 연봉이 부담되서 채용을 못 하고 있다",
  "외주 맡겼다가 런칭도 못 하고 연락이 끊겼다",
  "만들었는데 아무도 모른다. 노출이 안 된다",
  "개발사 견적이 수천만 원부터 시작해 포기했다",
  "MVP만 먼저 만들고 싶은데 그것도 비용이 너무 크다",
  "운영 중인데 유지보수 해줄 개발자가 없다",
];

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.09)",
  borderRadius: 12,
  padding: "14px 15px",
  color: "#f0ece8",
  fontSize: 14,
  outline: "none",
  fontFamily: "inherit"
};

const globalStats = [
  { value: "$92B", label: "글로벌 IT 아웃소싱 시장 규모", sub: "2024 기준, 연 8.7% 성장 중" },
  { value: "73%", label: "스타트업이 외부 개발팀을 활용", sub: "Deloitte Global Outsourcing Survey" },
  { value: "60%+", label: "비용 절감 효과", sub: "직접 채용 대비 평균 절감율" },
  { value: "3.5×", label: "더 빠른 출시 속도", sub: "전문 파트너 활용 시 평균" },
];

const globalCases = [
  { company: "Notion", category: "생산성 SaaS", insight: "작은 팀으로 빠르게 제품을 반복 개선하며 성장. 핵심 기능에 집중해 초기 사용자 경험을 완성.", metric: "$10B+", metricLabel: "기업가치" },
  { company: "Figma", category: "디자인 툴", insight: "완벽한 제품보다 빠른 출시와 피드백 수집을 우선하며 시장을 빠르게 검증.", metric: "$20B", metricLabel: "인수 가치" },
  { company: "Loom", category: "영상 커뮤니케이션", insight: "2주 만에 MVP 출시, 실제 반응 기반으로 빠른 시장 검증이 $975M 인수로 이어진 핵심 요인.", metric: "$975M", metricLabel: "Atlassian 인수" },
  { company: "Linear", category: "프로젝트 관리", insight: "소수 정예 팀 + Dev-as-a-Service 구조로 Jira 대체. 출시 1년 만에 수천 개 기업 채택.", metric: "4명", metricLabel: "초기 팀 규모" },
];

const trendData = [
  { year: "'20", value: 38 },
  { year: "'21", value: 52 },
  { year: "'22", value: 64 },
  { year: "'23", value: 76 },
  { year: "'24", value: 88 },
  { year: "'25E", value: 97 },
];

const targets = [
  {
    icon: "🚀",
    title: "개발팀이 없는 스타트업",
    desc: "개발자 채용 대신 월 구독형 기술팀으로 빠르게 서비스를 구축하세요."
  },

  {
    icon: "💡",
    title: "아이디어 단계의 초기 창업자",
    desc: "초기 구축 비용 부담을 낮추고 빠른 MVP로 시장 반응을 검증합니다."
  },

  {
    icon: "🛠️",
    title: "운영·유지보수가 필요한 서비스",
    desc: "기존 코드를 안정적으로 인수하고 개선·운영·기능 추가까지 함께합니다."
  },

  {
    icon: "🏢",
    title: "디지털 전환이 필요한 기업",
    desc: "오프라인 비즈니스를 디지털 서비스로 확장하고 GEO·SEO 구조까지 함께 설계합니다."
  },
];

const services = [
  {
    icon: "🚀",
    label: "웹 서비스 · SaaS",
    desc: "아이디어를 실제 운영 가능한 서비스로 구현합니다."
  },

  {
    icon: "📱",
    label: "iOS · Android 앱",
    desc: "네이티브·크로스플랫폼 환경 모두 대응합니다."
  },

  {
    icon: "🛠️",
    label: "기존 시스템 유지보수",
    desc: "레거시 코드 인수부터 개선·운영까지 지속 대응합니다."
  },

  {
    icon: "⚡",
    label: "MVP · 프로토타입",
    desc: "빠른 제작으로 시장 반응을 먼저 검증합니다."
  },

  {
    icon: "🌐",
    label: "GEO · SEO 최적화",
    desc: "AI 검색과 구글에 발견되는 구조를 함께 설계합니다."
  },

  {
    icon: "✨",
    label: "브랜딩 · 콘텐츠",
    desc: "기억되는 메시지와 AI 시대의 노출 전략을 만듭니다."
  },
];

const models = [
  {
    name: "월 구독형",
    tag: "가장 많이 선택",
    accent: true,
    desc:
      "개발자 채용 대신 월 구독 기반의 기술팀을 제공합니다. 초기 구축 부담을 낮추고 개발·운영·개선을 지속적으로 함께합니다.",
    points: [
      "시니어급 기술팀 구조",
      "초기 구축 비용 부담 완화",
      "지속 운영·개선 포함"
    ]
  },

  {
    name: "기술투자형",
    tag: "가능성 있는 프로젝트",
    accent: false,
    desc:
      "프로젝트 가능성과 방향성이 맞는 경우, 개발비 대신 지분 또는 수익 공유 형태로 협업합니다.",
    points: [
      "초기 비용 없이 시작 가능",
      "지분·수익쉐어 기반 협의",
      "장기 파트너십 중심 구조"
    ]
  },

  {
    name: "혼합형",
    tag: "프로젝트별 맞춤 설계",
    accent: false,
    desc:
      "프로젝트 단계와 팀 상황에 따라 월 구독형과 기술투자형 구조를 유연하게 조합합니다.",
    points: [
      "상황별 유연한 구조 설계",
      "단계별 계약 전환 가능",
      "장기 운영 중심 협업"
    ]
  },
];

const faqs = [
  {
    q: "RGEO Labs는 어떤 회사인가요?",
    a:
      "RGEO Labs는 개발자 채용 없이 웹·앱·AI 서비스를 시작할 수 있도록 돕는 AI 시대의 기술 운영 파트너입니다. " +
      "기술 투자, 개발 투자, 월 구독형 개발 구조를 기반으로 초기 서비스 출시의 문턱을 낮추고 빠른 MVP 검증이 가능하도록 설계합니다. " +
      "웹사이트 제작, 앱 개발, 유지보수, AI 자동화, GEO·SEO 최적화까지 하나의 팀으로 함께하며, 단순 제작보다 출시 이후 운영과 AI 검색 노출 구조까지 함께 고려합니다. " +
      "또한 ChatGPT, Google, Perplexity 같은 AI 검색 환경에서 브랜드와 서비스가 더 잘 이해되고 발견될 수 있도록 구조화된 개발 방식을 지향합니다."
  },

  {
    q: "왜 단순 개발사가 아니라 '기술 운영 파트너'라고 하나요?",
    a:
      "RGEO Labs는 단순히 기능만 제작하고 끝나는 구조보다, 출시 이후 운영·개선·AI 검색 노출까지 함께 이어가는 방식을 중요하게 생각합니다. " +
      "빠르게 만들고 실제 반응을 보며 지속적으로 개선하는 구조를 지향합니다."
  },

  {
    q: "GEO란 무엇인가요?",
    a:
      "GEO(Generative Engine Optimization)는 ChatGPT·Perplexity·Google AI 같은 생성형 AI 검색 환경에서 브랜드와 서비스가 더 잘 이해되고 언급될 수 있도록 구조화하는 최적화 방식입니다."
  },

  {
    q: "GEO·SEO는 왜 개발 단계부터 함께 해야 하나요?",
    a:
      "웹사이트 구조, FAQ, 콘텐츠 흐름, 메타 정보는 처음 설계될 때부터 함께 고려해야 AI와 검색엔진이 더 쉽게 이해할 수 있습니다. " +
      "나중에 추가하는 것보다 개발 단계에서 함께 설계하는 것이 훨씬 효율적입니다."
  },

  {
    q: "개발자 채용 대비 어떤 점이 다른가요?",
    a:
      "개발자 채용에는 연봉 외에도 채용 기간, 4대보험, 장비, 운영 비용, 이직 리스크가 발생합니다. " +
      "RGEO Labs는 월 구독 기반으로 개발·운영·GEO·SEO까지 하나의 팀으로 대응해 초기 부담과 운영 리스크를 낮출 수 있습니다."
  },

  {
    q: "초기 개발비 0원으로도 가능한가요?",
    a:
      "프로젝트 규모와 협업 방식에 따라 초기 구축 비용 부담 없이 시작 가능한 경우가 있습니다. " +
      "다만 이후 월 운영·개발 구독 비용은 발생하며, 모든 프로젝트가 동일 조건으로 진행되지는 않습니다."
  },

  {
    q: "앱 개발도 가능한가요?",
    a:
      "네. 웹서비스, 관리자 시스템, iOS·Android 앱까지 통합적으로 대응합니다. " +
      "프로젝트 목적과 예산에 따라 가장 효율적인 방식으로 MVP 구조를 먼저 제안드립니다."
  },

  {
    q: "이미 운영 중인 서비스도 맡길 수 있나요?",
    a:
      "가능합니다. 기존 서비스의 유지보수, 기능 개선, 신규 기능 추가, AI 자동화, GEO·SEO 구조 개선까지 함께 진행할 수 있습니다."
  },

  {
    q: "AI·노코드·바이브 코딩으로 만든 서비스도 운영이 가능한가요?",
    a:
      "최근에는 AI·노코드·바이브 코딩으로 빠르게 MVP를 만드는 경우가 많아졌습니다. " +
      "하지만 실제 운영 단계에서는 유지보수, 확장성, 배포 구조, 데이터 관리 문제가 발생하는 경우도 많습니다. " +
      "RGEO Labs는 빠른 제작뿐 아니라 장기적으로 운영 가능한 구조까지 함께 고려합니다."
  },

  {
    q: "월 구독형 개발은 어떻게 진행되나요?",
    a:
      "상담 후 필요한 기능과 우선순위를 먼저 정리하고, 월 단위로 개발·수정·배포·운영 개선을 이어갑니다. " +
      "처음부터 크게 만들기보다 작게 출시하고 빠르게 개선하는 방식을 권장합니다."
  }

];





const processSteps = [
  { step: "01", title: "상담", desc: "아이디어와 현재 문제를 빠르게 정리합니다." },
  { step: "02", title: "설계", desc: "MVP 범위와 GEO·SEO 구조를 함께 잡습니다." },
  { step: "03", title: "개발", desc: "우선순위가 높은 기능부터 빠르게 구현합니다." },
  { step: "04", title: "운영", desc: "배포 후 월 단위로 개선과 유지보수를 이어갑니다." },
];

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
  serviceType: "월 구독형 외주개발운영 파트너 서비스",
  provider: { "@type": "Organization", name: "RGEO Labs", email: "hello@rgeo.ai" },
  areaServed: "KR",
  description: "AI 시대 운영 파트너. 초기 비용 0원부터 시작 가능한 월 구독형. 웹·앱·MVP 개발과 GEO·SEO 최적화를 한 팀이 동시에 설계합니다.",
  offers: { "@type": "Offer", priceCurrency: "KRW", price: "0", description: "무료개발 · 초기 비용 0원 가능 · 기술투자형 협의" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RGEO Labs — AI 시대 운영 파트너. 초기 비용 0원, 월 구독형 외주개발 서비스" },
      { name: "description", content: "개발자 채용 대신 월 구독으로. 웹·앱·MVP 개발과 GEO·SEO 최적화를 한 팀이 동시에 설계하는 기술 투자 동반자, RGEO Labs." },
      { property: "og:title", content: "RGEO Labs — 초기 비용 0원, 월 구독형 외주개발" },
      { property: "og:description", content: "개발자 채용 대신 월 구독으로. 웹·앱·MVP·GEO·SEO를 한 팀이 동시에." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(SERVICE_JSONLD) },
    ],
  }),
  component: RgeoLabsLanding,
});

/* ── HOOKS ── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function Reveal({ children, delay = 0, y = 12, style: s = {} }: { children: ReactNode; delay?: number; y?: number; style?: CSSProperties }) {
  // Always render visible to guarantee readability; animate a subtle slide-in on intersect.
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ opacity: 1, transform: inView ? "none" : `translateY(${y}px)`, transition: `transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}s`, ...s }}>
      {children}
    </div>
  );
}

function TypingHeadline({ lines, lineStyles = [] }: { lines: string[]; lineStyles?: CSSProperties[]; charDelay?: number; lineGap?: number; startDelay?: number }) {
  // Render the headline fully on first paint so content is always readable.
  return (
    <>
      {lines.map((text, i) => (
        <span key={i} style={{ display: "block", minHeight: "1.05em", ...(lineStyles[i] || {}) }}>
          {text}
        </span>
      ))}
    </>
  );
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);

    const N = 55;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.4,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(126,236,212,${(1 - dist / 140) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(126,236,212,0.45)";
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }} aria-hidden="true" />;
}

function TrendBar() {
  const [ref, inView] = useInView();
  const max = Math.max(...trendData.map((d) => d.value));
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 120 }}>
      {trendData.map(({ year, value }, i) => (
        <div key={year} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: i === trendData.length - 1 ? "#7eecd4" : "rgba(255,255,255,0.4)" }}>{value}%</div>
          <div style={{ width: "100%", background: i === trendData.length - 1 ? "rgba(126,236,212,0.35)" : "rgba(255,255,255,0.08)", borderRadius: 4, height: inView ? `${(value / max) * 80}px` : "0px", transition: `height 0.8s cubic-bezier(.16,1,.3,1) ${i * 0.08}s`, border: i === trendData.length - 1 ? "1px solid rgba(126,236,212,0.4)" : "none" }} />
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>{year}</div>
        </div>
      ))}
    </div>
  );
}

function GeoTooltip() {
  const [show, setShow] = useState(false);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow((v) => !v)}
        style={{ color: "#7eecd4", fontWeight: 700, cursor: "help", borderBottom: "1px dashed rgba(126,236,212,.5)", paddingBottom: 1 }}
      >
        GEO
      </span>
      {show && (
        <span style={{ position: "absolute", bottom: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)", background: "#1a1820", border: "1px solid rgba(126,236,212,.2)", borderRadius: 12, padding: "14px 16px", width: 260, zIndex: 100, pointerEvents: "none", boxShadow: "0 16px 48px rgba(0,0,0,.6)" }}>
          <span style={{ display: "block", fontSize: 12, fontWeight: 800, color: "#7eecd4", marginBottom: 6 }}>GEO란?</span>
          <span style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,.55)", lineHeight: 1.7 }}>
            Generative Engine Optimization — ChatGPT, Perplexity, Google AI 같은 AI 검색에서 내 서비스가 먼저 언급되도록 구조화하는 최적화입니다.
          </span>
        </span>
      )}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", background: "none", border: "none", cursor: "pointer", color: "#f0ece8", fontFamily: "inherit", textAlign: "left", gap: 24 }}>
        <span style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.5 }}>{q}</span>
        <span style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18, color: "rgba(255,255,255,0.4)", fontWeight: 300, lineHeight: 1, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.25s" }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: "hidden", transition: "max-height 0.35s cubic-bezier(.16,1,.3,1)" }}>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.85, paddingBottom: 22 }}>{a}</p>
      </div>
    </div>
  );
}

function HeroCommandCenter() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 460 }}>
      <div
        style={{
          position: "absolute",
          inset: -28,
          background:
            "radial-gradient(circle at 50% 20%,rgba(126,236,212,.16),transparent 58%)",
          filter: "blur(30px)",
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          position: "relative",
          border: "1px solid rgba(255,255,255,.11)",
          borderRadius: 28,
          background:
            "linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.025))",
          boxShadow: "0 32px 100px rgba(0,0,0,.55)",
          overflow: "hidden",
          backdropFilter: "blur(18px)",
          padding: 22
        }}
      >
        <div
          style={{
            height: 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,.08)",
            margin: "-22px -22px 20px",
            padding: "0 18px"
          }}
        >
          <div style={{ display: "flex", gap: 7 }}>
            {["#ff6b6b", "#ffd166", "#7eecd4"].map((c) => (
              <span
                key={c}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.75
                }}
              />
            ))}
          </div>

          <div
            style={{
              fontSize: 10,
              fontWeight: 900,
              letterSpacing: ".14em",
              color: "rgba(255,255,255,.32)"
            }}
          >
            AI SEARCH PREVIEW
          </div>
        </div>

        <div
          style={{
            padding: 16,
            borderRadius: 18,
            background: "rgba(7,5,8,.48)",
            border: "1px solid rgba(255,255,255,.08)",
            marginBottom: 14
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,.35)",
              fontWeight: 800,
              letterSpacing: ".08em",
              marginBottom: 10
            }}
          >
            USER ASKED
          </div>

          <div
            style={{
              fontSize: 16,
              lineHeight: 1.45,
              fontWeight: 850,
              color: "#f0ece8",
              letterSpacing: "-.03em"
            }}
          >
            “개발자 없이 웹·앱 서비스를<br />
            빠르게 출시할 수 있을까?”
          </div>
        </div>

        <div
          style={{
            padding: 18,
            borderRadius: 20,
            background: "rgba(126,236,212,.08)",
            border: "1px solid rgba(126,236,212,.16)",
            marginBottom: 14
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 8,
                background: "rgba(126,236,212,.16)",
                border: "1px solid rgba(126,236,212,.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#7eecd4",
                fontSize: 12,
                fontWeight: 900
              }}
            >
              AI
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: ".12em",
                color: "#7eecd4"
              }}
            >
              ANSWER
            </div>
          </div>

          <div
            style={{
              fontSize: 13,
              color: "rgba(240,236,232,.78)",
              lineHeight: 1.75
            }}
          >
            RGEO Labs는 개발자 채용 없이 웹·앱·AI 서비스를 시작할 수
            있도록 돕는 월 구독형 기술 운영 파트너입니다.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10
          }}
        >
          {[
            ["MVP", "빠른 출시"],
            ["GEO", "AI 검색 구조"],
            ["운영", "유지보수"],
            ["자동화", "AI 업무 개선"]
          ].map(([label, text]) => (
            <div
              key={label}
              style={{
                padding: "13px 14px",
                borderRadius: 14,
                background: "rgba(255,255,255,.045)",
                border: "1px solid rgba(255,255,255,.07)"
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 900,
                  letterSpacing: ".12em",
                  color: "#7eecd4",
                  marginBottom: 5
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,.52)",
                  fontWeight: 650
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: -10,
          bottom: -14,
          padding: "10px 12px",
          borderRadius: 14,
          background: "rgba(126,236,212,.1)",
          border: "1px solid rgba(126,236,212,.2)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 18px 50px rgba(0,0,0,.45)"
        }}
      >
        <div
          style={{
            fontSize: 10,
            color: "rgba(126,236,212,.78)",
            fontWeight: 900,
            letterSpacing: ".1em",
            marginBottom: 3
          }}
        >
          AI VISIBILITY
        </div>
        <div style={{ fontSize: 12, color: "#f0ece8", fontWeight: 850 }}>
          출시 → 운영 → 노출
        </div>
      </div>
    </div>
  );
}

function OperatingVisualSection({ W }: { W: CSSProperties }) {
  return (
    <section id="process" style={{ padding: "110px 0" }}>
      <div className="pad-s" style={W}>
        <Reveal>
          <span className="eyebrow">Operating system</span>
          <div className="col2" style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 56, alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 1.05, color: "#f0ece8", marginBottom: 18 }}>
                아이디어에서<br />런칭까지,<br />한 흐름으로 갑니다.
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.38)", lineHeight: 1.8, maxWidth: 420, marginBottom: 28 }}>
                요청은 보드로 관리하고, 개발은 배포 단위로 쪼개고, GEO 구조는 처음부터 같이 심습니다.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, maxWidth: 470 }}>
                {[["01", "요청 정리"], ["02", "우선순위"], ["03", "배포·개선"]].map(([n, t]) => (
                  <div key={n} style={{ padding: "16px 14px", borderRadius: 16, background: "rgba(255,255,255,.035)", border: "1px solid rgba(255,255,255,.08)" }}>
                    <div style={{ fontSize: 11, color: "#7eecd4", fontWeight: 900, marginBottom: 8 }}>{n}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.68)", fontWeight: 750 }}>{t}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: 28,
                padding: 24,
                background: "linear-gradient(135deg,rgba(126,236,212,.08),rgba(180,160,255,.05))",
                border: "1px solid rgba(255,255,255,.09)",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
                  backgroundSize: "34px 34px",
                  maskImage: "linear-gradient(to bottom,black,transparent 90%)" as any
                }}
              />

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: ".14em",
                    color: "#7eecd4",
                    marginBottom: 18
                  }}
                >
                  HOW IT WORKS
                </div>

                {[
                  {
                    step: "01",
                    title: "상담 · 방향 정리",
                    desc: "아이디어, 현재 문제, 필요한 기능을 먼저 정리합니다."
                  },
                  {
                    step: "02",
                    title: "MVP 범위 설계",
                    desc: "처음부터 다 만들지 않고, 출시 가능한 핵심 기능만 잡습니다."
                  },
                  {
                    step: "03",
                    title: "제작 · 배포",
                    desc: "웹·앱·자동화·관리자 기능을 우선순위대로 구현합니다."
                  },
                  {
                    step: "04",
                    title: "운영 · 개선",
                    desc: "출시 후에도 수정, 기능 추가, GEO·SEO 개선을 이어갑니다."
                  }
                ].map((item, i, arr) => (
                  <div
                    key={item.step}
                    style={{
                      position: "relative",
                      display: "grid",
                      gridTemplateColumns: "54px 1fr",
                      gap: 16,
                      paddingBottom: i === arr.length - 1 ? 0 : 24
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 14,
                          background:
                            i === 0
                              ? "rgba(126,236,212,.14)"
                              : "rgba(255,255,255,.055)",
                          border:
                            i === 0
                              ? "1px solid rgba(126,236,212,.26)"
                              : "1px solid rgba(255,255,255,.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: i === 0 ? "#7eecd4" : "rgba(255,255,255,.45)",
                          fontSize: 13,
                          fontWeight: 900
                        }}
                      >
                        {item.step}
                      </div>

                      {i !== arr.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            top: 50,
                            left: 22,
                            width: 1,
                            height: "calc(100% - 26px)",
                            background:
                              "linear-gradient(to bottom,rgba(126,236,212,.32),rgba(255,255,255,.06))"
                          }}
                        />
                      )}
                    </div>

                    <div
                      style={{
                        background:
                          i === 0
                            ? "rgba(126,236,212,.07)"
                            : "rgba(255,255,255,.04)",
                        border:
                          i === 0
                            ? "1px solid rgba(126,236,212,.15)"
                            : "1px solid rgba(255,255,255,.07)",
                        borderRadius: 18,
                        padding: "16px 18px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 850,
                          color: "#f0ece8",
                          marginBottom: 6,
                          letterSpacing: "-.02em"
                        }}
                      >
                        {item.title}
                      </div>

                      <div
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,.43)",
                          lineHeight: 1.65
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RgeoLabsLanding() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const W: CSSProperties = { maxWidth: 1160, margin: "0 auto", padding: "0 40px", width: "100%", boxSizing: "border-box" };

  return (
    <main style={{ minHeight: "100vh", background: "#070508", color: "#f0ece8", fontFamily: "'Pretendard Variable','Pretendard','Apple SD Gothic Neo',sans-serif", overflowX: "hidden", width: "100%", maxWidth: "100%", textAlign: "left", boxSizing: "border-box", border: "none" }}>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css');
        *,*::before,*::after{box-sizing:border-box;}
        ::selection{background:#c8f0e8;color:#070508;}
        html{scroll-behavior:smooth;}
        body{background:#070508;margin:0;}

        .noise{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:0.022;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E");background-size:200px;}

        .btn-w{display:inline-flex;align-items:center;gap:8px;background:#f0ece8;color:#070508;font-weight:750;font-size:15px;padding:14px 28px;border-radius:12px;border:none;cursor:pointer;transition:all .2s;letter-spacing:-.01em;white-space:nowrap;}
        .btn-w:hover{background:#fff;transform:translateY(-1px);box-shadow:0 12px 40px rgba(0,0,0,.5);}
        .btn-g{display:inline-flex;align-items:center;gap:8px;background:transparent;color:rgba(240,236,232,.6);font-weight:600;font-size:15px;padding:14px 28px;border-radius:12px;border:1px solid rgba(255,255,255,.12);cursor:pointer;transition:all .2s;letter-spacing:-.01em;white-space:nowrap;}
        .btn-g:hover{color:#f0ece8;border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.05);}
        .btn-a{display:inline-flex;align-items:center;justify-content:center;gap:6px;background:linear-gradient(135deg,#7eecd4,#5bd4b8);color:#070508;font-weight:800;font-size:15px;padding:14px 24px;border-radius:12px;border:none;cursor:pointer;transition:all .2s;letter-spacing:-.01em;white-space:nowrap;box-shadow:0 8px 24px rgba(126,236,212,.25);}
        .btn-a:hover{background:linear-gradient(135deg,#8ff0db,#6ce0c4);transform:translateY(-1px);box-shadow:0 12px 32px rgba(126,236,212,.35);}
        .btn-b{display:inline-flex;align-items:center;justify-content:center;gap:6px;background:rgba(255,255,255,.06);color:#f0ece8;font-weight:700;font-size:15px;padding:14px 24px;border-radius:12px;border:1px solid rgba(255,255,255,.14);cursor:pointer;transition:all .2s;letter-spacing:-.01em;white-space:nowrap;}
        .btn-b:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.24);}
        @media(max-width:600px){.btn-w,.btn-g,.btn-a,.btn-b{width:auto;justify-content:center;font-size:14px;padding:13px 20px;}}

        .eyebrow{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#7eecd4;display:block;margin-bottom:16px;}
        .card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:20px;transition:border-color .3s,transform .3s;}
        .card:hover{border-color:rgba(255,255,255,.15);transform:translateY(-3px);}
        .divider{border:none;border-top:1px solid rgba(255,255,255,.07);}

        @keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes float-slow{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-18px) scale(1.02)}}
        @keyframes orbit{from{transform:rotate(0deg) translateX(160px) rotate(0deg)}to{transform:rotate(360deg) translateX(160px) rotate(-360deg)}}
        @keyframes orbit2{from{transform:rotate(180deg) translateX(220px) rotate(-180deg)}to{transform:rotate(540deg) translateX(220px) rotate(-540deg)}}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

        .marquee-wrap{overflow:hidden;}
        .marquee-track{display:flex;width:max-content;animation:marquee 34s linear infinite;}
        .marquee-track:hover{animation-play-state:paused;}

        @media(max-width:900px){
          .col2{grid-template-columns:1fr!important;}
          .col3{grid-template-columns:1fr 1fr!important;}
          .col4{grid-template-columns:1fr 1fr!important;}
          .hide-m{display:none!important;}
          .stats-flex{flex-wrap:wrap!important;}
          .stats-flex>div{flex:1 1 45%!important;border-left:none!important;border-top:1px solid rgba(255,255,255,.07)!important;}
        }

        .desktop-hero-visual{
          display:block;
        }

        @media(max-width:1350px){

          .desktop-hero-visual{
            display:none !important;
          }

        }
        @media(max-width:600px){
          .col3,.col4{grid-template-columns:1fr!important;}
          .pad-s{padding-left:20px!important;padding-right:20px!important;}
        }
        
        .bottom-cta-btn{flex:1!important;}
        @media(max-width:480px){
          .bottom-cta-btn{font-size:13px!important;padding:12px 14px!important;}
        }
      `}</style>

      <div className="noise" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200 }} aria-label="주요 메뉴">
        <div style={{ position: "absolute", inset: 0, background: `rgba(7,5,8,${Math.min(scrollY / 60, 1) * 0.9})`, backdropFilter: scrollY > 10 ? "blur(24px)" : "none", borderBottom: `1px solid rgba(255,255,255,${Math.min(scrollY / 60, 1) * 0.08})`, transition: "all .3s" }} />
        <div style={{ ...W, position: "relative", zIndex: 1, height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".12em", color: "#f0ece8", lineHeight: 1.2 }}>RGEO Labs</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {([["시장 변화", "#market"], ["서비스", "#services"], ["진행 방식", "#process"], ["비용 구조", "#model"], ["FAQ", "#faq"]] as const).map(([t, h]) => (
              <a key={t} href={h} className="hide-m" style={{ fontSize: 13, color: "rgba(255,255,255,.38)", padding: "7px 13px", borderRadius: 8, transition: "color .2s", textDecoration: "none" }}>{t}</a>
            ))}
            <a href="#apply" className="btn-w" style={{ padding: "9px 20px", fontSize: 13, borderRadius: 10, marginLeft: 10, textDecoration: "none" }}>상담 신청</a>
          </div>
        </div>
      </nav>

      {/* BOTTOM FIXED CTA BAR */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 250, background: "rgba(7,5,8,.92)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(126,236,212,.12)", padding: "12px 0", transition: "transform .35s ease" }}>
        <div style={{ ...W, display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }} className="hide-m">
            <span style={{ fontSize: 12, fontWeight: 800, color: "#7eecd4", letterSpacing: ".04em" }}>초기 비용 0원부터 시작</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,.35)", marginTop: 2 }}>아이디어를 실제 서비스로 만드는 가장 빠른 방법</span>
          </div>
          <a href="#apply" className="btn-a bottom-cta-btn" style={{ flex: "0 0 auto", textDecoration: "none" }}>무료 상담 신청 →</a>
          <a
            href="http://pf.kakao.com/_HyuxjX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-cta-btn"
            style={{
              flex: 1,
              textDecoration: "none",
              textAlign: "center",
              background: "#FEE500",
              color: "#191919",
              fontWeight: 800,
              borderRadius: 14,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: "0 8px 24px rgba(254,229,0,.22)"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3C6.477 3 2 6.477 2 10.667c0 2.676 1.82 5.028 4.56 6.365L5.5 21l4.215-2.31c.74.105 1.503.16 2.285.16 5.523 0 10-3.477 10-7.667S17.523 3 12 3z" />
            </svg>

            카카오톡 상담하기
          </a>
        </div>
      </div>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <ParticleField />

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%,black,transparent)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, background: "radial-gradient(ellipse,rgba(126,236,212,.055) 0%,transparent 60%)", filter: "blur(40px)", animation: "float-slow 12s ease-in-out infinite" }} />
          <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, background: "radial-gradient(circle,rgba(160,120,255,.06) 0%,transparent 65%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 500, height: 500, background: "radial-gradient(circle,rgba(126,236,212,.04) 0%,transparent 65%)", filter: "blur(60px)" }} />

          <div style={{ position: "absolute", top: "50%", right: "12%", transform: "translateY(-50%)" }} className="hide-m">
            <div style={{ position: "relative", width: 440, height: 440 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(126,236,212,.08)", animation: "spin-slow 30s linear infinite" }} />
              <div style={{ position: "absolute", inset: "40px", borderRadius: "50%", border: "1px dashed rgba(180,160,255,.06)", animation: "spin-slow 20s linear infinite reverse" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle,rgba(126,236,212,.25),rgba(126,236,212,.05))", border: "1px solid rgba(126,236,212,.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(126,236,212,.4)", animation: "pulse-dot 2.5s infinite" }} />
              </div>
              <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: -6, marginLeft: -6, animation: "orbit 8s linear infinite" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#7eecd4", boxShadow: "0 0 16px rgba(126,236,212,.8)" }} />
              </div>
              <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: -5, marginLeft: -5, animation: "orbit2 14s linear infinite" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#b4a0ff", boxShadow: "0 0 12px rgba(180,160,255,.7)" }} />
              </div>
              {[
                { text: "월 구독형", sub: "채용 대비 60% 절감", top: "8%", left: "-8%", delay: "0s" },
                { text: "MVP 2주", sub: "빠른 시장 검증", top: "75%", left: "-5%", delay: ".4s" },
                { text: "GEO·SEO", sub: "개발 동시 설계", top: "5%", right: "-5%", delay: ".8s" },
              ].map(({ text, sub, top, left, right, delay }) => (
                <div key={text} style={{ position: "absolute", top, left, right, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: "10px 14px", backdropFilter: "blur(12px)", whiteSpace: "nowrap", animation: `float-slow 6s ease-in-out ${delay} infinite` }}>
                  <div style={{ fontSize: 12, fontWeight: 750, color: "#f0ece8", lineHeight: 1.3 }}>{text}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.35)", marginTop: 2 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pad-s" style={{ ...W, maxWidth: 1280, position: "relative", zIndex: 2, paddingTop: 130, paddingBottom: 150 }}>
          <div style={{ maxWidth: 720 }}>
            <Reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(126,236,212,.06)", border: "1px solid rgba(126,236,212,.16)", borderRadius: 100, padding: "6px 16px 6px 8px", marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(126,236,212,.1)", borderRadius: 100, padding: "4px 10px" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7eecd4", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#7eecd4", letterSpacing: ".07em" }}>월 구독형 개발 파트너</span>
              </div>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.32)" }}>개발자 채용 대신 월 구독으로</span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 style={{ fontSize: "clamp(42px,4.6vw,70px)", fontWeight: 940, lineHeight: 1.04, letterSpacing: "-.05em", margin: 0, marginTop: 0 }}>
                <TypingHeadline
                  lines={["월 구독형 개발팀", "웹·앱·AI 자동화", "AI시대 운영파트너"]}
                  lineStyles={[
                    { color: "#f0ece8" },
                    { background: "linear-gradient(110deg,#f0ece8 0%,#7eecd4 42%,#b4a0ff 75%,#f0ece8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
                    { color: "#f0ece8" },
                  ]}
                  charDelay={60}
                  lineGap={280}
                  startDelay={400}
                />
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  marginTop: 52,
                  marginBottom: 52
                }}
              >
                {[
                  {
                    label: "월구독",
                    text: "개발자 채용 없이 월 단위로 시작합니다"
                  },
                  {
                    label: "풀스택",
                    text: "웹·앱·MVP·자동화·유지보수까지 한 번에 대응합니다"
                  },
                  {
                    label: "AI",
                    text: "처음부터 AI 검색·구글 노출 구조까지 함께 설계합니다"
                  },
                ].map(({ label, text }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "14px 16px",
                      borderRadius: 16,
                      background: "rgba(255,255,255,.03)",
                      border: "1px solid rgba(255,255,255,.07)"
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        padding: "7px 10px",
                        borderRadius: 999,
                        background: "rgba(126,236,212,.08)",
                        border: "1px solid rgba(126,236,212,.14)",
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: ".12em",
                        color: "#7eecd4",
                        lineHeight: 1,
                        whiteSpace: "nowrap"
                      }}
                    >
                      {label}
                    </div>

                    <span
                      style={{
                        fontSize: "clamp(14px,1.5vw,16px)",
                        color: "rgba(240,236,232,.72)",
                        fontWeight: 500,
                        lineHeight: 1.6
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ display: "flex", gap: 12, marginBottom: 64, flexWrap: "wrap" }}>
                <a
                  href="https://pf.kakao.com/_HyuxjX/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-w"
                  style={{ textDecoration: "none" }}
                >
                  카카오톡 상담하기 →
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="stats-flex" style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                {[["채용보다 저렴", "월 구독형"], ["초기 비용", "0원 가능"], ["대응 범위", "웹·앱·시스템"], ["GEO·SEO", "개발 동시 진행"]].map(([label, value], i) => (
                  <div key={label} style={{ padding: "20px 28px", borderLeft: i > 0 ? "1px solid rgba(255,255,255,.07)" : "none", flex: 1 }}>
                    <div style={{ fontSize: 17, fontWeight: 800, color: "#f0ece8", letterSpacing: "-.02em", lineHeight: 1.2 }}>{value}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.28)", marginTop: 5, fontWeight: 500 }}>{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: .22 }} aria-hidden="true">
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom,transparent,rgba(255,255,255,.7))" }} />
          <span style={{ fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase" }}>scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)", padding: "16px 0", background: "rgba(255,255,255,.01)" }} className="marquee-wrap">
        <div className="marquee-track">
          {[...painPoints, ...painPoints, ...painPoints].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 28, paddingRight: 56, whiteSpace: "nowrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,.24)", fontWeight: 500 }}>{t}</span>
              <span style={{ color: "rgba(126,236,212,.22)", fontSize: 10 }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      <OperatingVisualSection W={W} />

      <hr className="divider" />

      {/* MARKET */}
      <section id="market" style={{ padding: "100px 0" }}>
        <div className="pad-s" style={W}>
          <Reveal>
            <span className="eyebrow">Global trend</span>
            <div className="col2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start", marginBottom: 64 }}>
              <div>
                <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 880, letterSpacing: "-.04em", lineHeight: 1.1, color: "#f0ece8", marginBottom: 16 }}>
                  전 세계는 이미<br />이렇게 바뀌었습니다.
                </h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,.38)", lineHeight: 1.82, marginBottom: 32 }}>
                  외부 기술 파트너를 활용하는 방식은 글로벌 스탠다드가 됐습니다. 미국 스타트업의 73%가 외부 개발팀을 활용하고, 한국 시장도 빠르게 같은 방향으로 이동하고 있습니다.
                </p>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.24)", marginBottom: 8, fontWeight: 600, letterSpacing: ".08em" }}>외부 기술 파트너 활용률 (글로벌 스타트업, %)</div>
                <TrendBar />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {globalStats.map(({ value, label, sub }) => (
                  <div key={label} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 18, padding: "24px 20px" }}>
                    <div style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 900, color: "#7eecd4", letterSpacing: "-.03em", marginBottom: 8, lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#f0ece8", marginBottom: 6, lineHeight: 1.4 }}>{label}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.3)", lineHeight: 1.5 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: 48, marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,.28)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 28 }}>
                이 방식으로 성공한 글로벌 케이스
              </div>
              <div className="col2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {globalCases.map(({ company, category, insight, metric, metricLabel }, i) => (
                  <Reveal key={company} delay={i * 0.07}>
                    <div className="card" style={{ padding: "28px 26px", display: "flex", gap: 20 }}>
                      <div style={{ flexShrink: 0 }}>
                        <div style={{ width: 48, height: 48, borderRadius: 13, background: "rgba(126,236,212,.07)", border: "1px solid rgba(126,236,212,.14)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
                          <span style={{ fontSize: 11, fontWeight: 900, color: "#7eecd4", letterSpacing: ".04em" }}>{company.slice(0, 2).toUpperCase()}</span>
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 900, color: "#7eecd4", letterSpacing: "-.03em", lineHeight: 1 }}>{metric}</div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,.3)", marginTop: 3, fontWeight: 600 }}>{metricLabel}</div>
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <span style={{ fontSize: 15, fontWeight: 800, color: "#f0ece8" }}>{company}</span>
                          <span style={{ fontSize: 10, color: "rgba(126,236,212,.7)", background: "rgba(126,236,212,.07)", border: "1px solid rgba(126,236,212,.14)", padding: "2px 8px", borderRadius: 100, fontWeight: 700, letterSpacing: ".05em" }}>{category}</span>
                        </div>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.78 }}>{insight}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ marginTop: 14, padding: "28px 32px", background: "linear-gradient(135deg,rgba(126,236,212,.05),rgba(180,160,255,.04))", border: "1px solid rgba(126,236,212,.1)", borderRadius: 20, display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ fontSize: 28, lineHeight: 1 }}>🇰🇷</div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontSize: 15, fontWeight: 750, color: "#f0ece8", marginBottom: 8 }}>한국 시장도 빠르게 변하고 있습니다</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.8 }}>
                  개발자 인건비 급등, 채용 시장 경직, AI 도구의 보편화로 인해 국내 스타트업과 중소기업도 외부 기술 파트너십 모델로 전환하는 속도가 빨라지고 있습니다. 지금이 이 구조로 시작할 가장 적기입니다.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
                {["개발자 평균 연봉 43% 상승 (5년간)", "채용 기간 평균 4.2개월", "AI 기반 개발 생산성 3.5배 향상"].map((t) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,.45)" }}>
                    <span style={{ color: "#7eecd4", fontSize: 9 }}>✦</span>{t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="divider" />

      {/* TARGETS */}
      <section style={{ padding: "100px 0" }}>
        <div className="pad-s" style={W}>
          <Reveal>
            <span className="eyebrow">For who</span>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 880, letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: 14, color: "#f0ece8" }}>
              개발자가 없어서,<br />개발비가 없어서<br />못 시작하고 있다면.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.36)", lineHeight: 1.8, maxWidth: 420, marginBottom: 48 }}>RGEO Labs는 이 두 가지 문제를 동시에 해결합니다.</p>
          </Reveal>
          <div className="col2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
            {targets.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="card" style={{ padding: "28px 24px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: "rgba(126,236,212,.07)", border: "1px solid rgba(126,236,212,.13)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, color: "rgba(126,236,212,.7)", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 750, color: "#f0ece8", marginBottom: 7, lineHeight: 1.4 }}>{title}</h3>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,.38)", lineHeight: 1.78 }}>{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div style={{ background: "rgba(126,236,212,.03)", border: "1px solid rgba(126,236,212,.1)", borderRadius: 20, padding: "32px 32px" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#7eecd4", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 24 }}>개발자 채용 vs RGEO Labs 구독</div>
              <div className="col2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                {[
                  { label: "개발자 직접 채용", color: "rgba(255,255,255,.28)", accent: "rgba(239,68,68,.45)", icon: "✕", items: ["연봉 6,000~8,000만 원 + 4대보험", "장비·복지·퇴직금 추가 비용", "이직 리스크 · 채용 공백 기간", "채용에만 평균 4개월 소요", "한 명의 스택에 기술이 한정"] },
                  { label: "RGEO Labs 구독", color: "#7eecd4", accent: "#7eecd4", icon: "✦", items: ["채용 대비 낮은 월 비용", "즉시 시작 · 공백 없음", "웹·앱·GEO·SEO 풀커버", "기술 방향 함께 설계", "장기 파트너십 구조"] },
                ].map(({ label, color, accent, icon, items }) => (
                  <div key={label}>
                    <div style={{ fontSize: 13, fontWeight: 700, color, marginBottom: 14, letterSpacing: ".04em" }}>{label}</div>
                    {items.map((t) => (
                      <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "rgba(255,255,255,.42)", marginBottom: 9 }}>
                        <span style={{ color: accent, fontSize: 10, flexShrink: 0, marginTop: 3 }}>{icon}</span>{t}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="divider" />

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 0" }}>
        <div className="pad-s" style={W}>
          <Reveal>
            <span className="eyebrow">Services</span>
            <div className="col2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 44 }}>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 880, letterSpacing: "-.04em", lineHeight: 1.1, color: "#f0ece8" }}>MVP만이 아닙니다.<br />전부 합니다.</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.36)", lineHeight: 1.82 }}>처음 만드는 것부터 이미 운영 중인 서비스까지, 웹부터 앱까지, 개발부터 노출까지 </p>
            </div>
          </Reveal>
          <div className="col3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {services.map(({ icon, label, desc }, i) => (
              <Reveal key={label} delay={i * 0.06}>
                <div className="card" style={{ padding: "26px 22px" }}>
                  <div style={{ fontSize: 20, marginBottom: 14, color: "rgba(126,236,212,.65)", lineHeight: 1 }}>{icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 750, color: "#f0ece8", marginBottom: 7, lineHeight: 1.4 }}>{label}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.36)", lineHeight: 1.75 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.22}>
            <div style={{ marginTop: 14, padding: "22px 26px", background: "rgba(126,236,212,.04)", border: "1px solid rgba(126,236,212,.1)", borderRadius: 16, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <span style={{ fontSize: 18, color: "rgba(126,236,212,.65)" }}>✅</span>
              <div>
                <div style={{ fontWeight: 750, fontSize: 14, color: "#f0ece8", marginBottom: 3 }}>개발과 동시에 GEO·SEO 구조를 심습니다</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.36)", lineHeight: 1.7 }}>처음 설계부터 AI 검색과 구글에 발견되는 구조로 시작합니다. 런칭 시점부터 노출 효과가 시작됩니다.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="divider" />

      {/* MODEL */}
      <section id="model" style={{ padding: "100px 0" }}>
        <div className="pad-s" style={W}>
          <Reveal>
            <span className="eyebrow">Cost model</span>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 880, letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: 14, color: "#f0ece8" }}>
              수천만 원 선결제 대신,<br />월 단위로 시작합니다.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.36)", lineHeight: 1.8, maxWidth: 500, marginBottom: 52 }}>
              초기 서비스는 완벽한 개발보다
              빠른 출시와 반복 개선이 더 중요합니다.

              RGEO Labs는 월 구독 구조로
              개발 비용과 실행 부담을 낮춥니다.
            </p>
          </Reveal>
          <div className="col3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 14 }}>
            {models.map(({ name, tag, accent, desc, points }, i) => (
              <Reveal key={name} delay={i * 0.08}>
                <div style={{ background: accent ? "rgba(126,236,212,.04)" : "rgba(255,255,255,.025)", border: `1px solid ${accent ? "rgba(126,236,212,.2)" : "rgba(255,255,255,.07)"}`, borderRadius: 20, padding: "30px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 8 }}>
                    <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-.03em", color: "#f0ece8", lineHeight: 1.2 }}>{name}</h3>
                    <span style={{ fontSize: 10, fontWeight: 700, color: accent ? "#7eecd4" : "rgba(255,255,255,.28)", background: accent ? "rgba(126,236,212,.08)" : "rgba(255,255,255,.05)", border: `1px solid ${accent ? "rgba(126,236,212,.18)" : "rgba(255,255,255,.07)"}`, padding: "3px 9px", borderRadius: 100, whiteSpace: "nowrap", letterSpacing: ".05em", flexShrink: 0 }}>{tag}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.82, marginBottom: 20, flex: 1 }}>{desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {points.map((pt) => (
                      <div key={pt} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "rgba(255,255,255,.48)" }}>
                        <span style={{ color: accent ? "#7eecd4" : "rgba(255,255,255,.22)", fontSize: 9, flexShrink: 0 }}>✓</span>{pt}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div style={{ marginTop: 18, padding: "18px 22px", borderRadius: 16, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", fontSize: 13, color: "rgba(255,255,255,.42)", lineHeight: 1.8 }}>
              프로젝트 규모와 협업 구조에 따라 다르지만, 월 구독형은 보통 수백만 원대부터 설계합니다.
              정확한 비용은 상담 후 범위와 우선순위에 맞춰 제안드립니다.
            </div>
          </Reveal>

        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "100px 0", background: "linear-gradient(180deg,rgba(255,255,255,.015),transparent)" }}>
        <div className="pad-s" style={W}>
          <Reveal>
            <span className="eyebrow">Process</span>
            <div className="col2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 44 }}>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 880, letterSpacing: "-.04em", lineHeight: 1.1, color: "#f0ece8" }}>
                요청부터 배포까지,<br />흐름은 단순하게.
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.36)", lineHeight: 1.82 }}>
                복잡한 개발 과정을 고객이 이해하기 쉬운 단계로 나눕니다. 상담, 설계, 개발, 운영까지 한 팀이 이어서 관리합니다.
              </p>
            </div>
          </Reveal>

          <div className="col4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {processSteps.map(({ step, title, desc }, i) => (
              <Reveal key={step} delay={i * 0.07}>
                <div className="card" style={{ padding: "28px 24px", minHeight: 190, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", right: 18, top: 14, fontSize: 42, fontWeight: 900, color: "rgba(126,236,212,.06)", letterSpacing: "-.06em" }}>{step}</div>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(126,236,212,.07)", border: "1px solid rgba(126,236,212,.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7eecd4", fontSize: 12, fontWeight: 900, marginBottom: 34 }}>{step}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#f0ece8", marginBottom: 10, letterSpacing: "-.03em" }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.38)", lineHeight: 1.75 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO PROJECTS */}
      <section id="cases" style={{ padding: "100px 0" }}>
        <div className="pad-s" style={W}>
          <Reveal>
            <span className="eyebrow">Demo Projects</span>

            <div
              className="col2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "end",
                marginBottom: 44
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 880,
                  letterSpacing: "-.04em",
                  lineHeight: 1.1,
                  color: "#f0ece8"
                }}
              >
                말로 설명하기보다,<br />이런 결과물을 만듭니다.
              </h2>

              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,.36)",
                  lineHeight: 1.82
                }}
              >
                AI 시대 기술운영파트너 RGEO Labs.
              </p>
            </div>
          </Reveal>

          <div
            className="col3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 14
            }}
          >
            {[
              {
                label: "LANDING",
                title: "브랜드 랜딩페이지",
                desc: "서비스 소개, 상담 전환, GEO·SEO 구조까지 포함한 랜딩을 제작합니다.",
                points: ["모바일 최적화", "상담 CTA 설계", "AI 검색 구조"]
              },
              {
                label: "MVP",
                title: "초기 서비스 MVP",
                desc: "아이디어를 빠르게 검증할 수 있도록 핵심 기능 중심으로 구현합니다.",
                points: ["회원가입", "관리자 기능", "배포 구조"]
              },
              {
                label: "OPERATION",
                title: "운영·유지보수 시스템",
                desc: "이미 운영 중인 서비스의 수정, 기능 추가, 자동화를 월 단위로 지원합니다.",
                points: ["기능 개선", "버그 수정", "자동화 연동"]
              }
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div
                  className="card"
                  style={{
                    padding: "28px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div
                    style={{
                      width: "fit-content",
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(126,236,212,.08)",
                      border: "1px solid rgba(126,236,212,.14)",
                      fontSize: 10,
                      fontWeight: 900,
                      letterSpacing: ".12em",
                      color: "#7eecd4",
                      marginBottom: 22
                    }}
                  >
                    {item.label}
                  </div>

                  <h3
                    style={{
                      fontSize: 21,
                      fontWeight: 850,
                      letterSpacing: "-.035em",
                      color: "#f0ece8",
                      lineHeight: 1.25,
                      marginBottom: 12
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,.42)",
                      lineHeight: 1.78,
                      marginBottom: 24,
                      flex: 1
                    }}
                  >
                    {item.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {item.points.map((point) => (
                      <div
                        key={point}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 9,
                          fontSize: 13,
                          color: "rgba(255,255,255,.52)"
                        }}
                      >
                        <span style={{ color: "#7eecd4", fontSize: 13 }}>✓</span>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "100px 0" }}>
        <div className="pad-s" style={{ ...W, maxWidth: 780 }}>
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 880, letterSpacing: "-.04em", lineHeight: 1.1, color: "#f0ece8", marginBottom: 48 }}>자주 묻는 질문</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}>
              {faqs.map((item, i) => <FAQItem key={i} {...item} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" style={{ padding: "0 0 160px" }}>
        <div className="pad-s" style={W}>
          <Reveal>
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
                padding: "clamp(48px,6vw,72px) clamp(32px,6vw,64px)"
              }}
            >
              <div className="col2" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr .9fr", gap: 56, alignItems: "start" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(126,236,212,.08)", border: "1px solid rgba(126,236,212,.15)", padding: "6px 14px", borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#7eecd4", marginBottom: 28 }}>
                    프로젝트 상담
                  </div>

                  <h2 style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 950, letterSpacing: "-.05em", lineHeight: 1.02, color: "#f0ece8", marginBottom: 20 }}>
                    만들고 싶은 것을<br />간단히 남겨주세요.
                  </h2>

                  <p style={{ fontSize: 16, color: "rgba(255,255,255,.42)", lineHeight: 1.82, marginBottom: 28, maxWidth: 380 }}>
                    기획서가 없어도 괜찮습니다. 이름, 연락처, 만들고 싶은 서비스만 남겨주시면 확인 후 연락드리겠습니다.
                  </p>

                  <a
                    href="https://pf.kakao.com/_HyuxjX/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#7eecd4", fontSize: 14, fontWeight: 700, textDecoration: "none" }}
                  >
                    카카오톡으로 바로 상담하기 →
                  </a>
                </div>

                <form
                  action="https://formspree.io/f/폼ID"
                  method="POST"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: 20,
                    padding: "26px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                  }}
                >
                  <input name="name" required placeholder="이름 또는 회사명" style={inputStyle} />
                  <input name="contact" required placeholder="연락처 또는 이메일" style={inputStyle} />
                  <select
                    name="type"
                    style={{
                      ...inputStyle,
                      background: "#111",
                      color: "#f0ece8",
                      cursor: "pointer"
                    }}
                  >
                    <option value="" style={{ background: "#111", color: "#f0ece8" }}>
                      프로젝트 유형 선택
                    </option>
                    <option value="web" style={{ background: "#111", color: "#f0ece8" }}>
                      웹서비스 / 홈페이지
                    </option>
                    <option value="app" style={{ background: "#111", color: "#f0ece8" }}>
                      앱 개발
                    </option>
                    <option value="mvp" style={{ background: "#111", color: "#f0ece8" }}>
                      MVP / 프로토타입
                    </option>
                    <option value="maintenance" style={{ background: "#111", color: "#f0ece8" }}>
                      유지보수 / 기능개선
                    </option>
                    <option value="geo" style={{ background: "#111", color: "#f0ece8" }}>
                      GEO / SEO / AI 노출
                    </option>
                  </select>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="만들고 싶은 서비스나 현재 고민을 적어주세요"
                    style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                  />

                  <button type="submit" className="btn-a" style={{ width: "100%", marginTop: 4 }}>
                    무료 상담 신청하기 →
                  </button>

                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.3)", lineHeight: 1.6, textAlign: "center" }}>
                    남겨주신 정보는 상담 목적으로만 사용됩니다.
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,.06)", background: "#050305" }}>
        <div className="pad-s" style={{ ...W, paddingTop: 52, paddingBottom: 100 }}>
          <div className="col4" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: ".1em", color: "#f0ece8" }}>RGEO Labs</div>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.2)", lineHeight: 1.85, maxWidth: 240 }}>좋은 아이디어가 개발 비용 때문에 멈추지 않도록. 시작부터 시장 안착까지 함께하는 기술 투자 동반자.</p>
            </div>
            {[
              { label: "서비스", items: ["웹 서비스 · SaaS", "iOS · Android 앱", "기존 시스템 유지보수", "MVP · 프로토타입", "GEO · SEO 최적화"] },
              { label: "비용 구조", items: ["월 구독형", "기술투자형", "혼합형 (케이스별)"] },
              { label: "연락", items: ["hello@rgeo.ai", "@rgeo.labs", "rgeo.ai"] },
            ].map(({ label, items }) => (
              <div key={label}>
                <div style={{ fontWeight: 700, fontSize: 11, letterSpacing: ".12em", color: "rgba(255,255,255,.32)", marginBottom: 16, textTransform: "uppercase" }}>{label}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {items.map((item) => <div key={item} style={{ fontSize: 13, color: "rgba(255,255,255,.2)" }}>{item}</div>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,.14)" }}>© 2025 RGEO Labs. All rights reserved.</span>
            <a href="#apply" className="btn-w" style={{ padding: "9px 20px", fontSize: 13, borderRadius: 10, textDecoration: "none" }}>프로젝트 신청 →</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
