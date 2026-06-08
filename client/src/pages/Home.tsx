/*
 * 수다니혼고 홈 페이지 - 오늘의 랜덤 수다
 * 에듀마가진 스타일: 히어로 배너 + 랜덤 카드 뽑기 + 카테고리 그리드
 */
import { useState, useCallback } from "react";
import { useLocation } from "wouter";
import { Shuffle, ChevronRight, Clock, Users, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { topicCards, categories, type TopicCard } from "@/lib/data";
import { cn } from "@/lib/utils";

const levelColors: Record<string, string> = {
  N5: "badge-n5",
  N4: "badge-n4",
  N3: "badge-n3",
  N2: "badge-n2",
  N1: "badge-n1",
};

const activityIcons: Record<string, string> = {
  '페어대화': '👥',
  '그룹토론': '💬',
  '롤플레이': '🎭',
  '발표': '🎤',
  '작문': '✏️',
};

function TopicCardPreview({ card, onClick }: { card: TopicCard; onClick: () => void }) {
  return (
    <div
      className="suda-card bg-white rounded-2xl overflow-hidden cursor-pointer border border-border"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap gap-1.5">
            <span className={cn("text-xs font-bold px-2 py-0.5 rounded-full", levelColors[card.level])}>
              {card.level}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              {activityIcons[card.activity]} {card.activity}
            </span>
          </div>
          <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
            <Clock className="w-3 h-3" />
            {card.duration}분
          </span>
        </div>

        <h3 className="font-bold text-base text-foreground mb-1 leading-snug">
          {card.titleKo}
        </h3>
        <p className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          {card.titleJp}
        </p>

        <p className="text-sm text-foreground/70 line-clamp-2 mb-4">
          {card.warmupQuestions[0].ko}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {card.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [, navigate] = useLocation();
  const [selectedLevel, setSelectedLevel] = useState<string>("전체");
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnCard, setDrawnCard] = useState<TopicCard | null>(null);

  const levels = ["전체", "N5", "N4", "N3", "N2", "N1"];

  const filteredCards = topicCards.filter((card) => {
    const levelMatch = selectedLevel === "전체" || card.level === selectedLevel;
    const catMatch = selectedCategory === "전체" || card.category === selectedCategory;
    return levelMatch && catMatch;
  });

  const handleDraw = useCallback(() => {
    setIsDrawing(true);
    setDrawnCard(null);
    setTimeout(() => {
      const pool = filteredCards.length > 0 ? filteredCards : topicCards;
      const random = pool[Math.floor(Math.random() * pool.length)];
      setDrawnCard(random);
      setIsDrawing(false);
    }, 800);
  }, [filteredCards]);

  const handleCardClick = (card: TopicCard) => {
    navigate(`/topic/${card.id}`);
  };

  return (
    <Layout>
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663032155445/7pPnBSWK49SNVGzXBeK9hz/hero_banner-67xv5r32JWjc3GKjxV5uae.webp)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.28 0.12 265 / 0.85) 0%, oklch(0.28 0.12 265 / 0.4) 60%, transparent 100%)" }} />
        <div className="relative px-6 py-16 lg:py-20 max-w-2xl">
          <div className="animate-float-in">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: "oklch(0.65 0.16 35)" }}
              >
                오늘의 랜덤 수다
              </span>
              <span className="text-white/60 text-xs">今日のランダム話</span>
            </div>
            <h1
              className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              오늘은 무슨 주제로<br />
              <span style={{ color: "oklch(0.85 0.12 60)" }}>수다 떨어볼까요?</span>
            </h1>
            <p className="text-white/70 text-sm lg:text-base mb-6 leading-relaxed">
              레벨과 카테고리를 선택하고 주제를 뽑아보세요.<br />
              질문, 표현, 대화문, 문법이 한 번에 준비됩니다.
            </p>
          </div>

          {/* 통계 */}
          <div className="flex gap-4 animate-float-in stagger-2">
            {[
              { icon: BookOpen, value: "5개+", label: "주제 카드" },
              { icon: Zap, value: "50개+", label: "실전 표현" },
              { icon: Users, value: "N5~N2", label: "레벨 지원" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/80">
                <Icon className="w-4 h-4" style={{ color: "oklch(0.85 0.12 60)" }} />
                <div>
                  <div className="text-sm font-bold">{value}</div>
                  <div className="text-xs text-white/50">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="p-6 max-w-5xl mx-auto">
        {/* 랜덤 뽑기 섹션 */}
        <section className="mb-10">
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Shuffle className="w-5 h-5" style={{ color: "oklch(0.65 0.16 35)" }} />
              주제 뽑기 필터
            </h2>

            {/* 레벨 필터 */}
            <div className="mb-4">
              <div className="text-sm font-medium text-muted-foreground mb-2">레벨</div>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                      selectedLevel === level
                        ? "text-white shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-secondary"
                    )}
                    style={selectedLevel === level ? { backgroundColor: "oklch(0.28 0.12 265)" } : {}}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* 카테고리 필터 */}
            <div className="mb-6">
              <div className="text-sm font-medium text-muted-foreground mb-2">카테고리</div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("전체")}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                    selectedCategory === "전체"
                      ? "text-white shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-secondary"
                  )}
                  style={selectedCategory === "전체" ? { backgroundColor: "oklch(0.28 0.12 265)" } : {}}
                >
                  전체
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                      selectedCategory === cat.id
                        ? "text-white shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-secondary"
                    )}
                    style={selectedCategory === cat.id ? { backgroundColor: "oklch(0.28 0.12 265)" } : {}}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 뽑기 버튼 */}
            <button
              onClick={handleDraw}
              disabled={isDrawing}
              className="w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] disabled:opacity-70"
              style={{ backgroundColor: "oklch(0.65 0.16 35)" }}
            >
              {isDrawing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  주제 뽑는 중...
                </>
              ) : (
                <>
                  <Shuffle className="w-5 h-5" />
                  오늘의 주제 뽑기
                  <span className="text-sm font-normal opacity-80" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    今日のテーマを引く
                  </span>
                </>
              )}
            </button>
          </div>

          {/* 뽑힌 카드 결과 */}
          {drawnCard && (
            <div className="mt-4 animate-card-pop">
              <div
                className="rounded-2xl p-6 text-white cursor-pointer transition-all duration-200 hover:shadow-xl active:scale-[0.99]"
                style={{ backgroundColor: "oklch(0.28 0.12 265)" }}
                onClick={() => handleCardClick(drawnCard)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <span className={cn("text-xs font-bold px-2 py-0.5 rounded-full", levelColors[drawnCard.level])}>
                      {drawnCard.level}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white">
                      {activityIcons[drawnCard.activity]} {drawnCard.activity}
                    </span>
                  </div>
                  <span className="text-white/60 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {drawnCard.duration}분
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {drawnCard.titleKo}
                </h3>
                <p className="text-white/60 text-base mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  {drawnCard.titleJp}
                </p>

                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="text-white/60 text-xs mb-2">워밍업 질문 1</div>
                  <p className="text-sm text-white/90" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {drawnCard.warmupQuestions[0].jp}
                  </p>
                  <p className="text-xs text-white/60 mt-1">{drawnCard.warmupQuestions[0].ko}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {drawnCard.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-white/70 text-sm font-medium">
                    카드 열기 <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 전체 카드 목록 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">
              주제별 프리토킹 카드
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({filteredCards.length}개)
              </span>
            </h2>
          </div>

          {filteredCards.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-4xl mb-3">🔍</p>
              <p>해당 조건의 카드가 없습니다.</p>
              <button
                onClick={() => { setSelectedLevel("전체"); setSelectedCategory("전체"); }}
                className="mt-3 text-sm underline"
                style={{ color: "oklch(0.65 0.16 35)" }}
              >
                필터 초기화
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredCards.map((card, i) => (
                <div key={card.id} className={cn("animate-float-in", `stagger-${Math.min(i + 1, 5)}`)}>
                  <TopicCardPreview card={card} onClick={() => handleCardClick(card)} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 카테고리 그리드 */}
        <section className="mt-10">
          <h2 className="text-lg font-bold mb-4">카테고리 탐색</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "animate-float-in p-3 rounded-xl border border-border bg-white text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97]",
                  `stagger-${Math.min(i + 1, 5)}`
                )}
              >
                <div className="text-2xl mb-1">{cat.icon}</div>
                <div className="text-xs font-medium text-foreground">{cat.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  {cat.labelJp}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 수업 시나리오 안내 */}
        <section className="mt-10 mb-6">
          <div
            className="rounded-2xl p-6 text-white"
            style={{ background: "linear-gradient(135deg, oklch(0.28 0.12 265) 0%, oklch(0.35 0.10 265) 100%)" }}
          >
            <h2 className="text-lg font-bold mb-4">
              📋 50분 수업 활용 예시
              <span className="text-sm font-normal text-white/60 ml-2">50分授業の活用例</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { time: "5분", activity: "랜덤 주제 뽑기", jp: "テーマ引き" },
                { time: "10분", activity: "표현·대화문 확인", jp: "表現確認" },
                { time: "15분", activity: "페어 대화 연습", jp: "ペア会話" },
                { time: "10분", activity: "역할극 / 토론", jp: "ロールプレイ" },
                { time: "5분", activity: "오류 교정", jp: "誤り訂正" },
                { time: "5분", activity: "쓰기 미션", jp: "ライティング" },
              ].map(({ time, activity, jp }) => (
                <div key={activity} className="bg-white/10 rounded-xl p-3">
                  <div className="text-white/50 text-xs mb-1">{time}</div>
                  <div className="text-sm font-medium">{activity}</div>
                  <div className="text-xs text-white/50 mt-0.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{jp}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
