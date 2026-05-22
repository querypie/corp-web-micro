import type { Metadata } from "next";
import { buildContactUrl, mainSiteLinks } from "@querypie/microsite-links";
import {
  Card,
  GradientText,
  HeroBadge,
  HeroSection,
  MicrositeFooter,
  MicrositeHeader,
  PrimaryCta,
  SecondaryCta,
  Section,
  SectionIntro,
  StatCard,
} from "@querypie/microsite-ui";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const contactUrl = buildContactUrl({ inquiry: "demo-request" });

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Demos", href: "#demos" },
  { label: "Resources", href: "#resources" },
];

const footerLinks = [
  { label: "QueryPie AI", href: mainSiteLinks.home },
  { label: "会社概要", href: mainSiteLinks.about },
  { label: "お問い合わせ", href: mainSiteLinks.contact },
  { label: "プライバシーポリシー", href: mainSiteLinks.privacyPolicy },
];

export default function FinanceHomePage() {
  return (
    <main className="overflow-hidden bg-[#05070a] text-slate-200">
      <MicrositeHeader
        logoSrc={siteConfig.logoSrc}
        homeHref={mainSiteLinks.home}
        ctaHref={contactUrl}
        links={navLinks}
      />

      <HeroSection>
        <div className="max-w-[540px]">
          <HeroBadge>Enterprise AI Agent Platform — Financial Services Edition</HeroBadge>
          <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.06em] text-white">
            信頼できるAIが
            <br />
            <GradientText>金融の現場を動かす</GradientText>
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            QueryPie Finance AIPは、強固なガバナンスと監査追跡性を前提とした、金融機関向けAIエージェント基盤です。
            与信審査、投資分析、ポートフォリオ監視、規制対応——現場の専門家が判断に注力できる環境を、AIエージェントが実現します。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryCta href="#demos">デモを見る</PrimaryCta>
            <SecondaryCta href="#solutions">ソリューション詳細</SecondaryCta>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <StatCard value="90%" label="定例レポート工数削減" />
            <StatCard value="24/7" label="リアルタイム・リスク監視" />
            <StatCard value="<5分" label="リスク検知→アラート" />
          </div>
        </div>

        <div className="relative min-h-[430px]" aria-hidden="true">
          <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-slate-900/60 p-6 shadow-[0_40px_120px_-50px_rgba(59,130,246,.75)] backdrop-blur">
            <DashboardCard className="left-8 top-8" title="Credit Risk" value="BBB+ → BBB−" tone="down" rows={["Probability of Default", "2.1% → 3.8%"]} />
            <DashboardCard className="right-8 top-36" title="Portfolio VaR (95%)" value="¥124M" tone="neutral" rows={["1-Day Volatility", "+2.34%"]} />
            <DashboardCard className="bottom-10 left-16" title="Compliance Check" value="PASSED" tone="ok" rows={["Audit Trail", "1,240 logs"]} />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/30 bg-blue-500/10 shadow-[0_0_70px_rgba(59,130,246,.45)]" />
          </div>
        </div>
      </HeroSection>

      <Section id="platform" className="bg-[#070b12]">
        <SectionIntro
          title={
            <>
              AI活用は、単なる業務効率化にとどまらない
              <br />
              <GradientText>経営課題への対策</GradientText>
            </>
          }
          body="QueryPie Finance AIPは、社内業務の劇的な効率化がもたらすコスト削減と、データ駆動型の意思決定によるリスク低減という2つのアプローチで、金融機関の経営課題の解決を支援します。"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <SolutionCard
            tag="業務効率化"
            title="専用AIエージェントで金融業務を自動化"
            body="細かい調査・整理・モニタリングをAIエージェントに任せ、人が本来の判断と顧客対応に集中できる状態を作ります。与信審査、投資調査、リスク監視を伴走支援します。"
            items={["Credit Check Agent", "Investment Analyst", "Portfolio Monitor"]}
          />
          <SolutionCard
            tag="意思決定支援"
            title="データ駆動型の投資・リスク判断を実現"
            body="社内データベースと市場データを横断的に分析し、構造化レポートとアラートを自動生成。ハルシネーション防止と監査証跡により、信頼できる意思決定を支援します。"
            items={["Market Signal", "Risk Scenario", "Audit Evidence"]}
          />
        </div>
      </Section>

      <Section id="solutions">
        <SectionIntro
          title="Finance AIPが金融機関にもたらす価値"
          body="「AIツール」を導入するのではなく、金融業務の核にAIエージェントを組み込む"
        />
        <div className="grid gap-5 md:grid-cols-2">
          <ValueCard title="審査・分析の時短化" stat="レポート作成時間 -85%">
            会社信用情報、決算データ、市場ニュース、業界レポートを数秒で横断収集し、与信担当者・ファンドマネージャーが判断に注力できる構造化サマリーを自動生成。
          </ValueCard>
          <ValueCard title="ガバナンスとコンプライアンス" stat="監査対応工数 -60%">
            AIエージェントの実行ログ、判断根拠、データ出典を完全に追跡。金融庁ガイドライン・Basel III対応に必要な説明可能性と監査証跡を標準装備。
          </ValueCard>
          <ValueCard title="リアルタイム・リスク制御" stat="リスク検知レイテンシ <5分">
            ポートフォリオ、顧客資産、市場データを24時間監視。異常値や相関崩壊を検知すると、即座にアラートと複数対応シナリオを関係者に通知。
          </ValueCard>
          <ValueCard title="既存システムとの統合" stat="連携開発期間 -70%">
            MCP（Model Context Protocol）で市場データフィード、社内DB、CRM、ワークフローシステムと安全に連携。置き換えではなく、既存基盤を拡張します。
          </ValueCard>
        </div>
      </Section>

      <Section id="demos" className="bg-[#070b12]">
        <SectionIntro title="業界特化デモ" body="実際の金融業務シナリオで動くAIエージェントをご覧ください" />
        <div className="grid gap-6 lg:grid-cols-3">
          <DemoCard
            video="https://www.youtube.com/embed/BgTLFjJj9ws?rel=0"
            tag="与信・リスク管理"
            title="Credit Check AI Agent"
            body="取引先企業の信用情報を自動収集・分析し、与信判断に必要なサマリーを即座に生成。決算短信、ニュース、格付け情報を横断的に参照します。"
            meta={["財務データ連携", "リスクスコアリング"]}
          />
          <DemoCard
            video="https://www.youtube.com/embed/Q9ckOc4SG38?rel=0"
            tag="投資分析・調査"
            title="Investment Analyst AI Agent"
            body="市場レポート、財務データ、アナリストレポートを横断的に収集・分析し、投資判断に直結する構造化レポートを自動作成します。"
            meta={["市場データ自動収集", "投資レポート自動生成"]}
          />
          <DemoCard
            video="https://www.youtube.com/embed/fgB58Y3VSIo?rel=0"
            tag="資産運用・ポートフォリオ"
            title="Portfolio Insight AI Agent"
            body="複数資産の価格変動、相関係数、ボラティリティをAIが継続的に監視。VaRやストレステスト指標の異常を検知し自動通知します。"
            meta={["異常検知アラート", "リアルタイム監視"]}
          />
        </div>
      </Section>

      <Section id="resources">
        <SectionIntro title="金融向けAIPのコア機能" body="金融業界のレギュレーションと業務特性を考慮した設計" />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["MCPによる標準連携", "Model Context Protocolを採用し、Bloomberg、Refinitiv、社内DW、core banking systemなど、金融機関の既存データパイプラインと安全に連携。専用コネクタ開発の工数を大幅に削減。"],
            ["金融グレード・ガバナンス", "エージェントの実行全てに監査ログを付与。誰が、いつ、どのデータを参照し、どの判断根拠でレポートを生成したかを完全追跡。権限分離、承認ワークフロー、データマスキングを標準装備。"],
            ["市場変動への自律的対応", "設定した閾値やイベントトリガーに基づき、エージェントが自律的にデータ収集・分析・アラート発火を実行。格付け変更検知から担当者通知までを自動化します。"],
            ["マルチエージェント協調", "与信エージェント、マーケットデータエージェント、コンプライアンスエージェントが並列・連携動作。複雑な金融業務を専門エージェントの分担と承認チェーンで再現。"],
          ].map(([title, body]) => (
            <Card key={title}>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 leading-8 text-slate-400">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#070b12]">
        <SectionIntro title="金融現場のユースケース" body="前線の業務に組み込まれている実践的活用法" />
        <div className="space-y-5">
          <UseCase number="01" title="企業与信審査の高速化" flow={["申込入力", "AI自動収集", "リスクスコア", "担当者判断"]}>
            取引先候補の決算短信、格付け情報、業界ニュース、過去与信履歴をAIがリアルタイムに収集・統合し、与信担当者が判断に必要なサマリーとリスク要因を即座に提示。
          </UseCase>
          <UseCase number="02" title="投資調査レポートの自動化" flow={["銘柄指定", "データ収集・分析", "レポート自動生成", "アナリスト承認"]}>
            対象企業の財務データ、ニュース、アナリストレポートを横断的に収集・要約し、投資判断に必要な構造化レポートを自動作成。
          </UseCase>
          <UseCase number="03" title="ポートフォリオ・リスク監視" flow={["リスク監視", "閾値超過検知", "自動アラート", "対応実行"]}>
            複数資産の価格変動、相関係数、ボラティリティをAIが24時間365日監視。VaRやストレステスト指標が閾値を超えた際、対応案を関係者へ即時通知。
          </UseCase>
        </div>
      </Section>

      <Section className="text-center">
        <SectionIntro
          title="小さく始めて、確実に広げる"
          body="特定業務からスモールスタートし、検証と現場フィードバックを重ねながら全社基盤へと拡張します。"
        />
        <div className="grid gap-5 text-left md:grid-cols-3">
          <RoadmapStep step="STEP 1" title="成果の出る領域を見極める">
            既存の業務フローを分析し、最も負荷が高くAIによるコスト削減や価値向上が見込める業務に絞ってエージェントを適用。
          </RoadmapStep>
          <RoadmapStep step="STEP 2" title="現場が使い続ける仕組みを作る">
            現場のフィードバックをもとにプロンプトや参照データを調整。使われるためのUI/UXと運用ルールを固め、ROIを可視化します。
          </RoadmapStep>
          <RoadmapStep step="STEP 3" title="安全に全社の基盤へ拡張する">
            QueryPieの権限制御と監査ログを活用し、セキュリティを担保したまま他部門へ横展開します。
          </RoadmapStep>
        </div>
        <div className="mx-auto mt-16 max-w-3xl rounded-[32px] border border-blue-300/20 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 p-10">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-white">金融業務に特化したAIエージェントを導入する</h2>
          <p className="mt-5 leading-8 text-slate-300">
            与信審査、投資分析、ポートフォリオ監視、規制対応——貴社の業務フローに最適なPoCと導入支援をご用意しています。
          </p>
          <PrimaryCta href={contactUrl} className="mt-8">
            お問い合わせ・PoCのご相談
          </PrimaryCta>
          <p className="mt-6 text-xs text-slate-500">※本サイトはデモ・検証用の簡易ランディングページです。</p>
        </div>
      </Section>

      <MicrositeFooter logoSrc={siteConfig.logoSrc} links={footerLinks} />
    </main>
  );
}

function DashboardCard({
  className,
  title,
  value,
  tone,
  rows,
}: {
  className: string;
  title: string;
  value: string;
  tone: "down" | "neutral" | "ok";
  rows: [string, string];
}) {
  const toneClass = tone === "down" ? "text-rose-300" : tone === "ok" ? "text-emerald-300" : "text-blue-200";
  return (
    <div className={`absolute w-72 rounded-2xl border border-white/10 bg-slate-950/75 p-5 shadow-2xl backdrop-blur ${className}`}>
      <div className="mb-4 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-slate-400">{title}</span>
        <span className={`font-bold ${toneClass}`}>{value}</span>
      </div>
      <div className="mt-3 flex justify-between gap-4 text-sm">
        <span className="text-slate-400">{rows[0]}</span>
        <span className={`font-bold ${toneClass}`}>{rows[1]}</span>
      </div>
    </div>
  );
}

function SolutionCard({ tag, title, body, items }: { tag: string; title: string; body: string; items: string[] }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-7">
        <div className="space-y-3 rounded-2xl bg-slate-950/60 p-5">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="p-7">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">{tag}</span>
        <h3 className="mt-3 text-2xl font-black text-white">{title}</h3>
        <p className="mt-4 leading-8 text-slate-400">{body}</p>
        <span className="mt-5 inline-flex text-sm font-bold text-blue-300">詳細を見る →</span>
      </div>
    </Card>
  );
}

function ValueCard({ title, stat, children }: { title: string; stat: string; children: React.ReactNode }) {
  return (
    <Card>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-xl text-blue-300">◆</div>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-4 leading-8 text-slate-400">{children}</p>
      <div className="mt-6 rounded-xl border border-blue-300/20 bg-blue-500/10 px-4 py-3 text-sm font-bold text-blue-200">{stat}</div>
    </Card>
  );
}

function DemoCard({ video, tag, title, body, meta }: { video: string; tag: string; title: string; body: string; meta: string[] }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="aspect-video bg-black">
        <iframe src={video} title={title} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div className="p-6">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-violet-300">{tag}</span>
        <h3 className="mt-3 text-xl font-black text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">{body}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {meta.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{item}</span>
          ))}
        </div>
      </div>
    </Card>
  );
}

function UseCase({ number, title, flow, children }: { number: string; title: string; flow: string[]; children: React.ReactNode }) {
  return (
    <Card className="grid gap-6 md:grid-cols-[90px_1fr]">
      <div className="text-4xl font-black text-blue-300">{number}</div>
      <div>
        <h3 className="text-2xl font-black text-white">{title}</h3>
        <p className="mt-4 leading-8 text-slate-400">{children}</p>
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-300">
          {flow.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1">{item}</span>
              {index < flow.length - 1 ? <span className="text-blue-300">→</span> : null}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

function RoadmapStep({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <Card>
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">{step}</span>
      <h3 className="mt-3 text-xl font-black text-white">{title}</h3>
      <p className="mt-4 leading-8 text-slate-400">{children}</p>
    </Card>
  );
}
