import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">페이지를 찾을 수 없습니다</h2>
        <p className="mt-2 text-sm text-muted-foreground">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            홈으로
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">페이지를 불러오지 못했습니다</h1>
        <p className="mt-2 text-sm text-muted-foreground">잠시 후 다시 시도해 주세요.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            다시 시도
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            홈으로
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RGEO Labs",
  alternateName: ["RGEO LABS", "알지오랩스"],
  url: "/",
  email: "hello@rgeo.ai",
  description:
    "초기 비용 0원부터 시작 가능한 월 구독형 외주개발 서비스. 웹·앱·MVP 개발과 GEO·SEO 최적화를 동시에 설계하는 기술 투자 동반자.",
  sameAs: [],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RGEO Labs | 알지오랩스" },
      {
        name: "description",
        content:
          "RGEO Labs는 초기 비용 0원부터 시작 가능한 월 구독형 외주개발 서비스입니다. 웹·앱·MVP 개발과 GEO·SEO 최적화를 한 팀이 함께 설계합니다.",
      },
      { name: "author", content: "RGEO Labs" },
      { name: "keywords", content: "RGEO Labs, 알지오랩스, 월 구독 외주개발, 외주개발, MVP 개발, 스타트업 개발, GEO 최적화, SEO 최적화, AI 검색 최적화, 웹앱 개발, 앱 개발 외주" },
      { name: "theme-color", content: "#070508" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "RGEO Labs" },
      { property: "og:locale", content: "ko_KR" },
      { property: "og:title", content: "RGEO Labs | 알지오랩스" },
      { property: "og:description", content: "RGEO LABS는RGEO LABS는 초기 개발비 0원부터 시작 가능한 AI 기반 빌드 스튜디오입니다. MVP 개발, 랜딩페이지 제작, GEO·SEO 최적화, AI 검색 노출, 월 유지보수형 개발 및 기술투자형 협업을 제공합니다" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RGEO Labs | 알지오랩스" },
      { name: "twitter:description", content: "RGEO LABS는RGEO LABS는 초기 개발비 0원부터 시작 가능한 AI 기반 빌드 스튜디오입니다. MVP 개발, 랜딩페이지 제작, GEO·SEO 최적화, AI 검색 노출, 월 유지보수형 개발 및 기술투자형 협업을 제공합니다" },
      { name: "description", content: "RGEO LABS는RGEO LABS는 초기 개발비 0원부터 시작 가능한 AI 기반 빌드 스튜디오입니다. MVP 개발, 랜딩페이지 제작, GEO·SEO 최적화, AI 검색 노출, 월 유지보수형 개발 및 기술투자형 협업을 제공합니다" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/628faa33-ed50-46b3-8a8c-5af905eafe9a" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/628faa33-ed50-46b3-8a8c-5af905eafe9a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://cdn.jsdelivr.net" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
