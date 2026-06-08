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
  duration: number; // 분
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
      { ko: '시간 효율과 가격 효율, 어느 쪽이 더 중요하다고 생각하나요? 이유도 말해 보세요.', jp: '時間効率と価格効率、どちらがより大切だと思いますか。理由も話してみてください。' },
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
      { pattern: '〜わけではない', function: '부드러운 부분 부정', example: '速いのが悪いわけではないけど、何か大切なものを失う気がする。', translation: '빠른 게 나쁜 건 아닌데, 뭔가 소중한 걸 잃는 것 같다.' },
      { pattern: '〜ようにしている', function: '습관적 노력 표현', example: '最近はなるべくゆっくり食事するようにしている。', translation: '요즘은 되도록 천천히 식사하려고 하고 있다.' },
      { pattern: '〜なくない？', function: '가벼운 동의 구하기', example: 'それってもったいなくない？', translation: '그거 아깝지 않아?' },
    ],
    writingMission: {
      prompt: '"나는 타이파를 중시하는 편인가, 아닌가?"에 대해 자신의 경험을 포함해 일본어로 써보세요.',
      promptJp: '「私はタイパを重視するほうか、そうでないか」について、自分の経験を含めて日本語で書いてみましょう。',
      minChars: 100,
      hint: '〜気がする、〜わけではない、〜ようにしている 중 하나 이상을 사용해 보세요.',
    },
    teacherNote: '「なくない？」는 이중 부정으로 동의를 구하는 젊은 표현. 학습자가 혼동하기 쉬우므로 예문을 충분히 제시할 것. 타이파/코스파는 현재 일본에서 매우 활발히 쓰이는 표현으로 문화 배경 설명 추가 가능.',
    tags: ['트렌드', 'SNS표현', '의견말하기', '비교하기'],
  },
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
      prompt: '혼자 밥 먹는 것에 대한 자신의 생각을 일본어로 써보세요. 찬성인지 반대인지, 그 이유도 포함해 주세요.',
      promptJp: '一人ご飯についての自分の考えを日本語で書いてみましょう。賛成か反対か、その理由も含めてください。',
      minChars: 80,
      hint: '〜やすい/にくい、〜にはまっている 등을 활용해 보세요.',
    },
    teacherNote: '혼밥 문화는 한국과 일본 모두 공감대가 높은 주제. 「気まずい」는 한국어 "어색하다"와 미묘하게 다른 뉘앙스 설명 필요. 카운터석 문화 등 일본 식당 문화도 함께 소개 가능.',
    tags: ['일상', '문화비교', '경험말하기'],
  },
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
      { ko: 'AI를 사용하면 반드시 일본어가 늘지는 않는다고 생각하나요? 그 이유는?', jp: 'AIを使えば必ず日本語が上手になるとは限らないと思いますか。その理由は？' },
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
      { word: '本質的', reading: 'ほんしつてき', meaning: '본질적', example: '言語学習の本質的な目的は何だろう。' },
      { word: 'むしろ', reading: 'むしろ', meaning: '오히려', example: 'AIを使うことで、むしろ学習意欲が上がる場合もある。' },
      { word: '一概に', reading: 'いちがいに', meaning: '일률적으로', example: 'AIが悪いとは一概には言えない。' },
    ],
    dialogue: [
      { speaker: 'A', text: '最近、AIの翻訳がすごく精度が上がってきましたよね。', translation: '요즘 AI 번역 정확도가 많이 올라왔죠.' },
      { speaker: 'B', text: 'そうですね。でも、それに頼りすぎると語学力が伸びないんじゃないかと思って。', translation: '그렇죠. 근데 그것에 너무 의존하면 어학 실력이 늘지 않는 게 아닐까 싶어서.' },
      { speaker: 'A', text: 'それはそうかもしれませんが、AIを使えば必ず上手にならないとは限らないと思いますよ。', translation: '그럴 수도 있지만, AI를 쓴다고 반드시 실력이 안 느는 건 아닌 것 같아요.' },
      { speaker: 'B', text: 'どういう意味ですか？', translation: '무슨 뜻인가요?' },
      { speaker: 'A', text: 'AIを道具として使いこなせれば、むしろ学習効率が上がると思うんです。', translation: 'AI를 도구로 잘 활용하면 오히려 학습 효율이 올라간다고 생각해요.' },
      { speaker: 'B', text: 'なるほど。使い方次第ということですね。', translation: '그렇군요. 사용 방법에 달려 있다는 거네요.' },
    ],
    grammarPatterns: [
      { pattern: '〜とは限らない', function: '일반화 반박하기', example: 'AIを使えば必ず日本語が上手になるとは限らない。', translation: 'AI를 쓴다고 반드시 일본어가 늘지는 않는다.' },
      { pattern: '〜かもしれない', function: '가능성 표현', example: '10年後には翻訳機があれば十分かもしれない。', translation: '10년 후에는 번역기만 있으면 충분할지도 모른다.' },
      { pattern: 'むしろ〜', function: '반전/대조 표현', example: 'AIを使うことで、むしろ学習意欲が上がる場合もある。', translation: 'AI를 사용함으로써 오히려 학습 의욕이 올라가는 경우도 있다.' },
      { pattern: '〜次第', function: '조건/의존 표현', example: '使い方次第で、AIは強力な学習ツールになる。', translation: '사용 방법에 따라 AI는 강력한 학습 도구가 된다.' },
    ],
    writingMission: {
      prompt: 'AI와 외국어 학습에 대한 자신의 의견을 정중체로 써보세요. 찬성 또는 반대 입장을 명확히 하고, 이유를 2가지 이상 제시해 주세요.',
      promptJp: 'AIと外国語学習について、自分の意見を丁寧体で書いてみましょう。賛成または反対の立場を明確にし、理由を2つ以上挙げてください。',
      minChars: 150,
      hint: '〜とは限らない、むしろ、〜次第 등을 활용해 보세요.',
    },
    teacherNote: '상급 학습자에게 적합한 토론 주제. 찬반이 명확히 갈릴 수 있어 활발한 토론 유도 가능. 「とは限らない」는 N2 필수 문법이므로 충분히 연습시킬 것.',
    tags: ['사회이슈', 'AI', '토론', '의견말하기'],
  },
  {
    id: 'convenience-store',
    titleKo: '편의점 문화',
    titleJp: 'コンビニ文化',
    level: 'N4',
    category: '일본생활',
    activity: '페어대화',
    style: '캐주얼',
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
    teacherNote: '일본 편의점 서비스 표현은 실생활에서 매우 유용. 「かしこまりました」vs「わかりました」의 격식 차이 설명 필요. 롤플레이 시 실제 편의점 상황을 최대한 재현하도록 유도.',
    tags: ['일본생활', '서비스표현', '롤플레이'],
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
      { word: 'にわかファン', reading: 'にわかファン', meaning: '갑자기 생긴 팬 (뉴비)', example: 'にわかファンでも推し活は楽しめる。' },
      { word: 'エモい', reading: 'エモい', meaning: '감성적이다, 울림이 있다', example: 'このシーン、すごくエモくない？' },
      { word: '沼にはまる', reading: 'ぬまにはまる', meaning: '빠져들다 (덕후가 되다)', example: 'このアニメの沼にはまってしまった。' },
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
    teacherNote: '推し活는 현재 일본 젊은 세대의 핵심 문화 키워드. 학습자가 실제로 관심 있는 아이돌/애니/게임을 주제로 하면 더욱 활발한 대화 유도 가능. 「エモい」의 뉘앙스(단순히 감동적이라는 것 이상의 향수, 울림)를 설명할 것.',
    tags: ['트렌드', '문화', '감정표현', '추천하기'],
  },
];

export interface TrendExpression {
  word: string;
  reading: string;
  status: '현재사용가능' | '정착표현' | '세대감있음' | '캐주얼';
  meaning: string;
  example: string;
  caution?: string;
}

export const trendExpressions: TrendExpression[] = [
  { word: 'タイパ', reading: 'タイムパフォーマンス', status: '현재사용가능', meaning: '시간 효율. 시간 대비 만족도', example: 'タイパがいい映画を教えて。', caution: undefined },
  { word: 'コスパ', reading: 'コストパフォーマンス', status: '정착표현', meaning: '가격 대비 만족도', example: 'このランチ、コスパ最高だよ。', caution: undefined },
  { word: '推し活', reading: 'おしかつ', status: '현재사용가능', meaning: '좋아하는 아이돌·캐릭터를 응원하는 활동 (덕질)', example: '推し活が生きがいです。', caution: undefined },
  { word: 'それな', reading: 'それな', status: '캐주얼', meaning: '"그거 맞아", "인정"에 가까운 맞장구', example: 'A: 最近疲れてる。B: それな。', caution: '친한 친구 사이에서만 사용. 격식 있는 자리에서는 부적절.' },
  { word: 'ガチで', reading: 'ガチで', status: '캐주얼', meaning: '진짜로, 정말로', example: 'ガチで美味しかった！', caution: '캐주얼 표현. 공식 상황에서는 「本当に」 사용.' },
  { word: 'エモい', reading: 'エモい', status: '세대감있음', meaning: '감성적이다, 울림이 있다', example: 'この曲、すごくエモくない？', caution: '젊은 세대 표현. 중장년층에게는 어색할 수 있음.' },
  { word: 'ありよりのあり', reading: 'ありよりのあり', status: '세대감있음', meaning: '꽤 괜찮다, 가능성 있다', example: 'A: どう思う？B: ありよりのありかな。', caution: '매우 젊은 말투. 상황 파악 후 사용.' },
  { word: 'エモい', reading: 'エモい', status: '세대감있음', meaning: '감성적이다', example: 'この映画、エモすぎて泣いた。', caution: undefined },
  { word: 'ぴえん', reading: 'ぴえん', status: '세대감있음', meaning: '울상, 슬프다 (이모지 🥺)', example: 'チケット取れなかった、ぴえん。', caution: '매우 젊은 인터넷 표현. 실제 대화보다 SNS에서 주로 사용.' },
  { word: 'わかりみ', reading: 'わかりみ', status: '세대감있음', meaning: '공감한다, 이해된다', example: 'わかりみが深い。', caution: '젊은 세대 표현.' },
  { word: 'しか勝たん', reading: 'しかかたん', status: '세대감있음', meaning: '~밖에 없다, ~최고야', example: '推ししか勝たん。', caution: '팬덤 문화에서 주로 사용.' },
  { word: 'ガチ恋', reading: 'ガチこい', status: '캐주얼', meaning: '진심으로 좋아함 (아이돌 등에게)', example: 'ガチ恋勢は大変だよね。', caution: '팬덤 용어.' },
];

export interface GrammarPattern {
  id: string;
  pattern: string;
  function: string;
  level: Level;
  explanation: string;
  naturalExample: string;
  unnaturalExample: string;
  tip: string;
  dialogueUse: string;
}

export const grammarPatterns: GrammarPattern[] = [
  {
    id: 'wake-de-wa-nai',
    pattern: '〜わけではない',
    function: '부드러운 부분 부정',
    level: 'N3',
    explanation: '상대의 말을 완전히 부정하지 않고, 부분적으로 반박할 때 사용. "반드시 ~인 것은 아니다"는 의미.',
    naturalExample: '日本のドラマが嫌いなわけではないけど、最近は韓国ドラマのほうをよく見る。',
    unnaturalExample: '日本のドラマが嫌いです。（너무 단정적으로 들림）',
    tip: '「〜ではない」보다 부드럽고 배려 있는 표현. 의견 충돌 시 관계를 유지하면서 반박할 때 유용.',
    dialogueUse: 'A: 日本語が嫌いなの？ B: 嫌いなわけではないけど、難しくて…',
  },
  {
    id: 'ki-ga-suru',
    pattern: '〜気がする',
    function: '조심스럽게 의견 말하기',
    level: 'N4',
    explanation: '확신은 없지만 그런 느낌이 든다는 의미. 단정하지 않고 부드럽게 의견을 말할 때 사용.',
    naturalExample: '最近、みんなタイパを気にしすぎている気がする。',
    unnaturalExample: 'みんなタイパを気にしすぎています。（너무 단정적）',
    tip: '회화에서 자신의 의견을 강하게 주장하지 않고 부드럽게 전달할 때 매우 유용한 표현.',
    dialogueUse: 'なんか最近、日本語が上手くなってきた気がする。',
  },
  {
    id: 'yasui-nikui',
    pattern: '〜やすい / 〜にくい',
    function: '경험과 평가 말하기',
    level: 'N4',
    explanation: '어떤 행동을 하기 쉬운지/어려운지를 표현. 물건이나 장소, 상황을 평가할 때 자주 사용.',
    naturalExample: '一人でも入りやすい店と入りにくい店がある。',
    unnaturalExample: '一人で入ることができる店とできない店がある。（딱딱하고 자연스럽지 않음）',
    tip: '「〜することができる」보다 훨씬 자연스럽고 일상적인 표현.',
    dialogueUse: 'このアプリ、使いやすい？ / ちょっと使いにくいかも。',
  },
  {
    id: 'to-wa-kagiranai',
    pattern: '〜とは限らない',
    function: '일반화 반박하기',
    level: 'N2',
    explanation: '일반적으로 그렇다고 여겨지는 것을 반박할 때 사용. "반드시 ~라고는 할 수 없다".',
    naturalExample: 'AIを使えば必ず日本語が上手になるとは限らない。',
    unnaturalExample: 'AIを使っても日本語が上手にならないかもしれません。（가능성 표현으로 뉘앙스 다름）',
    tip: '토론이나 의견 교환 시 상대방의 주장을 반박할 때 매우 유용. 「必ずしも〜わけではない」와 비슷한 의미.',
    dialogueUse: '高いものが必ずしもいいとは限らないよ。',
  },
];

export interface ErrorCorrection {
  id: string;
  learnerSentence: string;
  naturalSentence: string;
  reason: string;
  level: Level;
  category: string;
}

export const errorCorrections: ErrorCorrection[] = [
  {
    id: 'err-1',
    learnerSentence: '私は日本語を勉強することが好きですから、毎日します。',
    naturalSentence: '日本語を勉強するのが好きなので、毎日やっています。',
    reason: '회화에서는 「のが好き」가 「ことが好き」보다 자연스러운 경우가 많습니다. 또한 「毎日します」는 목적어 없이 쓰면 어색하고, 「毎日やっています」가 더 자연스럽습니다.',
    level: 'N4',
    category: '조사/표현',
  },
  {
    id: 'err-2',
    learnerSentence: '私はその映画を見て感動しましたから、涙が出ました。',
    naturalSentence: 'その映画を見て感動して、涙が出ました。',
    reason: '「〜から」를 과하게 사용하면 설명문처럼 들릴 수 있습니다. 감동과 눈물은 자연스러운 인과관계이므로 「〜て」로 연결하는 것이 더 자연스럽습니다.',
    level: 'N4',
    category: '접속 표현',
  },
  {
    id: 'err-3',
    learnerSentence: '友だちと会って、楽しかったです。',
    naturalSentence: '友だちに会えて、楽しかったです。',
    reason: '만남 자체가 기뻤다는 뉘앙스를 표현할 때는 「会えて（会える + て）」가 더 자연스럽습니다. 「会えた」는 만날 수 있었다는 기쁨을 포함합니다.',
    level: 'N3',
    category: '동사 활용',
  },
  {
    id: 'err-4',
    learnerSentence: '今日は行くことができません。別の日に変更してください。',
    naturalSentence: 'すみません、今日少し都合が悪くなってしまって…。別の日に変更していただくことは可能でしょうか。',
    reason: '문법적으로는 맞지만, 상황에 따라 차갑고 명령적으로 들릴 수 있습니다. 특히 덜 친한 사람에게는 정중한 표현이 필요합니다.',
    level: 'N3',
    category: '경어/말투',
  },
  {
    id: 'err-5',
    learnerSentence: '日本語が上手になりたいので、毎日勉強しています。',
    naturalSentence: '日本語が上手になりたくて、毎日勉強しています。',
    reason: '목표나 바람을 이유로 말할 때 회화에서는 「〜たくて」가 「〜ので」보다 더 자연스럽게 들리는 경우가 많습니다.',
    level: 'N4',
    category: '접속 표현',
  },
  {
    id: 'err-6',
    learnerSentence: '私は昨日映画を見ました。映画はとても面白かったです。',
    naturalSentence: '昨日映画を見たんだけど、すごく面白かった！',
    reason: '회화에서는 「〜んだけど」로 자연스럽게 이어가는 것이 더 자연스럽습니다. 또한 「とても」보다 「すごく」가 캐주얼 회화에서 더 많이 쓰입니다.',
    level: 'N4',
    category: '회화체',
  },
];

export const categories = [
  { id: '일상수다', label: '일상 수다', labelJp: '日常の話', icon: '☕', color: 'bg-amber-100 text-amber-800' },
  { id: '관계와감정', label: '관계와 감정', labelJp: '関係と感情', icon: '💬', color: 'bg-pink-100 text-pink-800' },
  { id: '학교직장', label: '학교·직장', labelJp: '学校・職場', icon: '📚', color: 'bg-blue-100 text-blue-800' },
  { id: '일본생활', label: '일본 생활', labelJp: '日本生活', icon: '🗾', color: 'bg-green-100 text-green-800' },
  { id: '문화비교', label: '문화 비교', labelJp: '文化比較', icon: '🌏', color: 'bg-purple-100 text-purple-800' },
  { id: '트렌드', label: '트렌드', labelJp: 'トレンド', icon: '✨', color: 'bg-orange-100 text-orange-800' },
  { id: '미디어', label: '미디어', labelJp: 'メディア', icon: '🎬', color: 'bg-red-100 text-red-800' },
  { id: '사회이슈', label: '사회 이슈', labelJp: '社会問題', icon: '📰', color: 'bg-slate-100 text-slate-800' },
  { id: '상상토론', label: '상상 토론', labelJp: '想像討論', icon: '💭', color: 'bg-violet-100 text-violet-800' },
];
