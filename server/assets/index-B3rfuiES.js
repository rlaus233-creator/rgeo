import { Q as reactExports, I as jsxRuntimeExports } from "./server-_vYhmSsb.js";
import { f as faqs } from "./router-Bg660U1v.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const painPoints = ["개발자 연봉이 부담되서 채용을 못 하고 있다", "외주 맡겼다가 런칭도 못 하고 연락이 끊겼다", "만들었는데 아무도 모른다. 노출이 안 된다", "개발사 견적이 수천만 원부터 시작해 포기했다", "MVP만 먼저 만들고 싶은데 그것도 비용이 너무 크다", "운영 중인데 유지보수 해줄 개발자가 없다"];
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
const globalStats = [{
  value: "$92B",
  label: "글로벌 IT 아웃소싱 시장 규모",
  sub: "2024 기준, 연 8.7% 성장 중"
}, {
  value: "73%",
  label: "스타트업이 외부 개발팀을 활용",
  sub: "Deloitte Global Outsourcing Survey"
}, {
  value: "60%+",
  label: "비용 절감 효과",
  sub: "직접 채용 대비 평균 절감율"
}, {
  value: "3.5×",
  label: "더 빠른 출시 속도",
  sub: "전문 파트너 활용 시 평균"
}];
const globalCases = [{
  company: "Notion",
  category: "생산성 SaaS",
  insight: "작은 팀으로 빠르게 제품을 반복 개선하며 성장. 핵심 기능에 집중해 초기 사용자 경험을 완성.",
  metric: "$10B+",
  metricLabel: "기업가치"
}, {
  company: "Figma",
  category: "디자인 툴",
  insight: "완벽한 제품보다 빠른 출시와 피드백 수집을 우선하며 시장을 빠르게 검증.",
  metric: "$20B",
  metricLabel: "인수 가치"
}, {
  company: "Loom",
  category: "영상 커뮤니케이션",
  insight: "2주 만에 MVP 출시, 실제 반응 기반으로 빠른 시장 검증이 $975M 인수로 이어진 핵심 요인.",
  metric: "$975M",
  metricLabel: "Atlassian 인수"
}, {
  company: "Linear",
  category: "프로젝트 관리",
  insight: "소수 정예 팀 + Dev-as-a-Service 구조로 Jira 대체. 출시 1년 만에 수천 개 기업 채택.",
  metric: "4명",
  metricLabel: "초기 팀 규모"
}];
const trendData = [{
  year: "'20",
  value: 38
}, {
  year: "'21",
  value: 52
}, {
  year: "'22",
  value: 64
}, {
  year: "'23",
  value: 76
}, {
  year: "'24",
  value: 88
}, {
  year: "'25E",
  value: 97
}];
const targets = [{
  icon: "🚀",
  title: "개발팀이 없는 스타트업",
  desc: "개발자 채용 대신 월 구독형 기술팀으로 빠르게 서비스를 구축하세요."
}, {
  icon: "💡",
  title: "아이디어 단계의 초기 창업자",
  desc: "초기 구축 비용 부담을 낮추고 빠른 MVP로 시장 반응을 검증합니다."
}, {
  icon: "🛠️",
  title: "운영·유지보수가 필요한 서비스",
  desc: "기존 코드를 안정적으로 인수하고 개선·운영·기능 추가까지 함께합니다."
}, {
  icon: "🏢",
  title: "디지털 전환이 필요한 기업",
  desc: "오프라인 비즈니스를 디지털 서비스로 확장하고 GEO·SEO 구조까지 함께 설계합니다."
}];
const services = [{
  icon: "🚀",
  label: "웹 서비스 · SaaS",
  desc: "아이디어를 실제 운영 가능한 서비스로 구현합니다."
}, {
  icon: "📱",
  label: "iOS · Android 앱",
  desc: "네이티브·크로스플랫폼 환경 모두 대응합니다."
}, {
  icon: "🛠️",
  label: "기존 시스템 유지보수",
  desc: "레거시 코드 인수부터 개선·운영까지 지속 대응합니다."
}, {
  icon: "⚡",
  label: "MVP · 프로토타입",
  desc: "빠른 제작으로 시장 반응을 먼저 검증합니다."
}, {
  icon: "🌐",
  label: "GEO · SEO 최적화",
  desc: "AI 검색과 구글에 발견되는 구조를 함께 설계합니다."
}, {
  icon: "✨",
  label: "브랜딩 · 콘텐츠",
  desc: "기억되는 메시지와 AI 시대의 노출 전략을 만듭니다."
}];
const models = [{
  name: "월 구독형",
  tag: "가장 많이 선택",
  accent: true,
  desc: "개발자 채용 대신 월 구독 기반의 기술팀을 제공합니다. 초기 구축 부담을 낮추고 개발·운영·개선을 지속적으로 함께합니다.",
  points: ["시니어급 기술팀 구조", "초기 구축 비용 부담 완화", "지속 운영·개선 포함"]
}, {
  name: "기술투자형",
  tag: "가능성 있는 프로젝트",
  accent: false,
  desc: "프로젝트 가능성과 방향성이 맞는 경우, 개발비 대신 지분 또는 수익 공유 형태로 협업합니다.",
  points: ["초기 비용 없이 시작 가능", "지분·수익쉐어 기반 협의", "장기 파트너십 중심 구조"]
}, {
  name: "혼합형",
  tag: "프로젝트별 맞춤 설계",
  accent: false,
  desc: "프로젝트 단계와 팀 상황에 따라 월 구독형과 기술투자형 구조를 유연하게 조합합니다.",
  points: ["상황별 유연한 구조 설계", "단계별 계약 전환 가능", "장기 운영 중심 협업"]
}];
const processSteps = [{
  step: "01",
  title: "상담",
  desc: "아이디어와 현재 문제를 빠르게 정리합니다."
}, {
  step: "02",
  title: "설계",
  desc: "MVP 범위와 GEO·SEO 구조를 함께 잡습니다."
}, {
  step: "03",
  title: "개발",
  desc: "우선순위가 높은 기능부터 빠르게 구현합니다."
}, {
  step: "04",
  title: "운영",
  desc: "배포 후 월 단위로 개선과 유지보수를 이어갑니다."
}];
function useInView(threshold = 0.1) {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, {
      threshold
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}
function Reveal({
  children,
  delay = 0,
  y = 12,
  style: s = {}
}) {
  const [ref, inView] = useInView();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, style: {
    opacity: 1,
    transform: inView ? "none" : `translateY(${y}px)`,
    transition: `transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}s`,
    ...s
  }, children });
}
function TypingHeadline({
  lines,
  lineStyles = []
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: lines.map((text, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
    display: "block",
    minHeight: "1.05em",
    ...lineStyles[i] || {}
  }, children: text }, i)) });
}
function ParticleField() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    const N = 55;
    const pts = Array.from({
      length: N
    }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.4
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
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    opacity: 0.6
  }, "aria-hidden": "true" });
}
function TrendBar() {
  const [ref, inView] = useInView();
  const max = Math.max(...trendData.map((d) => d.value));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, style: {
    display: "flex",
    alignItems: "flex-end",
    gap: 10,
    height: 120
  }, children: trendData.map(({
    year,
    value
  }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      fontSize: 11,
      fontWeight: 700,
      color: i === trendData.length - 1 ? "#7eecd4" : "rgba(255,255,255,0.4)"
    }, children: [
      value,
      "%"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: "100%",
      background: i === trendData.length - 1 ? "rgba(126,236,212,0.35)" : "rgba(255,255,255,0.08)",
      borderRadius: 4,
      height: inView ? `${value / max * 80}px` : "0px",
      transition: `height 0.8s cubic-bezier(.16,1,.3,1) ${i * 0.08}s`,
      border: i === trendData.length - 1 ? "1px solid rgba(126,236,212,0.4)" : "none"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.3)",
      fontWeight: 600
    }, children: year })
  ] }, year)) });
}
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    borderBottom: "1px solid rgba(255,255,255,0.07)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "22px 0",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#f0ece8",
      fontFamily: "inherit",
      textAlign: "left",
      gap: 24
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1.5
      }, children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        width: 28,
        height: 28,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: 18,
        color: "rgba(255,255,255,0.4)",
        fontWeight: 300,
        lineHeight: 1,
        transform: open ? "rotate(45deg)" : "none",
        transition: "transform 0.25s"
      }, children: "+" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      maxHeight: open ? 300 : 0,
      overflow: "hidden",
      transition: "max-height 0.35s cubic-bezier(.16,1,.3,1)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      fontSize: 15,
      color: "rgba(255,255,255,0.45)",
      lineHeight: 1.85,
      paddingBottom: 22
    }, children: a }) })
  ] });
}
function OperatingVisualSection({
  W
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", style: {
    padding: "110px 0"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pad-s", style: W, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Operating system" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col2", style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 56,
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(30px,4vw,52px)",
          fontWeight: 900,
          letterSpacing: "-.045em",
          lineHeight: 1.05,
          color: "#f0ece8",
          marginBottom: 18
        }, children: [
          "아이디어에서",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "런칭까지,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "한 흐름으로 갑니다."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 15,
          color: "rgba(255,255,255,.38)",
          lineHeight: 1.8,
          maxWidth: 420,
          marginBottom: 28
        }, children: "요청은 보드로 관리하고, 개발은 배포 단위로 쪼개고, GEO 구조는 처음부터 같이 심습니다." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 10,
          maxWidth: 470
        }, children: [["01", "요청 정리"], ["02", "우선순위"], ["03", "배포·개선"]].map(([n, t]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          padding: "16px 14px",
          borderRadius: 16,
          background: "rgba(255,255,255,.035)",
          border: "1px solid rgba(255,255,255,.08)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 11,
            color: "#7eecd4",
            fontWeight: 900,
            marginBottom: 8
          }, children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 13,
            color: "rgba(255,255,255,.68)",
            fontWeight: 750
          }, children: t })
        ] }, n)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "relative",
        borderRadius: 28,
        padding: 24,
        background: "linear-gradient(135deg,rgba(126,236,212,.08),rgba(180,160,255,.05))",
        border: "1px solid rgba(255,255,255,.09)",
        overflow: "hidden"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "linear-gradient(to bottom,black,transparent 90%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "relative"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: ".14em",
            color: "#7eecd4",
            marginBottom: 18
          }, children: "HOW IT WORKS" }),
          [{
            step: "01",
            title: "상담 · 방향 정리",
            desc: "아이디어, 현재 문제, 필요한 기능을 먼저 정리합니다."
          }, {
            step: "02",
            title: "MVP 범위 설계",
            desc: "처음부터 다 만들지 않고, 출시 가능한 핵심 기능만 잡습니다."
          }, {
            step: "03",
            title: "제작 · 배포",
            desc: "웹·앱·자동화·관리자 기능을 우선순위대로 구현합니다."
          }, {
            step: "04",
            title: "운영 · 개선",
            desc: "출시 후에도 수정, 기능 추가, GEO·SEO 개선을 이어갑니다."
          }].map((item, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            position: "relative",
            display: "grid",
            gridTemplateColumns: "54px 1fr",
            gap: 16,
            paddingBottom: i === arr.length - 1 ? 0 : 24
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              position: "relative"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                width: 44,
                height: 44,
                borderRadius: 14,
                background: i === 0 ? "rgba(126,236,212,.14)" : "rgba(255,255,255,.055)",
                border: i === 0 ? "1px solid rgba(126,236,212,.26)" : "1px solid rgba(255,255,255,.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: i === 0 ? "#7eecd4" : "rgba(255,255,255,.45)",
                fontSize: 13,
                fontWeight: 900
              }, children: item.step }),
              i !== arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                position: "absolute",
                top: 50,
                left: 22,
                width: 1,
                height: "calc(100% - 26px)",
                background: "linear-gradient(to bottom,rgba(126,236,212,.32),rgba(255,255,255,.06))"
              } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              background: i === 0 ? "rgba(126,236,212,.07)" : "rgba(255,255,255,.04)",
              border: i === 0 ? "1px solid rgba(126,236,212,.15)" : "1px solid rgba(255,255,255,.07)",
              borderRadius: 18,
              padding: "16px 18px"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                fontSize: 15,
                fontWeight: 850,
                color: "#f0ece8",
                marginBottom: 6,
                letterSpacing: "-.02em"
              }, children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                fontSize: 12,
                color: "rgba(255,255,255,.43)",
                lineHeight: 1.65
              }, children: item.desc })
            ] })
          ] }, item.step))
        ] })
      ] })
    ] })
  ] }) }) });
}
function RgeoLabsLanding() {
  const [scrollY, setScrollY] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, {
      passive: true
    });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const W = {
    maxWidth: 1160,
    margin: "0 auto",
    padding: "0 40px",
    width: "100%",
    boxSizing: "border-box"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: {
    minHeight: "100vh",
    background: "#070508",
    color: "#f0ece8",
    fontFamily: "'Pretendard Variable','Pretendard','Apple SD Gothic Neo',sans-serif",
    overflowX: "hidden",
    width: "100%",
    maxWidth: "100%",
    textAlign: "left",
    boxSizing: "border-box",
    border: "none"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "noise" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200
    }, "aria-label": "주요 메뉴", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: `rgba(7,5,8,${Math.min(scrollY / 60, 1) * 0.9})`,
        backdropFilter: scrollY > 10 ? "blur(24px)" : "none",
        borderBottom: `1px solid rgba(255,255,255,${Math.min(scrollY / 60, 1) * 0.08})`,
        transition: "all .3s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        ...W,
        position: "relative",
        zIndex: 1,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: ".12em",
          color: "#f0ece8",
          lineHeight: 1.2
        }, children: "RGEO Labs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 4
        }, children: [
          [["시장 변화", "#market"], ["서비스", "#services"], ["진행 방식", "#process"], ["비용 구조", "#model"], ["FAQ", "#faq"]].map(([t, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: h, className: "hide-m", style: {
            fontSize: 13,
            color: "rgba(255,255,255,.38)",
            padding: "7px 13px",
            borderRadius: 8,
            transition: "color .2s",
            textDecoration: "none"
          }, children: t }, t)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#apply", className: "btn-w", style: {
            padding: "9px 20px",
            fontSize: 13,
            borderRadius: 10,
            marginLeft: 10,
            textDecoration: "none"
          }, children: "상담 신청" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 250,
      background: "rgba(7,5,8,.92)",
      backdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(126,236,212,.12)",
      padding: "12px 0",
      transition: "transform .35s ease"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      ...W,
      display: "flex",
      gap: 10,
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }, className: "hide-m", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: 12,
          fontWeight: 800,
          color: "#7eecd4",
          letterSpacing: ".04em"
        }, children: "초기 비용 0원부터 시작" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: 11,
          color: "rgba(255,255,255,.35)",
          marginTop: 2
        }, children: "아이디어를 실제 서비스로 만드는 가장 빠른 방법" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#apply", className: "btn-a bottom-cta-btn", style: {
        flex: "0 0 auto",
        textDecoration: "none"
      }, children: "무료 상담 신청 →" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "http://pf.kakao.com/_HyuxjX/chat", target: "_blank", rel: "noopener noreferrer", className: "bottom-cta-btn", style: {
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
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3C6.477 3 2 6.477 2 10.667c0 2.676 1.82 5.028 4.56 6.365L5.5 21l4.215-2.31c.74.105 1.503.16 2.285.16 5.523 0 10-3.477 10-7.667S17.523 3 12 3z" }) }),
        "카카오톡 상담하기"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      position: "relative",
      minHeight: "100svh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleField, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%,black,transparent)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 700,
          background: "radial-gradient(ellipse,rgba(126,236,212,.055) 0%,transparent 60%)",
          filter: "blur(40px)",
          animation: "float-slow 12s ease-in-out infinite"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle,rgba(160,120,255,.06) 0%,transparent 65%)",
          filter: "blur(60px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle,rgba(126,236,212,.04) 0%,transparent 65%)",
          filter: "blur(60px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: "50%",
          right: "12%",
          transform: "translateY(-50%)"
        }, className: "hide-m", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "relative",
          width: 440,
          height: 440
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(126,236,212,.08)",
            animation: "spin-slow 30s linear infinite"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            inset: "40px",
            borderRadius: "50%",
            border: "1px dashed rgba(180,160,255,.06)",
            animation: "spin-slow 20s linear infinite reverse"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(126,236,212,.25),rgba(126,236,212,.05))",
            border: "1px solid rgba(126,236,212,.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(126,236,212,.4)",
            animation: "pulse-dot 2.5s infinite"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: -6,
            marginLeft: -6,
            animation: "orbit 8s linear infinite"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#7eecd4",
            boxShadow: "0 0 16px rgba(126,236,212,.8)"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: -5,
            marginLeft: -5,
            animation: "orbit2 14s linear infinite"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#b4a0ff",
            boxShadow: "0 0 12px rgba(180,160,255,.7)"
          } }) }),
          [{
            text: "월 구독형",
            sub: "채용 대비 60% 절감",
            top: "8%",
            left: "-8%",
            delay: "0s"
          }, {
            text: "MVP 2주",
            sub: "빠른 시장 검증",
            top: "75%",
            left: "-5%",
            delay: ".4s"
          }, {
            text: "GEO·SEO",
            sub: "개발 동시 설계",
            top: "5%",
            right: "-5%",
            delay: ".8s"
          }].map(({
            text,
            sub,
            top,
            left,
            right,
            delay
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            position: "absolute",
            top,
            left,
            right,
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: 12,
            padding: "10px 14px",
            backdropFilter: "blur(12px)",
            whiteSpace: "nowrap",
            animation: `float-slow 6s ease-in-out ${delay} infinite`
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: 12,
              fontWeight: 750,
              color: "#f0ece8",
              lineHeight: 1.3
            }, children: text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: 10,
              color: "rgba(255,255,255,.35)",
              marginTop: 2
            }, children: sub })
          ] }, text))
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pad-s", style: {
        ...W,
        maxWidth: 1280,
        position: "relative",
        zIndex: 2,
        paddingTop: 130,
        paddingBottom: 150
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        maxWidth: 720
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(126,236,212,.06)",
          border: "1px solid rgba(126,236,212,.16)",
          borderRadius: 100,
          padding: "6px 16px 6px 8px",
          marginBottom: 40
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(126,236,212,.1)",
            borderRadius: 100,
            padding: "4px 10px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#7eecd4",
              display: "inline-block",
              animation: "pulse-dot 2s infinite"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontSize: 11,
              fontWeight: 700,
              color: "#7eecd4",
              letterSpacing: ".07em"
            }, children: "월 구독형 개발 파트너" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontSize: 12,
            color: "rgba(255,255,255,.32)"
          }, children: "개발자 채용 대신 월 구독으로" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
          fontSize: "clamp(42px,4.6vw,70px)",
          fontWeight: 940,
          lineHeight: 1.04,
          letterSpacing: "-.05em",
          margin: 0,
          marginTop: 0
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypingHeadline, { lines: ["월 구독형 개발팀", "웹·앱·AI 자동화", "AI시대 운영파트너"], lineStyles: [{
          color: "#f0ece8"
        }, {
          background: "linear-gradient(110deg,#f0ece8 0%,#7eecd4 42%,#b4a0ff 75%,#f0ece8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }, {
          color: "#f0ece8"
        }], charDelay: 60, lineGap: 280, startDelay: 400 }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: 14,
          marginTop: 52,
          marginBottom: 52
        }, children: [{
          label: "월구독",
          text: "개발자 채용 없이 월 단위로 시작합니다"
        }, {
          label: "풀스택",
          text: "웹·앱·MVP·자동화·유지보수까지 한 번에 대응합니다"
        }, {
          label: "AI",
          text: "처음부터 AI 검색·구글 노출 구조까지 함께 설계합니다"
        }].map(({
          label,
          text
        }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "14px 16px",
          borderRadius: 16,
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.07)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
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
          }, children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontSize: "clamp(14px,1.5vw,16px)",
            color: "rgba(240,236,232,.72)",
            fontWeight: 500,
            lineHeight: 1.6
          }, children: text })
        ] }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          gap: 12,
          marginBottom: 64,
          flexWrap: "wrap"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://pf.kakao.com/_HyuxjX/chat", target: "_blank", rel: "noopener noreferrer", className: "btn-w", style: {
          textDecoration: "none"
        }, children: "카카오톡 상담하기 →" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.24, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stats-flex", style: {
          display: "flex",
          borderTop: "1px solid rgba(255,255,255,.07)",
          borderBottom: "1px solid rgba(255,255,255,.07)"
        }, children: [["채용보다 저렴", "월 구독형"], ["초기 비용", "0원 가능"], ["대응 범위", "웹·앱·시스템"], ["GEO·SEO", "개발 동시 진행"]].map(([label, value], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          padding: "20px 28px",
          borderLeft: i > 0 ? "1px solid rgba(255,255,255,.07)" : "none",
          flex: 1
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 17,
            fontWeight: 800,
            color: "#f0ece8",
            letterSpacing: "-.02em",
            lineHeight: 1.2
          }, children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 11,
            color: "rgba(255,255,255,.28)",
            marginTop: 5,
            fontWeight: 500
          }, children: label })
        ] }, label)) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "absolute",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        opacity: 0.22
      }, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: 1,
          height: 36,
          background: "linear-gradient(to bottom,transparent,rgba(255,255,255,.7))"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: 9,
          letterSpacing: ".22em",
          textTransform: "uppercase"
        }, children: "scroll" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      borderTop: "1px solid rgba(255,255,255,.06)",
      borderBottom: "1px solid rgba(255,255,255,.06)",
      padding: "16px 0",
      background: "rgba(255,255,255,.01)"
    }, className: "marquee-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track", children: [...painPoints, ...painPoints, ...painPoints].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      paddingRight: 56,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontSize: 13,
        color: "rgba(255,255,255,.24)",
        fontWeight: 500
      }, children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        color: "rgba(126,236,212,.22)",
        fontSize: 10
      }, children: "◆" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OperatingVisualSection, { W }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "market", style: {
      padding: "100px 0"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pad-s", style: W, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Global trend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col2", style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
          marginBottom: 64
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
              fontSize: "clamp(28px,4vw,48px)",
              fontWeight: 880,
              letterSpacing: "-.04em",
              lineHeight: 1.1,
              color: "#f0ece8",
              marginBottom: 16
            }, children: [
              "전 세계는 이미",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "이렇게 바뀌었습니다."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: 16,
              color: "rgba(255,255,255,.38)",
              lineHeight: 1.82,
              marginBottom: 32
            }, children: "외부 기술 파트너를 활용하는 방식은 글로벌 스탠다드가 됐습니다. 미국 스타트업의 73%가 외부 개발팀을 활용하고, 한국 시장도 빠르게 같은 방향으로 이동하고 있습니다." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: 12,
              color: "rgba(255,255,255,.24)",
              marginBottom: 8,
              fontWeight: 600,
              letterSpacing: ".08em"
            }, children: "외부 기술 파트너 활용률 (글로벌 스타트업, %)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendBar, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14
          }, children: globalStats.map(({
            value,
            label,
            sub
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            background: "rgba(255,255,255,.03)",
            border: "1px solid rgba(255,255,255,.07)",
            borderRadius: 18,
            padding: "24px 20px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: "clamp(22px,3vw,30px)",
              fontWeight: 900,
              color: "#7eecd4",
              letterSpacing: "-.03em",
              marginBottom: 8,
              lineHeight: 1
            }, children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: 13,
              fontWeight: 700,
              color: "#f0ece8",
              marginBottom: 6,
              lineHeight: 1.4
            }, children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: 11,
              color: "rgba(255,255,255,.3)",
              lineHeight: 1.5
            }, children: sub })
          ] }, label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        borderTop: "1px solid rgba(255,255,255,.07)",
        paddingTop: 48,
        marginBottom: 16
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 12,
          fontWeight: 700,
          color: "rgba(255,255,255,.28)",
          letterSpacing: ".14em",
          textTransform: "uppercase",
          marginBottom: 28
        }, children: "이 방식으로 성공한 글로벌 케이스" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col2", style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14
        }, children: globalCases.map(({
          company,
          category,
          insight,
          metric,
          metricLabel
        }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
          padding: "28px 26px",
          display: "flex",
          gap: 20
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            flexShrink: 0
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              width: 48,
              height: 48,
              borderRadius: 13,
              background: "rgba(126,236,212,.07)",
              border: "1px solid rgba(126,236,212,.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontSize: 11,
              fontWeight: 900,
              color: "#7eecd4",
              letterSpacing: ".04em"
            }, children: company.slice(0, 2).toUpperCase() }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: 18,
              fontWeight: 900,
              color: "#7eecd4",
              letterSpacing: "-.03em",
              lineHeight: 1
            }, children: metric }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: 10,
              color: "rgba(255,255,255,.3)",
              marginTop: 3,
              fontWeight: 600
            }, children: metricLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontSize: 15,
                fontWeight: 800,
                color: "#f0ece8"
              }, children: company }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontSize: 10,
                color: "rgba(126,236,212,.7)",
                background: "rgba(126,236,212,.07)",
                border: "1px solid rgba(126,236,212,.14)",
                padding: "2px 8px",
                borderRadius: 100,
                fontWeight: 700,
                letterSpacing: ".05em"
              }, children: category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: 13,
              color: "rgba(255,255,255,.4)",
              lineHeight: 1.78
            }, children: insight })
          ] })
        ] }) }, company)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 14,
        padding: "28px 32px",
        background: "linear-gradient(135deg,rgba(126,236,212,.05),rgba(180,160,255,.04))",
        border: "1px solid rgba(126,236,212,.1)",
        borderRadius: 20,
        display: "flex",
        gap: 24,
        alignItems: "flex-start",
        flexWrap: "wrap"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 28,
          lineHeight: 1
        }, children: "🇰🇷" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          flex: 1,
          minWidth: 240
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 15,
            fontWeight: 750,
            color: "#f0ece8",
            marginBottom: 8
          }, children: "한국 시장도 빠르게 변하고 있습니다" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 13,
            color: "rgba(255,255,255,.4)",
            lineHeight: 1.8
          }, children: "개발자 인건비 급등, 채용 시장 경직, AI 도구의 보편화로 인해 국내 스타트업과 중소기업도 외부 기술 파트너십 모델로 전환하는 속도가 빨라지고 있습니다. 지금이 이 구조로 시작할 가장 적기입니다." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: 6,
          flexShrink: 0
        }, children: ["개발자 평균 연봉 43% 상승 (5년간)", "채용 기간 평균 4.2개월", "AI 기반 개발 생산성 3.5배 향상"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 12,
          color: "rgba(255,255,255,.45)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#7eecd4",
            fontSize: 9
          }, children: "✦" }),
          t
        ] }, t)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      padding: "100px 0"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pad-s", style: W, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "For who" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(28px,4vw,48px)",
          fontWeight: 880,
          letterSpacing: "-.04em",
          lineHeight: 1.1,
          marginBottom: 14,
          color: "#f0ece8"
        }, children: [
          "개발자가 없어서,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "개발비가 없어서",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "못 시작하고 있다면."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 16,
          color: "rgba(255,255,255,.36)",
          lineHeight: 1.8,
          maxWidth: 420,
          marginBottom: 48
        }, children: "RGEO Labs는 이 두 가지 문제를 동시에 해결합니다." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col2", style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
        marginBottom: 16
      }, children: targets.map(({
        icon,
        title,
        desc
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
        padding: "28px 24px",
        display: "flex",
        gap: 18,
        alignItems: "flex-start"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: 42,
          height: 42,
          borderRadius: 11,
          background: "rgba(126,236,212,.07)",
          border: "1px solid rgba(126,236,212,.13)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 17,
          color: "rgba(126,236,212,.7)",
          flexShrink: 0
        }, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: 15,
            fontWeight: 750,
            color: "#f0ece8",
            marginBottom: 7,
            lineHeight: 1.4
          }, children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 13,
            color: "rgba(255,255,255,.38)",
            lineHeight: 1.78
          }, children: desc })
        ] })
      ] }) }, title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: "rgba(126,236,212,.03)",
        border: "1px solid rgba(126,236,212,.1)",
        borderRadius: 20,
        padding: "32px 32px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 12,
          fontWeight: 700,
          color: "#7eecd4",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          marginBottom: 24
        }, children: "개발자 채용 vs RGEO Labs 구독" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col2", style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32
        }, children: [{
          label: "개발자 직접 채용",
          color: "rgba(255,255,255,.28)",
          accent: "rgba(239,68,68,.45)",
          icon: "✕",
          items: ["연봉 6,000~8,000만 원 + 4대보험", "장비·복지·퇴직금 추가 비용", "이직 리스크 · 채용 공백 기간", "채용에만 평균 4개월 소요", "한 명의 스택에 기술이 한정"]
        }, {
          label: "RGEO Labs 구독",
          color: "#7eecd4",
          accent: "#7eecd4",
          icon: "✦",
          items: ["채용 대비 낮은 월 비용", "즉시 시작 · 공백 없음", "웹·앱·GEO·SEO 풀커버", "기술 방향 함께 설계", "장기 파트너십 구조"]
        }].map(({
          label,
          color,
          accent,
          icon,
          items
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 13,
            fontWeight: 700,
            color,
            marginBottom: 14,
            letterSpacing: ".04em"
          }, children: label }),
          items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            fontSize: 13,
            color: "rgba(255,255,255,.42)",
            marginBottom: 9
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: accent,
              fontSize: 10,
              flexShrink: 0,
              marginTop: 3
            }, children: icon }),
            t
          ] }, t))
        ] }, label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", style: {
      padding: "100px 0"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pad-s", style: W, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col2", style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "end",
          marginBottom: 44
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
            fontSize: "clamp(28px,4vw,48px)",
            fontWeight: 880,
            letterSpacing: "-.04em",
            lineHeight: 1.1,
            color: "#f0ece8"
          }, children: [
            "MVP만이 아닙니다.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "전부 합니다."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 15,
            color: "rgba(255,255,255,.36)",
            lineHeight: 1.82
          }, children: "처음 만드는 것부터 이미 운영 중인 서비스까지, 웹부터 앱까지, 개발부터 노출까지 " })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col3", style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 14
      }, children: services.map(({
        icon,
        label,
        desc
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
        padding: "26px 22px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 20,
          marginBottom: 14,
          color: "rgba(126,236,212,.65)",
          lineHeight: 1
        }, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: 15,
          fontWeight: 750,
          color: "#f0ece8",
          marginBottom: 7,
          lineHeight: 1.4
        }, children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 13,
          color: "rgba(255,255,255,.36)",
          lineHeight: 1.75
        }, children: desc })
      ] }) }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.22, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 14,
        padding: "22px 26px",
        background: "rgba(126,236,212,.04)",
        border: "1px solid rgba(126,236,212,.1)",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        gap: 18,
        flexWrap: "wrap"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: 18,
          color: "rgba(126,236,212,.65)"
        }, children: "✅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontWeight: 750,
            fontSize: 14,
            color: "#f0ece8",
            marginBottom: 3
          }, children: "개발과 동시에 GEO·SEO 구조를 심습니다" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 13,
            color: "rgba(255,255,255,.36)",
            lineHeight: 1.7
          }, children: "처음 설계부터 AI 검색과 구글에 발견되는 구조로 시작합니다. 런칭 시점부터 노출 효과가 시작됩니다." })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "model", style: {
      padding: "100px 0"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pad-s", style: W, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Cost model" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(28px,4vw,48px)",
          fontWeight: 880,
          letterSpacing: "-.04em",
          lineHeight: 1.1,
          marginBottom: 14,
          color: "#f0ece8"
        }, children: [
          "수천만 원 선결제 대신,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "월 단위로 시작합니다."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 16,
          color: "rgba(255,255,255,.36)",
          lineHeight: 1.8,
          maxWidth: 500,
          marginBottom: 52
        }, children: "초기 서비스는 완벽한 개발보다 빠른 출시와 반복 개선이 더 중요합니다. RGEO Labs는 월 구독 구조로 개발 비용과 실행 부담을 낮춥니다." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col3", style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 14,
        marginBottom: 14
      }, children: models.map(({
        name,
        tag,
        accent,
        desc,
        points
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: accent ? "rgba(126,236,212,.04)" : "rgba(255,255,255,.025)",
        border: `1px solid ${accent ? "rgba(126,236,212,.2)" : "rgba(255,255,255,.07)"}`,
        borderRadius: 20,
        padding: "30px 24px",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
          gap: 8
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: 19,
            fontWeight: 800,
            letterSpacing: "-.03em",
            color: "#f0ece8",
            lineHeight: 1.2
          }, children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontSize: 10,
            fontWeight: 700,
            color: accent ? "#7eecd4" : "rgba(255,255,255,.28)",
            background: accent ? "rgba(126,236,212,.08)" : "rgba(255,255,255,.05)",
            border: `1px solid ${accent ? "rgba(126,236,212,.18)" : "rgba(255,255,255,.07)"}`,
            padding: "3px 9px",
            borderRadius: 100,
            whiteSpace: "nowrap",
            letterSpacing: ".05em",
            flexShrink: 0
          }, children: tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 13,
          color: "rgba(255,255,255,.4)",
          lineHeight: 1.82,
          marginBottom: 20,
          flex: 1
        }, children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: 7
        }, children: points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 9,
          fontSize: 13,
          color: "rgba(255,255,255,.48)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: accent ? "#7eecd4" : "rgba(255,255,255,.22)",
            fontSize: 9,
            flexShrink: 0
          }, children: "✓" }),
          pt
        ] }, pt)) })
      ] }) }, name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.24, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        marginTop: 18,
        padding: "18px 22px",
        borderRadius: 16,
        background: "rgba(255,255,255,.03)",
        border: "1px solid rgba(255,255,255,.07)",
        fontSize: 13,
        color: "rgba(255,255,255,.42)",
        lineHeight: 1.8
      }, children: "프로젝트 규모와 협업 구조에 따라 다르지만, 월 구독형은 보통 수백만 원대부터 설계합니다. 정확한 비용은 상담 후 범위와 우선순위에 맞춰 제안드립니다." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", style: {
      padding: "100px 0",
      background: "linear-gradient(180deg,rgba(255,255,255,.015),transparent)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pad-s", style: W, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col2", style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "end",
          marginBottom: 44
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
            fontSize: "clamp(28px,4vw,48px)",
            fontWeight: 880,
            letterSpacing: "-.04em",
            lineHeight: 1.1,
            color: "#f0ece8"
          }, children: [
            "요청부터 배포까지,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "흐름은 단순하게."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 15,
            color: "rgba(255,255,255,.36)",
            lineHeight: 1.82
          }, children: "복잡한 개발 과정을 고객이 이해하기 쉬운 단계로 나눕니다. 상담, 설계, 개발, 운영까지 한 팀이 이어서 관리합니다." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col4", style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 14
      }, children: processSteps.map(({
        step,
        title,
        desc
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
        padding: "28px 24px",
        minHeight: 190,
        position: "relative",
        overflow: "hidden"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          right: 18,
          top: 14,
          fontSize: 42,
          fontWeight: 900,
          color: "rgba(126,236,212,.06)",
          letterSpacing: "-.06em"
        }, children: step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: 38,
          height: 38,
          borderRadius: 12,
          background: "rgba(126,236,212,.07)",
          border: "1px solid rgba(126,236,212,.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#7eecd4",
          fontSize: 12,
          fontWeight: 900,
          marginBottom: 34
        }, children: step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: 17,
          fontWeight: 800,
          color: "#f0ece8",
          marginBottom: 10,
          letterSpacing: "-.03em"
        }, children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 13,
          color: "rgba(255,255,255,.38)",
          lineHeight: 1.75
        }, children: desc })
      ] }) }, step)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cases", style: {
      padding: "100px 0"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pad-s", style: W, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Demo Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col2", style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "end",
          marginBottom: 44
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
            fontSize: "clamp(28px,4vw,48px)",
            fontWeight: 880,
            letterSpacing: "-.04em",
            lineHeight: 1.1,
            color: "#f0ece8"
          }, children: [
            "말로 설명하기보다,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "이런 결과물을 만듭니다."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 15,
            color: "rgba(255,255,255,.36)",
            lineHeight: 1.82
          }, children: "AI 시대 기술운영파트너 RGEO Labs." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col3", style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 14
      }, children: [{
        label: "LANDING",
        title: "브랜드 랜딩페이지",
        desc: "서비스 소개, 상담 전환, GEO·SEO 구조까지 포함한 랜딩을 제작합니다.",
        points: ["모바일 최적화", "상담 CTA 설계", "AI 검색 구조"]
      }, {
        label: "MVP",
        title: "초기 서비스 MVP",
        desc: "아이디어를 빠르게 검증할 수 있도록 핵심 기능 중심으로 구현합니다.",
        points: ["회원가입", "관리자 기능", "배포 구조"]
      }, {
        label: "OPERATION",
        title: "운영·유지보수 시스템",
        desc: "이미 운영 중인 서비스의 수정, 기능 추가, 자동화를 월 단위로 지원합니다.",
        points: ["기능 개선", "버그 수정", "자동화 연동"]
      }].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: {
        padding: "28px 24px",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
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
        }, children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: 21,
          fontWeight: 850,
          letterSpacing: "-.035em",
          color: "#f0ece8",
          lineHeight: 1.25,
          marginBottom: 12
        }, children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 13,
          color: "rgba(255,255,255,.42)",
          lineHeight: 1.78,
          marginBottom: 24,
          flex: 1
        }, children: item.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: 8
        }, children: item.points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 9,
          fontSize: 13,
          color: "rgba(255,255,255,.52)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#7eecd4",
            fontSize: 13
          }, children: "✓" }),
          point
        ] }, point)) })
      ] }) }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", style: {
      padding: "100px 0"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pad-s", style: {
      ...W,
      maxWidth: 780
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "clamp(26px,4vw,44px)",
          fontWeight: 880,
          letterSpacing: "-.04em",
          lineHeight: 1.1,
          color: "#f0ece8",
          marginBottom: 48
        }, children: "자주 묻는 질문" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        borderTop: "1px solid rgba(255,255,255,.07)"
      }, children: faqs.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { ...item }, i)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", style: {
      padding: "0 0 160px"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pad-s", style: W, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "relative",
      borderRadius: 24,
      overflow: "hidden",
      background: "rgba(255,255,255,.04)",
      border: "1px solid rgba(255,255,255,.1)",
      padding: "clamp(48px,6vw,72px) clamp(32px,6vw,64px)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col2", style: {
      position: "relative",
      zIndex: 1,
      display: "grid",
      gridTemplateColumns: "1fr .9fr",
      gap: 56,
      alignItems: "start"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(126,236,212,.08)",
          border: "1px solid rgba(126,236,212,.15)",
          padding: "6px 14px",
          borderRadius: 100,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color: "#7eecd4",
          marginBottom: 28
        }, children: "프로젝트 상담" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
          fontSize: "clamp(36px,5vw,60px)",
          fontWeight: 950,
          letterSpacing: "-.05em",
          lineHeight: 1.02,
          color: "#f0ece8",
          marginBottom: 20
        }, children: [
          "만들고 싶은 것을",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "간단히 남겨주세요."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 16,
          color: "rgba(255,255,255,.42)",
          lineHeight: 1.82,
          marginBottom: 28,
          maxWidth: 380
        }, children: "기획서가 없어도 괜찮습니다. 이름, 연락처, 만들고 싶은 서비스만 남겨주시면 확인 후 연락드리겠습니다." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://pf.kakao.com/_HyuxjX/chat", target: "_blank", rel: "noopener noreferrer", style: {
          color: "#7eecd4",
          fontSize: 14,
          fontWeight: 700,
          textDecoration: "none"
        }, children: "카카오톡으로 바로 상담하기 →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { action: "https://formspree.io/f/폼ID", method: "POST", style: {
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 20,
        padding: "26px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", required: true, placeholder: "이름 또는 회사명", style: inputStyle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "contact", required: true, placeholder: "연락처 또는 이메일", style: inputStyle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "type", style: {
          ...inputStyle,
          background: "#111",
          color: "#f0ece8",
          cursor: "pointer"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", style: {
            background: "#111",
            color: "#f0ece8"
          }, children: "프로젝트 유형 선택" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "web", style: {
            background: "#111",
            color: "#f0ece8"
          }, children: "웹서비스 / 홈페이지" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "app", style: {
            background: "#111",
            color: "#f0ece8"
          }, children: "앱 개발" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mvp", style: {
            background: "#111",
            color: "#f0ece8"
          }, children: "MVP / 프로토타입" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "maintenance", style: {
            background: "#111",
            color: "#f0ece8"
          }, children: "유지보수 / 기능개선" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "geo", style: {
            background: "#111",
            color: "#f0ece8"
          }, children: "GEO / SEO / AI 노출" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", required: true, rows: 5, placeholder: "만들고 싶은 서비스나 현재 고민을 적어주세요", style: {
          ...inputStyle,
          resize: "vertical",
          minHeight: 120
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-a", style: {
          width: "100%",
          marginTop: 4
        }, children: "무료 상담 신청하기 →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 11,
          color: "rgba(255,255,255,.3)",
          lineHeight: 1.6,
          textAlign: "center"
        }, children: "남겨주신 정보는 상담 목적으로만 사용됩니다." })
      ] })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { style: {
      borderTop: "1px solid rgba(255,255,255,.06)",
      background: "#050305"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pad-s", style: {
      ...W,
      paddingTop: 52,
      paddingBottom: 100
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col4", style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
        gap: 40,
        marginBottom: 40
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: ".1em",
            color: "#f0ece8"
          }, children: "RGEO Labs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 13,
            color: "rgba(255,255,255,.2)",
            lineHeight: 1.85,
            maxWidth: 240
          }, children: "좋은 아이디어가 개발 비용 때문에 멈추지 않도록. 시작부터 시장 안착까지 함께하는 기술 투자 동반자." })
        ] }),
        [{
          label: "서비스",
          items: ["웹 서비스 · SaaS", "iOS · Android 앱", "기존 시스템 유지보수", "MVP · 프로토타입", "GEO · SEO 최적화"]
        }, {
          label: "비용 구조",
          items: ["월 구독형", "기술투자형", "혼합형 (케이스별)"]
        }, {
          label: "연락",
          items: ["hello@rgeo.ai", "@rgeo.labs", "rgeo.ai"]
        }].map(({
          label,
          items
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: ".12em",
            color: "rgba(255,255,255,.32)",
            marginBottom: 16,
            textTransform: "uppercase"
          }, children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: 10
          }, children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 13,
            color: "rgba(255,255,255,.2)"
          }, children: item }, item)) })
        ] }, label))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        borderTop: "1px solid rgba(255,255,255,.05)",
        paddingTop: 24,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: 12,
          color: "rgba(255,255,255,.14)"
        }, children: "© 2025 RGEO Labs. All rights reserved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#apply", className: "btn-w", style: {
          padding: "9px 20px",
          fontSize: 13,
          borderRadius: 10,
          textDecoration: "none"
        }, children: "프로젝트 신청 →" })
      ] })
    ] }) })
  ] });
}
export {
  RgeoLabsLanding as component
};
