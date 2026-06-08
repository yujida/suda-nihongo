// 수다니혼고 학습 콘텐츠 데이터
// 기획서 기반으로 독자적으로 제작된 콘텐츠

export type Level = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
export type Category = '일상수다' | '관계와감정' | '학교직장' | '일본생활' | '문화비교' | '트렌드' | '미디어' | '사회이슈' | '상상토론';
export type ActivityType = '페어대화' | '그룹토론' | '롤플레이' | '발표' | '작문';
export type SpeechStyle = '정중체' | '캐주얼' | '비즈니스';

export interface TopicCard {
  id: string;
  titleKo: string;
  titleJp: string;
  level: Level;
  category: Category;
  activity: ActivityType;
  style: SpeechStyle;
  duration: number;
  sensitivity: '안전' | '약간개인적' | '토론형';
  warmupQuestions: { ko: string; jp: string }[];
  deepQuestions: { ko: string; jp: string }[];
  roleplay: { situation: string; roleA: string; roleB: string };
  expressions: { word: string; reading: string; meaning: string; example: string }[];
  dialogue: { speaker: 'A' | 'B'; text: string; translation: string }[];
  grammarPatterns: { pattern: string; function: string; example: string; translation: string }[];
  writingMission: { prompt: string; promptJp: string; minChars: number; hint: string };
  teacherNote: string;
  tags: string[];
}

export const topicCards: TopicCard[] = [
  // ─────────────────────────────────────────
  // 1. 일상수다
  // ─────────────────────────────────────────
  {
    id: 'solo-meal',
    titleKo: '혼자 밥 먹기',
    titleJp: '一人ご飯',
    level: 'N4',
    category: '일상수다',
    activity: '페어대화',
    style: '캐주얼',
    duration: 20,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '혼자 밥을 먹는 것을 좋아하나요?', jp: '一人でご飯を食べるのは好きですか。' },
      { ko: '혼자 자주 가는 식당이 있나요?', jp: '一人でよく行くお気に入りのお店はありますか。' },
      { ko: '혼자 밥 먹을 때 무엇을 하면서 먹나요?', jp: '一人でご飯を食べるとき、何をしながら食べますか。' },
    ],
    deepQuestions: [
      { ko: '혼자 밥 먹는 것에 대해 어색하다고 느낀 적이 있나요?', jp: '一人でご飯を食べることを気まずいと感じたことはありますか。' },
      { ko: '한국과 일본에서 혼자 밥 먹는 문화에 차이가 있다고 생각하나요?', jp: '韓国と日本で、一人ご飯の文化に違いがあると思いますか。' },
      { ko: '혼밥 문화가 사람들을 더 고독하게 만든다고 생각하나요?', jp: '一人ご飯の文化が人々をより孤独にさせると思いますか。' },
    ],
    roleplay: {
      situation: '친구가 혼자 밥 먹는 것을 부끄러워함. A는 혼밥 찬성파, B는 같이 먹고 싶어 하는 파.',
      roleA: '혼자 밥 먹는 것의 좋은 점을 설명하고 B를 설득해 보세요.',
      roleB: '같이 밥 먹는 것이 왜 좋은지 A에게 전달해 보세요.',
    },
    expressions: [
      { word: '一人ご飯', reading: 'ひとりごはん', meaning: '혼밥', example: '最近一人ご飯が多くなった。' },
      { word: '気まずい', reading: 'きまずい', meaning: '어색하다, 민망하다', example: '一人で入るのが気まずい店もある。' },
      { word: '入りやすい', reading: 'はいりやすい', meaning: '들어가기 쉽다', example: 'カウンター席があると一人でも入りやすい。' },
      { word: 'ひとり時間', reading: 'ひとりじかん', meaning: '혼자만의 시간', example: 'ひとり時間も大切にしたい。' },
      { word: 'マイペース', reading: 'マイペース', meaning: '자기 페이스', example: 'マイペースで食べられるのがいい。' },
      { word: 'こだわり', reading: 'こだわり', meaning: '고집, 취향', example: '食事にこだわりがある人は一人ご飯が多い。' },
    ],
    dialogue: [
      { speaker: 'A', text: '今日のランチ、一人で行ってきたよ。', translation: '오늘 점심 혼자 다녀왔어.' },
      { speaker: 'B', text: 'えっ、一人で？気まずくなかった？', translation: '어, 혼자서? 어색하지 않았어?' },
      { speaker: 'A', text: '全然！最近一人ご飯にはまってて。マイペースで食べられるし。', translation: '전혀! 요즘 혼밥에 빠져서. 내 페이스대로 먹을 수 있고.' },
      { speaker: 'B', text: 'でも、誰かと話しながら食べるほうが楽しくない？', translation: '근데 누군가랑 얘기하면서 먹는 게 더 즐겁지 않아?' },
      { speaker: 'A', text: 'それはそうだけど、一人だと食べたいものを食べたいときに食べられるじゃん。', translation: '그건 그렇지만, 혼자면 먹고 싶은 걸 먹고 싶을 때 먹을 수 있잖아.' },
      { speaker: 'B', text: 'なるほどね。じゃあ今度一緒に行ってみようか。', translation: '그렇구나. 그럼 다음에 같이 가볼까.' },
    ],
    grammarPatterns: [
      { pattern: '〜やすい / 〜にくい', function: '경험과 평가 말하기', example: '一人でも入りやすい店と入りにくい店がある。', translation: '혼자서도 들어가기 쉬운 가게와 들어가기 어려운 가게가 있다.' },
      { pattern: '〜にはまっている', function: '빠져있는 것 표현', example: '最近、一人ご飯にはまっている。', translation: '요즘 혼밥에 빠져 있다.' },
      { pattern: '〜じゃん', function: '가벼운 주장/확인', example: '一人のほうが気楽じゃん。', translation: '혼자가 더 편하잖아.' },
      { pattern: '〜ほうが〜', function: '비교하여 의견 말하기', example: '誰かと食べるほうが楽しいと思う。', translation: '누군가와 먹는 편이 즐겁다고 생각한다.' },
    ],
    writingMission: {
      prompt: '혼자 밥 먹는 것에 대한 자신의 생각을 일본어로 써보세요.',
      promptJp: '一人ご飯についての自分の考えを日本語で書いてみましょう。',
      minChars: 80,
      hint: '〜やすい/にくい、〜にはまっている 등을 활용해 보세요.',
    },
    teacherNote: '혼밥 문화는 한국과 일본 모두 공감대가 높은 주제. 「気まずい」는 한국어 "어색하다"와 미묘하게 다른 뉘앙스 설명 필요.',
    tags: ['일상', '문화비교', '경험말하기'],
  },
  {
    id: 'morning-routine',
    titleKo: '아침 루틴',
    titleJp: '朝のルーティン',
    level: 'N5',
    category: '일상수다',
    activity: '페어대화',
    style: '캐주얼',
    duration: 15,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '아침에 일어나는 시간은 몇 시인가요?', jp: '朝、何時に起きますか。' },
      { ko: '아침밥을 먹는 편인가요?', jp: '朝ごはんは食べますか。' },
      { ko: '아침에 꼭 하는 일이 있나요?', jp: '朝、必ずすることはありますか。' },
    ],
    deepQuestions: [
      { ko: '아침형 인간인가요, 저녁형 인간인가요?', jp: '朝型ですか、夜型ですか。' },
      { ko: '이상적인 아침 루틴이 있다면 어떤 것인가요?', jp: '理想の朝のルーティンがあるとしたら、どんなものですか。' },
      { ko: '아침 루틴이 하루의 기분에 영향을 미친다고 생각하나요?', jp: '朝のルーティンが一日の気分に影響すると思いますか。' },
    ],
    roleplay: {
      situation: '친구에게 자신의 아침 루틴을 소개하는 상황.',
      roleA: '자신의 아침 루틴을 자세히 소개해 보세요.',
      roleB: '친구의 루틴에 관심을 갖고 질문해 보세요.',
    },
    expressions: [
      { word: '目覚まし', reading: 'めざまし', meaning: '알람', example: '目覚ましを7時にセットした。' },
      { word: '二度寝', reading: 'にどね', meaning: '다시 자기', example: '二度寝してしまって遅刻しそうだった。' },
      { word: 'ルーティン', reading: 'ルーティン', meaning: '루틴', example: '朝のルーティンを決めると楽になる。' },
      { word: 'すっきり', reading: 'すっきり', meaning: '개운하다', example: '朝シャワーを浴びるとすっきりする。' },
      { word: 'ぼーっとする', reading: 'ぼーっとする', meaning: '멍하다', example: '起きてすぐはぼーっとしてしまう。' },
      { word: '〜てから', reading: 'てから', meaning: '~하고 나서', example: '歯を磨いてから朝ごはんを食べる。' },
    ],
    dialogue: [
      { speaker: 'A', text: '毎朝何時に起きてるの？', translation: '매일 아침 몇 시에 일어나?' },
      { speaker: 'B', text: '6時半かな。でも二度寝しちゃうことが多くて。', translation: '6시 반쯤. 근데 다시 자버리는 경우가 많아서.' },
      { speaker: 'A', text: 'わかる！私もそれが悩みで。', translation: '알아! 나도 그게 고민이어서.' },
      { speaker: 'B', text: 'Aちゃんは朝ごはん食べる派？', translation: 'A는 아침밥 먹는 편이야?' },
      { speaker: 'A', text: 'うん、食べてから出かけないとぼーっとしちゃう。', translation: '응, 먹고 나서 나가지 않으면 멍해져버려.' },
      { speaker: 'B', text: 'いいな。私は時間なくていつもコーヒーだけ。', translation: '좋겠다. 나는 시간 없어서 항상 커피만.' },
    ],
    grammarPatterns: [
      { pattern: '〜てから', function: '순서 표현', example: '顔を洗ってから朝ごはんを食べる。', translation: '세수하고 나서 아침밥을 먹는다.' },
      { pattern: '〜てしまう', function: '의도치 않은 결과', example: '二度寝してしまって遅刻した。', translation: '다시 자버려서 지각했다.' },
      { pattern: '〜ないと', function: '조건/의무 표현', example: '食べないと頭が働かない。', translation: '먹지 않으면 머리가 안 돌아간다.' },
      { pattern: '〜派', function: '취향/성향 표현', example: '私は朝シャワー派です。', translation: '나는 아침 샤워파입니다.' },
    ],
    writingMission: {
      prompt: '자신의 아침 루틴을 일본어로 소개해 보세요.',
      promptJp: '自分の朝のルーティンを日本語で紹介してみましょう。',
      minChars: 60,
      hint: '〜てから、〜てしまう 등을 활용해 보세요.',
    },
    teacherNote: 'N5 입문자도 참여 가능한 쉬운 주제. 시간 표현과 순서 표현(〜てから)을 자연스럽게 연습할 수 있음.',
    tags: ['일상', '루틴', '시간표현'],
  },
  {
    id: 'weekend-plan',
    titleKo: '주말 계획',
    titleJp: '週末の予定',
    level: 'N5',
    category: '일상수다',
    activity: '페어대화',
    style: '캐주얼',
    duration: 15,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '이번 주말에 무엇을 할 예정인가요?', jp: '今週末、何をする予定ですか。' },
      { ko: '주말에 주로 어떻게 보내나요?', jp: '週末はどんなふうに過ごすことが多いですか。' },
      { ko: '좋아하는 주말 활동은 무엇인가요?', jp: '好きな週末の過ごし方は何ですか。' },
    ],
    deepQuestions: [
      { ko: '완전히 쉬는 주말과 활동적인 주말 중 어느 쪽을 선호하나요?', jp: 'ゆっくり休む週末と、アクティブな週末、どちらが好きですか。' },
      { ko: '혼자 보내는 주말과 친구와 함께하는 주말, 어느 쪽이 더 충전이 되나요?', jp: '一人で過ごす週末と友達と過ごす週末、どちらがより充電できますか。' },
      { ko: '이상적인 주말이 있다면 어떤 모습인가요?', jp: '理想の週末があるとしたら、どんな感じですか。' },
    ],
    roleplay: {
      situation: '친구에게 주말 계획을 물어보고 같이 뭔가를 하자고 제안하는 상황.',
      roleA: '친구에게 주말 계획을 물어보고 같이 나들이를 제안해 보세요.',
      roleB: '기존 계획을 말하고, 제안에 어떻게 반응할지 결정해 보세요.',
    },
    expressions: [
      { word: '予定', reading: 'よてい', meaning: '예정, 계획', example: '週末に特別な予定はありますか。' },
      { word: 'ゆっくりする', reading: 'ゆっくりする', meaning: '느긋하게 쉬다', example: '今週末はゆっくりしたい。' },
      { word: 'せっかく', reading: 'せっかく', meaning: '모처럼', example: 'せっかくの休みだから出かけよう。' },
      { word: 'どうせなら', reading: 'どうせなら', meaning: '어차피 할 거라면', example: 'どうせなら遠くに行こうよ。' },
      { word: '〜つもり', reading: 'つもり', meaning: '~할 생각이다', example: '明日は映画を見るつもりです。' },
      { word: 'のんびり', reading: 'のんびり', meaning: '느긋하게, 여유롭게', example: '家でのんびりするのが好き。' },
    ],
    dialogue: [
      { speaker: 'A', text: '今週末、何か予定ある？', translation: '이번 주말 뭔가 계획 있어?' },
      { speaker: 'B', text: '特にないかな。家でのんびりしようかと思って。', translation: '특별히 없어. 집에서 느긋하게 쉬려고.' },
      { speaker: 'A', text: 'じゃあ一緒に出かけない？せっかくだし。', translation: '그럼 같이 나가지 않을래? 모처럼이니까.' },
      { speaker: 'B', text: 'いいね！どこに行くつもり？', translation: '좋아! 어디 갈 생각이야?' },
      { speaker: 'A', text: 'どうせなら少し遠くに行こうよ。海とか。', translation: '어차피 할 거라면 좀 멀리 가자. 바다라든가.' },
      { speaker: 'B', text: 'いいな！じゃあ決まりね。', translation: '좋다! 그럼 정해진 거네.' },
    ],
    grammarPatterns: [
      { pattern: '〜つもり', function: '계획/의도 표현', example: '週末は友達と映画を見るつもりです。', translation: '주말에는 친구와 영화를 볼 생각입니다.' },
      { pattern: 'せっかく〜から', function: '모처럼의 기회 강조', example: 'せっかくの休みだから、どこかに行こう。', translation: '모처럼의 휴일이니까 어딘가 가자.' },
      { pattern: 'どうせなら', function: '선택지 비교 시 더 나은 쪽 제안', example: 'どうせ行くなら、もっといい店にしよう。', translation: '어차피 갈 거라면 더 좋은 가게로 하자.' },
      { pattern: '〜ようと思って', function: '막연한 계획 표현', example: '今日は早く寝ようと思って。', translation: '오늘은 일찍 자려고.' },
    ],
    writingMission: {
      prompt: '이번 주말 계획을 일본어로 써보세요. 무엇을 할 예정인지, 왜 그것을 하고 싶은지도 포함해 주세요.',
      promptJp: '今週末の予定を日本語で書いてみましょう。何をする予定か、なぜそれをしたいかも含めてください。',
      minChars: 60,
      hint: '〜つもり、せっかく、〜ようと思って 등을 활용해 보세요.',
    },
    teacherNote: 'N5 초급자에게 적합. 미래 계획을 말하는 표현을 자연스럽게 연습할 수 있는 주제.',
    tags: ['일상', '계획', '제안하기'],
  },

  // ─────────────────────────────────────────
  // 2. 관계와 감정
  // ─────────────────────────────────────────
  {
    id: 'apology',
    titleKo: '사과하기',
    titleJp: '謝り方',
    level: 'N3',
    category: '관계와감정',
    activity: '롤플레이',
    style: '정중체',
    duration: 25,
    sensitivity: '약간개인적',
    warmupQuestions: [
      { ko: '사과할 때 어떤 말을 가장 먼저 하나요?', jp: '謝るとき、まず何と言いますか。' },
      { ko: '진심 어린 사과와 형식적인 사과, 어떻게 다르다고 생각하나요?', jp: '心からの謝罪と形式的な謝罪、どう違うと思いますか。' },
      { ko: '일본어로 사과할 때 어려운 점이 있나요?', jp: '日本語で謝るとき、難しいと感じることはありますか。' },
    ],
    deepQuestions: [
      { ko: '사과를 받아들이기 어려웠던 경험이 있나요?', jp: '謝罪を受け入れるのが難しかった経験はありますか。' },
      { ko: '한국과 일본의 사과 문화에 차이가 있다고 생각하나요?', jp: '韓国と日本の謝り方の文化に違いがあると思いますか。' },
      { ko: '사과보다 중요한 것이 있다고 생각하나요?', jp: '謝ることより大切なことがあると思いますか。' },
    ],
    roleplay: {
      situation: '약속 시간에 30분 늦은 상황. 친구에게 사과하는 롤플레이.',
      roleA: '늦은 것을 사과하고 이유를 설명해 보세요.',
      roleB: '친구 역할. 처음에는 약간 화가 났지만 점점 풀리는 반응을 보여주세요.',
    },
    expressions: [
      { word: '申し訳ない', reading: 'もうしわけない', meaning: '죄송하다 (강한 사과)', example: '本当に申し訳なかった。' },
      { word: 'ごめん', reading: 'ごめん', meaning: '미안해 (캐주얼)', example: 'ごめん、遅くなって。' },
      { word: '遅れる', reading: 'おくれる', meaning: '늦다', example: '電車が遅れてしまって。' },
      { word: '許す', reading: 'ゆるす', meaning: '용서하다', example: '許してもらえると嬉しいんだけど。' },
      { word: '気にしないで', reading: 'きにしないで', meaning: '신경 쓰지 마', example: '気にしないで、大丈夫だよ。' },
      { word: '次は気をつける', reading: 'つぎはきをつける', meaning: '다음엔 조심할게', example: '次は気をつけるね。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'ごめん！電車が遅れて、本当に申し訳なかった。', translation: '미안! 전철이 늦어서, 정말 죄송했어.' },
      { speaker: 'B', text: 'もう30分も待ったよ。', translation: '벌써 30분이나 기다렸잖아.' },
      { speaker: 'A', text: 'ほんとにごめん。次は絶対に気をつける。', translation: '진짜 미안. 다음엔 절대 조심할게.' },
      { speaker: 'B', text: '…まあ、電車のことは仕方ないけどね。', translation: '…뭐, 전철 건은 어쩔 수 없지만.' },
      { speaker: 'A', text: 'ありがとう。今日は私がおごるから！', translation: '고마워. 오늘은 내가 살게!' },
      { speaker: 'B', text: 'じゃあ許してあげる（笑）', translation: '그럼 용서해줄게 (웃음)' },
    ],
    grammarPatterns: [
      { pattern: '〜てしまって', function: '결과에 대한 유감/사과', example: '遅れてしまって、本当に申し訳ありません。', translation: '늦어버려서 정말 죄송합니다.' },
      { pattern: '〜んだけど', function: '부드럽게 상황 설명', example: '電車が止まってしまったんだけど…。', translation: '전철이 멈춰버렸는데….' },
      { pattern: '〜てもらえると嬉しい', function: '정중한 부탁/바람', example: '許してもらえると嬉しいんだけど。', translation: '용서해 줬으면 좋겠는데.' },
      { pattern: '〜は仕方ない', function: '어쩔 수 없음 인정', example: '電車のことは仕方ないね。', translation: '전철 건은 어쩔 수 없네.' },
    ],
    writingMission: {
      prompt: '친구에게 사과하는 메시지를 일본어로 써보세요. 이유 설명과 앞으로의 다짐도 포함해 주세요.',
      promptJp: '友達に謝るメッセージを日本語で書いてみましょう。理由の説明と今後の決意も含めてください。',
      minChars: 80,
      hint: '〜てしまって、〜んだけど、〜てもらえると嬉しい 등을 활용해 보세요.',
    },
    teacherNote: '사과 표현의 강도 차이(ごめん < すみません < 申し訳ない)를 명확히 설명할 것. 롤플레이 시 감정 변화를 자연스럽게 표현하도록 유도.',
    tags: ['감정표현', '사과', '롤플레이', '경어'],
  },
  {
    id: 'compliment',
    titleKo: '칭찬과 겸손',
    titleJp: '褒め言葉と謙遜',
    level: 'N3',
    category: '관계와감정',
    activity: '페어대화',
    style: '캐주얼',
    duration: 20,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '칭찬을 받았을 때 어떻게 반응하나요?', jp: '褒められたとき、どう反応しますか。' },
      { ko: '일본인이 칭찬에 겸손하게 반응하는 것을 본 적이 있나요?', jp: '日本人が褒め言葉に謙遜して反応するのを見たことがありますか。' },
      { ko: '칭찬하기 어려운 상황이 있나요?', jp: '褒めにくい状況はありますか。' },
    ],
    deepQuestions: [
      { ko: '한국과 일본의 칭찬 문화에 차이가 있다고 생각하나요?', jp: '韓国と日本の褒め方の文化に違いがあると思いますか。' },
      { ko: '지나친 겸손이 오히려 상대를 불편하게 할 수 있다고 생각하나요?', jp: '過度な謙遜がかえって相手を不快にさせることがあると思いますか。' },
      { ko: '칭찬을 소박하게 받아들이는 것과 기쁘게 받아들이는 것, 어느 쪽이 더 자연스럽다고 생각하나요?', jp: '褒め言葉を謙遜して受け取ることと、素直に喜ぶこと、どちらが自然だと思いますか。' },
    ],
    roleplay: {
      situation: '친구가 새 헤어스타일을 했다. 칭찬하고 반응하는 상황.',
      roleA: '친구의 헤어스타일을 자연스럽게 칭찬해 보세요.',
      roleB: '칭찬에 일본식으로 겸손하게 반응해 보세요.',
    },
    expressions: [
      { word: '似合う', reading: 'にあう', meaning: '어울리다', example: 'その服、すごく似合ってるね。' },
      { word: 'そんなことないよ', reading: 'そんなことないよ', meaning: '그런 거 아니야 (겸손)', example: 'そんなことないよ、全然だよ。' },
      { word: 'ありがとう、でも〜', reading: 'ありがとう、でも', meaning: '고마워, 근데 ~ (겸손)', example: 'ありがとう、でもまだまだだよ。' },
      { word: 'まだまだ', reading: 'まだまだ', meaning: '아직 멀었어 (겸손)', example: 'まだまだ練習が必要だよ。' },
      { word: 'お世辞', reading: 'おせじ', meaning: '빈말, 아부', example: 'お世辞でもうれしい。' },
      { word: '照れる', reading: 'てれる', meaning: '부끄러워하다', example: '褒められると照れちゃう。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'わあ、髪切ったの？すごく似合ってる！', translation: '와, 머리 잘랐어? 너무 잘 어울려!' },
      { speaker: 'B', text: 'えー、そんなことないよ。なんか変じゃない？', translation: '에이, 그런 거 아니야. 뭔가 이상하지 않아?' },
      { speaker: 'A', text: '全然！本当に似合ってるって。', translation: '전혀! 진짜 잘 어울린다고.' },
      { speaker: 'B', text: 'ありがとう。照れるな〜。', translation: '고마워. 부끄럽네~.' },
      { speaker: 'A', text: 'お世辞じゃなくて本当だよ。どこで切ったの？', translation: '빈말이 아니라 진짜야. 어디서 잘랐어?' },
      { speaker: 'B', text: '駅前の新しいお店。よかったら紹介するよ。', translation: '역 앞 새 가게. 괜찮으면 소개해줄게.' },
    ],
    grammarPatterns: [
      { pattern: '〜って (引用)', function: '강조하여 재확인', example: '本当に似合ってるって！', translation: '진짜 잘 어울린다고!' },
      { pattern: 'そんなことない', function: '겸손한 부정', example: 'そんなことないよ、まだまだだよ。', translation: '그런 거 아니야, 아직 멀었어.' },
      { pattern: '〜じゃない？', function: '확인 구하기', example: 'なんか変じゃない？', translation: '뭔가 이상하지 않아?' },
      { pattern: '〜てる (진행/상태)', function: '현재 상태 표현', example: 'すごく似合ってるよ。', translation: '너무 잘 어울려.' },
    ],
    writingMission: {
      prompt: '친구를 칭찬하는 메시지를 일본어로 써보세요. 구체적으로 무엇이 좋은지 포함해 주세요.',
      promptJp: '友達を褒めるメッセージを日本語で書いてみましょう。具体的に何が良いかも含めてください。',
      minChars: 60,
      hint: '似合う、〜って、そんなことない 등을 활용해 보세요.',
    },
    teacherNote: '일본의 겸손 문화(謙遜)는 한국 학습자에게 낯설 수 있음. 칭찬을 소박하게 받아들이는 것이 예의라는 문화적 배경 설명 필요.',
    tags: ['감정표현', '문화비교', '칭찬'],
  },

  // ─────────────────────────────────────────
  // 3. 학교·직장
  // ─────────────────────────────────────────
  {
    id: 'job-interview',
    titleKo: '면접 준비',
    titleJp: '面接の準備',
    level: 'N2',
    category: '학교직장',
    activity: '롤플레이',
    style: '비즈니스',
    duration: 40,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '면접 경험이 있나요? 어떤 느낌이었나요?', jp: '面接の経験はありますか。どんな感じでしたか。' },
      { ko: '일본어 면접에서 가장 어려운 점은 무엇이라고 생각하나요?', jp: '日本語の面接で一番難しいと思うことは何ですか。' },
      { ko: '자기소개를 일본어로 해본 적이 있나요?', jp: '日本語で自己紹介をしたことがありますか。' },
    ],
    deepQuestions: [
      { ko: '한국과 일본의 면접 문화에 차이가 있다고 생각하나요?', jp: '韓国と日本の面接文化に違いがあると思いますか。' },
      { ko: '면접에서 가장 중요한 것은 무엇이라고 생각하나요?', jp: '面接で一番大切なことは何だと思いますか。' },
      { ko: '이직이나 취업을 위해 일본어를 배우고 있나요?', jp: '転職や就職のために日本語を学んでいますか。' },
    ],
    roleplay: {
      situation: '일본 회사 면접 상황. 자기소개와 지원 동기를 묻는 면접.',
      roleA: '면접관 역할. 자기소개와 지원 동기를 물어보세요.',
      roleB: '지원자 역할. 정중하게 자기소개와 지원 동기를 말해보세요.',
    },
    expressions: [
      { word: '志望動機', reading: 'しぼうどうき', meaning: '지원 동기', example: '志望動機を教えていただけますか。' },
      { word: '御社', reading: 'おんしゃ', meaning: '귀사 (면접 시 사용)', example: '御社を志望した理由は〜です。' },
      { word: '貢献する', reading: 'こうけんする', meaning: '공헌하다', example: '御社の発展に貢献したいと思っています。' },
      { word: '強み', reading: 'つよみ', meaning: '강점', example: '私の強みはコミュニケーション能力です。' },
      { word: '〜を活かす', reading: 'をいかす', meaning: '~을 살리다', example: '経験を活かして働きたいです。' },
      { word: 'よろしくお願いいたします', reading: 'よろしくおねがいいたします', meaning: '잘 부탁드립니다 (최고 경어)', example: '本日はよろしくお願いいたします。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'では、まず自己紹介をお願いできますか。', translation: '그럼 먼저 자기소개 부탁드릴 수 있을까요?' },
      { speaker: 'B', text: 'はい。〇〇と申します。現在〇〇大学で日本語を専攻しております。', translation: '네. 〇〇라고 합니다. 현재 〇〇대학교에서 일본어를 전공하고 있습니다.' },
      { speaker: 'A', text: 'ありがとうございます。弊社を志望された理由を教えていただけますか。', translation: '감사합니다. 저희 회사를 지원하신 이유를 알려주실 수 있을까요?' },
      { speaker: 'B', text: '御社の〇〇という事業に強く共感し、自分の経験を活かして貢献できると思いました。', translation: '귀사의 〇〇라는 사업에 강하게 공감하여, 제 경험을 살려 공헌할 수 있다고 생각했습니다.' },
      { speaker: 'A', text: 'あなたの強みは何だと思いますか。', translation: '본인의 강점은 무엇이라고 생각하시나요?' },
      { speaker: 'B', text: '私の強みは粘り強さです。困難な状況でも諦めずに取り組む姿勢を大切にしています。', translation: '제 강점은 끈기입니다. 어려운 상황에서도 포기하지 않고 임하는 자세를 소중히 여기고 있습니다.' },
    ],
    grammarPatterns: [
      { pattern: '〜と申します', function: '정중한 자기소개', example: '田中と申します。', translation: '다나카라고 합니다.' },
      { pattern: '〜ております', function: '겸양 표현 (진행/상태)', example: '現在、〇〇大学で日本語を専攻しております。', translation: '현재 〇〇대학교에서 일본어를 전공하고 있습니다.' },
      { pattern: '〜を活かして', function: '경험/능력 활용 표현', example: '語学力を活かして御社に貢献したいです。', translation: '어학 능력을 살려 귀사에 공헌하고 싶습니다.' },
      { pattern: '〜と思っております', function: '겸양 의견 표현', example: '貢献できると思っております。', translation: '공헌할 수 있다고 생각하고 있습니다.' },
    ],
    writingMission: {
      prompt: '일본 회사 면접을 위한 자기소개(150자 이상)를 일본어로 써보세요.',
      promptJp: '日本の会社の面接のための自己紹介（150字以上）を日本語で書いてみましょう。',
      minChars: 150,
      hint: '〜と申します、〜ております、〜を活かして 등 경어 표현을 활용해 보세요.',
    },
    teacherNote: '비즈니스 경어는 단계적으로 접근 필요. 「御社」(면접/서면)와 「貴社」(서면 전용)의 차이 설명. 롤플레이 전에 기본 경어 체계를 복습할 것.',
    tags: ['비즈니스', '경어', '면접', '자기소개'],
  },
  {
    id: 'remote-work',
    titleKo: '재택근무',
    titleJp: 'テレワーク',
    level: 'N3',
    category: '학교직장',
    activity: '그룹토론',
    style: '정중체',
    duration: 30,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '재택근무 경험이 있나요?', jp: 'テレワークの経験はありますか。' },
      { ko: '재택근무 시 가장 힘든 점은 무엇인가요?', jp: 'テレワークで一番大変なことは何ですか。' },
      { ko: '재택근무와 출근 중 어느 쪽을 선호하나요?', jp: 'テレワークと出勤、どちらが好きですか。' },
    ],
    deepQuestions: [
      { ko: '재택근무가 생산성에 영향을 미친다고 생각하나요?', jp: 'テレワークが生産性に影響すると思いますか。' },
      { ko: '재택근무가 인간관계에 미치는 영향은 어떻다고 생각하나요?', jp: 'テレワークが人間関係に与える影響はどうだと思いますか。' },
      { ko: '앞으로 재택근무가 더 늘어날 것이라고 생각하나요?', jp: 'これからテレワークがさらに増えると思いますか。' },
    ],
    roleplay: {
      situation: '팀 회의에서 재택근무 정책에 대해 의견을 나누는 상황.',
      roleA: '재택근무 확대를 지지하는 입장에서 의견을 말해보세요.',
      roleB: '출근 중심 정책을 지지하는 입장에서 반론해 보세요.',
    },
    expressions: [
      { word: 'テレワーク', reading: 'テレワーク', meaning: '재택근무', example: 'テレワークが普及してきた。' },
      { word: '生産性', reading: 'せいさんせい', meaning: '생산성', example: 'テレワークで生産性が上がった。' },
      { word: 'コミュニケーション不足', reading: 'コミュニケーションぶそく', meaning: '소통 부족', example: 'テレワークではコミュニケーション不足になりがちだ。' },
      { word: 'メリハリ', reading: 'メリハリ', meaning: '메리하리 (일과 휴식의 구분)', example: 'テレワークだとメリハリがつけにくい。' },
      { word: '〜がちだ', reading: 'がちだ', meaning: '~하기 쉽다, ~하는 경향이 있다', example: '在宅だと運動不足になりがちだ。' },
      { word: '柔軟に', reading: 'じゅうなんに', meaning: '유연하게', example: '柔軟に働けるのがテレワークの魅力だ。' },
    ],
    dialogue: [
      { speaker: 'A', text: '最近テレワークが増えてきましたが、皆さんはどう思いますか。', translation: '최근 재택근무가 늘어왔는데, 여러분은 어떻게 생각하세요?' },
      { speaker: 'B', text: '私は賛成です。通勤時間がなくなって、その分仕事に集中できますし。', translation: '저는 찬성입니다. 통근 시간이 없어지고, 그만큼 일에 집중할 수 있으니까요.' },
      { speaker: 'A', text: 'ただ、コミュニケーション不足になりがちじゃないですか。', translation: '다만, 소통 부족이 되기 쉽지 않나요?' },
      { speaker: 'B', text: 'それは確かに課題ですね。でも、オンラインツールを活用すれば解決できると思います。', translation: '그건 확실히 과제네요. 하지만 온라인 도구를 활용하면 해결할 수 있다고 생각합니다.' },
      { speaker: 'A', text: 'メリハリがつけにくいという意見もありますよね。', translation: '메리하리를 잡기 어렵다는 의견도 있죠.' },
      { speaker: 'B', text: 'そうですね。柔軟に働ける反面、自己管理が大切になりますね。', translation: '그렇네요. 유연하게 일할 수 있는 반면, 자기 관리가 중요해지네요.' },
    ],
    grammarPatterns: [
      { pattern: '〜がちだ', function: '경향 표현', example: 'テレワークだと孤独を感じがちだ。', translation: '재택근무면 고독을 느끼기 쉽다.' },
      { pattern: '〜反面', function: '장단점 대조', example: '便利な反面、コミュニケーションが難しくなる。', translation: '편리한 반면, 소통이 어려워진다.' },
      { pattern: '〜ば解決できる', function: '조건 해결책 제시', example: 'ツールを活用すれば解決できると思います。', translation: '도구를 활용하면 해결할 수 있다고 생각합니다.' },
      { pattern: '〜ですし', function: '이유 나열 (정중체)', example: '通勤がなくなりますし、時間も節約できます。', translation: '통근이 없어지고, 시간도 절약할 수 있습니다.' },
    ],
    writingMission: {
      prompt: '재택근무의 장단점에 대한 자신의 의견을 정중체로 써보세요.',
      promptJp: 'テレワークのメリットとデメリットについて、自分の意見を丁寧体で書いてみましょう。',
      minChars: 120,
      hint: '〜がちだ、〜反面、〜ですし 등을 활용해 보세요.',
    },
    teacherNote: '코로나 이후 일본에서도 테레워크가 크게 확산됨. 학습자의 실제 경험과 연결하면 더욱 활발한 토론 가능.',
    tags: ['직장', '사회이슈', '토론', '의견말하기'],
  },

  // ─────────────────────────────────────────
  // 4. 일본 생활
  // ─────────────────────────────────────────
  {
    id: 'convenience-store',
    titleKo: '편의점 문화',
    titleJp: 'コンビニ文化',
    level: 'N4',
    category: '일본생활',
    activity: '롤플레이',
    style: '정중체',
    duration: 20,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '편의점에 얼마나 자주 가나요?', jp: 'コンビニにはどのくらいの頻度で行きますか。' },
      { ko: '편의점에서 가장 자주 사는 것은 무엇인가요?', jp: 'コンビニで一番よく買うものは何ですか。' },
      { ko: '일본 편의점과 한국 편의점, 어떤 차이가 있다고 생각하나요?', jp: '日本のコンビニと韓国のコンビニ、どんな違いがあると思いますか。' },
    ],
    deepQuestions: [
      { ko: '편의점이 없어지면 생활이 어떻게 달라질까요?', jp: 'コンビニがなくなったら、生活はどう変わると思いますか。' },
      { ko: '편의점의 발전이 지역 상점에 미치는 영향을 어떻게 생각하나요?', jp: 'コンビニの発展が地域のお店に与える影響をどう思いますか。' },
      { ko: '24시간 영업이 필요하다고 생각하나요?', jp: '24時間営業は必要だと思いますか。' },
    ],
    roleplay: {
      situation: '일본 편의점에서 처음 물건을 사는 상황.',
      roleA: '편의점 점원 역할. 자연스럽게 응대해 주세요.',
      roleB: '처음 일본 편의점에 온 손님 역할. 계산 방법을 물어보세요.',
    },
    expressions: [
      { word: 'レジ袋', reading: 'レジぶくろ', meaning: '비닐봉지', example: 'レジ袋はご利用ですか。' },
      { word: 'ポイントカード', reading: 'ポイントカード', meaning: '포인트 카드', example: 'ポイントカードはお持ちですか。' },
      { word: 'お弁当', reading: 'おべんとう', meaning: '도시락', example: 'お弁当を温めますか。' },
      { word: 'セルフレジ', reading: 'セルフレジ', meaning: '셀프 계산대', example: 'セルフレジをご利用ください。' },
      { word: 'ちょうど', reading: 'ちょうど', meaning: '딱, 정확히', example: 'ちょうどあります。' },
      { word: 'お釣り', reading: 'おつり', meaning: '거스름돈', example: 'お釣りは50円です。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'いらっしゃいませ。', translation: '어서 오세요.' },
      { speaker: 'B', text: 'あの、このお弁当を温めてもらえますか。', translation: '저, 이 도시락 데워 주실 수 있나요?' },
      { speaker: 'A', text: 'はい、少々お待ちください。ポイントカードはお持ちですか。', translation: '네, 잠시만 기다려 주세요. 포인트 카드 있으신가요?' },
      { speaker: 'B', text: 'いえ、持っていないです。', translation: '아니요, 없어요.' },
      { speaker: 'A', text: 'かしこまりました。レジ袋はご利用ですか。', translation: '알겠습니다. 봉투는 필요하신가요?' },
      { speaker: 'B', text: 'はい、一枚お願いします。', translation: '네, 한 장 부탁드려요.' },
    ],
    grammarPatterns: [
      { pattern: '〜てもらえますか', function: '정중한 부탁', example: 'このお弁当を温めてもらえますか。', translation: '이 도시락 데워 주실 수 있나요?' },
      { pattern: '〜はお持ちですか', function: '소지 여부 확인 (서비스 표현)', example: 'ポイントカードはお持ちですか。', translation: '포인트 카드 있으신가요?' },
      { pattern: 'かしこまりました', function: '격식 있는 수락 표현', example: 'かしこまりました。少々お待ちください。', translation: '알겠습니다. 잠시만 기다려 주세요.' },
      { pattern: '少々お待ちください', function: '서비스업 정중 표현', example: '少々お待ちください。ただいまお温めします。', translation: '잠시만 기다려 주세요. 지금 데워 드리겠습니다.' },
    ],
    writingMission: {
      prompt: '편의점에서 있었던 경험이나 편의점 문화에 대한 생각을 일본어로 써보세요.',
      promptJp: 'コンビニでの経験やコンビニ文化についての考えを日本語で書いてみましょう。',
      minChars: 80,
      hint: '서비스 표현(〜てもらえますか、かしこまりました)을 활용해 보세요.',
    },
    teacherNote: '일본 편의점 서비스 표현은 실생활에서 매우 유용. 「かしこまりました」vs「わかりました」의 격식 차이 설명 필요.',
    tags: ['일본생활', '서비스표현', '롤플레이'],
  },
  {
    id: 'train-manners',
    titleKo: '전철 에티켓',
    titleJp: '電車のマナー',
    level: 'N4',
    category: '일본생활',
    activity: '그룹토론',
    style: '캐주얼',
    duration: 25,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '전철 안에서 가장 신경 쓰이는 행동은 무엇인가요?', jp: '電車の中で一番気になる行動は何ですか。' },
      { ko: '일본 전철과 한국 전철, 에티켓 면에서 다른 점이 있나요?', jp: '日本の電車と韓国の電車、マナー面で違う点はありますか。' },
      { ko: '전철 안에서 통화를 하는 것에 대해 어떻게 생각하나요?', jp: '電車の中で通話することについてどう思いますか。' },
    ],
    deepQuestions: [
      { ko: '전철 에티켓을 지키지 않는 사람을 보면 어떻게 하나요?', jp: '電車のマナーを守らない人を見たらどうしますか。' },
      { ko: '일본의 전철 에티켓이 지나치게 엄격하다고 생각하나요?', jp: '日本の電車マナーが厳しすぎると思いますか。' },
      { ko: '우선석(노약자석)에 대한 문화가 나라마다 다른 것 같은데, 어떻게 생각하나요?', jp: '優先席の文化が国によって違うと思いますが、どう思いますか。' },
    ],
    roleplay: {
      situation: '전철 안에서 큰 소리로 통화하는 사람에게 조심스럽게 말을 거는 상황.',
      roleA: '조심스럽게 통화를 자제해 달라고 부탁하는 역할.',
      roleB: '처음에는 당황하지만 이해하고 사과하는 역할.',
    },
    expressions: [
      { word: '優先席', reading: 'ゆうせんせき', meaning: '우선석', example: '優先席では携帯をマナーモードにしてください。' },
      { word: 'マナーモード', reading: 'マナーモード', meaning: '매너 모드 (진동)', example: '電車内ではマナーモードにしましょう。' },
      { word: '混雑する', reading: 'こんざつする', meaning: '혼잡하다', example: '朝の電車はとても混雑している。' },
      { word: '迷惑をかける', reading: 'めいわくをかける', meaning: '폐를 끼치다', example: '他の乗客に迷惑をかけないようにしましょう。' },
      { word: 'すみませんが', reading: 'すみませんが', meaning: '실례지만', example: 'すみませんが、少し声を小さくしていただけますか。' },
      { word: '〜ていただけますか', reading: 'ていただけますか', meaning: '~해 주실 수 있을까요?', example: '席を譲っていただけますか。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'すみませんが、少し声を小さくしていただけますか。', translation: '실례지만, 조금 목소리를 낮춰 주실 수 있을까요?' },
      { speaker: 'B', text: 'あ、すみません。気づかなくて。', translation: '아, 죄송합니다. 몰랐어요.' },
      { speaker: 'A', text: 'いえ、大丈夫です。ありがとうございます。', translation: '아니요, 괜찮습니다. 감사합니다.' },
      { speaker: 'B', text: '電車の中での通話はマナー違反でしたね。', translation: '전철 안에서 통화는 매너 위반이었네요.' },
      { speaker: 'A', text: 'そうですね。でも、緊急のこともありますし。', translation: '그렇죠. 하지만 긴급한 경우도 있고요.' },
      { speaker: 'B', text: 'そうですね。気をつけます。', translation: '그렇네요. 조심할게요.' },
    ],
    grammarPatterns: [
      { pattern: '〜ていただけますか', function: '정중한 부탁', example: '少し声を小さくしていただけますか。', translation: '조금 목소리를 낮춰 주실 수 있을까요?' },
      { pattern: '〜ようにしましょう', function: '권유/규범 표현', example: '電車内ではマナーモードにするようにしましょう。', translation: '전철 안에서는 매너 모드로 하도록 합시다.' },
      { pattern: '〜ですし', function: '이유 나열', example: '緊急のこともありますし、一概には言えません。', translation: '긴급한 경우도 있고, 일률적으로 말할 수 없습니다.' },
      { pattern: '〜違反', function: '규칙 위반 표현', example: '電車内での通話はマナー違反です。', translation: '전철 안에서의 통화는 매너 위반입니다.' },
    ],
    writingMission: {
      prompt: '전철 에티켓에 대한 자신의 생각을 일본어로 써보세요.',
      promptJp: '電車のマナーについての自分の考えを日本語で書いてみましょう。',
      minChars: 80,
      hint: '〜ていただけますか、〜ようにしましょう 등을 활용해 보세요.',
    },
    teacherNote: '일본 전철 문화는 한국 학습자에게 매우 흥미로운 주제. 조용한 전철 문화, 우선석 문화 등 구체적인 사례를 들어 설명할 것.',
    tags: ['일본생활', '에티켓', '문화비교'],
  },

  // ─────────────────────────────────────────
  // 5. 문화 비교
  // ─────────────────────────────────────────
  {
    id: 'new-year',
    titleKo: '새해 문화 비교',
    titleJp: 'お正月の文化比較',
    level: 'N3',
    category: '문화비교',
    activity: '그룹토론',
    style: '캐주얼',
    duration: 30,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '새해에 어떤 것을 하나요?', jp: 'お正月に何をしますか。' },
      { ko: '일본의 새해 문화 중 알고 있는 것이 있나요?', jp: '日本のお正月文化で知っていることはありますか。' },
      { ko: '새해 첫날 무엇을 먹나요?', jp: '元日に何を食べますか。' },
    ],
    deepQuestions: [
      { ko: '한국의 설날과 일본의 오쇼가츠, 어떤 공통점과 차이점이 있나요?', jp: '韓国のソルラルと日本のお正月、どんな共通点と違いがありますか。' },
      { ko: '새해 행사가 점점 간소화되고 있다고 생각하나요?', jp: 'お正月の行事がだんだん簡略化されていると思いますか。' },
      { ko: '전통 명절 문화를 지키는 것이 중요하다고 생각하나요?', jp: '伝統的なお祝いの文化を守ることが大切だと思いますか。' },
    ],
    roleplay: {
      situation: '일본인 친구에게 한국의 설날 문화를 소개하는 상황.',
      roleA: '한국의 설날 문화를 일본어로 소개해 보세요.',
      roleB: '일본인 친구 역할. 관심을 가지고 질문해 보세요.',
    },
    expressions: [
      { word: 'お正月', reading: 'おしょうがつ', meaning: '새해, 정월', example: 'お正月は家族で過ごします。' },
      { word: 'おせち料理', reading: 'おせちりょうり', meaning: '오세치 요리 (새해 음식)', example: 'おせち料理にはそれぞれ意味があります。' },
      { word: 'お年玉', reading: 'おとしだま', meaning: '세뱃돈', example: '子供たちはお年玉をもらって喜んでいた。' },
      { word: '初詣', reading: 'はつもうで', meaning: '새해 첫 참배', example: '元日に初詣に行くのが習慣です。' },
      { word: '年賀状', reading: 'ねんがじょう', meaning: '연하장', example: '最近は年賀状を送る人が減ってきた。' },
      { word: '〜に相当する', reading: 'にそうとうする', meaning: '~에 해당하다', example: '韓国のソルラルは日本のお正月に相当します。' },
    ],
    dialogue: [
      { speaker: 'A', text: '韓国のお正月ってどんな感じ？', translation: '한국 설날은 어떤 느낌이야?' },
      { speaker: 'B', text: '日本のお正月に相当するのが「ソルラル」で、家族が集まって韓服を着たりするよ。', translation: '일본 오쇼가츠에 해당하는 게 "설날"인데, 가족이 모여서 한복을 입기도 해.' },
      { speaker: 'A', text: 'お年玉みたいなものはある？', translation: '세뱃돈 같은 건 있어?' },
      { speaker: 'B', text: 'あるよ！「セベトン」って言って、子供たちはとても楽しみにしてる。', translation: '있어! "세뱃돈"이라고 해서, 아이들이 정말 기대하고 있어.' },
      { speaker: 'A', text: '日本も似てるね。初詣とかはある？', translation: '일본이랑 비슷하네. 새해 참배 같은 건 있어?' },
      { speaker: 'B', text: '韓国では「차례」という先祖への祭りをするよ。', translation: '한국에서는 "차례"라는 조상에 대한 제사를 해.' },
    ],
    grammarPatterns: [
      { pattern: '〜に相当する', function: '비교/대응 표현', example: '韓国のソルラルは日本のお正月に相当します。', translation: '한국의 설날은 일본의 오쇼가츠에 해당합니다.' },
      { pattern: '〜という', function: '명칭 소개', example: '「セベトン」という習慣があります。', translation: '"세뱃돈"이라는 풍습이 있습니다.' },
      { pattern: '〜みたいな', function: '비유/비교', example: 'お年玉みたいなものはありますか。', translation: '세뱃돈 같은 건 있나요?' },
      { pattern: '〜のが習慣だ', function: '관습 표현', example: '初詣に行くのが習慣です。', translation: '새해 참배를 가는 것이 관습입니다.' },
    ],
    writingMission: {
      prompt: '한국의 설날과 일본의 오쇼가츠를 비교하는 글을 일본어로 써보세요.',
      promptJp: '韓国のソルラルと日本のお正月を比較する文章を日本語で書いてみましょう。',
      minChars: 100,
      hint: '〜に相当する、〜という、〜みたいな 등을 활용해 보세요.',
    },
    teacherNote: '문화 비교는 학습자의 모국 문화를 일본어로 소개하는 좋은 기회. 한국 문화를 일본어로 설명하는 연습이 됨.',
    tags: ['문화비교', '명절', '소개하기'],
  },

  // ─────────────────────────────────────────
  // 6. 트렌드
  // ─────────────────────────────────────────
  {
    id: 'taipa-cospa',
    titleKo: '타이파 vs 코스파',
    titleJp: 'タイパ vs コスパ',
    level: 'N3',
    category: '트렌드',
    activity: '그룹토론',
    style: '캐주얼',
    duration: 30,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '최근 시간을 절약하기 위해 하고 있는 것이 있나요?', jp: '最近、時間を節約するためにしていることはありますか。' },
      { ko: '동영상을 1.5배속이나 2배속으로 보는 편인가요?', jp: '動画を1.5倍速や2倍速で見ることはありますか。' },
      { ko: '가장 최근에 "이건 코스파가 좋다"고 생각한 것은 무엇인가요?', jp: '最近、「これはコスパがいい」と思ったものは何ですか。' },
    ],
    deepQuestions: [
      { ko: '타이파를 너무 중시하면 잃는 것이 있다고 생각하나요?', jp: 'タイパを重視しすぎると、何か失うものがあると思いますか。' },
      { ko: '시간 효율과 가격 효율, 어느 쪽이 더 중요하다고 생각하나요?', jp: '時間効率と価格効率、どちらがより大切だと思いますか。' },
      { ko: '타이파 중시 문화가 인간관계에 영향을 미친다고 생각하나요?', jp: 'タイパ重視の文化が人間関係に影響を与えていると思いますか。' },
    ],
    roleplay: {
      situation: '친구와 카페에서 이야기 중. A는 타이파 중시파, B는 천천히 즐기는 파.',
      roleA: '타이파를 중시하는 입장에서 B를 설득해 보세요.',
      roleB: '천천히 즐기는 것의 가치를 A에게 전달해 보세요.',
    },
    expressions: [
      { word: 'タイパ', reading: 'タイムパフォーマンス', meaning: '시간 대비 만족도', example: 'タイパがいい映画を教えて。' },
      { word: 'コスパ', reading: 'コストパフォーマンス', meaning: '가격 대비 만족도', example: 'このランチ、コスパ最高だよ。' },
      { word: '重視する', reading: 'じゅうしする', meaning: '중시하다', example: '私は質を重視するタイプです。' },
      { word: 'もったいない', reading: 'もったいない', meaning: '아깝다', example: '早送りするなんてもったいない。' },
      { word: '〜気がする', reading: 'きがする', meaning: '~인 것 같다', example: '最近みんな急ぎすぎている気がする。' },
      { word: 'わけではない', reading: 'わけではない', meaning: '반드시 ~인 것은 아니다', example: '速いのが悪いわけではないけど…。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'ねえ、この映画2時間もあるんだけど、1.5倍速で見ようかな。', translation: '있잖아, 이 영화 2시간이나 되는데, 1.5배속으로 볼까.' },
      { speaker: 'B', text: 'えー、それってもったいなくない？映画って雰囲気も楽しむものじゃん。', translation: '에이, 그거 아깝지 않아? 영화는 분위기도 즐기는 거잖아.' },
      { speaker: 'A', text: 'でも時間ないし、タイパ考えたら仕方なくない？', translation: '근데 시간도 없고, 타이파 생각하면 어쩔 수 없지 않아?' },
      { speaker: 'B', text: 'うーん、気持ちはわかるけど、コスパ的には映画館で見たほうがよくない？', translation: '음, 마음은 알겠는데, 코스파 면에서는 영화관에서 보는 게 낫지 않아?' },
      { speaker: 'A', text: 'それはそうだね。でも私、最近ちょっと忙しすぎる気がして。', translation: '그건 그렇네. 근데 나, 요즘 좀 너무 바쁜 것 같아서.' },
      { speaker: 'B', text: 'じゃあ、一緒にゆっくり見ようよ。たまにはタイパ無視でいいじゃん。', translation: '그럼 같이 천천히 보자. 가끔은 타이파 무시해도 되잖아.' },
    ],
    grammarPatterns: [
      { pattern: '〜気がする', function: '조심스럽게 의견 말하기', example: '最近、みんなタイパを気にしすぎている気がする。', translation: '요즘 다들 타이파를 너무 신경 쓰는 것 같다.' },
      { pattern: '〜わけではない', function: '부드러운 부분 부정', example: '速いのが悪いわけではないけど…。', translation: '빠른 게 나쁜 건 아닌데….' },
      { pattern: '〜ようにしている', function: '습관적 노력 표현', example: '最近はなるべくゆっくり食事するようにしている。', translation: '요즘은 되도록 천천히 식사하려고 하고 있다.' },
      { pattern: '〜なくない？', function: '가벼운 동의 구하기', example: 'それってもったいなくない？', translation: '그거 아깝지 않아?' },
    ],
    writingMission: {
      prompt: '"나는 타이파를 중시하는 편인가, 아닌가?"에 대해 자신의 경험을 포함해 일본어로 써보세요.',
      promptJp: '「私はタイパを重視するほうか、そうでないか」について、自分の経験を含めて日本語で書いてみましょう。',
      minChars: 100,
      hint: '〜気がする、〜わけではない、〜ようにしている 중 하나 이상을 사용해 보세요.',
    },
    teacherNote: '「なくない？」는 이중 부정으로 동의를 구하는 젊은 표현. 타이파/코스파는 현재 일본에서 매우 활발히 쓰이는 표현.',
    tags: ['트렌드', 'SNS표현', '의견말하기', '비교하기'],
  },
  {
    id: 'oshi-katsu',
    titleKo: '오시카츠 (덕질)',
    titleJp: '推し活',
    level: 'N3',
    category: '트렌드',
    activity: '페어대화',
    style: '캐주얼',
    duration: 25,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '좋아하는 아이돌이나 캐릭터가 있나요?', jp: '好きなアイドルやキャラクターはいますか。' },
      { ko: '오시카츠에 어느 정도 시간이나 돈을 쓰나요?', jp: '推し活にどのくらい時間やお金をかけていますか。' },
      { ko: '오시카츠가 생활에 어떤 영향을 미치나요?', jp: '推し活が生活にどんな影響を与えていますか。' },
    ],
    deepQuestions: [
      { ko: '오시카츠가 정신 건강에 좋다고 생각하나요?', jp: '推し活はメンタルヘルスにいいと思いますか。' },
      { ko: '오시카츠에 너무 많은 돈을 쓰는 것은 문제라고 생각하나요?', jp: '推し活にお金を使いすぎることは問題だと思いますか。' },
      { ko: '오시카츠를 통해 새로운 친구를 사귄 경험이 있나요?', jp: '推し活を通じて新しい友達ができた経験はありますか。' },
    ],
    roleplay: {
      situation: '친구에게 자신의 오시(최애)를 소개하는 상황.',
      roleA: '자신의 오시를 열정적으로 소개하세요.',
      roleB: '관심을 가지고 질문하면서 대화를 이어가세요.',
    },
    expressions: [
      { word: '推し', reading: 'おし', meaning: '최애 (가장 좋아하는 것/사람)', example: '私の推しはこのキャラクターです。' },
      { word: '推し活', reading: 'おしかつ', meaning: '덕질 활동', example: '推し活が生きがいになっている。' },
      { word: 'ガチ勢', reading: 'ガチぜい', meaning: '진지한 팬 (열성팬)', example: '彼女はガチ勢で、グッズを全部集めている。' },
      { word: 'エモい', reading: 'エモい', meaning: '감성적이다, 울림이 있다', example: 'このシーン、すごくエモくない？' },
      { word: '沼にはまる', reading: 'ぬまにはまる', meaning: '빠져들다 (덕후가 되다)', example: 'このアニメの沼にはまってしまった。' },
      { word: 'グッズ', reading: 'グッズ', meaning: '굿즈', example: '推しのグッズを集めるのが楽しい。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'ねえ、最近推し活してる？', translation: '있잖아, 요즘 덕질하고 있어?' },
      { speaker: 'B', text: 'うん！最近このアニメの沼にはまっちゃって。', translation: '응! 요즘 이 애니 늪에 빠져버렸어.' },
      { speaker: 'A', text: 'えー、どんなアニメ？教えて！', translation: '어, 어떤 애니야? 알려줘!' },
      { speaker: 'B', text: 'キャラクターがすごくエモくて、見るたびに泣いちゃうんだよね。', translation: '캐릭터가 너무 감성적이어서, 볼 때마다 울어버려.' },
      { speaker: 'A', text: 'それ気になる！グッズとかも買ってるの？', translation: '그거 궁금한데! 굿즈 같은 것도 사?' },
      { speaker: 'B', text: 'ガチ勢ではないけど、好きなキャラのアクスタは買ったよ。', translation: '열성팬은 아닌데, 좋아하는 캐릭터 아크릴 스탠드는 샀어.' },
    ],
    grammarPatterns: [
      { pattern: '〜にはまる', function: '빠져드는 것 표현', example: 'このアニメの沼にはまってしまった。', translation: '이 애니 늪에 빠져버렸다.' },
      { pattern: '〜たびに', function: '반복 상황 표현', example: '見るたびに感動して泣いてしまう。', translation: '볼 때마다 감동해서 울어버린다.' },
      { pattern: '〜ちゃう (〜てしまう)', function: '의도치 않은 결과', example: '気づいたらグッズを全部買っちゃってた。', translation: '알고 보니 굿즈를 다 사버렸다.' },
      { pattern: '〜てる (〜ている)', function: '진행/상태 (캐주얼)', example: '最近推し活してる？', translation: '요즘 덕질하고 있어?' },
    ],
    writingMission: {
      prompt: '자신의 오시(최애)나 좋아하는 것을 소개하는 글을 일본어로 써보세요.',
      promptJp: '自分の推しや好きなものを紹介する文章を日本語で書いてみましょう。',
      minChars: 100,
      hint: '〜にはまる、〜たびに、エモい 등을 활용해 보세요.',
    },
    teacherNote: '推し活는 현재 일본 젊은 세대의 핵심 문화 키워드. 「エモい」의 뉘앙스(단순히 감동적이라는 것 이상의 향수, 울림)를 설명할 것.',
    tags: ['트렌드', '문화', '감정표현', '추천하기'],
  },

  // ─────────────────────────────────────────
  // 7. 미디어
  // ─────────────────────────────────────────
  {
    id: 'anime-manga',
    titleKo: '애니·만화 이야기',
    titleJp: 'アニメ・マンガの話',
    level: 'N3',
    category: '미디어',
    activity: '페어대화',
    style: '캐주얼',
    duration: 25,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '좋아하는 애니나 만화가 있나요?', jp: '好きなアニメやマンガはありますか。' },
      { ko: '애니를 보면서 일본어를 공부한 적이 있나요?', jp: 'アニメを見ながら日本語を勉強したことはありますか。' },
      { ko: '최근에 본 애니나 만화는 무엇인가요?', jp: '最近見たアニメやマンガは何ですか。' },
    ],
    deepQuestions: [
      { ko: '애니로 일본어를 배우는 것이 효과적이라고 생각하나요?', jp: 'アニメで日本語を学ぶのは効果的だと思いますか。' },
      { ko: '일본 애니가 세계적으로 인기 있는 이유는 무엇이라고 생각하나요?', jp: '日本のアニメが世界的に人気な理由は何だと思いますか。' },
      { ko: '애니나 만화의 일본어와 실제 일본어는 어떻게 다른가요?', jp: 'アニメやマンガの日本語と実際の日本語はどう違いますか。' },
    ],
    roleplay: {
      situation: '친구에게 좋아하는 애니를 추천하는 상황.',
      roleA: '자신이 좋아하는 애니를 열정적으로 추천해 보세요.',
      roleB: '관심을 가지고 질문하고, 보고 싶다는 반응을 보여주세요.',
    },
    expressions: [
      { word: '作画', reading: 'さくが', meaning: '작화 (그림 퀄리티)', example: 'この作品、作画がすごくきれいだよね。' },
      { word: '伏線', reading: 'ふくせん', meaning: '복선', example: '1話の伏線が最終回で回収された！' },
      { word: '神回', reading: 'かみかい', meaning: '명작 에피소드', example: 'あの回は神回だった。' },
      { word: '沼', reading: 'ぬま', meaning: '빠져나오기 어려운 것 (덕후 표현)', example: 'このアニメは沼すぎる。' },
      { word: '尊い', reading: 'とうとい', meaning: '존귀하다 (덕후 표현: 너무 좋다)', example: 'このカップル、尊すぎる。' },
      { word: '〜をおすすめする', reading: 'をおすすめする', meaning: '~을 추천하다', example: 'このアニメを強くおすすめします。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'ねえ、最近何かいいアニメある？', translation: '있잖아, 요즘 뭔가 좋은 애니 있어?' },
      { speaker: 'B', text: 'あるある！「〇〇」って知ってる？作画がめちゃくちゃきれいで。', translation: '있어있어! "〇〇" 알아? 작화가 엄청 예쁘고.' },
      { speaker: 'A', text: 'どんな話？', translation: '어떤 내용이야?' },
      { speaker: 'B', text: '伏線がすごくて、最終回で全部回収されるんだよ。神回だった。', translation: '복선이 엄청나서, 최종화에서 다 회수돼. 명작 에피소드였어.' },
      { speaker: 'A', text: 'それ気になる！どこで見られる？', translation: '그거 궁금한데! 어디서 볼 수 있어?' },
      { speaker: 'B', text: '〇〇で配信してるよ。絶対ハマると思う！', translation: '〇〇에서 스트리밍하고 있어. 분명 빠질 것 같아!' },
    ],
    grammarPatterns: [
      { pattern: '〜って知ってる？', function: '정보 공유/확인', example: 'このアニメって知ってる？', translation: '이 애니 알아?' },
      { pattern: '〜んだよ', function: '설명/강조 (캐주얼)', example: '伏線が全部回収されるんだよ。', translation: '복선이 다 회수되거든.' },
      { pattern: '絶対〜と思う', function: '강한 추측/확신', example: '絶対ハマると思う！', translation: '분명 빠질 것 같아!' },
      { pattern: '〜をおすすめする', function: '추천 표현', example: 'このアニメを強くおすすめします。', translation: '이 애니를 강력히 추천합니다.' },
    ],
    writingMission: {
      prompt: '좋아하는 애니나 만화를 일본어로 소개하고 추천해 보세요.',
      promptJp: '好きなアニメやマンガを日本語で紹介して、おすすめしてみましょう。',
      minChars: 100,
      hint: '〜って知ってる？、〜んだよ、絶対〜と思う 등을 활용해 보세요.',
    },
    teacherNote: '애니/만화 주제는 학습 동기가 높은 학습자에게 매우 효과적. 다만 애니 일본어(役割語)와 실제 일본어의 차이를 명확히 설명할 것.',
    tags: ['미디어', '추천하기', '트렌드'],
  },
  {
    id: 'sns-culture',
    titleKo: 'SNS와 일상',
    titleJp: 'SNSと日常',
    level: 'N3',
    category: '미디어',
    activity: '그룹토론',
    style: '캐주얼',
    duration: 30,
    sensitivity: '약간개인적',
    warmupQuestions: [
      { ko: '어떤 SNS를 가장 자주 사용하나요?', jp: 'どのSNSを一番よく使いますか。' },
      { ko: 'SNS에 일상을 올리는 편인가요?', jp: 'SNSに日常を投稿する方ですか。' },
      { ko: 'SNS를 보면서 기분이 좋아진 경험이 있나요?', jp: 'SNSを見て気分が良くなった経験はありますか。' },
    ],
    deepQuestions: [
      { ko: 'SNS가 자존감에 영향을 미친다고 생각하나요?', jp: 'SNSが自己肯定感に影響すると思いますか。' },
      { ko: 'SNS 없이 생활할 수 있다고 생각하나요?', jp: 'SNSなしで生活できると思いますか。' },
      { ko: 'SNS에서 보이는 모습이 실제 모습과 다를 때 어떻게 느끼나요?', jp: 'SNSで見せる姿が実際の姿と違うとき、どう感じますか。' },
    ],
    roleplay: {
      situation: '친구가 SNS를 너무 많이 봐서 기분이 우울해진 상황.',
      roleA: '친구의 고민을 들어주고 공감해 보세요.',
      roleB: 'SNS 때문에 자존감이 낮아진 고민을 털어놓아 보세요.',
    },
    expressions: [
      { word: '映える', reading: 'ばえる', meaning: '인스타그래머블하다, 예쁘게 찍힌다', example: 'このカフェ、すごく映えるね。' },
      { word: 'フォロワー', reading: 'フォロワー', meaning: '팔로워', example: 'フォロワーが増えると嬉しい。' },
      { word: '比べてしまう', reading: 'くらべてしまう', meaning: '비교해버리다', example: 'ついSNSで他の人と比べてしまう。' },
      { word: '自己肯定感', reading: 'じここうていかん', meaning: '자기 긍정감, 자존감', example: 'SNSを見すぎると自己肯定感が下がる気がする。' },
      { word: 'デジタルデトックス', reading: 'デジタルデトックス', meaning: '디지털 디톡스', example: 'たまにデジタルデトックスするといいよ。' },
      { word: 'リア充', reading: 'リアじゅう', meaning: '현실 충실 (실생활이 풍요로운 사람)', example: 'SNSを見るとリア充ばかりに見える。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'なんか最近SNS見てると気分が落ちちゃって。', translation: '요즘 SNS 보면 기분이 가라앉아버려서.' },
      { speaker: 'B', text: 'わかる。ついみんなと比べてしまうよね。', translation: '알아. 자꾸 다들이랑 비교해버리잖아.' },
      { speaker: 'A', text: 'そう。リア充ばかりに見えて、自己肯定感が下がる気がして。', translation: '맞아. 현실 충실한 사람들만 보여서, 자존감이 낮아지는 것 같아서.' },
      { speaker: 'B', text: 'でも、SNSって良い面だけ見せてるだけだよ。', translation: '근데 SNS는 좋은 면만 보여주는 거잖아.' },
      { speaker: 'A', text: 'そうだよね。たまにデジタルデトックスしたほうがいいかな。', translation: '그렇지. 가끔 디지털 디톡스 하는 게 좋을까.' },
      { speaker: 'B', text: 'うん、私もたまにSNSを見ない日を作るようにしてる。', translation: '응, 나도 가끔 SNS 안 보는 날을 만들려고 하고 있어.' },
    ],
    grammarPatterns: [
      { pattern: 'つい〜てしまう', function: '무의식적 반복 행동', example: 'ついSNSを見てしまう。', translation: '자꾸 SNS를 봐버린다.' },
      { pattern: '〜気がして', function: '막연한 느낌 표현', example: '自己肯定感が下がる気がして。', translation: '자존감이 낮아지는 것 같아서.' },
      { pattern: '〜ようにしている', function: '습관적 노력', example: 'SNSを見ない日を作るようにしている。', translation: 'SNS 안 보는 날을 만들려고 하고 있다.' },
      { pattern: '〜だけだ', function: '한정/강조', example: 'SNSって良い面だけ見せてるだけだよ。', translation: 'SNS는 좋은 면만 보여주는 거야.' },
    ],
    writingMission: {
      prompt: 'SNS와 자신의 관계에 대해 일본어로 써보세요. 좋은 점과 나쁜 점을 모두 포함해 주세요.',
      promptJp: 'SNSと自分の関係について日本語で書いてみましょう。良い点と悪い点を両方含めてください。',
      minChars: 100,
      hint: 'つい〜てしまう、〜気がして、〜ようにしている 등을 활용해 보세요.',
    },
    teacherNote: '자존감, 비교 등 민감한 주제이므로 학습자가 편안하게 말할 수 있는 분위기 조성 필요. 개인 경험 공유 시 강요하지 않도록 주의.',
    tags: ['미디어', 'SNS', '감정표현', '사회이슈'],
  },

  // ─────────────────────────────────────────
  // 8. 사회 이슈
  // ─────────────────────────────────────────
  {
    id: 'ai-language',
    titleKo: 'AI와 외국어 학습',
    titleJp: 'AIと外国語学習',
    level: 'N2',
    category: '사회이슈',
    activity: '그룹토론',
    style: '정중체',
    duration: 50,
    sensitivity: '토론형',
    warmupQuestions: [
      { ko: '일본어 공부에 AI 도구를 사용한 적이 있나요?', jp: '日本語の勉強にAIのツールを使ったことがありますか。' },
      { ko: '번역 앱을 사용하면 언어 실력이 늘지 않는다고 생각하나요?', jp: '翻訳アプリを使うと語学力が伸びないと思いますか。' },
      { ko: 'AI가 언어 학습을 더 쉽게 만들었다고 생각하나요?', jp: 'AIが語学学習をより簡単にしたと思いますか。' },
    ],
    deepQuestions: [
      { ko: 'AI를 사용하면 반드시 일본어가 늘지는 않는다고 생각하나요?', jp: 'AIを使えば必ず日本語が上手になるとは限らないと思いますか。' },
      { ko: '10년 후에는 외국어를 배울 필요가 없어질까요?', jp: '10年後には外国語を学ぶ必要がなくなると思いますか。' },
      { ko: 'AI로 언어를 배우는 것과 사람에게 배우는 것, 어떤 차이가 있다고 생각하나요?', jp: 'AIで言語を学ぶことと人から学ぶこと、どんな違いがあると思いますか。' },
    ],
    roleplay: {
      situation: '수업 중 토론. AI 번역기 사용에 대한 찬반 토론.',
      roleA: 'AI 번역기 사용을 적극 지지하는 입장에서 주장하세요.',
      roleB: 'AI 번역기 사용에 신중해야 한다는 입장에서 반론하세요.',
    },
    expressions: [
      { word: '〜とは限らない', reading: 'とはかぎらない', meaning: '반드시 ~인 것은 아니다', example: 'AIを使えば上手になるとは限らない。' },
      { word: '依存する', reading: 'いぞんする', meaning: '의존하다', example: '翻訳アプリに依存しすぎると実力がつかない。' },
      { word: '効率的', reading: 'こうりつてき', meaning: '효율적', example: 'AIを使うと効率的に学べる。' },
      { word: 'むしろ', reading: 'むしろ', meaning: '오히려', example: 'AIを使うことで、むしろ学習意欲が上がる場合もある。' },
      { word: '一概に', reading: 'いちがいに', meaning: '일률적으로', example: 'AIが悪いとは一概には言えない。' },
      { word: '〜次第', reading: 'しだい', meaning: '~에 달려 있다', example: '使い方次第で、AIは強力なツールになる。' },
    ],
    dialogue: [
      { speaker: 'A', text: '最近、AIの翻訳がすごく精度が上がってきましたよね。', translation: '요즘 AI 번역 정확도가 많이 올라왔죠.' },
      { speaker: 'B', text: 'そうですね。でも、それに頼りすぎると語学力が伸びないんじゃないかと思って。', translation: '그렇죠. 근데 그것에 너무 의존하면 어학 실력이 늘지 않는 게 아닐까 싶어서.' },
      { speaker: 'A', text: 'AIを使えば必ず上手にならないとは限らないと思いますよ。', translation: 'AI를 쓴다고 반드시 실력이 안 느는 건 아닌 것 같아요.' },
      { speaker: 'B', text: 'どういう意味ですか？', translation: '무슨 뜻인가요?' },
      { speaker: 'A', text: 'AIを道具として使いこなせれば、むしろ学習効率が上がると思うんです。', translation: 'AI를 도구로 잘 활용하면 오히려 학습 효율이 올라간다고 생각해요.' },
      { speaker: 'B', text: 'なるほど。使い方次第ということですね。', translation: '그렇군요. 사용 방법에 달려 있다는 거네요.' },
    ],
    grammarPatterns: [
      { pattern: '〜とは限らない', function: '일반화 반박하기', example: 'AIを使えば必ず日本語が上手になるとは限らない。', translation: 'AI를 쓴다고 반드시 일본어가 늘지는 않는다.' },
      { pattern: 'むしろ〜', function: '반전/대조 표현', example: 'AIを使うことで、むしろ学習意欲が上がる場合もある。', translation: 'AI를 사용함으로써 오히려 학습 의욕이 올라가는 경우도 있다.' },
      { pattern: '〜次第', function: '조건/의존 표현', example: '使い方次第で、AIは強力な学習ツールになる。', translation: '사용 방법에 따라 AI는 강력한 학습 도구가 된다.' },
      { pattern: '〜かもしれない', function: '가능성 표현', example: '10年後には翻訳機があれば十分かもしれない。', translation: '10년 후에는 번역기만 있으면 충분할지도 모른다.' },
    ],
    writingMission: {
      prompt: 'AI와 외국어 학습에 대한 자신의 의견을 정중체로 써보세요.',
      promptJp: 'AIと外国語学習について、自分の意見を丁寧体で書いてみましょう。',
      minChars: 150,
      hint: '〜とは限らない、むしろ、〜次第 등을 활용해 보세요.',
    },
    teacherNote: '상급 학습자에게 적합한 토론 주제. 「とは限らない」는 N2 필수 문법이므로 충분히 연습시킬 것.',
    tags: ['사회이슈', 'AI', '토론', '의견말하기'],
  },
  {
    id: 'environment',
    titleKo: '환경과 일상',
    titleJp: '環境と日常',
    level: 'N3',
    category: '사회이슈',
    activity: '그룹토론',
    style: '정중체',
    duration: 35,
    sensitivity: '토론형',
    warmupQuestions: [
      { ko: '환경을 위해 일상에서 하고 있는 것이 있나요?', jp: '環境のために日常でしていることはありますか。' },
      { ko: '에코백이나 텀블러를 사용하나요?', jp: 'エコバッグやタンブラーを使っていますか。' },
      { ko: '일본에서 환경 관련 정책 중 알고 있는 것이 있나요?', jp: '日本の環境に関する政策で知っているものはありますか。' },
    ],
    deepQuestions: [
      { ko: '개인의 노력만으로 환경 문제를 해결할 수 있다고 생각하나요?', jp: '個人の努力だけで環境問題を解決できると思いますか。' },
      { ko: '환경을 위해 불편함을 감수할 수 있나요?', jp: '環境のために不便さを受け入れることができますか。' },
      { ko: '기업과 정부 중 어느 쪽이 더 책임이 있다고 생각하나요?', jp: '企業と政府、どちらがより責任があると思いますか。' },
    ],
    roleplay: {
      situation: '환경 문제에 대해 의견이 다른 두 사람의 대화.',
      roleA: '환경 문제는 개인의 노력으로 해결할 수 있다는 입장.',
      roleB: '기업과 정부의 역할이 더 중요하다는 입장.',
    },
    expressions: [
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '환경 문제', example: '環境問題は私たち全員の問題だ。' },
      { word: 'エコ', reading: 'エコ', meaning: '친환경', example: 'エコな生活を心がけている。' },
      { word: 'カーボンニュートラル', reading: 'カーボンニュートラル', meaning: '탄소 중립', example: '2050年までにカーボンニュートラルを目指す。' },
      { word: '取り組む', reading: 'とりくむ', meaning: '임하다, 노력하다', example: '環境問題に積極的に取り組んでいる。' },
      { word: '〜に取り組む', reading: 'にとりくむ', meaning: '~에 임하다', example: '企業も環境問題に取り組む必要がある。' },
      { word: '意識する', reading: 'いしきする', meaning: '의식하다', example: '日頃から環境を意識した行動をしたい。' },
    ],
    dialogue: [
      { speaker: 'A', text: '最近、環境のためにエコバッグを使うようにしています。', translation: '최근 환경을 위해 에코백을 사용하려고 하고 있어요.' },
      { speaker: 'B', text: 'それは大切なことですね。でも、個人の努力だけでは限界があると思います。', translation: '그건 중요한 일이네요. 하지만 개인의 노력만으로는 한계가 있다고 생각해요.' },
      { speaker: 'A', text: '確かに。企業や政府も環境問題に取り組む必要がありますよね。', translation: '확실히. 기업이나 정부도 환경 문제에 임할 필요가 있죠.' },
      { speaker: 'B', text: 'そうです。でも、個人が意識を変えることも大切だと思います。', translation: '그렇습니다. 하지만 개인이 의식을 바꾸는 것도 중요하다고 생각해요.' },
      { speaker: 'A', text: 'お互いに責任があるということですね。', translation: '서로 책임이 있다는 거네요.' },
      { speaker: 'B', text: 'はい、社会全体で取り組む問題だと思います。', translation: '네, 사회 전체가 임해야 할 문제라고 생각합니다.' },
    ],
    grammarPatterns: [
      { pattern: '〜ようにしている', function: '습관적 노력', example: 'エコバッグを使うようにしています。', translation: '에코백을 사용하려고 하고 있습니다.' },
      { pattern: '〜に取り組む', function: '적극적 참여 표현', example: '企業も環境問題に取り組む必要がある。', translation: '기업도 환경 문제에 임할 필요가 있다.' },
      { pattern: '〜だけでは限界がある', function: '한계 표현', example: '個人の努力だけでは限界があります。', translation: '개인의 노력만으로는 한계가 있습니다.' },
      { pattern: 'お互いに', function: '상호 표현', example: 'お互いに責任があります。', translation: '서로 책임이 있습니다.' },
    ],
    writingMission: {
      prompt: '환경 문제에 대한 자신의 생각과 일상에서 실천하고 있는 것을 일본어로 써보세요.',
      promptJp: '環境問題についての自分の考えと、日常で実践していることを日本語で書いてみましょう。',
      minChars: 120,
      hint: '〜ようにしている、〜に取り組む、〜だけでは限界がある 등을 활용해 보세요.',
    },
    teacherNote: '환경 문제는 일본에서도 매우 활발히 논의되는 주제. 일본의 구체적인 환경 정책(레지 봉투 유료화 등)을 예시로 들면 더욱 풍부한 토론 가능.',
    tags: ['사회이슈', '환경', '토론', '의견말하기'],
  },

  // ─────────────────────────────────────────
  // 9. 상상 토론
  // ─────────────────────────────────────────
  {
    id: 'time-travel',
    titleKo: '타임머신이 있다면',
    titleJp: 'タイムマシンがあったら',
    level: 'N3',
    category: '상상토론',
    activity: '그룹토론',
    style: '캐주얼',
    duration: 30,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '타임머신이 있다면 과거와 미래 중 어느 쪽에 가고 싶나요?', jp: 'タイムマシンがあったら、過去と未来どちらに行きたいですか。' },
      { ko: '과거로 돌아간다면 어느 시대에 가고 싶나요?', jp: '過去に戻るなら、どの時代に行きたいですか。' },
      { ko: '미래로 간다면 몇 년 후에 가고 싶나요?', jp: '未来に行くなら、何年後に行きたいですか。' },
    ],
    deepQuestions: [
      { ko: '과거를 바꿀 수 있다면 무엇을 바꾸고 싶나요?', jp: '過去を変えられるなら、何を変えたいですか。' },
      { ko: '타임머신으로 과거를 바꾸면 현재가 달라질 수 있다는 것에 대해 어떻게 생각하나요?', jp: 'タイムマシンで過去を変えると現在が変わるかもしれないことについてどう思いますか。' },
      { ko: '미래를 미리 알면 행복할까요, 불행할까요?', jp: '未来を先に知ったら、幸せになるでしょうか、不幸になるでしょうか。' },
    ],
    roleplay: {
      situation: '친구들과 타임머신 여행 계획을 세우는 상황.',
      roleA: '과거로 가자고 주장하며 구체적인 이유를 말해보세요.',
      roleB: '미래로 가자고 주장하며 설득해 보세요.',
    },
    expressions: [
      { word: '〜たら', reading: 'たら', meaning: '~하면, ~한다면', example: 'タイムマシンがあったら、江戸時代に行きたい。' },
      { word: '〜かもしれない', reading: 'かもしれない', meaning: '~일지도 모른다', example: '過去を変えると現在が変わるかもしれない。' },
      { word: 'もし〜なら', reading: 'もしなら', meaning: '만약 ~라면', example: 'もし未来に行けるなら、何を見たい？' },
      { word: '後悔する', reading: 'こうかいする', meaning: '후회하다', example: 'あのとき違う選択をしていたら後悔しなかったかも。' },
      { word: '〜に違いない', reading: 'にちがいない', meaning: '분명 ~일 것이다', example: '未来はもっと便利になっているに違いない。' },
      { word: 'それはそれで', reading: 'それはそれで', meaning: '그건 그것대로', example: '未来を知っても、それはそれで怖いかも。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'もしタイムマシンがあったら、どこに行く？', translation: '만약 타임머신이 있다면 어디 가?' },
      { speaker: 'B', text: '絶対過去！江戸時代の日本を見てみたい。', translation: '무조건 과거! 에도 시대 일본을 보고 싶어.' },
      { speaker: 'A', text: '私は未来かな。100年後の世界がどうなってるか気になる。', translation: '나는 미래 쪽. 100년 후 세계가 어떻게 됐는지 궁금해.' },
      { speaker: 'B', text: 'でも未来を知ったら、それはそれで怖くない？', translation: '근데 미래를 알면 그건 그것대로 무섭지 않아?' },
      { speaker: 'A', text: 'そうかも。でも未来はもっと便利になってるに違いないし。', translation: '그럴 수도. 근데 미래는 분명 더 편리해져 있을 거고.' },
      { speaker: 'B', text: 'もし過去を変えられるなら、何か後悔してることを変えたいな。', translation: '만약 과거를 바꿀 수 있다면, 뭔가 후회하는 걸 바꾸고 싶어.' },
    ],
    grammarPatterns: [
      { pattern: 'もし〜たら', function: '가정 표현', example: 'もしタイムマシンがあったら、過去に行きたい。', translation: '만약 타임머신이 있다면 과거에 가고 싶다.' },
      { pattern: '〜に違いない', function: '강한 추측', example: '未来はもっと便利になっているに違いない。', translation: '미래는 분명 더 편리해져 있을 것이다.' },
      { pattern: 'それはそれで', function: '역설적 상황 표현', example: '知れたとしても、それはそれで怖い。', translation: '알게 된다 해도 그건 그것대로 무섭다.' },
      { pattern: '〜かもしれない', function: '가능성/불확실 표현', example: '過去を変えると現在が変わるかもしれない。', translation: '과거를 바꾸면 현재가 달라질지도 모른다.' },
    ],
    writingMission: {
      prompt: '타임머신이 있다면 어디에 가고 싶은지, 그 이유를 일본어로 써보세요.',
      promptJp: 'タイムマシンがあったらどこに行きたいか、その理由を日本語で書いてみましょう。',
      minChars: 100,
      hint: 'もし〜たら、〜に違いない、〜かもしれない 등을 활용해 보세요.',
    },
    teacherNote: '가정 표현(もし〜たら)을 자유롭게 사용할 수 있는 상상력 풍부한 주제. 학습자의 창의적 표현을 적극 유도할 것.',
    tags: ['상상토론', '가정표현', '토론'],
  },
  {
    id: 'superpower',
    titleKo: '초능력이 있다면',
    titleJp: '超能力があったら',
    level: 'N3',
    category: '상상토론',
    activity: '그룹토론',
    style: '캐주얼',
    duration: 25,
    sensitivity: '안전',
    warmupQuestions: [
      { ko: '초능력이 있다면 어떤 능력을 갖고 싶나요?', jp: '超能力があったら、どんな能力が欲しいですか。' },
      { ko: '투명인간이 될 수 있다면 무엇을 하고 싶나요?', jp: '透明人間になれたら、何をしたいですか。' },
      { ko: '하늘을 날 수 있다면 어디에 가고 싶나요?', jp: '空を飛べたら、どこに行きたいですか。' },
    ],
    deepQuestions: [
      { ko: '초능력이 있으면 반드시 행복해질 수 있을까요?', jp: '超能力があれば必ず幸せになれるでしょうか。' },
      { ko: '모든 사람이 초능력을 갖게 된다면 세상은 어떻게 될까요?', jp: 'みんなが超能力を持ったら、世界はどうなるでしょうか。' },
      { ko: '초능력을 사용해서 나쁜 일을 해도 괜찮을까요?', jp: '超能力を使って悪いことをしてもいいでしょうか。' },
    ],
    roleplay: {
      situation: '친구들과 초능력 이야기를 나누는 상황.',
      roleA: '자신이 원하는 초능력을 소개하고 그 이유를 설명해 보세요.',
      roleB: '친구의 초능력 선택에 대해 질문하고 자신의 의견을 말해보세요.',
    },
    expressions: [
      { word: '超能力', reading: 'ちょうのうりょく', meaning: '초능력', example: '超能力があったら何でもできそう。' },
      { word: '透明人間', reading: 'とうめいにんげん', meaning: '투명인간', example: '透明人間になれたら面白そう。' },
      { word: '〜さえあれば', reading: 'さえあれば', meaning: '~만 있으면', example: 'その能力さえあれば何でもできる。' },
      { word: 'どんな〜でも', reading: 'どんなでも', meaning: '어떤 ~이라도', example: 'どんな困難でも乗り越えられる。' },
      { word: '〜に決まってる', reading: 'にきまってる', meaning: '분명 ~일 것이다', example: 'それが一番便利に決まってる。' },
      { word: 'かえって', reading: 'かえって', meaning: '오히려', example: '超能力があるとかえって不幸になるかも。' },
    ],
    dialogue: [
      { speaker: 'A', text: 'もし超能力が使えたら、何が欲しい？', translation: '만약 초능력을 쓸 수 있다면 뭐가 갖고 싶어?' },
      { speaker: 'B', text: '絶対テレパシー！相手の気持ちがわかったら楽じゃん。', translation: '무조건 텔레파시! 상대방 마음을 알 수 있으면 편하잖아.' },
      { speaker: 'A', text: 'でも、知りたくないことも知っちゃうかもよ。', translation: '근데 알고 싶지 않은 것도 알아버릴 수도 있어.' },
      { speaker: 'B', text: 'それはそうだね。じゃあAちゃんは？', translation: '그건 그렇네. 그럼 A는?' },
      { speaker: 'A', text: '私は時間を止める能力！テスト前に使えたら最高に決まってる。', translation: '나는 시간을 멈추는 능력! 시험 전에 쓸 수 있으면 분명 최고야.' },
      { speaker: 'B', text: 'それいいね！でも時間を止めすぎるとかえって疲れそう（笑）', translation: '그거 좋다! 근데 시간을 너무 멈추면 오히려 지칠 것 같아 (웃음)' },
    ],
    grammarPatterns: [
      { pattern: '〜さえあれば', function: '충분 조건 표현', example: 'その能力さえあれば、何でもできる。', translation: '그 능력만 있으면 뭐든 할 수 있다.' },
      { pattern: '〜に決まってる', function: '강한 확신', example: 'それが一番便利に決まってる。', translation: '그게 제일 편리한 게 분명해.' },
      { pattern: 'かえって', function: '역설적 결과', example: '超能力があるとかえって不幸になるかも。', translation: '초능력이 있으면 오히려 불행해질지도.' },
      { pattern: '〜ちゃう (〜てしまう)', function: '의도치 않은 결과', example: '知りたくないことも知っちゃうかも。', translation: '알고 싶지 않은 것도 알아버릴지도.' },
    ],
    writingMission: {
      prompt: '갖고 싶은 초능력과 그 이유를 일본어로 써보세요.',
      promptJp: '欲しい超能力とその理由を日本語で書いてみましょう。',
      minChars: 80,
      hint: '〜さえあれば、〜に決まってる、かえって 등을 활용해 보세요.',
    },
    teacherNote: '상상력을 자극하는 가벼운 토론 주제. 가정 표현과 강한 추측 표현을 자연스럽게 연습할 수 있음.',
    tags: ['상상토론', '가정표현', '재미있는주제'],
  },
];

export const trendExpressions = [
  { word: 'タイパ', reading: 'タイムパフォーマンス', meaning: '시간 대비 만족도', example: 'タイパを考えて動画を倍速で見る。', usable: true, level: 'N3', category: '라이프스타일' },
  { word: 'コスパ', reading: 'コストパフォーマンス', meaning: '가격 대비 만족도', example: 'このランチはコスパ最高！', usable: true, level: 'N4', category: '라이프스타일' },
  { word: '推し', reading: 'おし', meaning: '최애', example: '私の推しはこのキャラです。', usable: true, level: 'N3', category: '엔터테인먼트' },
  { word: '推し活', reading: 'おしかつ', meaning: '덕질', example: '推し活が生きがいになっている。', usable: true, level: 'N3', category: '엔터테인먼트' },
  { word: 'エモい', reading: 'エモい', meaning: '감성적이다, 울림이 있다', example: 'このシーン、すごくエモくない？', usable: true, level: 'N3', category: 'SNS표현' },
  { word: '映える', reading: 'ばえる', meaning: '인스타그래머블하다', example: 'このカフェ、すごく映えるね。', usable: true, level: 'N3', category: 'SNS표현' },
  { word: 'ガチ', reading: 'ガチ', meaning: '진지한, 진짜', example: 'ガチで練習している。', usable: true, level: 'N3', category: 'SNS표현' },
  { word: 'ぴえん', reading: 'ぴえん', meaning: '엉엉 (슬픔 표현)', example: 'テスト落ちた。ぴえん。', usable: false, level: 'N3', category: 'SNS표현' },
  { word: 'エモ', reading: 'エモ', meaning: '감성적인 (명사형)', example: 'このカフェ、エモすぎる。', usable: true, level: 'N3', category: 'SNS표현' },
  { word: 'ガチ勢', reading: 'ガチぜい', meaning: '열성팬', example: '彼女はガチ勢でグッズを全部持っている。', usable: true, level: 'N2', category: '엔터테인먼트' },
  { word: 'なんか', reading: 'なんか', meaning: '뭔가, 왠지', example: 'なんか今日は気分がいい。', usable: true, level: 'N4', category: '구어체' },
  { word: 'めっちゃ', reading: 'めっちゃ', meaning: '엄청, 진짜로', example: 'めっちゃ美味しい！', usable: true, level: 'N4', category: '구어체' },
  { word: 'やばい', reading: 'やばい', meaning: '대박이다, 위험하다 (상황에 따라)', example: 'このラーメン、やばいくらい美味しい。', usable: true, level: 'N4', category: '구어체' },
  { word: 'リア充', reading: 'リアじゅう', meaning: '현실 충실 (실생활이 풍요로운 사람)', example: 'SNSを見るとリア充ばかりに見える。', usable: false, level: 'N2', category: 'SNS표현' },
  { word: 'テレワーク', reading: 'テレワーク', meaning: '재택근무', example: 'テレワークが普及してきた。', usable: true, level: 'N3', category: '직장' },
  { word: 'デジタルデトックス', reading: 'デジタルデトックス', meaning: '디지털 디톡스', example: 'たまにデジタルデトックスするといいよ。', usable: true, level: 'N2', category: '라이프스타일' },
];

export const grammarPatterns = [
  {
    id: 'gachi',
    pattern: '〜とは限らない',
    level: 'N2',
    function: '일반화를 부드럽게 반박할 때',
    naturalExamples: [
      { text: 'お金があれば幸せになれるとは限らない。', translation: '돈이 있다고 반드시 행복해지는 건 아니다.' },
      { text: '有名な店が美味しいとは限らない。', translation: '유명한 가게가 반드시 맛있는 건 아니다.' },
    ],
    awkwardExamples: [
      { text: 'お金があれば幸せになれないこともある。', note: '가능하지만 「とは限らない」보다 직접적이고 단정적인 표현' },
    ],
    tips: ['의견을 부드럽게 반박할 때 매우 유용', '토론이나 에세이에서 자주 사용'],
  },
  {
    id: 'tarabayii',
    pattern: '〜たらいい / 〜といい',
    level: 'N3',
    function: '바람이나 조언을 부드럽게 표현할 때',
    naturalExamples: [
      { text: 'もっと日本語が話せたらいいな。', translation: '일본어를 더 잘 말할 수 있으면 좋겠다.' },
      { text: '早く春になるといいね。', translation: '빨리 봄이 되면 좋겠네.' },
    ],
    awkwardExamples: [
      { text: 'もっと日本語が話せることを望む。', note: '문어체적이고 딱딱한 표현' },
    ],
    tips: ['〜たらいいな는 개인적 바람', '〜といいね는 상대방에 대한 바람'],
  },
  {
    id: 'gachi2',
    pattern: 'むしろ〜',
    level: 'N3',
    function: '예상과 반대되는 결과나 더 나은 대안을 제시할 때',
    naturalExamples: [
      { text: 'AIを使うことで、むしろ学習意欲が上がる場合もある。', translation: 'AI를 사용함으로써 오히려 학습 의욕이 올라가는 경우도 있다.' },
      { text: '休んだほうが、むしろ効率が上がる。', translation: '쉬는 편이 오히려 효율이 올라간다.' },
    ],
    awkwardExamples: [
      { text: '反対に学習意欲が上がる場合もある。', note: '「むしろ」보다 단순한 대조 표현으로 뉘앙스가 다름' },
    ],
    tips: ['예상을 뒤집는 상황에서 사용', '토론에서 반론할 때 효과적'],
  },
  {
    id: 'shidai',
    pattern: '〜次第',
    level: 'N2',
    function: '조건이나 의존 관계를 표현할 때',
    naturalExamples: [
      { text: '使い方次第で、AIは強力なツールになる。', translation: '사용 방법에 따라 AI는 강력한 도구가 된다.' },
      { text: '努力次第で、誰でも上手になれる。', translation: '노력에 따라 누구든 잘할 수 있다.' },
    ],
    awkwardExamples: [
      { text: '使い方によってAIは強力なツールになる。', note: '「によって」도 가능하지만 「次第」가 더 간결하고 강조적' },
    ],
    tips: ['명사 + 次第で', '결과가 조건에 달려 있음을 강조'],
  },
];

export const errorFixExamples = [
  {
    id: 'ef1',
    wrong: '私は日本語を勉強していますから、日本に行きたいです。',
    correct: '日本語を勉強しているので、日本に行きたいです。',
    explanation: '「〜から」는 주관적 이유, 「〜ので」는 객관적 이유. 문장 전체가 사실 기반일 때는 「ので」가 더 자연스럽습니다.',
    category: '조사/접속사',
    level: 'N4',
  },
  {
    id: 'ef2',
    wrong: '昨日、友達と映画を見ました。とても面白かったです。',
    correct: '昨日、友達と映画を見ました。とても面白かった！',
    explanation: '캐주얼한 대화에서는 「〜でした」보다 「〜だった」나 「〜かった」가 더 자연스럽습니다.',
    category: '문체',
    level: 'N4',
  },
  {
    id: 'ef3',
    wrong: 'この映画は面白いと思います。見てください。',
    correct: 'この映画、面白いと思うから、ぜひ見てみて！',
    explanation: '추천할 때 「〜てください」는 명령처럼 들릴 수 있습니다. 「〜てみて」나 「〜てみてね」가 더 자연스럽고 부드럽습니다.',
    category: '권유표현',
    level: 'N3',
  },
  {
    id: 'ef4',
    wrong: '私は先生に質問をしました。',
    correct: '先生に質問しました。',
    explanation: '「質問をする」보다 「質問する」가 더 자연스럽습니다. 「〜をする」 형태는 생략 가능한 경우가 많습니다.',
    category: '동사 표현',
    level: 'N4',
  },
  {
    id: 'ef5',
    wrong: '彼女はとても親切な人です。私は彼女が好きです。',
    correct: '彼女はとても親切で、好きです。',
    explanation: '같은 주어가 반복될 때는 생략하는 것이 자연스럽습니다. 일본어는 주어 생략이 매우 일반적입니다.',
    category: '주어 생략',
    level: 'N3',
  },
  {
    id: 'ef6',
    wrong: '明日は雨が降ると思います。傘を持って行ってください。',
    correct: '明日は雨が降りそうだから、傘持っていったほうがいいよ。',
    explanation: '일상 대화에서는 「〜と思います」보다 「〜そうだ」나 「〜みたいだ」가 더 자연스럽습니다. 또한 조언할 때는 「〜たほうがいい」가 적절합니다.',
    category: '추측표현',
    level: 'N3',
  },
];

// ─────────────────────────────────────────
// 카테고리 목록 (Home.tsx에서 사용)
// ─────────────────────────────────────────
export const categories = [
  { id: '일상수다', label: '일상수다', labelJp: '日常の話', icon: '☕' },
  { id: '관계와감정', label: '관계와감정', labelJp: '人間関係', icon: '💛' },
  { id: '학교직장', label: '학교·직장', labelJp: '学校・仕事', icon: '💼' },
  { id: '일본생활', label: '일본생활', labelJp: '日本の生活', icon: '🗾' },
  { id: '문화비교', label: '문화비교', labelJp: '文化比較', icon: '🌏' },
  { id: '트렌드', label: '트렌드', labelJp: 'トレンド', icon: '⚡' },
  { id: '미디어', label: '미디어', labelJp: 'メディア', icon: '📺' },
  { id: '사회이슈', label: '사회이슈', labelJp: '社会問題', icon: '🌐' },
  { id: '상상토론', label: '상상토론', labelJp: '想像討論', icon: '🚀' },
];

// ─────────────────────────────────────────
// TrendExpression 타입 (ExpressionsPage.tsx에서 사용)
// ─────────────────────────────────────────
export type TrendExpression = {
  word: string;
  reading: string;
  meaning: string;
  example: string;
  status: '현재사용가능' | '정착표현' | '세대감있음' | '캐주얼';
  caution?: string;
  level: string;
  category: string;
};

// trendExpressions를 TrendExpression 타입으로 재정의
export const trendExpressionsTyped: TrendExpression[] = [
  { word: 'タイパ', reading: 'タイムパフォーマンス', meaning: '시간 대비 만족도', example: 'タイパを考えて動画を倍速で見る。', status: '현재사용가능', level: 'N3', category: '라이프스타일' },
  { word: 'コスパ', reading: 'コストパフォーマンス', meaning: '가격 대비 만족도', example: 'このランチはコスパ最高！', status: '정착표현', level: 'N4', category: '라이프스타일' },
  { word: '推し', reading: 'おし', meaning: '최애', example: '私の推しはこのキャラです。', status: '현재사용가능', level: 'N3', category: '엔터테인먼트' },
  { word: '推し活', reading: 'おしかつ', meaning: '덕질', example: '推し活が生きがいになっている。', status: '현재사용가능', level: 'N3', category: '엔터테인먼트' },
  { word: 'エモい', reading: 'エモい', meaning: '감성적이다, 울림이 있다', example: 'このシーン、すごくエモくない？', status: '현재사용가능', level: 'N3', category: 'SNS표현' },
  { word: '映える', reading: 'ばえる', meaning: '인스타그래머블하다', example: 'このカフェ、すごく映えるね。', status: '정착표현', level: 'N3', category: 'SNS표현' },
  { word: 'ガチ', reading: 'ガチ', meaning: '진지한, 진짜', example: 'ガチで練習している。', status: '현재사용가능', level: 'N3', category: 'SNS표현' },
  { word: 'ぴえん', reading: 'ぴえん', meaning: '엉엉 (슬픔 표현)', example: 'テスト落ちた。ぴえん。', status: '캐주얼', caution: 'SNS 전용. 실제 대화에서는 어색할 수 있음.', level: 'N3', category: 'SNS표현' },
  { word: 'エモ', reading: 'エモ', meaning: '감성적인 (명사형)', example: 'このカフェ、エモすぎる。', status: '현재사용가능', level: 'N3', category: 'SNS표현' },
  { word: 'ガチ勢', reading: 'ガチぜい', meaning: '열성팬', example: '彼女はガチ勢でグッズを全部持っている。', status: '세대감있음', level: 'N2', category: '엔터테인먼트' },
  { word: 'なんか', reading: 'なんか', meaning: '뭔가, 왠지', example: 'なんか今日は気分がいい。', status: '정착표현', level: 'N4', category: '구어체' },
  { word: 'めっちゃ', reading: 'めっちゃ', meaning: '엄청, 진짜로', example: 'めっちゃ美味しい！', status: '현재사용가능', level: 'N4', category: '구어체' },
  { word: 'やばい', reading: 'やばい', meaning: '대박이다, 위험하다 (상황에 따라)', example: 'このラーメン、やばいくらい美味しい。', status: '현재사용가능', caution: '공식 석상에서는 사용 자제', level: 'N4', category: '구어체' },
  { word: 'リア充', reading: 'リアじゅう', meaning: '현실 충실 (실생활이 풍요로운 사람)', example: 'SNSを見るとリア充ばかりに見える。', status: '세대감있음', caution: '다소 구식 표현. 최근엔 잘 안 씀.', level: 'N2', category: 'SNS표현' },
  { word: 'テレワーク', reading: 'テレワーク', meaning: '재택근무', example: 'テレワークが普及してきた。', status: '정착표현', level: 'N3', category: '직장' },
  { word: 'デジタルデトックス', reading: 'デジタルデトックス', meaning: '디지털 디톡스', example: 'たまにデジタルデトックスするといいよ。', status: '현재사용가능', level: 'N2', category: '라이프스타일' },
];

// ─────────────────────────────────────────
// GrammarPattern 타입 (GrammarPage.tsx에서 사용)
// ─────────────────────────────────────────
export type GrammarPattern = {
  id: string;
  pattern: string;
  level: string;
  function: string;
  explanation: string;
  naturalExample: string;
  unnaturalExample: string;
  tip: string;
  dialogueUse: string;
};

export const grammarPatternsTyped: GrammarPattern[] = [
  {
    id: 'toha-kagiranai',
    pattern: '〜とは限らない',
    level: 'N2',
    function: '일반화 반박하기',
    explanation: '「〜とは限らない」는 "반드시 ~인 것은 아니다"라는 뜻으로, 상대방의 주장을 부드럽게 반박하거나 일반화를 피할 때 사용합니다.',
    naturalExample: 'お金があれば幸せになれるとは限らない。',
    unnaturalExample: 'お金があれば幸せになれないこともある。',
    tip: '토론이나 에세이에서 의견을 부드럽게 반박할 때 매우 유용합니다. 「必ずしも〜ない」와 비슷한 의미이지만 더 자연스럽습니다.',
    dialogueUse: 'A: AIを使えば日本語が上手になるよ。\nB: そうとは限らないよ。使い方が大切だから。',
  },
  {
    id: 'tara-ii',
    pattern: '〜たらいい / 〜といい',
    level: 'N3',
    function: '바람이나 조언 표현하기',
    explanation: '「〜たらいい」는 "~하면 좋겠다"는 바람이나 "~하면 어때요?"라는 조언을 나타냅니다. 「〜といい」는 더 일반적인 바람을 표현할 때 씁니다.',
    naturalExample: 'もっと日本語が話せたらいいな。',
    unnaturalExample: 'もっと日本語が話せることを望む。',
    tip: '「〜たらいいな」는 개인적인 바람, 「〜たらいいですね」는 상대에 대한 바람을 표현합니다. 뉘앙스 차이에 주의하세요.',
    dialogueUse: 'A: 日本語がもっと上手になりたい。\nB: 毎日少しずつ練習したらいいよ。',
  },
  {
    id: 'mushiro',
    pattern: 'むしろ〜',
    level: 'N3',
    function: '예상과 반대되는 결과 표현하기',
    explanation: '「むしろ」는 "오히려"라는 뜻으로, 예상과 반대되거나 더 나은 대안을 제시할 때 사용합니다.',
    naturalExample: 'AIを使うことで、むしろ学習意欲が上がる場合もある。',
    unnaturalExample: 'AIを使うことで、反対に学習意欲が上がる場合もある。',
    tip: '「かえって」와 비슷하지만, 「むしろ」는 더 나은 대안을 제시할 때, 「かえって」는 의도치 않은 역효과를 표현할 때 주로 씁니다.',
    dialogueUse: 'A: 一人で勉強するのは大変じゃない？\nB: むしろ自分のペースでできるから楽だよ。',
  },
  {
    id: 'shidai',
    pattern: '〜次第',
    level: 'N2',
    function: '조건이나 의존 관계 표현하기',
    explanation: '「〜次第」는 "~에 달려 있다"는 뜻으로, 결과가 어떤 조건에 의존함을 나타냅니다. 명사 뒤에 붙어 씁니다.',
    naturalExample: '使い方次第で、AIは強力な学習ツールになる。',
    unnaturalExample: '使い方によって、AIは強力な学習ツールになる。',
    tip: '「によって」도 비슷한 뜻이지만, 「次第」는 더 강하게 "전적으로 ~에 달려 있다"는 뉘앙스를 줍니다.',
    dialogueUse: 'A: 日本語は難しい？\nB: 努力次第で誰でも上手になれると思うよ。',
  },
  {
    id: 'gachi-de',
    pattern: '〜がちだ',
    level: 'N3',
    function: '경향이나 습관 표현하기',
    explanation: '「〜がちだ」는 "~하기 쉽다, ~하는 경향이 있다"는 뜻으로, 좋지 않은 경향이나 습관을 표현할 때 자주 씁니다.',
    naturalExample: 'テレワークだと運動不足になりがちだ。',
    unnaturalExample: 'テレワークだと運動不足になることが多い。',
    tip: '「〜がちだ」는 주로 부정적인 경향에 씁니다. 긍정적인 경향에는 「〜やすい」를 쓰는 것이 더 자연스럽습니다.',
    dialogueUse: 'A: 最近太ってきた気がする。\nB: 在宅だと動かなくなりがちだよね。',
  },
  {
    id: 'saewaareba',
    pattern: '〜さえ〜ば',
    level: 'N2',
    function: '충분 조건 표현하기',
    explanation: '「〜さえ〜ば」는 "~만 ~하면"이라는 뜻으로, 그것만으로 충분하다는 조건을 강조할 때 씁니다.',
    naturalExample: 'その能力さえあれば、何でもできる。',
    unnaturalExample: 'その能力があれば、何でもできる。',
    tip: '「さえ」는 "그것만으로도 충분하다"는 강조 뉘앙스를 더합니다. 「〜ば」 대신 「〜たら」도 쓸 수 있습니다.',
    dialogueUse: 'A: 日本語の試験、大丈夫？\nB: 文法さえ覚えれば、なんとかなると思う。',
  },
];

// ─────────────────────────────────────────
// ErrorCorrection 타입 (ErrorFixPage.tsx에서 사용)
// ─────────────────────────────────────────
export type ErrorCorrection = {
  id: string;
  learnerSentence: string;
  naturalSentence: string;
  reason: string;
  category: string;
  level: string;
};

export const errorCorrections: ErrorCorrection[] = [
  {
    id: 'ec1',
    learnerSentence: '私は日本語を勉強していますから、日本に行きたいです。',
    naturalSentence: '日本語を勉強しているので、日本に行きたいです。',
    reason: '「〜から」는 주관적 이유, 「〜ので」는 객관적 이유입니다. 문장 전체가 사실 기반일 때는 「ので」가 더 자연스럽습니다.',
    category: '조사/접속사',
    level: 'N4',
  },
  {
    id: 'ec2',
    learnerSentence: '昨日、友達と映画を見ました。とても面白かったです。',
    naturalSentence: '昨日、友達と映画を見たよ。めっちゃ面白かった！',
    reason: '캐주얼한 대화에서는 「〜ました」보다 「〜た」나 「〜たよ」가 더 자연스럽습니다.',
    category: '문체',
    level: 'N4',
  },
  {
    id: 'ec3',
    learnerSentence: 'この映画は面白いと思います。見てください。',
    naturalSentence: 'この映画、面白いと思うから、ぜひ見てみて！',
    reason: '추천할 때 「〜てください」는 명령처럼 들릴 수 있습니다. 「〜てみて」나 「〜てみてね」가 더 부드럽고 자연스럽습니다.',
    category: '권유표현',
    level: 'N3',
  },
  {
    id: 'ec4',
    learnerSentence: '私は先生に質問をしました。',
    naturalSentence: '先生に質問しました。',
    reason: '「質問をする」보다 「質問する」가 더 자연스럽습니다. 일본어에서는 「〜をする」 형태를 생략하는 경우가 많습니다.',
    category: '동사 표현',
    level: 'N4',
  },
  {
    id: 'ec5',
    learnerSentence: '彼女はとても親切な人です。私は彼女が好きです。',
    naturalSentence: '彼女はとても親切で、好きです。',
    reason: '같은 주어가 반복될 때는 생략하는 것이 자연스럽습니다. 일본어는 주어 생략이 매우 일반적입니다.',
    category: '주어 생략',
    level: 'N3',
  },
  {
    id: 'ec6',
    learnerSentence: '明日は雨が降ると思います。傘を持って行ってください。',
    naturalSentence: '明日は雨が降りそうだから、傘持っていったほうがいいよ。',
    reason: '일상 대화에서는 「〜と思います」보다 「〜そうだ」나 「〜みたいだ」가 더 자연스럽습니다. 또한 조언할 때는 「〜たほうがいい」가 적절합니다.',
    category: '추측표현',
    level: 'N3',
  },
  {
    id: 'ec7',
    learnerSentence: 'すみません、ちょっと待ってください。',
    naturalSentence: 'すみません、少々お待ちいただけますか。',
    reason: '공식적인 상황이나 비즈니스 장면에서는 「ちょっと待ってください」보다 「少々お待ちいただけますか」가 훨씬 정중합니다.',
    category: '경어',
    level: 'N2',
  },
  {
    id: 'ec8',
    learnerSentence: '日本語が難しいですが、頑張ります。',
    naturalSentence: '日本語は難しいけど、頑張ります。',
    reason: '「〜が」는 문어체적 역접, 「〜けど」는 구어체 역접입니다. 회화에서는 「けど」가 더 자연스럽습니다.',
    category: '접속사',
    level: 'N4',
  },
  {
    id: 'ec9',
    learnerSentence: '友達に会うことができて、嬉しいです。',
    naturalSentence: '友達に会えて、嬉しいです。',
    reason: '「〜ことができる」는 능력/가능을 나타내지만, 실현된 기쁨을 표현할 때는 가능형 「〜て」가 더 자연스럽습니다.',
    category: '가능형',
    level: 'N3',
  },
  {
    id: 'ec10',
    learnerSentence: '私はコーヒーを飲むことが好きです。',
    naturalSentence: '私はコーヒーを飲むのが好きです。',
    reason: '「〜ことが好き」도 맞지만, 회화에서는 「〜のが好き」가 더 자연스럽게 들립니다.',
    category: '명사화',
    level: 'N4',
  },
];
