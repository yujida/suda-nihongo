/*
 * 수다니혼고 어디가 어색하지? 오류 교정 페이지
 * 에듀마가진 스타일: 비교 카드 + 퀴즈 모드
 */
import { useState } from "react";
import { AlertCircle, Eye, EyeOff, RefreshCw } from "lucide-react";
import Layout from "@/components/Layout";
import { errorCorrections, type ErrorCorrection } from "@/lib/data";
import { cn } from "@/lib/utils";

const levelColors: Record<string, string> = {
  N5: "badge-n5",
  N4: "badge-n4",
  N3: "badge-n3",
  N2: "badge-n2",
  N1: "badge-n1",
};

function ErrorCard({ err, quizMode }: { err: ErrorCorrection; quizMode: boolean }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className={cn("text-xs font-bold px-2 py-0.5 rounded-full", levelColors[err.level])}>
            {err.level}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
            {err.category}
          </span>
        </div>

        {/* 어색한 문장 */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-red-500 mb-2">❌ 어색한 표현</div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4">
            <p className="text-base jp-text text-red-700">{err.learnerSentence}</p>
          </div>
        </div>

        {/* 자연스러운 문장 (퀴즈 모드에서는 숨김) */}
        {quizMode && !revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="w-full py-3 rounded-xl border-2 border-dashed border-border text-sm text-muted-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            자연스러운 표현 확인하기
          </button>
        ) : (
          <div className="animate-float-in">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-green-600">✅ 더 자연스러운 표현</div>
              {quizMode && (
                <button
                  onClick={() => setRevealed(false)}
                  className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground"
                >
                  <EyeOff className="w-3 h-3" />
                  숨기기
                </button>
              )}
            </div>
            <div
              className="rounded-xl p-4 mb-4"
              style={{ backgroundColor: "oklch(0.28 0.12 265 / 0.06)", border: "1px solid oklch(0.28 0.12 265 / 0.15)" }}
            >
              <p className="text-base jp-text font-medium text-foreground">{err.naturalSentence}</p>
            </div>

            {/* 이유 */}
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: "oklch(0.65 0.16 35 / 0.08)", border: "1px solid oklch(0.65 0.16 35 / 0.2)" }}
            >
              <div className="text-xs font-semibold mb-1" style={{ color: "oklch(0.45 0.12 35)" }}>
                💡 왜 어색한가?
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{err.reason}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ErrorFixPage() {
  const [quizMode, setQuizMode] = useState(false);
  const [filterLevel, setFilterLevel] = useState("전체");
  const [filterCategory, setFilterCategory] = useState("전체");

  const levels = ["전체", "N5", "N4", "N3", "N2", "N1"];
  const categories = ["전체", ...Array.from(new Set(errorCorrections.map((e) => e.category)))];

  const filtered = errorCorrections.filter((err) => {
    const levelMatch = filterLevel === "전체" || err.level === filterLevel;
    const catMatch = filterCategory === "전체" || err.category === filterCategory;
    return levelMatch && catMatch;
  });

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4 lg:p-6">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "oklch(0.65 0.16 35 / 0.1)" }}
            >
              <AlertCircle className="w-5 h-5" style={{ color: "oklch(0.65 0.16 35)" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold">어디가 어색하지?</h1>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                どこが不自然？
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            한국인 학습자가 자주 만드는 어색한 문장을 실제 회화에 맞게 고쳐드립니다.
            "틀렸다/맞았다"보다 <strong>왜 어색한지</strong>를 이해하는 것이 중요합니다.
          </p>
        </div>

        {/* 필터 & 퀴즈 모드 */}
        <div className="bg-white rounded-2xl border border-border p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold">학습 모드</span>
            <button
              onClick={() => setQuizMode(!quizMode)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                quizMode
                  ? "text-white"
                  : "bg-muted text-muted-foreground"
              )}
              style={quizMode ? { backgroundColor: "oklch(0.65 0.16 35)" } : {}}
            >
              <RefreshCw className="w-4 h-4" />
              퀴즈 모드 {quizMode ? "ON" : "OFF"}
            </button>
          </div>

          <div className="mb-3">
            <div className="text-xs text-muted-foreground mb-2">레벨</div>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setFilterLevel(level)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                    filterLevel === level ? "text-white" : "bg-muted text-muted-foreground hover:bg-secondary"
                  )}
                  style={filterLevel === level ? { backgroundColor: "oklch(0.28 0.12 265)" } : {}}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-foreground mb-2">카테고리</div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                    filterCategory === cat ? "text-white" : "bg-muted text-muted-foreground hover:bg-secondary"
                  )}
                  style={filterCategory === cat ? { backgroundColor: "oklch(0.28 0.12 265)" } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {quizMode && (
          <div
            className="rounded-xl p-3 mb-4 text-sm"
            style={{ backgroundColor: "oklch(0.65 0.16 35 / 0.1)", color: "oklch(0.45 0.12 35)" }}
          >
            🎯 <strong>퀴즈 모드</strong>: 어색한 표현을 보고 먼저 스스로 고쳐본 뒤, 버튼을 눌러 정답을 확인하세요.
          </div>
        )}

        {/* 오류 카드 목록 */}
        <div className="space-y-4">
          {filtered.map((err, i) => (
            <div key={err.id} className={cn("animate-float-in", `stagger-${Math.min(i + 1, 5)}`)}>
              <ErrorCard err={err} quizMode={quizMode} />
            </div>
          ))}
        </div>

        {/* 오류 패턴 요약 */}
        <div
          className="mt-8 rounded-2xl p-5"
          style={{ background: "linear-gradient(135deg, oklch(0.28 0.12 265) 0%, oklch(0.35 0.10 265) 100%)" }}
        >
          <h3 className="font-bold text-white mb-4">📊 한국인 학습자 주요 오류 패턴</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { pattern: "「から」 과다 사용", tip: "회화에서는 「て」나 「ので」가 더 자연스러운 경우가 많습니다." },
              { pattern: "「ことが好き」 vs 「のが好き」", tip: "회화에서는 「のが好き」가 더 자연스럽게 들립니다." },
              { pattern: "「会う」 vs 「会える」", tip: "만남의 기쁨을 표현할 때는 가능형 「会えて」가 더 자연스럽습니다." },
              { pattern: "경어 레벨 불일치", tip: "상대와의 관계에 따라 적절한 경어 레벨을 선택하세요." },
            ].map(({ pattern, tip }) => (
              <div key={pattern} className="bg-white/10 rounded-xl p-3">
                <div className="text-white font-semibold text-sm mb-1">{pattern}</div>
                <div className="text-white/60 text-xs">{tip}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
