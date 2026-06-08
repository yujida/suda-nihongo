/*
 * 수다니혼고 진짜 일본어 대화실 페이지
 * 에듀마가진 스타일: 대화문 + 분석 패널
 */
import { useState } from "react";
import { MessageSquare, Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/Layout";
import { topicCards } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function DialoguePage() {
  const [selectedCardId, setSelectedCardId] = useState(topicCards[0].id);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState<number | null>(null);

  const card = topicCards.find((c) => c.id === selectedCardId) || topicCards[0];

  // 대화문 분석 데이터 (각 줄의 핵심 포인트)
  const analysisPoints: Record<number, string> = {
    0: "「〜んだけど」: 정보를 자연스럽게 도입하는 표현. 「〜ました」보다 회화체.",
    1: "「〜くなかった？」: 이중 부정으로 동의를 구하는 젊은 표현.",
    2: "「全然！」: 부정 없이 단독으로 쓰면 '전혀 아니야!'라는 강한 긍정. 젊은 세대 표현.",
    3: "「〜じゃん」: 가벼운 주장/확인. 친한 사이에서 사용.",
    4: "「〜けど」: 역접이지만 부드럽게 이어주는 기능. 직접적인 반박 완화.",
    5: "「〜ようよ」: 가벼운 권유. 「〜ましょう」보다 캐주얼.",
  };

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
              <MessageSquare className="w-5 h-5" style={{ color: "oklch(0.28 0.12 265)" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold">진짜 일본어 대화실</h1>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                本物の日本語会話室
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            교과서 일본어가 아닌, 실제로 쓰이는 말투의 대화문입니다.
            각 줄을 탭하면 표현 분석을 볼 수 있습니다.
          </p>
        </div>

        {/* 주제 선택 */}
        <div className="bg-white rounded-2xl border border-border p-4 mb-6">
          <div className="text-sm font-medium text-muted-foreground mb-3">대화 주제 선택</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topicCards.map((c) => (
              <button
                key={c.id}
                onClick={() => { setSelectedCardId(c.id); setShowAnalysis(null); }}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-150",
                  selectedCardId === c.id
                    ? "text-white"
                    : "bg-muted hover:bg-secondary text-foreground"
                )}
                style={selectedCardId === c.id ? { backgroundColor: "oklch(0.28 0.12 265)" } : {}}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{c.titleKo}</div>
                  <div className={cn("text-xs truncate", selectedCardId === c.id ? "text-white/60" : "text-muted-foreground")}
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {c.titleJp}
                  </div>
                </div>
                <span className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-full shrink-0",
                  selectedCardId === c.id ? "bg-white/20 text-white" : "bg-background text-muted-foreground"
                )}>
                  {c.level}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 대화문 */}
        <div className="bg-white rounded-2xl border border-border p-5 mb-4">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-bold text-base">{card.titleKo}</h2>
              <p className="text-sm text-muted-foreground jp-text">{card.titleJp}</p>
            </div>
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              {showTranslation ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              번역 {showTranslation ? "숨기기" : "보기"}
            </button>
          </div>

          <div className="space-y-3">
            {card.dialogue.map((line, i) => (
              <div key={i}>
                <div
                  className={cn(
                    "flex gap-3 cursor-pointer",
                    line.speaker === 'B' && "flex-row-reverse"
                  )}
                  onClick={() => setShowAnalysis(showAnalysis === i ? null : i)}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{
                      backgroundColor: line.speaker === 'A'
                        ? "oklch(0.28 0.12 265)"
                        : "oklch(0.65 0.16 35)"
                    }}
                  >
                    {line.speaker}
                  </div>
                  <div className={cn("max-w-[75%]", line.speaker === 'B' && "items-end flex flex-col")}>
                    <div
                      className={cn(
                        "px-4 py-3 rounded-2xl transition-all duration-150",
                        showAnalysis === i ? "ring-2" : "",
                        line.speaker === 'A' ? "speech-bubble-a" : "speech-bubble-b"
                      )}
                      style={showAnalysis === i ? { "--tw-ring-color": "oklch(0.65 0.16 35)" } as React.CSSProperties : {}}
                    >
                      <p className="text-sm jp-text leading-relaxed">{line.text}</p>
                    </div>
                    {showTranslation && (
                      <p className={cn(
                        "text-xs text-muted-foreground mt-1",
                        line.speaker === 'B' && "text-right"
                      )}>
                        {line.translation}
                      </p>
                    )}
                  </div>
                </div>

                {/* 분석 패널 */}
                {showAnalysis === i && analysisPoints[i] && (
                  <div
                    className="mt-2 ml-11 animate-float-in rounded-xl p-3 text-sm"
                    style={{ backgroundColor: "oklch(0.65 0.16 35 / 0.08)", border: "1px solid oklch(0.65 0.16 35 / 0.2)" }}
                  >
                    <span className="font-semibold" style={{ color: "oklch(0.45 0.12 35)" }}>💡 표현 분석: </span>
                    <span className="text-foreground/80">{analysisPoints[i]}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center mb-6">
          💬 대화문의 각 줄을 탭하면 표현 분석을 볼 수 있습니다
        </div>

        {/* 대화 스타일 가이드 */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "linear-gradient(135deg, oklch(0.28 0.12 265) 0%, oklch(0.35 0.10 265) 100%)" }}
        >
          <h3 className="font-bold text-white mb-4">🗣️ 실제 일본어 말투 특징</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { feature: "「〜んだ / 〜んだけど」", desc: "정보를 자연스럽게 도입. 교과서의 「〜ました」보다 회화에서 더 자주 쓰임." },
              { feature: "「〜じゃん」", desc: "가벼운 주장이나 확인. 친한 사이에서 사용. 「〜でしょう」의 캐주얼 버전." },
              { feature: "「全然！」 단독 사용", desc: "부정 없이 쓰면 강한 긍정. 「全然大丈夫！」= 전혀 괜찮아!" },
              { feature: "「〜けど」로 문장 끝내기", desc: "직접적인 표현을 부드럽게 만들어 주는 역할. 여운을 남김." },
            ].map(({ feature, desc }) => (
              <div key={feature} className="bg-white/10 rounded-xl p-3">
                <div className="text-white font-semibold text-sm jp-text mb-1">{feature}</div>
                <div className="text-white/60 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
