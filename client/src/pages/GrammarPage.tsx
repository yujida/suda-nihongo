/*
 * 수다니혼고 문법은 말하기 도구 페이지
 * 에듀마가진 스타일: 아코디언 + 비교 예문
 */
import { useState } from "react";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/Layout";
import { grammarPatternsTyped as grammarPatterns, type GrammarPattern } from "@/lib/data";
import { cn } from "@/lib/utils";

const levelColors: Record<string, string> = {
  N5: "badge-n5",
  N4: "badge-n4",
  N3: "badge-n3",
  N2: "badge-n2",
  N1: "badge-n1",
};

function GrammarCard({ gp }: { gp: GrammarPattern }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden suda-card">
      <button
        className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <span className={cn("text-xs font-bold px-2 py-0.5 rounded-full shrink-0", levelColors[gp.level])}>
            {gp.level}
          </span>
          <div>
            <div
              className="text-xl font-bold jp-text mb-0.5"
              style={{ color: "oklch(0.28 0.12 265)" }}
            >
              {gp.pattern}
            </div>
            <div
              className="text-xs px-2 py-0.5 rounded-full inline-block text-white"
              style={{ backgroundColor: "oklch(0.65 0.16 35)" }}
            >
              {gp.function}
            </div>
          </div>
        </div>
        {open ? <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
      </button>

      {open && (
        <div className="px-5 pb-5 animate-float-in">
          <div className="border-t border-border pt-4 space-y-4">
            {/* 설명 */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">설명</div>
              <p className="text-sm text-foreground leading-relaxed">{gp.explanation}</p>
            </div>

            {/* 자연스러운 예문 */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">✅ 자연스러운 표현</div>
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: "oklch(0.28 0.12 265 / 0.06)", border: "1px solid oklch(0.28 0.12 265 / 0.15)" }}
              >
                <p className="text-base jp-text font-medium text-foreground">{gp.naturalExample}</p>
              </div>
            </div>

            {/* 어색한 예문 */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">⚠️ 어색한 표현</div>
              <div className="rounded-xl p-4 bg-red-50 border border-red-100">
                <p className="text-base jp-text font-medium text-red-700">{gp.unnaturalExample}</p>
              </div>
            </div>

            {/* 팁 */}
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: "oklch(0.65 0.16 35 / 0.08)", border: "1px solid oklch(0.65 0.16 35 / 0.2)" }}
            >
              <div className="text-xs font-semibold mb-1" style={{ color: "oklch(0.45 0.12 35)" }}>
                💡 말하기 팁
              </div>
              <p className="text-sm text-foreground/80">{gp.tip}</p>
            </div>

            {/* 대화 활용 */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">💬 대화에서 이렇게</div>
              <div className="bg-muted rounded-xl p-4">
                <p className="text-sm jp-text text-foreground/80">{gp.dialogueUse}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GrammarPage() {
  const [filterLevel, setFilterLevel] = useState("전체");
  const levels = ["전체", "N5", "N4", "N3", "N2", "N1"];

  const filtered = grammarPatterns.filter(
    (gp) => filterLevel === "전체" || gp.level === filterLevel
  );

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4 lg:p-6">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "oklch(0.28 0.12 265 / 0.1)" }}
            >
              <GraduationCap className="w-5 h-5" style={{ color: "oklch(0.28 0.12 265)" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold">문법은 말하기 도구</h1>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                文法は話すツール
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            문법 설명보다 "이 주제를 말할 때 어떻게 써먹는가"를 보여드립니다.
            자연스러운 표현과 어색한 표현을 비교해 보세요.
          </p>
        </div>

        {/* 핵심 원칙 배너 */}
        <div
          className="rounded-2xl p-5 mb-6 text-white"
          style={{ background: "linear-gradient(135deg, oklch(0.28 0.12 265) 0%, oklch(0.35 0.10 265) 100%)" }}
        >
          <h2 className="font-bold mb-3">📌 이 코너의 핵심 원칙</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-white/10 rounded-xl p-3">
              <div className="font-semibold mb-1">말하기 기능 중심</div>
              <p className="text-white/70">문법 이름보다 "언제, 어떤 상황에서 쓰는가"를 먼저 배웁니다.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <div className="font-semibold mb-1">비교로 배우기</div>
              <p className="text-white/70">자연스러운 표현과 어색한 표현을 나란히 비교합니다.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <div className="font-semibold mb-1">대화에 바로 적용</div>
              <p className="text-white/70">배운 문법을 실제 대화 상황에서 바로 써볼 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 레벨 필터 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setFilterLevel(level)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                filterLevel === level
                  ? "text-white"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              )}
              style={filterLevel === level ? { backgroundColor: "oklch(0.28 0.12 265)" } : {}}
            >
              {level}
            </button>
          ))}
        </div>

        {/* 문법 카드 목록 */}
        <div className="space-y-3">
          {filtered.map((gp, i) => (
            <div key={gp.id} className={cn("animate-float-in", `stagger-${Math.min(i + 1, 5)}`)}>
              <GrammarCard gp={gp} />
            </div>
          ))}
        </div>

        {/* 학습 루틴 안내 */}
        <div
          className="mt-8 rounded-2xl p-5"
          style={{ backgroundColor: "oklch(0.60 0.07 145 / 0.08)", border: "1px solid oklch(0.60 0.07 145 / 0.2)" }}
        >
          <h3 className="font-semibold mb-3" style={{ color: "oklch(0.35 0.07 145)" }}>
            🌱 문법 학습 루틴
          </h3>
          <ol className="text-sm text-muted-foreground space-y-2">
            <li className="flex gap-2"><span className="font-bold text-foreground">1.</span> 문법 패턴의 "말하기 기능"을 먼저 확인하세요.</li>
            <li className="flex gap-2"><span className="font-bold text-foreground">2.</span> 자연스러운 예문을 소리 내어 3번 읽어보세요.</li>
            <li className="flex gap-2"><span className="font-bold text-foreground">3.</span> 어색한 예문과 비교하며 차이를 느껴보세요.</li>
            <li className="flex gap-2"><span className="font-bold text-foreground">4.</span> 오늘의 주제 카드에서 해당 문법을 찾아 써보세요.</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}
