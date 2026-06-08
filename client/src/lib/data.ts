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
  expressions: { word: string; reading: string; meaning: string; example: string; translation?: string; example_jp?: string }[];
  dialogue: { speaker: 'A' | 'B'; text: string; translation: string }[];
  grammarPatterns: { pattern: string; function: string; example: string; translation: string }[];
  writingMission: { prompt: string; promptJp: string; minChars: number; hint: string };
  teacherNote: string;
  tags: string[];
}

export const topicCards: TopicCard[] = [
  {
    "id": "daily-weather",
    "titleKo": "날씨와 계절",
    "titleJp": "天気と季節",
    "level": "N5",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "오늘 날씨가 어때요?",
        "jp": "今日の天気はどうですか。"
      },
      {
        "ko": "어느 계절을 가장 좋아하나요?",
        "jp": "どの季節が一番好きですか。"
      },
      {
        "ko": "비 오는 날을 좋아하나요?",
        "jp": "雨の日は好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "날씨가 기분에 어떤 영향을 미치나요?",
        "jp": "天気が気分にどんな影響を与えますか。"
      },
      {
        "ko": "당신의 나라에서 가장 좋은 계절은 언제인가요?",
        "jp": "あなたの国で一番いい季節はいつですか。"
      },
      {
        "ko": "이상 기후에 대해 어떻게 생각하나요?",
        "jp": "異常気象についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "친구와 주말 약속을 잡는데 날씨에 대해 이야기하는 상황",
      "roleA": "주말에 피크닉을 가고 싶어하는 사람",
      "roleB": "주말에 비가 온다고 알려주는 사람"
    },
    "expressions": [
      {
        "word": "晴れ",
        "reading": "はれ",
        "meaning": "맑음",
        "example": "明日は晴れです。"
      },
      {
        "word": "曇り",
        "reading": "くもり",
        "meaning": "흐림",
        "example": "今日は曇りですね。"
      },
      {
        "word": "雨",
        "reading": "あめ",
        "meaning": "비",
        "example": "雨が降っています。"
      },
      {
        "word": "雪",
        "reading": "ゆき",
        "meaning": "눈",
        "example": "冬は雪が降ります。"
      },
      {
        "word": "季節",
        "reading": "きせつ",
        "meaning": "계절",
        "example": "好きな季節は春です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "今日の天気はどうですか。",
        "translation": "오늘 날씨는 어때요?"
      },
      {
        "speaker": "B",
        "text": "今日はとてもいい天気です。",
        "translation": "오늘은 아주 좋은 날씨예요."
      },
      {
        "speaker": "A",
        "text": "そうですか。どこかへ行きたいですね。",
        "translation": "그렇군요. 어딘가 가고 싶네요."
      },
      {
        "speaker": "B",
        "text": "はい、公園を散歩しましょう。",
        "translation": "네, 공원을 산책합시다."
      },
      {
        "speaker": "A",
        "text": "いいですね。行きましょう。",
        "translation": "좋네요. 갑시다."
      },
      {
        "speaker": "B",
        "text": "お弁当も持っていきましょう。",
        "translation": "도시락도 가져갑시다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜はどうですか",
        "function": "상태나 의견 묻기",
        "example": "今日の天気はどうですか。",
        "translation": "오늘 날씨는 어때요?"
      },
      {
        "pattern": "〜たいです",
        "function": "희망 표현하기",
        "example": "どこかへ行きたいです。",
        "translation": "어딘가 가고 싶어요."
      },
      {
        "pattern": "〜ましょう",
        "function": "권유하기",
        "example": "公園を散歩しましょう。",
        "translation": "공원을 산책합시다."
      }
    ],
    "writingMission": {
      "prompt": "오늘의 날씨와 기분에 대해 짧은 일기를 써보세요.",
      "promptJp": "今日の天気と気分について短い日記を書いてみましょう。",
      "minChars": 50,
      "hint": "天気(てんき), 気分(きぶん), 〜です/〜ます를 사용해보세요."
    },
    "teacherNote": "N5 레벨이므로 기본적인 날씨 어휘와 간단한 문형 연습에 집중합니다.",
    "tags": [
      "날씨",
      "계절",
      "기초회화"
    ]
  },
  {
    "id": "daily-food",
    "titleKo": "좋아하는 음식",
    "titleJp": "好きな食べ物",
    "level": "N5",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "어떤 음식을 좋아하나요?",
        "jp": "どんな食べ物が好きですか。"
      },
      {
        "ko": "매운 음식을 잘 먹나요?",
        "jp": "辛い食べ物をよく食べますか。"
      },
      {
        "ko": "가장 좋아하는 과일은 무엇인가요?",
        "jp": "一番好きな果物は何ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "어릴 때 좋아했던 음식과 지금 좋아하는 음식이 다른가요?",
        "jp": "子供の時に好きだった食べ物と今好きな食べ物は違いますか。"
      },
      {
        "ko": "건강한 식습관이란 무엇이라고 생각하나요?",
        "jp": "健康的な食習慣とは何だと思いますか。"
      },
      {
        "ko": "외국 음식 중 가장 좋아하는 것은 무엇인가요?",
        "jp": "外国の食べ物の中で一番好きなものは何ですか。"
      }
    ],
    "roleplay": {
      "situation": "식당에서 메뉴를 고르는 상황",
      "roleA": "매운 것을 먹고 싶어하는 사람",
      "roleB": "매운 것을 못 먹는 사람"
    },
    "expressions": [
      {
        "word": "食べる",
        "reading": "たべる",
        "meaning": "먹다",
        "example": "パンを食べます。"
      },
      {
        "word": "おいしい",
        "reading": "おいしい",
        "meaning": "맛있다",
        "example": "このケーキはおいしいです。"
      },
      {
        "word": "辛い",
        "reading": "からい",
        "meaning": "맵다",
        "example": "キムチは辛いです。"
      },
      {
        "word": "甘い",
        "reading": "あまい",
        "meaning": "달다",
        "example": "チョコレートは甘いです。"
      },
      {
        "word": "果物",
        "reading": "くだもの",
        "meaning": "과일",
        "example": "果物が好きです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "どんな食べ物が好きですか。",
        "translation": "어떤 음식을 좋아하나요?"
      },
      {
        "speaker": "B",
        "text": "私はお寿司が好きです。",
        "translation": "저는 스시를 좋아해요."
      },
      {
        "speaker": "A",
        "text": "そうですか。私はお肉が好きです。",
        "translation": "그렇군요. 저는 고기를 좋아해요."
      },
      {
        "speaker": "B",
        "text": "よくお肉を食べますか。",
        "translation": "고기를 자주 먹나요?"
      },
      {
        "speaker": "A",
        "text": "はい、週末によく食べます。",
        "translation": "네, 주말에 자주 먹어요."
      },
      {
        "speaker": "B",
        "text": "いいですね。今度一緒に食べましょう。",
        "translation": "좋네요. 다음에 같이 먹어요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "どんな〜",
        "function": "종류 묻기",
        "example": "どんな食べ物が好きですか。",
        "translation": "어떤 음식을 좋아하나요?"
      },
      {
        "pattern": "〜が好きです",
        "function": "기호 표현하기",
        "example": "お寿司が好きです。",
        "translation": "스시를 좋아해요."
      },
      {
        "pattern": "よく〜ます",
        "function": "빈도 표현하기",
        "example": "よくお肉を食べます。",
        "translation": "고기를 자주 먹어요."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 음식에 대해 소개하는 글을 써보세요.",
      "promptJp": "自分が一番好きな食べ物について紹介する文章を書いてみましょう。",
      "minChars": 50,
      "hint": "一番(いちばん), 好き(すき), おいしい를 활용해보세요."
    },
    "teacherNote": "음식 관련 형용사(맛있다, 맵다, 달다 등)를 연습할 수 있도록 유도합니다.",
    "tags": [
      "음식",
      "취향",
      "기초회화"
    ]
  },
  {
    "id": "daily-weekend",
    "titleKo": "주말 보내기",
    "titleJp": "週末の過ごし方",
    "level": "N5",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "주말에 보통 무엇을 하나요?",
        "jp": "週末はたいてい何をしますか。"
      },
      {
        "ko": "지난 주말에는 무엇을 했나요?",
        "jp": "先週の週末は何をしましたか。"
      },
      {
        "ko": "이번 주말에는 무엇을 할 예정인가요?",
        "jp": "今週の週末は何をする予定ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "이상적인 주말은 어떤 모습인가요?",
        "jp": "理想的な週末はどんな様子ですか。"
      },
      {
        "ko": "주말이 이틀인 것이 충분하다고 생각하나요?",
        "jp": "週末が2日間あることで十分だと思いますか。"
      },
      {
        "ko": "주말에 일하는 것에 대해 어떻게 생각하나요?",
        "jp": "週末に働くことについてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "월요일 아침, 동료와 주말에 대해 이야기하는 상황",
      "roleA": "주말에 여행을 다녀온 사람",
      "roleB": "주말 내내 집에서 쉰 사람"
    },
    "expressions": [
      {
        "word": "週末",
        "reading": "しゅうまつ",
        "meaning": "주말",
        "example": "週末は休みです。"
      },
      {
        "word": "休む",
        "reading": "やすむ",
        "meaning": "쉬다",
        "example": "家で休みます。"
      },
      {
        "word": "遊ぶ",
        "reading": "あそぶ",
        "meaning": "놀다",
        "example": "友達と遊びます。"
      },
      {
        "word": "映画",
        "reading": "えいが",
        "meaning": "영화",
        "example": "映画を見ます。"
      },
      {
        "word": "買い物",
        "reading": "かいもの",
        "meaning": "쇼핑",
        "example": "買い物をします。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "週末は何をしましたか。",
        "translation": "주말에 무엇을 했나요?"
      },
      {
        "speaker": "B",
        "text": "友達と映画を見ました。",
        "translation": "친구와 영화를 봤어요."
      },
      {
        "speaker": "A",
        "text": "どんな映画ですか。",
        "translation": "어떤 영화인가요?"
      },
      {
        "speaker": "B",
        "text": "アクション映画です。とても面白かったです。",
        "translation": "액션 영화예요. 아주 재미있었어요."
      },
      {
        "speaker": "A",
        "text": "いいですね。私は家で休みました。",
        "translation": "좋네요. 저는 집에서 쉬었어요."
      },
      {
        "speaker": "B",
        "text": "ゆっくり休めましたか。",
        "translation": "푹 쉬었나요?"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ました",
        "function": "과거형 표현하기",
        "example": "映画を見ました。",
        "translation": "영화를 봤어요."
      },
      {
        "pattern": "〜と",
        "function": "함께하는 대상 표현하기",
        "example": "友達と映画を見ました。",
        "translation": "친구와 영화를 봤어요."
      },
      {
        "pattern": "〜かったです",
        "function": "이형용사 과거형",
        "example": "面白かったです。",
        "translation": "재미있었어요."
      }
    ],
    "writingMission": {
      "prompt": "지난 주말에 한 일에 대해 짧게 써보세요.",
      "promptJp": "先週の週末にしたことについて短く書いてみましょう。",
      "minChars": 50,
      "hint": "過去形(〜ました)를 정확히 사용해보세요."
    },
    "teacherNote": "동사의 과거형(〜ました)과 이형용사의 과거형(〜かったです)을 연습합니다.",
    "tags": [
      "주말",
      "여가",
      "과거형"
    ]
  },
  {
    "id": "daily-shopping",
    "titleKo": "쇼핑하기",
    "titleJp": "買い物",
    "level": "N5",
    "category": "일상수다",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "쇼핑을 좋아하나요?",
        "jp": "買い物が好きですか。"
      },
      {
        "ko": "주로 어디에서 쇼핑을 하나요?",
        "jp": "主にどこで買い物をしますか。"
      },
      {
        "ko": "최근에 무엇을 샀나요?",
        "jp": "最近何を買いましたか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "온라인 쇼핑과 오프라인 쇼핑 중 어느 것을 선호하나요?",
        "jp": "オンラインショッピングとオフラインショッピングのどちらが好きですか。"
      },
      {
        "ko": "충동구매를 자주 하는 편인가요?",
        "jp": "衝動買いをよくする方ですか。"
      },
      {
        "ko": "물건을 살 때 가장 중요하게 생각하는 것은 무엇인가요?",
        "jp": "物を買う時、一番大切に考えることは何ですか。"
      }
    ],
    "roleplay": {
      "situation": "옷가게에서 옷을 고르고 점원과 대화하는 상황",
      "roleA": "옷을 사러 온 손님",
      "roleB": "옷가게 점원"
    },
    "expressions": [
      {
        "word": "買う",
        "reading": "かう",
        "meaning": "사다",
        "example": "服を買います。"
      },
      {
        "word": "高い",
        "reading": "たかい",
        "meaning": "비싸다",
        "example": "このカバンは高いです。"
      },
      {
        "word": "安い",
        "reading": "やすい",
        "meaning": "싸다",
        "example": "あの靴は安いです。"
      },
      {
        "word": "服",
        "reading": "ふく",
        "meaning": "옷",
        "example": "新しい服が欲しいです。"
      },
      {
        "word": "いくら",
        "reading": "いくら",
        "meaning": "얼마",
        "example": "これはいくらですか。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "すみません、これはいくらですか。",
        "translation": "실례합니다, 이것은 얼마인가요?"
      },
      {
        "speaker": "B",
        "text": "それは3000円です。",
        "translation": "그것은 3000엔입니다."
      },
      {
        "speaker": "A",
        "text": "少し高いですね。あれはいくらですか。",
        "translation": "조금 비싸네요. 저것은 얼마인가요?"
      },
      {
        "speaker": "B",
        "text": "あれは2000円です。",
        "translation": "저것은 2000엔입니다."
      },
      {
        "speaker": "A",
        "text": "じゃあ、あれをください。",
        "translation": "그럼, 저것을 주세요."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。",
        "translation": "감사합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "これ/それ/あれ",
        "function": "지시대명사",
        "example": "これはいくらですか。",
        "translation": "이것은 얼마인가요?"
      },
      {
        "pattern": "〜はいくらですか",
        "function": "가격 묻기",
        "example": "それはいくらですか。",
        "translation": "그것은 얼마인가요?"
      },
      {
        "pattern": "〜をください",
        "function": "물건 요구하기",
        "example": "あれをください。",
        "translation": "저것을 주세요."
      }
    ],
    "writingMission": {
      "prompt": "최근에 산 물건에 대해 설명하고 가격을 적어보세요.",
      "promptJp": "最近買った物について説明し、値段を書いてみましょう。",
      "minChars": 50,
      "hint": "買いました, 〜円です를 사용해보세요."
    },
    "teacherNote": "물건을 지시하는 표현(これ, それ, あれ)과 가격을 묻고 답하는 연습을 합니다.",
    "tags": [
      "쇼핑",
      "가격",
      "기초회화"
    ]
  },
  {
    "id": "daily-hobby",
    "titleKo": "나의 취미",
    "titleJp": "私の趣味",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "취미가 뭐예요?",
        "jp": "趣味は何？"
      },
      {
        "ko": "그 취미를 언제부터 시작했어요?",
        "jp": "その趣味はいつから始めたの？"
      },
      {
        "ko": "주말에 취미 생활을 자주 해요?",
        "jp": "週末に趣味の時間をよく作ってる？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "취미가 스트레스 해소에 도움이 되나요?",
        "jp": "趣味はストレス解消の役に立ってる？"
      },
      {
        "ko": "새롭게 시작해보고 싶은 취미가 있나요?",
        "jp": "新しく始めてみたい趣味はある？"
      },
      {
        "ko": "취미를 직업으로 삼는 것에 대해 어떻게 생각해요?",
        "jp": "趣味を仕事にすることについてどう思う？"
      }
    ],
    "roleplay": {
      "situation": "새로 사귄 친구와 서로의 취미에 대해 이야기하는 상황",
      "roleA": "활동적인 취미(등산, 스포츠 등)를 가진 사람",
      "roleB": "정적인 취미(독서, 게임 등)를 가진 사람"
    },
    "expressions": [
      {
        "word": "趣味",
        "reading": "しゅみ",
        "meaning": "취미",
        "example": "私の趣味は読書です。"
      },
      {
        "word": "始める",
        "reading": "はじめる",
        "meaning": "시작하다",
        "example": "ピアノを始めました。"
      },
      {
        "word": "楽しい",
        "reading": "たのしい",
        "meaning": "즐겁다",
        "example": "ゲームをするのは楽しいです。"
      },
      {
        "word": "夢中になる",
        "reading": "むちゅうになる",
        "meaning": "열중하다",
        "example": "最近、カメラに夢中になっている。"
      },
      {
        "word": "暇な時",
        "reading": "ひまなとき",
        "meaning": "한가할 때",
        "example": "暇な時は映画を見る。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ねえ、暇な時って何してるの？",
        "translation": "있지, 한가할 때 뭐해?"
      },
      {
        "speaker": "B",
        "text": "うーん、最近はよく写真撮ってるかな。",
        "translation": "음, 최근엔 사진을 자주 찍어."
      },
      {
        "speaker": "A",
        "text": "へえ、カメラが趣味なんだ。いつから始めたの？",
        "translation": "헤에, 카메라가 취미구나. 언제부터 시작했어?"
      },
      {
        "speaker": "B",
        "text": "半年前くらいから。すごく楽しいよ。",
        "translation": "반년 전쯤부터. 엄청 재밌어."
      },
      {
        "speaker": "A",
        "text": "いいなー。今度、私の写真も撮ってよ！",
        "translation": "좋겠다. 다음에 내 사진도 찍어줘!"
      },
      {
        "speaker": "B",
        "text": "うん、いいよ。可愛く撮ってあげる。",
        "translation": "응, 좋아. 예쁘게 찍어줄게."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ている",
        "function": "현재 진행/상태 (캐주얼)",
        "example": "最近はよく写真撮ってる。",
        "translation": "최근엔 사진을 자주 찍어."
      },
      {
        "pattern": "〜てあげる",
        "function": "호의 베풀기",
        "example": "可愛く撮ってあげる。",
        "translation": "예쁘게 찍어줄게."
      },
      {
        "pattern": "〜かな",
        "function": "가벼운 단정/추측",
        "example": "最近はよく写真撮ってるかな。",
        "translation": "최근엔 사진을 자주 찍는 편이려나."
      }
    ],
    "writingMission": {
      "prompt": "자신의 취미를 친구에게 소개하는 짧은 메시지를 써보세요.",
      "promptJp": "自分の趣味を友達に紹介する短いメッセージを書いてみましょう。",
      "minChars": 80,
      "hint": "캐주얼체(タメ口)를 사용하여 친근하게 작성해보세요."
    },
    "teacherNote": "N4 레벨의 캐주얼체(タメ口) 연습에 중점을 둡니다. 회화체 축약형(〜てる 등)을 자연스럽게 쓰도록 지도하세요.",
    "tags": [
      "취미",
      "여가",
      "캐주얼회화"
    ]
  },
  {
    "id": "daily-pet",
    "titleKo": "반려동물",
    "titleJp": "ペット",
    "level": "N4",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "반려동물을 키우고 있나요?",
        "jp": "ペットを飼っていますか。"
      },
      {
        "ko": "개와 고양이 중 어느 쪽을 더 좋아하나요?",
        "jp": "犬と猫、どちらの方が好きですか。"
      },
      {
        "ko": "어릴 때 동물을 키워본 적이 있나요?",
        "jp": "子供の頃、動物を飼ったことがありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "반려동물이 사람에게 주는 긍정적인 영향은 무엇일까요?",
        "jp": "ペットが人に与える肯定的な影響は何でしょうか。"
      },
      {
        "ko": "반려동물을 키울 때 가장 힘든 점은 무엇이라고 생각하나요?",
        "jp": "ペットを飼う時、一番大変なことは何だと思いますか。"
      },
      {
        "ko": "유기동물 문제에 대해 어떻게 생각하나요?",
        "jp": "捨てられる動物の問題についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "반려동물 카페에서 처음 만난 사람과 대화하는 상황",
      "roleA": "강아지를 데려온 사람",
      "roleB": "강아지를 귀여워하며 말을 거는 사람"
    },
    "expressions": [
      {
        "word": "飼う",
        "reading": "かう",
        "meaning": "기르다",
        "example": "犬を飼っています。"
      },
      {
        "word": "可愛い",
        "reading": "かわいい",
        "meaning": "귀엽다",
        "example": "この猫はとても可愛いです。"
      },
      {
        "word": "散歩",
        "reading": "さんぽ",
        "meaning": "산책",
        "example": "毎日犬の散歩をします。"
      },
      {
        "word": "餌",
        "reading": "えさ",
        "meaning": "먹이",
        "example": "ペットに餌をやります。"
      },
      {
        "word": "癒される",
        "reading": "いやされる",
        "meaning": "치유받다",
        "example": "ペットを見ると癒されます。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "すみません、この犬、とても可愛いですね。触ってもいいですか。",
        "translation": "저기요, 이 강아지 정말 귀엽네요. 만져봐도 될까요?"
      },
      {
        "speaker": "B",
        "text": "はい、大丈夫ですよ。人懐っこいんです。",
        "translation": "네, 괜찮아요. 사람을 잘 따르거든요."
      },
      {
        "speaker": "A",
        "text": "ありがとうございます。何歳ですか。",
        "translation": "감사합니다. 몇 살인가요?"
      },
      {
        "speaker": "B",
        "text": "3歳です。最近、散歩が大好きで。",
        "translation": "3살이에요. 요즘 산책을 아주 좋아해서요."
      },
      {
        "speaker": "A",
        "text": "いいですね。私も犬を飼いたいんですが、アパートなので無理なんです。",
        "translation": "좋네요. 저도 강아지를 키우고 싶은데, 아파트라서 무리예요."
      },
      {
        "speaker": "B",
        "text": "それは残念ですね。でも、こういうカフェで楽しめますよ。",
        "translation": "그거 아쉽네요. 그래도 이런 카페에서 즐길 수 있잖아요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てもいいですか",
        "function": "허락 구하기",
        "example": "触ってもいいですか。",
        "translation": "만져봐도 될까요?"
      },
      {
        "pattern": "〜たいんですが",
        "function": "희망과 상황 설명",
        "example": "犬を飼いたいんですが、無理なんです。",
        "translation": "강아지를 키우고 싶은데, 무리예요."
      },
      {
        "pattern": "〜たことがあります",
        "function": "경험 표현하기",
        "example": "動物を飼ったことがあります。",
        "translation": "동물을 키워본 적이 있습니다."
      }
    ],
    "writingMission": {
      "prompt": "자신이 키우고 싶은(또는 키우고 있는) 반려동물에 대해 묘사해보세요.",
      "promptJp": "自分が飼いたい（または飼っている）ペットについて描写してみましょう。",
      "minChars": 80,
      "hint": "どんな動物か、なぜ好きかを含めて書いてください。"
    },
    "teacherNote": "동물을 묘사하는 형용사와 경험을 나타내는 문형(〜たことがある)을 연습합니다.",
    "tags": [
      "반려동물",
      "동물",
      "경험"
    ]
  },
  {
    "id": "daily-travel-prep",
    "titleKo": "여행 준비",
    "titleJp": "旅行の準備",
    "level": "N4",
    "category": "일상수다",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "여행 가는 것을 좋아해?",
        "jp": "旅行に行くの好き？"
      },
      {
        "ko": "짐을 미리 싸는 편이야, 아니면 전날에 싸는 편이야?",
        "jp": "荷物は前もって準備する派？それとも前日にする派？"
      },
      {
        "ko": "여행 갈 때 꼭 챙기는 물건이 있어?",
        "jp": "旅行に行く時、必ず持っていく物はある？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "계획적인 여행과 즉흥적인 여행 중 어느 쪽이 더 좋아?",
        "jp": "計画的な旅行と行き当たりばったりの旅行、どっちが好き？"
      },
      {
        "ko": "여행 준비를 할 때 가장 설레는 순간은 언제야?",
        "jp": "旅行の準備をする時、一番ワクワクする瞬間はいつ？"
      },
      {
        "ko": "여행지에서 예상치 못한 문제가 생겼을 때 어떻게 대처해?",
        "jp": "旅行先で予想外のトラブルが起きた時、どう対処する？"
      }
    ],
    "roleplay": {
      "situation": "내일 같이 여행을 떠나는 친구와 짐을 챙기며 통화하는 상황",
      "roleA": "꼼꼼하게 짐을 다 챙긴 사람",
      "roleB": "아직 짐을 다 못 싸서 허둥지둥하는 사람"
    },
    "expressions": [
      {
        "word": "準備",
        "reading": "じゅんび",
        "meaning": "준비",
        "example": "旅行の準備をする。"
      },
      {
        "word": "荷物",
        "reading": "にもつ",
        "meaning": "짐",
        "example": "荷物をまとめる。"
      },
      {
        "word": "忘れる",
        "reading": "わすれる",
        "meaning": "잊다, 까먹다",
        "example": "パスポートを忘れないで。"
      },
      {
        "word": "楽しみ",
        "reading": "たのしみ",
        "meaning": "기대됨",
        "example": "明日の旅行が楽しみだ。"
      },
      {
        "word": "足りる",
        "reading": "たりる",
        "meaning": "충분하다",
        "example": "お金は足りるかな。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "もしもし、荷物の準備終わった？",
        "translation": "여보세요, 짐 준비 다 했어?"
      },
      {
        "speaker": "B",
        "text": "ううん、まだ。何を持っていけばいいか迷ってて。",
        "translation": "아니, 아직. 뭘 가져가야 할지 고민돼서."
      },
      {
        "speaker": "A",
        "text": "えー、明日早いんだから早くしなよ。パスポートは入れた？",
        "translation": "에이, 내일 일찍 가야 하니까 빨리 해. 여권은 넣었어?"
      },
      {
        "speaker": "B",
        "text": "あ、やばい！忘れるところだった。ありがとう。",
        "translation": "아, 대박! 까먹을 뻔했어. 고마워."
      },
      {
        "speaker": "A",
        "text": "もう、しっかりしてよ。忘れ物ないようにね。",
        "translation": "정말, 정신 차려. 빠뜨린 거 없게 해."
      },
      {
        "speaker": "B",
        "text": "うん、急いで準備する！明日楽しみだね。",
        "translation": "응, 서둘러서 준비할게! 내일 기대된다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ばいい",
        "function": "조언 구하기/하기",
        "example": "何を持っていけばいいか迷っている。",
        "translation": "뭘 가져가야 할지 고민하고 있어."
      },
      {
        "pattern": "〜ところだった",
        "function": "하마터면 ~할 뻔했다",
        "example": "忘れるところだった。",
        "translation": "까먹을 뻔했어."
      },
      {
        "pattern": "〜ように",
        "function": "목적/당부",
        "example": "忘れ物ないようにね。",
        "translation": "빠뜨린 거 없게 해."
      }
    ],
    "writingMission": {
      "prompt": "여행 갈 때 반드시 챙겨야 할 물건 3가지와 그 이유를 적어보세요.",
      "promptJp": "旅行に行く時、必ず持っていくべき物3つとその理由を書いてみましょう。",
      "minChars": 80,
      "hint": "〜なければなりません, なぜなら〜からです를 활용해보세요."
    },
    "teacherNote": "캐주얼한 조언 표현과 '〜ところだった(할 뻔했다)' 문법을 자연스럽게 쓰도록 지도합니다.",
    "tags": [
      "여행",
      "준비",
      "캐주얼"
    ]
  },
  {
    "id": "daily-music",
    "titleKo": "음악 취향",
    "titleJp": "音楽の好み",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "어떤 장르의 음악을 좋아하나요?",
        "jp": "どんなジャンルの音楽が好きですか。"
      },
      {
        "ko": "가장 좋아하는 가수는 누구인가요?",
        "jp": "一番好きな歌手は誰ですか。"
      },
      {
        "ko": "주로 언제 음악을 듣나요?",
        "jp": "主にいつ音楽を聴きますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "음악이 사람의 감정에 어떤 영향을 미친다고 생각하나요?",
        "jp": "音楽が人の感情にどんな影響を与えると思いますか。"
      },
      {
        "ko": "라이브 콘서트에 가는 것을 좋아하나요? 그 이유는 무엇인가요?",
        "jp": "ライブコンサートに行くのは好きですか。その理由は何ですか。"
      },
      {
        "ko": "가사 없는 연주곡을 듣는 것도 좋아하나요?",
        "jp": "歌詞のないインストゥルメンタル曲を聴くのも好きですか。"
      }
    ],
    "roleplay": {
      "situation": "서로의 플레이리스트를 공유하며 대화하는 상황",
      "roleA": "K-POP을 좋아하는 사람",
      "roleB": "클래식이나 재즈를 좋아하는 사람"
    },
    "expressions": [
      {
        "word": "音楽",
        "reading": "おんがく",
        "meaning": "음악",
        "example": "音楽を聴くのが好きです。"
      },
      {
        "word": "歌手",
        "reading": "かしゅ",
        "meaning": "가수",
        "example": "好きな歌手のコンサートに行きます。"
      },
      {
        "word": "曲",
        "reading": "きょく",
        "meaning": "곡, 노래",
        "example": "この曲はとてもいいですね。"
      },
      {
        "word": "歌詞",
        "reading": "かし",
        "meaning": "가사",
        "example": "歌詞の意味が深いです。"
      },
      {
        "word": "流行る",
        "reading": "はやる",
        "meaning": "유행하다",
        "example": "今流行っている曲です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "普段、どんな音楽を聴きますか。",
        "translation": "평소에 어떤 음악을 들으시나요?"
      },
      {
        "speaker": "B",
        "text": "私はジャズをよく聴きます。リラックスできるからです。",
        "translation": "저는 재즈를 자주 들어요. 릴랙스할 수 있거든요."
      },
      {
        "speaker": "A",
        "text": "おしゃれですね。私は最近のK-POPばかり聴いています。",
        "translation": "멋지네요. 저는 요즘 K-POP만 듣고 있어요."
      },
      {
        "speaker": "B",
        "text": "K-POPはダンスがかっこいいですよね。おすすめの曲はありますか。",
        "translation": "K-POP은 댄스가 멋지죠. 추천할 만한 곡이 있나요?"
      },
      {
        "speaker": "A",
        "text": "はい、このグループの新曲がすごくいいですよ。聴いてみますか。",
        "translation": "네, 이 그룹의 신곡이 아주 좋아요. 들어보실래요?"
      },
      {
        "speaker": "B",
        "text": "ぜひ聴かせてください。",
        "translation": "꼭 들려주세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ばかり",
        "function": "그것만 계속함",
        "example": "K-POPばかり聴いています。",
        "translation": "K-POP만 듣고 있어요."
      },
      {
        "pattern": "〜てみます",
        "function": "시험 삼아 해보다",
        "example": "聴いてみますか。",
        "translation": "들어보실래요?"
      },
      {
        "pattern": "〜させてください",
        "function": "사역 수동 (허락 구하기)",
        "example": "聴かせてください。",
        "translation": "들려주세요."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 노래 한 곡을 소개하고, 그 이유를 적어보세요.",
      "promptJp": "自分が一番好きな歌を一曲紹介し、その理由を書いてみましょう。",
      "minChars": 80,
      "hint": "曲名(きょくめい), 歌手(かしゅ), 理由(りゆう)를 포함하세요."
    },
    "teacherNote": "음악 장르와 관련된 어휘를 확장하고, 이유를 설명하는 표현(〜からです)을 연습합니다.",
    "tags": [
      "음악",
      "취향",
      "문화"
    ]
  },
  {
    "id": "daily-cleaning",
    "titleKo": "청소와 정리",
    "titleJp": "掃除と片付け",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "방 청소를 자주 하는 편인가요?",
        "jp": "部屋の掃除をよくする方ですか。"
      },
      {
        "ko": "청소하는 것을 좋아하나요, 싫어하나요?",
        "jp": "掃除をするのは好きですか、嫌いですか。"
      },
      {
        "ko": "물건을 잘 버리는 편인가요?",
        "jp": "物をよく捨てる方ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "방이 깨끗하면 기분에 어떤 영향을 미치나요?",
        "jp": "部屋がきれいだと気分にどんな影響を与えますか。"
      },
      {
        "ko": "미니멀리즘(물건을 최소화하는 삶)에 대해 어떻게 생각하나요?",
        "jp": "ミニマリズム（物を最小限にする生き方）についてどう思いますか。"
      },
      {
        "ko": "청소를 미루는 습관을 고치려면 어떻게 해야 할까요?",
        "jp": "掃除を後回しにする習慣を直すにはどうすればいいでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "룸메이트와 청소 당번을 정하는 상황",
      "roleA": "깔끔한 성격으로 청소를 자주 하고 싶어하는 사람",
      "roleB": "조금 어질러져 있어도 신경 쓰지 않는 사람"
    },
    "expressions": [
      {
        "word": "掃除",
        "reading": "そうじ",
        "meaning": "청소",
        "example": "週末に部屋の掃除をします。"
      },
      {
        "word": "片付ける",
        "reading": "かたづける",
        "meaning": "정리하다, 치우다",
        "example": "机の上を片付けます。"
      },
      {
        "word": "捨てる",
        "reading": "すてる",
        "meaning": "버리다",
        "example": "いらない物を捨てます。"
      },
      {
        "word": "汚い",
        "reading": "きたない",
        "meaning": "더럽다",
        "example": "部屋が汚いです。"
      },
      {
        "word": "面倒くさい",
        "reading": "めんどうくさい",
        "meaning": "귀찮다",
        "example": "掃除は面倒くさいです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ねえ、部屋が少し汚くなってきたと思わない？",
        "translation": "저기, 방이 조금 더러워졌다고 생각하지 않아?"
      },
      {
        "speaker": "B",
        "text": "そう？私はあまり気にならないけど。",
        "translation": "그래? 나는 별로 신경 안 쓰이는데."
      },
      {
        "speaker": "A",
        "text": "週末に一緒に掃除しようよ。当番を決めた方がいいと思う。",
        "translation": "주말에 같이 청소하자. 당번을 정하는 게 좋을 것 같아."
      },
      {
        "speaker": "B",
        "text": "わかった。じゃあ、私がトイレ掃除をするから、リビングをお願いしてもいい？",
        "translation": "알았어. 그럼 내가 화장실 청소를 할 테니까, 거실을 부탁해도 될까?"
      },
      {
        "speaker": "A",
        "text": "うん、いいよ。いらない物も少し捨てようね。",
        "translation": "응, 좋아. 필요 없는 물건도 조금 버리자."
      },
      {
        "speaker": "B",
        "text": "了解。面倒くさいけど、頑張るよ。",
        "translation": "알겠어. 귀찮지만, 열심히 할게."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てきた",
        "function": "상태의 변화",
        "example": "汚くなってきた。",
        "translation": "더러워졌다."
      },
      {
        "pattern": "〜た方がいい",
        "function": "충고/제안",
        "example": "当番を決めた方がいい。",
        "translation": "당번을 정하는 게 좋다."
      },
      {
        "pattern": "〜てもいい？",
        "function": "허락 구하기 (캐주얼)",
        "example": "リビングをお願いしてもいい？",
        "translation": "거실을 부탁해도 될까?"
      }
    ],
    "writingMission": {
      "prompt": "자신만의 청소 팁이나 정리 노하우를 한 가지 소개해보세요.",
      "promptJp": "自分なりの掃除のコツや片付けのノウハウを一つ紹介してみましょう。",
      "minChars": 80,
      "hint": "まず(먼저), 次に(다음에) 등의 접속사를 사용해보세요."
    },
    "teacherNote": "청소 관련 동사(片付ける, 捨てる 등)와 상태 변화(〜てくる)를 연습합니다.",
    "tags": [
      "청소",
      "생활습관",
      "정리"
    ]
  },
  {
    "id": "daily-coffee",
    "titleKo": "커피와 카페",
    "titleJp": "コーヒーとカフェ",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "커피를 자주 마시나요?",
        "jp": "コーヒーをよく飲みますか。"
      },
      {
        "ko": "어떤 종류의 커피를 가장 좋아하나요?",
        "jp": "どの種類のコーヒーが一番好きですか。"
      },
      {
        "ko": "카페에 가는 것을 좋아하나요?",
        "jp": "カフェに行くのは好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "카페에서 주로 무엇을 하면서 시간을 보내나요?",
        "jp": "カフェで主に何をしながら時間を過ごしますか。"
      },
      {
        "ko": "커피가 건강에 좋다고 생각하나요, 나쁘다고 생각하나요?",
        "jp": "コーヒーは健康に良いと思いますか、悪いと思いますか。"
      },
      {
        "ko": "당신이 생각하는 '좋은 카페'의 조건은 무엇인가요?",
        "jp": "あなたが考える「良いカフェ」の条件は何ですか。"
      }
    ],
    "roleplay": {
      "situation": "새로 생긴 카페에 대해 친구와 이야기하는 상황",
      "roleA": "새로운 카페를 발견해서 같이 가자고 제안하는 사람",
      "roleB": "커피보다는 디저트를 더 좋아하는 사람"
    },
    "expressions": [
      {
        "word": "苦い",
        "reading": "にがい",
        "meaning": "쓰다",
        "example": "ブラックコーヒーは苦いです。"
      },
      {
        "word": "香り",
        "reading": "かおり",
        "meaning": "향기",
        "example": "コーヒーの良い香りがします。"
      },
      {
        "word": "落ち着く",
        "reading": "おちつく",
        "meaning": "차분해지다, 편안해지다",
        "example": "このカフェは落ち着きます。"
      },
      {
        "word": "雰囲気",
        "reading": "ふんいき",
        "meaning": "분위기",
        "example": "雰囲気がいいお店ですね。"
      },
      {
        "word": "常連",
        "reading": "じょうれん",
        "meaning": "단골",
        "example": "あのカフェの常連です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "駅の近くに新しいカフェができたのを知っていますか。",
        "translation": "역 근처에 새로운 카페가 생긴 거 알아요?"
      },
      {
        "speaker": "B",
        "text": "いいえ、知りませんでした。どんなカフェですか。",
        "translation": "아니요, 몰랐어요. 어떤 카페인가요?"
      },
      {
        "speaker": "A",
        "text": "雰囲気がとても良くて、コーヒーの香りが素晴らしいそうです。",
        "translation": "분위기가 아주 좋고, 커피 향이 훌륭하대요."
      },
      {
        "speaker": "B",
        "text": "私はコーヒーが苦手なんですが、ケーキもありますか。",
        "translation": "저는 커피를 잘 못 마시는데, 케이크도 있나요?"
      },
      {
        "speaker": "A",
        "text": "はい、手作りのケーキが美味しいと評判ですよ。",
        "translation": "네, 수제 케이크가 맛있다고 소문났어요."
      },
      {
        "speaker": "B",
        "text": "それなら、今度一緒に行ってみましょう。",
        "translation": "그렇다면, 다음에 같이 가봐요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜そうです",
        "function": "전문 (들어서 앎)",
        "example": "香りが素晴らしいそうです。",
        "translation": "향이 훌륭하대요."
      },
      {
        "pattern": "〜が苦手だ",
        "function": "서투름/싫어함",
        "example": "コーヒーが苦手です。",
        "translation": "커피를 잘 못 마셔요."
      },
      {
        "pattern": "〜と評判だ",
        "function": "평판/소문",
        "example": "美味しいと評判です。",
        "translation": "맛있다고 소문났어요."
      }
    ],
    "writingMission": {
      "prompt": "자신이 자주 가는 단골 카페를 소개하는 글을 써보세요.",
      "promptJp": "自分がよく行く行きつけのカフェを紹介する文章を書いてみましょう。",
      "minChars": 80,
      "hint": "雰囲気(ふんいき), メニュー, 理由(りゆう)를 포함하세요."
    },
    "teacherNote": "전문 표현(〜そうです)을 사용하여 다른 사람에게 들은 정보를 전달하는 연습을 합니다.",
    "tags": [
      "카페",
      "커피",
      "여가"
    ]
  },
  {
    "id": "daily-sleep",
    "titleKo": "수면 습관",
    "titleJp": "睡眠習慣",
    "level": "N3",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "보통 하루에 몇 시간 정도 자나요?",
        "jp": "普段、一日に何時間くらい寝ますか。"
      },
      {
        "ko": "아침형 인간인가요, 저녁형 인간인가요?",
        "jp": "朝型人間ですか、それとも夜型人間ですか。"
      },
      {
        "ko": "잠들기 전에 주로 무엇을 하나요?",
        "jp": "寝る前に主に何をしますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "수면 부족이 일상생활에 미치는 가장 큰 영향은 무엇이라고 생각하나요?",
        "jp": "睡眠不足が日常生活に与える最大の影響は何だと思いますか。"
      },
      {
        "ko": "숙면을 취하기 위한 자신만의 비결이 있나요?",
        "jp": "熟睡するための自分なりの秘訣はありますか。"
      },
      {
        "ko": "낮잠을 자는 습관에 대해 어떻게 생각하나요?",
        "jp": "昼寝をする習慣についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "최근 불면증에 시달리는 동료에게 조언을 해주는 상황",
      "roleA": "밤에 잠을 잘 못 자서 피곤한 사람",
      "roleB": "숙면을 위한 다양한 방법을 추천해주는 사람"
    },
    "expressions": [
      {
        "word": "睡眠",
        "reading": "すいみん",
        "meaning": "수면",
        "example": "十分な睡眠をとることが大切です。"
      },
      {
        "word": "徹夜",
        "reading": "てつや",
        "meaning": "철야, 밤샘",
        "example": "昨日は徹夜で勉強しました。"
      },
      {
        "word": "寝不足",
        "reading": "ねぶそく",
        "meaning": "수면 부족",
        "example": "寝不足で頭が痛いです。"
      },
      {
        "word": "目覚まし時計",
        "reading": "めざましどけい",
        "meaning": "알람 시계",
        "example": "目覚まし時計をセットします。"
      },
      {
        "word": "夢を見る",
        "reading": "ゆめをみる",
        "meaning": "꿈을 꾸다",
        "example": "怖い夢を見ました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、夜なかなか眠れなくて、昼間ずっと眠いんです。",
        "translation": "최근에 밤에 좀처럼 잠을 못 자서, 낮에 계속 졸려요."
      },
      {
        "speaker": "B",
        "text": "それは辛いですね。寝る前にスマホを見ていませんか。",
        "translation": "그거 힘들겠네요. 자기 전에 스마트폰을 보고 있지 않나요?"
      },
      {
        "speaker": "A",
        "text": "はい、ついベッドの中で動画を見てしまいます。",
        "translation": "네, 무심코 침대 속에서 동영상을 보게 돼요."
      },
      {
        "speaker": "B",
        "text": "ブルーライトは睡眠の質を下げるらしいですよ。寝る1時間前には画面を見ないようにしてみてはどうですか。",
        "translation": "블루라이트는 수면의 질을 떨어뜨린다고 해요. 자기 1시간 전에는 화면을 보지 않도록 해보는 건 어때요?"
      },
      {
        "speaker": "A",
        "text": "なるほど。今日から試してみます。温かいミルクも飲んでみようかな。",
        "translation": "그렇군요. 오늘부터 시도해볼게요. 따뜻한 우유도 마셔볼까 봐요."
      },
      {
        "speaker": "B",
        "text": "いいですね。リラックスすることが一番大切ですから。",
        "translation": "좋네요. 릴랙스하는 것이 가장 중요하니까요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "なかなか〜ない",
        "function": "좀처럼 ~하지 않다",
        "example": "なかなか眠れません。",
        "translation": "좀처럼 잠들 수 없어요."
      },
      {
        "pattern": "〜てしまう",
        "function": "무심코 ~해버리다",
        "example": "動画を見てしまいます。",
        "translation": "동영상을 보게 되어버려요."
      },
      {
        "pattern": "〜らしい",
        "function": "추측/전문 (~라고 한다)",
        "example": "睡眠の質を下げるらしいです。",
        "translation": "수면의 질을 떨어뜨린다고 해요."
      },
      {
        "pattern": "〜てみてはどうですか",
        "function": "제안/권유",
        "example": "見ないようにしてみてはどうですか。",
        "translation": "보지 않도록 해보는 건 어때요?"
      }
    ],
    "writingMission": {
      "prompt": "자신의 수면 습관을 평가하고, 개선하고 싶은 점을 적어보세요.",
      "promptJp": "自分の睡眠習慣を評価し、改善したい点を書いてみましょう。",
      "minChars": 100,
      "hint": "現状(현재 상황), 問題点(문제점), 改善策(개선책)의 구조로 써보세요."
    },
    "teacherNote": "N3 수준의 제안 표현(〜てみてはどうですか)과 무의식적인 행동(〜てしまう)을 자연스럽게 사용하도록 지도합니다.",
    "tags": [
      "수면",
      "건강",
      "습관"
    ]
  },
  {
    "id": "daily-cooking",
    "titleKo": "요리와 식사",
    "titleJp": "料理と食事",
    "level": "N3",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "직접 요리하는 것을 좋아해?",
        "jp": "自分で料理するのは好き？"
      },
      {
        "ko": "가장 자신 있는 요리는 뭐야?",
        "jp": "一番得意な料理は何？"
      },
      {
        "ko": "외식과 집밥 중 어느 쪽을 더 선호해?",
        "jp": "外食と自炊、どっちの方が好き？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "요리 실력을 키우기 위해 가장 중요한 것은 무엇이라고 생각해?",
        "jp": "料理の腕を上げるために一番大切なことは何だと思う？"
      },
      {
        "ko": "바쁜 현대인들에게 밀키트나 배달 음식은 어떤 의미일까?",
        "jp": "忙しい現代人にとって、ミールキットやデリバリーはどんな意味があるかな？"
      },
      {
        "ko": "누군가를 위해 요리해준 경험이 있어? 그때의 기분은 어땠어?",
        "jp": "誰かのために料理を作ってあげた経験はある？その時の気分はどうだった？"
      }
    ],
    "roleplay": {
      "situation": "친구를 집에 초대해서 같이 저녁을 만들어 먹기로 한 상황",
      "roleA": "요리를 잘해서 주도적으로 메뉴를 정하는 사람",
      "roleB": "요리는 서툴지만 재료 손질이나 설거지를 돕겠다는 사람"
    },
    "expressions": [
      {
        "word": "自炊",
        "reading": "じすい",
        "meaning": "자취 (직접 밥을 해 먹음)",
        "example": "最近は毎日自炊している。"
      },
      {
        "word": "得意だ",
        "reading": "とくいだ",
        "meaning": "자신 있다, 잘하다",
        "example": "パスタを作るのが得意だ。"
      },
      {
        "word": "外食",
        "reading": "がいしょく",
        "meaning": "외식",
        "example": "週末はよく外食する。"
      },
      {
        "word": "レシピ",
        "reading": "れしぴ",
        "meaning": "레시피",
        "example": "ネットでレシピを検索する。"
      },
      {
        "word": "面倒",
        "reading": "めんどう",
        "meaning": "번거로움",
        "example": "後片付けが面倒だ。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "今週末、うちで一緒にご飯作って食べない？",
        "translation": "이번 주말에 우리 집에서 같이 밥 만들어 먹지 않을래?"
      },
      {
        "speaker": "B",
        "text": "いいね！でも私、料理全然できないよ。足手まといにならないかな。",
        "translation": "좋아! 근데 나 요리 전혀 못해. 짐이 되지 않을까."
      },
      {
        "speaker": "A",
        "text": "大丈夫だよ。私がメインで作るから、野菜切ったりするのを手伝ってくれれば。",
        "translation": "괜찮아. 내가 메인으로 만들 테니까, 채소 썰거나 하는 걸 도와주면 돼."
      },
      {
        "speaker": "B",
        "text": "それならできる！何作る予定？",
        "translation": "그거라면 할 수 있어! 뭐 만들 예정이야?"
      },
      {
        "speaker": "A",
        "text": "最近ハマってるカレーを作ろうかと思って。スパイスから作る本格的なやつ。",
        "translation": "요즘 빠져있는 카레를 만들까 해서. 스파이스부터 만드는 본격적인 거."
      },
      {
        "speaker": "B",
        "text": "すごーい！楽しみにしてるね。後片付けは私が全部やるよ。",
        "translation": "대박! 기대하고 있을게. 뒷정리는 내가 다 할게."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ない？",
        "function": "권유 (캐주얼)",
        "example": "一緒にご飯作って食べない？",
        "translation": "같이 밥 만들어 먹지 않을래?"
      },
      {
        "pattern": "〜てくれれば",
        "function": "조건 (~해주면)",
        "example": "手伝ってくれれば大丈夫。",
        "translation": "도와주면 괜찮아."
      },
      {
        "pattern": "〜かと思って",
        "function": "가벼운 의도/계획",
        "example": "カレーを作ろうかと思って。",
        "translation": "카레를 만들까 해서."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 요리의 간단한 레시피나 만드는 과정을 설명해보세요.",
      "promptJp": "自分が一番好きな料理の簡単なレシピや作り方の手順を説明してみましょう。",
      "minChars": 100,
      "hint": "まず、次に、最後に 등의 순서를 나타내는 표현을 사용하세요."
    },
    "teacherNote": "요리 관련 어휘와 캐주얼한 제안/부탁 표현을 연습합니다. '〜かと思って'의 뉘앙스를 설명해주세요.",
    "tags": [
      "요리",
      "식사",
      "캐주얼"
    ]
  },
  {
    "id": "daily-reading",
    "titleKo": "독서 습관",
    "titleJp": "読書習慣",
    "level": "N3",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "한 달에 책을 몇 권 정도 읽나요?",
        "jp": "月に何冊くらい本を読みますか。"
      },
      {
        "ko": "종이책과 전자책 중 어느 쪽을 선호하나요?",
        "jp": "紙の本と電子書籍、どちらを好みますか。"
      },
      {
        "ko": "어떤 장르의 책을 가장 좋아하나요?",
        "jp": "どのジャンルの本が一番好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "스마트폰 시대에 독서가 여전히 중요하다고 생각하나요?",
        "jp": "スマートフォンの時代に、読書は依然として重要だと思いますか。"
      },
      {
        "ko": "책을 읽는 것이 스트레스 해소에 도움이 되나요?",
        "jp": "本を読むことはストレス解消の役に立ちますか。"
      },
      {
        "ko": "인생에 큰 영향을 미친 책이 있다면 소개해주세요.",
        "jp": "人生に大きな影響を与えた本があれば紹介してください。"
      }
    ],
    "roleplay": {
      "situation": "독서 모임에서 최근 읽은 책을 소개하는 상황",
      "roleA": "감명 깊게 읽은 소설을 추천하는 사람",
      "roleB": "실용서나 자기계발서를 주로 읽는 사람"
    },
    "expressions": [
      {
        "word": "読書",
        "reading": "どくしょ",
        "meaning": "독서",
        "example": "趣味は読書です。"
      },
      {
        "word": "電子書籍",
        "reading": "でんししょせき",
        "meaning": "전자책",
        "example": "最近は電子書籍で読んでいます。"
      },
      {
        "word": "小説",
        "reading": "しょうせつ",
        "meaning": "소설",
        "example": "ミステリー小説が好きです。"
      },
      {
        "word": "自己啓発本",
        "reading": "じこけいはつぼん",
        "meaning": "자기계발서",
        "example": "自己啓発本を読んでモチベーションを上げます。"
      },
      {
        "word": "影響を受ける",
        "reading": "えいきょうをうける",
        "meaning": "영향을 받다",
        "example": "この本から大きな影響を受けました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、何か面白い本を読みましたか。",
        "translation": "최근에 뭔가 재미있는 책 읽으셨나요?"
      },
      {
        "speaker": "B",
        "text": "はい、話題になっているミステリー小説を読み終えたところです。とても引き込まれました。",
        "translation": "네, 화제가 되고 있는 미스터리 소설을 막 다 읽은 참이에요. 아주 몰입됐어요."
      },
      {
        "speaker": "A",
        "text": "私は小説よりも、ビジネス書や自己啓発本を読むことが多いですね。",
        "translation": "저는 소설보다는 비즈니스 서적이나 자기계발서를 읽는 경우가 많네요."
      },
      {
        "speaker": "B",
        "text": "そうなんですね。実用的な知識を得るためですか。",
        "translation": "그렇군요. 실용적인 지식을 얻기 위해서인가요?"
      },
      {
        "speaker": "A",
        "text": "ええ、仕事に直結する内容だと、すぐに実践できるので好きなんです。",
        "translation": "네, 일과 직결되는 내용이면 바로 실천할 수 있어서 좋아해요."
      },
      {
        "speaker": "B",
        "text": "なるほど。今度、おすすめのビジネス書を教えてください。",
        "translation": "그렇군요. 다음에 추천할 만한 비즈니스 서적을 알려주세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たところだ",
        "function": "막 ~한 참이다",
        "example": "読み終えたところです。",
        "translation": "막 다 읽은 참입니다."
      },
      {
        "pattern": "〜ことが多い",
        "function": "~하는 경우가 많다",
        "example": "自己啓発本を読むことが多いです。",
        "translation": "자기계발서를 읽는 경우가 많습니다."
      },
      {
        "pattern": "〜ため",
        "function": "목적 (~하기 위해)",
        "example": "知識を得るためですか。",
        "translation": "지식을 얻기 위해서인가요?"
      }
    ],
    "writingMission": {
      "prompt": "최근에 읽은 책이나 기사에 대한 짧은 감상문을 써보세요.",
      "promptJp": "最近読んだ本や記事についての短い感想文を書いてみましょう。",
      "minChars": 100,
      "hint": "あらすじ(줄거리)와 感想(감상)을 나누어 적어보세요."
    },
    "teacherNote": "독서 관련 어휘(장르 등)를 익히고, 자신의 의견이나 감상을 논리적으로 표현하는 연습을 합니다.",
    "tags": [
      "독서",
      "취미",
      "자기계발"
    ]
  },
  {
    "id": "daily-exercise",
    "titleKo": "운동과 건강",
    "titleJp": "運動と健康",
    "level": "N3",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "규칙적으로 운동을 하고 있나요?",
        "jp": "定期的に運動をしていますか。"
      },
      {
        "ko": "어떤 종류의 운동을 좋아하나요?",
        "jp": "どんな種類の運動が好きですか。"
      },
      {
        "ko": "운동을 할 때 혼자 하는 것을 선호하나요, 여럿이 하는 것을 선호하나요?",
        "jp": "運動をする時、一人でするのが好きですか、それとも複数でするのが好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "운동을 꾸준히 하기 위해 가장 필요한 것은 무엇이라고 생각하나요?",
        "jp": "運動を継続するために一番必要なものは何だと思いますか。"
      },
      {
        "ko": "신체적 건강과 정신적 건강 중 어느 쪽이 더 중요하다고 생각하나요?",
        "jp": "身体的な健康と精神的な健康、どちらの方が重要だと思いますか。"
      },
      {
        "ko": "최근 유행하는 운동 트렌드(예: 홈트레이닝)에 대해 어떻게 생각하나요?",
        "jp": "最近流行している運動のトレンド（例：ホームトレーニング）についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "헬스장에서 우연히 만난 지인과 대화하는 상황",
      "roleA": "매일 헬스장에 출석하는 운동 마니아",
      "roleB": "새해 결심으로 방금 운동을 시작한 초보자"
    },
    "expressions": [
      {
        "word": "運動",
        "reading": "うんどう",
        "meaning": "운동",
        "example": "健康のために運動します。"
      },
      {
        "word": "筋トレ",
        "reading": "きんとれ",
        "meaning": "근력 운동",
        "example": "ジムで筋トレをしています。"
      },
      {
        "word": "継続する",
        "reading": "けいぞくする",
        "meaning": "계속하다, 지속하다",
        "example": "運動を継続するのは難しいです。"
      },
      {
        "word": "筋肉痛",
        "reading": "きんにくつう",
        "meaning": "근육통",
        "example": "運動しすぎて筋肉痛になりました。"
      },
      {
        "word": "ダイエット",
        "reading": "だいえっと",
        "meaning": "다이어트",
        "example": "ダイエットのために走っています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "あ、Bさん！ジムに通い始めたんですね。",
        "translation": "아, B씨! 헬스장에 다니기 시작하셨군요."
      },
      {
        "speaker": "B",
        "text": "はい、運動不足を解消しようと思って、今月から始めました。Aさんはよく来ているんですか。",
        "translation": "네, 운동 부족을 해소하려고 이번 달부터 시작했어요. A씨는 자주 오시나요?"
      },
      {
        "speaker": "A",
        "text": "ええ、週に4回は来て筋トレをしています。もう習慣になっていますね。",
        "translation": "네, 일주일에 4번은 와서 근력 운동을 하고 있어요. 이제 습관이 되었네요."
      },
      {
        "speaker": "B",
        "text": "すごいですね！私はまだ筋肉痛がひどくて、心が折れそうです。",
        "translation": "대단하시네요! 저는 아직 근육통이 심해서 마음이 꺾일 것 같아요."
      },
      {
        "speaker": "A",
        "text": "最初は誰でもそうですよ。無理しないで、少しずつペースを上げていけばいいんです。",
        "translation": "처음엔 누구나 그래요. 무리하지 말고, 조금씩 페이스를 올려가면 돼요."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。頑張って続けてみます。",
        "translation": "감사합니다. 열심히 계속해 볼게요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜始めた",
        "function": "동작의 시작",
        "example": "ジムに通い始めました。",
        "translation": "헬스장에 다니기 시작했습니다."
      },
      {
        "pattern": "〜ようと思って",
        "function": "의지/목적",
        "example": "運動不足を解消しようと思って。",
        "translation": "운동 부족을 해소하려고."
      },
      {
        "pattern": "〜ていけばいい",
        "function": "점진적 변화에 대한 조언",
        "example": "ペースを上げていけばいいんです。",
        "translation": "페이스를 올려가면 됩니다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 건강 관리 비법이나 앞으로 도전해보고 싶은 운동에 대해 써보세요.",
      "promptJp": "自分の健康管理の秘訣や、今後挑戦してみたい運動について書いてみましょう。",
      "minChars": 100,
      "hint": "健康のために(건강을 위해), 〜に挑戦したい(도전하고 싶다)를 활용하세요."
    },
    "teacherNote": "운동 관련 어휘(筋トレ, 筋肉痛 등)와 의지를 나타내는 표현(〜ようと思う)을 연습합니다.",
    "tags": [
      "운동",
      "건강",
      "습관"
    ]
  },
  {
    "id": "daily-interior",
    "titleKo": "인테리어와 방 꾸미기",
    "titleJp": "インテリアと部屋作り",
    "level": "N3",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "자신의 방 인테리어에 만족하나요?",
        "jp": "自分の部屋のインテリアに満足していますか。"
      },
      {
        "ko": "어떤 스타일의 인테리어를 좋아하나요? (예: 모던, 우드톤 등)",
        "jp": "どんなスタイルのインテリアが好きですか。（例：モダン、ウッドテイストなど）"
      },
      {
        "ko": "방에서 가장 마음에 드는 가구나 소품은 무엇인가요?",
        "jp": "部屋で一番気に入っている家具や小物はありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "생활 공간의 분위기가 사람의 심리에 어떤 영향을 미친다고 생각하나요?",
        "jp": "生活空間の雰囲気が人の心理にどんな影響を与えると思いますか。"
      },
      {
        "ko": "비싼 가구를 사는 것과 저렴한 가구를 자주 바꾸는 것 중 어느 쪽이 좋다고 생각하나요?",
        "jp": "高い家具を買うのと、安い家具を頻繁に買い替えるの、どちらが良いと思いますか。"
      },
      {
        "ko": "DIY(직접 만들기)로 가구나 소품을 만들어본 적이 있나요?",
        "jp": "DIY（自分で作ること）で家具や小物を作ったことはありますか。"
      }
    ],
    "roleplay": {
      "situation": "새로 이사한 친구의 집들이에서 방을 구경하며 대화하는 상황",
      "roleA": "인테리어에 관심이 많아 집을 예쁘게 꾸민 사람",
      "roleB": "인테리어 팁을 얻고 싶어하는 친구"
    },
    "expressions": [
      {
        "word": "模様替え",
        "reading": "もようがえ",
        "meaning": "방 구조/인테리어 바꾸기",
        "example": "週末に部屋の模様替えをした。"
      },
      {
        "word": "家具",
        "reading": "かぐ",
        "meaning": "가구",
        "example": "新しい家具を買いたい。"
      },
      {
        "word": "こだわる",
        "reading": "こだわる",
        "meaning": "신경 쓰다, 고집하다",
        "example": "照明にはこだわっている。"
      },
      {
        "word": "居心地がいい",
        "reading": "いごこちがいい",
        "meaning": "아늑하다, 머물기 편하다",
        "example": "この部屋はとても居心地がいい。"
      },
      {
        "word": "すっきりする",
        "reading": "すっきりする",
        "meaning": "깔끔하다, 후련하다",
        "example": "物が少なくてすっきりしている。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "わあ、すごくおしゃれな部屋だね！カフェみたい。",
        "translation": "와, 엄청 세련된 방이네! 카페 같아."
      },
      {
        "speaker": "B",
        "text": "ありがとう。今回はウッドテイストで統一してみたんだ。",
        "translation": "고마워. 이번엔 우드톤으로 통일해봤어."
      },
      {
        "speaker": "A",
        "text": "この間接照明もすごくいい雰囲気出してるね。どこで買ったの？",
        "translation": "이 간접 조명도 엄청 좋은 분위기를 내고 있네. 어디서 샀어?"
      },
      {
        "speaker": "B",
        "text": "ネットで見つけたんだ。照明一つで部屋の印象が全然変わるから、結構こだわったよ。",
        "translation": "인터넷에서 찾았어. 조명 하나로 방의 인상이 완전 바뀌니까, 꽤 신경 썼지."
      },
      {
        "speaker": "A",
        "text": "なるほどね。私も模様替えしたくなってきた。何かコツはある？",
        "translation": "그렇구나. 나도 인테리어 바꾸고 싶어졌어. 무슨 요령이 있어?"
      },
      {
        "speaker": "B",
        "text": "まずは色を3色くらいに絞ると、すっきりまとまって見えるよ。",
        "translation": "우선 색을 3가지 정도로 좁히면, 깔끔하게 정돈되어 보여."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜みたい",
        "function": "비유 (~같다)",
        "example": "カフェみたい。",
        "translation": "카페 같아."
      },
      {
        "pattern": "〜てみた",
        "function": "시험 삼아 해봄",
        "example": "統一してみたんだ。",
        "translation": "통일해봤어."
      },
      {
        "pattern": "〜と、〜",
        "function": "조건과 결과",
        "example": "色を絞ると、まとまって見える。",
        "translation": "색을 좁히면, 정돈되어 보여."
      }
    ],
    "writingMission": {
      "prompt": "자신이 꿈꾸는 이상적인 방의 모습에 대해 묘사해보세요.",
      "promptJp": "自分が夢見る理想的な部屋の様子について描写してみましょう。",
      "minChars": 100,
      "hint": "どんな家具があるか、どんな雰囲気か(雰囲気)를 구체적으로 적어보세요."
    },
    "teacherNote": "인테리어 관련 어휘(模様替え, こだわる 등)와 비유 표현(〜みたい)을 연습합니다.",
    "tags": [
      "인테리어",
      "집",
      "캐주얼"
    ]
  },
  {
    "id": "daily-stress",
    "titleKo": "스트레스 해소법",
    "titleJp": "ストレス解消法",
    "level": "N2",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근에 스트레스를 받은 일이 있나요?",
        "jp": "最近、ストレスを感じたことはありますか。"
      },
      {
        "ko": "자신만의 스트레스 해소법은 무엇인가요?",
        "jp": "自分なりのストレス解消法は何ですか。"
      },
      {
        "ko": "스트레스를 받을 때 혼자 있는 것을 선호하나요, 누군가와 만나는 것을 선호하나요?",
        "jp": "ストレスを感じた時、一人でいるのを好みますか、それとも誰かと会うのを好みますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "현대 사회에서 사람들이 스트레스를 많이 받는 근본적인 이유는 무엇일까요?",
        "jp": "現代社会で人々が多くのストレスを抱える根本的な理由は何でしょうか。"
      },
      {
        "ko": "적당한 스트레스는 삶에 긍정적인 영향을 미친다는 의견에 동의하나요?",
        "jp": "適度なストレスは人生に肯定的な影響を与えるという意見に同意しますか。"
      },
      {
        "ko": "타인의 스트레스를 덜어주기 위해 우리가 할 수 있는 일은 무엇일까요?",
        "jp": "他人のストレスを和らげるために、私たちができることは何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "업무/학업 스트레스로 힘들어하는 친구의 고민을 들어주는 상황",
      "roleA": "최근 일이 너무 많아 번아웃이 온 사람",
      "roleB": "공감하며 실질적인 조언이나 기분 전환을 제안하는 사람"
    },
    "expressions": [
      {
        "word": "ストレスが溜まる",
        "reading": "すとれすがたまる",
        "meaning": "스트레스가 쌓이다",
        "example": "仕事が忙しくてストレスが溜まっています。"
      },
      {
        "word": "発散する",
        "reading": "はっさんする",
        "meaning": "발산하다, 풀다",
        "example": "カラオケでストレスを発散します。"
      },
      {
        "word": "息抜き",
        "reading": "いきぬき",
        "meaning": "휴식, 기분 전환",
        "example": "たまには息抜きが必要です。"
      },
      {
        "word": "八つ当たり",
        "reading": "やつあたり",
        "meaning": "화풀이",
        "example": "人に八つ当たりしてはいけません。"
      },
      {
        "word": "気分転換",
        "reading": "きぶんてんかん",
        "meaning": "기분 전환",
        "example": "散歩をして気分転換を図ります。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、仕事のプレッシャーが大きくて、かなりストレスが溜まっているんです。",
        "translation": "최근에 업무 압박이 커서, 스트레스가 꽤 쌓여 있어요."
      },
      {
        "speaker": "B",
        "text": "それは大変ですね。ちゃんと休めていますか。無理をすると体調を崩しかねませんよ。",
        "translation": "그거 큰일이네요. 제대로 쉬고 있나요? 무리하면 몸을 망칠 수도 있어요."
      },
      {
        "speaker": "A",
        "text": "ええ、頭では分かっているんですが、つい仕事のことを考えてしまって。",
        "translation": "네, 머리로는 알고 있는데, 자꾸 일 생각을 하게 돼서요."
      },
      {
        "speaker": "B",
        "text": "オンとオフの切り替えが重要ですね。週末は仕事を忘れて、何か没頭できる趣味の時間を設けてみてはいかがですか。",
        "translation": "온과 오프의 전환이 중요하죠. 주말에는 일을 잊고, 뭔가 몰두할 수 있는 취미 시간을 가져보는 건 어때요?"
      },
      {
        "speaker": "A",
        "text": "そうですね。久しぶりに映画でも見て、気分転換を図ろうと思います。",
        "translation": "그렇네요. 오랜만에 영화라도 보고, 기분 전환을 해봐야겠어요."
      },
      {
        "speaker": "B",
        "text": "それがいいですよ。たまには思い切り息抜きをしてくださいね。",
        "translation": "그게 좋아요. 가끔은 마음껏 휴식을 취하세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜かねない",
        "function": "~할지도 모른다 (나쁜 결과)",
        "example": "体調を崩しかねません。",
        "translation": "몸을 망칠 수도 있습니다."
      },
      {
        "pattern": "〜てはいかがですか",
        "function": "정중한 제안",
        "example": "時間を設けてみてはいかがですか。",
        "translation": "시간을 가져보는 건 어떠신가요?"
      },
      {
        "pattern": "〜を図る",
        "function": "도모하다, 꾀하다",
        "example": "気分転換を図ります。",
        "translation": "기분 전환을 꾀합니다."
      }
    ],
    "writingMission": {
      "prompt": "스트레스가 극에 달했을 때 자신을 진정시키는 루틴이나 방법에 대해 논리적으로 서술하세요.",
      "promptJp": "ストレスがピークに達した時、自分を落ち着かせるルーティンや方法について論理的に述べてください。",
      "minChars": 150,
      "hint": "なぜその方法が効果的か(왜 그 방법이 효과적인지)를 포함하여 작성하세요."
    },
    "teacherNote": "N2 수준의 문법(〜かねない)과 스트레스 관련 고급 어휘(息抜き, 気分転換を図る)를 활용한 깊이 있는 대화를 유도합니다.",
    "tags": [
      "스트레스",
      "정신건강",
      "고민상담"
    ]
  },
  {
    "id": "daily-time-management",
    "titleKo": "시간 관리",
    "titleJp": "時間管理",
    "level": "N2",
    "category": "일상수다",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "평소에 시간 관리를 잘 하는 편인가요?",
        "jp": "普段、時間管理はうまくできている方ですか。"
      },
      {
        "ko": "약속 시간에 항상 일찍 가는 편인가요, 아니면 딱 맞춰 가는 편인가요?",
        "jp": "待ち合わせ時間にはいつも早く行く方ですか、それともぴったりに行く方ですか。"
      },
      {
        "ko": "스케줄러나 다이어리를 사용하나요?",
        "jp": "スケジュール帳やダイアリーを使っていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "현대인들이 항상 '시간이 부족하다'고 느끼는 이유는 무엇일까요?",
        "jp": "現代人が常に「時間が足りない」と感じる理由は何でしょうか。"
      },
      {
        "ko": "효율적인 시간 관리가 삶의 질을 어떻게 향상시킬 수 있나요?",
        "jp": "効率的な時間管理が生活の質をどのように向上させることができますか。"
      },
      {
        "ko": "아무것도 하지 않고 보내는 시간(여백의 시간)도 필요하다고 생각하나요?",
        "jp": "何もせずに過ごす時間（余白の時間）も必要だと思いますか。"
      }
    ],
    "roleplay": {
      "situation": "업무 효율을 높이기 위한 시간 관리 세미나에서 자신의 노하우를 공유하는 상황",
      "roleA": "시간 관리의 중요성과 구체적인 팁을 발표하는 강사",
      "roleB": "발표를 듣고 질문을 던지는 참가자"
    },
    "expressions": [
      {
        "word": "効率",
        "reading": "こうりつ",
        "meaning": "효율",
        "example": "作業の効率を上げる。"
      },
      {
        "word": "優先順位",
        "reading": "ゆうせんじゅんい",
        "meaning": "우선순위",
        "example": "タスクの優先順位をつける。"
      },
      {
        "word": "先延ばし",
        "reading": "さきのばし",
        "meaning": "미룸, 연기",
        "example": "面倒な仕事を先延ばしにする癖がある。"
      },
      {
        "word": "締め切り",
        "reading": "しめきり",
        "meaning": "마감",
        "example": "締め切りに追われる。"
      },
      {
        "word": "有意義",
        "reading": "ゆういぎ",
        "meaning": "유의미함, 보람 있음",
        "example": "時間を有意義に使う。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "本日は、限られた時間をいかに有意義に使うかについてお話しさせていただきます。",
        "translation": "오늘은 제한된 시간을 어떻게 유의미하게 사용할 것인가에 대해 말씀드리겠습니다."
      },
      {
        "speaker": "B",
        "text": "先生、私はいつも締め切りに追われてしまい、仕事の質が落ちてしまうのが悩みです。",
        "translation": "선생님, 저는 항상 마감에 쫓겨서 업무의 질이 떨어지는 것이 고민입니다."
      },
      {
        "speaker": "A",
        "text": "そのお気持ち、よく分かります。重要なのは、タスクに優先順位をつけることです。緊急ではないが重要なタスクを先延ばしにしていませんか。",
        "translation": "その 마음, 잘 압니다. 중요한 것은 업무에 우선순위를 매기는 것입니다. 긴급하지는 않지만 중요한 업무를 미루고 있지는 않나요?"
      },
      {
        "speaker": "B",
        "text": "確かに、目の前の急ぎの仕事ばかりこなしている気がします。",
        "translation": "확실히, 눈앞의 급한 일만 처리하고 있는 것 같습니다."
      },
      {
        "speaker": "A",
        "text": "朝の最も集中力が高い時間帯に、その「重要だが緊急でない」タスクを配置することをお勧めします。",
        "translation": "아침의 가장 집중력이 높은 시간대에 그 '중요하지만 긴급하지 않은' 업무를 배치하는 것을 추천합니다."
      },
      {
        "speaker": "B",
        "text": "なるほど。明日から早速実践してみます。",
        "translation": "그렇군요. 내일부터 당장 실천해 보겠습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "いかに〜か",
        "function": "어떻게 ~할 것인가 (방법/정도)",
        "example": "いかに有意義に使うか。",
        "translation": "어떻게 유의미하게 사용할 것인가."
      },
      {
        "pattern": "〜に追われる",
        "function": "~에 쫓기다",
        "example": "締め切りに追われる。",
        "translation": "마감에 쫓기다."
      },
      {
        "pattern": "〜ばかり",
        "function": "~만 (부정적 뉘앙스)",
        "example": "急ぎの仕事ばかりこなしている。",
        "translation": "급한 일만 처리하고 있다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 하루 일과를 분석하고, 버려지는 시간을 줄이기 위한 구체적인 계획을 작성하세요.",
      "promptJp": "自分の一日のスケジュールを分析し、無駄な時間を減らすための具体的な計画を作成してください。",
      "minChars": 150,
      "hint": "優先順位(우선순위), 効率的(효율적) 등의 비즈니스 어휘를 사용해보세요."
    },
    "teacherNote": "비즈니스 상황에서의 정중한 표현과 시간 관리 관련 고급 어휘(優先順位, 先延ばし)를 익히도록 지도합니다.",
    "tags": [
      "시간관리",
      "효율",
      "비즈니스"
    ]
  },
  {
    "id": "daily-photography",
    "titleKo": "사진 찍기와 기록",
    "titleJp": "写真撮影と記録",
    "level": "N2",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "평소에 사진을 자주 찍는 편인가요?",
        "jp": "普段、写真をよく撮る方ですか。"
      },
      {
        "ko": "주로 어떤 피사체(풍경, 음식, 인물 등)를 찍나요?",
        "jp": "主にどんな被写体（風景、食べ物、人物など）を撮りますか。"
      },
      {
        "ko": "찍은 사진은 SNS에 공유하나요, 아니면 혼자만 보나요?",
        "jp": "撮った写真はSNSにシェアしますか、それとも自分だけで見ますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "모든 순간을 사진으로 남기려는 현대인들의 습관에 대해 어떻게 생각하나요?",
        "jp": "すべての瞬間を写真に残そうとする現代人の習慣についてどう思いますか。"
      },
      {
        "ko": "사진을 찍는 행위가 현재의 순간을 즐기는 데 방해가 된다고 생각한 적이 있나요?",
        "jp": "写真を撮る行為が、現在の瞬間を楽しむ妨げになると感じたことはありますか。"
      },
      {
        "ko": "기억과 사진 중, 과거를 회상하는 데 더 중요한 역할을 하는 것은 무엇일까요?",
        "jp": "記憶と写真のうち、過去を振り返る上でより重要な役割を果たすのはどちらでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "여행지에서 사진 촬영에 대해 의견이 엇갈리는 상황",
      "roleA": "남는 건 사진뿐이라며 계속해서 사진을 찍으려는 사람",
      "roleB": "사진보다는 눈으로 직접 보고 분위기를 즐기고 싶은 사람"
    },
    "expressions": [
      {
        "word": "被写体",
        "reading": "ひしゃたい",
        "meaning": "피사체",
        "example": "風景を被写体にして写真を撮る。"
      },
      {
        "word": "映える",
        "reading": "ばえる",
        "meaning": "사진이 잘 나오다, 돋보이다",
        "example": "SNS映えするスポットを探す。"
      },
      {
        "word": "目に焼き付ける",
        "reading": "めにやきつける",
        "meaning": "눈에 새기다",
        "example": "美しい景色をしっかり目に焼き付ける。"
      },
      {
        "word": "振り返る",
        "reading": "ふりかえる",
        "meaning": "되돌아보다, 회상하다",
        "example": "後で写真を見て思い出を振り返る。"
      },
      {
        "word": "ファインダー越し",
        "reading": "ふぁいんだーごし",
        "meaning": "뷰파인더 너머",
        "example": "ファインダー越しに世界を見る。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ちょっと待って、ここすごく映えるから写真撮ろう！",
        "translation": "잠깐만, 여기 사진 엄청 잘 나오니까 사진 찍자!"
      },
      {
        "speaker": "B",
        "text": "また？さっきからファインダー越しにしか景色を見てないんじゃない？",
        "translation": "또? 아까부터 뷰파인더 너머로만 경치를 보고 있는 거 아니야?"
      },
      {
        "speaker": "A",
        "text": "だって、後で振り返った時に写真がないと寂しいじゃん。記憶なんて薄れちゃうし。",
        "translation": "그치만, 나중에 되돌아봤을 때 사진이 없으면 아쉽잖아. 기억은 흐려지기 마련이고."
      },
      {
        "speaker": "B",
        "text": "それは分かるけど、せっかく来たんだから、まずは自分の目に焼き付けようよ。",
        "translation": "그건 알지만, 모처럼 왔으니까 우선은 자기 눈에 새기자."
      },
      {
        "speaker": "A",
        "text": "うーん、言われてみればそうかも。じゃあ、この一枚だけ撮ったらスマホしまうね。",
        "translation": "음, 듣고 보니 그럴지도. 그럼 이 한 장만 찍고 스마트폰 넣을게."
      },
      {
        "speaker": "B",
        "text": "うん、そうして。この空気感は写真じゃ伝わらないからね。",
        "translation": "응, 그렇게 해. 이 공기감은 사진으로는 전해지지 않으니까."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜越し",
        "function": "~너머",
        "example": "ファインダー越しに景色を見る。",
        "translation": "뷰파인더 너머로 경치를 본다."
      },
      {
        "pattern": "〜ちゃう（てしまう）",
        "function": "~해버리다 (캐주얼)",
        "example": "記憶なんて薄れちゃう。",
        "translation": "기억 따위는 흐려져 버린다."
      },
      {
        "pattern": "せっかく〜んだから",
        "function": "모처럼 ~했으니까",
        "example": "せっかく来たんだから。",
        "translation": "모처럼 왔으니까."
      }
    ],
    "writingMission": {
      "prompt": "자신이 찍은 사진 중 가장 의미 있는 한 장을 고르고, 그 사진에 담긴 사연을 설명하세요.",
      "promptJp": "自分が撮った写真の中で最も意味のある一枚を選び、その写真に込められたエピソードを説明してください。",
      "minChars": 150,
      "hint": "いつ、どこで、どんな気持ちで(언제, 어디서, 어떤 기분으로) 찍었는지 상세히 묘사하세요."
    },
    "teacherNote": "사진과 기록에 대한 철학적인 주제를 다루며, '目に焼き付ける'와 같은 관용구를 자연스럽게 사용하도록 유도합니다.",
    "tags": [
      "사진",
      "기록",
      "여행"
    ]
  },
  {
    "id": "daily-health-care",
    "titleKo": "건강 관리와 영양",
    "titleJp": "健康管理と栄養",
    "level": "N2",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "평소에 영양제를 챙겨 먹나요?",
        "jp": "普段、サプリメントを飲んでいますか。"
      },
      {
        "ko": "건강을 위해 특별히 피하는 음식이 있나요?",
        "jp": "健康のために特別に避けている食べ物はありますか。"
      },
      {
        "ko": "정기적으로 건강검진을 받고 있나요?",
        "jp": "定期的に健康診断を受けていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "현대인들의 식습관이 과거에 비해 어떻게 변화했다고 생각하나요?",
        "jp": "現代人の食習慣は過去に比べてどのように変化したと思いますか。"
      },
      {
        "ko": "정보의 홍수 속에서 올바른 건강 정보를 어떻게 선별해야 할까요?",
        "jp": "情報の洪水の中で、正しい健康情報をどのように見分けるべきでしょうか。"
      },
      {
        "ko": "신체적 건강을 유지하는 데 있어 유전과 생활습관 중 어느 것이 더 큰 영향을 미친다고 보나요?",
        "jp": "身体的な健康を維持する上で、遺伝と生活習慣のどちらがより大きな影響を与えると考えますか。"
      }
    ],
    "roleplay": {
      "situation": "최근 건강검진 결과가 안 좋게 나온 동료와 대화하는 상황",
      "roleA": "건강검진 결과에 충격을 받고 식습관을 개선하려는 사람",
      "roleB": "건강 관리에 해박하여 실질적인 조언을 해주는 사람"
    },
    "expressions": [
      {
        "word": "健康診断",
        "reading": "けんこうしんだん",
        "meaning": "건강검진",
        "example": "年に一度、健康診断を受けます。"
      },
      {
        "word": "偏る",
        "reading": "かたよる",
        "meaning": "치우치다",
        "example": "栄養が偏った食事は避けるべきです。"
      },
      {
        "word": "サプリメント",
        "reading": "さぷりめんと",
        "meaning": "영양제, 보충제",
        "example": "不足しがちなビタミンをサプリメントで補う。"
      },
      {
        "word": "見直す",
        "reading": "みなおす",
        "meaning": "재검토하다, 다시 보다",
        "example": "生活習慣を見直す必要があります。"
      },
      {
        "word": "予防",
        "reading": "よぼう",
        "meaning": "예방",
        "example": "病気の予防に努める。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "先日受けた健康診断の結果が返ってきたんですが、コレステロール値が高くてショックを受けています。",
        "translation": "얼마 전 받은 건강검진 결과가 나왔는데, 콜레스테롤 수치가 높아서 충격을 받았어요."
      },
      {
        "speaker": "B",
        "text": "それは心配ですね。最近、外食や脂っこい食事が続いていたのではありませんか。",
        "translation": "그거 걱정이네요. 최근에 외식이나 기름진 식사가 계속되었던 건 아닌가요?"
      },
      {
        "speaker": "A",
        "text": "おっしゃる通りです。忙しさを理由に、食生活がかなり偏っていました。",
        "translation": "말씀하신 대로입니다. 바쁘다는 핑계로 식생활이 꽤 치우쳐 있었어요."
      },
      {
        "speaker": "B",
        "text": "これを機に、生活習慣を根本から見直す良いチャンスかもしれませんよ。まずは野菜中心の食事を心がけてみては？",
        "translation": "이것을 계기로 생활습관을 근본부터 다시 돌아볼 좋은 기회일지도 몰라요. 우선은 채소 위주의 식사를 염두에 두는 건 어때요?"
      },
      {
        "speaker": "A",
        "text": "そうですね。病気になってからでは遅いですから、今日から予防に努めます。",
        "translation": "그렇네요. 병에 걸리고 나서는 늦으니까, 오늘부터 예방에 힘쓰겠습니다."
      },
      {
        "speaker": "B",
        "text": "応援しています。無理のない範囲で少しずつ改善していきましょう。",
        "translation": "응원할게요. 무리 없는 범위에서 조금씩 개선해 나갑시다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜がち",
        "function": "~하기 쉬움, 자주 ~함",
        "example": "不足しがちなビタミン。",
        "translation": "부족하기 쉬운 비타민."
      },
      {
        "pattern": "〜を機に",
        "function": "~을 계기로",
        "example": "これを機に見直す。",
        "translation": "이것을 계기로 재검토하다."
      },
      {
        "pattern": "〜てからでは遅い",
        "function": "~하고 나서는 늦다",
        "example": "病気になってからでは遅い。",
        "translation": "병에 걸리고 나서는 늦다."
      }
    ],
    "writingMission": {
      "prompt": "현대인의 불규칙한 식습관이 초래하는 문제점과 그 해결 방안에 대해 논술하세요.",
      "promptJp": "現代人の不規則な食習慣がもたらす問題点とその解決策について論述してください。",
      "minChars": 150,
      "hint": "原因(원인), 影響(영향), 対策(대책)의 논리적 구조를 갖추어 작성하세요."
    },
    "teacherNote": "건강 관련 전문 어휘와 논리적인 의견 개진에 필요한 문형(〜を機に 등)을 연습합니다.",
    "tags": [
      "건강",
      "식습관",
      "자기관리"
    ]
  },
  {
    "id": "daily-minimalism",
    "titleKo": "미니멀 라이프",
    "titleJp": "ミニマルライフ",
    "level": "N1",
    "category": "일상수다",
    "activity": "발표",
    "style": "정중체",
    "duration": 40,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "미니멀 라이프(최소주의 삶)에 대해 들어본 적이 있나요?",
        "jp": "ミニマルライフ（最小限主義の生活）について聞いたことがありますか。"
      },
      {
        "ko": "자신의 방에는 불필요한 물건이 많다고 생각하나요?",
        "jp": "自分の部屋には不要な物が多いと思いますか。"
      },
      {
        "ko": "물건을 버릴 때 아쉬움을 많이 느끼는 편인가요?",
        "jp": "物を捨てる時、未練を強く感じる方ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "소유가 곧 행복이라는 물질주의적 가치관에 대해 어떻게 생각하나요?",
        "jp": "所有がすなわち幸福であるという物質主義的な価値観についてどう思いますか。"
      },
      {
        "ko": "물건을 줄이는 것이 정신적 자유로 이어진다는 주장에 동의하나요?",
        "jp": "物を減らすことが精神的な自由につながるという主張に同意しますか。"
      },
      {
        "ko": "극단적인 미니멀리즘이 가져올 수 있는 부작용은 무엇일까요?",
        "jp": "極端なミニマリズムがもたらし得る副作用は何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "소비 습관에 관한 팟캐스트에서 미니멀리즘을 주제로 토론하는 상황",
      "roleA": "물건을 최소화함으로써 삶의 질이 높아졌다고 주장하는 미니멀리스트",
      "roleB": "추억이 담긴 물건이나 다양한 취미 용품이 삶을 풍요롭게 한다고 믿는 맥시멀리스트"
    },
    "expressions": [
      {
        "word": "断捨離",
        "reading": "だんしゃり",
        "meaning": "단사리 (불필요한 것을 끊고, 버리고, 집착에서 벗어남)",
        "example": "年末に徹底的な断捨離を行った。"
      },
      {
        "word": "執着",
        "reading": "しゅうちゃく",
        "meaning": "집착",
        "example": "物への執着を手放すことが重要だ。"
      },
      {
        "word": "豊かさ",
        "reading": "ゆたかさ",
        "meaning": "풍요로움",
        "example": "真の豊かさとは何かを問い直す。"
      },
      {
        "word": "見栄を張る",
        "reading": "みえをはる",
        "meaning": "허세를 부리다",
        "example": "他人に良く見られようと見栄を張る。"
      },
      {
        "word": "本質",
        "reading": "ほんしつ",
        "meaning": "본질",
        "example": "物事の本質を見極める。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "私は断捨離を通じて、物への執着を手放すことができました。結果として、心に余裕が生まれたと感じています。",
        "translation": "저는 단사리를 통해 물건에 대한 집착을 내려놓을 수 있었습니다. 결과적으로 마음에 여유가 생겼다고 느낍니다."
      },
      {
        "speaker": "B",
        "text": "確かにすっきりとした空間は魅力的ですが、思い出の品まで処分してしまうのは、過去の自分を否定するようで抵抗があります。",
        "translation": "확실히 깔끔한 공간은 매력적이지만, 추억이 담긴 물건까지 처분해 버리는 것은 과거의 자신을 부정하는 것 같아 거부감이 듭니다."
      },
      {
        "speaker": "A",
        "text": "おっしゃる意味は分かります。しかし、過去の物に縛られるあまり、現在の生活空間が圧迫されては本末転倒ではないでしょうか。",
        "translation": "무슨 말씀이신지 압니다. 하지만 과거의 물건에 얽매인 나머지, 현재의 생활 공간이 압박받는다면 주객전도가 아닐까요?"
      },
      {
        "speaker": "B",
        "text": "一理ありますね。ただ、多様な物に囲まれることでインスピレーションを得るという側面も見逃せないと思います。",
        "translation": "일리 있네요. 다만, 다양한 물건에 둘러싸임으로써 영감을 얻는다는 측면도 간과할 수 없다고 생각합니다."
      },
      {
        "speaker": "A",
        "text": "ええ、ですから重要なのは、自分にとっての「真の豊かさ」の本質を見極め、必要なものだけを選択する眼を養うことだと思います。",
        "translation": "네, 그러므로 중요한 것은 자신에게 있어 '진정한 풍요로움'의 본질을 파악하고, 필요한 것만을 선택하는 안목을 기르는 것이라 생각합니다."
      },
      {
        "speaker": "B",
        "text": "なるほど。単に捨てるのではなく、自分との対話のプロセスだと言えそうですね。",
        "translation": "그렇군요. 단순히 버리는 것이 아니라, 자신과의 대화 과정이라고 할 수 있겠네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜あまり",
        "function": "너무 ~한 나머지",
        "example": "過去の物に縛られるあまり。",
        "translation": "과거의 물건에 얽매인 나머지."
      },
      {
        "pattern": "〜ては本末転倒だ",
        "function": "~해서는 주객전도다",
        "example": "生活空間が圧迫されては本末転倒だ。",
        "translation": "생활 공간이 압박받는다면 주객전도다."
      },
      {
        "pattern": "〜を見逃せない",
        "function": "~을 간과할 수 없다",
        "example": "インスピレーションを得るという側面も見逃せない。",
        "translation": "영감을 얻는다는 측면도 간과할 수 없다."
      }
    ],
    "writingMission": {
      "prompt": "현대 사회에서 미니멀리즘이 유행하는 사회적, 심리적 배경을 분석하는 에세이를 작성하세요.",
      "promptJp": "現代社会においてミニマリズムが流行している社会的、心理的背景を分析するエッセイを作成してください。",
      "minChars": 200,
      "hint": "物質的豊かさ(물질적 풍요), 情報過多(정보 과다), 精神的自由(정신적 자유) 등의 키워드를 활용하세요."
    },
    "teacherNote": "N1 수준의 추상적이고 철학적인 어휘(執着, 本質, 本末転倒)를 활용하여 깊이 있는 토론을 진행하도록 지도합니다.",
    "tags": [
      "미니멀리즘",
      "가치관",
      "토론"
    ]
  },
  {
    "id": "daily-digital-detox",
    "titleKo": "디지털 디톡스",
    "titleJp": "デジタルデトックス",
    "level": "N1",
    "category": "일상수다",
    "activity": "작문",
    "style": "정중체",
    "duration": 40,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "하루에 스마트폰을 몇 시간 정도 사용하나요?",
        "jp": "一日にスマートフォンを何時間くらい使用しますか。"
      },
      {
        "ko": "스마트폰이 없으면 불안감을 느끼나요?",
        "jp": "スマートフォンがないと不安を感じますか。"
      },
      {
        "ko": "의도적으로 전자기기 사용을 줄여본 경험이 있나요?",
        "jp": "意図的に電子機器の使用を減らしてみた経験はありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "상시 연결성(Always-on)이 인간관계의 질을 떨어뜨린다는 주장에 대해 어떻게 생각하나요?",
        "jp": "常時接続性（Always-on）が人間関係の質を低下させるという主張についてどう思いますか。"
      },
      {
        "ko": "디지털 기기가 우리의 뇌 구조나 인지 능력에 어떤 변화를 가져왔다고 보나요?",
        "jp": "デジタル機器が私たちの脳の構造や認知能力にどのような変化をもたらしたと考えますか。"
      },
      {
        "ko": "기술의 발전을 누리면서도 디지털 종속에서 벗어날 수 있는 현실적인 방법은 무엇일까요?",
        "jp": "技術の発展を享受しつつも、デジタル従属から抜け出すための現実的な方法は何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "IT 기업의 사내 세미나에서 스마트폰 중독 문제에 대해 토론하는 상황",
      "roleA": "디지털 디톡스의 필요성을 역설하며 오프라인 경험의 가치를 강조하는 사람",
      "roleB": "디지털 기기의 효율성을 옹호하며, 문제는 기기가 아니라 사용 방식이라고 반박하는 사람"
    },
    "expressions": [
      {
        "word": "依存症",
        "reading": "いぞんしょう",
        "meaning": "의존증, 중독",
        "example": "深刻なスマホ依存症に陥っている。"
      },
      {
        "word": "常時接続",
        "reading": "じょうじせつぞく",
        "meaning": "상시 접속",
        "example": "常時接続の社会がストレスを生む。"
      },
      {
        "word": "遮断する",
        "reading": "しゃだんする",
        "meaning": "차단하다",
        "example": "外部からの情報を一時的に遮断する。"
      },
      {
        "word": "弊害",
        "reading": "へいがい",
        "meaning": "폐해",
        "example": "デジタル化がもたらす弊害を無視できない。"
      },
      {
        "word": "享受する",
        "reading": "きょうじゅする",
        "meaning": "향유하다, 누리다",
        "example": "テクノロジーの恩恵を享受する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "現代人は、絶え間なく押し寄せる通知のせいで、深く思考する時間を奪われているのではないでしょうか。",
        "translation": "현대인은 끊임없이 밀려드는 알림 때문에 깊이 사고할 시간을 빼앗기고 있는 것은 아닐까요?"
      },
      {
        "speaker": "B",
        "text": "確かに情報過多の弊害はありますが、それはツールそのものの問題ではなく、利用者のリテラシーの問題だと言わざるを得ません。",
        "translation": "확실히 정보 과다의 폐해는 있습니다만, 그것은 도구 자체의 문제가 아니라 이용자의 리터러시 문제라고 하지 않을 수 없습니다."
      },
      {
        "speaker": "A",
        "text": "しかし、アプリは人間の注意力を引くように巧妙に設計されており、個人の意志力だけで抗うのは至難の業です。",
        "translation": "하지만 앱은 인간의 주의력을 끌도록 교묘하게 설계되어 있어, 개인의 의지력만으로 저항하는 것은 지극히 어려운 일입니다."
      },
      {
        "speaker": "B",
        "text": "だからこそ、テクノロジーを完全に遮断するのではなく、使用時間を制限するなどのルールを設けることが現実的な解決策となるはずです。",
        "translation": "그렇기 때문에 기술을 완전히 차단하는 것이 아니라, 사용 시간을 제한하는 등의 규칙을 마련하는 것이 현실적인 해결책이 될 것입니다."
      },
      {
        "speaker": "A",
        "text": "ええ、私もテクノロジーの恩恵を否定するつもりはありません。ただ、意図的に「つながらない権利」を行使する時間も不可欠だと主張したいのです。",
        "translation": "네, 저도 기술의 혜택을 부정할 생각은 없습니다. 다만, 의도적으로 '연결되지 않을 권리'를 행사하는 시간도 불가결하다고 주장하고 싶은 것입니다."
      },
      {
        "speaker": "B",
        "text": "その点には大いに賛同します。デジタルとアナログの適切なバランスを見出すことが、今後の課題ですね。",
        "translation": "그 점에는 크게 찬동합니다. 디지털과 아날로그의 적절한 균형을 찾는 것이 향후의 과제이겠네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ざるを得ない",
        "function": "~하지 않을 수 없다",
        "example": "リテラシーの問題だと言わざるを得ません。",
        "translation": "리터러시 문제라고 하지 않을 수 없습니다."
      },
      {
        "pattern": "〜至難の業だ",
        "function": "지극히 어려운 일이다",
        "example": "個人の意志力だけで抗うのは至難の業です。",
        "translation": "개인의 의지력만으로 저항하는 것은 지극히 어려운 일입니다."
      },
      {
        "pattern": "〜つもりはない",
        "function": "~할 생각은 없다",
        "example": "恩恵を否定するつもりはありません。",
        "translation": "혜택을 부정할 생각은 없습니다."
      }
    ],
    "writingMission": {
      "prompt": "디지털 기기가 인간의 인지 능력과 사회적 관계에 미치는 영향에 대해 비판적으로 논증하는 글을 작성하세요.",
      "promptJp": "デジタル機器が人間の認知能力と社会的関係に及ぼす影響について批判的に論証する文章を作成してください。",
      "minChars": 250,
      "hint": "序論(서론), 本論(본론), 結論(결론)의 형식을 갖추고, 구체적인 사례를 들어 주장을 뒷받침하세요."
    },
    "teacherNote": "N1 수준의 논리적 전개와 고급 어휘(依存症, 弊害, 至難の業)를 활용하여 사회적 이슈에 대해 깊이 있게 토론하고 작문하도록 지도합니다.",
    "tags": [
      "디지털디톡스",
      "현대사회",
      "토론"
    ]
  },
  {
    "id": "daily-commute",
    "titleKo": "출퇴근과 교통수단",
    "titleJp": "通勤と交通手段",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "학교나 회사까지 어떻게 가나요?",
        "jp": "学校や会社までどうやって行きますか。"
      },
      {
        "ko": "통근/통학 시간은 얼마나 걸리나요?",
        "jp": "通勤・通学時間はどのくらいかかりますか。"
      },
      {
        "ko": "지하철과 버스 중 어느 것을 더 자주 타나요?",
        "jp": "地下鉄とバス、どちらによく乗りますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "출퇴근 시간에 주로 무엇을 하면서 시간을 보내나요?",
        "jp": "通勤時間に主に何をしながら時間を過ごしますか。"
      },
      {
        "ko": "만원 전철을 탈 때의 기분은 어떤가요?",
        "jp": "満員電車に乗る時の気分はどうですか。"
      },
      {
        "ko": "이상적인 통근 시간은 몇 분 정도라고 생각하나요?",
        "jp": "理想的な通勤時間は何分くらいだと思いますか。"
      }
    ],
    "roleplay": {
      "situation": "아침에 회사에 도착해서 동료와 출근길에 대해 이야기하는 상황",
      "roleA": "오늘 지하철이 연착되어 지각할 뻔한 사람",
      "roleB": "자전거로 출근해서 상쾌한 기분인 사람"
    },
    "expressions": [
      {
        "word": "通勤",
        "reading": "つうきん",
        "meaning": "통근, 출퇴근",
        "example": "毎日の通勤が大変です。"
      },
      {
        "word": "満員電車",
        "reading": "まんいんでんしゃ",
        "meaning": "만원 전철",
        "example": "朝の満員電車は疲れます。"
      },
      {
        "word": "遅延",
        "reading": "ちえん",
        "meaning": "지연, 연착",
        "example": "電車が遅延しています。"
      },
      {
        "word": "乗り換える",
        "reading": "のりかえる",
        "meaning": "환승하다",
        "example": "新宿駅で乗り換えます。"
      },
      {
        "word": "混む",
        "reading": "こむ",
        "meaning": "붐비다",
        "example": "道がとても混んでいます。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "おはようございます。今日は電車が遅延して、遅刻するかと思いました。",
        "translation": "안녕하세요. 오늘은 전철이 연착돼서 지각할 뻔했어요."
      },
      {
        "speaker": "B",
        "text": "おはようございます。大変でしたね。満員電車でしたか。",
        "translation": "안녕하세요. 고생하셨네요. 만원 전철이었나요?"
      },
      {
        "speaker": "A",
        "text": "はい、とても混んでいて疲れました。Bさんはいつもどうやって通勤していますか。",
        "translation": "네, 너무 붐벼서 피곤했어요. B씨는 항상 어떻게 출근하시나요?"
      },
      {
        "speaker": "B",
        "text": "私は家が近いので、自転車で通っています。",
        "translation": "저는 집이 가까워서 자전거로 다니고 있어요."
      },
      {
        "speaker": "A",
        "text": "いいですね。運動にもなるし、電車のストレスもなくて羨ましいです。",
        "translation": "좋네요. 운동도 되고, 전철 스트레스도 없어서 부러워요."
      },
      {
        "speaker": "B",
        "text": "ええ、朝の空気が気持ちいいですよ。",
        "translation": "네, 아침 공기가 상쾌해요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "どうやって",
        "function": "방법 묻기",
        "example": "どうやって行きますか。",
        "translation": "어떻게 가나요?"
      },
      {
        "pattern": "〜かと思った",
        "function": "~할 뻔했다, ~인 줄 알았다",
        "example": "遅刻するかと思いました。",
        "translation": "지각할 뻔했어요."
      },
      {
        "pattern": "〜にもなる",
        "function": "~도 되다 (일석이조의 효과)",
        "example": "運動にもなります。",
        "translation": "운동도 됩니다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 통근/통학 경로와 걸리는 시간, 그리고 그 시간에 주로 하는 일을 적어보세요.",
      "promptJp": "自分の通勤・通学ルートとかかる時間、そしてその時間に主にしていることを書いてみましょう。",
      "minChars": 80,
      "hint": "〜から〜まで(에서~까지), 〜で(교통수단)를 사용하세요."
    },
    "teacherNote": "교통수단 관련 어휘와 이동 시간을 표현하는 방법을 연습합니다.",
    "tags": [
      "교통",
      "출퇴근",
      "일상"
    ]
  },
  {
    "id": "daily-season",
    "titleKo": "계절의 변화",
    "titleJp": "季節の変化",
    "level": "N3",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "사계절 중 언제가 가장 좋나요?",
        "jp": "四季の中でいつが一番好きですか。"
      },
      {
        "ko": "계절이 바뀔 때 어떤 기분이 드나요?",
        "jp": "季節が変わる時、どんな気分になりますか。"
      },
      {
        "ko": "봄이 오면 가장 먼저 하고 싶은 일은 무엇인가요?",
        "jp": "春が来たら一番最初にしたいことは何ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "계절의 변화가 사람의 감정이나 생산성에 영향을 미친다고 생각하나요?",
        "jp": "季節の変化が人の感情や生産性に影響を与えると思いますか。"
      },
      {
        "ko": "지구 온난화로 인해 사계절의 구분이 모호해지는 것에 대해 어떻게 느끼나요?",
        "jp": "地球温暖化によって四季の区別が曖昧になっていることについてどう感じますか。"
      },
      {
        "ko": "특정 계절을 떠올리게 하는 음식이나 노래가 있나요?",
        "jp": "特定の季節を思い起こさせる食べ物や歌はありますか。"
      }
    ],
    "roleplay": {
      "situation": "갑자기 날씨가 추워진 가을날, 친구와 계절에 대해 이야기하는 상황",
      "roleA": "추위를 많이 타서 겨울이 오는 것이 싫은 사람",
      "roleB": "겨울 스포츠나 겨울 음식을 좋아해서 기대하는 사람"
    },
    "expressions": [
      {
        "word": "四季",
        "reading": "しき",
        "meaning": "사계절",
        "example": "日本には美しい四季があります。"
      },
      {
        "word": "肌寒い",
        "reading": "はだざむい",
        "meaning": "쌀쌀하다",
        "example": "秋になって少し肌寒くなりました。"
      },
      {
        "word": "紅葉",
        "reading": "こうよう",
        "meaning": "단풍",
        "example": "山が紅葉してきれいです。"
      },
      {
        "word": "衣替え",
        "reading": "ころもがえ",
        "meaning": "옷장 정리 (계절에 맞게 옷을 바꿈)",
        "example": "週末に衣替えをします。"
      },
      {
        "word": "旬",
        "reading": "しゅん",
        "meaning": "제철",
        "example": "旬の食材を使った料理を食べる。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、急に肌寒くなりましたね。もうすっかり秋ですね。",
        "translation": "최근에 갑자기 쌀쌀해졌네요. 이제 완전히 가을이에요."
      },
      {
        "speaker": "B",
        "text": "そうですね。朝晩は冷え込むので、そろそろ衣替えをしないといけません。",
        "translation": "그렇네요. 아침저녁으로는 쌀쌀해서, 슬슬 옷장 정리를 해야겠어요."
      },
      {
        "speaker": "A",
        "text": "私は寒がりなので、これから冬になるのが少し憂鬱です。",
        "translation": "저는 추위를 많이 타서, 앞으로 겨울이 되는 게 조금 우울해요."
      },
      {
        "speaker": "B",
        "text": "そうですか。私はスノーボードが好きなので、冬が来るのが待ち遠しいですよ。",
        "translation": "그러신가요. 저는 스노보드를 좋아해서, 겨울이 오는 게 몹시 기다려져요."
      },
      {
        "speaker": "A",
        "text": "なるほど。でも、冬は鍋料理が美味しい季節でもありますね。",
        "translation": "그렇군요. 그래도 겨울은 전골 요리가 맛있는 계절이기도 하죠."
      },
      {
        "speaker": "B",
        "text": "ええ、旬の食材を使った温かい鍋は最高ですね。",
        "translation": "네, 제철 식재료를 사용한 따뜻한 전골은 최고죠."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜くなる",
        "function": "상태의 변화 (이형용사)",
        "example": "肌寒くなりました。",
        "translation": "쌀쌀해졌습니다."
      },
      {
        "pattern": "〜ないといけない",
        "function": "의무 (~해야 한다)",
        "example": "衣替えをしないといけません。",
        "translation": "옷장 정리를 해야 합니다."
      },
      {
        "pattern": "〜待ち遠しい",
        "function": "몹시 기다려지다",
        "example": "冬が来るのが待ち遠しいです。",
        "translation": "겨울이 오는 게 몹시 기다려집니다."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 계절의 매력에 대해 3가지 이유를 들어 설명해보세요.",
      "promptJp": "自分が一番好きな季節の魅力について、3つの理由を挙げて説明してみましょう。",
      "minChars": 100,
      "hint": "第一に(첫째로), 第二に(둘째로), 第三に(셋째로)를 사용해보세요."
    },
    "teacherNote": "계절 변화를 나타내는 어휘(肌寒い, 紅葉 등)와 상태 변화(〜くなる)를 연습합니다.",
    "tags": [
      "계절",
      "날씨",
      "자연"
    ]
  },
  {
    "id": "relation-first-impression",
    "titleKo": "첫인상",
    "titleJp": "第一印象",
    "level": "N5",
    "category": "관계와감정",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "사람의 첫인상은 중요하다고 생각하나요?",
        "jp": "人の第一印象は大切だと思いますか。"
      },
      {
        "ko": "당신의 첫인상은 어떤 편인가요?",
        "jp": "あなたの第一印象はどんな方ですか。"
      },
      {
        "ko": "최근에 만난 사람의 첫인상은 어땠나요?",
        "jp": "最近会った人の第一印象はどうでしたか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "첫인상과 실제 성격이 달랐던 적이 있나요?",
        "jp": "第一印象と実際の性格が違ったことがありますか。"
      },
      {
        "ko": "좋은 첫인상을 주기 위해 무엇을 하나요?",
        "jp": "良い第一印象を与えるために何をしますか。"
      },
      {
        "ko": "외모가 첫인상에 얼마나 영향을 미칠까요?",
        "jp": "外見が第一印象にどのくらい影響するでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "새로운 친구를 처음 만나는 상황",
      "roleA": "자신을 소개하는 사람",
      "roleB": "반갑게 인사하며 질문하는 사람"
    },
    "expressions": [
      {
        "word": "第一印象",
        "reading": "だいいちいんしょう",
        "meaning": "첫인상",
        "example": "第一印象がとても良かったです。"
      },
      {
        "word": "性格",
        "reading": "せいかく",
        "meaning": "성격",
        "example": "彼は性格が明るいです。"
      },
      {
        "word": "見た目",
        "reading": "みため",
        "meaning": "겉모습, 외모",
        "example": "見た目より優しいです。"
      },
      {
        "word": "優しそう",
        "reading": "やさしそう",
        "meaning": "상냥해 보임",
        "example": "優しそうな人ですね。"
      },
      {
        "word": "緊張する",
        "reading": "きんちょうする",
        "meaning": "긴장하다",
        "example": "初めて会う時は緊張します。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "初めまして。キムと申します。",
        "translation": "처음 뵙겠습니다. 김이라고 합니다."
      },
      {
        "speaker": "B",
        "text": "初めまして。田中です。よろしくお願いします。",
        "translation": "처음 뵙겠습니다. 다나카입니다. 잘 부탁드립니다."
      },
      {
        "speaker": "A",
        "text": "田中さんは優しそうな方ですね。",
        "translation": "다나카 씨는 상냥해 보이시네요."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。キムさんも明るいですね。",
        "translation": "감사합니다. 김 씨도 밝으시네요."
      },
      {
        "speaker": "A",
        "text": "実は少し緊張しています。",
        "translation": "사실 조금 긴장하고 있어요."
      },
      {
        "speaker": "B",
        "text": "大丈夫ですよ。リラックスしてください。",
        "translation": "괜찮아요. 편하게 하세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜そうです",
        "function": "양태 (추측)",
        "example": "優しそうです。",
        "translation": "상냥해 보입니다."
      },
      {
        "pattern": "〜より",
        "function": "비교",
        "example": "見た目より優しいです。",
        "translation": "겉모습보다 상냥합니다."
      },
      {
        "pattern": "〜てから",
        "function": "순후",
        "example": "会ってから話します。",
        "translation": "만나고 나서 이야기합니다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 첫인상과 실제 성격에 대해 써보세요.",
      "promptJp": "自分の第一印象と実際の性格について書いてみましょう。",
      "minChars": 100,
      "hint": "見た目(겉모습), 実際(실제) 등의 단어를 사용해보세요."
    },
    "teacherNote": "N5 수준이므로 복잡한 표현보다는 기본적인 형용사와 인사말에 집중하도록 지도합니다.",
    "tags": [
      "첫인상",
      "성격",
      "인사"
    ]
  },
  {
    "id": "relation-friendship",
    "titleKo": "우정",
    "titleJp": "友情",
    "level": "N5",
    "category": "관계와감정",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "친한 친구가 몇 명 있나요?",
        "jp": "親しい友達が何人いますか。"
      },
      {
        "ko": "친구와 주로 무엇을 하나요?",
        "jp": "友達と主に何をしますか。"
      },
      {
        "ko": "어떤 성격의 친구를 좋아하나요?",
        "jp": "どんな性格の友達が好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "가장 오래된 친구는 누구인가요?",
        "jp": "一番古い友達は誰ですか。"
      },
      {
        "ko": "친구와 싸운 적이 있나요?",
        "jp": "友達と喧嘩したことがありますか。"
      },
      {
        "ko": "좋은 친구란 어떤 사람일까요?",
        "jp": "良い友達とはどんな人でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "주말에 친구와 놀 약속을 정하는 상황",
      "roleA": "영화를 보자고 제안하는 사람",
      "roleB": "쇼핑을 가자고 제안하는 사람"
    },
    "expressions": [
      {
        "word": "親友",
        "reading": "しんゆう",
        "meaning": "친한 친구",
        "example": "彼女は私の親友です。"
      },
      {
        "word": "遊ぶ",
        "reading": "あそぶ",
        "meaning": "놀다",
        "example": "週末に友達と遊びます。"
      },
      {
        "word": "喧嘩する",
        "reading": "けんかする",
        "meaning": "싸우다",
        "example": "たまに喧嘩もします。"
      },
      {
        "word": "仲がいい",
        "reading": "なかがいい",
        "meaning": "사이가 좋다",
        "example": "私たちはとても仲がいいです。"
      },
      {
        "word": "約束",
        "reading": "やくそく",
        "meaning": "약속",
        "example": "明日、友達と約束があります。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "今週末、暇？",
        "translation": "이번 주말에 시간 있어?"
      },
      {
        "speaker": "B",
        "text": "うん、暇だよ。どうしたの？",
        "translation": "응, 한가해. 왜?"
      },
      {
        "speaker": "A",
        "text": "一緒に映画を見に行かない？",
        "translation": "같이 영화 보러 가지 않을래?"
      },
      {
        "speaker": "B",
        "text": "映画もいいけど、買い物に行きたいな。",
        "translation": "영화도 좋지만, 쇼핑 가고 싶은데."
      },
      {
        "speaker": "A",
        "text": "じゃあ、買い物してから映画を見よう！",
        "translation": "그럼 쇼핑하고 나서 영화 보자!"
      },
      {
        "speaker": "B",
        "text": "いいね！そうしよう。",
        "translation": "좋아! 그렇게 하자."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に行かない？",
        "function": "권유",
        "example": "映画を見に行かない？",
        "translation": "영화 보러 가지 않을래?"
      },
      {
        "pattern": "〜たい",
        "function": "희망",
        "example": "買い物に行きたいな。",
        "translation": "쇼핑 가고 싶어."
      },
      {
        "pattern": "〜てから",
        "function": "순서",
        "example": "買い物してから映画を見よう。",
        "translation": "쇼핑하고 나서 영화 보자."
      }
    ],
    "writingMission": {
      "prompt": "자신의 가장 친한 친구를 소개하는 글을 써보세요.",
      "promptJp": "自分の一番親しい友達を紹介する文章を書いてみましょう。",
      "minChars": 150,
      "hint": "성격, 취미, 함께 하는 일 등을 포함해보세요."
    },
    "teacherNote": "캐주얼한 반말 표현(タメ口)을 연습할 수 있도록 지도합니다.",
    "tags": [
      "친구",
      "약속",
      "주말"
    ]
  },
  {
    "id": "relation-family",
    "titleKo": "가족관계",
    "titleJp": "家族関係",
    "level": "N5",
    "category": "관계와감정",
    "activity": "발표",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "가족은 몇 명인가요?",
        "jp": "家族は何人ですか。"
      },
      {
        "ko": "가족과 함께 살고 있나요?",
        "jp": "家族と一緒に住んでいますか。"
      },
      {
        "ko": "가족 중에서 누구와 가장 많이 이야기하나요?",
        "jp": "家族の中で誰と一番よく話しますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "가족과 함께하는 특별한 행사가 있나요?",
        "jp": "家族と一緒にする特別な行事がありますか。"
      },
      {
        "ko": "가족에게 고마웠던 적은 언제인가요?",
        "jp": "家族に感謝した時はいつですか。"
      },
      {
        "ko": "미래에 어떤 가정을 꾸리고 싶나요?",
        "jp": "将来、どんな家庭を築きたいですか。"
      }
    ],
    "roleplay": {
      "situation": "자신의 가족 사진을 보여주며 소개하는 상황",
      "roleA": "가족을 소개하는 사람",
      "roleB": "사진을 보며 질문하는 사람"
    },
    "expressions": [
      {
        "word": "家族",
        "reading": "かぞく",
        "meaning": "가족",
        "example": "私の家族は4人です。"
      },
      {
        "word": "両親",
        "reading": "りょうしん",
        "meaning": "부모님",
        "example": "両親は韓国に住んでいます。"
      },
      {
        "word": "兄弟",
        "reading": "きょうだい",
        "meaning": "형제",
        "example": "兄弟はいますか。"
      },
      {
        "word": "似ている",
        "reading": "にている",
        "meaning": "닮다",
        "example": "父に似ています。"
      },
      {
        "word": "大切だ",
        "reading": "たいせつだ",
        "meaning": "소중하다",
        "example": "家族は大切です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "これは私の家族の写真です。",
        "translation": "이것은 제 가족 사진입니다."
      },
      {
        "speaker": "B",
        "text": "わあ、優しそうなご両親ですね。",
        "translation": "와, 다정해 보이시는 부모님이네요."
      },
      {
        "speaker": "A",
        "text": "はい、とても優しいです。",
        "translation": "네, 아주 다정하십니다."
      },
      {
        "speaker": "B",
        "text": "隣にいるのはお兄さんですか。",
        "translation": "옆에 있는 분은 형(오빠)인가요?"
      },
      {
        "speaker": "A",
        "text": "いいえ、弟です。背が高いんです。",
        "translation": "아니요, 남동생입니다. 키가 큽니다."
      },
      {
        "speaker": "B",
        "text": "そうなんですね。仲が良さそうです。",
        "translation": "그렇군요. 사이가 좋아 보입니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜人です",
        "function": "인원수",
        "example": "家族は4人です。",
        "translation": "가족은 4명입니다."
      },
      {
        "pattern": "〜に住んでいます",
        "function": "거주지",
        "example": "ソウルに住んでいます。",
        "translation": "서울에 살고 있습니다."
      },
      {
        "pattern": "〜に似ています",
        "function": "유사성",
        "example": "母に似ています。",
        "translation": "어머니를 닮았습니다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 가족을 소개하는 글을 써보세요.",
      "promptJp": "自分の家族を紹介する文章を書いてみましょう。",
      "minChars": 150,
      "hint": "가족 구성원, 직업, 성격 등을 적어보세요."
    },
    "teacherNote": "자신의 가족을 말할 때와 남의 가족을 말할 때의 호칭 차이(ちち/おとうさん 등)를 주의시킵니다.",
    "tags": [
      "가족",
      "소개",
      "사진"
    ]
  },
  {
    "id": "relation-gratitude",
    "titleKo": "감사표현",
    "titleJp": "感謝の表現",
    "level": "N5",
    "category": "관계와감정",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "최근에 누구에게 감사 인사를 했나요?",
        "jp": "最近誰に感謝の挨拶をしましたか。"
      },
      {
        "ko": "어떤 선물을 받았을 때 가장 기뻤나요?",
        "jp": "どんなプレゼントをもらった時一番嬉しかったですか。"
      },
      {
        "ko": "감사함을 표현하는 것이 왜 중요할까요?",
        "jp": "感謝を表現することがなぜ重要でしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "말로 표현하기 부끄러울 때 어떻게 감사함을 전하나요?",
        "jp": "言葉で表現するのが恥ずかしい時、どうやって感謝を伝えますか。"
      },
      {
        "ko": "부모님께 가장 감사한 점은 무엇인가요?",
        "jp": "両親に一番感謝している点は何ですか。"
      },
      {
        "ko": "감사함을 표현하는 새로운 방법이 있다면 무엇일까요?",
        "jp": "感謝を表現する新しい方法があれば何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "도움을 준 친구에게 진심으로 감사함을 전하는 상황",
      "roleA": "도움을 받은 사람",
      "roleB": "도움을 준 사람"
    },
    "expressions": [
      {
        "word": "感謝",
        "reading": "かんしゃ",
        "meaning": "감사",
        "example": "心から感謝しています。"
      },
      {
        "word": "助かる",
        "reading": "たすかる",
        "meaning": "도움이 되다",
        "example": "本当に助かりました。"
      },
      {
        "word": "お礼",
        "reading": "おれい",
        "meaning": "사례, 감사",
        "example": "お礼を言いたいです。"
      },
      {
        "word": "恐縮です",
        "reading": "きょうしゅくです",
        "meaning": "황송합니다, 죄송합니다",
        "example": "ご迷惑をおかけして恐縮です。"
      },
      {
        "word": "恩に着る",
        "reading": "おんにきる",
        "meaning": "은혜를 입다",
        "example": "このご恩は一生忘れません。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "先日は本当にありがとうございました。",
        "translation": "지난번에는 정말 감사했습니다."
      },
      {
        "speaker": "B",
        "text": "いえいえ、どういたしまして。",
        "translation": "아니요, 천만에요."
      },
      {
        "speaker": "A",
        "text": "おかげさまで、無事に終わりました。",
        "translation": "덕분에 무사히 마쳤습니다."
      },
      {
        "speaker": "B",
        "text": "それは良かったです。お役に立てて嬉しいです。",
        "translation": "다행이네요. 도움이 되어서 기쁩니다."
      },
      {
        "speaker": "A",
        "text": "本当に助かりました。心から感謝しています。",
        "translation": "정말 도움이 되었습니다. 진심으로 감사드립니다."
      },
      {
        "speaker": "B",
        "text": "また何かあればいつでも言ってください。",
        "translation": "또 뭔가 있으면 언제든지 말씀해주세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てくれてありがとう",
        "function": "감사 표현",
        "example": "手伝ってくれてありがとう。",
        "translation": "도와줘서 고마워."
      },
      {
        "pattern": "〜おかげで",
        "function": "원인, 덕분에",
        "example": "先生のおかげで合格しました。",
        "translation": "선생님 덕분에 합격했습니다."
      },
      {
        "pattern": "〜て嬉しい",
        "function": "감정 표현",
        "example": "会えて嬉しいです。",
        "translation": "만나서 기쁩니다."
      }
    ],
    "writingMission": {
      "prompt": "최근에 감사했던 일에 대해 편지를 써보세요.",
      "promptJp": "最近感謝したことについて手紙を書いてみましょう。",
      "minChars": 150,
      "hint": "구체적인 상황과 감사를 표현하는 문구를 포함하세요."
    },
    "teacherNote": "다양한 감사 표현(ありがとうございます、助かりました、感謝しています)을 연습하도록 지도합니다.",
    "tags": [
      "감사",
      "도움",
      "예의"
    ]
  },
  {
    "id": "relation-apology",
    "titleKo": "사과하기",
    "titleJp": "謝罪する",
    "level": "N4",
    "category": "관계와감정",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "사과하는 것이 어렵다고 느끼나요?",
        "jp": "謝ることが難しいと感じますか。"
      },
      {
        "ko": "가장 최근에 사과했던 경험은 언제인가요?",
        "jp": "一番最近謝った経験はいつですか。"
      },
      {
        "ko": "진심 어린 사과란 어떤 것이라고 생각하나요?",
        "jp": "心からの謝罪とはどのようなものだと思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "사과를 받아들이기 어려운 경우는 언제인가요?",
        "jp": "謝罪を受け入れるのが難しい場合はいつですか。"
      },
      {
        "ko": "일본에서는 사과를 어떻게 표현하는 것이 일반적인가요?",
        "jp": "日本では謝罪をどのように表現するのが一般的ですか。"
      },
      {
        "ko": "사과 후 관계 회복을 위해 어떤 노력을 해야 할까요?",
        "jp": "謝罪後、関係回復のためにどのような努力をすべきでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "약속 시간에 늦어서 친구에게 사과하는 상황",
      "roleA": "늦어서 사과하는 사람",
      "roleB": "사과를 받아주는 사람"
    },
    "expressions": [
      {
        "word": "申し訳ありません",
        "reading": "もうしわけありません",
        "meaning": "죄송합니다 (정중)",
        "example": "大変申し訳ありませんでした。"
      },
      {
        "word": "ごめんなさい",
        "reading": "ごめんなさい",
        "meaning": "미안합니다 (캐주얼)",
        "example": "遅れてごめんなさい。"
      },
      {
        "word": "許す",
        "reading": "ゆるす",
        "meaning": "용서하다",
        "example": "どうか許してください。"
      },
      {
        "word": "反省する",
        "reading": "はんせいする",
        "meaning": "반성하다",
        "example": "自分の行動を反省しています。"
      },
      {
        "word": "迷惑をかける",
        "reading": "めいわくをかける",
        "meaning": "폐를 끼치다",
        "example": "ご迷惑をおかけしました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "遅れてしまって、本当に申し訳ありません。",
        "translation": "늦어서 정말 죄송합니다."
      },
      {
        "speaker": "B",
        "text": "大丈夫ですよ。気にしないでください。",
        "translation": "괜찮아요. 신경 쓰지 마세요."
      },
      {
        "speaker": "A",
        "text": "道が混んでいて、間に合いませんでした。",
        "translation": "길이 막혀서 제시간에 도착하지 못했습니다."
      },
      {
        "speaker": "B",
        "text": "連絡をくれたので、心配しませんでしたよ。",
        "translation": "연락을 줘서 걱정하지 않았어요."
      },
      {
        "speaker": "A",
        "text": "ご迷惑をおかけして、本当にすみません。",
        "translation": "폐를 끼쳐서 정말 죄송합니다."
      },
      {
        "speaker": "B",
        "text": "いえいえ、気にしていませんから。",
        "translation": "아니요, 신경 쓰지 않아요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てしまって",
        "function": "유감, 완료",
        "example": "遅れてしまって。",
        "translation": "늦어버려서."
      },
      {
        "pattern": "〜てすみません",
        "function": "사과",
        "example": "待たせてすみません。",
        "translation": "기다리게 해서 죄송합니다."
      },
      {
        "pattern": "〜ないでください",
        "function": "부정 명령",
        "example": "気にしないでください。",
        "translation": "신경 쓰지 마세요."
      }
    ],
    "writingMission": {
      "prompt": "친구에게 실수한 일에 대해 사과하는 메시지를 작성하세요.",
      "promptJp": "友達に失敗したことについて謝罪のメッセージを作成しなさい。",
      "minChars": 100,
      "hint": "구체적인 상황과 자신의 반성하는 마음을 담아보세요."
    },
    "teacherNote": "상황에 따른 다양한 사과 표현(申し訳ありません、ごめんなさい)을 연습하도록 지도합니다.",
    "tags": [
      "사과",
      "실수",
      "관계"
    ]
  },
  {
    "id": "relation-conflict-resolution",
    "titleKo": "갈등 해결",
    "titleJp": "葛藤解決",
    "level": "N3",
    "category": "관계와감정",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "사람들과 갈등이 생겼을 때 어떻게 해결하려고 노력하나요?",
        "jp": "人々と葛藤が生じた時、どのように解決しようと努力しますか。"
      },
      {
        "ko": "갈등 해결에 가장 중요한 요소는 무엇이라고 생각하나요?",
        "jp": "葛藤解決に最も重要な要素は何だと思いますか。"
      },
      {
        "ko": "갈등을 피하는 것이 항상 좋은 방법일까요?",
        "jp": "葛藤を避けることが常に良い方法でしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "문화적 차이가 갈등 해결에 어떤 영향을 미칠 수 있을까요?",
        "jp": "文化的差異が葛藤解決にどのような影響を与えるでしょうか。"
      },
      {
        "ko": "직장 내 갈등을 해결하는 효과적인 방법은 무엇일까요?",
        "jp": "職場内の葛藤を解決する効果的な方法は何でしょうか。"
      },
      {
        "ko": "갈등을 통해 관계가 더 깊어진 경험이 있나요?",
        "jp": "葛藤を通じて関係がより深まった経験がありますか。"
      }
    ],
    "roleplay": {
      "situation": "팀 프로젝트 중 의견 충돌이 발생한 상황",
      "roleA": "자신의 의견을 주장하는 사람",
      "roleB": "상대방의 의견을 듣고 조율하는 사람"
    },
    "expressions": [
      {
        "word": "意見の相違",
        "reading": "いけんのそうい",
        "meaning": "의견 차이",
        "example": "意見の相違が生じました。"
      },
      {
        "word": "歩み寄る",
        "reading": "あゆみよる",
        "meaning": "양보하다, 타협하다",
        "example": "お互いに歩み寄る。"
      },
      {
        "word": "誤解",
        "reading": "ごかい",
        "meaning": "오해",
        "example": "誤解を解く。"
      },
      {
        "word": "話し合う",
        "reading": "はなしあう",
        "meaning": "서로 이야기하다",
        "example": "じっくり話し合いましょう。"
      },
      {
        "word": "妥協点",
        "reading": "だきょうてん",
        "meaning": "타협점",
        "example": "妥協点を見つける。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この点については、どうしても納得できません。",
        "translation": "이 점에 대해서는 도저히 납득할 수 없습니다."
      },
      {
        "speaker": "B",
        "text": "お気持ちは分かります。しかし、別の視点も必要です。",
        "translation": "심정은 이해합니다. 하지만 다른 시점도 필요합니다."
      },
      {
        "speaker": "A",
        "text": "私の意見も尊重していただきたいのですが。",
        "translation": "제 의견도 존중해 주셨으면 합니다만."
      },
      {
        "speaker": "B",
        "text": "もちろん、そうします。お互いに歩み寄る姿勢が大切です。",
        "translation": "물론 그렇게 하겠습니다. 서로 양보하는 자세가 중요합니다."
      },
      {
        "speaker": "A",
        "text": "では、どこかで妥協点を見つけましょう。",
        "translation": "그럼, 어디선가 타협점을 찾아봅시다."
      },
      {
        "speaker": "B",
        "text": "そうですね。建設的な話し合いをしましょう。",
        "translation": "그렇죠. 건설적인 대화를 합시다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜どうしても〜ない",
        "function": "아무리 해도 ~할 수 없다",
        "example": "どうしても納得できません。",
        "translation": "도저히 납득할 수 없습니다."
      },
      {
        "pattern": "〜ていただきたい",
        "function": "~해 주셨으면 한다 (희망)",
        "example": "理解していただきたい。",
        "translation": "이해해 주셨으면 합니다."
      },
      {
        "pattern": "〜姿勢が大切です",
        "function": "~하는 자세가 중요하다",
        "example": "学ぶ姿勢が大切です。",
        "translation": "배우는 자세가 중요합니다."
      }
    ],
    "writingMission": {
      "prompt": "친구와의 갈등 상황을 설정하고, 그 갈등을 해결하는 대화 시나리오를 작성하세요.",
      "promptJp": "友達との葛藤状況を設定し、その葛藤を解決する会話シナリオを作成しなさい。",
      "minChars": 200,
      "hint": "상대방의 입장을 이해하고 자신의 의견을 명확하게 전달하는 방법을 포함하세요."
    },
    "teacherNote": "갈등 상황에서 자신의 의견을 논리적으로 전달하고 상대방의 의견을 경청하는 연습을 지도합니다.",
    "tags": [
      "갈등",
      "해결",
      "소통"
    ]
  },
  {
    "id": "relation-empathy",
    "titleKo": "공감과 배려",
    "titleJp": "共感と配慮",
    "level": "N3",
    "category": "관계와감정",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "다른 사람의 감정에 공감하는 것이 중요하다고 생각하나요?",
        "jp": "他人の感情に共感することが重要だと思いますか。"
      },
      {
        "ko": "배려심이 깊은 사람의 특징은 무엇이라고 생각하나요?",
        "jp": "配慮深い人の特徴は何だと思いますか。"
      },
      {
        "ko": "최근에 누군가에게 배려를 받은 경험이 있나요?",
        "jp": "最近誰かに配慮してもらった経験がありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "공감 능력을 키우기 위해 어떤 노력을 할 수 있을까요?",
        "jp": "共感能力を養うためにどのような努力ができるでしょうか。"
      },
      {
        "ko": "일본 사회에서 중요하게 생각하는 배려의 문화는 무엇일까요?",
        "jp": "日本社会で重要視される配慮の文化は何でしょうか。"
      },
      {
        "ko": "과도한 공감이나 배려가 오히려 독이 될 수도 있을까요?",
        "jp": "過度な共感や配慮が、かえって毒になることもあるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "힘든 일을 겪고 있는 친구를 위로하고 공감하는 상황",
      "roleA": "힘든 일을 이야기하는 사람",
      "roleB": "공감하며 위로하는 사람"
    },
    "expressions": [
      {
        "word": "共感する",
        "reading": "きょうかんする",
        "meaning": "공감하다",
        "example": "彼の気持ちに共感します。"
      },
      {
        "word": "配慮する",
        "reading": "はいりょする",
        "meaning": "배려하다",
        "example": "相手の気持ちを配慮する。"
      },
      {
        "word": "寄り添う",
        "reading": "よりそう",
        "meaning": "다가가다, 함께하다",
        "example": "苦しんでいる人に寄り添う。"
      },
      {
        "word": "思いやる",
        "reading": "おもいやり",
        "meaning": "배려심, 동정심",
        "example": "思いやりの気持ちを持つ。"
      },
      {
        "word": "察する",
        "reading": "さっする",
        "meaning": "헤아리다, 짐작하다",
        "example": "相手の意図を察する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、仕事でうまくいかないことが多くて。",
        "translation": "요즘, 일이 잘 풀리지 않는 일이 많아서."
      },
      {
        "speaker": "B",
        "text": "それは大変ですね。お気持ち、よく分かります。",
        "translation": "그거 힘드시겠네요. 그 마음, 잘 알겠습니다."
      },
      {
        "speaker": "A",
        "text": "どうしたらいいか、分からなくなってしまって。",
        "translation": "어떻게 해야 할지, 모르겠어서."
      },
      {
        "speaker": "B",
        "text": "一人で抱え込まずに、いつでも相談してくださいね。",
        "translation": "혼자 끙끙 앓지 말고, 언제든지 상담해주세요."
      },
      {
        "speaker": "A",
        "text": "そう言っていただけると、少し楽になります。",
        "translation": "그렇게 말씀해주시니, 조금 편해지네요."
      },
      {
        "speaker": "B",
        "text": "無理せず、ゆっくりいきましょう。",
        "translation": "무리하지 말고, 천천히 해나가요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ことが多くて",
        "function": "~한 일이 많아서",
        "example": "失敗することが多くて。",
        "translation": "실패하는 일이 많아서."
      },
      {
        "pattern": "〜てしまって",
        "function": "유감, 완료",
        "example": "分からなくなってしまって。",
        "translation": "모르게 되어버려서."
      },
      {
        "pattern": "〜ていただけると",
        "function": "~해 주시면 (가정, 감사)",
        "example": "教えていただけると助かります。",
        "translation": "가르쳐 주시면 도움이 됩니다."
      }
    ],
    "writingMission": {
      "prompt": "힘든 일을 겪고 있는 친구에게 공감과 위로의 메시지를 작성하세요.",
      "promptJp": "大変な状況にある友達に共感と慰めのメッセージを作成しなさい。",
      "minChars": 150,
      "hint": "친구의 감정을 이해하고, 힘이 될 수 있는 말을 포함하세요."
    },
    "teacherNote": "상대방의 감정을 이해하고 적절한 위로와 격려의 말을 건네는 연습을 지도합니다.",
    "tags": [
      "공감",
      "배려",
      "위로"
    ]
  },
  {
    "id": "relation-trust",
    "titleKo": "신뢰",
    "titleJp": "信頼",
    "level": "N2",
    "category": "관계와감정",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 35,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "사람을 신뢰하는 데 가장 중요한 요소는 무엇이라고 생각하나요?",
        "jp": "人を信頼する上で最も重要な要素は何だと思いますか。"
      },
      {
        "ko": "신뢰를 쌓는 데 얼마나 많은 시간이 걸린다고 생각하나요?",
        "jp": "信頼を築くのにどれくらいの時間がかかると考えますか。"
      },
      {
        "ko": "신뢰를 잃는 순간은 언제라고 생각하나요?",
        "jp": "信頼を失う瞬間はいつだと思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "비즈니스 관계에서 신뢰는 어떤 의미를 가질까요?",
        "jp": "ビジネス関係において信頼はどのような意味を持つでしょうか。"
      },
      {
        "ko": "사회 전반의 신뢰도가 낮아지는 현상에 대해 어떻게 생각하나요?",
        "jp": "社会全体の信頼度が低下する現象についてどう思いますか。"
      },
      {
        "ko": "신뢰를 회복하기 위한 가장 효과적인 방법은 무엇일까요?",
        "jp": "信頼を回復するための最も効果的な方法は何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "중요한 업무를 맡기며 신뢰를 표현하는 상사와 그에 보답하는 부하직원",
      "roleA": "부하직원을 신뢰하며 업무를 맡기는 상사",
      "roleB": "상사의 신뢰에 보답하겠다고 다짐하는 부하직원"
    },
    "expressions": [
      {
        "word": "信頼",
        "reading": "しんらい",
        "meaning": "신뢰",
        "example": "彼は信頼できる人物です。"
      },
      {
        "word": "裏切る",
        "reading": "うらぎる",
        "meaning": "배신하다",
        "example": "期待を裏切らない。"
      },
      {
        "word": "責任",
        "reading": "せきにん",
        "meaning": "책임",
        "example": "責任を持って仕事をする。"
      },
      {
        "word": "誠実",
        "reading": "せいじつ",
        "meaning": "성실",
        "example": "誠実な態度で臨む。"
      },
      {
        "word": "期待に応える",
        "reading": "きたいにこたえる",
        "meaning": "기대에 부응하다",
        "example": "皆様の期待に応えます。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "今回のプロジェクトは君に任せたい。君を信頼している。",
        "translation": "이번 프로젝트는 자네에게 맡기고 싶네. 자네를 신뢰하고 있어."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。ご期待に沿えるよう、全力を尽くします。",
        "translation": "감사합니다. 기대에 부응할 수 있도록 최선을 다하겠습니다."
      },
      {
        "speaker": "A",
        "text": "何か困ったことがあれば、いつでも相談してくれ。",
        "translation": "뭔가 곤란한 일이 있으면, 언제든지 상담해 주게."
      },
      {
        "speaker": "B",
        "text": "はい、承知いたしました。責任を持って取り組みます。",
        "translation": "네, 알겠습니다. 책임감을 가지고 임하겠습니다."
      },
      {
        "speaker": "A",
        "text": "頼りにしているよ。",
        "translation": "기대하고 있네."
      },
      {
        "speaker": "B",
        "text": "信頼を裏切らないよう、精一杯頑張ります。",
        "translation": "신뢰를 저버리지 않도록, 최선을 다하겠습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に任せる",
        "function": "~에게 맡기다",
        "example": "彼に仕事を任せる。",
        "translation": "그에게 일을 맡기다."
      },
      {
        "pattern": "〜に沿えるよう",
        "function": "~에 부응할 수 있도록",
        "example": "ご要望に沿えるよう。",
        "translation": "요청에 부응할 수 있도록."
      },
      {
        "pattern": "〜を尽くす",
        "function": "~을 다하다",
        "example": "全力を尽くす。",
        "translation": "전력을 다하다."
      }
    ],
    "writingMission": {
      "prompt": "직장 상사에게 신뢰를 얻기 위해 어떤 노력을 할 것인지에 대해 작성하세요.",
      "promptJp": "職場の上司から信頼を得るためにどのような努力をするかについて書きなさい。",
      "minChars": 250,
      "hint": "성실한 태도, 책임감, 소통 능력 등을 포함하세요."
    },
    "teacherNote": "비즈니스 상황에서 신뢰를 표현하고 구축하는 데 필요한 어휘와 표현을 지도합니다.",
    "tags": [
      "신뢰",
      "비즈니스",
      "책임"
    ]
  },
  {
    "id": "relation-loneliness",
    "titleKo": "외로움",
    "titleJp": "孤独感",
    "level": "N3",
    "category": "관계와감정",
    "activity": "작문",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "외로움을 느낄 때 주로 무엇을 하나요?",
        "jp": "孤独感を感じる時、主に何をしますか。"
      },
      {
        "ko": "외로움은 나쁜 감정이라고 생각하나요?",
        "jp": "孤独感は悪い感情だと思いますか。"
      },
      {
        "ko": "혼자 있는 시간을 즐기는 편인가요?",
        "jp": "一人でいる時間を楽しむ方ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "현대 사회에서 외로움이 증가하는 원인은 무엇이라고 생각하나요?",
        "jp": "現代社会で孤独感が増加する原因は何だと思いますか。"
      },
      {
        "ko": "외로움을 극복하기 위한 자신만의 방법이 있나요?",
        "jp": "孤独感を克服するための自分なりの方法がありますか。"
      },
      {
        "ko": "외로움이 창의성이나 자기 성장에 긍정적인 영향을 줄 수도 있을까요?",
        "jp": "孤独感が創造性や自己成長に肯定的な影響を与えることもあるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "오랜만에 만난 친구에게 최근 느꼈던 외로움에 대해 털어놓는 상황",
      "roleA": "외로움을 느끼는 사람",
      "roleB": "친구의 이야기를 들어주고 공감하는 사람"
    },
    "expressions": [
      {
        "word": "孤独",
        "reading": "こどく",
        "meaning": "고독, 외로움",
        "example": "孤独を感じる。"
      },
      {
        "word": "寂しい",
        "reading": "さびしい",
        "meaning": "외롭다, 쓸쓸하다",
        "example": "一人でいると寂しい。"
      },
      {
        "word": "打ち明ける",
        "reading": "うちあける",
        "meaning": "털어놓다",
        "example": "悩みを打ち明ける。"
      },
      {
        "word": "寄り添う",
        "reading": "よりそう",
        "meaning": "다가가다, 함께하다",
        "example": "心に寄り添う。"
      },
      {
        "word": "共感する",
        "reading": "きょうかんする",
        "meaning": "공감하다",
        "example": "彼の気持ちに共感する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、なんだかすごく寂しいんだ。",
        "translation": "요즘, 왠지 모르게 너무 외로워."
      },
      {
        "speaker": "B",
        "text": "そうだったんだ。何かあったの？",
        "translation": "그랬구나. 무슨 일 있었어?"
      },
      {
        "speaker": "A",
        "text": "特に何もないんだけど、ふと一人だと感じることが多くて。",
        "translation": "특별한 건 없는데, 문득 혼자라고 느낄 때가 많아서."
      },
      {
        "speaker": "B",
        "text": "うん、そういう時もあるよね。私もたまにそう感じるよ。",
        "translation": "응, 그럴 때도 있지. 나도 가끔 그렇게 느껴."
      },
      {
        "speaker": "A",
        "text": "話を聞いてくれてありがとう。少し楽になった。",
        "translation": "이야기 들어줘서 고마워. 좀 편해졌어."
      },
      {
        "speaker": "B",
        "text": "いつでも話聞くから、無理しないでね。",
        "translation": "언제든지 이야기 들어줄 테니까, 무리하지 마."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜なんだか",
        "function": "왠지 모르게",
        "example": "なんだか寂しい。",
        "translation": "왠지 모르게 외롭다."
      },
      {
        "pattern": "〜ふと",
        "function": "문득, 갑자기",
        "example": "ふと思い出す。",
        "translation": "문득 생각나다."
      },
      {
        "pattern": "〜てくれる",
        "function": "~해 주다 (혜택)",
        "example": "話を聞いてくれる。",
        "translation": "이야기를 들어주다."
      }
    ],
    "writingMission": {
      "prompt": "외로움을 느꼈던 경험과 그 외로움을 어떻게 극복했는지에 대해 작성하세요.",
      "promptJp": "孤独感を感じた経験と、その孤独感をどのように克服したかについて書きなさい。",
      "minChars": 200,
      "hint": "구체적인 상황과 감정, 그리고 극복 과정을 상세하게 묘사하세요."
    },
    "teacherNote": "외로움과 관련된 감정 표현(寂しい、孤独感)과 극복 방법을 이야기하는 연습을 지도합니다.",
    "tags": [
      "외로움",
      "감정",
      "극복"
    ]
  },
  {
    "id": "relation-secret",
    "titleKo": "비밀",
    "titleJp": "秘密",
    "level": "N3",
    "category": "관계와감정",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "비밀을 잘 지키는 편인가요?",
        "jp": "秘密をよく守る方ですか。"
      },
      {
        "ko": "친한 친구에게도 말할 수 없는 비밀이 있나요?",
        "jp": "親しい友達にも言えない秘密がありますか。"
      },
      {
        "ko": "비밀을 공유하는 것이 관계에 어떤 영향을 미친다고 생각하나요?",
        "jp": "秘密を共有することが関係にどのような影響を与えると思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "비밀을 지키는 것과 솔직하게 털어놓는 것 중 어느 것이 더 중요할까요?",
        "jp": "秘密を守ることと正直に打ち明けること、どちらがより重要でしょうか。"
      },
      {
        "ko": "비밀이 밝혀져서 곤란했던 경험이 있나요?",
        "jp": "秘密が明らかになって困った経験がありますか。"
      },
      {
        "ko": "비밀을 지켜주는 것이 진정한 우정의 증거라고 생각하나요?",
        "jp": "秘密を守ってくれることが真の友情の証だと思いますか。"
      }
    ],
    "roleplay": {
      "situation": "친구에게 중요한 비밀을 털어놓는 상황",
      "roleA": "비밀을 털어놓는 사람",
      "roleB": "비밀을 듣고 지켜주겠다고 약속하는 사람"
    },
    "expressions": [
      {
        "word": "秘密",
        "reading": "ひみつ",
        "meaning": "비밀",
        "example": "これは秘密だよ。"
      },
      {
        "word": "打ち明ける",
        "reading": "うちあける",
        "meaning": "털어놓다",
        "example": "心の内を打ち明ける。"
      },
      {
        "word": "守る",
        "reading": "まもる",
        "meaning": "지키다",
        "example": "約束を守る。"
      },
      {
        "word": "口が堅い",
        "reading": "くちがかたい",
        "meaning": "입이 무겁다",
        "example": "彼は口が堅いから安心だ。"
      },
      {
        "word": "漏らす",
        "reading": "もらす",
        "meaning": "누설하다",
        "example": "秘密を漏らす。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "実は、君にだけ話したい秘密があるんだ。",
        "translation": "실은, 너에게만 이야기하고 싶은 비밀이 있어."
      },
      {
        "speaker": "B",
        "text": "うん、何でも話して。絶対に誰にも言わないから。",
        "translation": "응, 뭐든지 이야기해. 절대로 누구에게도 말하지 않을게."
      },
      {
        "speaker": "A",
        "text": "実はね、最近好きな人ができたんだ。",
        "translation": "실은 말이야, 요즘 좋아하는 사람이 생겼어."
      },
      {
        "speaker": "B",
        "text": "ええっ、そうなの！？おめでとう！",
        "translation": "어? 정말이야!? 축하해!"
      },
      {
        "speaker": "A",
        "text": "まだ誰にも言ってないから、秘密にしてくれる？",
        "translation": "아직 아무에게도 말 안 했으니까, 비밀로 해줄래?"
      },
      {
        "speaker": "B",
        "text": "もちろん！任せて。口は堅いから。",
        "translation": "물론이지! 맡겨줘. 입은 무거우니까."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜にだけ",
        "function": "~에게만 (한정)",
        "example": "君にだけ話す。",
        "translation": "너에게만 이야기하다."
      },
      {
        "pattern": "〜ないから",
        "function": "~하지 않을 테니까 (이유, 약속)",
        "example": "言わないから。",
        "translation": "말하지 않을 테니까."
      },
      {
        "pattern": "〜てくれる",
        "function": "~해 주다 (혜택)",
        "example": "秘密にしてくれる？",
        "translation": "비밀로 해줄래?"
      }
    ],
    "writingMission": {
      "prompt": "친구에게 털어놓고 싶은 비밀이 있다면, 그 비밀과 왜 털어놓고 싶은지에 대해 작성하세요.",
      "promptJp": "友達に打ち明けたい秘密があるなら、その秘密と、なぜ打ち明けたいのかについて書きなさい。",
      "minChars": 150,
      "hint": "비밀의 내용과 함께, 그 비밀을 공유함으로써 얻고 싶은 것을 포함하세요."
    },
    "teacherNote": "비밀을 털어놓고 지켜주는 상황에서 사용되는 다양한 표현을 연습하도록 지도합니다.",
    "tags": [
      "비밀",
      "우정",
      "신뢰"
    ]
  },
  {
    "id": "relation-forgiveness",
    "titleKo": "용서",
    "titleJp": "許し",
    "level": "N2",
    "category": "관계와감정",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "누군가를 용서하는 것이 어렵다고 느끼나요?",
        "jp": "誰かを許すことが難しいと感じますか。"
      },
      {
        "ko": "용서가 필요한 상황은 언제라고 생각하나요?",
        "jp": "許しが必要な状況はいつだと思いますか。"
      },
      {
        "ko": "자신을 용서하는 것도 중요하다고 생각하나요?",
        "jp": "自分を許すことも重要だと思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "용서가 관계 회복에 미치는 영향은 무엇일까요?",
        "jp": "許しが関係回復に与える影響は何でしょうか。"
      },
      {
        "ko": "용서하지 못하는 마음이 자신에게 어떤 영향을 미칠까요?",
        "jp": "許せない気持ちが自分自身にどのような影響を与えるでしょうか。"
      },
      {
        "ko": "사회적 차원에서 용서와 화해는 어떻게 이루어져야 할까요?",
        "jp": "社会的な側面から見て、許しと和解はどのように行われるべきでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "오랜 오해로 인해 멀어졌던 친구에게 용서를 구하고 관계를 회복하는 상황",
      "roleA": "용서를 구하는 사람",
      "roleB": "용서하고 관계 회복을 받아들이는 사람"
    },
    "expressions": [
      {
        "word": "許す",
        "reading": "ゆるす",
        "meaning": "용서하다",
        "example": "彼を許すことにした。"
      },
      {
        "word": "和解",
        "reading": "わかい",
        "meaning": "화해",
        "example": "彼と和解する。"
      },
      {
        "word": "後悔",
        "reading": "こうかい",
        "meaning": "후회",
        "example": "自分の行動を後悔する。"
      },
      {
        "word": "乗り越える",
        "reading": "のりこえる",
        "meaning": "극복하다",
        "example": "困難を乗り越える。"
      },
      {
        "word": "水に流す",
        "reading": "みずにながす",
        "meaning": "잊어버리다, 용서하다",
        "example": "過去のことは水に流そう。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "あの時のことは、本当に申し訳なかった。許してほしい。",
        "translation": "그때 일은 정말 미안했어. 용서해 줬으면 좋겠어."
      },
      {
        "speaker": "B",
        "text": "私もずっと気になっていたんだ。",
        "translation": "나도 계속 마음에 걸렸어."
      },
      {
        "speaker": "A",
        "text": "君を傷つけてしまったことを、深く反省している。",
        "translation": "너를 상처 입힌 것을 깊이 반성하고 있어."
      },
      {
        "speaker": "B",
        "text": "もういいよ。私も悪かった部分があったし。",
        "translation": "이제 됐어. 나도 잘못한 부분이 있었고."
      },
      {
        "speaker": "A",
        "text": "ありがとう。また前みたいに仲良くしたい。",
        "translation": "고마워. 다시 예전처럼 잘 지내고 싶어."
      },
      {
        "speaker": "B",
        "text": "うん、私もそう思ってる。これからもよろしくね。",
        "translation": "응, 나도 그렇게 생각해. 앞으로도 잘 부탁해."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てほしい",
        "function": "~해 주었으면 좋겠다 (희망)",
        "example": "許してほしい。",
        "translation": "용서해 주었으면 좋겠다."
      },
      {
        "pattern": "〜てしまった",
        "function": "유감, 완료",
        "example": "傷つけてしまった。",
        "translation": "상처 입혀버렸다."
      },
      {
        "pattern": "〜みたいに",
        "function": "~처럼",
        "example": "前みたいに。",
        "translation": "예전처럼."
      }
    ],
    "writingMission": {
      "prompt": "누군가를 용서했던 경험이나 용서받았던 경험에 대해 작성하세요.",
      "promptJp": "誰かを許した経験、または許された経験について書きなさい。",
      "minChars": 200,
      "hint": "상황, 감정, 그리고 용서가 관계에 미친 영향을 상세하게 묘사하세요."
    },
    "teacherNote": "용서와 화해의 과정에서 사용되는 다양한 표현과 감정 전달 방법을 지도합니다.",
    "tags": [
      "용서",
      "화해",
      "관계회복"
    ]
  },
  {
    "id": "relation-jealousy",
    "titleKo": "질투",
    "titleJp": "嫉妬",
    "level": "N2",
    "category": "관계와감정",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "질투는 자연스러운 감정이라고 생각하나요?",
        "jp": "嫉妬は自然な感情だと思いますか。"
      },
      {
        "ko": "언제 질투를 느꼈던 적이 있나요?",
        "jp": "いつ嫉妬を感じたことがありますか。"
      },
      {
        "ko": "질투심을 어떻게 다스리려고 노력하나요?",
        "jp": "嫉妬心をどのように抑えようと努力しますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "질투가 관계에 긍정적인 영향을 줄 수도 있을까요?",
        "jp": "嫉妬が関係に肯定的な影響を与えることもあるでしょうか。"
      },
      {
        "ko": "사회적으로 질투심을 부추기는 요인은 무엇이라고 생각하나요?",
        "jp": "社会的に嫉妬心を煽る要因は何だと思いますか。"
      },
      {
        "ko": "질투와 경쟁심은 어떻게 다를까요?",
        "jp": "嫉妬と競争心はどのように違うでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "친구의 성공에 질투심을 느끼지만 축하해주는 상황",
      "roleA": "친구의 성공에 질투를 느끼는 사람",
      "roleB": "성공을 축하받는 친구"
    },
    "expressions": [
      {
        "word": "嫉妬",
        "reading": "しっと",
        "meaning": "질투",
        "example": "嫉妬心を感じる。"
      },
      {
        "word": "羨ましい",
        "reading": "うらやましい",
        "meaning": "부럽다",
        "example": "彼の才能が羨ましい。"
      },
      {
        "word": "認める",
        "reading": "みとめる",
        "meaning": "인정하다",
        "example": "彼の努力を認める。"
      },
      {
        "word": "複雑な気持ち",
        "reading": "ふくざつなきもち",
        "meaning": "복잡한 마음",
        "example": "複雑な気持ちになる。"
      },
      {
        "word": "素直になる",
        "reading": "すなおになる",
        "meaning": "솔직해지다",
        "example": "素直な気持ちを伝える。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "おめでとう！本当にすごいね。",
        "translation": "축하해! 정말 대단하다."
      },
      {
        "speaker": "B",
        "text": "ありがとう！まさか自分が選ばれるとは。",
        "translation": "고마워! 설마 내가 뽑힐 줄이야."
      },
      {
        "speaker": "A",
        "text": "正直、ちょっと羨ましい気持ちもあるけど、心から応援してるよ。",
        "translation": "솔직히, 좀 부러운 마음도 있지만, 진심으로 응원하고 있어."
      },
      {
        "speaker": "B",
        "text": "そう言ってくれて嬉しい。いつも支えてくれてありがとう。",
        "translation": "그렇게 말해줘서 기뻐. 항상 지지해줘서 고마워."
      },
      {
        "speaker": "A",
        "text": "これからも頑張ってね。",
        "translation": "앞으로도 힘내."
      },
      {
        "speaker": "B",
        "text": "うん！Aも頑張ろうね。",
        "translation": "응! A도 힘내자."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜まさか〜とは",
        "function": "설마 ~일 줄이야",
        "example": "まさか彼が来るとは。",
        "translation": "설마 그가 올 줄이야."
      },
      {
        "pattern": "〜気持ちもあるけど",
        "function": "~한 마음도 있지만",
        "example": "寂しい気持ちもあるけど。",
        "translation": "외로운 마음도 있지만."
      },
      {
        "pattern": "〜てくれて嬉しい",
        "function": "~해 줘서 기쁘다",
        "example": "助けてくれて嬉しい。",
        "translation": "도와줘서 기쁘다."
      }
    ],
    "writingMission": {
      "prompt": "친구의 성공에 질투를 느꼈지만, 결국 진심으로 축하해 주었던 경험에 대해 작성하세요.",
      "promptJp": "友達の成功に嫉妬を感じたが、最終的には心から祝福した経験について書きなさい。",
      "minChars": 200,
      "hint": "질투심을 느낀 이유와 그것을 극복하고 친구를 축하해 준 과정을 상세하게 묘사하세요."
    },
    "teacherNote": "질투와 같은 복잡한 감정을 솔직하게 표현하고, 그럼에도 불구하고 상대방을 축하하는 연습을 지도합니다.",
    "tags": [
      "질투",
      "감정",
      "우정"
    ]
  },
  {
    "id": "relation-misunderstanding",
    "titleKo": "오해",
    "titleJp": "誤解",
    "level": "N3",
    "category": "관계와감정",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "누군가와 오해가 생겼을 때 어떻게 해결하려고 노력하나요?",
        "jp": "誰かと誤解が生じた時、どのように解決しようと努力しますか。"
      },
      {
        "ko": "오해를 풀기 위해 가장 중요한 것은 무엇이라고 생각하나요?",
        "jp": "誤解を解くために最も重要なことは何だと思いますか。"
      },
      {
        "ko": "말 한마디로 오해가 깊어진 경험이 있나요?",
        "jp": "一言で誤解が深まった経験がありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "문화적 차이가 오해를 불러일으키는 주된 원인이 될 수 있을까요?",
        "jp": "文化的差異が誤解を引き起こす主な原因となるでしょうか。"
      },
      {
        "ko": "온라인 소통에서 오해가 더 쉽게 발생하는 이유는 무엇일까요?",
        "jp": "オンラインコミュニケーションで誤解がより簡単に発生する理由は何でしょうか。"
      },
      {
        "ko": "오해를 통해 오히려 관계가 더 단단해진 경험이 있나요?",
        "jp": "誤解を通じて、かえって関係がより強固になった経験がありますか。"
      }
    ],
    "roleplay": {
      "situation": "친구와의 오해를 풀기 위해 대화하는 상황",
      "roleA": "오해를 풀고 싶어 하는 사람",
      "roleB": "오해를 하고 있는 친구"
    },
    "expressions": [
      {
        "word": "誤解",
        "reading": "ごかい",
        "meaning": "오해",
        "example": "誤解を招く。"
      },
      {
        "word": "解く",
        "reading": "とく",
        "meaning": "풀다",
        "example": "誤解を解く。"
      },
      {
        "word": "真意",
        "reading": "しんい",
        "meaning": "진의, 본심",
        "example": "真意を伝える。"
      },
      {
        "word": "説明する",
        "reading": "せつめいする",
        "meaning": "설명하다",
        "example": "詳しく説明する。"
      },
      {
        "word": "勘違い",
        "reading": "かんちがい",
        "meaning": "착각",
        "example": "勘違いだった。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "あの、少しお話したいことがあるのですが。",
        "translation": "저, 잠시 이야기하고 싶은 것이 있습니다만."
      },
      {
        "speaker": "B",
        "text": "はい、何でしょうか。",
        "translation": "네, 무엇인가요?"
      },
      {
        "speaker": "A",
        "text": "もしかしたら、私の言葉で誤解させてしまったかもしれません。",
        "translation": "혹시, 제 말로 오해하게 만들었을지도 모릅니다."
      },
      {
        "speaker": "B",
        "text": "実は、私も少し気になっていました。",
        "translation": "실은, 저도 조금 마음에 걸렸습니다."
      },
      {
        "speaker": "A",
        "text": "私の真意は〜でした。誤解を解きたいです。",
        "translation": "저의 진의는 ~였습니다. 오해를 풀고 싶습니다."
      },
      {
        "speaker": "B",
        "text": "そうだったんですね。よく分かりました。",
        "translation": "그랬군요. 잘 알겠습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜かもしれません",
        "function": "~일지도 모른다 (추측)",
        "example": "雨が降るかもしれません。",
        "translation": "비가 올지도 모릅니다."
      },
      {
        "pattern": "〜てしまった",
        "function": "유감, 완료",
        "example": "忘れてしまった。",
        "translation": "잊어버렸다."
      },
      {
        "pattern": "〜たいです",
        "function": "~하고 싶다 (희망)",
        "example": "行きたいです。",
        "translation": "가고 싶습니다."
      }
    ],
    "writingMission": {
      "prompt": "친구와의 오해를 풀기 위한 대화 시나리오를 작성하세요.",
      "promptJp": "友達との誤解を解くための会話シナリオを作成しなさい。",
      "minChars": 200,
      "hint": "오해가 발생한 상황, 자신의 진의, 그리고 오해를 풀기 위한 노력을 포함하세요."
    },
    "teacherNote": "오해를 풀기 위한 명확한 설명과 진심을 전달하는 표현을 연습하도록 지도합니다.",
    "tags": [
      "오해",
      "소통",
      "관계"
    ]
  },
  {
    "id": "relation-breakup",
    "titleKo": "이별",
    "titleJp": "別れ",
    "level": "N2",
    "category": "관계와감정",
    "activity": "작문",
    "style": "캐주얼",
    "duration": 30,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "이별을 경험했을 때 가장 힘들었던 점은 무엇인가요?",
        "jp": "別れを経験した時、最も辛かったことは何ですか。"
      },
      {
        "ko": "이별 후 어떻게 마음을 정리하려고 노력하나요?",
        "jp": "別れの後、どのように気持ちを整理しようと努力しますか。"
      },
      {
        "ko": "친구의 이별을 위로할 때 어떤 말을 해주나요?",
        "jp": "友達の別れを慰める時、どのような言葉をかけますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "이별이 가져다주는 긍정적인 변화도 있을까요?",
        "jp": "別れがもたらす肯定的な変化もあるでしょうか。"
      },
      {
        "ko": "이별 후에도 좋은 친구로 남을 수 있다고 생각하나요?",
        "jp": "別れた後も良い友達でいられると思いますか。"
      },
      {
        "ko": "영화나 드라마에서 인상 깊었던 이별 장면이 있나요?",
        "jp": "映画やドラマで印象深かった別れのシーンがありますか。"
      }
    ],
    "roleplay": {
      "situation": "오랜 연인과 헤어지는 상황",
      "roleA": "이별을 고하는 사람",
      "roleB": "이별을 받아들이는 사람"
    },
    "expressions": [
      {
        "word": "別れる",
        "reading": "わかれる",
        "meaning": "헤어지다",
        "example": "彼と別れた。"
      },
      {
        "word": "辛い",
        "reading": "つらい",
        "meaning": "괴롭다, 힘들다",
        "example": "とても辛い気持ちだ。"
      },
      {
        "word": "乗り越える",
        "reading": "のりこえる",
        "meaning": "극복하다",
        "example": "悲しみを乗り越える。"
      },
      {
        "word": "前向きに",
        "reading": "まえむきに",
        "meaning": "긍정적으로",
        "example": "前向きに考える。"
      },
      {
        "word": "思い出",
        "reading": "おもいで",
        "meaning": "추억",
        "example": "良い思い出になった。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "私たち、別れよう。",
        "translation": "우리, 헤어지자."
      },
      {
        "speaker": "B",
        "text": "急にどうしたの？",
        "translation": "갑자기 왜 그래?"
      },
      {
        "speaker": "A",
        "text": "もうこれ以上、一緒にいるのは難しいと思う。",
        "translation": "더 이상 함께 있는 건 어렵다고 생각해."
      },
      {
        "speaker": "B",
        "text": "そうか。君がそう思うなら仕方ないね。",
        "translation": "그렇구나. 네가 그렇게 생각한다면 어쩔 수 없지."
      },
      {
        "speaker": "A",
        "text": "今まで本当にありがとう。",
        "translation": "지금까지 정말 고마웠어."
      },
      {
        "speaker": "B",
        "text": "こちらこそ。幸せになってね。",
        "translation": "나야말로. 행복해."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜よう",
        "function": "권유, 의지",
        "example": "別れよう。",
        "translation": "헤어지자."
      },
      {
        "pattern": "〜これ以上〜ない",
        "function": "더 이상 ~할 수 없다",
        "example": "これ以上待てない。",
        "translation": "더 이상 기다릴 수 없다."
      },
      {
        "pattern": "〜なら仕方ない",
        "function": "~라면 어쩔 수 없다",
        "example": "雨なら仕方ない。",
        "translation": "비라면 어쩔 수 없다."
      }
    ],
    "writingMission": {
      "prompt": "이별 후의 감정과 그 감정을 어떻게 극복했는지에 대해 작성하세요.",
      "promptJp": "別れ後の感情と、その感情をどのように克服したかについて書きなさい。",
      "minChars": 200,
      "hint": "이별의 아픔, 극복 과정, 그리고 그 경험을 통해 배운 점을 포함하세요."
    },
    "teacherNote": "이별과 관련된 감정 표현과 극복 과정을 이야기하는 연습을 지도합니다.",
    "tags": [
      "이별",
      "감정",
      "극복"
    ]
  },
  {
    "id": "relation-reunion",
    "titleKo": "재회",
    "titleJp": "再会",
    "level": "N4",
    "category": "관계와감정",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "오랜만에 만난 친구나 가족이 있나요?",
        "jp": "久しぶりに会った友達や家族がいますか。"
      },
      {
        "ko": "재회했을 때 가장 먼저 어떤 말을 건네나요?",
        "jp": "再会した時、一番最初にどのような言葉をかけますか。"
      },
      {
        "ko": "재회하고 싶은 사람이 있나요?",
        "jp": "再会したい人がいますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "예상치 못한 재회가 감정에 어떤 영향을 미칠까요?",
        "jp": "予期せぬ再会が感情にどのような影響を与えるでしょうか。"
      },
      {
        "ko": "재회 후 관계를 다시 시작하는 것이 항상 좋은 선택일까요?",
        "jp": "再会後、関係を再び始めることが常に良い選択でしょうか。"
      },
      {
        "ko": "영화나 드라마에서 인상 깊었던 재회 장면이 있나요?",
        "jp": "映画やドラマで印象深かった再会のシーンがありますか。"
      }
    ],
    "roleplay": {
      "situation": "오랜만에 해외에서 돌아온 친구와 공항에서 재회하는 상황",
      "roleA": "해외에서 돌아온 친구",
      "roleB": "친구를 마중 나간 사람"
    },
    "expressions": [
      {
        "word": "再会",
        "reading": "さいかい",
        "meaning": "재회",
        "example": "感動の再会。"
      },
      {
        "word": "久しぶり",
        "reading": "ひさしぶり",
        "meaning": "오랜만",
        "example": "久しぶりだね。"
      },
      {
        "word": "元気だった？",
        "reading": "げんきだった？",
        "meaning": "잘 지냈어?",
        "example": "元気だった？変わらないね。"
      },
      {
        "word": "会いたかった",
        "reading": "あいたかった",
        "meaning": "보고 싶었어",
        "example": "ずっと会いたかったよ。"
      },
      {
        "word": "積もる話",
        "reading": "つもるはなし",
        "meaning": "할 이야기가 많다",
        "example": "積もる話がある。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "B！久しぶり！元気だった？",
        "translation": "B! 오랜만이야! 잘 지냈어?"
      },
      {
        "speaker": "B",
        "text": "A！会いたかったよ！元気だったよ。",
        "translation": "A! 보고 싶었어! 잘 지냈어."
      },
      {
        "speaker": "A",
        "text": "全然変わってないね！",
        "translation": "전혀 안 변했네!"
      },
      {
        "speaker": "B",
        "text": "Aもね！さあ、積もる話もあるし、どこか行こうか。",
        "translation": "A도! 자, 할 이야기도 많으니, 어디 갈까."
      },
      {
        "speaker": "A",
        "text": "うん！そうしよう！",
        "translation": "응! 그렇게 하자!"
      },
      {
        "speaker": "B",
        "text": "おかえり！",
        "translation": "어서 와!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ぶり",
        "function": "~만에",
        "example": "1年ぶり。",
        "translation": "1년 만."
      },
      {
        "pattern": "〜てないね",
        "function": "~하지 않았네 (변화 없음)",
        "example": "変わってないね。",
        "translation": "안 변했네."
      },
      {
        "pattern": "〜もあるし",
        "function": "~도 있고 (이유, 첨가)",
        "example": "時間もあるし。",
        "translation": "시간도 있고."
      }
    ],
    "writingMission": {
      "prompt": "오랜만에 재회하고 싶은 사람에게 보내는 메시지를 작성하세요.",
      "promptJp": "久しぶりに再会したい人に送るメッセージを作成しなさい。",
      "minChars": 150,
      "hint": "그 사람과의 추억, 보고 싶은 마음, 그리고 다시 만나고 싶은 이유를 포함하세요."
    },
    "teacherNote": "재회 상황에서 사용되는 반가움과 그리움을 표현하는 다양한 표현을 연습하도록 지도합니다.",
    "tags": [
      "재회",
      "그리움",
      "친구"
    ]
  },
  {
    "id": "relation-gift",
    "titleKo": "선물",
    "titleJp": "プレゼント",
    "level": "N4",
    "category": "관계와감정",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "선물을 주는 것과 받는 것 중 어느 것을 더 좋아하나요?",
        "jp": "プレゼントをあげるのと貰うの、どちらが好きですか。"
      },
      {
        "ko": "가장 기억에 남는 선물은 무엇인가요?",
        "jp": "一番記憶に残っているプレゼントは何ですか。"
      },
      {
        "ko": "선물을 고를 때 가장 중요하게 생각하는 것은 무엇인가요?",
        "jp": "プレゼントを選ぶ時、最も重要だと思うことは何ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "선물에 담긴 의미가 가격보다 중요하다고 생각하나요?",
        "jp": "プレゼントに込められた意味が価格より重要だと思いますか。"
      },
      {
        "ko": "일본의 선물 문화에는 어떤 특징이 있을까요?",
        "jp": "日本のプレゼント文化にはどのような特徴があるでしょうか。"
      },
      {
        "ko": "선물을 거절해야 하는 상황이라면 어떻게 표현할까요?",
        "jp": "プレゼントを断らなければならない状況なら、どのように表現しますか。"
      }
    ],
    "roleplay": {
      "situation": "생일 선물을 주고받는 상황",
      "roleA": "선물을 주는 사람",
      "roleB": "선물을 받는 사람"
    },
    "expressions": [
      {
        "word": "贈る",
        "reading": "おくる",
        "meaning": "선물하다",
        "example": "友達にプレゼントを贈る。"
      },
      {
        "word": "喜ぶ",
        "reading": "よろこぶ",
        "meaning": "기뻐하다",
        "example": "喜んでくれると嬉しい。"
      },
      {
        "word": "選ぶ",
        "reading": "えらぶ",
        "meaning": "고르다",
        "example": "プレゼントを選ぶ。"
      },
      {
        "word": "気持ち",
        "reading": "きもち",
        "meaning": "마음, 기분",
        "example": "気持ちがこもっている。"
      },
      {
        "word": "感謝",
        "reading": "かんしゃ",
        "meaning": "감사",
        "example": "感謝の気持ちを伝える。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "誕生日おめでとう！これ、プレゼント。",
        "translation": "생일 축하해! 이거, 선물이야."
      },
      {
        "speaker": "B",
        "text": "わあ、ありがとう！開けてもいい？",
        "translation": "와, 고마워! 열어봐도 돼?"
      },
      {
        "speaker": "A",
        "text": "もちろん！気に入ってくれると嬉しいな。",
        "translation": "물론이지! 마음에 들면 좋겠어."
      },
      {
        "speaker": "B",
        "text": "すごい！ずっと欲しかったものだ！ありがとう！",
        "translation": "대박! 계속 갖고 싶었던 거야! 고마워!"
      },
      {
        "speaker": "A",
        "text": "喜んでくれてよかった。",
        "translation": "기뻐해 줘서 다행이다."
      },
      {
        "speaker": "B",
        "text": "大切にするね！",
        "translation": "소중히 할게!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てくれると嬉しい",
        "function": "~해 주면 기쁘다 (희망)",
        "example": "来てくれると嬉しい。",
        "translation": "와 주면 기쁘다."
      },
      {
        "pattern": "〜てよかった",
        "function": "~해서 다행이다",
        "example": "間に合ってよかった。",
        "translation": "제시간에 도착해서 다행이다."
      },
      {
        "pattern": "〜にする",
        "function": "~으로 하다",
        "example": "大切にする。",
        "translation": "소중히 하다."
      }
    ],
    "writingMission": {
      "prompt": "가장 기억에 남는 선물과 그 선물이 특별했던 이유에 대해 작성하세요.",
      "promptJp": "一番記憶に残っているプレゼントと、そのプレゼントが特別だった理由について書きなさい。",
      "minChars": 150,
      "hint": "선물의 종류, 누가 주었는지, 어떤 상황이었는지, 그리고 어떤 의미가 있었는지 포함하세요."
    },
    "teacherNote": "선물을 주고받는 상황에서 사용되는 다양한 표현과 감정 전달 방법을 지도합니다.",
    "tags": [
      "선물",
      "감사",
      "기념일"
    ]
  },
  {
    "id": "relation-compliment",
    "titleKo": "칭찬",
    "titleJp": "褒める",
    "level": "N4",
    "category": "관계와감정",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "칭찬을 들으면 어떤 기분이 드나요?",
        "jp": "褒められるとどんな気持ちになりますか。"
      },
      {
        "ko": "다른 사람을 칭찬하는 것이 어렵다고 느끼나요?",
        "jp": "他人を褒めることが難しいと感じますか。"
      },
      {
        "ko": "가장 최근에 누군가를 칭찬했던 경험은 언제인가요?",
        "jp": "一番最近誰かを褒めた経験はいつですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "칭찬이 관계에 긍정적인 영향을 미치는 이유는 무엇일까요?",
        "jp": "褒めることが関係に肯定的な影響を与える理由は何でしょうか。"
      },
      {
        "ko": "일본에서는 칭찬을 어떻게 받아들이는 것이 일반적인가요?",
        "jp": "日本では褒め言葉をどのように受け止めるのが一般的ですか。"
      },
      {
        "ko": "진심이 담긴 칭찬과 빈말 칭찬을 어떻게 구별할 수 있을까요?",
        "jp": "心からの褒め言葉とお世辞の褒め言葉をどのように区別できますか。"
      }
    ],
    "roleplay": {
      "situation": "친구의 새로운 헤어스타일을 칭찬하는 상황",
      "roleA": "친구의 헤어스타일을 칭찬하는 사람",
      "roleB": "칭찬을 받는 친구"
    },
    "expressions": [
      {
        "word": "褒める",
        "reading": "ほめる",
        "meaning": "칭찬하다",
        "example": "彼の努力を褒める。"
      },
      {
        "word": "素敵",
        "reading": "すてき",
        "meaning": "멋지다, 근사하다",
        "example": "素敵な服ですね。"
      },
      {
        "word": "似合う",
        "reading": "にあう",
        "meaning": "어울리다",
        "example": "よく似合っています。"
      },
      {
        "word": "嬉しい",
        "reading": "うれしい",
        "meaning": "기쁘다",
        "example": "褒められて嬉しい。"
      },
      {
        "word": "恐縮です",
        "reading": "きょうしゅくです",
        "meaning": "황송합니다, 죄송합니다",
        "example": "お褒めの言葉、恐縮です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "わあ、その髪型、すごく似合ってるね！",
        "translation": "와, 그 헤어스타일, 정말 잘 어울린다!"
      },
      {
        "speaker": "B",
        "text": "本当？ありがとう！",
        "translation": "정말? 고마워!"
      },
      {
        "speaker": "A",
        "text": "うん、すごく素敵だよ。雰囲気変わったね。",
        "translation": "응, 정말 멋져. 분위기 바뀌었네."
      },
      {
        "speaker": "B",
        "text": "嬉しいな。実は昨日変えたばかりなんだ。",
        "translation": "기쁘다. 실은 어제 막 바꿨어."
      },
      {
        "speaker": "A",
        "text": "大成功だね！",
        "translation": "대성공이네!"
      },
      {
        "speaker": "B",
        "text": "ありがとう！",
        "translation": "고마워!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜似合ってるね",
        "function": "~잘 어울리네 (칭찬)",
        "example": "服が似合ってるね。",
        "translation": "옷이 잘 어울리네."
      },
      {
        "pattern": "〜ばかり",
        "function": "막 ~한 참이다",
        "example": "食べたばかり。",
        "translation": "막 먹은 참이다."
      },
      {
        "pattern": "〜てよかった",
        "function": "~해서 다행이다",
        "example": "成功してよかった。",
        "translation": "성공해서 다행이다."
      }
    ],
    "writingMission": {
      "prompt": "친구의 장점을 칭찬하는 메시지를 작성하세요.",
      "promptJp": "友達の良い点を褒めるメッセージを作成しなさい。",
      "minChars": 100,
      "hint": "구체적인 장점과 그 장점이 친구에게 어떤 긍정적인 영향을 주는지 포함하세요."
    },
    "teacherNote": "칭찬을 자연스럽게 주고받는 연습을 통해 긍정적인 관계를 형성하도록 지도합니다.",
    "tags": [
      "칭찬",
      "관계",
      "긍정"
    ]
  },
  {
    "id": "relation-worry",
    "titleKo": "고민 상담",
    "titleJp": "悩み相談",
    "level": "N3",
    "category": "관계와감정",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "고민이 있을 때 누구에게 상담하나요?",
        "jp": "悩みがある時、誰に相談しますか。"
      },
      {
        "ko": "고민 상담을 해주는 것이 어렵다고 느끼나요?",
        "jp": "悩み相談に乗ることが難しいと感じますか。"
      },
      {
        "ko": "가장 최근에 고민 상담을 했던 경험은 언제인가요?",
        "jp": "一番最近悩み相談をした経験はいつですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "고민 상담을 할 때 가장 중요하게 생각하는 것은 무엇인가요?",
        "jp": "悩み相談をする時、最も重要だと思うことは何ですか。"
      },
      {
        "ko": "고민 상담을 통해 관계가 더 깊어진 경험이 있나요?",
        "jp": "悩み相談を通じて関係がより深まった経験がありますか。"
      },
      {
        "ko": "고민 상담 시 조언과 공감 중 어느 것이 더 중요할까요?",
        "jp": "悩み相談の際、アドバイスと共感、どちらがより重要でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "직장 문제로 고민하는 친구에게 상담해주는 상황",
      "roleA": "고민을 털어놓는 사람",
      "roleB": "고민을 들어주고 조언하는 사람"
    },
    "expressions": [
      {
        "word": "悩み",
        "reading": "なやみ",
        "meaning": "고민",
        "example": "悩みを抱える。"
      },
      {
        "word": "相談する",
        "reading": "そうだんする",
        "meaning": "상담하다",
        "example": "友達に相談する。"
      },
      {
        "word": "アドバイス",
        "reading": "アドバイス",
        "meaning": "조언",
        "example": "アドバイスをもらう。"
      },
      {
        "word": "共感する",
        "reading": "きょうかんする",
        "meaning": "공감하다",
        "example": "彼の気持ちに共感する。"
      },
      {
        "word": "力になる",
        "reading": "ちからになる",
        "meaning": "힘이 되다",
        "example": "少しでも力になりたい。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、仕事のことで悩んでいて。",
        "translation": "요즘, 일 때문에 고민이 있어서."
      },
      {
        "speaker": "B",
        "text": "そうなんだ。話せる範囲で聞かせてくれる？",
        "translation": "그렇구나. 이야기할 수 있는 범위에서 들려줄래?"
      },
      {
        "speaker": "A",
        "text": "実は、新しいプロジェクトのプレッシャーが大きくて。",
        "translation": "실은, 새로운 프로젝트의 압박이 커서."
      },
      {
        "speaker": "B",
        "text": "それは大変だね。もしよかったら、私の経験談も話そうか？",
        "translation": "그거 힘들겠다. 혹시 괜찮다면, 내 경험담도 이야기해 줄까?"
      },
      {
        "speaker": "A",
        "text": "うん、ぜひ聞きたい。",
        "translation": "응, 꼭 듣고 싶어."
      },
      {
        "speaker": "B",
        "text": "一人で抱え込まずに、いつでも頼ってね。",
        "translation": "혼자 끙끙 앓지 말고, 언제든지 의지해."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ていて",
        "function": "~하고 있어서 (상태, 이유)",
        "example": "疲れていて。",
        "translation": "피곤해서."
      },
      {
        "pattern": "〜範囲で",
        "function": "~범위에서",
        "example": "できる範囲で。",
        "translation": "할 수 있는 범위에서."
      },
      {
        "pattern": "〜たら〜ようか",
        "function": "~하면 ~할까 (제안)",
        "example": "終わったら行こうか。",
        "translation": "끝나면 갈까?"
      }
    ],
    "writingMission": {
      "prompt": "친구의 고민을 듣고 위로와 조언을 해주는 메시지를 작성하세요.",
      "promptJp": "友達の悩みを聞いて慰めとアドバイスをするメッセージを作成しなさい。",
      "minChars": 200,
      "hint": "친구의 상황에 공감하고, 구체적인 조언이나 격려의 말을 포함하세요."
    },
    "teacherNote": "고민 상담 시 경청하는 자세와 적절한 조언, 공감 표현을 연습하도록 지도합니다.",
    "tags": [
      "고민",
      "상담",
      "조언"
    ]
  },
  {
    "id": "relation-emotion-expression",
    "titleKo": "감정 표현",
    "titleJp": "感情表現",
    "level": "N1",
    "category": "관계와감정",
    "activity": "발표",
    "style": "정중체",
    "duration": 35,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "자신의 감정을 솔직하게 표현하는 편인가요?",
        "jp": "自分の感情を正直に表現する方ですか。"
      },
      {
        "ko": "감정 표현이 서툴다고 느낄 때가 있나요?",
        "jp": "感情表現が苦手だと感じる時がありますか。"
      },
      {
        "ko": "어떤 감정을 표현하는 것이 가장 어렵나요?",
        "jp": "どのような感情を表現するのが最も難しいですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "언어에 따라 감정을 표현하는 방식이 어떻게 다를까요?",
        "jp": "言語によって感情を表現する方法がどう違うでしょうか。"
      },
      {
        "ko": "일본의 '혼네(본심)'와 '다테마에(겉치레)' 문화가 감정 표현에 미치는 영향은 무엇일까요?",
        "jp": "日本の「本音」と「建前」の文化が感情表現に及ぼす影響は何でしょうか。"
      },
      {
        "ko": "디지털 시대에 이모티콘이 감정 표현을 대체하는 현상에 대해 어떻게 생각하나요?",
        "jp": "デジタル時代に絵文字が感情表現を代替する現象についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "복잡한 감정을 느끼는 상황에서 자신의 마음을 정확히 전달하는 상황",
      "roleA": "서운함과 고마움이 교차하는 복잡한 심경을 전하는 사람",
      "roleB": "그 감정을 주의 깊게 듣고 공감하는 사람"
    },
    "expressions": [
      {
        "word": "感情",
        "reading": "かんじょう",
        "meaning": "감정",
        "example": "感情をコントロールする。"
      },
      {
        "word": "本音",
        "reading": "ほんね",
        "meaning": "본심",
        "example": "本音を語り合う。"
      },
      {
        "word": "建前",
        "reading": "たてまえ",
        "meaning": "겉치레, 명분",
        "example": "建前と本音を使い分ける。"
      },
      {
        "word": "抑える",
        "reading": "おさえる",
        "meaning": "억누르다",
        "example": "怒りを抑えるのが難しい。"
      },
      {
        "word": "察する",
        "reading": "さっする",
        "meaning": "헤아리다, 짐작하다",
        "example": "相手の気持ちを察する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "実は、今回のプロジェクトから外されたこと、非常に遺憾に思っています。",
        "translation": "사실, 이번 프로젝트에서 제외된 것, 매우 유감스럽게 생각합니다."
      },
      {
        "speaker": "B",
        "text": "お気持ちは察します。理不尽に感じるのも無理はありません。",
        "translation": "그 마음 헤아립니다. 불합리하다고 느끼는 것도 무리는 아닙니다."
      },
      {
        "speaker": "A",
        "text": "ええ。ただ、同時に私の力不足を痛感し、情けない気持ちでもあります。",
        "translation": "네. 다만, 동시에 저의 역량 부족을 통감하며, 한심한 마음이기도 합니다."
      },
      {
        "speaker": "B",
        "text": "ご自身を責める必要はありません。会社としての苦渋の決断だったのです。",
        "translation": "스스로를 자책할 필요는 없습니다. 회사로서도 고심 끝에 내린 결단이었습니다."
      },
      {
        "speaker": "A",
        "text": "頭では理解しているのですが、感情の整理がつくまで少し時間がかかりそうです。",
        "translation": "머리로는 이해하고 있습니다만, 감정이 정리될 때까지 조금 시간이 걸릴 것 같습니다."
      },
      {
        "speaker": "B",
        "text": "焦らず、ゆっくり気持ちを切り替えていってください。",
        "translation": "조급해하지 말고, 천천히 마음을 추스르세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に思っている",
        "function": "지속적인 감정 상태",
        "example": "遺憾に思っています。",
        "translation": "유감스럽게 생각하고 있습니다."
      },
      {
        "pattern": "〜のも無理はない",
        "function": "당연함",
        "example": "怒るのも無理はない。",
        "translation": "화내는 것도 무리는 아니다."
      },
      {
        "pattern": "〜がつく",
        "function": "상태의 성립",
        "example": "整理がつく。",
        "translation": "정리가 되다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 모국어와 일본어의 감정 표현 방식의 차이에 대해 분석하는 발표문을 작성하세요.",
      "promptJp": "自分の母語と日本語の感情表現方法の違いについて分析する発表原稿を作成しなさい。",
      "minChars": 400,
      "hint": "문화적 배경(혼네와 다테마에 등)을 근거로 들어 논리적으로 전개하세요."
    },
    "teacherNote": "N1 수준의 고급 감정 어휘(遺憾、痛感、苦渋)를 활용하여 복잡한 심경을 표현하는 연습을 합니다.",
    "tags": [
      "감정",
      "본심",
      "문화차이"
    ]
  },
  {
    "id": "social-저출산-0",
    "titleKo": "저출산",
    "titleJp": "日本の저출산について",
    "level": "N4",
    "category": "사회이슈",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 23,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 저출산에 대해 들어본 적이 있나요?",
        "jp": "最近、저출산について聞いたことがありますか？"
      },
      {
        "ko": "저출산에 대해 어떻게 생각하세요?",
        "jp": "저출산についてどう思いますか？"
      },
      {
        "ko": "저출산가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "저출산が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "저출산 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "저출산の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 저출산에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に저출산について何か経験がありますか？"
      },
      {
        "ko": "저출산와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "저출산に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "저출산에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 저출산에 대한 뉴스를 봤어요.",
        "translation": "最近、저출산に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "저출산について話しましょう。",
        "translation": "저출산에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "저출산에 대한 자신의 의견을 작성하세요.",
      "promptJp": "저출산についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "저출산의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "저출산는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "저출산"
    ]
  },
  {
    "id": "social-고령-1",
    "titleKo": "고령화",
    "titleJp": "日本の고령화について",
    "level": "N2",
    "category": "사회이슈",
    "activity": "발표",
    "style": "정중체",
    "duration": 23,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 고령화에 대해 들어본 적이 있나요?",
        "jp": "最近、고령화について聞いたことがありますか？"
      },
      {
        "ko": "고령화에 대해 어떻게 생각하세요?",
        "jp": "고령화についてどう思いますか？"
      },
      {
        "ko": "고령화가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "고령화が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "고령화 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "고령화の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 고령화에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に고령화について何か経験がありますか？"
      },
      {
        "ko": "고령화와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "고령화に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "고령화에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 고령화에 대한 뉴스를 봤어요.",
        "translation": "最近、고령화に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "고령화について話しましょう。",
        "translation": "고령화에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "고령화에 대한 자신의 의견을 작성하세요.",
      "promptJp": "고령화についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "고령화의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "고령화는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "고령화"
    ]
  },
  {
    "id": "social-환경오염-2",
    "titleKo": "환경오염",
    "titleJp": "日本の환경오염について",
    "level": "N4",
    "category": "사회이슈",
    "activity": "작문",
    "style": "비즈니스",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "최근 환경오염에 대해 들어본 적이 있나요?",
        "jp": "最近、환경오염について聞いたことがありますか？"
      },
      {
        "ko": "환경오염에 대해 어떻게 생각하세요?",
        "jp": "환경오염についてどう思いますか？"
      },
      {
        "ko": "환경오염가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "환경오염が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "환경오염 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "환경오염の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 환경오염에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に환경오염について何か経験がありますか？"
      },
      {
        "ko": "환경오염와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "환경오염に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "환경오염에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 환경오염에 대한 뉴스를 봤어요.",
        "translation": "最近、환경오염に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "환경오염について話しましょう。",
        "translation": "환경오염에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "환경오염에 대한 자신의 의견을 작성하세요.",
      "promptJp": "환경오염についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "환경오염의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "환경오염는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "환경오염"
    ]
  },
  {
    "id": "social-재생-3",
    "titleKo": "재생에너지",
    "titleJp": "日本の재생에너지について",
    "level": "N1",
    "category": "사회이슈",
    "activity": "작문",
    "style": "정중체",
    "duration": 27,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 재생에너지에 대해 들어본 적이 있나요?",
        "jp": "最近、재생에너지について聞いたことがありますか？"
      },
      {
        "ko": "재생에너지에 대해 어떻게 생각하세요?",
        "jp": "재생에너지についてどう思いますか？"
      },
      {
        "ko": "재생에너지가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "재생에너지が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "재생에너지 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "재생에너지の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 재생에너지에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に재생에너지について何か経験がありますか？"
      },
      {
        "ko": "재생에너지와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "재생에너지に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "재생에너지에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 재생에너지에 대한 뉴스를 봤어요.",
        "translation": "最近、재생에너지に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "재생에너지について話しましょう。",
        "translation": "재생에너지에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "재생에너지에 대한 자신의 의견을 작성하세요.",
      "promptJp": "재생에너지についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "재생에너지의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "재생에너지는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "재생에너지"
    ]
  },
  {
    "id": "social-ai일자리-4",
    "titleKo": "AI와 일자리",
    "titleJp": "日本のAIと 일자리について",
    "level": "N3",
    "category": "사회이슈",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 38,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "최근 AI와 일자리에 대해 들어본 적이 있나요?",
        "jp": "最近、AIと 일자리について聞いたことがありますか？"
      },
      {
        "ko": "AI와 일자리에 대해 어떻게 생각하세요?",
        "jp": "AIと 일자리についてどう思いますか？"
      },
      {
        "ko": "AI와 일자리가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "AIと 일자리が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "AI와 일자리 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "AIと 일자리の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 AI와 일자리에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的にAIと 일자리について何か経験がありますか？"
      },
      {
        "ko": "AI와 일자리와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "AIと 일자리に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "AI와 일자리에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 AI와 일자리에 대한 뉴스를 봤어요.",
        "translation": "最近、AIと 일자리に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "AI와 일자리について話しましょう。",
        "translation": "AI와 일자리에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "AI와 일자리에 대한 자신의 의견을 작성하세요.",
      "promptJp": "AIと 일자리についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "AI와 일자리의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "AI와 일자리는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "AI와"
    ]
  },
  {
    "id": "social-격차사회-5",
    "titleKo": "격차사회",
    "titleJp": "日本の격차사회について",
    "level": "N3",
    "category": "사회이슈",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 34,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 격차사회에 대해 들어본 적이 있나요?",
        "jp": "最近、격차사회について聞いたことがありますか？"
      },
      {
        "ko": "격차사회에 대해 어떻게 생각하세요?",
        "jp": "격차사회についてどう思いますか？"
      },
      {
        "ko": "격차사회가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "격차사회が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "격차사회 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "격차사회の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 격차사회에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に격차사회について何か経験がありますか？"
      },
      {
        "ko": "격차사회와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "격차사회に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "격차사회에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 격차사회에 대한 뉴스를 봤어요.",
        "translation": "最近、격차사회に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "격차사회について話しましょう。",
        "translation": "격차사회에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "격차사회에 대한 자신의 의견을 작성하세요.",
      "promptJp": "격차사회についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "격차사회의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "격차사회는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "격차사회"
    ]
  },
  {
    "id": "social-이민정책-6",
    "titleKo": "이민정책",
    "titleJp": "日本の이민정책について",
    "level": "N5",
    "category": "사회이슈",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 26,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "최근 이민정책에 대해 들어본 적이 있나요?",
        "jp": "最近、이민정책について聞いたことがありますか？"
      },
      {
        "ko": "이민정책에 대해 어떻게 생각하세요?",
        "jp": "이민정책についてどう思いますか？"
      },
      {
        "ko": "이민정책가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "이민정책が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "이민정책 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "이민정책の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 이민정책에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に이민정책について何か経験がありますか？"
      },
      {
        "ko": "이민정책와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "이민정책に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "이민정책에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 이민정책에 대한 뉴스를 봤어요.",
        "translation": "最近、이민정책に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "이민정책について話しましょう。",
        "translation": "이민정책에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "이민정책에 대한 자신의 의견을 작성하세요.",
      "promptJp": "이민정책についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "이민정책의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "이민정책는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "이민정책"
    ]
  },
  {
    "id": "social-젠더평등-7",
    "titleKo": "젠더평등",
    "titleJp": "日本の젠더평등について",
    "level": "N4",
    "category": "사회이슈",
    "activity": "발표",
    "style": "캐주얼",
    "duration": 39,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "최근 젠더평등에 대해 들어본 적이 있나요?",
        "jp": "最近、젠더평등について聞いたことがありますか？"
      },
      {
        "ko": "젠더평등에 대해 어떻게 생각하세요?",
        "jp": "젠더평등についてどう思いますか？"
      },
      {
        "ko": "젠더평등가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "젠더평등が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "젠더평등 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "젠더평등の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 젠더평등에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に젠더평등について何か経験がありますか？"
      },
      {
        "ko": "젠더평등와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "젠더평등に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "젠더평등에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 젠더평등에 대한 뉴스를 봤어요.",
        "translation": "最近、젠더평등に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "젠더평등について話しましょう。",
        "translation": "젠더평등에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "젠더평등에 대한 자신의 의견을 작성하세요.",
      "promptJp": "젠더평등についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "젠더평등의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "젠더평등는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "젠더평등"
    ]
  },
  {
    "id": "social-정신건강-8",
    "titleKo": "정신건강",
    "titleJp": "日本の정신건강について",
    "level": "N3",
    "category": "사회이슈",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 36,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 정신건강에 대해 들어본 적이 있나요?",
        "jp": "最近、정신건강について聞いたことがありますか？"
      },
      {
        "ko": "정신건강에 대해 어떻게 생각하세요?",
        "jp": "정신건강についてどう思いますか？"
      },
      {
        "ko": "정신건강가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "정신건강が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "정신건강 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "정신건강の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 정신건강에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に정신건강について何か経験がありますか？"
      },
      {
        "ko": "정신건강와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "정신건강に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "정신건강에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 정신건강에 대한 뉴스를 봤어요.",
        "translation": "最近、정신건강に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "정신건강について話しましょう。",
        "translation": "정신건강에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "정신건강에 대한 자신의 의견을 작성하세요.",
      "promptJp": "정신건강についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "정신건강의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "정신건강는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "정신건강"
    ]
  },
  {
    "id": "social-학교폭력-9",
    "titleKo": "학교폭력",
    "titleJp": "日本の학교폭력について",
    "level": "N4",
    "category": "사회이슈",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 28,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "최근 학교폭력에 대해 들어본 적이 있나요?",
        "jp": "最近、학교폭력について聞いたことがありますか？"
      },
      {
        "ko": "학교폭력에 대해 어떻게 생각하세요?",
        "jp": "학교폭력についてどう思いますか？"
      },
      {
        "ko": "학교폭력가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "학교폭력が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "학교폭력 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "학교폭력の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 학교폭력에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に학교폭력について何か経験がありますか？"
      },
      {
        "ko": "학교폭력와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "학교폭력に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "학교폭력에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 학교폭력에 대한 뉴스를 봤어요.",
        "translation": "最近、학교폭력に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "학교폭력について話しましょう。",
        "translation": "학교폭력에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "학교폭력에 대한 자신의 의견을 작성하세요.",
      "promptJp": "학교폭력についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "학교폭력의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "학교폭력는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "학교폭력"
    ]
  },
  {
    "id": "social-인터넷범죄-10",
    "titleKo": "인터넷범죄",
    "titleJp": "日本の인터넷범죄について",
    "level": "N3",
    "category": "사회이슈",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 29,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "최근 인터넷범죄에 대해 들어본 적이 있나요?",
        "jp": "最近、인터넷범죄について聞いたことがありますか？"
      },
      {
        "ko": "인터넷범죄에 대해 어떻게 생각하세요?",
        "jp": "인터넷범죄についてどう思いますか？"
      },
      {
        "ko": "인터넷범죄가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "인터넷범죄が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "인터넷범죄 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "인터넷범죄の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 인터넷범죄에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に인터넷범죄について何か経験がありますか？"
      },
      {
        "ko": "인터넷범죄와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "인터넷범죄に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "인터넷범죄에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 인터넷범죄에 대한 뉴스를 봤어요.",
        "translation": "最近、인터넷범죄に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "인터넷범죄について話しましょう。",
        "translation": "인터넷범죄에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "인터넷범죄에 대한 자신의 의견을 작성하세요.",
      "promptJp": "인터넷범죄についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "인터넷범죄의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "인터넷범죄는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "인터넷범죄"
    ]
  },
  {
    "id": "social-식량-11",
    "titleKo": "식량문제",
    "titleJp": "日本の식량문제について",
    "level": "N5",
    "category": "사회이슈",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 33,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "최근 식량문제에 대해 들어본 적이 있나요?",
        "jp": "最近、식량문제について聞いたことがありますか？"
      },
      {
        "ko": "식량문제에 대해 어떻게 생각하세요?",
        "jp": "식량문제についてどう思いますか？"
      },
      {
        "ko": "식량문제가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "식량문제が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "식량문제 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "식량문제の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 식량문제에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に식량문제について何か経験がありますか？"
      },
      {
        "ko": "식량문제와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "식량문제に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "식량문제에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 식량문제에 대한 뉴스를 봤어요.",
        "translation": "最近、식량문제に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "식량문제について話しましょう。",
        "translation": "식량문제에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "식량문제에 대한 자신의 의견을 작성하세요.",
      "promptJp": "식량문제についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "식량문제의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "식량문제는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "식량문제"
    ]
  },
  {
    "id": "social-주거-12",
    "titleKo": "주거문제",
    "titleJp": "日本の주거문제について",
    "level": "N4",
    "category": "사회이슈",
    "activity": "발표",
    "style": "캐주얼",
    "duration": 32,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 주거문제에 대해 들어본 적이 있나요?",
        "jp": "最近、주거문제について聞いたことがありますか？"
      },
      {
        "ko": "주거문제에 대해 어떻게 생각하세요?",
        "jp": "주거문제についてどう思いますか？"
      },
      {
        "ko": "주거문제가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "주거문제が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "주거문제 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "주거문제의 해결을 위해 어떤 노력이 필요하다고 생각하세요?"
      },
      {
        "ko": "개인적으로 주거문제에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に주거문제について何か経験がありますか？"
      },
      {
        "ko": "주거문제와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "주거문제に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "주거문제에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 주거문제에 대한 뉴스를 봤어요.",
        "translation": "最近、주거문제に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "주거문제について話しましょう。",
        "translation": "주거문제에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "주거문제에 대한 자신의 의견을 작성하세요.",
      "promptJp": "주거문제についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "주거문제의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "주거문제는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "주거문제"
    ]
  },
  {
    "id": "social-교육격차-13",
    "titleKo": "교육격차",
    "titleJp": "日本の교육격차について",
    "level": "N3",
    "category": "사회이슈",
    "activity": "페어대화",
    "style": "비즈니스",
    "duration": 25,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "최근 교육격차에 대해 들어본 적이 있나요?",
        "jp": "最近、교육격차について聞いたことがありますか？"
      },
      {
        "ko": "교육격차에 대해 어떻게 생각하세요?",
        "jp": "교육격차についてどう思いますか？"
      },
      {
        "ko": "교육격차가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "교육격차が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "교육격차 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "교육격차の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 교육격차에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に교육격차について何か経験がありますか？"
      },
      {
        "ko": "교육격차와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "교육격차に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "교육격차에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 교육격차에 대한 뉴스를 봤어요.",
        "translation": "最近、교육격차に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "교육격차について話しましょう。",
        "translation": "교육격차에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "교육격차에 대한 자신의 의견을 작성하세요.",
      "promptJp": "교육격차についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "교육격차의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "교육격차는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "교육격차"
    ]
  },
  {
    "id": "social-청년실업-14",
    "titleKo": "청년실업",
    "titleJp": "日本の청년실업について",
    "level": "N2",
    "category": "사회이슈",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 31,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 청년실업에 대해 들어본 적이 있나요?",
        "jp": "最近、청년실업について聞いたことがありますか？"
      },
      {
        "ko": "청년실업에 대해 어떻게 생각하세요?",
        "jp": "청년실업についてどう思いますか？"
      },
      {
        "ko": "청년실업가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "청년실업が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "청년실업 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "청년실업の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 청년실업에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に청년실업について何か経験がありますか？"
      },
      {
        "ko": "청년실업와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "청년실업に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "청년실업에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 청년실업에 대한 뉴스를 봤어요.",
        "translation": "最近、청년실업に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "청년실업について話しましょう。",
        "translation": "청년실업에 대해 이야기합s니다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "청년실업에 대한 자신의 의견을 작성하세요.",
      "promptJp": "청년실업についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "청년실업의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "청년실업는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "청년실업"
    ]
  },
  {
    "id": "social-소셜미디어규제-15",
    "titleKo": "소셜미디어규제",
    "titleJp": "日本の소셜미디어규제について",
    "level": "N4",
    "category": "사회이슈",
    "activity": "작문",
    "style": "캐주얼",
    "duration": 37,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "최근 소셜미디어규제에 대해 들어본 적이 있나요?",
        "jp": "最近、소셜미디어규제について聞いたことがありますか？"
      },
      {
        "ko": "소셜미디어규제에 대해 어떻게 생각하세요?",
        "jp": "소셜미디어규제についてどう思いますか？"
      },
      {
        "ko": "소셜미디어규제가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "소셜미디어규제が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "소셜미디어규제 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "소셜미디어규제の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 소셜미디어규제에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に소셜미디어규제について何か経験がありますか？"
      },
      {
        "ko": "소셜미디어규제와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "소셜미디어규제に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "소셜미디어규제에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 소셜미디어규제에 대한 뉴스를 봤어요.",
        "translation": "最近、소셜미디어규제に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "소셜미디어규제について話しましょう。",
        "translation": "소셜미디어규제에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "소셜미디어규제에 대한 자신의 의견을 작성하세요.",
      "promptJp": "소셜미디어규제についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "소셜미디어규제의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "소셜미디어규제는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "소셜미디어규제"
    ]
  },
  {
    "id": "social-동물권-16",
    "titleKo": "동물권",
    "titleJp": "日本の동물권について",
    "level": "N5",
    "category": "사회이슈",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 20,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 동물권에 대해 들어본 적이 있나요?",
        "jp": "最近、동물권について聞いたことがありますか？"
      },
      {
        "ko": "동물권에 대해 어떻게 생각하세요?",
        "jp": "동물권についてどう思いますか？"
      },
      {
        "ko": "동물권가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "동물권が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "동물권 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "동물권の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 동물권에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に동물권について何か経験がありますか？"
      },
      {
        "ko": "동물권와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "동물권に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "동물권에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 동물권에 대한 뉴스를 봤어요.",
        "translation": "最近、동물권に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "동물권について話しましょう。",
        "translation": "동물권에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "동물권에 대한 자신의 의견을 작성하세요.",
      "promptJp": "동물권についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "동물권의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "동물권는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "동물권"
    ]
  },
  {
    "id": "social-장애인복지-17",
    "titleKo": "장애인복지",
    "titleJp": "日本の장애인복지について",
    "level": "N3",
    "category": "사회이슈",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 21,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "최근 장애인복지에 대해 들어본 적이 있나요?",
        "jp": "最近、장애인복지について聞いたことがありますか？"
      },
      {
        "ko": "장애인복지에 대해 어떻게 생각하세요?",
        "jp": "장애인복지についてどう思いますか？"
      },
      {
        "ko": "장애인복지가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "장애인복지が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "장애인복지 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "장애인복지の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 장애인복지에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に장애인복지について何か経験がありますか？"
      },
      {
        "ko": "장애인복지와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "장애인복지に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "장애인복지에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 장애인복지에 대한 뉴스를 봤어요.",
        "translation": "最近、장애인복지に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "장애인복지について話しましょう。",
        "translation": "장애인복지에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "장애인복지에 대한 자신의 의견을 작성하세요.",
      "promptJp": "장애인복지についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "장애인복지의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "장애인복지는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "장애인복지"
    ]
  },
  {
    "id": "social-다문화사회-18",
    "titleKo": "다문화사회",
    "titleJp": "日本の다문화사회について",
    "level": "N4",
    "category": "사회이슈",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 22,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근 다문화사회에 대해 들어본 적이 있나요?",
        "jp": "最近、다문화사회について聞いたことがありますか？"
      },
      {
        "ko": "다문화사회에 대해 어떻게 생각하세요?",
        "jp": "다문화사회についてどう思いますか？"
      },
      {
        "ko": "다문화사회가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "다문화사회が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "다문화사회 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "다문화사회의 해결을 위해 어떤 노력이 필요하다고 생각하세요?"
      },
      {
        "ko": "개인적으로 다문화사회에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に다문화사회について何か経験がありますか？"
      },
      {
        "ko": "다문화사회와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "다문화사회に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "다문화사회에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 다문화사회에 대한 뉴스를 봤어요.",
        "translation": "最近、다문화사회に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "다문화사회について話しましょう。",
        "translation": "다문화사회에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "다문화사회에 대한 자신의 의견을 작성하세요.",
      "promptJp": "다문화사회についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "다문화사회의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "다문화사회는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "다문화사회"
    ]
  },
  {
    "id": "social-핵에너지-19",
    "titleKo": "핵에너지",
    "titleJp": "日本の핵에너지について",
    "level": "N5",
    "category": "사회이슈",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 24,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "최근 핵에너지에 대해 들어본 적이 있나요?",
        "jp": "最近、핵에너지について聞いたことがありますか？"
      },
      {
        "ko": "핵에너지에 대해 어떻게 생각하세요?",
        "jp": "핵에너지についてどう思いますか？"
      },
      {
        "ko": "핵에너지가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "핵에너지が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "핵에너지 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "핵에너지의 해결을 위해 어떤 노력이 필요하다고 생각하세요?"
      },
      {
        "ko": "개인적으로 핵에너지에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に핵에너지について何か経験がありますか？"
      },
      {
        "ko": "핵에너지와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "핵에너지に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "핵에너지에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 핵에너지에 대한 뉴스를 봤어요.",
        "translation": "最近、핵에너지に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "핵에너지について話しましょう。",
        "translation": "핵에너지에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "핵에너지에 대한 자신의 의견을 작성하세요.",
      "promptJp": "핵에너지についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "핵에너지의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "핵에너지는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "핵에너지"
    ]
  },
  {
    "id": "social-자원봉사-20",
    "titleKo": "자원봉사",
    "titleJp": "日本の자원봉사について",
    "level": "N2",
    "category": "사회이슈",
    "activity": "작문",
    "style": "캐주얼",
    "duration": 28,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "최근 자원봉사에 대해 들어본 적이 있나요?",
        "jp": "最近、자원봉사について聞いたことがありますか？"
      },
      {
        "ko": "자원봉사에 대해 어떻게 생각하세요?",
        "jp": "자원봉사についてどう思いますか？"
      },
      {
        "ko": "자원봉사가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "자원봉사が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "자원봉사 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "자원봉사의 해결을 위해 어떤 노력이 필요하다고 생각하세요?"
      },
      {
        "ko": "개인적으로 자원봉사에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に자원봉사について何か経験がありますか？"
      },
      {
        "ko": "자원봉사와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "자원봉사に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "자원봉사에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 자원봉사에 대한 뉴스를 봤어요.",
        "translation": "最近、자원봉사に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "자원봉사について話しましょう。",
        "translation": "자원봉사에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "자원봉사에 대한 자신의 의견을 작성하세요.",
      "promptJp": "자원봉사についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "자원봉사의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "자원봉사는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "자원봉사"
    ]
  },
  {
    "id": "social-기업-21",
    "titleKo": "사회적기업",
    "titleJp": "日本の사회적기업について",
    "level": "N3",
    "category": "사회이슈",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 35,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "최근 사회적기업에 대해 들어본 적이 있나요?",
        "jp": "最近、사회적기업について聞いたことがありますか？"
      },
      {
        "ko": "사회적기업에 대해 어떻게 생각하세요?",
        "jp": "사회적기업についてどう思いますか？"
      },
      {
        "ko": "사회적기업가 우리 사회에 미치는 영향은 무엇이라고 생각하세요?",
        "jp": "사회적기업が社会に与える影響は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "사회적기업 해결을 위해 어떤 노력이 필요하다고 생각하세요?",
        "jp": "사회적기업の解決のためにどのような努力が必要だと思いますか？"
      },
      {
        "ko": "개인적으로 사회적기업에 대해 어떤 경험이나 생각이 있나요?",
        "jp": "個人的に사회적기업について何か経験がありますか？"
      },
      {
        "ko": "사회적기업와 관련된 정부 정책에 대해 어떻게 생각하세요?",
        "jp": "사회적기업に関連する政府の政策についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "사회적기업에 대한 시민 토론회",
      "roleA": "사회자",
      "roleB": "시민 대표"
    },
    "expressions": [
      {
        "word": "저출산",
        "reading": "しゅっしょうりつていか",
        "meaning": "저출산",
        "example": "저출산 문제는 심각한 사회 문제입니다."
      },
      {
        "word": "고령화",
        "reading": "こうれいか",
        "meaning": "고령화",
        "example": "고령화 사회에서는 복지 문제가 중요합니다."
      },
      {
        "word": "환경오염",
        "reading": "かんきょうおせん",
        "meaning": "환경오염",
        "example": "환경오염을 줄이기 위해 노력해야 합니다."
      },
      {
        "word": "재생에너지",
        "reading": "さいせいえねるぎー",
        "meaning": "재생에너지",
        "example": "재생에너지 개발이 시급합니다."
      },
      {
        "word": "격차사회",
        "reading": "かくさしゃかい",
        "meaning": "격차사회",
        "example": "격차사회는 사회적 불평등을 심화시킵니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "최근 사회적기업에 대한 뉴스를 봤어요.",
        "translation": "最近、사회적기업に関するニュースを見ました。"
      },
      {
        "speaker": "B",
        "text": "아, 저도 봤어요. 정말 심각한 문제인 것 같아요.",
        "translation": "あ、私も見ました。本当に深刻な問題だと思います。"
      },
      {
        "speaker": "A",
        "text": "네, 이 문제를 해결하기 위해 어떤 노력이 필요할까요?",
        "translation": "はい、この問題を解決するためにどのような努力が必要でしょうか？"
      },
      {
        "speaker": "B",
        "text": "정부와 시민 모두의 참여가 중요하다고 생각해요.",
        "translation": "政府と市民、両方の参加が重要だと思います。"
      },
      {
        "speaker": "A",
        "text": "맞아요. 작은 실천부터 시작해야겠죠.",
        "translation": "そうですね。小さな実践から始めるべきでしょう。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 할 수 있는 일을 찾아봐야겠어요.",
        "translation": "はい、私もできることを見つけたいです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~について",
        "function": "~에 대해서",
        "example": "사회적기업について話しましょう。",
        "translation": "사회적기업에 대해 이야기합시다."
      },
      {
        "pattern": "~と思います",
        "function": "~라고 생각합니다",
        "example": "良いことだと思います。",
        "translation": "좋은 일이라고 생각합니다."
      },
      {
        "pattern": "~ために",
        "function": "~하기 위해",
        "example": "解決のために努力します。",
        "translation": "해결을 위해 노력합니다."
      }
    ],
    "writingMission": {
      "prompt": "사회적기업에 대한 자신의 의견을 작성하세요.",
      "promptJp": "사회적기업についての自分の意見を書いてください。",
      "minChars": 200,
      "hint": "사회적기업의 원인과 해결 방안을 중심으로 작성해보세요."
    },
    "teacherNote": "사회적기업는 현대 사회의 중요한 이슈입니다. 다양한 관점에서 토론해 봅시다.",
    "tags": [
      "사회",
      "이슈",
      "사회적기업"
    ]
  },
  {
    "id": "daily-weather-1",
    "titleKo": "날씨와 계절",
    "titleJp": "天気と季節",
    "level": "N5",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "오늘 날씨가 어때요?",
        "jp": "今日の天気はどうですか。"
      },
      {
        "ko": "어느 계절을 가장 좋아하나요?",
        "jp": "どの季節が一番好きですか。"
      },
      {
        "ko": "비 오는 날을 좋아하나요?",
        "jp": "雨の日は好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "날씨가 기분에 어떤 영향을 미치나요?",
        "jp": "天気が気分にどんな影響を与えますか。"
      },
      {
        "ko": "당신의 나라에서 가장 좋은 계절은 언제인가요?",
        "jp": "あなたの国で一番いい季節はいつですか。"
      },
      {
        "ko": "이상 기후에 대해 어떻게 생각하나요?",
        "jp": "異常気象についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "친구와 주말 약속을 잡는데 날씨에 대해 이야기하는 상황",
      "roleA": "주말에 피크닉을 가고 싶어하는 사람",
      "roleB": "주말에 비가 온다고 알려주는 사람"
    },
    "expressions": [
      {
        "word": "晴れ",
        "reading": "はれ",
        "meaning": "맑음",
        "example": "明日は晴れです。"
      },
      {
        "word": "曇り",
        "reading": "くもり",
        "meaning": "흐림",
        "example": "今日は曇りですね。"
      },
      {
        "word": "雨",
        "reading": "あめ",
        "meaning": "비",
        "example": "雨が降っています。"
      },
      {
        "word": "雪",
        "reading": "ゆき",
        "meaning": "눈",
        "example": "冬は雪が降ります。"
      },
      {
        "word": "季節",
        "reading": "きせつ",
        "meaning": "계절",
        "example": "好きな季節は春です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "今日の天気はどうですか。",
        "translation": "오늘 날씨는 어때요?"
      },
      {
        "speaker": "B",
        "text": "今日はとてもいい天気です。",
        "translation": "오늘은 아주 좋은 날씨예요."
      },
      {
        "speaker": "A",
        "text": "そうですか。どこかへ行きたいですね。",
        "translation": "그렇군요. 어딘가 가고 싶네요."
      },
      {
        "speaker": "B",
        "text": "はい、公園を散歩しましょう。",
        "translation": "네, 공원을 산책합시다."
      },
      {
        "speaker": "A",
        "text": "いいですね。行きましょう。",
        "translation": "좋네요. 갑시다."
      },
      {
        "speaker": "B",
        "text": "お弁当も持っていきましょう。",
        "translation": "도시락도 가져갑시다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜はどうですか",
        "function": "상태나 의견 묻기",
        "example": "今日の天気はどうですか。",
        "translation": "오늘 날씨는 어때요?"
      },
      {
        "pattern": "〜たいです",
        "function": "희망 표현하기",
        "example": "どこかへ行きたいです。",
        "translation": "어딘가 가고 싶어요."
      },
      {
        "pattern": "〜ましょう",
        "function": "권유하기",
        "example": "公園を散歩しましょう。",
        "translation": "공원을 산책합시다."
      }
    ],
    "writingMission": {
      "prompt": "오늘의 날씨와 기분에 대해 짧은 일기를 써보세요.",
      "promptJp": "今日の天気と気分について短い日記を書いてみましょう。",
      "minChars": 50,
      "hint": "天気(てんき), 気分(きぶん), 〜です/〜ます를 사용해보세요."
    },
    "teacherNote": "N5 레벨이므로 기본적인 날씨 어휘와 간단한 문형 연습에 집중합니다.",
    "tags": [
      "날씨",
      "계절",
      "기초회화"
    ]
  },
  {
    "id": "daily-food-1",
    "titleKo": "좋아하는 음식",
    "titleJp": "好きな食べ物",
    "level": "N5",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "어떤 음식을 좋아하나요?",
        "jp": "どんな食べ物が好きですか。"
      },
      {
        "ko": "매운 음식을 잘 먹나요?",
        "jp": "辛い食べ物をよく食べますか。"
      },
      {
        "ko": "가장 좋아하는 과일은 무엇인가요?",
        "jp": "一番好きな果物は何ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "어릴 때 좋아했던 음식과 지금 좋아하는 음식이 다른가요?",
        "jp": "子供の時に好きだった食べ物と今好きな食べ物は違いますか。"
      },
      {
        "ko": "건강한 식습관이란 무엇이라고 생각하나요?",
        "jp": "健康的な食習慣とは何だと思いますか。"
      },
      {
        "ko": "외국 음식 중 가장 좋아하는 것은 무엇인가요?",
        "jp": "外国の食べ物の中で一番好きなものは何ですか。"
      }
    ],
    "roleplay": {
      "situation": "식당에서 메뉴를 고르는 상황",
      "roleA": "매운 것을 먹고 싶어하는 사람",
      "roleB": "매운 것을 못 먹는 사람"
    },
    "expressions": [
      {
        "word": "食べる",
        "reading": "たべる",
        "meaning": "먹다",
        "example": "パンを食べます。"
      },
      {
        "word": "おいしい",
        "reading": "おいしい",
        "meaning": "맛있다",
        "example": "このケーキはおいしいです。"
      },
      {
        "word": "辛い",
        "reading": "からい",
        "meaning": "맵다",
        "example": "キムチは辛いです。"
      },
      {
        "word": "甘い",
        "reading": "あまい",
        "meaning": "달다",
        "example": "チョコレートは甘いです。"
      },
      {
        "word": "果物",
        "reading": "くだもの",
        "meaning": "과일",
        "example": "果物が好きです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "どんな食べ物が好きですか。",
        "translation": "어떤 음식을 좋아하나요?"
      },
      {
        "speaker": "B",
        "text": "私はお寿司が好きです。",
        "translation": "저는 스시를 좋아해요."
      },
      {
        "speaker": "A",
        "text": "そうですか。私はお肉が好きです。",
        "translation": "그렇군요. 저는 고기를 좋아해요."
      },
      {
        "speaker": "B",
        "text": "よくお肉を食べますか。",
        "translation": "고기를 자주 먹나요?"
      },
      {
        "speaker": "A",
        "text": "はい、週末によく食べます。",
        "translation": "네, 주말에 자주 먹어요."
      },
      {
        "speaker": "B",
        "text": "いいですね。今度一緒に食べましょう。",
        "translation": "좋네요. 다음에 같이 먹어요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "どんな〜",
        "function": "종류 묻기",
        "example": "どんな食べ物が好きですか。",
        "translation": "어떤 음식을 좋아하나요?"
      },
      {
        "pattern": "〜が好きです",
        "function": "기호 표현하기",
        "example": "お寿司が好きです。",
        "translation": "스시를 좋아해요."
      },
      {
        "pattern": "よく〜ます",
        "function": "빈도 표현하기",
        "example": "よくお肉を食べます。",
        "translation": "고기를 자주 먹어요."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 음식에 대해 소개하는 글을 써보세요.",
      "promptJp": "自分が一番好きな食べ物について紹介する文章を書いてみましょう。",
      "minChars": 50,
      "hint": "一番(いちばん), 好き(すき), おいしい를 활용해보세요."
    },
    "teacherNote": "음식 관련 형용사(맛있다, 맵다, 달다 등)를 연습할 수 있도록 유도합니다.",
    "tags": [
      "음식",
      "취향",
      "기초회화"
    ]
  },
  {
    "id": "daily-weekend-1",
    "titleKo": "주말 보내기",
    "titleJp": "週末の過ごし方",
    "level": "N5",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "주말에 보통 무엇을 하나요?",
        "jp": "週末はたいてい何をしますか。"
      },
      {
        "ko": "지난 주말에는 무엇을 했나요?",
        "jp": "先週の週末は何をしましたか。"
      },
      {
        "ko": "이번 주말에는 무엇을 할 예정인가요?",
        "jp": "今週の週末は何をする予定ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "이상적인 주말은 어떤 모습인가요?",
        "jp": "理想的な週末はどんな様子ですか。"
      },
      {
        "ko": "주말이 이틀인 것이 충분하다고 생각하나요?",
        "jp": "週末が2日間あることで十分だと思いますか。"
      },
      {
        "ko": "주말에 일하는 것에 대해 어떻게 생각하나요?",
        "jp": "週末に働くことについてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "월요일 아침, 동료와 주말에 대해 이야기하는 상황",
      "roleA": "주말에 여행을 다녀온 사람",
      "roleB": "주말 내내 집에서 쉰 사람"
    },
    "expressions": [
      {
        "word": "週末",
        "reading": "しゅうまつ",
        "meaning": "주말",
        "example": "週末は休みです。"
      },
      {
        "word": "休む",
        "reading": "やすむ",
        "meaning": "쉬다",
        "example": "家で休みます。"
      },
      {
        "word": "遊ぶ",
        "reading": "あそぶ",
        "meaning": "놀다",
        "example": "友達と遊びます。"
      },
      {
        "word": "映画",
        "reading": "えいが",
        "meaning": "영화",
        "example": "映画を見ます。"
      },
      {
        "word": "買い物",
        "reading": "かいもの",
        "meaning": "쇼핑",
        "example": "買い物をします。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "週末は何をしましたか。",
        "translation": "주말에 무엇을 했나요?"
      },
      {
        "speaker": "B",
        "text": "友達と映画を見ました。",
        "translation": "친구와 영화를 봤어요."
      },
      {
        "speaker": "A",
        "text": "どんな映画ですか。",
        "translation": "어떤 영화인가요?"
      },
      {
        "speaker": "B",
        "text": "アクション映画です。とても面白かったです。",
        "translation": "액션 영화예요. 아주 재미있었어요."
      },
      {
        "speaker": "A",
        "text": "いいですね。私は家で休みました。",
        "translation": "좋네요. 저는 집에서 쉬었어요."
      },
      {
        "speaker": "B",
        "text": "ゆっくり休めましたか。",
        "translation": "푹 쉬었나요?"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ました",
        "function": "과거형 표현하기",
        "example": "映画を見ました。",
        "translation": "영화를 봤어요."
      },
      {
        "pattern": "〜と",
        "function": "함께하는 대상 표현하기",
        "example": "友達と映画を見ました。",
        "translation": "친구와 영화를 봤어요."
      },
      {
        "pattern": "〜かったです",
        "function": "이형용사 과거형",
        "example": "面白かったです。",
        "translation": "재미있었어요."
      }
    ],
    "writingMission": {
      "prompt": "지난 주말에 한 일에 대해 짧게 써보세요.",
      "promptJp": "先週の週末にしたことについて短く書いてみましょう。",
      "minChars": 50,
      "hint": "過去形(〜ました)를 정확히 사용해보세요."
    },
    "teacherNote": "동사의 과거형(〜ました)과 이형용사의 과거형(〜かったです)을 연습합니다.",
    "tags": [
      "주말",
      "여가",
      "과거형"
    ]
  },
  {
    "id": "daily-shopping-1",
    "titleKo": "쇼핑하기",
    "titleJp": "買い物",
    "level": "N5",
    "category": "일상수다",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "쇼핑을 좋아하나요?",
        "jp": "買い物が好きですか。"
      },
      {
        "ko": "주로 어디에서 쇼핑을 하나요?",
        "jp": "主にどこで買い物をしますか。"
      },
      {
        "ko": "최근에 무엇을 샀나요?",
        "jp": "最近何を買いましたか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "온라인 쇼핑과 오프라인 쇼핑 중 어느 것을 선호하나요?",
        "jp": "オンラインショッピングとオフラインショッピングのどちらが好きですか。"
      },
      {
        "ko": "충동구매를 자주 하는 편인가요?",
        "jp": "衝動買いをよくする方ですか。"
      },
      {
        "ko": "물건을 살 때 가장 중요하게 생각하는 것은 무엇인가요?",
        "jp": "物を買う時、一番大切に考えることは何ですか。"
      }
    ],
    "roleplay": {
      "situation": "옷가게에서 옷을 고르고 점원과 대화하는 상황",
      "roleA": "옷을 사러 온 손님",
      "roleB": "옷가게 점원"
    },
    "expressions": [
      {
        "word": "買う",
        "reading": "かう",
        "meaning": "사다",
        "example": "服を買います。"
      },
      {
        "word": "高い",
        "reading": "たかい",
        "meaning": "비싸다",
        "example": "このカバンは高いです。"
      },
      {
        "word": "安い",
        "reading": "やすい",
        "meaning": "싸다",
        "example": "あの靴は安いです。"
      },
      {
        "word": "服",
        "reading": "ふく",
        "meaning": "옷",
        "example": "新しい服が欲しいです。"
      },
      {
        "word": "いくら",
        "reading": "いくら",
        "meaning": "얼마",
        "example": "これはいくらですか。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "すみません、これはいくらですか。",
        "translation": "실례합니다, 이것은 얼마인가요?"
      },
      {
        "speaker": "B",
        "text": "それは3000円です。",
        "translation": "그것은 3000엔입니다."
      },
      {
        "speaker": "A",
        "text": "少し高いですね。あれはいくらですか。",
        "translation": "조금 비싸네요. 저것은 얼마인가요?"
      },
      {
        "speaker": "B",
        "text": "あれは2000円です。",
        "translation": "저것은 2000엔입니다."
      },
      {
        "speaker": "A",
        "text": "じゃあ、あれをください。",
        "translation": "그럼, 저것을 주세요."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。",
        "translation": "감사합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "これ/それ/あれ",
        "function": "지시대명사",
        "example": "これはいくらですか。",
        "translation": "이것은 얼마인가요?"
      },
      {
        "pattern": "〜はいくらですか",
        "function": "가격 묻기",
        "example": "それはいくらですか。",
        "translation": "그것은 얼마인가요?"
      },
      {
        "pattern": "〜をください",
        "function": "물건 요구하기",
        "example": "あれをください。",
        "translation": "저것을 주세요."
      }
    ],
    "writingMission": {
      "prompt": "최근에 산 물건에 대해 설명하고 가격을 적어보세요.",
      "promptJp": "最近買った物について説明し、値段を書いてみましょう。",
      "minChars": 50,
      "hint": "買いました, 〜円です를 사용해보세요."
    },
    "teacherNote": "물건을 지시하는 표현(これ, それ, あれ)과 가격을 묻고 답하는 연습을 합니다.",
    "tags": [
      "쇼핑",
      "가격",
      "기초회화"
    ]
  },
  {
    "id": "daily-hobby-1",
    "titleKo": "나의 취미",
    "titleJp": "私の趣味",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "취미가 뭐예요?",
        "jp": "趣味は何？"
      },
      {
        "ko": "그 취미를 언제부터 시작했어요?",
        "jp": "その趣味はいつから始めたの？"
      },
      {
        "ko": "주말에 취미 생활을 자주 해요?",
        "jp": "週末に趣味の時間をよく作ってる？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "취미가 스트레스 해소에 도움이 되나요?",
        "jp": "趣味はストレス解消の役に立ってる？"
      },
      {
        "ko": "새롭게 시작해보고 싶은 취미가 있나요?",
        "jp": "新しく始めてみたい趣味はある？"
      },
      {
        "ko": "취미를 직업으로 삼는 것에 대해 어떻게 생각해요?",
        "jp": "趣味を仕事にすることについてどう思う？"
      }
    ],
    "roleplay": {
      "situation": "새로 사귄 친구와 서로의 취미에 대해 이야기하는 상황",
      "roleA": "활동적인 취미(등산, 스포츠 등)를 가진 사람",
      "roleB": "정적인 취미(독서, 게임 등)를 가진 사람"
    },
    "expressions": [
      {
        "word": "趣味",
        "reading": "しゅみ",
        "meaning": "취미",
        "example": "私の趣味は読書です。"
      },
      {
        "word": "始める",
        "reading": "はじめる",
        "meaning": "시작하다",
        "example": "ピアノを始めました。"
      },
      {
        "word": "楽しい",
        "reading": "たのしい",
        "meaning": "즐겁다",
        "example": "ゲームをするのは楽しいです。"
      },
      {
        "word": "夢中になる",
        "reading": "むちゅうになる",
        "meaning": "열중하다",
        "example": "最近、カメラに夢中になっている。"
      },
      {
        "word": "暇な時",
        "reading": "ひまなとき",
        "meaning": "한가할 때",
        "example": "暇な時は映画を見る。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ねえ、暇な時って何してるの？",
        "translation": "있지, 한가할 때 뭐해?"
      },
      {
        "speaker": "B",
        "text": "うーん、最近はよく写真撮ってるかな。",
        "translation": "음, 최근엔 사진을 자주 찍어."
      },
      {
        "speaker": "A",
        "text": "へえ、カメラが趣味なんだ。いつから始めたの？",
        "translation": "헤에, 카메라가 취미구나. 언제부터 시작했어?"
      },
      {
        "speaker": "B",
        "text": "半年前くらいから。すごく楽しいよ。",
        "translation": "반년 전쯤부터. 엄청 재밌어."
      },
      {
        "speaker": "A",
        "text": "いいなー。今度、私の写真も撮ってよ！",
        "translation": "좋겠다. 다음에 내 사진도 찍어줘!"
      },
      {
        "speaker": "B",
        "text": "うん、いいよ。可愛く撮ってあげる。",
        "translation": "응, 좋아. 예쁘게 찍어줄게."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ている",
        "function": "현재 진행/상태 (캐주얼)",
        "example": "最近はよく写真撮ってる。",
        "translation": "최근엔 사진을 자주 찍어."
      },
      {
        "pattern": "〜てあげる",
        "function": "호의 베풀기",
        "example": "可愛く撮ってあげる。",
        "translation": "예쁘게 찍어줄게."
      },
      {
        "pattern": "〜かな",
        "function": "가벼운 단정/추측",
        "example": "最近はよく写真撮ってるかな。",
        "translation": "최근엔 사진을 자주 찍는 편이려나."
      }
    ],
    "writingMission": {
      "prompt": "자신의 취미를 친구에게 소개하는 짧은 메시지를 써보세요.",
      "promptJp": "自分の趣味を友達に紹介する短いメッセージを書いてみましょう。",
      "minChars": 80,
      "hint": "캐주얼체(タメ口)를 사용하여 친근하게 작성해보세요."
    },
    "teacherNote": "N4 레벨의 캐주얼체(タメ口) 연습에 중점을 둡니다. 회화체 축약형(〜てる 등)을 자연스럽게 쓰도록 지도하세요.",
    "tags": [
      "취미",
      "여가",
      "캐주얼회화"
    ]
  },
  {
    "id": "daily-pet-1",
    "titleKo": "반려동물",
    "titleJp": "ペット",
    "level": "N4",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "반려동물을 키우고 있나요?",
        "jp": "ペットを飼っていますか。"
      },
      {
        "ko": "개와 고양이 중 어느 쪽을 더 좋아하나요?",
        "jp": "犬と猫、どちらの方が好きですか。"
      },
      {
        "ko": "어릴 때 동물을 키워본 적이 있나요?",
        "jp": "子供の頃、動物を飼ったことがありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "반려동물이 사람에게 주는 긍정적인 영향은 무엇일까요?",
        "jp": "ペットが人に与える肯定的な影響は何でしょうか。"
      },
      {
        "ko": "반려동물을 키울 때 가장 힘든 점은 무엇이라고 생각하나요?",
        "jp": "ペットを飼う時、一番大変なことは何だと思いますか。"
      },
      {
        "ko": "유기동물 문제에 대해 어떻게 생각하나요?",
        "jp": "捨てられる動物の問題についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "반려동물 카페에서 처음 만난 사람과 대화하는 상황",
      "roleA": "강아지를 데려온 사람",
      "roleB": "강아지를 귀여워하며 말을 거는 사람"
    },
    "expressions": [
      {
        "word": "飼う",
        "reading": "かう",
        "meaning": "기르다",
        "example": "犬を飼っています。"
      },
      {
        "word": "可愛い",
        "reading": "かわいい",
        "meaning": "귀엽다",
        "example": "この猫はとても可愛いです。"
      },
      {
        "word": "散歩",
        "reading": "さんぽ",
        "meaning": "산책",
        "example": "毎日犬の散歩をします。"
      },
      {
        "word": "餌",
        "reading": "えさ",
        "meaning": "먹이",
        "example": "ペットに餌をやります。"
      },
      {
        "word": "癒される",
        "reading": "いやされる",
        "meaning": "치유받다",
        "example": "ペットを見ると癒されます。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "すみません、この犬、とても可愛いですね。触ってもいいですか。",
        "translation": "저기요, 이 강아지 정말 귀엽네요. 만져봐도 될까요?"
      },
      {
        "speaker": "B",
        "text": "はい、大丈夫ですよ。人懐っこいんです。",
        "translation": "네, 괜찮아요. 사람을 잘 따르거든요."
      },
      {
        "speaker": "A",
        "text": "ありがとうございます。何歳ですか。",
        "translation": "감사합니다. 몇 살인가요?"
      },
      {
        "speaker": "B",
        "text": "3歳です。最近、散歩が大好きで。",
        "translation": "3살이에요. 요즘 산책을 아주 좋아해서요."
      },
      {
        "speaker": "A",
        "text": "いいですね。私も犬を飼いたいんですが、アパートなので無理なんです。",
        "translation": "좋네요. 저도 강아지를 키우고 싶은데, 아파트라서 무리예요."
      },
      {
        "speaker": "B",
        "text": "それは残念ですね。でも、こういうカフェで楽しめますよ。",
        "translation": "그거 아쉽네요. 그래도 이런 카페에서 즐길 수 있잖아요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てもいいですか",
        "function": "허락 구하기",
        "example": "触ってもいいですか。",
        "translation": "만져봐도 될까요?"
      },
      {
        "pattern": "〜たいんですが",
        "function": "희망과 상황 설명",
        "example": "犬を飼いたいんですが、無理なんです。",
        "translation": "강아지를 키우고 싶은데, 무리예요."
      },
      {
        "pattern": "〜たことがあります",
        "function": "경험 표현하기",
        "example": "動物を飼ったことがあります。",
        "translation": "동물을 키워본 적이 있습니다."
      }
    ],
    "writingMission": {
      "prompt": "자신이 키우고 싶은(또는 키우고 있는) 반려동물에 대해 묘사해보세요.",
      "promptJp": "自分が飼いたい（または飼っている）ペットについて描写してみましょう。",
      "minChars": 80,
      "hint": "どんな動物か、なぜ好きかを含めて書いてください。"
    },
    "teacherNote": "동물을 묘사하는 형용사와 경험을 나타내는 문형(〜たことがある)을 연습합니다.",
    "tags": [
      "반려동물",
      "동물",
      "경험"
    ]
  },
  {
    "id": "daily-travel-prep-1",
    "titleKo": "여행 준비",
    "titleJp": "旅行の準備",
    "level": "N4",
    "category": "일상수다",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "여행 가는 것을 좋아해?",
        "jp": "旅行に行くの好き？"
      },
      {
        "ko": "짐을 미리 싸는 편이야, 아니면 전날에 싸는 편이야?",
        "jp": "荷物は前もって準備する派？それとも前日にする派？"
      },
      {
        "ko": "여행 갈 때 꼭 챙기는 물건이 있어?",
        "jp": "旅行に行く時、必ず持っていく物はある？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "계획적인 여행과 즉흥적인 여행 중 어느 쪽이 더 좋아?",
        "jp": "計画的な旅行と行き当たりばったりの旅行、どっちが好き？"
      },
      {
        "ko": "여행 준비를 할 때 가장 설레는 순간은 언제야?",
        "jp": "旅行の準備をする時、一番ワクワクする瞬間はいつ？"
      },
      {
        "ko": "여행지에서 예상치 못한 문제가 생겼을 때 어떻게 대처해?",
        "jp": "旅行先で予想外のトラブルが起きた時、どう対処する？"
      }
    ],
    "roleplay": {
      "situation": "내일 같이 여행을 떠나는 친구와 짐을 챙기며 통화하는 상황",
      "roleA": "꼼꼼하게 짐을 다 챙긴 사람",
      "roleB": "아직 짐을 다 못 싸서 허둥지둥하는 사람"
    },
    "expressions": [
      {
        "word": "準備",
        "reading": "じゅんび",
        "meaning": "준비",
        "example": "旅行の準備をする。"
      },
      {
        "word": "荷物",
        "reading": "にもつ",
        "meaning": "짐",
        "example": "荷物をまとめる。"
      },
      {
        "word": "忘れる",
        "reading": "わすれる",
        "meaning": "잊다, 까먹다",
        "example": "パスポートを忘れないで。"
      },
      {
        "word": "楽しみ",
        "reading": "たのしみ",
        "meaning": "기대됨",
        "example": "明日の旅行が楽しみだ。"
      },
      {
        "word": "足りる",
        "reading": "たりる",
        "meaning": "충분하다",
        "example": "お金は足りるかな。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "もしもし、荷物の準備終わった？",
        "translation": "여보세요, 짐 준비 다 했어?"
      },
      {
        "speaker": "B",
        "text": "ううん、まだ。何を持っていけばいいか迷ってて。",
        "translation": "아니, 아직. 뭘 가져가야 할지 고민돼서."
      },
      {
        "speaker": "A",
        "text": "えー、明日早いんだから早くしなよ。パスポートは入れた？",
        "translation": "에이, 내일 일찍 가야 하니까 빨리 해. 여권은 넣었어?"
      },
      {
        "speaker": "B",
        "text": "あ、やばい！忘れるところだった。ありがとう。",
        "translation": "아, 대박! 까먹을 뻔했어. 고마워."
      },
      {
        "speaker": "A",
        "text": "もう、しっかりしてよ。忘れ物ないようにね。",
        "translation": "정말, 정신 차려. 빠뜨린 거 없게 해."
      },
      {
        "speaker": "B",
        "text": "うん、急いで準備する！明日楽しみだね。",
        "translation": "응, 서둘러서 준비할게! 내일 기대된다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ばいい",
        "function": "조언 구하기/하기",
        "example": "何を持っていけばいいか迷っている。",
        "translation": "뭘 가져가야 할지 고민하고 있어."
      },
      {
        "pattern": "〜ところだった",
        "function": "하마터면 ~할 뻔했다",
        "example": "忘れるところだった。",
        "translation": "까먹을 뻔했어."
      },
      {
        "pattern": "〜ように",
        "function": "목적/당부",
        "example": "忘れ物ないようにね。",
        "translation": "빠뜨린 거 없게 해."
      }
    ],
    "writingMission": {
      "prompt": "여행 갈 때 반드시 챙겨야 할 물건 3가지와 그 이유를 적어보세요.",
      "promptJp": "旅行に行く時、必ず持っていくべき物3つとその理由を書いてみましょう。",
      "minChars": 80,
      "hint": "〜なければなりません, なぜなら〜からです를 활용해보세요."
    },
    "teacherNote": "캐주얼한 조언 표현과 '〜ところだった(할 뻔했다)' 문법을 자연스럽게 쓰도록 지도합니다.",
    "tags": [
      "여행",
      "준비",
      "캐주얼"
    ]
  },
  {
    "id": "daily-music-1",
    "titleKo": "음악 취향",
    "titleJp": "音楽の好み",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "어떤 장르의 음악을 좋아하나요?",
        "jp": "どんなジャンルの音楽が好きですか。"
      },
      {
        "ko": "가장 좋아하는 가수는 누구인가요?",
        "jp": "一番好きな歌手は誰ですか。"
      },
      {
        "ko": "주로 언제 음악을 듣나요?",
        "jp": "主にいつ音楽を聴きますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "음악이 사람의 감정에 어떤 영향을 미친다고 생각하나요?",
        "jp": "音楽が人の感情にどんな影響を与えると思いますか。"
      },
      {
        "ko": "라이브 콘서트에 가는 것을 좋아하나요? 그 이유는 무엇인가요?",
        "jp": "ライブコンサートに行くのは好きですか。その理由は何ですか。"
      },
      {
        "ko": "가사 없는 연주곡을 듣는 것도 좋아하나요?",
        "jp": "歌詞のないインストゥルメンタル曲を聴くのも好きですか。"
      }
    ],
    "roleplay": {
      "situation": "서로의 플레이리스트를 공유하며 대화하는 상황",
      "roleA": "K-POP을 좋아하는 사람",
      "roleB": "클래식이나 재즈를 좋아하는 사람"
    },
    "expressions": [
      {
        "word": "音楽",
        "reading": "おんがく",
        "meaning": "음악",
        "example": "音楽を聴くのが好きです。"
      },
      {
        "word": "歌手",
        "reading": "かしゅ",
        "meaning": "가수",
        "example": "好きな歌手のコンサートに行きます。"
      },
      {
        "word": "曲",
        "reading": "きょく",
        "meaning": "곡, 노래",
        "example": "この曲はとてもいいですね。"
      },
      {
        "word": "歌詞",
        "reading": "かし",
        "meaning": "가사",
        "example": "歌詞の意味が深いです。"
      },
      {
        "word": "流行る",
        "reading": "はやる",
        "meaning": "유행하다",
        "example": "今流行っている曲です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "普段、どんな音楽を聴きますか。",
        "translation": "평소에 어떤 음악을 들으시나요?"
      },
      {
        "speaker": "B",
        "text": "私はジャズをよく聴きます。リラックスできるからです。",
        "translation": "저는 재즈를 자주 들어요. 릴랙스할 수 있거든요."
      },
      {
        "speaker": "A",
        "text": "おしゃれですね。私は最近のK-POPばかり聴いています。",
        "translation": "멋지네요. 저는 요즘 K-POP만 듣고 있어요."
      },
      {
        "speaker": "B",
        "text": "K-POPはダンスがかっこいいですよね。おすすめの曲はありますか。",
        "translation": "K-POP은 댄스가 멋지죠. 추천할 만한 곡이 있나요?"
      },
      {
        "speaker": "A",
        "text": "はい、このグループの新曲がすごくいいですよ。聴いてみますか。",
        "translation": "네, 이 그룹의 신곡이 아주 좋아요. 들어보실래요?"
      },
      {
        "speaker": "B",
        "text": "ぜひ聴かせてください。",
        "translation": "꼭 들려주세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ばかり",
        "function": "그것만 계속함",
        "example": "K-POPばかり聴いています。",
        "translation": "K-POP만 듣고 있어요."
      },
      {
        "pattern": "〜てみます",
        "function": "시험 삼아 해보다",
        "example": "聴いてみますか。",
        "translation": "들어보실래요?"
      },
      {
        "pattern": "〜させてください",
        "function": "사역 수동 (허락 구하기)",
        "example": "聴かせてください。",
        "translation": "들려주세요."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 노래 한 곡을 소개하고, 그 이유를 적어보세요.",
      "promptJp": "自分が一番好きな歌を一曲紹介し、その理由を書いてみましょう。",
      "minChars": 80,
      "hint": "曲名(きょくめい), 歌手(かしゅ), 理由(りゆう)를 포함하세요."
    },
    "teacherNote": "음악 장르와 관련된 어휘를 확장하고, 이유를 설명하는 표현(〜からです)을 연습합니다.",
    "tags": [
      "음악",
      "취향",
      "문화"
    ]
  },
  {
    "id": "daily-cleaning-1",
    "titleKo": "청소와 정리",
    "titleJp": "掃除と片付け",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "방 청소를 자주 하는 편인가요?",
        "jp": "部屋の掃除をよくする方ですか。"
      },
      {
        "ko": "청소하는 것을 좋아하나요, 싫어하나요?",
        "jp": "掃除をするのは好きですか、嫌いですか。"
      },
      {
        "ko": "물건을 잘 버리는 편인가요?",
        "jp": "物をよく捨てる方ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "방이 깨끗하면 기분에 어떤 영향을 미치나요?",
        "jp": "部屋がきれいだと気分にどんな影響を与えますか。"
      },
      {
        "ko": "미니멀리즘(물건을 최소화하는 삶)에 대해 어떻게 생각하나요?",
        "jp": "ミニマリズム（物を最小限にする生き方）についてどう思いますか。"
      },
      {
        "ko": "청소를 미루는 습관을 고치려면 어떻게 해야 할까요?",
        "jp": "掃除を後回しにする習慣を直すにはどうすればいいでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "룸메이트와 청소 당번을 정하는 상황",
      "roleA": "깔끔한 성격으로 청소를 자주 하고 싶어하는 사람",
      "roleB": "조금 어질러져 있어도 신경 쓰지 않는 사람"
    },
    "expressions": [
      {
        "word": "掃除",
        "reading": "そうじ",
        "meaning": "청소",
        "example": "週末に部屋の掃除をします。"
      },
      {
        "word": "片付ける",
        "reading": "かたづける",
        "meaning": "정리하다, 치우다",
        "example": "机の上を片付けます。"
      },
      {
        "word": "捨てる",
        "reading": "すてる",
        "meaning": "버리다",
        "example": "いらない物を捨てます。"
      },
      {
        "word": "汚い",
        "reading": "きたない",
        "meaning": "더럽다",
        "example": "部屋が汚いです。"
      },
      {
        "word": "面倒くさい",
        "reading": "めんどうくさい",
        "meaning": "귀찮다",
        "example": "掃除は面倒くさいです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ねえ、部屋が少し汚くなってきたと思わない？",
        "translation": "저기, 방이 조금 더러워졌다고 생각하지 않아?"
      },
      {
        "speaker": "B",
        "text": "そう？私はあまり気にならないけど。",
        "translation": "그래? 나는 별로 신경 안 쓰이는데."
      },
      {
        "speaker": "A",
        "text": "週末に一緒に掃除しようよ。当番を決めた方がいいと思う。",
        "translation": "주말에 같이 청소하자. 당번을 정하는 게 좋을 것 같아."
      },
      {
        "speaker": "B",
        "text": "わかった。じゃあ、私がトイレ掃除をするから、リビングをお願いしてもいい？",
        "translation": "알았어. 그럼 내가 화장실 청소를 할 테니까, 거실을 부탁해도 될까?"
      },
      {
        "speaker": "A",
        "text": "うん、いいよ。いらない物も少し捨てようね。",
        "translation": "응, 좋아. 필요 없는 물건도 조금 버리자."
      },
      {
        "speaker": "B",
        "text": "了解。面倒くさいけど、頑張るよ。",
        "translation": "알겠어. 귀찮지만, 열심히 할게."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てきた",
        "function": "상태의 변화",
        "example": "汚くなってきた。",
        "translation": "더러워졌다."
      },
      {
        "pattern": "〜た方がいい",
        "function": "충고/제안",
        "example": "当番を決めた方がいい。",
        "translation": "당번을 정하는 게 좋다."
      },
      {
        "pattern": "〜てもいい？",
        "function": "허락 구하기 (캐주얼)",
        "example": "リビングをお願いしてもいい？",
        "translation": "거실을 부탁해도 될까?"
      }
    ],
    "writingMission": {
      "prompt": "자신만의 청소 팁이나 정리 노하우를 한 가지 소개해보세요.",
      "promptJp": "自分なりの掃除のコツや片付けのノウハウを一つ紹介してみましょう。",
      "minChars": 80,
      "hint": "まず(먼저), 次に(다음에) 등의 접속사를 사용해보세요."
    },
    "teacherNote": "청소 관련 동사(片付ける, 捨てる 등)와 상태 변화(〜てくる)를 연습합니다.",
    "tags": [
      "청소",
      "생활습관",
      "정리"
    ]
  },
  {
    "id": "daily-coffee-1",
    "titleKo": "커피와 카페",
    "titleJp": "コーヒーとカフェ",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "커피를 자주 마시나요?",
        "jp": "コーヒーをよく飲みますか。"
      },
      {
        "ko": "어떤 종류의 커피를 가장 좋아하나요?",
        "jp": "どの種類のコーヒーが一番好きですか。"
      },
      {
        "ko": "카페에 가는 것을 좋아하나요?",
        "jp": "カフェに行くのは好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "카페에서 주로 무엇을 하면서 시간을 보내나요?",
        "jp": "カフェで主に何をしながら時間を過ごしますか。"
      },
      {
        "ko": "커피가 건강에 좋다고 생각하나요, 나쁘다고 생각하나요?",
        "jp": "コーヒーは健康に良いと思いますか、悪いと思いますか。"
      },
      {
        "ko": "당신이 생각하는 '좋은 카페'의 조건은 무엇인가요?",
        "jp": "あなたが考える「良いカフェ」の条件は何ですか。"
      }
    ],
    "roleplay": {
      "situation": "새로 생긴 카페에 대해 친구와 이야기하는 상황",
      "roleA": "새로운 카페를 발견해서 같이 가자고 제안하는 사람",
      "roleB": "커피보다는 디저트를 더 좋아하는 사람"
    },
    "expressions": [
      {
        "word": "苦い",
        "reading": "にがい",
        "meaning": "쓰다",
        "example": "ブラックコーヒーは苦いです。"
      },
      {
        "word": "香り",
        "reading": "かおり",
        "meaning": "향기",
        "example": "コーヒーの良い香りがします。"
      },
      {
        "word": "落ち着く",
        "reading": "おちつく",
        "meaning": "차분해지다, 편안해지다",
        "example": "このカフェは落ち着きます。"
      },
      {
        "word": "雰囲気",
        "reading": "ふんいき",
        "meaning": "분위기",
        "example": "雰囲気がいいお店ですね。"
      },
      {
        "word": "常連",
        "reading": "じょうれん",
        "meaning": "단골",
        "example": "あのカフェの常連です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "駅の近くに新しいカフェができたのを知っていますか。",
        "translation": "역 근처에 새로운 카페가 생긴 거 알아요?"
      },
      {
        "speaker": "B",
        "text": "いいえ、知りませんでした。どんなカフェですか。",
        "translation": "아니요, 몰랐어요. 어떤 카페인가요?"
      },
      {
        "speaker": "A",
        "text": "雰囲気がとても良くて、コーヒーの香りが素晴らしいそうです。",
        "translation": "분위기가 아주 좋고, 커피 향이 훌륭하대요."
      },
      {
        "speaker": "B",
        "text": "私はコーヒーが苦手なんですが、ケーキもありますか。",
        "translation": "저는 커피를 잘 못 마시는데, 케이크도 있나요?"
      },
      {
        "speaker": "A",
        "text": "はい、手作りのケーキが美味しいと評判ですよ。",
        "translation": "네, 수제 케이크가 맛있다고 소문났어요."
      },
      {
        "speaker": "B",
        "text": "それなら、今度一緒に行ってみましょう。",
        "translation": "그렇다면, 다음에 같이 가봐요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜そうです",
        "function": "전문 (들어서 앎)",
        "example": "香りが素晴らしいそうです。",
        "translation": "향이 훌륭하대요."
      },
      {
        "pattern": "〜が苦手だ",
        "function": "서투름/싫어함",
        "example": "コーヒーが苦手です。",
        "translation": "커피를 잘 못 마셔요."
      },
      {
        "pattern": "〜と評判だ",
        "function": "평판/소문",
        "example": "美味しいと評判です。",
        "translation": "맛있다고 소문났어요."
      }
    ],
    "writingMission": {
      "prompt": "자신이 자주 가는 단골 카페를 소개하는 글을 써보세요.",
      "promptJp": "自分がよく行く行きつけのカフェを紹介する文章を書いてみましょう。",
      "minChars": 80,
      "hint": "雰囲気(ふんいき), メニュー, 理由(りゆう)를 포함하세요."
    },
    "teacherNote": "전문 표현(〜そうです)을 사용하여 다른 사람에게 들은 정보를 전달하는 연습을 합니다.",
    "tags": [
      "카페",
      "커피",
      "여가"
    ]
  },
  {
    "id": "daily-sleep-1",
    "titleKo": "수면 습관",
    "titleJp": "睡眠習慣",
    "level": "N3",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "보통 하루에 몇 시간 정도 자나요?",
        "jp": "普段、一日に何時間くらい寝ますか。"
      },
      {
        "ko": "아침형 인간인가요, 저녁형 인간인가요?",
        "jp": "朝型人間ですか、それとも夜型人間ですか。"
      },
      {
        "ko": "잠들기 전에 주로 무엇을 하나요?",
        "jp": "寝る前に主に何をしますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "수면 부족이 일상생활에 미치는 가장 큰 영향은 무엇이라고 생각하나요?",
        "jp": "睡眠不足が日常生活に与える最大の影響は何だと思いますか。"
      },
      {
        "ko": "숙면을 취하기 위한 자신만의 비결이 있나요?",
        "jp": "熟睡するための自分なりの秘訣はありますか。"
      },
      {
        "ko": "낮잠을 자는 습관에 대해 어떻게 생각하나요?",
        "jp": "昼寝をする習慣についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "최근 불면증에 시달리는 동료에게 조언을 해주는 상황",
      "roleA": "밤에 잠을 잘 못 자서 피곤한 사람",
      "roleB": "숙면을 위한 다양한 방법을 추천해주는 사람"
    },
    "expressions": [
      {
        "word": "睡眠",
        "reading": "すいみん",
        "meaning": "수면",
        "example": "十分な睡眠をとることが大切です。"
      },
      {
        "word": "徹夜",
        "reading": "てつや",
        "meaning": "철야, 밤샘",
        "example": "昨日は徹夜で勉強しました。"
      },
      {
        "word": "寝不足",
        "reading": "ねぶそく",
        "meaning": "수면 부족",
        "example": "寝不足で頭が痛いです。"
      },
      {
        "word": "目覚まし時計",
        "reading": "めざましどけい",
        "meaning": "알람 시계",
        "example": "目覚まし時計をセットします。"
      },
      {
        "word": "夢を見る",
        "reading": "ゆめをみる",
        "meaning": "꿈을 꾸다",
        "example": "怖い夢を見ました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、夜なかなか眠れなくて、昼間ずっと眠いんです。",
        "translation": "최근에 밤에 좀처럼 잠을 못 자서, 낮에 계속 졸려요."
      },
      {
        "speaker": "B",
        "text": "それは辛いですね。寝る前にスマホを見ていませんか。",
        "translation": "그거 힘들겠네요. 자기 전에 스마트폰을 보고 있지 않나요?"
      },
      {
        "speaker": "A",
        "text": "はい、ついベッドの中で動画を見てしまいます。",
        "translation": "네, 무심코 침대 속에서 동영상을 보게 돼요."
      },
      {
        "speaker": "B",
        "text": "ブルーライトは睡眠の質を下げるらしいですよ。寝る1時間前には画面を見ないようにしてみてはどうですか。",
        "translation": "블루라이트는 수면의 질을 떨어뜨린다고 해요. 자기 1시간 전에는 화면을 보지 않도록 해보는 건 어때요?"
      },
      {
        "speaker": "A",
        "text": "なるほど。今日から試してみます。温かいミルクも飲んでみようかな。",
        "translation": "그렇군요. 오늘부터 시도해볼게요. 따뜻한 우유도 마셔볼까 봐요."
      },
      {
        "speaker": "B",
        "text": "いいですね。リラックスすることが一番大切ですから。",
        "translation": "좋네요. 릴랙스하는 것이 가장 중요하니까요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "なかなか〜ない",
        "function": "좀처럼 ~하지 않다",
        "example": "なかなか眠れません。",
        "translation": "좀처럼 잠들 수 없어요."
      },
      {
        "pattern": "〜てしまう",
        "function": "무심코 ~해버리다",
        "example": "動画を見てしまいます。",
        "translation": "동영상을 보게 되어버려요."
      },
      {
        "pattern": "〜らしい",
        "function": "추측/전문 (~라고 한다)",
        "example": "睡眠の質を下げるらしいです。",
        "translation": "수면의 질을 떨어뜨린다고 해요."
      },
      {
        "pattern": "〜てみてはどうですか",
        "function": "제안/권유",
        "example": "見ないようにしてみてはどうですか。",
        "translation": "보지 않도록 해보는 건 어때요?"
      }
    ],
    "writingMission": {
      "prompt": "자신의 수면 습관을 평가하고, 개선하고 싶은 점을 적어보세요.",
      "promptJp": "自分の睡眠習慣を評価し、改善したい点を書いてみましょう。",
      "minChars": 100,
      "hint": "現状(현재 상황), 問題点(문제점), 改善策(개선책)의 구조로 써보세요."
    },
    "teacherNote": "N3 수준의 제안 표현(〜てみてはどうですか)과 무의식적인 행동(〜てしまう)을 자연스럽게 사용하도록 지도합니다.",
    "tags": [
      "수면",
      "건강",
      "습관"
    ]
  },
  {
    "id": "daily-cooking-1",
    "titleKo": "요리와 식사",
    "titleJp": "料理と食事",
    "level": "N3",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "직접 요리하는 것을 좋아해?",
        "jp": "自分で料理するのは好き？"
      },
      {
        "ko": "가장 자신 있는 요리는 뭐야?",
        "jp": "一番得意な料理は何？"
      },
      {
        "ko": "외식과 집밥 중 어느 쪽을 더 선호해?",
        "jp": "外食と自炊、どっちの方が好き？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "요리 실력을 키우기 위해 가장 중요한 것은 무엇이라고 생각해?",
        "jp": "料理の腕を上げるために一番大切なことは何だと思う？"
      },
      {
        "ko": "바쁜 현대인들에게 밀키트나 배달 음식은 어떤 의미일까?",
        "jp": "忙しい現代人にとって、ミールキットやデリバリーはどんな意味があるかな？"
      },
      {
        "ko": "누군가를 위해 요리해준 경험이 있어? 그때의 기분은 어땠어?",
        "jp": "誰かのために料理を作ってあげた経験はある？その時の気分はどうだった？"
      }
    ],
    "roleplay": {
      "situation": "친구를 집에 초대해서 같이 저녁을 만들어 먹기로 한 상황",
      "roleA": "요리를 잘해서 주도적으로 메뉴를 정하는 사람",
      "roleB": "요리는 서툴지만 재료 손질이나 설거지를 돕겠다는 사람"
    },
    "expressions": [
      {
        "word": "自炊",
        "reading": "じすい",
        "meaning": "자취 (직접 밥을 해 먹음)",
        "example": "最近は毎日自炊している。"
      },
      {
        "word": "得意だ",
        "reading": "とくいだ",
        "meaning": "자신 있다, 잘하다",
        "example": "パスタを作るのが得意だ。"
      },
      {
        "word": "外食",
        "reading": "がいしょく",
        "meaning": "외식",
        "example": "週末はよく外食する。"
      },
      {
        "word": "レシピ",
        "reading": "れしぴ",
        "meaning": "레시피",
        "example": "ネットでレシピを検索する。"
      },
      {
        "word": "面倒",
        "reading": "めんどう",
        "meaning": "번거로움",
        "example": "後片付けが面倒だ。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "今週末、うちで一緒にご飯作って食べない？",
        "translation": "이번 주말에 우리 집에서 같이 밥 만들어 먹지 않을래?"
      },
      {
        "speaker": "B",
        "text": "いいね！でも私、料理全然できないよ。足手まといにならないかな。",
        "translation": "좋아! 근데 나 요리 전혀 못해. 짐이 되지 않을까."
      },
      {
        "speaker": "A",
        "text": "大丈夫だよ。私がメインで作るから、野菜切ったりするのを手伝ってくれれば。",
        "translation": "괜찮아. 내가 메인으로 만들 테니까, 채소 썰거나 하는 걸 도와주면 돼."
      },
      {
        "speaker": "B",
        "text": "それならできる！何作る予定？",
        "translation": "그거라면 할 수 있어! 뭐 만들 예정이야?"
      },
      {
        "speaker": "A",
        "text": "最近ハマってるカレーを作ろうかと思って。スパイスから作る本格的なやつ。",
        "translation": "요즘 빠져있는 카레를 만들까 해서. 스파이스부터 만드는 본격적인 거."
      },
      {
        "speaker": "B",
        "text": "すごーい！楽しみにしてるね。後片付けは私が全部やるよ。",
        "translation": "대박! 기대하고 있을게. 뒷정리는 내가 다 할게."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ない？",
        "function": "권유 (캐주얼)",
        "example": "一緒にご飯作って食べない？",
        "translation": "같이 밥 만들어 먹지 않을래?"
      },
      {
        "pattern": "〜てくれれば",
        "function": "조건 (~해주면)",
        "example": "手伝ってくれれば大丈夫。",
        "translation": "도와주면 괜찮아."
      },
      {
        "pattern": "〜かと思って",
        "function": "가벼운 의도/계획",
        "example": "カレーを作ろうかと思って。",
        "translation": "카레를 만들까 해서."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 요리의 간단한 레시피나 만드는 과정을 설명해보세요.",
      "promptJp": "自分が一番好きな料理の簡単なレシピや作り方の手順を説明してみましょう。",
      "minChars": 100,
      "hint": "まず、次に、最後に 등의 순서를 나타내는 표현을 사용하세요."
    },
    "teacherNote": "요리 관련 어휘와 캐주얼한 제안/부탁 표현을 연습합니다. '〜かと思って'의 뉘앙스를 설명해주세요.",
    "tags": [
      "요리",
      "식사",
      "캐주얼"
    ]
  },
  {
    "id": "daily-reading-1",
    "titleKo": "독서 습관",
    "titleJp": "読書習慣",
    "level": "N3",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "한 달에 책을 몇 권 정도 읽나요?",
        "jp": "月に何冊くらい本を読みますか。"
      },
      {
        "ko": "종이책과 전자책 중 어느 쪽을 선호하나요?",
        "jp": "紙の本と電子書籍、どちらを好みますか。"
      },
      {
        "ko": "어떤 장르의 책을 가장 좋아하나요?",
        "jp": "どのジャンルの本が一番好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "스마트폰 시대에 독서가 여전히 중요하다고 생각하나요?",
        "jp": "スマートフォンの時代に、読書は依然として重要だと思いますか。"
      },
      {
        "ko": "책을 읽는 것이 스트레스 해소에 도움이 되나요?",
        "jp": "本を読むことはストレス解消の役に立ちますか。"
      },
      {
        "ko": "인생에 큰 영향을 미친 책이 있다면 소개해주세요.",
        "jp": "人生に大きな影響を与えた本があれば紹介してください。"
      }
    ],
    "roleplay": {
      "situation": "독서 모임에서 최근 읽은 책을 소개하는 상황",
      "roleA": "감명 깊게 읽은 소설을 추천하는 사람",
      "roleB": "실용서나 자기계발서를 주로 읽는 사람"
    },
    "expressions": [
      {
        "word": "読書",
        "reading": "どくしょ",
        "meaning": "독서",
        "example": "趣味は読書です。"
      },
      {
        "word": "電子書籍",
        "reading": "でんししょせき",
        "meaning": "전자책",
        "example": "最近は電子書籍で読んでいます。"
      },
      {
        "word": "小説",
        "reading": "しょうせつ",
        "meaning": "소설",
        "example": "ミステリー小説が好きです。"
      },
      {
        "word": "自己啓発本",
        "reading": "じこけいはつぼん",
        "meaning": "자기계발서",
        "example": "自己啓発本を読んでモチベーションを上げます。"
      },
      {
        "word": "影響を受ける",
        "reading": "えいきょうをうける",
        "meaning": "영향을 받다",
        "example": "この本から大きな影響を受けました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、何か面白い本を読みましたか。",
        "translation": "최근에 뭔가 재미있는 책 읽으셨나요?"
      },
      {
        "speaker": "B",
        "text": "はい、話題になっているミステリー小説を読み終えたところです。とても引き込まれました。",
        "translation": "네, 화제가 되고 있는 미스터리 소설을 막 다 읽은 참이에요. 아주 몰입됐어요."
      },
      {
        "speaker": "A",
        "text": "私は小説よりも、ビジネス書や自己啓発本を読むことが多いですね。",
        "translation": "저는 소설보다는 비즈니스 서적이나 자기계발서를 읽는 경우가 많네요."
      },
      {
        "speaker": "B",
        "text": "そうなんですね。実用的な知識を得るためですか。",
        "translation": "그렇군요. 실용적인 지식을 얻기 위해서인가요?"
      },
      {
        "speaker": "A",
        "text": "ええ、仕事に直結する内容だと、すぐに実践できるので好きなんです。",
        "translation": "네, 일과 직결되는 내용이면 바로 실천할 수 있어서 좋아해요."
      },
      {
        "speaker": "B",
        "text": "なるほど。今度、おすすめのビジネス書を教えてください。",
        "translation": "그렇군요. 다음에 추천할 만한 비즈니스 서적을 알려주세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たところだ",
        "function": "막 ~한 참이다",
        "example": "読み終えたところです。",
        "translation": "막 다 읽은 참입니다."
      },
      {
        "pattern": "〜ことが多い",
        "function": "~하는 경우가 많다",
        "example": "自己啓発本を読むことが多いです。",
        "translation": "자기계발서를 읽는 경우가 많습니다."
      },
      {
        "pattern": "〜ため",
        "function": "목적 (~하기 위해)",
        "example": "知識を得るためですか。",
        "translation": "지식을 얻기 위해서인가요?"
      }
    ],
    "writingMission": {
      "prompt": "최근에 읽은 책이나 기사에 대한 짧은 감상문을 써보세요.",
      "promptJp": "最近読んだ本や記事についての短い感想文を書いてみましょう。",
      "minChars": 100,
      "hint": "あらすじ(줄거리)와 感想(감상)을 나누어 적어보세요."
    },
    "teacherNote": "독서 관련 어휘(장르 등)를 익히고, 자신의 의견이나 감상을 논리적으로 표현하는 연습을 합니다.",
    "tags": [
      "독서",
      "취미",
      "자기계발"
    ]
  },
  {
    "id": "daily-exercise-1",
    "titleKo": "운동과 건강",
    "titleJp": "運動と健康",
    "level": "N3",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "규칙적으로 운동을 하고 있나요?",
        "jp": "定期的に運動をしていますか。"
      },
      {
        "ko": "어떤 종류의 운동을 좋아하나요?",
        "jp": "どんな種類の運動が好きですか。"
      },
      {
        "ko": "운동을 할 때 혼자 하는 것을 선호하나요, 여럿이 하는 것을 선호하나요?",
        "jp": "運動をする時、一人でするのが好きですか、それとも複数でするのが好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "운동을 꾸준히 하기 위해 가장 필요한 것은 무엇이라고 생각하나요?",
        "jp": "運動を継続するために一番必要なものは何だと思いますか。"
      },
      {
        "ko": "신체적 건강과 정신적 건강 중 어느 쪽이 더 중요하다고 생각하나요?",
        "jp": "身体的な健康と精神的な健康、どちらの方が重要だと思いますか。"
      },
      {
        "ko": "최근 유행하는 운동 트렌드(예: 홈트레이닝)에 대해 어떻게 생각하나요?",
        "jp": "最近流行している運動のトレンド（例：ホームトレーニング）についてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "헬스장에서 우연히 만난 지인과 대화하는 상황",
      "roleA": "매일 헬스장에 출석하는 운동 마니아",
      "roleB": "새해 결심으로 방금 운동을 시작한 초보자"
    },
    "expressions": [
      {
        "word": "運動",
        "reading": "うんどう",
        "meaning": "운동",
        "example": "健康のために運動します。"
      },
      {
        "word": "筋トレ",
        "reading": "きんとれ",
        "meaning": "근력 운동",
        "example": "ジムで筋トレをしています。"
      },
      {
        "word": "継続する",
        "reading": "けいぞくする",
        "meaning": "계속하다, 지속하다",
        "example": "運動を継続するのは難しいです。"
      },
      {
        "word": "筋肉痛",
        "reading": "きんにくつう",
        "meaning": "근육통",
        "example": "運動しすぎて筋肉痛になりました。"
      },
      {
        "word": "ダイエット",
        "reading": "だいえっと",
        "meaning": "다이어트",
        "example": "ダイエットのために走っています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "あ、Bさん！ジムに通い始めたんですね。",
        "translation": "아, B씨! 헬스장에 다니기 시작하셨군요."
      },
      {
        "speaker": "B",
        "text": "はい、運動不足を解消しようと思って、今月から始めました。Aさんはよく来ているんですか。",
        "translation": "네, 운동 부족을 해소하려고 이번 달부터 시작했어요. A씨는 자주 오시나요?"
      },
      {
        "speaker": "A",
        "text": "ええ、週に4回は来て筋トレをしています。もう習慣になっていますね。",
        "translation": "네, 일주일에 4번은 와서 근력 운동을 하고 있어요. 이제 습관이 되었네요."
      },
      {
        "speaker": "B",
        "text": "すごいですね！私はまだ筋肉痛がひどくて、心が折れそうです。",
        "translation": "대단하시네요! 저는 아직 근육통이 심해서 마음이 꺾일 것 같아요."
      },
      {
        "speaker": "A",
        "text": "最初は誰でもそうですよ。無理しないで、少しずつペースを上げていけばいいんです。",
        "translation": "처음엔 누구나 그래요. 무리하지 말고, 조금씩 페이스를 올려가면 돼요."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。頑張って続けてみます。",
        "translation": "감사합니다. 열심히 계속해 볼게요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜始めた",
        "function": "동작의 시작",
        "example": "ジムに通い始めました。",
        "translation": "헬스장에 다니기 시작했습니다."
      },
      {
        "pattern": "〜ようと思って",
        "function": "의지/목적",
        "example": "運動不足を解消しようと思って。",
        "translation": "운동 부족을 해소하려고."
      },
      {
        "pattern": "〜ていけばいい",
        "function": "점진적 변화에 대한 조언",
        "example": "ペースを上げていけばいいんです。",
        "translation": "페이스를 올려가면 됩니다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 건강 관리 비법이나 앞으로 도전해보고 싶은 운동에 대해 써보세요.",
      "promptJp": "自分の健康管理の秘訣や、今後挑戦してみたい運動について書いてみましょう。",
      "minChars": 100,
      "hint": "健康のために(건강을 위해), 〜に挑戦したい(도전하고 싶다)를 활용하세요."
    },
    "teacherNote": "운동 관련 어휘(筋トレ, 筋肉痛 등)와 의지를 나타내는 표현(〜ようと思う)을 연습합니다.",
    "tags": [
      "운동",
      "건강",
      "습관"
    ]
  },
  {
    "id": "daily-interior-1",
    "titleKo": "인테리어와 방 꾸미기",
    "titleJp": "インテリアと部屋作り",
    "level": "N3",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "자신의 방 인테리어에 만족하나요?",
        "jp": "自分の部屋のインテリアに満足していますか。"
      },
      {
        "ko": "어떤 스타일의 인테리어를 좋아하나요? (예: 모던, 우드톤 등)",
        "jp": "どんなスタイルのインテリアが好きですか。（例：モダン、ウッドテイストなど）"
      },
      {
        "ko": "방에서 가장 마음에 드는 가구나 소품은 무엇인가요?",
        "jp": "部屋で一番気に入っている家具や小物はありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "생활 공간의 분위기가 사람의 심리에 어떤 영향을 미친다고 생각하나요?",
        "jp": "生活空間の雰囲気が人の心理にどんな影響を与えると思いますか。"
      },
      {
        "ko": "비싼 가구를 사는 것과 저렴한 가구를 자주 바꾸는 것 중 어느 쪽이 좋다고 생각하나요?",
        "jp": "高い家具を買うのと、安い家具を頻繁に買い替えるの、どちらが良いと思いますか。"
      },
      {
        "ko": "DIY(직접 만들기)로 가구나 소품을 만들어본 적이 있나요?",
        "jp": "DIY（自分で作ること）で家具や小物を作ったことはありますか。"
      }
    ],
    "roleplay": {
      "situation": "새로 이사한 친구의 집들이에서 방을 구경하며 대화하는 상황",
      "roleA": "인테리어에 관심이 많아 집을 예쁘게 꾸민 사람",
      "roleB": "인테리어 팁을 얻고 싶어하는 친구"
    },
    "expressions": [
      {
        "word": "模様替え",
        "reading": "もようがえ",
        "meaning": "방 구조/인테리어 바꾸기",
        "example": "週末に部屋の模様替えをした。"
      },
      {
        "word": "家具",
        "reading": "かぐ",
        "meaning": "가구",
        "example": "新しい家具を買いたい。"
      },
      {
        "word": "こだわる",
        "reading": "こだわる",
        "meaning": "신경 쓰다, 고집하다",
        "example": "照明にはこだわっている。"
      },
      {
        "word": "居心地がいい",
        "reading": "いごこちがいい",
        "meaning": "아늑하다, 머물기 편하다",
        "example": "この部屋はとても居心地がいい。"
      },
      {
        "word": "すっきりする",
        "reading": "すっきりする",
        "meaning": "깔끔하다, 후련하다",
        "example": "物が少なくてすっきりしている。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "わあ、すごくおしゃれな部屋だね！カフェみたい。",
        "translation": "와, 엄청 세련된 방이네! 카페 같아."
      },
      {
        "speaker": "B",
        "text": "ありがとう。今回はウッドテイストで統一してみたんだ。",
        "translation": "고마워. 이번엔 우드톤으로 통일해봤어."
      },
      {
        "speaker": "A",
        "text": "この間接照明もすごくいい雰囲気出してるね。どこで買ったの？",
        "translation": "이 간접 조명도 엄청 좋은 분위기를 내고 있네. 어디서 샀어?"
      },
      {
        "speaker": "B",
        "text": "ネットで見つけたんだ。照明一つで部屋の印象が全然変わるから、結構こだわったよ。",
        "translation": "인터넷에서 찾았어. 조명 하나로 방의 인상이 완전 바뀌니까, 꽤 신경 썼지."
      },
      {
        "speaker": "A",
        "text": "なるほどね。私も模様替えしたくなってきた。何かコツはある？",
        "translation": "그렇구나. 나도 인테리어 바꾸고 싶어졌어. 무슨 요령이 있어?"
      },
      {
        "speaker": "B",
        "text": "まずは色を3色くらいに絞ると、すっきりまとまって見えるよ。",
        "translation": "우선 색을 3가지 정도로 좁히면, 깔끔하게 정돈되어 보여."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜みたい",
        "function": "비유 (~같다)",
        "example": "カフェみたい。",
        "translation": "카페 같아."
      },
      {
        "pattern": "〜てみた",
        "function": "시험 삼아 해봄",
        "example": "統一してみたんだ。",
        "translation": "통일해봤어."
      },
      {
        "pattern": "〜と、〜",
        "function": "조건과 결과",
        "example": "色を絞ると、まとまって見える。",
        "translation": "색을 좁히면, 정돈되어 보여."
      }
    ],
    "writingMission": {
      "prompt": "자신이 꿈꾸는 이상적인 방의 모습에 대해 묘사해보세요.",
      "promptJp": "自分が夢見る理想的な部屋の様子について描写してみましょう。",
      "minChars": 100,
      "hint": "どんな家具があるか、どんな雰囲気か(雰囲気)를 구체적으로 적어보세요."
    },
    "teacherNote": "인테리어 관련 어휘(模様替え, こだわる 등)와 비유 표현(〜みたい)을 연습합니다.",
    "tags": [
      "인테리어",
      "집",
      "캐주얼"
    ]
  },
  {
    "id": "daily-stress-1",
    "titleKo": "스트레스 해소법",
    "titleJp": "ストレス解消法",
    "level": "N2",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "최근에 스트레스를 받은 일이 있나요?",
        "jp": "最近、ストレスを感じたことはありますか。"
      },
      {
        "ko": "자신만의 스트레스 해소법은 무엇인가요?",
        "jp": "自分なりのストレス解消法は何ですか。"
      },
      {
        "ko": "스트레스를 받을 때 혼자 있는 것을 선호하나요, 누군가와 만나는 것을 선호하나요?",
        "jp": "ストレスを感じた時、一人でいるのを好みますか、それとも誰かと会うのを好みますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "현대 사회에서 사람들이 스트레스를 많이 받는 근본적인 이유는 무엇일까요?",
        "jp": "現代社会で人々が多くのストレスを抱える根本的な理由は何でしょうか。"
      },
      {
        "ko": "적당한 스트레스는 삶에 긍정적인 영향을 미친다는 의견에 동의하나요?",
        "jp": "適度なストレスは人生に肯定的な影響を与えるという意見に同意しますか。"
      },
      {
        "ko": "타인의 스트레스를 덜어주기 위해 우리가 할 수 있는 일은 무엇일까요?",
        "jp": "他人のストレスを和らげるために、私たちができることは何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "업무/학업 스트레스로 힘들어하는 친구의 고민을 들어주는 상황",
      "roleA": "최근 일이 너무 많아 번아웃이 온 사람",
      "roleB": "공감하며 실질적인 조언이나 기분 전환을 제안하는 사람"
    },
    "expressions": [
      {
        "word": "ストレスが溜まる",
        "reading": "すとれすがたまる",
        "meaning": "스트레스가 쌓이다",
        "example": "仕事が忙しくてストレスが溜まっています。"
      },
      {
        "word": "発散する",
        "reading": "はっさんする",
        "meaning": "발산하다, 풀다",
        "example": "カラオケでストレスを発散します。"
      },
      {
        "word": "息抜き",
        "reading": "いきぬき",
        "meaning": "휴식, 기분 전환",
        "example": "たまには息抜きが必要です。"
      },
      {
        "word": "八つ当たり",
        "reading": "やつあたり",
        "meaning": "화풀이",
        "example": "人に八つ当たりしてはいけません。"
      },
      {
        "word": "気分転換",
        "reading": "きぶんてんかん",
        "meaning": "기분 전환",
        "example": "散歩をして気分転換を図ります。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、仕事のプレッシャーが大きくて、かなりストレスが溜まっているんです。",
        "translation": "최근에 업무 압박이 커서, 스트레스가 꽤 쌓여 있어요."
      },
      {
        "speaker": "B",
        "text": "それは大変ですね。ちゃんと休めていますか。無理をすると体調を崩しかねませんよ。",
        "translation": "그거 큰일이네요. 제대로 쉬고 있나요? 무리하면 몸을 망칠 수도 있어요."
      },
      {
        "speaker": "A",
        "text": "ええ、頭では分かっているんですが、つい仕事のことを考えてしまって。",
        "translation": "네, 머리로는 알고 있는데, 자꾸 일 생각을 하게 돼서요."
      },
      {
        "speaker": "B",
        "text": "オンとオフの切り替えが重要ですね。週末は仕事を忘れて、何か没頭できる趣味の時間を設けてみてはいかがですか。",
        "translation": "온과 오프의 전환이 중요하죠. 주말에는 일을 잊고, 뭔가 몰두할 수 있는 취미 시간을 가져보는 건 어때요?"
      },
      {
        "speaker": "A",
        "text": "そうですね。久しぶりに映画でも見て、気分転換を図ろうと思います。",
        "translation": "그렇네요. 오랜만에 영화라도 보고, 기분 전환을 해봐야겠어요."
      },
      {
        "speaker": "B",
        "text": "それがいいですよ。たまには思い切り息抜きをしてくださいね。",
        "translation": "그게 좋아요. 가끔은 마음껏 휴식을 취하세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜かねない",
        "function": "~할지도 모른다 (나쁜 결과)",
        "example": "体調を崩しかねません。",
        "translation": "몸을 망칠 수도 있습니다."
      },
      {
        "pattern": "〜てはいかがですか",
        "function": "정중한 제안",
        "example": "時間を設けてみてはいかがですか。",
        "translation": "시간을 가져보는 건 어떠신가요?"
      },
      {
        "pattern": "〜を図る",
        "function": "도모하다, 꾀하다",
        "example": "気分転換を図ります。",
        "translation": "기분 전환을 꾀합니다."
      }
    ],
    "writingMission": {
      "prompt": "스트레스가 극에 달했을 때 자신을 진정시키는 루틴이나 방법에 대해 논리적으로 서술하세요.",
      "promptJp": "ストレスがピークに達した時、自分を落ち着かせるルーティンや方法について論理的に述べてください。",
      "minChars": 150,
      "hint": "なぜその方法が効果的か(왜 그 방법이 효과적인지)를 포함하여 작성하세요."
    },
    "teacherNote": "N2 수준의 문법(〜かねない)과 스트레스 관련 고급 어휘(息抜き, 気分転換を図る)를 활용한 깊이 있는 대화를 유도합니다.",
    "tags": [
      "스트레스",
      "정신건강",
      "고민상담"
    ]
  },
  {
    "id": "daily-time-management-1",
    "titleKo": "시간 관리",
    "titleJp": "時間管理",
    "level": "N2",
    "category": "일상수다",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "평소에 시간 관리를 잘 하는 편인가요?",
        "jp": "普段、時間管理はうまくできている方ですか。"
      },
      {
        "ko": "약속 시간에 항상 일찍 가는 편인가요, 아니면 딱 맞춰 가는 편인가요?",
        "jp": "待ち合わせ時間にはいつも早く行く方ですか、それともぴったりに行く方ですか。"
      },
      {
        "ko": "스케줄러나 다이어리를 사용하나요?",
        "jp": "スケジュール帳やダイアリーを使っていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "현대인들이 항상 '시간이 부족하다'고 느끼는 이유는 무엇일까요?",
        "jp": "現代人が常に「時間が足りない」と感じる理由は何でしょうか。"
      },
      {
        "ko": "효율적인 시간 관리가 삶의 질을 어떻게 향상시킬 수 있나요?",
        "jp": "効率的な時間管理が生活の質をどのように向上させることができますか。"
      },
      {
        "ko": "아무것도 하지 않고 보내는 시간(여백의 시간)도 필요하다고 생각하나요?",
        "jp": "何もせずに過ごす時間（余白の時間）も必要だと思いますか。"
      }
    ],
    "roleplay": {
      "situation": "업무 효율을 높이기 위한 시간 관리 세미나에서 자신의 노하우를 공유하는 상황",
      "roleA": "시간 관리의 중요성과 구체적인 팁을 발표하는 강사",
      "roleB": "발표를 듣고 질문을 던지는 참가자"
    },
    "expressions": [
      {
        "word": "効率",
        "reading": "こうりつ",
        "meaning": "효율",
        "example": "作業の効率を上げる。"
      },
      {
        "word": "優先順位",
        "reading": "ゆうせんじゅんい",
        "meaning": "우선순위",
        "example": "タスクの優先順位をつける。"
      },
      {
        "word": "先延ばし",
        "reading": "さきのばし",
        "meaning": "미룸, 연기",
        "example": "面倒な仕事を先延ばしにする癖がある。"
      },
      {
        "word": "締め切り",
        "reading": "しめきり",
        "meaning": "마감",
        "example": "締め切りに追われる。"
      },
      {
        "word": "有意義",
        "reading": "ゆういぎ",
        "meaning": "유의미함, 보람 있음",
        "example": "時間を有意義に使う。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "本日は、限られた時間をいかに有意義に使うかについてお話しさせていただきます。",
        "translation": "오늘은 제한된 시간을 어떻게 유의미하게 사용할 것인가에 대해 말씀드리겠습니다."
      },
      {
        "speaker": "B",
        "text": "先生、私はいつも締め切りに追われてしまい、仕事の質が落ちてしまうのが悩みです。",
        "translation": "선생님, 저는 항상 마감에 쫓겨서 업무의 질이 떨어지는 것이 고민입니다."
      },
      {
        "speaker": "A",
        "text": "そのお気持ち、よく分かります。重要なのは、タスクに優先順位をつけることです。緊急ではないが重要なタスクを先延ばしにしていませんか。",
        "translation": "その 마음, 잘 압니다. 중요한 것은 업무에 우선순위를 매기는 것입니다. 긴급하지는 않지만 중요한 업무를 미루고 있지는 않나요?"
      },
      {
        "speaker": "B",
        "text": "確かに、目の前の急ぎの仕事ばかりこなしている気がします。",
        "translation": "확실히, 눈앞의 급한 일만 처리하고 있는 것 같습니다."
      },
      {
        "speaker": "A",
        "text": "朝の最も集中力が高い時間帯に、その「重要だが緊急でない」タスクを配置することをお勧めします。",
        "translation": "아침의 가장 집중력이 높은 시간대에 그 '중요하지만 긴급하지 않은' 업무를 배치하는 것을 추천합니다."
      },
      {
        "speaker": "B",
        "text": "なるほど。明日から早速実践してみます。",
        "translation": "그렇군요. 내일부터 당장 실천해 보겠습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "いかに〜か",
        "function": "어떻게 ~할 것인가 (방법/정도)",
        "example": "いかに有意義に使うか。",
        "translation": "어떻게 유의미하게 사용할 것인가."
      },
      {
        "pattern": "〜に追われる",
        "function": "~에 쫓기다",
        "example": "締め切りに追われる。",
        "translation": "마감에 쫓기다."
      },
      {
        "pattern": "〜ばかり",
        "function": "~만 (부정적 뉘앙스)",
        "example": "急ぎの仕事ばかりこなしている。",
        "translation": "급한 일만 처리하고 있다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 하루 일과를 분석하고, 버려지는 시간을 줄이기 위한 구체적인 계획을 작성하세요.",
      "promptJp": "自分の一日のスケジュールを分析し、無駄な時間を減らすための具体的な計画を作成してください。",
      "minChars": 150,
      "hint": "優先順位(우선순위), 効率的(효율적) 등의 비즈니스 어휘를 사용해보세요."
    },
    "teacherNote": "비즈니스 상황에서의 정중한 표현과 시간 관리 관련 고급 어휘(優先順位, 先延ばし)를 익히도록 지도합니다.",
    "tags": [
      "시간관리",
      "효율",
      "비즈니스"
    ]
  },
  {
    "id": "daily-photography-1",
    "titleKo": "사진 찍기와 기록",
    "titleJp": "写真撮影と記録",
    "level": "N2",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "평소에 사진을 자주 찍는 편인가요?",
        "jp": "普段、写真をよく撮る方ですか。"
      },
      {
        "ko": "주로 어떤 피사체(풍경, 음식, 인물 등)를 찍나요?",
        "jp": "主にどんな被写体（風景、食べ物、人物など）を撮りますか。"
      },
      {
        "ko": "찍은 사진은 SNS에 공유하나요, 아니면 혼자만 보나요?",
        "jp": "撮った写真はSNSにシェアしますか、それとも自分だけで見ますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "모든 순간을 사진으로 남기려는 현대인들의 습관에 대해 어떻게 생각하나요?",
        "jp": "すべての瞬間を写真に残そうとする現代人の習慣についてどう思いますか。"
      },
      {
        "ko": "사진을 찍는 행위가 현재의 순간을 즐기는 데 방해가 된다고 생각한 적이 있나요?",
        "jp": "写真を撮る行為が、現在の瞬間を楽しむ妨げになると感じたことはありますか。"
      },
      {
        "ko": "기억과 사진 중, 과거를 회상하는 데 더 중요한 역할을 하는 것은 무엇일까요?",
        "jp": "記憶と写真のうち、過去を振り返る上でより重要な役割を果たすのはどちらでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "여행지에서 사진 촬영에 대해 의견이 엇갈리는 상황",
      "roleA": "남는 건 사진뿐이라며 계속해서 사진을 찍으려는 사람",
      "roleB": "사진보다는 눈으로 직접 보고 분위기를 즐기고 싶은 사람"
    },
    "expressions": [
      {
        "word": "被写体",
        "reading": "ひしゃたい",
        "meaning": "피사체",
        "example": "風景を被写体にして写真を撮る。"
      },
      {
        "word": "映える",
        "reading": "ばえる",
        "meaning": "사진이 잘 나오다, 돋보이다",
        "example": "SNS映えするスポットを探す。"
      },
      {
        "word": "目に焼き付ける",
        "reading": "めにやきつける",
        "meaning": "눈에 새기다",
        "example": "美しい景色をしっかり目に焼き付ける。"
      },
      {
        "word": "振り返る",
        "reading": "ふりかえる",
        "meaning": "되돌아보다, 회상하다",
        "example": "後で写真を見て思い出を振り返る。"
      },
      {
        "word": "ファインダー越し",
        "reading": "ふぁいんだーごし",
        "meaning": "뷰파인더 너머",
        "example": "ファインダー越しに世界を見る。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ちょっと待って、ここすごく映えるから写真撮ろう！",
        "translation": "잠깐만, 여기 사진 엄청 잘 나오니까 사진 찍자!"
      },
      {
        "speaker": "B",
        "text": "また？さっきからファインダー越しにしか景色を見てないんじゃない？",
        "translation": "또? 아까부터 뷰파인더 너머로만 경치를 보고 있는 거 아니야?"
      },
      {
        "speaker": "A",
        "text": "だって、後で振り返った時に写真がないと寂しいじゃん。記憶なんて薄れちゃうし。",
        "translation": "그치만, 나중에 되돌아봤을 때 사진이 없으면 아쉽잖아. 기억은 흐려지기 마련이고."
      },
      {
        "speaker": "B",
        "text": "それは分かるけど、せっかく来たんだから、まずは自分の目に焼き付けようよ。",
        "translation": "그건 알지만, 모처럼 왔으니까 우선은 자기 눈에 새기자."
      },
      {
        "speaker": "A",
        "text": "うーん、言われてみればそうかも。じゃあ、この一枚だけ撮ったらスマホしまうね。",
        "translation": "음, 듣고 보니 그럴지도. 그럼 이 한 장만 찍고 스마트폰 넣을게."
      },
      {
        "speaker": "B",
        "text": "うん、そうして。この空気感は写真じゃ伝わらないからね。",
        "translation": "응, 그렇게 해. 이 공기감은 사진으로는 전해지지 않으니까."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜越し",
        "function": "~너머",
        "example": "ファインダー越しに景色を見る。",
        "translation": "뷰파인더 너머로 경치를 본다."
      },
      {
        "pattern": "〜ちゃう（てしまう）",
        "function": "~해버리다 (캐주얼)",
        "example": "記憶なんて薄れちゃう。",
        "translation": "기억 따위는 흐려져 버린다."
      },
      {
        "pattern": "せっかく〜んだから",
        "function": "모처럼 ~했으니까",
        "example": "せっかく来たんだから。",
        "translation": "모처럼 왔으니까."
      }
    ],
    "writingMission": {
      "prompt": "자신이 찍은 사진 중 가장 의미 있는 한 장을 고르고, 그 사진에 담긴 사연을 설명하세요.",
      "promptJp": "自分が撮った写真の中で最も意味のある一枚を選び、その写真に込められたエピソードを説明してください。",
      "minChars": 150,
      "hint": "いつ、どこで、どんな気持ちで(언제, 어디서, 어떤 기분으로) 찍었는지 상세히 묘사하세요."
    },
    "teacherNote": "사진과 기록에 대한 철학적인 주제를 다루며, '目に焼き付ける'와 같은 관용구를 자연스럽게 사용하도록 유도합니다.",
    "tags": [
      "사진",
      "기록",
      "여행"
    ]
  },
  {
    "id": "daily-health-care-1",
    "titleKo": "건강 관리와 영양",
    "titleJp": "健康管理と栄養",
    "level": "N2",
    "category": "일상수다",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "평소에 영양제를 챙겨 먹나요?",
        "jp": "普段、サプリメントを飲んでいますか。"
      },
      {
        "ko": "건강을 위해 특별히 피하는 음식이 있나요?",
        "jp": "健康のために特別に避けている食べ物はありますか。"
      },
      {
        "ko": "정기적으로 건강검진을 받고 있나요?",
        "jp": "定期的に健康診断を受けていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "현대인들의 식습관이 과거에 비해 어떻게 변화했다고 생각하나요?",
        "jp": "現代人の食習慣は過去に比べてどのように変化したと思いますか。"
      },
      {
        "ko": "정보의 홍수 속에서 올바른 건강 정보를 어떻게 선별해야 할까요?",
        "jp": "情報の洪水の中で、正しい健康情報をどのように見分けるべきでしょうか。"
      },
      {
        "ko": "신체적 건강을 유지하는 데 있어 유전과 생활습관 중 어느 것이 더 큰 영향을 미친다고 보나요?",
        "jp": "身体的な健康を維持する上で、遺伝と生活習慣のどちらがより大きな影響を与えると考えますか。"
      }
    ],
    "roleplay": {
      "situation": "최근 건강검진 결과가 안 좋게 나온 동료와 대화하는 상황",
      "roleA": "건강검진 결과에 충격을 받고 식습관을 개선하려는 사람",
      "roleB": "건강 관리에 해박하여 실질적인 조언을 해주는 사람"
    },
    "expressions": [
      {
        "word": "健康診断",
        "reading": "けんこうしんだん",
        "meaning": "건강검진",
        "example": "年に一度、健康診断を受けます。"
      },
      {
        "word": "偏る",
        "reading": "かたよる",
        "meaning": "치우치다",
        "example": "栄養が偏った食事は避けるべきです。"
      },
      {
        "word": "サプリメント",
        "reading": "さぷりめんと",
        "meaning": "영양제, 보충제",
        "example": "不足しがちなビタミンをサプリメントで補う。"
      },
      {
        "word": "見直す",
        "reading": "みなおす",
        "meaning": "재검토하다, 다시 보다",
        "example": "生活習慣を見直す必要があります。"
      },
      {
        "word": "予防",
        "reading": "よぼう",
        "meaning": "예방",
        "example": "病気の予防に努める。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "先日受けた健康診断の結果が返ってきたんですが、コレステロール値が高くてショックを受けています。",
        "translation": "얼마 전 받은 건강검진 결과가 나왔는데, 콜레스테롤 수치가 높아서 충격을 받았어요."
      },
      {
        "speaker": "B",
        "text": "それは心配ですね。最近、外食や脂っこい食事が続いていたのではありませんか。",
        "translation": "그거 걱정이네요. 최근에 외식이나 기름진 식사가 계속되었던 건 아닌가요?"
      },
      {
        "speaker": "A",
        "text": "おっしゃる通りです。忙しさを理由に、食生活がかなり偏っていました。",
        "translation": "말씀하신 대로입니다. 바쁘다는 핑계로 식생활이 꽤 치우쳐 있었어요."
      },
      {
        "speaker": "B",
        "text": "これを機に、生活習慣を根本から見直す良いチャンスかもしれませんよ。まずは野菜中心の食事を心がけてみては？",
        "translation": "이것을 계기로 생활습관을 근본부터 다시 돌아볼 좋은 기회일지도 몰라요. 우선은 채소 위주의 식사를 염두에 두는 건 어때요?"
      },
      {
        "speaker": "A",
        "text": "そうですね。病気になってからでは遅いですから、今日から予防に努めます。",
        "translation": "그렇네요. 병에 걸리고 나서는 늦으니까, 오늘부터 예방에 힘쓰겠습니다."
      },
      {
        "speaker": "B",
        "text": "応援しています。無理のない範囲で少しずつ改善していきましょう。",
        "translation": "응원할게요. 무리 없는 범위에서 조금씩 개선해 나갑시다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜がち",
        "function": "~하기 쉬움, 자주 ~함",
        "example": "不足しがちなビタミン。",
        "translation": "부족하기 쉬운 비타민."
      },
      {
        "pattern": "〜を機に",
        "function": "~을 계기로",
        "example": "これを機に見直す。",
        "translation": "이것을 계기로 재검토하다."
      },
      {
        "pattern": "〜てからでは遅い",
        "function": "~하고 나서는 늦다",
        "example": "病気になってからでは遅い。",
        "translation": "병에 걸리고 나서는 늦다."
      }
    ],
    "writingMission": {
      "prompt": "현대인의 불규칙한 식습관이 초래하는 문제점과 그 해결 방안에 대해 논술하세요.",
      "promptJp": "現代人の不規則な食習慣がもたらす問題点とその解決策について論述してください。",
      "minChars": 150,
      "hint": "原因(원인), 影響(영향), 対策(대책)의 논리적 구조를 갖추어 작성하세요."
    },
    "teacherNote": "건강 관련 전문 어휘와 논리적인 의견 개진에 필요한 문형(〜を機に 등)을 연습합니다.",
    "tags": [
      "건강",
      "식습관",
      "자기관리"
    ]
  },
  {
    "id": "daily-minimalism-1",
    "titleKo": "미니멀 라이프",
    "titleJp": "ミニマルライフ",
    "level": "N1",
    "category": "일상수다",
    "activity": "발표",
    "style": "정중체",
    "duration": 40,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "미니멀 라이프(최소주의 삶)에 대해 들어본 적이 있나요?",
        "jp": "ミニマルライフ（最小限主義の生活）について聞いたことがありますか。"
      },
      {
        "ko": "자신의 방에는 불필요한 물건이 많다고 생각하나요?",
        "jp": "自分の部屋には不要な物が多いと思いますか。"
      },
      {
        "ko": "물건을 버릴 때 아쉬움을 많이 느끼는 편인가요?",
        "jp": "物を捨てる時、未練を強く感じる方ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "소유가 곧 행복이라는 물질주의적 가치관에 대해 어떻게 생각하나요?",
        "jp": "所有がすなわち幸福であるという物質主義的な価値観についてどう思いますか。"
      },
      {
        "ko": "물건을 줄이는 것이 정신적 자유로 이어진다는 주장에 동의하나요?",
        "jp": "物を減らすことが精神的な自由につながるという主張に同意しますか。"
      },
      {
        "ko": "극단적인 미니멀리즘이 가져올 수 있는 부작용은 무엇일까요?",
        "jp": "極端なミニマリズムがもたらし得る副作用は何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "소비 습관에 관한 팟캐스트에서 미니멀리즘을 주제로 토론하는 상황",
      "roleA": "물건을 최소화함으로써 삶의 질이 높아졌다고 주장하는 미니멀리스트",
      "roleB": "추억이 담긴 물건이나 다양한 취미 용품이 삶을 풍요롭게 한다고 믿는 맥시멀리스트"
    },
    "expressions": [
      {
        "word": "断捨離",
        "reading": "だんしゃり",
        "meaning": "단사리 (불필요한 것을 끊고, 버리고, 집착에서 벗어남)",
        "example": "年末に徹底的な断捨離を行った。"
      },
      {
        "word": "執着",
        "reading": "しゅうちゃく",
        "meaning": "집착",
        "example": "物への執着を手放すことが重要だ。"
      },
      {
        "word": "豊かさ",
        "reading": "ゆたかさ",
        "meaning": "풍요로움",
        "example": "真の豊かさとは何かを問い直す。"
      },
      {
        "word": "見栄を張る",
        "reading": "みえをはる",
        "meaning": "허세를 부리다",
        "example": "他人に良く見られようと見栄を張る。"
      },
      {
        "word": "本質",
        "reading": "ほんしつ",
        "meaning": "본질",
        "example": "物事の本質を見極める。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "私は断捨離を通じて、物への執着を手放すことができました。結果として、心に余裕が生まれたと感じています。",
        "translation": "저는 단사리를 통해 물건에 대한 집착을 내려놓을 수 있었습니다. 결과적으로 마음에 여유가 생겼다고 느낍니다."
      },
      {
        "speaker": "B",
        "text": "確かにすっきりとした空間は魅力的ですが、思い出の品まで処分してしまうのは、過去の自分を否定するようで抵抗があります。",
        "translation": "확실히 깔끔한 공간은 매력적이지만, 추억이 담긴 물건까지 처분해 버리는 것은 과거의 자신을 부정하는 것 같아 거부감이 듭니다."
      },
      {
        "speaker": "A",
        "text": "おっしゃる意味は分かります。しかし、過去の物に縛られるあまり、現在の生活空間が圧迫されては本末転倒ではないでしょうか。",
        "translation": "무슨 말씀이신지 압니다. 하지만 과거의 물건에 얽매인 나머지, 현재의 생활 공간이 압박받는다면 주객전도가 아닐까요?"
      },
      {
        "speaker": "B",
        "text": "一理ありますね。ただ、多様な物に囲まれることでインスピレーションを得るという側面も見逃せないと思います。",
        "translation": "일리 있네요. 다만, 다양한 물건에 둘러싸임으로써 영감을 얻는다는 측면도 간과할 수 없다고 생각합니다."
      },
      {
        "speaker": "A",
        "text": "ええ、ですから重要なのは、自分にとっての「真の豊かさ」の本質を見極め、必要なものだけを選択する眼を養うことだと思います。",
        "translation": "네, 그러므로 중요한 것은 자신에게 있어 '진정한 풍요로움'의 본질을 파악하고, 필요한 것만을 선택하는 안목을 기르는 것이라 생각합니다."
      },
      {
        "speaker": "B",
        "text": "なるほど。単に捨てるのではなく、自分との対話のプロセスだと言えそうですね。",
        "translation": "그렇군요. 단순히 버리는 것이 아니라, 자신과의 대화 과정이라고 할 수 있겠네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜あまり",
        "function": "너무 ~한 나머지",
        "example": "過去の物に縛られるあまり。",
        "translation": "과거의 물건에 얽매인 나머지."
      },
      {
        "pattern": "〜ては本末転倒だ",
        "function": "~해서는 주객전도다",
        "example": "生活空間が圧迫されては本末転倒だ。",
        "translation": "생활 공간이 압박받는다면 주객전도다."
      },
      {
        "pattern": "〜を見逃せない",
        "function": "~을 간과할 수 없다",
        "example": "インスピレーションを得るという側面も見逃せない。",
        "translation": "영감을 얻는다는 측면도 간과할 수 없다."
      }
    ],
    "writingMission": {
      "prompt": "현대 사회에서 미니멀리즘이 유행하는 사회적, 심리적 배경을 분석하는 에세이를 작성하세요.",
      "promptJp": "現代社会においてミニマリズムが流行している社会的、心理的背景を分析するエッセイを作成してください。",
      "minChars": 200,
      "hint": "物質的豊かさ(물질적 풍요), 情報過多(정보 과다), 精神的自由(정신적 자유) 등의 키워드를 활용하세요."
    },
    "teacherNote": "N1 수준의 추상적이고 철학적인 어휘(執着, 本質, 本末転倒)를 활용하여 깊이 있는 토론을 진행하도록 지도합니다.",
    "tags": [
      "미니멀리즘",
      "가치관",
      "토론"
    ]
  },
  {
    "id": "daily-digital-detox-1",
    "titleKo": "디지털 디톡스",
    "titleJp": "デジタルデトックス",
    "level": "N1",
    "category": "일상수다",
    "activity": "작문",
    "style": "정중체",
    "duration": 40,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "하루에 스마트폰을 몇 시간 정도 사용하나요?",
        "jp": "一日にスマートフォンを何時間くらい使用しますか。"
      },
      {
        "ko": "스마트폰이 없으면 불안감을 느끼나요?",
        "jp": "スマートフォンがないと不安を感じますか。"
      },
      {
        "ko": "의도적으로 전자기기 사용을 줄여본 경험이 있나요?",
        "jp": "意図的に電子機器の使用を減らしてみた経験はありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "상시 연결성(Always-on)이 인간관계의 질을 떨어뜨린다는 주장에 대해 어떻게 생각하나요?",
        "jp": "常時接続性（Always-on）が人間関係の質を低下させるという主張についてどう思いますか。"
      },
      {
        "ko": "디지털 기기가 우리의 뇌 구조나 인지 능력에 어떤 변화를 가져왔다고 보나요?",
        "jp": "デジタル機器が私たちの脳の構造や認知能力にどのような変化をもたらしたと考えますか。"
      },
      {
        "ko": "기술의 발전을 누리면서도 디지털 종속에서 벗어날 수 있는 현실적인 방법은 무엇일까요?",
        "jp": "技術の発展を享受しつつも、デジタル従属から抜け出すための現実的な方法は何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "IT 기업의 사내 세미나에서 스마트폰 중독 문제에 대해 토론하는 상황",
      "roleA": "디지털 디톡스의 필요성을 역설하며 오프라인 경험의 가치를 강조하는 사람",
      "roleB": "디지털 기기의 효율성을 옹호하며, 문제는 기기가 아니라 사용 방식이라고 반박하는 사람"
    },
    "expressions": [
      {
        "word": "依存症",
        "reading": "いぞんしょう",
        "meaning": "의존증, 중독",
        "example": "深刻なスマホ依存症に陥っている。"
      },
      {
        "word": "常時接続",
        "reading": "じょうじせつぞく",
        "meaning": "상시 접속",
        "example": "常時接続の社会がストレスを生む。"
      },
      {
        "word": "遮断する",
        "reading": "しゃだんする",
        "meaning": "차단하다",
        "example": "外部からの情報を一時的に遮断する。"
      },
      {
        "word": "弊害",
        "reading": "へいがい",
        "meaning": "폐해",
        "example": "デジタル化がもたらす弊害を無視できない。"
      },
      {
        "word": "享受する",
        "reading": "きょうじゅする",
        "meaning": "향유하다, 누리다",
        "example": "テクノロジーの恩恵を享受する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "現代人は、絶え間なく押し寄せる通知のせいで、深く思考する時間を奪われているのではないでしょうか。",
        "translation": "현대인은 끊임없이 밀려드는 알림 때문에 깊이 사고할 시간을 빼앗기고 있는 것은 아닐까요?"
      },
      {
        "speaker": "B",
        "text": "確かに情報過多の弊害はありますが、それはツールそのものの問題ではなく、利用者のリテラシーの問題だと言わざるを得ません。",
        "translation": "확실히 정보 과다의 폐해는 있습니다만, 그것은 도구 자체의 문제가 아니라 이용자의 리터러시 문제라고 하지 않을 수 없습니다."
      },
      {
        "speaker": "A",
        "text": "しかし、アプリは人間の注意力を引くように巧妙に設計されており、個人の意志力だけで抗うのは至難の業です。",
        "translation": "하지만 앱은 인간의 주의력을 끌도록 교묘하게 설계되어 있어, 개인의 의지력만으로 저항하는 것은 지극히 어려운 일입니다."
      },
      {
        "speaker": "B",
        "text": "だからこそ、テクノロジーを完全に遮断するのではなく、使用時間を制限するなどのルールを設けることが現実的な解決策となるはずです。",
        "translation": "그렇기 때문에 기술을 완전히 차단하는 것이 아니라, 사용 시간을 제한하는 등의 규칙을 마련하는 것이 현실적인 해결책이 될 것입니다."
      },
      {
        "speaker": "A",
        "text": "ええ、私もテクノロジーの恩恵を否定するつもりはありません。ただ、意図的に「つながらない権利」を行使する時間も不可欠だと主張したいのです。",
        "translation": "네, 저도 기술의 혜택을 부정할 생각은 없습니다. 다만, 의도적으로 '연결되지 않을 권리'를 행사하는 시간도 불가결하다고 주장하고 싶은 것입니다."
      },
      {
        "speaker": "B",
        "text": "その点には大いに賛同します。デジタルとアナログの適切なバランスを見出すことが、今後の課題ですね。",
        "translation": "그 점에는 크게 찬동합니다. 디지털과 아날로그의 적절한 균형을 찾는 것이 향후의 과제이겠네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ざるを得ない",
        "function": "~하지 않을 수 없다",
        "example": "リテラシーの問題だと言わざるを得ません。",
        "translation": "리터러시 문제라고 하지 않을 수 없습니다."
      },
      {
        "pattern": "〜至難の業だ",
        "function": "지극히 어려운 일이다",
        "example": "個人の意志力だけで抗うのは至難の業です。",
        "translation": "개인의 의지력만으로 저항하는 것은 지극히 어려운 일입니다."
      },
      {
        "pattern": "〜つもりはない",
        "function": "~할 생각은 없다",
        "example": "恩恵を否定するつもりはありません。",
        "translation": "혜택을 부정할 생각은 없습니다."
      }
    ],
    "writingMission": {
      "prompt": "디지털 기기가 인간의 인지 능력과 사회적 관계에 미치는 영향에 대해 비판적으로 논증하는 글을 작성하세요.",
      "promptJp": "デジタル機器が人間の認知能力と社会的関係に及ぼす影響について批判的に論証する文章を作成してください。",
      "minChars": 250,
      "hint": "序論(서론), 本論(본론), 結論(결론)의 형식을 갖추고, 구체적인 사례를 들어 주장을 뒷받침하세요."
    },
    "teacherNote": "N1 수준의 논리적 전개와 고급 어휘(依存症, 弊害, 至難の業)를 활용하여 사회적 이슈에 대해 깊이 있게 토론하고 작문하도록 지도합니다.",
    "tags": [
      "디지털디톡스",
      "현대사회",
      "토론"
    ]
  },
  {
    "id": "daily-commute-1",
    "titleKo": "출퇴근과 교통수단",
    "titleJp": "通勤と交通手段",
    "level": "N4",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "학교나 회사까지 어떻게 가나요?",
        "jp": "学校や会社までどうやって行きますか。"
      },
      {
        "ko": "통근/통학 시간은 얼마나 걸리나요?",
        "jp": "通勤・通学時間はどのくらいかかりますか。"
      },
      {
        "ko": "지하철과 버스 중 어느 것을 더 자주 타나요?",
        "jp": "地下鉄とバス、どちらによく乗りますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "출퇴근 시간에 주로 무엇을 하면서 시간을 보내나요?",
        "jp": "通勤時間に主に何をしながら時間を過ごしますか。"
      },
      {
        "ko": "만원 전철을 탈 때의 기분은 어떤가요?",
        "jp": "満員電車に乗る時の気分はどうですか。"
      },
      {
        "ko": "이상적인 통근 시간은 몇 분 정도라고 생각하나요?",
        "jp": "理想的な通勤時間は何分くらいだと思いますか。"
      }
    ],
    "roleplay": {
      "situation": "아침에 회사에 도착해서 동료와 출근길에 대해 이야기하는 상황",
      "roleA": "오늘 지하철이 연착되어 지각할 뻔한 사람",
      "roleB": "자전거로 출근해서 상쾌한 기분인 사람"
    },
    "expressions": [
      {
        "word": "通勤",
        "reading": "つうきん",
        "meaning": "통근, 출퇴근",
        "example": "毎日の通勤が大変です。"
      },
      {
        "word": "満員電車",
        "reading": "まんいんでんしゃ",
        "meaning": "만원 전철",
        "example": "朝の満員電車は疲れます。"
      },
      {
        "word": "遅延",
        "reading": "ちえん",
        "meaning": "지연, 연착",
        "example": "電車が遅延しています。"
      },
      {
        "word": "乗り換える",
        "reading": "のりかえる",
        "meaning": "환승하다",
        "example": "新宿駅で乗り換えます。"
      },
      {
        "word": "混む",
        "reading": "こむ",
        "meaning": "붐비다",
        "example": "道がとても混んでいます。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "おはようございます。今日は電車が遅延して、遅刻するかと思いました。",
        "translation": "안녕하세요. 오늘은 전철이 연착돼서 지각할 뻔했어요."
      },
      {
        "speaker": "B",
        "text": "おはようございます。大変でしたね。満員電車でしたか。",
        "translation": "안녕하세요. 고생하셨네요. 만원 전철이었나요?"
      },
      {
        "speaker": "A",
        "text": "はい、とても混んでいて疲れました。Bさんはいつもどうやって通勤していますか。",
        "translation": "네, 너무 붐벼서 피곤했어요. B씨는 항상 어떻게 출근하시나요?"
      },
      {
        "speaker": "B",
        "text": "私は家が近いので、自転車で通っています。",
        "translation": "저는 집이 가까워서 자전거로 다니고 있어요."
      },
      {
        "speaker": "A",
        "text": "いいですね。運動にもなるし、電車のストレスもなくて羨ましいです。",
        "translation": "좋네요. 운동도 되고, 전철 스트레스도 없어서 부러워요."
      },
      {
        "speaker": "B",
        "text": "ええ、朝の空気が気持ちいいですよ。",
        "translation": "네, 아침 공기가 상쾌해요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "どうやって",
        "function": "방법 묻기",
        "example": "どうやって行きますか。",
        "translation": "어떻게 가나요?"
      },
      {
        "pattern": "〜かと思った",
        "function": "~할 뻔했다, ~인 줄 알았다",
        "example": "遅刻するかと思いました。",
        "translation": "지각할 뻔했어요."
      },
      {
        "pattern": "〜にもなる",
        "function": "~도 되다 (일석이조의 효과)",
        "example": "運動にもなります。",
        "translation": "운동도 됩니다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 통근/통학 경로와 걸리는 시간, 그리고 그 시간에 주로 하는 일을 적어보세요.",
      "promptJp": "自分の通勤・通学ルートとかかる時間、そしてその時間に主にしていることを書いてみましょう。",
      "minChars": 80,
      "hint": "〜から〜まで(에서~까지), 〜で(교통수단)를 사용하세요."
    },
    "teacherNote": "교통수단 관련 어휘와 이동 시간을 표현하는 방법을 연습합니다.",
    "tags": [
      "교통",
      "출퇴근",
      "일상"
    ]
  },
  {
    "id": "daily-season-1",
    "titleKo": "계절의 변화",
    "titleJp": "季節の変化",
    "level": "N3",
    "category": "일상수다",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "사계절 중 언제가 가장 좋나요?",
        "jp": "四季の中でいつが一番好きですか。"
      },
      {
        "ko": "계절이 바뀔 때 어떤 기분이 드나요?",
        "jp": "季節が変わる時、どんな気分になりますか。"
      },
      {
        "ko": "봄이 오면 가장 먼저 하고 싶은 일은 무엇인가요?",
        "jp": "春が来たら一番最初にしたいことは何ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "계절의 변화가 사람의 감정이나 생산성에 영향을 미친다고 생각하나요?",
        "jp": "季節の変化が人の感情や生産性に影響を与えると思いますか。"
      },
      {
        "ko": "지구 온난화로 인해 사계절의 구분이 모호해지는 것에 대해 어떻게 느끼나요?",
        "jp": "地球温暖化によって四季の区別が曖昧になっていることについてどう感じますか。"
      },
      {
        "ko": "특정 계절을 떠올리게 하는 음식이나 노래가 있나요?",
        "jp": "特定の季節を思い起こさせる食べ物や歌はありますか。"
      }
    ],
    "roleplay": {
      "situation": "갑자기 날씨가 추워진 가을날, 친구와 계절에 대해 이야기하는 상황",
      "roleA": "추위를 많이 타서 겨울이 오는 것이 싫은 사람",
      "roleB": "겨울 스포츠나 겨울 음식을 좋아해서 기대하는 사람"
    },
    "expressions": [
      {
        "word": "四季",
        "reading": "しき",
        "meaning": "사계절",
        "example": "日本には美しい四季があります。"
      },
      {
        "word": "肌寒い",
        "reading": "はだざむい",
        "meaning": "쌀쌀하다",
        "example": "秋になって少し肌寒くなりました。"
      },
      {
        "word": "紅葉",
        "reading": "こうよう",
        "meaning": "단풍",
        "example": "山が紅葉してきれいです。"
      },
      {
        "word": "衣替え",
        "reading": "ころもがえ",
        "meaning": "옷장 정리 (계절에 맞게 옷을 바꿈)",
        "example": "週末に衣替えをします。"
      },
      {
        "word": "旬",
        "reading": "しゅん",
        "meaning": "제철",
        "example": "旬の食材を使った料理を食べる。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、急に肌寒くなりましたね。もうすっかり秋ですね。",
        "translation": "최근에 갑자기 쌀쌀해졌네요. 이제 완전히 가을이에요."
      },
      {
        "speaker": "B",
        "text": "そうですね。朝晩は冷え込むので、そろそろ衣替えをしないといけません。",
        "translation": "그렇네요. 아침저녁으로는 쌀쌀해서, 슬슬 옷장 정리를 해야겠어요."
      },
      {
        "speaker": "A",
        "text": "私は寒がりなので、これから冬になるのが少し憂鬱です。",
        "translation": "저는 추위를 많이 타서, 앞으로 겨울이 되는 게 조금 우울해요."
      },
      {
        "speaker": "B",
        "text": "そうですか。私はスノーボードが好きなので、冬が来るのが待ち遠しいですよ。",
        "translation": "그러신가요. 저는 스노보드를 좋아해서, 겨울이 오는 게 몹시 기다려져요."
      },
      {
        "speaker": "A",
        "text": "なるほど。でも、冬は鍋料理が美味しい季節でもありますね。",
        "translation": "그렇군요. 그래도 겨울은 전골 요리가 맛있는 계절이기도 하죠."
      },
      {
        "speaker": "B",
        "text": "ええ、旬の食材を使った温かい鍋は最高ですね。",
        "translation": "네, 제철 식재료를 사용한 따뜻한 전골은 최고죠."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜くなる",
        "function": "상태의 변화 (이형용사)",
        "example": "肌寒くなりました。",
        "translation": "쌀쌀해졌습니다."
      },
      {
        "pattern": "〜ないといけない",
        "function": "의무 (~해야 한다)",
        "example": "衣替えをしないといけません。",
        "translation": "옷장 정리를 해야 합니다."
      },
      {
        "pattern": "〜待ち遠しい",
        "function": "몹시 기다려지다",
        "example": "冬が来るのが待ち遠しいです。",
        "translation": "겨울이 오는 게 몹시 기다려집니다."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 계절의 매력에 대해 3가지 이유를 들어 설명해보세요.",
      "promptJp": "自分が一番好きな季節の魅力について、3つの理由を挙げて説明してみましょう。",
      "minChars": 100,
      "hint": "第一に(첫째로), 第二に(둘째로), 第三に(셋째로)를 사용해보세요."
    },
    "teacherNote": "계절 변화를 나타내는 어휘(肌寒い, 紅葉 등)와 상태 변화(〜くなる)를 연습합니다.",
    "tags": [
      "계절",
      "날씨",
      "자연"
    ]
  },
  {
    "id": "work-취업준비",
    "titleKo": "취업준비",
    "titleJp": "就職準備",
    "level": "N2",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'취업준비'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "就職準備についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'취업준비'와 관련된 특별한 경험이 있나요?",
        "jp": "就職準備で特別な経験がありますか。"
      },
      {
        "ko": "'취업준비'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "就職準備はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'취업준비'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "就職準備のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'취업준비'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "就職準備で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '취업준비'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来就職準備はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "就職活動",
        "reading": "しゅうしょくかつどう",
        "meaning": "취업 활동",
        "example": "就職活動は大変ですね。"
      },
      {
        "word": "履歴書",
        "reading": "りれきしょ",
        "meaning": "이력서",
        "example": "履歴書を作成しました。"
      },
      {
        "word": "面接",
        "reading": "めんせつ",
        "meaning": "면접",
        "example": "明日は面接があります。"
      },
      {
        "word": "企業",
        "reading": "きぎょう",
        "meaning": "기업",
        "example": "日本の企業に就職したいです。"
      },
      {
        "word": "内定",
        "reading": "ないてい",
        "meaning": "내정, 합격 통보",
        "example": "内定をもらいました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、就職活動で忙しいです。",
        "translation": "요즘 취업 활동으로 바쁩니다."
      },
      {
        "speaker": "B",
        "text": "そうですね。私も毎日、履歴書を書いています。",
        "translation": "그러게요. 저도 매일 이력서를 쓰고 있습니다."
      },
      {
        "speaker": "A",
        "text": "面接の準備は順調ですか。",
        "translation": "면접 준비는 순조로우세요?"
      },
      {
        "speaker": "B",
        "text": "はい、模擬面接を繰り返しています。",
        "translation": "네, 모의 면접을 반복하고 있습니다."
      },
      {
        "speaker": "A",
        "text": "私も頑張らないと。お互い頑張りましょう。",
        "translation": "저도 열심히 해야겠어요. 서로 힘냅시다."
      },
      {
        "speaker": "B",
        "text": "はい、頑張りましょう！",
        "translation": "네, 힘냅시다!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜で忙しい",
        "function": "~로 바쁘다는 상태를 나타냄",
        "example": "就職活動で忙しいです。",
        "translation": "취업 활동으로 바쁩니다."
      },
      {
        "pattern": "〜に向けて",
        "function": "~를 향해서, ~를 목표로",
        "example": "試験に向けて勉強しています。",
        "translation": "시험을 향해 공부하고 있습니다."
      },
      {
        "pattern": "〜を繰り返す",
        "function": "~를 반복하다",
        "example": "模擬面接を繰り返しています。",
        "translation": "모의 면접을 반복하고 있습니다."
      }
    ],
    "writingMission": {
      "prompt": "일본 기업 취업을 위해 어떤 준비를 하고 있는지 작성해 보세요. (면접, 이력서, 어학 등)",
      "promptJp": "日本企業への就職のために、どのような準備をしているか書いてみましょう。（面接、履歴書、語学など）",
      "minChars": 150,
      "hint": "구체적인 계획과 노력을 중심으로 작성해 보세요."
    },
    "teacherNote": "일본 취업 시장의 특징과 취업 준비 과정을 이해하고, 자신의 경험을 바탕으로 구체적인 이야기를 나눌 수 있도록 지도해 주세요.",
    "tags": [
      "학교",
      "직장",
      "취업준비"
    ]
  },
  {
    "id": "work-면접",
    "titleKo": "면접",
    "titleJp": "面接",
    "level": "N1",
    "category": "학교직장",
    "activity": "롤플레이",
    "style": "비즈니스",
    "duration": 35,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'면접'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "面接についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'면접'와 관련된 특별한 경험이 있나요?",
        "jp": "面接で特別な経験がありますか。"
      },
      {
        "ko": "'면접'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "面接はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'면접'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "面接のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'면접'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "面接で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '면접'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来面接はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "일본 기업 면접 상황입니다. 당신은 지원자이고, 상대방은 면접관입니다.",
      "roleA": "면접관",
      "roleB": "지원자"
    },
    "expressions": [
      {
        "word": "志望動機",
        "reading": "しぼうどうき",
        "meaning": "지원 동기",
        "example": "志望動機をお聞かせください。"
      },
      {
        "word": "長所",
        "reading": "ちょうしょ",
        "meaning": "장점",
        "example": "あなたの長所は何ですか。"
      },
      {
        "word": "短所",
        "reading": "たんしょ",
        "meaning": "단점",
        "example": "短所を教えてください。"
      },
      {
        "word": "自己PR",
        "reading": "じこピーアール",
        "meaning": "자기 PR",
        "example": "自己PRをお願いします。"
      },
      {
        "word": "入社後",
        "reading": "にゅうしゃご",
        "meaning": "입사 후",
        "example": "入社後はどのように貢献したいですか。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "本日は面接にお越しいただきありがとうございます。",
        "translation": "오늘 면접에 와주셔서 감사합니다."
      },
      {
        "speaker": "B",
        "text": "こちらこそ、貴重な機会をいただきありがとうございます。",
        "translation": "저야말로 귀한 기회를 주셔서 감사합니다."
      },
      {
        "speaker": "A",
        "text": "まず、自己紹介をお願いします。",
        "translation": "먼저 자기소개 부탁드립니다."
      },
      {
        "speaker": "B",
        "text": "はい。私は〇〇大学の山田と申します。",
        "translation": "네. 저는 〇〇대학의 야마다라고 합니다."
      },
      {
        "speaker": "A",
        "text": "当社の志望動機を教えていただけますか。",
        "translation": "저희 회사의 지원 동기를 말씀해주시겠어요?"
      },
      {
        "speaker": "B",
        "text": "はい、御社の〇〇という点に魅力を感じました。",
        "translation": "네, 귀사의 〇〇라는 점에 매력을 느꼈습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜にお越しいただきありがとうございます",
        "function": "~에 와주셔서 감사합니다 (정중한 표현)",
        "example": "本日は面接にお越しいただきありがとうございます。",
        "translation": "오늘 면접에 와주셔서 감사합니다."
      },
      {
        "pattern": "〜と申します",
        "function": "자신을 소개할 때 겸양의 의미로 사용",
        "example": "山田と申します。",
        "translation": "야마다라고 합니다."
      },
      {
        "pattern": "〜を教えていただけますか",
        "function": "~를 가르쳐 주시겠습니까 (정중한 요청)",
        "example": "志望動機を教えていただけますか。",
        "translation": "지원 동기를 말씀해주시겠어요?"
      }
    ],
    "writingMission": {
      "prompt": "가상의 일본 기업 면접 상황을 설정하고, 면접관에게 자신을 어필하는 글을 작성해 보세요.",
      "promptJp": "架空の日本企業での面接状況を設定し、面接官に自分をアピールする文章を書いてみましょう。",
      "minChars": 150,
      "hint": "지원 동기, 장점, 입사 후 포부 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "일본 기업 면접 상황을 가정하여 역할극을 진행하고, 면접 시 자주 사용되는 표현과 태도를 교정해 주세요.",
    "tags": [
      "학교",
      "직장",
      "면접"
    ]
  },
  {
    "id": "work-직장동료",
    "titleKo": "직장동료",
    "titleJp": "職場の同僚",
    "level": "N3",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'직장동료'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "職場の同僚についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'직장동료'와 관련된 특별한 경험이 있나요?",
        "jp": "職場の同僚で特別な経験がありますか。"
      },
      {
        "ko": "'직장동료'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "職場の同僚はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'직장동료'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "職場の同僚のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'직장동료'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "職場の同僚で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '직장동료'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来職場の同僚はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "직장 동료와 점심 식사를 하며 가볍게 대화하는 상황입니다. 서로의 주말 계획을 이야기해봅시다.",
      "roleA": "동료 A",
      "roleB": "동료 B"
    },
    "expressions": [
      {
        "word": "同僚",
        "reading": "どうりょう",
        "meaning": "동료",
        "example": "同僚と協力して仕事をします。"
      },
      {
        "word": "チームワーク",
        "reading": "チームワーク",
        "meaning": "팀워크",
        "example": "チームワークが大切です。"
      },
      {
        "word": "コミュニケーション",
        "reading": "コミュニケーション",
        "meaning": "소통",
        "example": "円滑なコミュニケーションを心がけています。"
      },
      {
        "word": "助け合う",
        "reading": "たすけあう",
        "meaning": "서로 돕다",
        "example": "困った時は助け合います。"
      },
      {
        "word": "信頼関係",
        "reading": "しんらいかんけい",
        "meaning": "신뢰 관계",
        "example": "同僚との信頼関係を築きたいです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "山田さん、今日のランチは何にしますか？",
        "translation": "야마다 씨, 오늘 점심 뭐로 할까요?"
      },
      {
        "speaker": "B",
        "text": "そうですね、田中さんは何か食べたいものありますか？",
        "translation": "글쎄요, 타나카 씨는 뭐 드시고 싶은 거 있으세요?"
      },
      {
        "speaker": "A",
        "text": "最近できた新しいラーメン屋さんに行ってみませんか？",
        "translation": "최근에 생긴 새 라멘집에 가볼까요?"
      },
      {
        "speaker": "B",
        "text": "いいですね！ぜひ行きましょう。",
        "translation": "좋네요! 꼭 가요."
      },
      {
        "speaker": "A",
        "text": "午後も頑張りましょうね。",
        "translation": "오후도 힘냅시다."
      },
      {
        "speaker": "B",
        "text": "はい！",
        "translation": "네!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜にしますか",
        "function": "~로 할까요? (선택을 묻는 표현)",
        "example": "今日のランチは何にしますか？",
        "translation": "오늘 점심 뭐로 할까요?"
      },
      {
        "pattern": "〜てみませんか",
        "function": "~해 보지 않겠습니까? (제안)",
        "example": "新しいラーメン屋さんに行ってみませんか？",
        "translation": "새로운 라멘집에 가보지 않겠습니까?"
      },
      {
        "pattern": "〜ましょうね",
        "function": "~합시다 (친근한 권유)",
        "example": "午後も頑張りましょうね。",
        "translation": "오후도 힘냅시다."
      }
    ],
    "writingMission": {
      "prompt": "직장 동료와의 원활한 관계를 위해 어떤 노력을 하고 있는지 작성해 보세요.",
      "promptJp": "職場の同僚との円滑な関係のために、どのような努力をしているか書いてみましょう。",
      "minChars": 150,
      "hint": "구체적인 에피소드나 대화 내용을 포함하여 작성해 보세요."
    },
    "teacherNote": "직장 내 원활한 인간관계의 중요성을 인식하고, 동료와의 소통 방식에 대해 이야기 나눌 수 있도록 유도해 주세요.",
    "tags": [
      "학교",
      "직장",
      "직장동료"
    ]
  },
  {
    "id": "work-야근",
    "titleKo": "야근",
    "titleJp": "残業",
    "level": "N3",
    "category": "학교직장",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'야근'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "残業についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'야근'와 관련된 특별한 경험이 있나요?",
        "jp": "残業で特別な経験がありますか。"
      },
      {
        "ko": "'야근'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "残業はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'야근'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "残業のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'야근'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "残業で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '야근'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来残業はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "残業",
        "reading": "ざんぎょう",
        "meaning": "야근",
        "example": "最近、残業が多いです。"
      },
      {
        "word": "定時退社",
        "reading": "ていじたいしゃ",
        "meaning": "정시 퇴근",
        "example": "定時退社を心がけています。"
      },
      {
        "word": "効率",
        "reading": "こうりつ",
        "meaning": "효율",
        "example": "仕事の効率を上げたいです。"
      },
      {
        "word": "疲れる",
        "reading": "つかれる",
        "meaning": "피곤하다",
        "example": "残業でとても疲れます。"
      },
      {
        "word": "ワークライフバランス",
        "reading": "ワークライフバランス",
        "meaning": "워라밸",
        "example": "ワークライフバランスが重要です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "また残業ですか？大変ですね。",
        "translation": "또 야근이세요? 힘드시겠어요."
      },
      {
        "speaker": "B",
        "text": "ええ、締め切りが近いので。田中さんもですか？",
        "translation": "네, 마감이 코앞이라서요. 타나카 씨도요?"
      },
      {
        "speaker": "A",
        "text": "私も少し残って作業します。",
        "translation": "저도 좀 남아서 작업할게요."
      },
      {
        "speaker": "B",
        "text": "お疲れ様です。無理しないでくださいね。",
        "translation": "수고 많으십니다. 무리하지 마세요."
      },
      {
        "speaker": "A",
        "text": "山田さんも。終わったら一緒に帰りましょうか。",
        "translation": "야마다 씨도요. 끝나면 같이 갈까요?"
      },
      {
        "speaker": "B",
        "text": "はい、そうしましょう！",
        "translation": "네, 그렇게 해요!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ので",
        "function": "~때문에 (이유, 원인)",
        "example": "締め切りが近いので、残業します。",
        "translation": "마감이 가까워서 야근합니다."
      },
      {
        "pattern": "〜ないでください",
        "function": "~하지 마세요 (부정 명령)",
        "example": "無理しないでください。",
        "translation": "무리하지 마세요."
      },
      {
        "pattern": "〜ましょうか",
        "function": "~할까요? (제안, 의향)",
        "example": "一緒に帰りましょうか。",
        "translation": "같이 갈까요?"
      }
    ],
    "writingMission": {
      "prompt": "야근이 많은 상황에서 스트레스를 어떻게 관리하고 있는지, 또는 어떻게 관리할 것인지 작성해 보세요.",
      "promptJp": "残業が多い状況で、どのようにストレスを管理しているか、または管理するつもりか書いてみましょう。",
      "minChars": 150,
      "hint": "자신만의 스트레스 해소법이나 효율적인 업무 방식을 중심으로 작성해 보세요."
    },
    "teacherNote": "일본의 직장 문화 중 하나인 야근에 대한 생각과 스트레스 관리법을 공유하며, 효율적인 업무 방식에 대해 토론해 주세요.",
    "tags": [
      "학교",
      "직장",
      "야근"
    ]
  },
  {
    "id": "work-회식",
    "titleKo": "회식",
    "titleJp": "飲み会",
    "level": "N4",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'회식'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "飲み会についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'회식'와 관련된 특별한 경험이 있나요?",
        "jp": "飲み会で特別な経験がありますか。"
      },
      {
        "ko": "'회식'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "飲み会はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'회식'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "飲み会のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'회식'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "飲み会で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '회식'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来飲み会はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "飲み会",
        "reading": "のみかい",
        "meaning": "회식",
        "example": "会社の飲み会に参加しました。"
      },
      {
        "word": "歓迎会",
        "reading": "かんげいかい",
        "meaning": "환영회",
        "example": "新入社員の歓迎会があります。"
      },
      {
        "word": "二次会",
        "reading": "にじかい",
        "meaning": "2차",
        "example": "飲み会の後、二次会に行きました。"
      },
      {
        "word": "盛り上がる",
        "reading": "もりあがる",
        "meaning": "분위기가 고조되다",
        "example": "飲み会が盛り上がりました。"
      },
      {
        "word": "気を使う",
        "reading": "きをつかう",
        "meaning": "신경 쓰다",
        "example": "上司に気を使います。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "来週、新入社員の歓迎会がありますね。",
        "translation": "다음 주에 신입사원 환영회가 있네요."
      },
      {
        "speaker": "B",
        "text": "はい、楽しみです。田中さんは参加されますか？",
        "translation": "네, 기대됩니다. 타나카 씨는 참석하세요?"
      },
      {
        "speaker": "A",
        "text": "もちろん参加しますよ。山田さんもぜひ。",
        "translation": "물론 참석합니다. 야마다 씨도 꼭 오세요."
      },
      {
        "speaker": "B",
        "text": "はい、参加させていただきます。",
        "translation": "네, 참석하겠습니다."
      },
      {
        "speaker": "A",
        "text": "美味しい料理とお酒で盛り上がりましょう。",
        "translation": "맛있는 음식과 술로 분위기를 띄워봅시다."
      },
      {
        "speaker": "B",
        "text": "はい！",
        "translation": "네!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜がありますね",
        "function": "~가 있네요 (확인, 동의를 구함)",
        "example": "歓迎会がありますね。",
        "translation": "환영회가 있네요."
      },
      {
        "pattern": "〜させていただきます",
        "function": "~하게 해 주셔서 감사합니다 (겸양 표현)",
        "example": "参加させていただきます。",
        "translation": "참가하겠습니다."
      },
      {
        "pattern": "〜ましょう",
        "function": "~합시다 (권유, 제안)",
        "example": "盛り上がりましょう。",
        "translation": "분위기를 띄워봅시다."
      }
    ],
    "writingMission": {
      "prompt": "일본 회식 문화에 대한 자신의 생각과 경험을 작성해 보세요. (장점, 단점, 에피소드 등)",
      "promptJp": "日本の飲み会文化に対する自分の考えや経験を書いてみましょう。（長所、短所、エピソードなど）",
      "minChars": 150,
      "hint": "한국의 회식 문화와 비교하여 작성해 보는 것도 좋습니다."
    },
    "teacherNote": "일본의 회식 문화를 이해하고, 회식 자리에서의 적절한 행동과 대화법을 연습할 수 있도록 지도해 주세요.",
    "tags": [
      "학교",
      "직장",
      "회식"
    ]
  },
  {
    "id": "work-업무스트레스",
    "titleKo": "업무스트레스",
    "titleJp": "仕事のストレス",
    "level": "N3",
    "category": "학교직장",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 30,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'업무스트레스'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "仕事のストレスについてどんなイメージを持っていますか。"
      },
      {
        "ko": "'업무스트레스'와 관련된 특별한 경험이 있나요?",
        "jp": "仕事のストレスで特別な経験がありますか。"
      },
      {
        "ko": "'업무스트레스'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "仕事のストレスはあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'업무스트레스'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "仕事のストレスのプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'업무스트레스'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "仕事のストレスで改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '업무스트레스'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来仕事のストレスはどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "ストレス",
        "reading": "ストレス",
        "meaning": "스트레스",
        "example": "仕事のストレスが溜まっています。"
      },
      {
        "word": "解消法",
        "reading": "かいしょうほう",
        "meaning": "해소법",
        "example": "ストレス解消法を教えてください。"
      },
      {
        "word": "プレッシャー",
        "reading": "プレッシャー",
        "meaning": "압박",
        "example": "仕事のプレッシャーを感じます。"
      },
      {
        "word": "気分転換",
        "reading": "きぶんてんかん",
        "meaning": "기분 전환",
        "example": "気分転換に散歩します。"
      },
      {
        "word": "相談する",
        "reading": "そうだんする",
        "meaning": "상담하다",
        "example": "悩みを同僚に相談しました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、仕事のストレスが溜まっています。",
        "translation": "요즘 업무 스트레스가 쌓여있어요."
      },
      {
        "speaker": "B",
        "text": "私もです。何かストレス解消法はありますか？",
        "translation": "저도요. 스트레스 해소법이 있으세요?"
      },
      {
        "speaker": "A",
        "text": "週末に温泉に行く計画を立てています。",
        "translation": "주말에 온천에 갈 계획을 세우고 있어요."
      },
      {
        "speaker": "B",
        "text": "いいですね！リフレッシュできそうです。",
        "translation": "좋네요! 기분 전환이 될 것 같아요."
      },
      {
        "speaker": "A",
        "text": "山田さんも、無理せず休んでくださいね。",
        "translation": "야마다 씨도 무리하지 말고 쉬세요."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。",
        "translation": "감사합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜が溜まる",
        "function": "~가 쌓이다",
        "example": "ストレスが溜まっています。",
        "translation": "스트레스가 쌓여있습니다."
      },
      {
        "pattern": "〜てはどうでしょう",
        "function": "~하는 건 어때요? (제안)",
        "example": "相談してみてはどうでしょう。",
        "translation": "상담해보는 건 어때요?"
      },
      {
        "pattern": "〜ないでくださいね",
        "function": "~하지 마세요 (부드러운 부정 명령)",
        "example": "無理しないでくださいね。",
        "translation": "무리하지 마세요."
      }
    ],
    "writingMission": {
      "prompt": "업무 스트레스를 해소하기 위한 자신만의 방법을 작성해 보세요. (취미, 운동, 휴식 등)",
      "promptJp": "仕事のストレスを解消するための自分なりの方法を書いてみましょう。（趣味、運動、休息など）",
      "minChars": 150,
      "hint": "구체적인 활동과 그 효과를 중심으로 작성해 보세요."
    },
    "teacherNote": "업무 스트레스의 원인과 해소법에 대해 이야기 나누고, 건강한 직장생활을 위한 조언을 제공해 주세요.",
    "tags": [
      "학교",
      "직장",
      "업무스트레스"
    ]
  },
  {
    "id": "work-시험",
    "titleKo": "시험",
    "titleJp": "試験",
    "level": "N4",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'시험'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "試験についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'시험'와 관련된 특별한 경험이 있나요?",
        "jp": "試験で特別な経験がありますか。"
      },
      {
        "ko": "'시험'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "試験はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'시험'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "試験のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'시험'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "試験で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '시험'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来試験はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "試験",
        "reading": "しけん",
        "meaning": "시험",
        "example": "日本語能力試験を受けます。"
      },
      {
        "word": "合格",
        "reading": "ごうかく",
        "meaning": "합격",
        "example": "試験に合格したいです。"
      },
      {
        "word": "不合格",
        "reading": "ふごうかく",
        "meaning": "불합격",
        "example": "残念ながら不合格でした。"
      },
      {
        "word": "勉強法",
        "reading": "べんきょうほう",
        "meaning": "공부법",
        "example": "おすすめの勉強法はありますか。"
      },
      {
        "word": "点数",
        "reading": "てんすう",
        "meaning": "점수",
        "example": "良い点数を取りたいです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "来週の日本語の試験、自信ありますか？",
        "translation": "다음 주 일본어 시험, 자신 있으세요?"
      },
      {
        "speaker": "B",
        "text": "あまり自信がありません。もっと勉強しないと。",
        "translation": "별로 자신이 없어요. 더 공부해야 해요."
      },
      {
        "speaker": "A",
        "text": "私もです。一緒に勉強しませんか？",
        "translation": "저도요. 같이 공부할까요?"
      },
      {
        "speaker": "B",
        "text": "いいですね！助かります。",
        "translation": "좋네요! 도움이 될 거예요."
      },
      {
        "speaker": "A",
        "text": "図書館で会いましょう。",
        "translation": "도서관에서 만나요."
      },
      {
        "speaker": "B",
        "text": "はい！",
        "translation": "네!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に自信がありますか",
        "function": "~에 자신이 있습니까?",
        "example": "試験に自信がありますか？",
        "translation": "시험에 자신이 있으세요?"
      },
      {
        "pattern": "〜ないといけない",
        "function": "~하지 않으면 안 된다 (의무, 필요)",
        "example": "もっと勉強しないといけない。",
        "translation": "더 공부해야 한다."
      },
      {
        "pattern": "〜ませんか",
        "function": "~하지 않겠습니까? (권유)",
        "example": "一緒に勉強しませんか？",
        "translation": "같이 공부하지 않겠습니까?"
      }
    ],
    "writingMission": {
      "prompt": "일본어 시험을 준비하면서 겪었던 어려움과 극복 방법을 작성해 보세요.",
      "promptJp": "日本語の試験を準備しながら経験した困難と克服方法を書いてみましょう。",
      "minChars": 150,
      "hint": "구체적인 공부 방법이나 팁을 포함하여 작성해 보세요."
    },
    "teacherNote": "일본어 시험 준비 경험을 공유하고, 효과적인 학습 전략과 시험 대비 노하우를 서로 나눌 수 있도록 유도해 주세요.",
    "tags": [
      "학교",
      "직장",
      "시험"
    ]
  },
  {
    "id": "work-동아리",
    "titleKo": "동아리",
    "titleJp": "部活動",
    "level": "N5",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'동아리'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "部活動についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'동아리'와 관련된 특별한 경험이 있나요?",
        "jp": "部活動で特別な経験がありますか。"
      },
      {
        "ko": "'동아리'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "部活動はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'동아리'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "部活動のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'동아리'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "部活動で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '동아리'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来部活動はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "部活動",
        "reading": "ぶかつどう",
        "meaning": "동아리 활동",
        "example": "私はテニス部に所属しています。"
      },
      {
        "word": "サークル",
        "reading": "サークル",
        "meaning": "동아리 (대학)",
        "example": "大学で映画サークルに入りました。"
      },
      {
        "word": "仲間",
        "reading": "なかま",
        "meaning": "동료, 친구",
        "example": "大切な仲間ができました。"
      },
      {
        "word": "練習",
        "reading": "れんしゅう",
        "meaning": "연습",
        "example": "毎日、練習を頑張っています。"
      },
      {
        "word": "大会",
        "reading": "たいかい",
        "meaning": "대회",
        "example": "来月、大会があります。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "どんな部活動に入っていますか？",
        "translation": "어떤 동아리 활동을 하고 있어요?"
      },
      {
        "speaker": "B",
        "text": "私は写真部に入っています。田中さんは？",
        "translation": "저는 사진부에 들어가 있어요. 타나카 씨는요?"
      },
      {
        "speaker": "A",
        "text": "私は軽音部です。週末に練習があります。",
        "translation": "저는 경음악부입니다. 주말에 연습이 있어요."
      },
      {
        "speaker": "B",
        "text": "へえ、楽しそうですね！",
        "translation": "오, 재미있겠네요!"
      },
      {
        "speaker": "A",
        "text": "はい、とても充実しています。",
        "translation": "네, 아주 보람 있습니다."
      },
      {
        "speaker": "B",
        "text": "私も頑張ります！",
        "translation": "저도 열심히 할게요!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に入っています",
        "function": "~에 소속되어 있다",
        "example": "写真部に入っています。",
        "translation": "사진부에 들어가 있습니다."
      },
      {
        "pattern": "〜があります",
        "function": "~가 있다 (존재)",
        "example": "週末に練習があります。",
        "translation": "주말에 연습이 있습니다."
      },
      {
        "pattern": "〜そうですね",
        "function": "~할 것 같네요 (추측, 감상)",
        "example": "楽しそうですね。",
        "translation": "재미있을 것 같네요."
      }
    ],
    "writingMission": {
      "prompt": "학교 동아리 활동을 통해 얻은 경험과 배운 점을 작성해 보세요.",
      "promptJp": "学校の部活動を通じて得た経験と学んだことを書いてみましょう。",
      "minChars": 150,
      "hint": "팀워크, 리더십, 새로운 기술 습득 등 구체적인 내용을 포함해 보세요."
    },
    "teacherNote": "학교 동아리 활동의 장점과 경험을 이야기 나누고, 일본의 동아리 문화에 대한 이해를 높일 수 있도록 지도해 주세요.",
    "tags": [
      "학교",
      "직장",
      "동아리"
    ]
  },
  {
    "id": "work-아르바이트",
    "titleKo": "아르바이트",
    "titleJp": "アルバイト",
    "level": "N5",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'아르바이트'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "アルバイトについてどんなイメージを持っていますか。"
      },
      {
        "ko": "'아르바이트'와 관련된 특별한 경험이 있나요?",
        "jp": "アルバイトで特別な経験がありますか。"
      },
      {
        "ko": "'아르바이트'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "アルバイトはあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'아르바이트'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "アルバイトのプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'아르바이트'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "アルバイトで改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '아르바이트'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来アルバイトはどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "アルバイト",
        "reading": "アルバイト",
        "meaning": "아르바이트",
        "example": "週末にアルバイトをしています。"
      },
      {
        "word": "時給",
        "reading": "じきゅう",
        "meaning": "시급",
        "example": "時給が高いアルバイトを探しています。"
      },
      {
        "word": "経験",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "アルバイトで良い経験ができました。"
      },
      {
        "word": "接客",
        "reading": "せっきゃく",
        "meaning": "접객",
        "example": "接客のアルバイトをしています。"
      },
      {
        "word": "シフト",
        "reading": "シフト",
        "meaning": "근무 시간표",
        "example": "シフトを調整してもらいました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、アルバイトを始めました。",
        "translation": "최근에 아르바이트를 시작했어요."
      },
      {
        "speaker": "B",
        "text": "そうなんですね！どんなアルバイトですか？",
        "translation": "그렇군요! 어떤 아르바이트예요?"
      },
      {
        "speaker": "A",
        "text": "カフェで接客の仕事をしています。",
        "translation": "카페에서 접객 일을 하고 있어요."
      },
      {
        "speaker": "B",
        "text": "楽しそうですね。時給はいいですか？",
        "translation": "재미있겠네요. 시급은 괜찮아요?"
      },
      {
        "speaker": "A",
        "text": "はい、経験を積むのに良い機会です。",
        "translation": "네, 경험을 쌓는 데 좋은 기회예요."
      },
      {
        "speaker": "B",
        "text": "私も探してみようかな。",
        "translation": "저도 찾아볼까 봐요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜を始めました",
        "function": "~를 시작했습니다",
        "example": "アルバイトを始めました。",
        "translation": "아르바이트를 시작했습니다."
      },
      {
        "pattern": "〜てみる",
        "function": "~해 보다 (시도)",
        "example": "探してみようかな。",
        "translation": "찾아볼까 봐요."
      },
      {
        "pattern": "〜のに役立つ",
        "function": "~에 도움이 되다",
        "example": "経験を積むのに役立ちます。",
        "translation": "경험을 쌓는 데 도움이 됩니다."
      }
    ],
    "writingMission": {
      "prompt": "일본에서 아르바이트를 했던 경험이나, 하고 싶은 아르바이트에 대해 작성해 보세요.",
      "promptJp": "日本でアルバイトをした経験や、してみたいアルバイトについて書いてみましょう。",
      "minChars": 150,
      "hint": "어떤 일을 했는지, 무엇을 느꼈는지, 왜 하고 싶은지 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "일본에서의 아르바이트 경험이나 희망하는 아르바이트에 대해 이야기 나누고, 아르바이트 시 필요한 일본어 표현을 연습해 주세요.",
    "tags": [
      "학교",
      "직장",
      "아르바이트"
    ]
  },
  {
    "id": "work-진로고민",
    "titleKo": "진로고민",
    "titleJp": "進路の悩み",
    "level": "N3",
    "category": "학교직장",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 35,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'진로고민'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "進路の悩みについてどんなイメージを持っていますか。"
      },
      {
        "ko": "'진로고민'와 관련된 특별한 경험이 있나요?",
        "jp": "進路の悩みで特別な経験がありますか。"
      },
      {
        "ko": "'진로고민'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "進路の悩みはあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'진로고민'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "進路の悩みのプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'진로고민'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "進路の悩みで改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '진로고민'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来進路の悩みはどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "進路",
        "reading": "しんろ",
        "meaning": "진로",
        "example": "将来の進路について悩んでいます。"
      },
      {
        "word": "将来の夢",
        "reading": "しょうらいのゆめ",
        "meaning": "장래 희망",
        "example": "私の将来の夢は教師です。"
      },
      {
        "word": "選択",
        "reading": "せんたく",
        "meaning": "선택",
        "example": "難しい選択を迫られています。"
      },
      {
        "word": "相談",
        "reading": "そうだん",
        "meaning": "상담",
        "example": "先生に進路相談をしました。"
      },
      {
        "word": "適性",
        "reading": "てきせい",
        "meaning": "적성",
        "example": "自分の適性を見つけたいです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "将来の進路について悩んでいます。",
        "translation": "장래 진로에 대해 고민하고 있어요."
      },
      {
        "speaker": "B",
        "text": "私もです。どんな仕事が自分に合うか、まだ分かりません。",
        "translation": "저도요. 어떤 일이 저에게 맞을지 아직 모르겠어요."
      },
      {
        "speaker": "A",
        "text": "先生に相談してみようと思っています。",
        "translation": "선생님께 상담해볼까 생각 중이에요."
      },
      {
        "speaker": "B",
        "text": "それがいいかもしれませんね。",
        "translation": "그게 좋을지도 모르겠네요."
      },
      {
        "speaker": "A",
        "text": "お互い、良い道を見つけられるといいですね。",
        "translation": "서로 좋은 길을 찾을 수 있으면 좋겠네요."
      },
      {
        "speaker": "B",
        "text": "はい、そうですね。",
        "translation": "네, 그러게요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について悩んでいます",
        "function": "~에 대해 고민하고 있다",
        "example": "進路について悩んでいます。",
        "translation": "진로에 대해 고민하고 있습니다."
      },
      {
        "pattern": "〜に合う",
        "function": "~에 맞다",
        "example": "自分に合う仕事。",
        "translation": "자신에게 맞는 일."
      },
      {
        "pattern": "〜てみようと思っています",
        "function": "~해볼까 생각 중이다",
        "example": "相談してみようと思っています。",
        "translation": "상담해볼까 생각 중입니다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 진로 고민과 그에 대한 해결 방안을 작성해 보세요.",
      "promptJp": "自分の進路の悩みと、それに対する解決策を書いてみましょう。",
      "minChars": 150,
      "hint": "구체적인 목표 설정이나 전문가 상담 등 현실적인 방안을 제시해 보세요."
    },
    "teacherNote": "진로 고민을 함께 나누고, 현실적인 조언과 격려를 통해 학습자가 자신의 미래를 계획할 수 있도록 도와주세요.",
    "tags": [
      "학교",
      "직장",
      "진로고민"
    ]
  },
  {
    "id": "work-상사관계",
    "titleKo": "상사관계",
    "titleJp": "上司との関係",
    "level": "N3",
    "category": "학교직장",
    "activity": "발표",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'상사관계'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "上司との関係についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'상사관계'와 관련된 특별한 경험이 있나요?",
        "jp": "上司との関係で特別な経験がありますか。"
      },
      {
        "ko": "'상사관계'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "上司との関係はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'상사관계'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "上司との関係のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'상사관계'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "上司との関係で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '상사관계'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来上司との関係はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "上司",
        "reading": "じょうし",
        "meaning": "상사",
        "example": "上司に報告します。"
      },
      {
        "word": "部下",
        "reading": "ぶか",
        "meaning": "부하",
        "example": "部下を指導します。"
      },
      {
        "word": "尊敬する",
        "reading": "そんけいする",
        "meaning": "존경하다",
        "example": "尊敬する上司がいます。"
      },
      {
        "word": "意見を言う",
        "reading": "いけんをいう",
        "meaning": "의견을 말하다",
        "example": "上司に自分の意見を言いました。"
      },
      {
        "word": "良好な関係",
        "reading": "りょうこうなかんけい",
        "meaning": "양호한 관계",
        "example": "上司と良好な関係を築きたいです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、上司との関係で悩んでいます。",
        "translation": "요즘 상사와의 관계로 고민하고 있어요."
      },
      {
        "speaker": "B",
        "text": "何かあったんですか？",
        "translation": "무슨 일 있으셨어요?"
      },
      {
        "speaker": "A",
        "text": "意見の食い違いがあって、どう話せばいいか。",
        "translation": "의견 차이가 있어서 어떻게 말해야 할지 모르겠어요."
      },
      {
        "speaker": "B",
        "text": "まずは落ち着いて、状況を整理してみてはどうでしょう。",
        "translation": "우선 진정하고 상황을 정리해보는 건 어때요?"
      },
      {
        "speaker": "A",
        "text": "そうですね。ありがとうございます。",
        "translation": "그러게요. 감사합니다."
      },
      {
        "speaker": "B",
        "text": "いつでも相談に乗りますよ。",
        "translation": "언제든지 상담해 드릴게요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜で悩んでいます",
        "function": "~로 고민하고 있다",
        "example": "上司との関係で悩んでいます。",
        "translation": "상사와의 관계로 고민하고 있습니다."
      },
      {
        "pattern": "〜食い違いがある",
        "function": "~에 의견 차이가 있다",
        "example": "意見の食い違いがある。",
        "translation": "의견 차이가 있다."
      },
      {
        "pattern": "〜てはどうでしょう",
        "function": "~하는 건 어때요? (제안)",
        "example": "整理してみてはどうでしょう。",
        "translation": "정리해보는 건 어때요?"
      }
    ],
    "writingMission": {
      "prompt": "직장 상사와의 관계에서 중요하다고 생각하는 점과 그 이유를 작성해 보세요.",
      "promptJp": "職場の上司との関係で重要だと思う点と、その理由を書いてみましょう。",
      "minChars": 150,
      "hint": "존중, 소통, 신뢰 등 키워드를 활용하여 작성해 보세요."
    },
    "teacherNote": "일본 직장에서의 상사와의 관계 설정에 대한 어려움을 이해하고, 원활한 관계 유지를 위한 대화법을 연습해 주세요.",
    "tags": [
      "학교",
      "직장",
      "상사관계"
    ]
  },
  {
    "id": "work-재택근무",
    "titleKo": "재택근무",
    "titleJp": "在宅勤務",
    "level": "N2",
    "category": "학교직장",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 35,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'재택근무'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "在宅勤務についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'재택근무'와 관련된 특별한 경험이 있나요?",
        "jp": "在宅勤務で特別な経験がありますか。"
      },
      {
        "ko": "'재택근무'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "在宅勤務はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'재택근무'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "在宅勤務のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'재택근무'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "在宅勤務で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '재택근무'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来在宅勤務はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "在宅勤務",
        "reading": "ざいたくきんむ",
        "meaning": "재택근무",
        "example": "週に3回、在宅勤務をしています。"
      },
      {
        "word": "通勤",
        "reading": "つうきん",
        "meaning": "통근",
        "example": "通勤時間が短縮されました。"
      },
      {
        "word": "集中力",
        "reading": "しゅうちゅうりょく",
        "meaning": "집중력",
        "example": "在宅勤務だと集中できます。"
      },
      {
        "word": "オンオフの切り替え",
        "reading": "オンオフのきりかえ",
        "meaning": "온오프 전환",
        "example": "オンオフの切り替えが難しいです。"
      },
      {
        "word": "効率的",
        "reading": "こうりつてき",
        "meaning": "효율적",
        "example": "在宅勤務は効率的だと思います。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、在宅勤務が増えましたね。",
        "translation": "요즘 재택근무가 늘었네요."
      },
      {
        "speaker": "B",
        "text": "はい、通勤時間がなくなって楽になりました。",
        "translation": "네, 통근 시간이 없어져서 편해졌어요."
      },
      {
        "speaker": "A",
        "text": "集中力は維持できますか？",
        "translation": "집중력은 유지할 수 있으세요?"
      },
      {
        "speaker": "B",
        "text": "はい、自分のペースで仕事ができて効率的です。",
        "translation": "네, 제 페이스대로 일할 수 있어서 효율적이에요."
      },
      {
        "speaker": "A",
        "text": "オンオフの切り替えが難しい時もありますが。",
        "translation": "온오프 전환이 어려울 때도 있지만요."
      },
      {
        "speaker": "B",
        "text": "確かに、それはありますね。",
        "translation": "확실히, 그런 점은 있네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜が増える",
        "function": "~가 늘다",
        "example": "在宅勤務が増えました。",
        "translation": "재택근무가 늘었습니다."
      },
      {
        "pattern": "〜がなくなる",
        "function": "~가 없어지다",
        "example": "通勤時間がなくなりました。",
        "translation": "통근 시간이 없어졌습니다."
      },
      {
        "pattern": "〜ことができます",
        "function": "~할 수 있습니다 (가능)",
        "example": "集中できます。",
        "translation": "집중할 수 있습니다."
      }
    ],
    "writingMission": {
      "prompt": "재택근무의 장점과 단점, 그리고 효율적인 재택근무를 위한 자신만의 노하우를 작성해 보세요.",
      "promptJp": "在宅勤務の長所と短所、そして効率的な在宅勤務のための自分なりのノウハウを書いてみましょう。",
      "minChars": 150,
      "hint": "시간 관리, 집중력 유지, 온오프 전환 등 구체적인 노하우를 포함해 보세요."
    },
    "teacherNote": "재택근무의 장단점을 분석하고, 효율적인 재택근무 환경 조성 및 시간 관리 방법에 대해 이야기 나누어 주세요.",
    "tags": [
      "학교",
      "직장",
      "재택근무"
    ]
  },
  {
    "id": "work-이직",
    "titleKo": "이직",
    "titleJp": "転職",
    "level": "N2",
    "category": "학교직장",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 30,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'이직'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "転職についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'이직'와 관련된 특별한 경험이 있나요?",
        "jp": "転職で特別な経験がありますか。"
      },
      {
        "ko": "'이직'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "転職はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'이직'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "転職のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'이직'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "転職で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '이직'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来転職はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "転職",
        "reading": "てんしょく",
        "meaning": "이직",
        "example": "転職を考えています。"
      },
      {
        "word": "キャリアアップ",
        "reading": "キャリアアップ",
        "meaning": "경력 향상",
        "example": "キャリアアップのために転職しました。"
      },
      {
        "word": "給料",
        "reading": "きゅうりょう",
        "meaning": "급여",
        "example": "給料が上がる会社に転職したいです。"
      },
      {
        "word": "新しい環境",
        "reading": "あたらしいかんきょう",
        "meaning": "새로운 환경",
        "example": "新しい環境で頑張りたいです。"
      },
      {
        "word": "スキルアップ",
        "reading": "スキルアップ",
        "meaning": "기술 향상",
        "example": "スキルアップのために勉強しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、転職を考えています。",
        "translation": "요즘 이직을 생각하고 있어요."
      },
      {
        "speaker": "B",
        "text": "そうなんですね。何かきっかけがあったんですか？",
        "translation": "그렇군요. 뭔가 계기가 있었어요?"
      },
      {
        "speaker": "A",
        "text": "キャリアアップと新しい環境を求めています。",
        "translation": "경력 향상과 새로운 환경을 원하고 있어요."
      },
      {
        "speaker": "B",
        "text": "それは良いですね。応援しています！",
        "translation": "좋네요. 응원합니다!"
      },
      {
        "speaker": "A",
        "text": "ありがとうございます。頑張ります。",
        "translation": "감사합니다. 열심히 할게요."
      },
      {
        "speaker": "B",
        "text": "良い結果が出るといいですね。",
        "translation": "좋은 결과가 있기를 바랍니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜を考えています",
        "function": "~를 생각하고 있습니다",
        "example": "転職を考えています。",
        "translation": "이직을 생각하고 있습니다."
      },
      {
        "pattern": "〜を求める",
        "function": "~를 추구하다, 원하다",
        "example": "新しい環境を求めています。",
        "translation": "새로운 환경을 원하고 있습니다."
      },
      {
        "pattern": "〜に役立つ",
        "function": "~에 도움이 되다",
        "example": "就職に役立つと思います。",
        "translation": "취업에 도움이 될 거라고 생각합니다."
      }
    ],
    "writingMission": {
      "prompt": "이직을 결심하게 된 계기와, 이직을 통해 얻고 싶은 것을 작성해 보세요.",
      "promptJp": "転職を決心したきっかけと、転職を通じて得たいことを書いてみましょう。",
      "minChars": 150,
      "hint": "경력 개발, 연봉, 근무 환경 등 구체적인 목표를 포함하여 작성해 보세요."
    },
    "teacherNote": "이직에 대한 생각과 경험을 공유하고, 일본에서의 이직 준비 과정과 고려 사항에 대해 토론해 주세요.",
    "tags": [
      "학교",
      "직장",
      "이직"
    ]
  },
  {
    "id": "work-학원",
    "titleKo": "학원",
    "titleJp": "塾",
    "level": "N4",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'학원'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "塾についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'학원'와 관련된 특별한 경험이 있나요?",
        "jp": "塾で特別な経験がありますか。"
      },
      {
        "ko": "'학원'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "塾はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'학원'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "塾のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'학원'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "塾で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '학원'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来塾はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "塾",
        "reading": "じゅく",
        "meaning": "학원",
        "example": "日本語の塾に通っています。"
      },
      {
        "word": "予備校",
        "reading": "よびこう",
        "meaning": "재수 학원",
        "example": "大学受験のために予備校に通いました。"
      },
      {
        "word": "習い事",
        "reading": "ならいごと",
        "meaning": "학원, 배우는 것",
        "example": "子供の頃、ピアノを習っていました。"
      },
      {
        "word": "授業料",
        "reading": "じゅぎょうりょう",
        "meaning": "수업료",
        "example": "授業料が高いです。"
      },
      {
        "word": "講師",
        "reading": "こうし",
        "meaning": "강사",
        "example": "良い講師に出会えました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "日本語の勉強のために塾に通っています。",
        "translation": "일본어 공부를 위해 학원에 다니고 있어요."
      },
      {
        "speaker": "B",
        "text": "へえ、どんな塾ですか？",
        "translation": "오, 어떤 학원이에요?"
      },
      {
        "speaker": "A",
        "text": "会話中心の塾で、実践的な練習ができます。",
        "translation": "회화 중심의 학원으로, 실전 연습을 할 수 있어요."
      },
      {
        "speaker": "B",
        "text": "いいですね！私も興味があります。",
        "translation": "좋네요! 저도 관심 있어요."
      },
      {
        "speaker": "A",
        "text": "無料体験もあるので、ぜひ行ってみてください。",
        "translation": "무료 체험도 있으니, 꼭 가보세요."
      },
      {
        "speaker": "B",
        "text": "はい、検討してみます。",
        "translation": "네, 검토해볼게요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に通う",
        "function": "~에 다니다",
        "example": "塾に通っています。",
        "translation": "학원에 다니고 있습니다."
      },
      {
        "pattern": "〜中心の",
        "function": "~중심의",
        "example": "会話中心の塾。",
        "translation": "회화 중심의 학원."
      },
      {
        "pattern": "〜てみてください",
        "function": "~해 보세요 (권유, 시도)",
        "example": "行ってみてください。",
        "translation": "가보세요."
      }
    ],
    "writingMission": {
      "prompt": "학원 수강 경험이나, 앞으로 배우고 싶은 것이 있다면 어떤 학원에 다니고 싶은지 작성해 보세요.",
      "promptJp": "塾に通った経験や、これから学びたいことがある場合、どのような塾に通いたいか書いてみましょう。",
      "minChars": 150,
      "hint": "구체적인 과목, 학원 선택 기준, 기대 효과 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "일본어 학원 수강 경험이나 학습 목표에 대해 이야기 나누고, 자신에게 맞는 학습 방법을 찾을 수 있도록 조언해 주세요.",
    "tags": [
      "학교",
      "직장",
      "학원"
    ]
  },
  {
    "id": "work-발표준비",
    "titleKo": "발표준비",
    "titleJp": "発表準備",
    "level": "N4",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'발표준비'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "発表準備についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'발표준비'와 관련된 특별한 경험이 있나요?",
        "jp": "発表準備で特別な経験がありますか。"
      },
      {
        "ko": "'발표준비'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "発表準備はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'발표준비'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "発表準備のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'발표준비'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "発表準備で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '발표준비'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来発表準備はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "発表",
        "reading": "はっぴょう",
        "meaning": "발표",
        "example": "来週、プレゼンテーションの発表があります。"
      },
      {
        "word": "資料作成",
        "reading": "しりょうさくせい",
        "meaning": "자료 작성",
        "example": "発表資料を作成しました。"
      },
      {
        "word": "緊張する",
        "reading": "きんちょうする",
        "meaning": "긴장하다",
        "example": "発表前はいつも緊張します。"
      },
      {
        "word": "練習",
        "reading": "れんしゅう",
        "meaning": "연습",
        "example": "何度も練習しました。"
      },
      {
        "word": "質疑応答",
        "reading": "しつぎおうとう",
        "meaning": "질의응답",
        "example": "質疑応答の時間が楽しみです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "来週の発表、準備は進んでいますか？",
        "translation": "다음 주 발표, 준비는 잘 되고 있어요?"
      },
      {
        "speaker": "B",
        "text": "はい、資料はほぼ完成しました。",
        "translation": "네, 자료는 거의 완성했어요."
      },
      {
        "speaker": "A",
        "text": "緊張しますよね。",
        "translation": "긴장되죠."
      },
      {
        "speaker": "B",
        "text": "はい、でも何度も練習したので大丈夫だと思います。",
        "translation": "네, 하지만 여러 번 연습했으니 괜찮을 거예요."
      },
      {
        "speaker": "A",
        "text": "頑張ってください！",
        "translation": "힘내세요!"
      },
      {
        "speaker": "B",
        "text": "ありがとうございます！",
        "translation": "감사합니다!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜は進んでいますか",
        "function": "~는 진행되고 있습니까?",
        "example": "準備は進んでいますか？",
        "translation": "준비는 진행되고 있습니까?"
      },
      {
        "pattern": "〜はずです",
        "function": "~일 것입니다 (확신)",
        "example": "大丈夫だと思います。",
        "translation": "괜찮을 거라고 생각합니다."
      },
      {
        "pattern": "〜に向けて",
        "function": "~를 향해서, ~를 목표로",
        "example": "発表に向けて練習しました。",
        "translation": "발표를 향해 연습했습니다."
      }
    ],
    "writingMission": {
      "prompt": "성공적인 발표를 위해 어떤 준비를 하는지, 자신만의 발표 노하우를 작성해 보세요.",
      "promptJp": "成功的な発表のためにどのような準備をするか、自分なりの発表ノウハウを書いてみましょう。",
      "minChars": 150,
      "hint": "자료 준비, 연습 방법, 긴장 관리 등 구체적인 노하우를 포함해 보세요."
    },
    "teacherNote": "성공적인 발표를 위한 준비 과정과 노하우를 공유하고, 발표 시 자신감을 가질 수 있도록 격려해 주세요.",
    "tags": [
      "학교",
      "직장",
      "발표준비"
    ]
  },
  {
    "id": "work-직업선택",
    "titleKo": "직업선택",
    "titleJp": "職業選択",
    "level": "N3",
    "category": "학교직장",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 30,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'직업선택'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "職業選択についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'직업선택'와 관련된 특별한 경험이 있나요?",
        "jp": "職業選択で特別な経験がありますか。"
      },
      {
        "ko": "'직업선택'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "職業選択はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'직업선택'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "職業選択のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'직업선택'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "職業選択で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '직업선택'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来職業選択はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "職業",
        "reading": "しょくぎょう",
        "meaning": "직업",
        "example": "将来どんな職業に就きたいですか。"
      },
      {
        "word": "やりがい",
        "reading": "やりがい",
        "meaning": "보람",
        "example": "やりがいのある仕事がしたいです。"
      },
      {
        "word": "適職",
        "reading": "てきしょく",
        "meaning": "적직",
        "example": "自分に合った適職を見つけたいです。"
      },
      {
        "word": "安定",
        "reading": "あんてい",
        "meaning": "안정",
        "example": "安定した職業を選びたいです。"
      },
      {
        "word": "専門知識",
        "reading": "せんもんちしき",
        "meaning": "전문 지식",
        "example": "専門知識を活かしたいです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "将来、どんな職業に就きたいですか？",
        "translation": "장래에 어떤 직업을 갖고 싶으세요?"
      },
      {
        "speaker": "B",
        "text": "私は人を助ける仕事がしたいです。",
        "translation": "저는 사람을 돕는 일을 하고 싶어요."
      },
      {
        "speaker": "A",
        "text": "やりがいがありそうですね。",
        "translation": "보람이 있을 것 같네요."
      },
      {
        "speaker": "B",
        "text": "はい、自分の専門知識を活かしたいです。",
        "translation": "네, 제 전문 지식을 살리고 싶어요."
      },
      {
        "speaker": "A",
        "text": "素晴らしい目標ですね。",
        "translation": "훌륭한 목표네요."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。",
        "translation": "감사합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に就きたいですか",
        "function": "~에 종사하고 싶습니까?",
        "example": "どんな職業に就きたいですか？",
        "translation": "어떤 직업에 종사하고 싶습니까?"
      },
      {
        "pattern": "〜たいです",
        "function": "~하고 싶습니다 (희망)",
        "example": "人を助ける仕事がしたいです。",
        "translation": "사람을 돕는 일을 하고 싶습니다."
      },
      {
        "pattern": "〜を活かす",
        "function": "~를 살리다, 활용하다",
        "example": "専門知識を活かしたいです。",
        "translation": "전문 지식을 살리고 싶습니다."
      }
    ],
    "writingMission": {
      "prompt": "자신이 생각하는 이상적인 직업과 그 직업을 선택하고 싶은 이유를 작성해 보세요.",
      "promptJp": "自分が考える理想的な職業と、その職業を選びたい理由を書いてみましょう。",
      "minChars": 150,
      "hint": "가치관, 적성, 사회적 기여 등 다양한 관점에서 작성해 보세요."
    },
    "teacherNote": "자신이 생각하는 이상적인 직업에 대해 이야기 나누고, 직업 선택 시 중요하게 생각하는 가치관에 대해 토론해 주세요.",
    "tags": [
      "학교",
      "직장",
      "직업선택"
    ]
  },
  {
    "id": "work-워라밸",
    "titleKo": "워라밸",
    "titleJp": "ワークライフバランス",
    "level": "N2",
    "category": "학교직장",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 35,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'워라밸'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "ワークライフバランスについてどんなイメージを持っていますか。"
      },
      {
        "ko": "'워라밸'와 관련된 특별한 경험이 있나요?",
        "jp": "ワークライフバランスで特別な経験がありますか。"
      },
      {
        "ko": "'워라밸'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "ワークライフバランスはあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'워라밸'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "ワークライフバランスのプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'워라밸'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "ワークライフバランスで改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '워라밸'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来ワークライフバランスはどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "ワークライフバランス",
        "reading": "ワークライフバランス",
        "meaning": "워라밸",
        "example": "ワークライフバランスを重視しています。"
      },
      {
        "word": "残業",
        "reading": "ざんぎょう",
        "meaning": "야근",
        "example": "残業を減らしたいです。"
      },
      {
        "word": "有給休暇",
        "reading": "ゆうきゅうきゅうか",
        "meaning": "유급 휴가",
        "example": "有給休暇を取りたいです。"
      },
      {
        "word": "プライベート",
        "reading": "プライベート",
        "meaning": "사생활",
        "example": "プライベートな時間を大切にしたいです。"
      },
      {
        "word": "充実する",
        "reading": "じゅうじつする",
        "meaning": "충실하다",
        "example": "仕事もプライベートも充実させたいです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ワークライフバランス、どう考えていますか？",
        "translation": "워라밸, 어떻게 생각하세요?"
      },
      {
        "speaker": "B",
        "text": "私は仕事もプライベートも充実させたいです。",
        "translation": "저는 일도 사생활도 충실하게 하고 싶어요."
      },
      {
        "speaker": "A",
        "text": "残業は少ない方がいいですよね。",
        "translation": "야근은 적은 편이 좋죠."
      },
      {
        "speaker": "B",
        "text": "はい、有給休暇も積極的に取りたいです。",
        "translation": "네, 유급 휴가도 적극적으로 쓰고 싶어요."
      },
      {
        "speaker": "A",
        "text": "私もそう思います。",
        "translation": "저도 그렇게 생각해요."
      },
      {
        "speaker": "B",
        "text": "バランスが取れた生活が理想です。",
        "translation": "균형 잡힌 생활이 이상적입니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜どう考えていますか",
        "function": "~를 어떻게 생각하고 있습니까?",
        "example": "ワークライフバランス、どう考えていますか？",
        "translation": "워라밸, 어떻게 생각하고 있습니까?"
      },
      {
        "pattern": "〜方がいい",
        "function": "~하는 편이 좋다",
        "example": "残業は少ない方がいい。",
        "translation": "야근은 적은 편이 좋다."
      },
      {
        "pattern": "〜が理想です",
        "function": "~가 이상적입니다",
        "example": "バランスが取れた生活が理想です。",
        "translation": "균형 잡힌 생활이 이상적입니다."
      }
    ],
    "writingMission": {
      "prompt": "자신에게 워라밸이 중요한 이유와, 워라밸을 지키기 위한 자신만의 방법을 작성해 보세요.",
      "promptJp": "自分にとってワークライフバランスが重要な理由と、ワークライフバランスを守るための自分なりの方法を書いてみましょう。",
      "minChars": 150,
      "hint": "시간 관리, 취미 활동, 휴식 등 구체적인 방법을 포함해 보세요."
    },
    "teacherNote": "워라밸의 중요성을 인식하고, 일과 삶의 균형을 유지하기 위한 자신만의 방법을 공유하며 토론해 주세요.",
    "tags": [
      "학교",
      "직장",
      "워라밸"
    ]
  },
  {
    "id": "work-인턴십",
    "titleKo": "인턴십",
    "titleJp": "インターンシップ",
    "level": "N3",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'인턴십'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "インターンシップについてどんなイメージを持っていますか。"
      },
      {
        "ko": "'인턴십'와 관련된 특별한 경험이 있나요?",
        "jp": "インターンシップで特別な経験がありますか。"
      },
      {
        "ko": "'인턴십'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "インターンシップはあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'인턴십'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "インターンシップのプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'인턴십'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "インターンシップで改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '인턴십'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来インターンシップはどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "インターンシップ",
        "reading": "インターンシップ",
        "meaning": "인턴십",
        "example": "夏休みにインターンシップに参加しました。"
      },
      {
        "word": "実務経験",
        "reading": "じつむけいけん",
        "meaning": "실무 경험",
        "example": "実務経験を積むことができます。"
      },
      {
        "word": "企業文化",
        "reading": "きぎょうぶんか",
        "meaning": "기업 문화",
        "example": "企業の文化を知ることができました。"
      },
      {
        "word": "就職",
        "reading": "しゅうしょく",
        "meaning": "취업",
        "example": "インターンシップが就職に役立ちました。"
      },
      {
        "word": "学び",
        "reading": "まなび",
        "meaning": "배움",
        "example": "多くの学びがありました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "夏休みにインターンシップに参加しました。",
        "translation": "여름 방학에 인턴십에 참가했어요."
      },
      {
        "speaker": "B",
        "text": "どんな経験ができましたか？",
        "translation": "어떤 경험을 할 수 있었어요?"
      },
      {
        "speaker": "A",
        "text": "実務経験を積むことができて、とても勉強になりました。",
        "translation": "실무 경험을 쌓을 수 있어서, 많이 배웠습니다."
      },
      {
        "speaker": "B",
        "text": "それは素晴らしいですね！",
        "translation": "그거 정말 멋지네요!"
      },
      {
        "speaker": "A",
        "text": "はい、将来の就職に役立つと思います。",
        "translation": "네, 장래 취업에 도움이 될 거라고 생각해요."
      },
      {
        "speaker": "B",
        "text": "私も参加してみたいです。",
        "translation": "저도 참가해보고 싶어요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に参加する",
        "function": "~에 참가하다",
        "example": "インターンシップに参加しました。",
        "translation": "인턴십에 참가했습니다."
      },
      {
        "pattern": "〜ことができます",
        "function": "~할 수 있습니다 (가능)",
        "example": "経験を積むことができます。",
        "translation": "경험을 쌓을 수 있습니다."
      },
      {
        "pattern": "〜に役立つ",
        "function": "~에 도움이 되다",
        "example": "就職に役立つと思います。",
        "translation": "취업에 도움이 될 거라고 생각합니다."
      }
    ],
    "writingMission": {
      "prompt": "인턴십 경험이 있다면 그 경험을 통해 무엇을 배웠는지, 없다면 어떤 인턴십에 참여하고 싶은지 작성해 보세요.",
      "promptJp": "インターンシップの経験があれば、その経験を通じて何を学んだか、なければどのようなインターンシップに参加したいか書いてみましょう。",
      "minChars": 150,
      "hint": "실무 경험, 진로 탐색, 네트워킹 등 구체적인 내용을 포함해 보세요."
    },
    "teacherNote": "인턴십 경험을 통해 얻은 배움과 성장을 이야기 나누고, 일본 기업의 인턴십 제도에 대한 이해를 높여주세요.",
    "tags": [
      "학교",
      "직장",
      "인턴십"
    ]
  },
  {
    "id": "work-직장예절",
    "titleKo": "직장예절",
    "titleJp": "職場のマナー",
    "level": "N1",
    "category": "학교직장",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 40,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "'직장예절'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "職場のマナーについてどんなイメージを持っていますか。"
      },
      {
        "ko": "'직장예절'와 관련된 특별한 경험이 있나요?",
        "jp": "職場のマナーで特別な経験がありますか。"
      },
      {
        "ko": "'직장예절'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "職場のマナーはあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'직장예절'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "職場のマナーのプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'직장예절'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "職場のマナーで改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '직장예절'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来職場のマナーはどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "マナー",
        "reading": "マナー",
        "meaning": "예절",
        "example": "職場のマナーは大切です。"
      },
      {
        "word": "敬語",
        "reading": "けいご",
        "meaning": "경어",
        "example": "正しい敬語を使いたいです。"
      },
      {
        "word": "報連相",
        "reading": "ほうれんそう",
        "meaning": "보고, 연락, 상담",
        "example": "報連相を徹底します。"
      },
      {
        "word": "身だしなみ",
        "reading": "みだしなみ",
        "meaning": "몸가짐, 복장",
        "example": "身だしなみに気をつけます。"
      },
      {
        "word": "名刺交換",
        "reading": "めいしかこうかん",
        "meaning": "명함 교환",
        "example": "名刺交換の練習をしました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "職場のマナーで気をつけていることはありますか？",
        "translation": "직장 예절에서 신경 쓰는 점이 있으세요?"
      },
      {
        "speaker": "B",
        "text": "はい、報連相を徹底するようにしています。",
        "translation": "네, 보고, 연락, 상담을 철저히 하려고 합니다."
      },
      {
        "speaker": "A",
        "text": "私も敬語の使い方を勉強中です。",
        "translation": "저도 경어 사용법을 공부 중이에요."
      },
      {
        "speaker": "B",
        "text": "難しいですよね。",
        "translation": "어렵죠."
      },
      {
        "speaker": "A",
        "text": "はい。でも、円滑な人間関係のために大切だと思います。",
        "translation": "네. 하지만 원활한 인간관계를 위해 중요하다고 생각해요."
      },
      {
        "speaker": "B",
        "text": "私も同感です。",
        "translation": "저도 동감입니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜で気をつけていることはありますか",
        "function": "~에서 신경 쓰는 점이 있습니까?",
        "example": "マナーで気をつけていることはありますか？",
        "translation": "예절에서 신경 쓰는 점이 있습니까?"
      },
      {
        "pattern": "〜ようにしています",
        "function": "~하도록 하고 있습니다 (노력, 습관)",
        "example": "徹底するようにしています。",
        "translation": "철저히 하려고 합니다."
      },
      {
        "pattern": "〜ために大切だと思います",
        "function": "~를 위해 중요하다고 생각합니다",
        "example": "人間関係のために大切だと思います。",
        "translation": "인간관계를 위해 중요하다고 생각합니다."
      }
    ],
    "writingMission": {
      "prompt": "일본 직장에서 중요하다고 생각하는 예절과 그 이유를 작성해 보세요.",
      "promptJp": "日本の職場で重要だと思うマナーと、その理由を書いてみましょう。",
      "minChars": 150,
      "hint": "보고, 연락, 상담(報連相), 경어 사용, 복장 등 구체적인 예시를 들어 작성해 보세요."
    },
    "teacherNote": "일본 직장 예절의 특징을 이해하고, 상황에 맞는 적절한 표현과 행동을 연습할 수 있도록 지도해 주세요.",
    "tags": [
      "학교",
      "직장",
      "직장예절"
    ]
  },
  {
    "id": "work-자기소개",
    "titleKo": "자기소개",
    "titleJp": "自己紹介",
    "level": "N5",
    "category": "학교직장",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "'자기소개'에 대해 어떤 이미지를 가지고 있나요?",
        "jp": "自己紹介についてどんなイメージを持っていますか。"
      },
      {
        "ko": "'자기소개'와 관련된 특별한 경험이 있나요?",
        "jp": "自己紹介で特別な経験がありますか。"
      },
      {
        "ko": "'자기소개'가 당신의 일상생활에 어떤 영향을 미치나요?",
        "jp": "自己紹介はあなたの日常生活にどんな影響を与えていますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "'자기소개'의 긍정적인 면과 부정적인 면은 무엇이라고 생각하나요?",
        "jp": "自己紹介のプラス面とマイナス面は何だと思いますか。"
      },
      {
        "ko": "'자기소개'와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "自己紹介で改善すべき点があれば何でしょうか。"
      },
      {
        "ko": "미래에 '자기소개'는 어떻게 변화할 것이라고 예상하나요?",
        "jp": "将来自己紹介はどのように変化すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "",
      "roleA": "",
      "roleB": ""
    },
    "expressions": [
      {
        "word": "初めまして",
        "reading": "はじめまして",
        "meaning": "처음 뵙겠습니다",
        "example": "初めまして、田中と申します。"
      },
      {
        "word": "どうぞよろしくお願いします",
        "reading": "どうぞよろしくおねがいします",
        "meaning": "아무쪼록 잘 부탁드립니다",
        "example": "これからどうぞよろしくお願いします。"
      },
      {
        "word": "趣味",
        "reading": "しゅみ",
        "meaning": "취미",
        "example": "私の趣味は読書です。"
      },
      {
        "word": "出身",
        "reading": "しゅっしん",
        "meaning": "출신",
        "example": "私は韓国出身です。"
      },
      {
        "word": "〜と申します",
        "reading": "〜ともうします",
        "meaning": "~라고 합니다 (겸양어)",
        "example": "山田と申します。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "初めまして、田中と申します。どうぞよろしくお願いします。",
        "translation": "처음 뵙겠습니다, 타나카라고 합니다. 잘 부탁드립니다."
      },
      {
        "speaker": "B",
        "text": "初めまして、山田です。こちらこそよろしくお願いします。",
        "translation": "처음 뵙겠습니다, 야마다입니다. 저야말로 잘 부탁드립니다."
      },
      {
        "speaker": "A",
        "text": "山田さんはどちらのご出身ですか。",
        "translation": "야마다 씨는 어디 출신이세요?"
      },
      {
        "speaker": "B",
        "text": "私は韓国のソウル出身です。田中さんは？",
        "translation": "저는 한국 서울 출신입니다. 타나카 씨는요?"
      },
      {
        "speaker": "A",
        "text": "私は大阪出身です。趣味は映画鑑賞です。",
        "translation": "저는 오사카 출신입니다. 취미는 영화 감상입니다."
      },
      {
        "speaker": "B",
        "text": "へえ、映画ですか。私も好きです。",
        "translation": "오, 영화요? 저도 좋아합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜と申します",
        "function": "자신을 소개할 때 겸양의 의미로 사용",
        "example": "田中と申します。",
        "translation": "타나카라고 합니다."
      },
      {
        "pattern": "どうぞよろしくお願いします",
        "function": "처음 만났을 때나 부탁할 때 사용",
        "example": "どうぞよろしくお願いします。",
        "translation": "아무쪼록 잘 부탁드립니다."
      },
      {
        "pattern": "〜出身です",
        "function": "출신지를 나타낼 때 사용",
        "example": "私はソウル出身です。",
        "translation": "저는 서울 출신입니다."
      }
    ],
    "writingMission": {
      "prompt": "자신을 소개하는 글을 작성해 보세요. (취미, 특기, 장래 희망 등 포함)",
      "promptJp": "自己紹介文を書いてみましょう。（趣味、特技、将来の夢などを含めて）",
      "minChars": 150,
      "hint": "자신의 개성을 잘 드러낼 수 있도록 구체적으로 작성해 보세요."
    },
    "teacherNote": "상대방에게 자신을 효과적으로 소개하는 방법을 연습합니다. 일본어 경어 사용에 유의하며 자연스러운 대화를 유도해 주세요.",
    "tags": [
      "학교",
      "직장",
      "자기소개"
    ]
  },
  {
    "id": "japan-편의점",
    "titleKo": "편의점",
    "titleJp": "コンビニ",
    "level": "N5",
    "category": "일본생활",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본 편의점에서 가장 좋아하는 것은 무엇인가요?",
        "jp": "日本のコンビニで一番好きなものは何ですか？"
      },
      {
        "ko": "편의점에서 주로 무엇을 사나요?",
        "jp": "コンビニで主に何を買いますか？"
      },
      {
        "ko": "한국 편의점과 일본 편의점의 차이점은 무엇이라고 생각하나요?",
        "jp": "韓国のコンビニと日本のコンビニの違いは何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본 편의점의 서비스 중 가장 인상 깊었던 것은 무엇인가요?",
        "jp": "日本のコンビニのサービスで一番印象的だったのは何ですか？"
      },
      {
        "ko": "편의점이 없는 세상은 어떨 것이라고 생각하나요?",
        "jp": "コンビニがない世界はどんなものだと思いますか？"
      },
      {
        "ko": "미래의 편의점은 어떤 모습일까요?",
        "jp": "未来のコンビニはどんな姿になると思いますか？"
      }
    ],
    "roleplay": {
      "situation": "일본 편의점에서 도시락과 음료를 사고 계산하는 상황",
      "roleA": "손님",
      "roleB": "점원"
    },
    "expressions": [
      {
        "word": "おにぎり",
        "reading": "おにぎり",
        "meaning": "삼각김밥",
        "example": "おにぎりを二つください。"
      },
      {
        "word": "レジ袋",
        "reading": "レジぶくろ",
        "meaning": "비닐봉투",
        "example": "レジ袋はご利用ですか？"
      },
      {
        "word": "温めますか",
        "reading": "あたためますか",
        "meaning": "데워드릴까요?",
        "example": "お弁当を温めますか？"
      },
      {
        "word": "ポイントカード",
        "reading": "ポイントカード",
        "meaning": "포인트 카드",
        "example": "ポイントカードはお持ちですか？"
      },
      {
        "word": "お会計",
        "reading": "おかいけい",
        "meaning": "계산",
        "example": "お会計は1000円になります。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "すみません、このお弁当と飲み物をお願いします。",
        "translation": "저기요, 이 도시락이랑 음료수 부탁해요."
      },
      {
        "speaker": "B",
        "text": "はい、かしこまりました。お弁当温めますか？",
        "translation": "네, 알겠습니다. 도시락 데워드릴까요?"
      },
      {
        "speaker": "A",
        "text": "はい、お願いします。",
        "translation": "네, 부탁해요."
      },
      {
        "speaker": "B",
        "text": "レジ袋はご利用ですか？",
        "translation": "비닐봉투 필요하세요?"
      },
      {
        "speaker": "A",
        "text": "いいえ、大丈夫です。",
        "translation": "아니요, 괜찮아요."
      },
      {
        "speaker": "B",
        "text": "お会計は780円になります。",
        "translation": "계산은 780엔입니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜をお願いします",
        "function": "부탁, 요청",
        "example": "コーヒーをお願いします。",
        "translation": "커피 부탁합니다."
      },
      {
        "pattern": "〜はご利用ですか",
        "function": "이용 여부 확인",
        "example": "Wi-Fiはご利用ですか？",
        "translation": "Wi-Fi 이용하세요?"
      },
      {
        "pattern": "〜になります",
        "function": "결과, 상태",
        "example": "合計で3000円になります。",
        "translation": "총 3000엔입니다."
      }
    ],
    "writingMission": {
      "prompt": "일본 편의점에서 경험했던 특별한 에피소드를 작성해 보세요.",
      "promptJp": "日本のコンビニで経験した特別なエピソードを書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 상품을 샀는지, 어떤 서비스를 이용했는지 구체적으로 작성해 보세요."
    },
    "teacherNote": "일본 편의점은 다양한 상품과 편리한 서비스로 유명합니다. 실생활에서 자주 사용되는 표현들을 익혀봅시다.",
    "tags": [
      "편의점",
      "쇼핑",
      "일상"
    ]
  },
  {
    "id": "japan-온천",
    "titleKo": "온천",
    "titleJp": "温泉",
    "level": "N4",
    "category": "일본생활",
    "activity": "페어대화",
    "style": "비즈니스",
    "duration": 28,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "일본 온천에 가본 적이 있나요?",
        "jp": "日本の温泉に行ったことがありますか？"
      },
      {
        "ko": "온천에 가면 무엇을 하고 싶나요?",
        "jp": "温泉に行ったら何をしたいですか？"
      },
      {
        "ko": "온천 여행의 매력은 무엇이라고 생각하나요?",
        "jp": "温泉旅行の魅力は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "온천에서 지켜야 할 예절에는 어떤 것들이 있을까요?",
        "jp": "温泉で守るべきマナーにはどんなものがありますか？"
      },
      {
        "ko": "노천 온천과 실내 온천 중 어느 것을 더 선호하나요?",
        "jp": "露天風呂と内風呂、どちらが好きですか？"
      },
      {
        "ko": "가장 기억에 남는 온천 경험은 무엇인가요?",
        "jp": "一番思い出に残っている温泉体験は何ですか？"
      }
    ],
    "roleplay": {
      "situation": "온천 여관에 체크인하고 온천 이용 방법을 묻는 상황",
      "roleA": "손님",
      "roleB": "여관 직원"
    },
    "expressions": [
      {
        "word": "露天風呂",
        "reading": "ろてんぶろ",
        "meaning": "노천탕",
        "example": "露天風呂はとても気持ちよかったです。"
      },
      {
        "word": "効能",
        "reading": "こうのう",
        "meaning": "효능",
        "example": "この温泉には美肌の効能があります。"
      },
      {
        "word": "湯加減",
        "reading": "ゆかげん",
        "meaning": "물 온도",
        "example": "お湯加減はいかがですか？"
      },
      {
        "word": "源泉かけ流し",
        "reading": "げんせんかけながし",
        "meaning": "원천 흘려보내기",
        "example": "この温泉は源泉かけ流しです。"
      },
      {
        "word": "浴衣",
        "reading": "ゆかた",
        "meaning": "유카타",
        "example": "浴衣に着替えて温泉に行きましょう。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "すみません、チェックインをお願いします。",
        "translation": "저기요, 체크인 부탁합니다."
      },
      {
        "speaker": "B",
        "text": "はい、承知いたしました。お風呂はあちらでございます。",
        "translation": "네, 알겠습니다. 목욕탕은 저쪽입니다."
      },
      {
        "speaker": "A",
        "text": "利用時間は何時までですか？",
        "translation": "이용 시간은 몇 시까지인가요?"
      },
      {
        "speaker": "B",
        "text": "夜は11時まで、朝は6時から9時までご利用いただけます。",
        "translation": "밤은 11시까지, 아침은 6시부터 9시까지 이용 가능합니다."
      },
      {
        "speaker": "A",
        "text": "ありがとうございます。",
        "translation": "감사합니다."
      },
      {
        "speaker": "B",
        "text": "ごゆっくりお過ごしくださいませ。",
        "translation": "편안하게 보내세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たことがありますか",
        "function": "경험",
        "example": "日本に行ったことがありますか？",
        "translation": "일본에 가본 적이 있나요?"
      },
      {
        "pattern": "〜でございます",
        "function": "정중한 표현",
        "example": "こちらでございます。",
        "translation": "이쪽입니다."
      },
      {
        "pattern": "〜まで",
        "function": "시간, 범위",
        "example": "5時までです。",
        "translation": "5시까지입니다."
      }
    ],
    "writingMission": {
      "prompt": "가장 가보고 싶은 일본 온천 지역과 그 이유를 작성해 보세요.",
      "promptJp": "一番行ってみたい日本の温泉地とその理由を書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 효능이 있는지, 어떤 풍경을 보고 싶은지 구체적으로 작성해 보세요."
    },
    "teacherNote": "일본 온천 문화는 일본 생활의 중요한 부분입니다. 온천 예절과 관련된 표현들을 익혀봅시다.",
    "tags": [
      "온천",
      "여행",
      "문화"
    ]
  },
  {
    "id": "japan-마쓰리",
    "titleKo": "마쓰리",
    "titleJp": "祭り",
    "level": "N3",
    "category": "일본생활",
    "activity": "작문",
    "style": "정중체",
    "duration": 35,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본 마쓰리에 참여해 본 적이 있나요?",
        "jp": "日本の祭りに参加したことがありますか？"
      },
      {
        "ko": "가장 인상 깊었던 마쓰리는 무엇인가요?",
        "jp": "一番印象に残っている祭りは何ですか？"
      },
      {
        "ko": "마쓰리의 어떤 점이 가장 매력적이라고 생각하나요?",
        "jp": "祭りのどんなところが一番魅力的だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "마쓰리에서 어떤 음식을 먹어보고 싶나요?",
        "jp": "祭りでどんな食べ物を食べてみたいですか？"
      },
      {
        "ko": "마쓰리에서 입는 전통 의상에 대해 이야기해 봅시다.",
        "jp": "祭りで着る伝統的な衣装について話してみましょう。"
      },
      {
        "ko": "마쓰리가 지역 사회에 미치는 영향은 무엇이라고 생각하나요?",
        "jp": "祭りが地域社会に与える影響は何だと思いますか？"
      }
    ],
    "roleplay": {
      "situation": "마쓰리에서 친구와 만나서 구경하고 음식을 사 먹는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "屋台",
        "reading": "やたい",
        "meaning": "포장마차",
        "example": "屋台でたこ焼きを食べました。"
      },
      {
        "word": "お神輿",
        "reading": "おみこし",
        "meaning": "가마",
        "example": "お神輿を担ぐのは大変そうです。"
      },
      {
        "word": "盆踊り",
        "reading": "ぼんおどり",
        "meaning": "봉오도리",
        "example": "盆踊りは夏の風物詩です。"
      },
      {
        "word": "法被",
        "reading": "はっぴ",
        "meaning": "핫피",
        "example": "法被を着て祭りに参加しました。"
      },
      {
        "word": "金魚すくい",
        "reading": "きんぎょすくい",
        "meaning": "금붕어 건지기",
        "example": "金魚すくいは子供に人気です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "わあ、すごい人だね！",
        "translation": "와, 사람 정말 많다!"
      },
      {
        "speaker": "B",
        "text": "うん、お祭りだからね。何食べたい？",
        "translation": "응, 축제니까. 뭐 먹고 싶어?"
      },
      {
        "speaker": "A",
        "text": "たこ焼きと焼きそばがいいな。",
        "translation": "타코야키랑 야키소바가 좋겠어."
      },
      {
        "speaker": "B",
        "text": "じゃあ、あそこの屋台に行こうか。",
        "translation": "그럼, 저기 포장마차로 갈까?"
      },
      {
        "speaker": "A",
        "text": "うん！金魚すくいもやりたい！",
        "translation": "응! 금붕어 건지기도 하고 싶어!"
      },
      {
        "speaker": "B",
        "text": "いいね！",
        "translation": "좋아!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜だね",
        "function": "동의, 확인",
        "example": "きれいだね。",
        "translation": "예쁘네."
      },
      {
        "pattern": "〜したい",
        "function": "희망, 소망",
        "example": "日本に行きたい。",
        "translation": "일본에 가고 싶다."
      },
      {
        "pattern": "〜に行こうか",
        "function": "권유, 제안",
        "example": "映画に行こうか。",
        "translation": "영화 보러 갈까?"
      }
    ],
    "writingMission": {
      "prompt": "일본 마쓰리에서 가장 경험해보고 싶은 활동과 그 이유를 작성해 보세요.",
      "promptJp": "日本の祭りで一番経験してみたい活動とその理由を書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 음식을 먹고 싶은지, 어떤 게임을 하고 싶은지 구체적으로 작성해 보세요."
    },
    "teacherNote": "일본의 마쓰리는 지역마다 특색이 있습니다. 마쓰리 관련 어휘와 회화 표현을 익혀봅시다.",
    "tags": [
      "마쓰리",
      "축제",
      "문화"
    ]
  },
  {
    "id": "japan-신사참배",
    "titleKo": "신사참배",
    "titleJp": "神社参拝",
    "level": "N3",
    "category": "일본생활",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 27,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "일본 신사에 가본 적이 있나요?",
        "jp": "日本の神社に行ったことがありますか？"
      },
      {
        "ko": "신사에서 무엇을 했나요?",
        "jp": "神社で何をしましたか？"
      },
      {
        "ko": "신사참배는 어떤 의미가 있다고 생각하나요?",
        "jp": "神社参拝はどんな意味があると思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "신사참배 시 지켜야 할 예절에는 어떤 것들이 있을까요?",
        "jp": "神社参拝の際に守るべきマナーにはどんなものがありますか？"
      },
      {
        "ko": "일본의 종교 문화에 대해 어떻게 생각하나요?",
        "jp": "日本の宗教文化についてどう思いますか？"
      },
      {
        "ko": "가장 인상 깊었던 신사는 어디인가요?",
        "jp": "一番印象に残っている神社はどこですか？"
      }
    ],
    "roleplay": {
      "situation": "신사에서 참배하고 오미쿠지를 뽑는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "鳥居",
        "reading": "とりい",
        "meaning": "도리이",
        "example": "鳥居をくぐって神社に入ります。"
      },
      {
        "word": "お賽銭",
        "reading": "おさいせん",
        "meaning": "헌금",
        "example": "お賽銭を入れてお祈りしました。"
      },
      {
        "word": "おみくじ",
        "reading": "おみくじ",
        "meaning": "운세 뽑기",
        "example": "おみくじを引いたら大吉でした。"
      },
      {
        "word": "手水舎",
        "reading": "ちょうずや",
        "meaning": "손 씻는 곳",
        "example": "手水舎で手と口を清めます。"
      },
      {
        "word": "絵馬",
        "reading": "えま",
        "meaning": "소원패",
        "example": "絵馬に願い事を書きました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "鳥居をくぐる前に一礼するんだよ。",
        "translation": "도리이를 지나기 전에 한 번 절하는 거야."
      },
      {
        "speaker": "B",
        "text": "へえ、知らなかった！",
        "translation": "와, 몰랐어!"
      },
      {
        "speaker": "A",
        "text": "お賽銭を入れて、二礼二拍手一礼だよ。",
        "translation": "헌금 넣고, 두 번 절하고 두 번 박수 치고 한 번 절하는 거야."
      },
      {
        "speaker": "B",
        "text": "なるほど。おみくじも引いてみようかな。",
        "translation": "그렇구나. 오미쿠지도 뽑아볼까."
      },
      {
        "speaker": "A",
        "text": "うん、いい運勢が出るといいね！",
        "translation": "응, 좋은 운세가 나오면 좋겠다!"
      },
      {
        "speaker": "B",
        "text": "大吉が出た！やったー！",
        "translation": "대길 나왔다! 야호!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜するんだよ",
        "function": "설명, 조언",
        "example": "これはこうするんだよ。",
        "translation": "이건 이렇게 하는 거야."
      },
      {
        "pattern": "〜てみようかな",
        "function": "시도, 제안",
        "example": "食べてみようかな。",
        "translation": "먹어볼까."
      },
      {
        "pattern": "〜が出た",
        "function": "결과, 나타남",
        "example": "いい結果が出た。",
        "translation": "좋은 결과가 나왔다."
      }
    ],
    "writingMission": {
      "prompt": "일본 신사에서 소원을 빌었던 경험이나, 어떤 소원을 빌고 싶은지 작성해 보세요.",
      "promptJp": "日本の神社で願い事をした経験や、どんな願い事をしたいか書いてみましょう。",
      "minChars": 200,
      "hint": "구체적인 소원 내용과 그 소원을 빌게 된 배경을 작성해 보세요."
    },
    "teacherNote": "일본 신사참배는 일본의 전통 문화를 이해하는 데 중요합니다. 관련 예절과 표현을 익혀봅시다.",
    "tags": [
      "신사",
      "문화",
      "종교"
    ]
  },
  {
    "id": "japan-벚꽃놀이",
    "titleKo": "벚꽃놀이",
    "titleJp": "お花見",
    "level": "N4",
    "category": "일본생활",
    "activity": "발표",
    "style": "캐주얼",
    "duration": 37,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본에서 벚꽃놀이를 해본 적이 있나요?",
        "jp": "日本でお花見をしたことがありますか？"
      },
      {
        "ko": "가장 좋아하는 벚꽃 명소는 어디인가요?",
        "jp": "一番好きなお花見スポットはどこですか？"
      },
      {
        "ko": "벚꽃놀이의 어떤 점이 가장 즐거운가요?",
        "jp": "お花見のどんなところが一番楽しいですか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "벚꽃놀이 할 때 어떤 음식을 준비하나요?",
        "jp": "お花見の時、どんな食べ物を用意しますか？"
      },
      {
        "ko": "벚꽃이 일본 사람들에게 어떤 의미가 있다고 생각하나요?",
        "jp": "桜が日本人にとってどんな意味があると思いますか？"
      },
      {
        "ko": "벚꽃놀이와 관련된 추억이 있다면 이야기해 주세요.",
        "jp": "お花見にまつわる思い出があれば話してください。"
      }
    ],
    "roleplay": {
      "situation": "친구와 벚꽃 명소에서 돗자리를 펴고 벚꽃을 감상하는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "満開",
        "reading": "まんかい",
        "meaning": "만개",
        "example": "桜が満開でとてもきれいです。"
      },
      {
        "word": "花見",
        "reading": "はなみ",
        "meaning": "벚꽃놀이",
        "example": "週末にお花見に行きましょう。"
      },
      {
        "word": "桜並木",
        "reading": "さくらなみき",
        "meaning": "벚꽃 가로수길",
        "example": "桜並木を散歩するのが好きです。"
      },
      {
        "word": "お弁当",
        "reading": "おべんとう",
        "meaning": "도시락",
        "example": "お花見にお弁当を持って行きました。"
      },
      {
        "word": "シート",
        "reading": "シート",
        "meaning": "돗자리",
        "example": "シートを敷いて座りましょう。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "わあ、桜が本当にきれいだね！",
        "translation": "와, 벚꽃이 정말 예쁘다!"
      },
      {
        "speaker": "B",
        "text": "うん、満開だね。来てよかった。",
        "translation": "응, 만개했네. 오길 잘했어."
      },
      {
        "speaker": "A",
        "text": "お弁当も美味しいし、最高だね！",
        "translation": "도시락도 맛있고, 최고다!"
      },
      {
        "speaker": "B",
        "text": "そうだね。来年もまた来たいな。",
        "translation": "그러게. 내년에도 또 오고 싶다."
      },
      {
        "speaker": "A",
        "text": "うん、絶対来ようね！",
        "translation": "응, 꼭 오자!"
      },
      {
        "speaker": "B",
        "text": "桜吹雪もきれいだね。",
        "translation": "벚꽃 눈도 예쁘네."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てよかった",
        "function": "만족, 후회 없음",
        "example": "来てよかった。",
        "translation": "오길 잘했다."
      },
      {
        "pattern": "〜たいな",
        "function": "희망, 소망 (가벼운 표현)",
        "example": "食べたいな。",
        "translation": "먹고 싶다."
      },
      {
        "pattern": "〜しようね",
        "function": "권유, 약속",
        "example": "また会おうね。",
        "translation": "또 만나자."
      }
    ],
    "writingMission": {
      "prompt": "일본 벚꽃놀이의 매력을 한국의 봄 풍경과 비교하여 작성해 보세요.",
      "promptJp": "日本のお花見の魅力を韓国の春の風景と比較して書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 점이 비슷하고 다른지, 어떤 경험을 하고 싶은지 구체적으로 작성해 보세요."
    },
    "teacherNote": "벚꽃놀이는 일본의 대표적인 봄 문화입니다. 벚꽃과 관련된 다양한 표현들을 익혀봅시다.",
    "tags": [
      "벚꽃",
      "봄",
      "문화"
    ]
  },
  {
    "id": "japan-지하철예절",
    "titleKo": "지하철예절",
    "titleJp": "地下鉄のマナー",
    "level": "N2",
    "category": "일본생활",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 24,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "일본 지하철을 이용해 본 적이 있나요?",
        "jp": "日本の地下鉄を利用したことがありますか？"
      },
      {
        "ko": "일본 지하철에서 가장 놀랐던 점은 무엇인가요?",
        "jp": "日本の地下鉄で一番驚いたことは何ですか？"
      },
      {
        "ko": "지하철에서 어떤 예절을 지켜야 한다고 생각하나요?",
        "jp": "地下鉄でどんなマナーを守るべきだと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본 지하철에서 지켜야 할 구체적인 예절에는 어떤 것들이 있을까요?",
        "jp": "日本の地下鉄で守るべき具体的なマナーにはどんなものがありますか？"
      },
      {
        "ko": "한국 지하철과 일본 지하철의 예절 문화 차이는 무엇이라고 생각하나요?",
        "jp": "韓国の地下鉄と日本の地下鉄のマナー文化の違いは何だと思いますか？"
      },
      {
        "ko": "지하철에서 불편했던 경험이 있다면 이야기해 주세요.",
        "jp": "地下鉄で不快な経験があれば話してください。"
      }
    ],
    "roleplay": {
      "situation": "혼잡한 지하철 안에서 친구와 대화하며 예절에 대해 이야기하는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "優先席",
        "reading": "ゆうせんせき",
        "meaning": "우선석",
        "example": "優先席ではお年寄りに席を譲りましょう。"
      },
      {
        "word": "駆け込み乗車",
        "reading": "かけこみじょうしゃ",
        "meaning": "막차 타기",
        "example": "駆け込み乗車は危険です。"
      },
      {
        "word": "携帯電話",
        "reading": "けいたいでんわ",
        "meaning": "휴대폰",
        "example": "車内での携帯電話での通話はご遠慮ください。"
      },
      {
        "word": "イヤホン",
        "reading": "イヤホン",
        "meaning": "이어폰",
        "example": "音楽を聴くときはイヤホンを使いましょう。"
      },
      {
        "word": "整列乗車",
        "reading": "せいれつじょうしゃ",
        "meaning": "줄 서서 타기",
        "example": "整列乗車にご協力ください。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "日本の地下鉄は本当に静かだね。",
        "translation": "일본 지하철은 정말 조용하네."
      },
      {
        "speaker": "B",
        "text": "うん、みんなマナーを守っているからね。",
        "translation": "응, 다들 매너를 지키니까."
      },
      {
        "speaker": "A",
        "text": "携帯電話で話している人がほとんどいないね。",
        "translation": "휴대폰으로 통화하는 사람이 거의 없네."
      },
      {
        "speaker": "B",
        "text": "そうだね。優先席も空いているのに座らない人もいるよ。",
        "translation": "그러게. 우선석도 비어있는데 앉지 않는 사람도 있어."
      },
      {
        "speaker": "A",
        "text": "すごいなあ。",
        "translation": "대단하다."
      },
      {
        "speaker": "B",
        "text": "私たちも気をつけようね。",
        "translation": "우리도 조심하자."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜だね",
        "function": "동의, 확인",
        "example": "静かだね。",
        "translation": "조용하네."
      },
      {
        "pattern": "〜からね",
        "function": "이유, 설명",
        "example": "忙しいからね。",
        "translation": "바쁘니까."
      },
      {
        "pattern": "〜人もいる",
        "function": "존재, 사례",
        "example": "知らない人もいる。",
        "translation": "모르는 사람도 있다."
      }
    ],
    "writingMission": {
      "prompt": "일본 지하철에서 가장 중요하다고 생각하는 예절 한 가지를 선택하고 그 이유를 작성해 보세요.",
      "promptJp": "日本の地下鉄で一番重要だと思うマナーを一つ選び、その理由を書いてみましょう。",
      "minChars": 200,
      "hint": "그 예절이 왜 중요한지, 지켜지지 않았을 때 어떤 문제가 생길 수 있는지 구체적으로 작성해 보세요."
    },
    "teacherNote": "일본 지하철은 세계적으로도 질서정연하기로 유명합니다. 지하철 이용 시 필요한 예절과 표현을 익혀봅시다.",
    "tags": [
      "지하철",
      "예절",
      "교통"
    ]
  },
  {
    "id": "japan-쓰레기분리수거",
    "titleKo": "쓰레기분리수거",
    "titleJp": "ゴミの分別",
    "level": "N3",
    "category": "일본생활",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "일본에서 쓰레기 분리수거를 해본 적이 있나요?",
        "jp": "日本でゴミの分別をしたことがありますか？"
      },
      {
        "ko": "쓰레기 분리수거가 어렵다고 느낀 적이 있나요?",
        "jp": "ゴミの分別が難しいと感じたことがありますか？"
      },
      {
        "ko": "쓰레기 분리수거는 왜 중요하다고 생각하나요?",
        "jp": "ゴミの分別はなぜ重要だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본의 쓰레기 분리수거 규칙 중 가장 특이하다고 생각하는 것은 무엇인가요?",
        "jp": "日本のゴミの分別ルールで一番特徴的だと思うことは何ですか？"
      },
      {
        "ko": "쓰레기 분리수거를 잘하기 위한 자신만의 노하우가 있다면 알려주세요.",
        "jp": "ゴミの分別をうまくやるための自分なりのコツがあれば教えてください。"
      },
      {
        "ko": "쓰레기 분리수거가 환경에 미치는 영향에 대해 이야기해 봅시다.",
        "jp": "ゴミの分別が環境に与える影響について話してみましょう。"
      }
    ],
    "roleplay": {
      "situation": "일본에 막 이사 온 친구에게 쓰레기 분리수거 방법을 설명해 주는 상황",
      "roleA": "일본 거주 친구",
      "roleB": "새로 이사 온 친구"
    },
    "expressions": [
      {
        "word": "燃えるゴミ",
        "reading": "もえるゴミ",
        "meaning": "타는 쓰레기",
        "example": "燃えるゴミは週に二回出せます。"
      },
      {
        "word": "燃えないゴミ",
        "reading": "もえないゴミ",
        "meaning": "안 타는 쓰레기",
        "example": "燃えないゴミは月に一回です。"
      },
      {
        "word": "資源ゴミ",
        "reading": "しげんゴミ",
        "meaning": "재활용 쓰레기",
        "example": "ペットボトルは資源ゴミです。"
      },
      {
        "word": "粗大ゴミ",
        "reading": "そだいゴミ",
        "meaning": "대형 쓰레기",
        "example": "粗大ゴミは事前に連絡が必要です。"
      },
      {
        "word": "分別",
        "reading": "ぶんべつ",
        "meaning": "분리",
        "example": "ゴミの分別はとても大切です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "日本のゴミの分別は複雑だよね。",
        "translation": "일본 쓰레기 분리수거는 복잡하지."
      },
      {
        "speaker": "B",
        "text": "うん、まだよくわからないんだ。",
        "translation": "응, 아직 잘 모르겠어."
      },
      {
        "speaker": "A",
        "text": "燃えるゴミは月曜日と木曜日だよ。",
        "translation": "타는 쓰레기는 월요일이랑 목요일이야."
      },
      {
        "speaker": "B",
        "text": "なるほど。ペットボトルは？",
        "translation": "그렇구나. 페트병은?"
      },
      {
        "speaker": "A",
        "text": "ペットボトルは資源ゴミだから、水曜日に出すんだ。",
        "translation": "페트병은 재활용 쓰레기니까, 수요일에 내는 거야."
      },
      {
        "speaker": "B",
        "text": "ありがとう、助かるよ！",
        "translation": "고마워, 도움이 돼!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜だよね",
        "function": "동의, 확인",
        "example": "難しいだよね。",
        "translation": "어렵지."
      },
      {
        "pattern": "〜まだよくわからない",
        "function": "불확실성, 미숙함",
        "example": "まだよくわからない。",
        "translation": "아직 잘 모르겠다."
      },
      {
        "pattern": "〜だから",
        "function": "이유, 원인",
        "example": "雨だから行かない。",
        "translation": "비가 오니까 안 간다."
      }
    ],
    "writingMission": {
      "prompt": "일본의 쓰레기 분리수거 시스템이 한국에 도입된다면 어떤 점이 좋을지, 어떤 점이 어려울지 작성해 보세요.",
      "promptJp": "日本のゴミ分別システムが韓国に導入されたら、どんな良い点があり、どんな難しい点があるか書いてみましょう。",
      "minChars": 200,
      "hint": "환경 보호 측면, 시민들의 불편함 측면 등 다양한 관점에서 작성해 보세요."
    },
    "teacherNote": "일본의 쓰레기 분리수거는 매우 엄격합니다. 올바른 분리수거 방법을 익히는 것은 일본 생활의 필수입니다.",
    "tags": [
      "쓰레기",
      "환경",
      "생활"
    ]
  },
  {
    "id": "japan-이웃관계",
    "titleKo": "이웃관계",
    "titleJp": "近所付き合い",
    "level": "N4",
    "category": "일본생활",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 26,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "일본에서 이웃과 교류해 본 적이 있나요?",
        "jp": "日本で近所の人と交流したことがありますか？"
      },
      {
        "ko": "이웃과 좋은 관계를 유지하는 방법은 무엇이라고 생각하나요?",
        "jp": "近所の人と良い関係を保つ方法は何だと思いますか？"
      },
      {
        "ko": "이웃에게 어떤 도움을 받아본 적이 있나요?",
        "jp": "近所の人にどんな助けをしてもらったことがありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본에서 이웃 간에 지켜야 할 예절에는 어떤 것들이 있을까요?",
        "jp": "日本で近所付き合いで守るべきマナーにはどんなものがありますか？"
      },
      {
        "ko": "이웃과의 갈등이 생겼을 때 어떻게 해결하는 것이 좋을까요?",
        "jp": "近所の人とのトラブルが起きた時、どう解決するのが良いでしょうか？"
      },
      {
        "ko": "이웃과 함께 할 수 있는 활동에는 어떤 것들이 있을까요?",
        "jp": "近所の人と一緒にできる活動にはどんなものがありますか？"
      }
    ],
    "roleplay": {
      "situation": "새로운 이웃에게 이사 선물을 전달하며 인사하는 상황",
      "roleA": "새로운 이웃",
      "roleB": "기존 이웃"
    },
    "expressions": [
      {
        "word": "ご挨拶",
        "reading": "ごあいさつ",
        "meaning": "인사",
        "example": "引っ越しの挨拶に行きました。"
      },
      {
        "word": "おすそ分け",
        "reading": "おすそわけ",
        "meaning": "나눔",
        "example": "お隣さんからおすそ分けをいただきました。"
      },
      {
        "word": "ご迷惑",
        "reading": "ごめいわく",
        "meaning": "폐, 민폐",
        "example": "ご迷惑をおかけして申し訳ありません。"
      },
      {
        "word": "回覧板",
        "reading": "かいらんばん",
        "meaning": "회람판",
        "example": "回覧板が回ってきました。"
      },
      {
        "word": "町内会",
        "reading": "ちょうないかい",
        "meaning": "반상회",
        "example": "町内会のイベントに参加しました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "こんにちは、隣に引っ越してきました田中です。",
        "translation": "안녕하세요, 옆집으로 이사 온 다나카입니다."
      },
      {
        "speaker": "B",
        "text": "あら、ご丁寧にどうも。鈴木です。",
        "translation": "어머, 정중하게도. 스즈키입니다."
      },
      {
        "speaker": "A",
        "text": "つまらないものですが、どうぞ。",
        "translation": "변변치 않은 것이지만, 부디."
      },
      {
        "speaker": "B",
        "text": "まあ、ありがとうございます。",
        "translation": "어머, 감사합니다."
      },
      {
        "speaker": "A",
        "text": "これからどうぞよろしくお願いします。",
        "translation": "앞으로 잘 부탁드립니다."
      },
      {
        "speaker": "B",
        "text": "こちらこそ、よろしくお願いします。",
        "translation": "저야말로, 잘 부탁드립니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てきました",
        "function": "행동의 결과, 완료",
        "example": "日本に来てきました。",
        "translation": "일본에 왔습니다."
      },
      {
        "pattern": "〜どうぞ",
        "function": "권유, 부탁",
        "example": "どうぞお入りください。",
        "translation": "부디 들어오세요."
      },
      {
        "pattern": "〜よろしくお願いします",
        "function": "잘 부탁드립니다",
        "example": "今後ともよろしくお願いします。",
        "translation": "앞으로도 잘 부탁드립니다."
      }
    ],
    "writingMission": {
      "prompt": "일본에서 이웃과 좋은 관계를 맺기 위해 어떤 노력을 할 것인지 작성해 보세요.",
      "promptJp": "日本で近所の人と良い関係を築くために、どんな努力をするか書いてみましょう。",
      "minChars": 200,
      "hint": "인사, 선물, 교류 등 구체적인 행동 계획을 작성해 보세요."
    },
    "teacherNote": "일본에서는 이웃과의 관계를 중요하게 생각합니다. 이웃과 원만한 관계를 유지하기 위한 표현들을 익혀봅시다.",
    "tags": [
      "이웃",
      "관계",
      "생활"
    ]
  },
  {
    "id": "japan-계절음식",
    "titleKo": "계절음식",
    "titleJp": "季節の食べ物",
    "level": "N5",
    "category": "일본생활",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 34,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본의 계절 음식 중 가장 좋아하는 것은 무엇인가요?",
        "jp": "日本の季節の食べ物で一番好きなものは何ですか？"
      },
      {
        "ko": "어떤 계절에 어떤 음식을 먹는 것을 좋아하나요?",
        "jp": "どんな季節にどんな食べ物を食べるのが好きですか？"
      },
      {
        "ko": "계절 음식이 왜 중요하다고 생각하나요?",
        "jp": "季節の食べ物はなぜ重要だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본의 각 계절을 대표하는 음식에는 어떤 것들이 있을까요?",
        "jp": "日本の各季節を代表する食べ物にはどんなものがありますか？"
      },
      {
        "ko": "한국의 계절 음식과 일본의 계절 음식을 비교해 봅시다.",
        "jp": "韓国の季節の食べ物と日本の季節の食べ物を比較してみましょう。"
      },
      {
        "ko": "특정 계절에만 맛볼 수 있는 특별한 음식이 있다면 이야기해 주세요.",
        "jp": "特定の季節にしか味わえない特別な食べ物があれば話してください。"
      }
    ],
    "roleplay": {
      "situation": "친구와 계절 음식에 대해 이야기하며 다음 계절에 먹고 싶은 음식을 정하는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "旬",
        "reading": "しゅん",
        "meaning": "제철",
        "example": "この魚は今が旬です。"
      },
      {
        "word": "秋の味覚",
        "reading": "あきのあじかく",
        "meaning": "가을의 미각",
        "example": "秋の味覚を楽しみましょう。"
      },
      {
        "word": "鍋料理",
        "reading": "なべりょうり",
        "meaning": "전골 요리",
        "example": "冬には鍋料理が美味しいです。"
      },
      {
        "word": "ひな祭り",
        "reading": "ひなまつり",
        "meaning": "히나마쓰리",
        "example": "ひな祭りにはちらし寿司を食べます。"
      },
      {
        "word": "土用の丑の日",
        "reading": "どようのうしのひ",
        "meaning": "복날",
        "example": "土用の丑の日にはうなぎを食べます。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "日本の秋の味覚は本当に豊かだね。",
        "translation": "일본의 가을 미각은 정말 풍부하네."
      },
      {
        "speaker": "B",
        "text": "うん、松茸とか栗とか美味しいものが多いよね。",
        "translation": "응, 송이버섯이나 밤 같은 맛있는 게 많지."
      },
      {
        "speaker": "A",
        "text": "冬になったら、やっぱり鍋料理かな。",
        "translation": "겨울이 되면, 역시 전골 요리일까."
      },
      {
        "speaker": "B",
        "text": "いいね！おでんも食べたいな。",
        "translation": "좋아! 오뎅도 먹고 싶다."
      },
      {
        "speaker": "A",
        "text": "春は桜餅とか、夏はかき氷とかもいいよね。",
        "translation": "봄은 벚꽃떡이라든지, 여름은 빙수 같은 것도 좋지."
      },
      {
        "speaker": "B",
        "text": "一年中美味しいものがたくさんあるね。",
        "translation": "일년 내내 맛있는 게 많네."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜だね",
        "function": "동의, 확인",
        "example": "きれいだね。",
        "translation": "예쁘네."
      },
      {
        "pattern": "〜とか〜とか",
        "function": "예시 나열",
        "example": "りんごとかみかんとか。",
        "translation": "사과라든지 귤이라든지."
      },
      {
        "pattern": "〜かな",
        "function": "추측, 의문",
        "example": "美味しいかな。",
        "translation": "맛있을까."
      }
    ],
    "writingMission": {
      "prompt": "일본의 특정 계절을 선택하고, 그 계절에 즐길 수 있는 음식과 관련된 추억이나 계획을 작성해 보세요.",
      "promptJp": "日本の特定の季節を選び、その季節に楽しめる食べ物に関する思い出や計画を書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 음식을 누구와 어디서 먹고 싶은지, 어떤 분위기를 즐기고 싶은지 구체적으로 작성해 보세요."
    },
    "teacherNote": "일본은 사계절이 뚜렷하여 계절마다 다양한 음식을 즐길 수 있습니다. 계절 음식 관련 어휘를 익혀봅시다.",
    "tags": [
      "계절",
      "음식",
      "문화"
    ]
  },
  {
    "id": "japan-일본집구조",
    "titleKo": "일본집구조",
    "titleJp": "日本の家の構造",
    "level": "N3",
    "category": "일본생활",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 38,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본 집의 구조에 대해 알고 있는 것이 있나요?",
        "jp": "日本の家の構造について知っていることはありますか？"
      },
      {
        "ko": "일본 집에서 가장 흥미로운 점은 무엇이라고 생각하나요?",
        "jp": "日本の家で一番面白いと思うところは何ですか？"
      },
      {
        "ko": "한국 집과 일본 집의 가장 큰 차이점은 무엇이라고 생각하나요?",
        "jp": "韓国の家と日本の家の一番大きな違いは何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본 전통 가옥의 특징에는 어떤 것들이 있을까요?",
        "jp": "日本の伝統的な家屋の特徴にはどんなものがありますか？"
      },
      {
        "ko": "일본 집에서 생활할 때 불편했던 점이나 좋았던 점이 있다면 이야기해 주세요.",
        "jp": "日本の家で生活する上で不便だった点や良かった点があれば話してください。"
      },
      {
        "ko": "자신이 살고 싶은 일본 집의 모습은 어떤가요?",
        "jp": "自分が住みたい日本の家の姿はどんなものですか？"
      }
    ],
    "roleplay": {
      "situation": "일본 친구에게 자신의 집을 소개하는 상황",
      "roleA": "집주인",
      "roleB": "친구"
    },
    "expressions": [
      {
        "word": "和室",
        "reading": "わしつ",
        "meaning": "일본식 방",
        "example": "和室には畳が敷いてあります。"
      },
      {
        "word": "洋室",
        "reading": "ようしつ",
        "meaning": "서양식 방",
        "example": "洋室にはベッドがあります。"
      },
      {
        "word": "畳",
        "reading": "たたみ",
        "meaning": "다다미",
        "example": "畳の部屋は落ち着きます。"
      },
      {
        "word": "襖",
        "reading": "ふすま",
        "meaning": "미닫이문",
        "example": "襖を開けると隣の部屋と繋がります。"
      },
      {
        "word": "玄関",
        "reading": "げんかん",
        "meaning": "현관",
        "example": "玄関で靴を脱ぎます。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "いらっしゃい！どうぞ上がって。",
        "translation": "어서 와! 들어와."
      },
      {
        "speaker": "B",
        "text": "お邪魔します。広いお家だね！",
        "translation": "실례합니다. 넓은 집이네!"
      },
      {
        "speaker": "A",
        "text": "ありがとう。こっちが和室で、あっちが洋室だよ。",
        "translation": "고마워. 여기가 일본식 방이고, 저기가 서양식 방이야."
      },
      {
        "speaker": "B",
        "text": "和室があるんだね。素敵！",
        "translation": "일본식 방이 있네. 멋지다!"
      },
      {
        "speaker": "A",
        "text": "うん、畳の香りが落ち着くんだ。",
        "translation": "응, 다다미 향이 마음을 편안하게 해줘."
      },
      {
        "speaker": "B",
        "text": "いいなあ。",
        "translation": "좋겠다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜どうぞ",
        "function": "권유, 부탁",
        "example": "どうぞ座って。",
        "translation": "부디 앉아."
      },
      {
        "pattern": "〜だね",
        "function": "동의, 확인",
        "example": "広いね。",
        "translation": "넓네."
      },
      {
        "pattern": "〜んだ",
        "function": "설명, 이유",
        "example": "そうなんだ。",
        "translation": "그렇구나."
      }
    ],
    "writingMission": {
      "prompt": "일본 전통 가옥의 특징을 설명하고, 현대 일본 주거 문화에 미치는 영향에 대해 작성해 보세요.",
      "promptJp": "日本の伝統的な家屋の特徴を説明し、現代の日本の住居文化に与える影響について書いてみましょう。",
      "minChars": 200,
      "hint": "다다미, 후스마, 쇼지 등 구체적인 요소를 언급하며 작성해 보세요."
    },
    "teacherNote": "일본의 집 구조는 한국과 다른 점이 많습니다. 일본 주거 문화와 관련된 어휘를 익혀봅시다.",
    "tags": [
      "주거",
      "문화",
      "생활"
    ]
  },
  {
    "id": "japan-자판기",
    "titleKo": "자판기",
    "titleJp": "自動販売機",
    "level": "N4",
    "category": "일본생활",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본에서 자판기를 이용해 본 적이 있나요?",
        "jp": "日本で自動販売機を利用したことがありますか？"
      },
      {
        "ko": "가장 인상 깊었던 자판기는 무엇인가요?",
        "jp": "一番印象に残っている自動販売機は何ですか？"
      },
      {
        "ko": "일본에 자판기가 많은 이유는 무엇이라고 생각하나요?",
        "jp": "日本に自動販売機が多い理由は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본의 특이한 자판기에는 어떤 것들이 있을까요?",
        "jp": "日本の珍しい自動販売機にはどんなものがありますか？"
      },
      {
        "ko": "자판기가 없는 세상은 어떨 것이라고 생각하나요?",
        "jp": "自動販売機がない世界はどんなものだと思いますか？"
      },
      {
        "ko": "자판기의 장점과 단점은 무엇이라고 생각하나요?",
        "jp": "自動販売機のメリットとデメリットは何だと思いますか？"
      }
    ],
    "roleplay": {
      "situation": "친구와 길을 걷다가 자판기에서 음료를 뽑아 마시는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "自動販売機",
        "reading": "じどうはんばいき",
        "meaning": "자판기",
        "example": "自動販売機でジュースを買いました。"
      },
      {
        "word": "釣り銭",
        "reading": "つりせん",
        "meaning": "잔돈",
        "example": "釣り銭が出ませんでした。"
      },
      {
        "word": "温かい",
        "reading": "あたたかい",
        "meaning": "따뜻한",
        "example": "温かいコーヒーが飲みたいです。"
      },
      {
        "word": "冷たい",
        "reading": "つめたい",
        "meaning": "차가운",
        "example": "冷たいお茶をください。"
      },
      {
        "word": "品切れ",
        "reading": "しなぎれ",
        "meaning": "품절",
        "example": "この商品は品切れです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "喉が渇いたね。",
        "translation": "목마르다."
      },
      {
        "speaker": "B",
        "text": "あそこに自動販売機があるよ。",
        "translation": "저기에 자판기 있어."
      },
      {
        "speaker": "A",
        "text": "何にしようかな。",
        "translation": "뭘로 할까."
      },
      {
        "speaker": "B",
        "text": "私は冷たいお茶にする。",
        "translation": "나는 차가운 차로 할래."
      },
      {
        "speaker": "A",
        "text": "じゃあ、私は温かいコーヒーにしよう。",
        "translation": "그럼, 나는 따뜻한 커피로 해야겠다."
      },
      {
        "speaker": "B",
        "text": "お金を入れると出てくるよ。",
        "translation": "돈을 넣으면 나와."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たね",
        "function": "감탄, 동의",
        "example": "きれいだね。",
        "translation": "예쁘네."
      },
      {
        "pattern": "〜にしようかな",
        "function": "선택, 고민",
        "example": "何にしようかな。",
        "translation": "뭘로 할까."
      },
      {
        "pattern": "〜と〜",
        "function": "조건, 결과",
        "example": "ボタンを押すと出る。",
        "translation": "버튼을 누르면 나온다."
      }
    ],
    "writingMission": {
      "prompt": "일본의 자판기 문화가 한국에 미치는 영향에 대해 작성해 보세요.",
      "promptJp": "日本の自動販売機文化が韓国に与える影響について書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 종류의 자판기가 도입될 수 있을지, 어떤 편리함이나 불편함이 생길지 구체적으로 작성해 보세요."
    },
    "teacherNote": "일본은 자판기 천국이라고 불릴 만큼 다양한 자판기가 있습니다. 자판기 이용 시 필요한 표현들을 익혀봅시다.",
    "tags": [
      "자판기",
      "편의",
      "생활"
    ]
  },
  {
    "id": "japan-100엔샵",
    "titleKo": "100엔샵",
    "titleJp": "100円ショップ",
    "level": "N3",
    "category": "일본생활",
    "activity": "페어대화",
    "style": "비즈니스",
    "duration": 33,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본 100엔샵에 가본 적이 있나요?",
        "jp": "日本の100円ショップに行ったことがありますか？"
      },
      {
        "ko": "100엔샵에서 주로 무엇을 사나요?",
        "jp": "100円ショップで主に何を買いますか？"
      },
      {
        "ko": "100엔샵의 매력은 무엇이라고 생각하나요?",
        "jp": "100円ショップの魅力は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "100엔샵에서 가장 유용했던 물건은 무엇인가요?",
        "jp": "100円ショップで一番便利だったものは何ですか？"
      },
      {
        "ko": "100엔샵에서 살 수 없는 물건은 무엇이라고 생각하나요?",
        "jp": "100円ショップで買えないものは何だと思いますか？"
      },
      {
        "ko": "100엔샵이 일본 생활에 어떤 영향을 미친다고 생각하나요?",
        "jp": "100円ショップが日本の生活にどんな影響を与えていると思いますか？"
      }
    ],
    "roleplay": {
      "situation": "친구와 100엔샵에서 쇼핑하며 물건을 고르는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "均一価格",
        "reading": "きんいつかかく",
        "meaning": "균일 가격",
        "example": "この店は均一価格です。"
      },
      {
        "word": "掘り出し物",
        "reading": "ほりだしもの",
        "meaning": "득템",
        "example": "掘り出し物を見つけました。"
      },
      {
        "word": "便利グッズ",
        "reading": "べんりグッズ",
        "meaning": "편리한 용품",
        "example": "100円ショップには便利グッズがたくさんあります。"
      },
      {
        "word": "品揃え",
        "reading": "しなぞろえ",
        "meaning": "상품 구색",
        "example": "品揃えが豊富です。"
      },
      {
        "word": "お得",
        "reading": "おとく",
        "meaning": "이득",
        "example": "これはとてもお得です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "このお皿、100円なのに可愛いね！",
        "translation": "이 접시, 100엔인데 귀엽다!"
      },
      {
        "speaker": "B",
        "text": "うん、私も買おうかな。",
        "translation": "응, 나도 살까."
      },
      {
        "speaker": "A",
        "text": "見て、こんな便利グッズもあるよ！",
        "translation": "봐, 이런 편리한 용품도 있어!"
      },
      {
        "speaker": "B",
        "text": "すごい！これも100円なの？",
        "translation": "대단하다! 이것도 100엔이야?"
      },
      {
        "speaker": "A",
        "text": "そうだよ。100円ショップは本当に何でも揃ってるね。",
        "translation": "맞아. 100엔샵은 정말 없는 게 없네."
      },
      {
        "speaker": "B",
        "text": "ついつい買いすぎちゃうね。",
        "translation": "나도 모르게 너무 많이 사게 돼."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜のに",
        "function": "역접, 의외",
        "example": "安いのに美味しい。",
        "translation": "싼데 맛있다."
      },
      {
        "pattern": "〜も〜",
        "function": "강조, 놀라움",
        "example": "これも美味しい。",
        "translation": "이것도 맛있다."
      },
      {
        "pattern": "〜ちゃう",
        "function": "후회, 무심코",
        "example": "忘れちゃった。",
        "translation": "잊어버렸다."
      }
    ],
    "writingMission": {
      "prompt": "100엔샵에서 구매한 물건 중 가장 만족스러웠던 것과 그 활용법을 작성해 보세요.",
      "promptJp": "100円ショップで買ったものの中で一番満足した物と、その活用法を書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 물건인지, 왜 만족스러웠는지, 어떻게 활용하고 있는지 구체적으로 작성해 보세요."
    },
    "teacherNote": "100엔샵은 일본 생활의 필수 코스입니다. 저렴하고 유용한 물건들을 찾아보는 재미가 있습니다.",
    "tags": [
      "100엔샵",
      "쇼핑",
      "생활"
    ]
  },
  {
    "id": "japan-택배서비스",
    "titleKo": "택배서비스",
    "titleJp": "宅配サービス",
    "level": "N2",
    "category": "일본생활",
    "activity": "발표",
    "style": "정중체",
    "duration": 31,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본에서 택배 서비스를 이용해 본 적이 있나요?",
        "jp": "日本で宅配サービスを利用したことがありますか？"
      },
      {
        "ko": "한국과 일본의 택배 서비스에 어떤 차이가 있다고 생각하나요?",
        "jp": "韓国と日本の宅配サービスにどんな違いがあると思いますか？"
      },
      {
        "ko": "택배 서비스를 이용할 때 가장 중요하게 생각하는 것은 무엇인가요?",
        "jp": "宅配サービスを利用する時、一番重要だと思うことは何ですか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본의 택배 서비스 중 가장 편리하다고 생각하는 것은 무엇인가요?",
        "jp": "日本の宅配サービスで一番便利だと思うことは何ですか？"
      },
      {
        "ko": "택배를 보낼 때나 받을 때 주의해야 할 점은 무엇일까요?",
        "jp": "宅配を送る時や受け取る時、注意すべき点は何でしょうか？"
      },
      {
        "ko": "미래의 택배 서비스는 어떤 모습일까요?",
        "jp": "未来の宅配サービスはどんな姿になるでしょうか？"
      }
    ],
    "roleplay": {
      "situation": "택배를 받지 못해 재배송을 요청하는 상황",
      "roleA": "고객",
      "roleB": "택배 회사 직원"
    },
    "expressions": [
      {
        "word": "宅配便",
        "reading": "たくはいびん",
        "meaning": "택배",
        "example": "宅配便で荷物を送りました。"
      },
      {
        "word": "再配達",
        "reading": "さいはいたつ",
        "meaning": "재배송",
        "example": "再配達をお願いします。"
      },
      {
        "word": "不在票",
        "reading": "ふざいひょう",
        "meaning": "부재중 안내표",
        "example": "不在票が入っていました。"
      },
      {
        "word": "時間指定",
        "reading": "じかんしてい",
        "meaning": "시간 지정",
        "example": "時間指定でお願いします。"
      },
      {
        "word": "着払い",
        "reading": "ちゃくばらい",
        "meaning": "착불",
        "example": "着払いで送ってください。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "もしもし、再配達をお願いしたいのですが。",
        "translation": "여보세요, 재배송 부탁하고 싶은데요."
      },
      {
        "speaker": "B",
        "text": "はい、承知いたしました。お名前と伝票番号をお願いします。",
        "translation": "네, 알겠습니다. 성함과 운송장 번호 부탁합니다."
      },
      {
        "speaker": "A",
        "text": "田中太郎で、伝票番号は123456789です。",
        "translation": "다나카 타로이고, 운송장 번호는 123456789입니다."
      },
      {
        "speaker": "B",
        "text": "ありがとうございます。ご希望の配達日時はございますか？",
        "translation": "감사합니다. 희망하시는 배송 일시가 있으신가요?"
      },
      {
        "speaker": "A",
        "text": "明日の午前中でお願いします。",
        "translation": "내일 오전으로 부탁합니다."
      },
      {
        "speaker": "B",
        "text": "かしこまりました。",
        "translation": "알겠습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たいのですが",
        "function": "정중한 요청",
        "example": "聞きたいのですが。",
        "translation": "묻고 싶은데요."
      },
      {
        "pattern": "〜をお願いします",
        "function": "부탁, 요청",
        "example": "再配達をお願いします。",
        "translation": "재배송 부탁합니다."
      },
      {
        "pattern": "〜でございますか",
        "function": "정중한 질문",
        "example": "ご希望はございますか？",
        "translation": "희망사항 있으신가요?"
      }
    ],
    "writingMission": {
      "prompt": "일본 택배 서비스의 장점과 단점을 작성하고, 개선할 점이 있다면 제안해 보세요.",
      "promptJp": "日本の宅配サービスのメリットとデメリットを書き、改善点があれば提案してみましょう。",
      "minChars": 200,
      "hint": "배송 속도, 친절도, 비용, 편의성 등 다양한 측면에서 작성해 보세요."
    },
    "teacherNote": "일본의 택배 서비스는 매우 편리하고 정확합니다. 택배 이용 시 필요한 표현들을 익혀봅시다.",
    "tags": [
      "택배",
      "서비스",
      "생활"
    ]
  },
  {
    "id": "japan-드럭스토어",
    "titleKo": "드럭스토어",
    "titleJp": "ドラッグストア",
    "level": "N4",
    "category": "일본생활",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 39,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본 드럭스토어에 가본 적이 있나요?",
        "jp": "日本のドラッグストアに行ったことがありますか？"
      },
      {
        "ko": "드럭스토어에서 주로 무엇을 사나요?",
        "jp": "ドラッグストアで主に何を買いますか？"
      },
      {
        "ko": "일본 드럭스토어의 매력은 무엇이라고 생각하나요?",
        "jp": "日本のドラッグストアの魅力は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본 드럭스토어에서 추천하고 싶은 제품이 있다면 알려주세요.",
        "jp": "日本のドラッグストアでおすすめの商品があれば教えてください。"
      },
      {
        "ko": "한국의 약국이나 드럭스토어와 일본의 드럭스토어의 차이점은 무엇이라고 생각하나요?",
        "jp": "韓国の薬局やドラッグストアと日本のドラッグストアの違いは何だと思いますか？"
      },
      {
        "ko": "드럭스토어에서 쇼핑할 때 자신만의 팁이 있다면 이야기해 주세요.",
        "jp": "ドラッグストアで買い物する時、自分なりのコツがあれば話してください。"
      }
    ],
    "roleplay": {
      "situation": "드럭스토어에서 감기약을 찾고 직원에게 문의하는 상황",
      "roleA": "손님",
      "roleB": "점원"
    },
    "expressions": [
      {
        "word": "ドラッグストア",
        "reading": "ドラッグストア",
        "meaning": "드럭스토어",
        "example": "ドラッグストアで薬を買いました。"
      },
      {
        "word": "風邪薬",
        "reading": "かぜぐすり",
        "meaning": "감기약",
        "example": "風邪薬を探しています。"
      },
      {
        "word": "化粧品",
        "reading": "けしょうひん",
        "meaning": "화장품",
        "example": "化粧品コーナーはどこですか？"
      },
      {
        "word": "日用品",
        "reading": "にちようひん",
        "meaning": "생활용품",
        "example": "日用品も充実しています。"
      },
      {
        "word": "免税",
        "reading": "めんぜい",
        "meaning": "면세",
        "example": "免税手続きをお願いします。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "すみません、風邪薬はどこにありますか？",
        "translation": "저기요, 감기약은 어디에 있나요?"
      },
      {
        "speaker": "B",
        "text": "風邪薬はこちらの棚にございます。",
        "translation": "감기약은 이쪽 선반에 있습니다."
      },
      {
        "speaker": "A",
        "text": "ありがとうございます。おすすめの薬はありますか？",
        "translation": "감사합니다. 추천하는 약이 있나요?"
      },
      {
        "speaker": "B",
        "text": "こちらの薬はよく効きますよ。",
        "translation": "이 약은 잘 들어요."
      },
      {
        "speaker": "A",
        "text": "じゃあ、これを一つください。",
        "translation": "그럼, 이거 하나 주세요."
      },
      {
        "speaker": "B",
        "text": "かしこまりました。",
        "translation": "알겠습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜はどこにありますか",
        "function": "위치 문의",
        "example": "トイレはどこにありますか？",
        "translation": "화장실은 어디에 있나요?"
      },
      {
        "pattern": "〜にございます",
        "function": "정중한 존재 표현",
        "example": "あちらにございます。",
        "translation": "저쪽에 있습니다."
      },
      {
        "pattern": "〜よく効きます",
        "function": "효과가 좋다",
        "example": "この薬はよく効きます。",
        "translation": "이 약은 잘 들어요."
      }
    ],
    "writingMission": {
      "prompt": "일본 드럭스토어에서 구매하고 싶은 제품 목록을 작성하고, 각 제품을 구매하려는 이유를 설명해 보세요.",
      "promptJp": "日本のドラッグストアで買いたい製品リストを作成し、各製品を買いたい理由を説明してみましょう。",
      "minChars": 200,
      "hint": "화장품, 의약품, 생활용품 등 다양한 카테고리에서 선택하여 작성해 보세요."
    },
    "teacherNote": "일본 드럭스토어는 의약품뿐만 아니라 다양한 생활용품과 화장품을 판매합니다. 쇼핑 시 유용한 표현들을 익혀봅시다.",
    "tags": [
      "드럭스토어",
      "쇼핑",
      "건강"
    ]
  },
  {
    "id": "japan-일본학교",
    "titleKo": "일본학교",
    "titleJp": "日本の学校",
    "level": "N3",
    "category": "일본생활",
    "activity": "발표",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본 학교에 대해 알고 있는 것이 있나요?",
        "jp": "日本の学校について知っていることはありますか？"
      },
      {
        "ko": "일본 학교에서 가장 흥미로운 점은 무엇이라고 생각하나요?",
        "jp": "日本の学校で一番面白いと思うところは何ですか？"
      },
      {
        "ko": "한국 학교와 일본 학교의 가장 큰 차이점은 무엇이라고 생각하나요?",
        "jp": "韓国の学校と日本の学校の一番大きな違いは何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본 학교의 동아리 활동에 대해 이야기해 봅시다.",
        "jp": "日本の学校の部活動について話してみましょう。"
      },
      {
        "ko": "일본 학교의 급식 문화에 대해 어떻게 생각하나요?",
        "jp": "日本の学校の給食文化についてどう思いますか？"
      },
      {
        "ko": "일본 학교에 다닌다면 어떤 활동을 해보고 싶나요?",
        "jp": "日本の学校に通うとしたら、どんな活動をしてみたいですか？"
      }
    ],
    "roleplay": {
      "situation": "일본 학교로 전학 온 친구에게 학교생활을 안내해 주는 상황",
      "roleA": "일본 학생",
      "roleB": "전학생"
    },
    "expressions": [
      {
        "word": "部活動",
        "reading": "ぶかつどう",
        "meaning": "동아리 활동",
        "example": "放課後は部活動があります。"
      },
      {
        "word": "給食",
        "reading": "きゅうしょく",
        "meaning": "급식",
        "example": "今日の給食はカレーライスでした。"
      },
      {
        "word": "制服",
        "reading": "せいふく",
        "meaning": "교복",
        "example": "日本の学校は制服があります。"
      },
      {
        "word": "運動会",
        "reading": "うんどうかい",
        "meaning": "운동회",
        "example": "運動会は秋に開催されます。"
      },
      {
        "word": "修学旅行",
        "reading": "しゅうがくりょこう",
        "meaning": "수학여행",
        "example": "修学旅行で京都に行きました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ようこそ、〇〇高校へ！",
        "translation": "어서 와, 〇〇고등학교에!"
      },
      {
        "speaker": "B",
        "text": "ありがとう。これからよろしくね。",
        "translation": "고마워. 앞으로 잘 부탁해."
      },
      {
        "speaker": "A",
        "text": "何か困ったことがあったら、いつでも聞いてね。",
        "translation": "뭔가 곤란한 일이 있으면, 언제든지 물어봐."
      },
      {
        "speaker": "B",
        "text": "うん、ありがとう！部活動は何があるの？",
        "translation": "응, 고마워! 동아리 활동은 뭐가 있어?"
      },
      {
        "speaker": "A",
        "text": "野球部、サッカー部、吹奏楽部とか色々あるよ。",
        "translation": "야구부, 축구부, 취주악부 등 여러 가지 있어."
      },
      {
        "speaker": "B",
        "text": "へえ、面白そうだね！",
        "translation": "와, 재미있겠다!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜へ",
        "function": "방향, 목적지",
        "example": "学校へ行く。",
        "translation": "학교에 간다."
      },
      {
        "pattern": "〜何か困ったことがあったら",
        "function": "조건, 가정",
        "example": "もしよかったら。",
        "translation": "만약 괜찮다면."
      },
      {
        "pattern": "〜とか色々ある",
        "function": "예시 나열",
        "example": "本とかペンとか色々ある。",
        "translation": "책이라든지 펜이라든지 여러 가지 있다."
      }
    ],
    "writingMission": {
      "prompt": "일본 학교생활에서 가장 기대되는 점과 걱정되는 점을 작성해 보세요.",
      "promptJp": "日本の学校生活で一番期待することと心配なことを書いてみましょう。",
      "minChars": 200,
      "hint": "친구 관계, 공부, 동아리 활동, 급식 등 다양한 측면에서 작성해 보세요."
    },
    "teacherNote": "일본 학교는 한국 학교와 다른 문화와 시스템을 가지고 있습니다. 일본 학교생활에 필요한 표현들을 익혀봅시다.",
    "tags": [
      "학교",
      "교육",
      "생활"
    ]
  },
  {
    "id": "japan-오마모리",
    "titleKo": "오마모리",
    "titleJp": "お守り",
    "level": "N5",
    "category": "일본생활",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본 오마모리를 본 적이 있나요?",
        "jp": "日本のお守りを見たことがありますか？"
      },
      {
        "ko": "오마모리가 어떤 의미를 가지고 있다고 생각하나요?",
        "jp": "お守りがどんな意味を持っていると思いますか？"
      },
      {
        "ko": "어떤 종류의 오마모리를 가지고 싶나요?",
        "jp": "どんな種類のお守りが欲しいですか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "오마모리의 종류와 각각의 효능에 대해 이야기해 봅시다.",
        "jp": "お守りの種類とそれぞれの効能について話してみましょう。"
      },
      {
        "ko": "오마모리를 구매하거나 사용할 때 주의해야 할 점은 무엇일까요?",
        "jp": "お守りを買う時や使う時、注意すべき点は何でしょうか？"
      },
      {
        "ko": "오마모리와 관련된 특별한 경험이 있다면 이야기해 주세요.",
        "jp": "お守りにまつわる特別な経験があれば話してください。"
      }
    ],
    "roleplay": {
      "situation": "친구에게 오마모리를 선물하며 그 의미를 설명해 주는 상황",
      "roleA": "선물하는 친구",
      "roleB": "선물 받는 친구"
    },
    "expressions": [
      {
        "word": "お守り",
        "reading": "おまもり",
        "meaning": "부적, 수호부",
        "example": "交通安全のお守りを買いました。"
      },
      {
        "word": "学業成就",
        "reading": "がくぎょうじょうじゅ",
        "meaning": "학업 성취",
        "example": "学業成就のお守りをもらいました。"
      },
      {
        "word": "恋愛成就",
        "reading": "れんあいじょうじゅ",
        "meaning": "연애 성취",
        "example": "恋愛成就のお守りが欲しいです。"
      },
      {
        "word": "厄除け",
        "reading": "やくよけ",
        "meaning": "액막이",
        "example": "厄除けのお守りを身につけています。"
      },
      {
        "word": "ご利益",
        "reading": "ごりやく",
        "meaning": "효험, 이득",
        "example": "このお守りにはご利益があります。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "これ、お土産だよ。",
        "translation": "이거, 선물이야."
      },
      {
        "speaker": "B",
        "text": "わあ、お守りだ！ありがとう！",
        "translation": "와, 오마모리다! 고마워!"
      },
      {
        "speaker": "A",
        "text": "これは学業成就のお守りだよ。",
        "translation": "이건 학업 성취 오마모리야."
      },
      {
        "speaker": "B",
        "text": "嬉しい！これで試験も頑張れる！",
        "translation": "기쁘다! 이걸로 시험도 열심히 할 수 있겠어!"
      },
      {
        "speaker": "A",
        "text": "うん、ご利益があるといいね。",
        "translation": "응, 효험이 있으면 좋겠다."
      },
      {
        "speaker": "B",
        "text": "大切にするね。",
        "translation": "소중히 할게."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜だよ",
        "function": "설명, 강조",
        "example": "そうだよ。",
        "translation": "맞아."
      },
      {
        "pattern": "〜といいね",
        "function": "희망, 바람",
        "example": "晴れるといいね。",
        "translation": "맑으면 좋겠다."
      },
      {
        "pattern": "〜にする",
        "function": "결정, 선택",
        "example": "これにする。",
        "translation": "이걸로 할래."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 이루고 싶은 소원과 그 소원에 맞는 오마모리를 상상하여 작성해 보세요.",
      "promptJp": "自分が一番叶えたい願い事と、その願い事に合うお守りを想像して書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 신사에서 어떤 디자인의 오마모리를 받고 싶은지, 어떤 효험을 기대하는지 구체적으로 작성해 보세요."
    },
    "teacherNote": "오마모리는 일본의 독특한 문화 중 하나입니다. 다양한 오마모리의 종류와 의미를 익혀봅시다.",
    "tags": [
      "오마모리",
      "문화",
      "신사"
    ]
  },
  {
    "id": "japan-오미야게",
    "titleKo": "오미야게",
    "titleJp": "お土産",
    "level": "N4",
    "category": "일본생활",
    "activity": "작문",
    "style": "캐주얼",
    "duration": 29,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본에서 오미야게를 사본 적이 있나요?",
        "jp": "日本でお土産を買ったことがありますか？"
      },
      {
        "ko": "가장 기억에 남는 오미야게는 무엇인가요?",
        "jp": "一番思い出に残っているお土産は何ですか？"
      },
      {
        "ko": "오미야게를 고를 때 어떤 점을 중요하게 생각하나요?",
        "jp": "お土産を選ぶ時、どんなことを重要だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본의 지역별 대표 오미야게에는 어떤 것들이 있을까요?",
        "jp": "日本の地域別の代表的なお土産にはどんなものがありますか？"
      },
      {
        "ko": "오미야게 문화가 한국의 선물 문화와 어떤 차이가 있다고 생각하나요?",
        "jp": "お土産文化が韓国のプレゼント文化とどんな違いがあると思いますか？"
      },
      {
        "ko": "오미야게를 주고받는 문화에 대해 어떻게 생각하나요?",
        "jp": "お土産をやり取りする文化についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "여행 후 친구에게 오미야게를 전달하며 여행 이야기를 하는 상황",
      "roleA": "여행 다녀온 친구",
      "roleB": "친구"
    },
    "expressions": [
      {
        "word": "お土産",
        "reading": "おみやげ",
        "meaning": "선물, 기념품",
        "example": "京都でお土産を買いました。"
      },
      {
        "word": "名物",
        "reading": "めいぶつ",
        "meaning": "명물",
        "example": "これは北海道の名物です。"
      },
      {
        "word": "限定品",
        "reading": "げんていひん",
        "meaning": "한정품",
        "example": "地域限定品は人気があります。"
      },
      {
        "word": "渡す",
        "reading": "わたす",
        "meaning": "건네다",
        "example": "お土産を渡しました。"
      },
      {
        "word": "喜ぶ",
        "reading": "よろこぶ",
        "meaning": "기뻐하다",
        "example": "友達が喜んでくれました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "ただいま！これ、お土産だよ。",
        "translation": "다녀왔어! 이거, 선물이야."
      },
      {
        "speaker": "B",
        "text": "おかえり！わあ、ありがとう！",
        "translation": "어서 와! 와, 고마워!"
      },
      {
        "speaker": "A",
        "text": "〇〇の有名な和菓子だよ。",
        "translation": "〇〇의 유명한 일본 과자야."
      },
      {
        "speaker": "B",
        "text": "嬉しい！旅行はどうだった？",
        "translation": "기쁘다! 여행은 어땠어?"
      },
      {
        "speaker": "A",
        "text": "すごく楽しかったよ！また話すね。",
        "translation": "정말 즐거웠어! 또 얘기해줄게."
      },
      {
        "speaker": "B",
        "text": "うん、楽しみにしてる！",
        "translation": "응, 기대하고 있을게!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜だよ",
        "function": "설명, 강조",
        "example": "そうだよ。",
        "translation": "맞아."
      },
      {
        "pattern": "〜てくれた",
        "function": "혜택, 감사",
        "example": "教えてくれた。",
        "translation": "가르쳐줬다."
      },
      {
        "pattern": "〜楽しみにしてる",
        "function": "기대하고 있다",
        "example": "楽しみにしている。",
        "translation": "기대하고 있다."
      }
    ],
    "writingMission": {
      "prompt": "일본 여행에서 가족이나 친구에게 주고 싶은 오미야게를 3가지 선택하고, 그 이유를 작성해 보세요.",
      "promptJp": "日本旅行で家族や友達にあげたいお土産を3つ選び、その理由を書いてみましょう。",
      "minChars": 200,
      "hint": "각 오미야게의 특징과 받는 사람이 왜 좋아할지 구체적으로 작성해 보세요."
    },
    "teacherNote": "오미야게는 일본의 독특한 선물 문화입니다. 오미야게를 주고받을 때 필요한 표현들을 익혀봅시다.",
    "tags": [
      "오미야게",
      "선물",
      "문화"
    ]
  },
  {
    "id": "japan-카라오케",
    "titleKo": "카라오케",
    "titleJp": "カラオケ",
    "level": "N3",
    "category": "일본생활",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 36,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본에서 카라오케에 가본 적이 있나요?",
        "jp": "日本でカラオケに行ったことがありますか？"
      },
      {
        "ko": "카라오케에서 주로 어떤 노래를 부르나요?",
        "jp": "カラオケで主にどんな歌を歌いますか？"
      },
      {
        "ko": "카라오케의 매력은 무엇이라고 생각하나요?",
        "jp": "カラオケの魅力は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본 카라오케의 특징에는 어떤 것들이 있을까요?",
        "jp": "日本のカラオケの特徴にはどんなものがありますか？"
      },
      {
        "ko": "카라오케에서 노래를 잘 부르기 위한 자신만의 팁이 있다면 알려주세요.",
        "jp": "カラオケで上手に歌うための自分なりのコツがあれば教えてください。"
      },
      {
        "ko": "카라오케에서 있었던 재미있는 에피소드가 있다면 이야기해 주세요.",
        "jp": "カラオケであった面白いエピソードがあれば話してください。"
      }
    ],
    "roleplay": {
      "situation": "친구들과 카라오케에 가서 노래를 부르고 음료를 주문하는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "カラオケ",
        "reading": "カラオケ",
        "meaning": "카라오케",
        "example": "カラオケに行きましょう。"
      },
      {
        "word": "十八番",
        "reading": "おはこ",
        "meaning": "애창곡",
        "example": "私の十八番は〇〇です。"
      },
      {
        "word": "採点",
        "reading": "さいてん",
        "meaning": "채점",
        "example": "採点機能で点数を競いました。"
      },
      {
        "word": "フリータイム",
        "reading": "フリータイム",
        "meaning": "자유 시간",
        "example": "フリータイムでたくさん歌いました。"
      },
      {
        "word": "ドリンクバー",
        "reading": "ドリンクバー",
        "meaning": "음료바",
        "example": "ドリンクバー付きのプランにしました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "カラオケ行かない？",
        "translation": "카라오케 갈래?"
      },
      {
        "speaker": "B",
        "text": "いいね！行こう！",
        "translation": "좋아! 가자!"
      },
      {
        "speaker": "A",
        "text": "何歌う？",
        "translation": "뭐 부를래?"
      },
      {
        "speaker": "B",
        "text": "私は〇〇の曲を歌うよ。",
        "translation": "나는 〇〇의 노래를 부를 거야."
      },
      {
        "speaker": "A",
        "text": "じゃあ、私は〇〇を歌おうかな。",
        "translation": "그럼, 나는 〇〇를 부를까."
      },
      {
        "speaker": "B",
        "text": "盛り上がろうね！",
        "translation": "신나게 놀자!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ない？",
        "function": "권유, 제안",
        "example": "食べない？",
        "translation": "먹을래?"
      },
      {
        "pattern": "〜しようかな",
        "function": "선택, 고민",
        "example": "何にしようかな。",
        "translation": "뭘로 할까."
      },
      {
        "pattern": "〜ようね",
        "function": "권유, 약속",
        "example": "また会おうね。",
        "translation": "또 만나자."
      }
    ],
    "writingMission": {
      "prompt": "일본 카라오케에서 가장 즐거웠던 경험을 작성하고, 그 이유를 설명해 보세요.",
      "promptJp": "日本のカラオケで一番楽しかった経験を書き、その理由を説明してみましょう。",
      "minChars": 200,
      "hint": "어떤 노래를 불렀는지, 누구와 함께 갔는지, 어떤 분위기였는지 구체적으로 작성해 보세요."
    },
    "teacherNote": "카라오케는 일본의 대표적인 여가 활동입니다. 카라오케에서 유용한 표현들을 익혀봅시다.",
    "tags": [
      "카라오케",
      "여가",
      "문화"
    ]
  },
  {
    "id": "japan-이자카야",
    "titleKo": "이자카야",
    "titleJp": "居酒屋",
    "level": "N2",
    "category": "일본생활",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 23,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "일본 이자카야에 가본 적이 있나요?",
        "jp": "日本の居酒屋に行ったことがありますか？"
      },
      {
        "ko": "이자카야에서 주로 어떤 음식을 먹고 어떤 술을 마시나요?",
        "jp": "居酒屋で主にどんな食べ物を食べてどんなお酒を飲みますか？"
      },
      {
        "ko": "이자카야의 매력은 무엇이라고 생각하나요?",
        "jp": "居酒屋の魅力は何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본 이자카야에서 지켜야 할 예절에는 어떤 것들이 있을까요?",
        "jp": "日本の居酒屋で守るべきマナーにはどんなものがありますか？"
      },
      {
        "ko": "가장 좋아하는 이자카야 메뉴는 무엇인가요?",
        "jp": "一番好きな居酒屋メニューは何ですか？"
      },
      {
        "ko": "이자카야에서 있었던 재미있는 에피소드가 있다면 이야기해 주세요.",
        "jp": "居酒屋であった面白いエピソードがあれば話してください。"
      }
    ],
    "roleplay": {
      "situation": "친구들과 이자카야에서 주문하고 건배하는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "居酒屋",
        "reading": "いざかや",
        "meaning": "이자카야",
        "example": "仕事帰りに居酒屋に行きました。"
      },
      {
        "word": "とりあえず生",
        "reading": "とりあえずなま",
        "meaning": "일단 생맥주",
        "example": "とりあえず生でお願いします。"
      },
      {
        "word": "おつまみ",
        "reading": "おつまみ",
        "meaning": "안주",
        "example": "美味しいおつまみがたくさんあります。"
      },
      {
        "word": "乾杯",
        "reading": "かんぱい",
        "meaning": "건배",
        "example": "乾杯しましょう！"
      },
      {
        "word": "お会計",
        "reading": "おかいけい",
        "meaning": "계산",
        "example": "お会計お願いします。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "お疲れ様！",
        "translation": "수고했어!"
      },
      {
        "speaker": "B",
        "text": "お疲れ様！とりあえず生で！",
        "translation": "수고했어! 일단 생맥주로!"
      },
      {
        "speaker": "A",
        "text": "いいね！乾杯！",
        "translation": "좋아! 건배!"
      },
      {
        "speaker": "B",
        "text": "この枝豆美味しいね。",
        "translation": "이 에다마메 맛있네."
      },
      {
        "speaker": "A",
        "text": "うん、もう一皿頼もうか。",
        "translation": "응, 한 접시 더 시킬까."
      },
      {
        "speaker": "B",
        "text": "いいね！",
        "translation": "좋아!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜お疲れ様",
        "function": "수고했다는 인사",
        "example": "お疲れ様でした。",
        "translation": "수고하셨습니다."
      },
      {
        "pattern": "〜で！",
        "function": "간단한 주문",
        "example": "ビールで！",
        "translation": "맥주로!"
      },
      {
        "pattern": "〜もう一皿",
        "function": "추가 요청",
        "example": "もう一杯。",
        "translation": "한 잔 더."
      }
    ],
    "writingMission": {
      "prompt": "일본 이자카야에서 경험했던 특별한 분위기나 에피소드를 작성해 보세요.",
      "promptJp": "日本の居酒屋で経験した特別な雰囲気やエピソードを書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 사람들과 함께 갔는지, 어떤 음식을 먹었는지, 어떤 대화를 나누었는지 구체적으로 작성해 보세요."
    },
    "teacherNote": "이자카야는 일본의 독특한 술집 문화입니다. 이자카야에서 유용한 표현들을 익혀봅시다.",
    "tags": [
      "이자카야",
      "음식",
      "술"
    ]
  },
  {
    "id": "japan-코인세탁소",
    "titleKo": "코인세탁소",
    "titleJp": "コインランドリー",
    "level": "N1",
    "category": "일본생활",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 28,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "일본에서 코인 세탁소를 이용해 본 적이 있나요?",
        "jp": "日本でコインランドリーを利用したことがありますか？"
      },
      {
        "ko": "코인 세탁소를 이용하는 이유는 무엇인가요?",
        "jp": "コインランドリーを利用する理由は何ですか？"
      },
      {
        "ko": "코인 세탁소의 장점과 단점은 무엇이라고 생각하나요?",
        "jp": "コインランドリーのメリットとデメリットは何だと思いますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "코인 세탁소에서 지켜야 할 예절에는 어떤 것들이 있을까요?",
        "jp": "コインランドリーで守るべきマナーにはどんなものがありますか？"
      },
      {
        "ko": "코인 세탁소를 이용할 때 자신만의 팁이 있다면 알려주세요.",
        "jp": "コインランドリーを利用する時、自分なりのコツがあれば教えてください。"
      },
      {
        "ko": "미래의 코인 세탁소는 어떤 모습일까요?",
        "jp": "未来のコインランドリーはどんな姿になるでしょうか？"
      }
    ],
    "roleplay": {
      "situation": "코인 세탁소에서 세탁기와 건조기를 이용하는 방법을 친구에게 설명해 주는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "コインランドリー",
        "reading": "コインランドリー",
        "meaning": "코인 세탁소",
        "example": "コインランドリーで洗濯しました。"
      },
      {
        "word": "洗濯機",
        "reading": "せんたくき",
        "meaning": "세탁기",
        "example": "洗濯機が空いています。"
      },
      {
        "word": "乾燥機",
        "reading": "かんそうき",
        "meaning": "건조기",
        "example": "乾燥機を使います。"
      },
      {
        "word": "洗剤",
        "reading": "せんざい",
        "meaning": "세제",
        "example": "洗剤は自動で投入されます。"
      },
      {
        "word": "両替機",
        "reading": "りょうがえき",
        "meaning": "환전기",
        "example": "両替機で小銭を作りました。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この洗濯機、どうやって使うの？",
        "translation": "이 세탁기, 어떻게 쓰는 거야?"
      },
      {
        "speaker": "B",
        "text": "まず、お金を入れてコースを選ぶんだよ。",
        "translation": "먼저, 돈을 넣고 코스를 선택하는 거야."
      },
      {
        "speaker": "A",
        "text": "なるほど。洗剤は？",
        "translation": "그렇구나. 세제는?"
      },
      {
        "speaker": "B",
        "text": "洗剤は自動で入るから大丈夫。",
        "translation": "세제는 자동으로 들어가니까 괜찮아."
      },
      {
        "speaker": "A",
        "text": "便利だね！",
        "translation": "편리하다!"
      },
      {
        "speaker": "B",
        "text": "うん、乾燥機も使う？",
        "translation": "응, 건조기도 쓸래?"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜どうやって〜",
        "function": "방법 문의",
        "example": "どうやって行くの？",
        "translation": "어떻게 가는 거야?"
      },
      {
        "pattern": "〜から大丈夫",
        "function": "이유, 안심",
        "example": "簡単だから大丈夫。",
        "translation": "쉬우니까 괜찮아."
      },
      {
        "pattern": "〜も使う？",
        "function": "제안, 의향 확인",
        "example": "これも使う？",
        "translation": "이것도 쓸래?"
      }
    ],
    "writingMission": {
      "prompt": "코인 세탁소를 이용하면서 겪었던 재미있는 에피소드나 불편했던 점을 작성해 보세요.",
      "promptJp": "コインランドリーを利用しながら経験した面白いエピソードや不便だった点を書いてみましょう。",
      "minChars": 200,
      "hint": "어떤 상황이었는지, 어떻게 해결했는지, 무엇을 느꼈는지 구체적으로 작성해 보세요."
    },
    "teacherNote": "코인 세탁소는 일본에서 자취하는 사람들에게 유용한 시설입니다. 코인 세탁소 이용 시 필요한 표현들을 익혀봅시다.",
    "tags": [
      "세탁",
      "생활",
      "편의"
    ]
  },
  {
    "id": "japan-일본날씨-21",
    "titleKo": "일본날씨",
    "titleJp": "日本の天気",
    "level": "N5",
    "category": "일본생활",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 36,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "일본의 날씨에 대해 알고 있는 것이 있나요?",
        "jp": "日本の天気について知っていることはありますか？"
      },
      {
        "ko": "가장 좋아하는 일본의 계절은 무엇인가요?",
        "jp": "一番好きな日本の季節は何ですか？"
      },
      {
        "ko": "일본 날씨 때문에 불편했던 경험이 있나요?",
        "jp": "日本の天気のせいで不便だった経験がありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일본의 각 계절별 날씨 특징에 대해 이야기해 봅시다.",
        "jp": "日本の各季節ごとの天気の特徴について話してみましょう。"
      },
      {
        "ko": "일본의 자연재해(지진, 태풍 등)에 대해 어떻게 생각하나요?",
        "jp": "日本の自然災害（地震、台風など）についてどう思いますか？"
      },
      {
        "ko": "일본 날씨에 적응하기 위한 자신만의 노하우가 있다면 알려주세요.",
        "jp": "日本の天気に適応するための自分なりのコツがあれば教えてください。"
      }
    ],
    "roleplay": {
      "situation": "친구와 다음 주 날씨를 확인하며 주말 계획을 세우는 상황",
      "roleA": "친구 A",
      "roleB": "친구 B"
    },
    "expressions": [
      {
        "word": "梅雨",
        "reading": "つゆ",
        "meaning": "장마",
        "example": "梅雨の時期は雨が多いです。"
      },
      {
        "word": "台風",
        "reading": "たいふう",
        "meaning": "태풍",
        "example": "台風が近づいています。"
      },
      {
        "word": "猛暑",
        "reading": "もうしょ",
        "meaning": "폭염",
        "example": "今年の夏は猛暑でした。"
      },
      {
        "word": "雪",
        "reading": "ゆき",
        "meaning": "눈",
        "example": "冬は雪がたくさん降ります。"
      },
      {
        "word": "桜前線",
        "reading": "さくらぜんせん",
        "meaning": "벚꽃 전선",
        "example": "桜前線が北上しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "来週の天気予報見た？",
        "translation": "다음 주 일기예보 봤어?"
      },
      {
        "speaker": "B",
        "text": "うん、週末は晴れるみたいだよ。",
        "translation": "응, 주말은 맑을 것 같아."
      },
      {
        "speaker": "A",
        "text": "やった！どこか行こうか？",
        "translation": "야호! 어디 갈까?"
      },
      {
        "speaker": "B",
        "text": "ピクニックはどう？",
        "translation": "피크닉 어때?"
      },
      {
        "speaker": "A",
        "text": "いいね！お弁当作って行こう！",
        "translation": "좋아! 도시락 만들어서 가자!"
      },
      {
        "speaker": "B",
        "text": "楽しみだね！",
        "translation": "기대된다!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜みたいだよ",
        "function": "추측, 전달",
        "example": "雨が降るみたいだよ。",
        "translation": "비가 올 것 같아."
      },
      {
        "pattern": "〜どう？",
        "function": "제안, 의견 문의",
        "example": "これどう？",
        "translation": "이거 어때?"
      },
      {
        "pattern": "〜て行こう",
        "function": "행동의 목적",
        "example": "買って行こう。",
        "translation": "사서 가자."
      }
    ],
    "writingMission": {
      "prompt": "일본의 특정 계절을 선택하고, 그 계절의 날씨에 맞춰 어떤 옷차림과 활동을 계획할지 작성해 보세요.",
      "promptJp": "日本の特定の季節を選び、その季節の天気に合わせてどんな服装と活動を計画するか書いてみましょう。",
      "minChars": 200,
      "hint": "여름의 폭염, 겨울의 눈, 장마철 등 구체적인 날씨 상황을 가정하여 작성해 보세요."
    },
    "teacherNote": "일본은 사계절이 뚜렷하고 날씨 변화가 많습니다. 일본 날씨에 대한 이해와 관련 표현들을 익혀봅시다.",
    "tags": [
      "날씨",
      "계절",
      "생활"
    ]
  },
  {
    "id": "culture-food-comparison",
    "titleKo": "한일 음식 비교",
    "titleJp": "日韓の食べ物比較",
    "level": "N4",
    "category": "문화비교",
    "activity": "작문",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "가장 좋아하는 일본 음식은 무엇인가요?",
        "jp": "一番好きな日本食は何ですか？"
      },
      {
        "ko": "한국 음식과 일본 음식의 가장 큰 차이는 무엇이라고 생각하나요?",
        "jp": "韓国料理と日本料理の最も大きな違いは何だと思いますか？"
      },
      {
        "ko": "매운 음식을 잘 먹는 편인가요?",
        "jp": "辛い食べ物はよく食べる方ですか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "음식 문화가 그 나라의 국민성을 반영한다고 생각하나요?",
        "jp": "食文化がその国の国民性を反映していると思いますか？"
      },
      {
        "ko": "전통 음식을 보존하는 것과 현대적으로 퓨전하는 것 중 어느 것이 더 중요할까요?",
        "jp": "伝統的な食べ物を保存することと、現代的にフュージョンすること、どちらがより重要でしょうか？"
      },
      {
        "ko": "세계화로 인해 각국의 고유한 음식 문화가 사라지고 있다고 생각하나요?",
        "jp": "グローバル化によって各国の固有の食文化が消えつつあると思いますか？"
      }
    ],
    "roleplay": {
      "situation": "한국 식당에 처음 온 일본인 친구에게 메뉴를 추천해주는 상황",
      "roleA": "한국인 (메뉴를 추천하고 설명함)",
      "roleB": "일본인 (매운 것을 잘 못 먹고, 한국 음식이 처음임)"
    },
    "expressions": [
      {
        "word": "매운맛",
        "reading": "からみ",
        "meaning": "매운맛",
        "example": "韓国料理は辛味が特徴です。",
        "translation": "한국 요리는 매운맛이 특징입니다."
      },
      {
        "word": "담백하다",
        "reading": "あっさりしている",
        "meaning": "담백하다",
        "example": "日本料理はあっさりした味付けが多いです。",
        "translation": "일본 요리는 담백한 맛내기가 많습니다."
      },
      {
        "word": "밑반찬",
        "reading": "おかず",
        "meaning": "밑반찬",
        "example": "韓国の食堂ではおかずがおかわり自由です。",
        "translation": "한국 식당에서는 밑반찬 리필이 자유입니다."
      },
      {
        "word": "식감",
        "reading": "しょっかん",
        "meaning": "식감",
        "example": "トッポッキのもちもちした食感が好きです。",
        "translation": "떡볶이의 쫄깃한 식감을 좋아합니다."
      },
      {
        "word": "향신료",
        "reading": "こうしんりょう",
        "meaning": "향신료",
        "example": "香辛料がたくさん使われています。",
        "translation": "향신료가 많이 사용되고 있습니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본 음식은 대체로 달고 짠 맛이 강한 것 같아요.",
        "translation": "日本料理は全体的に甘じょっぱい味が強い気がします。"
      },
      {
        "speaker": "B",
        "text": "맞아요. 간장이나 미림을 많이 사용해서 그래요.",
        "translation": "そうですね。醤油やみりんをよく使うからです。"
      },
      {
        "speaker": "A",
        "text": "한국은 마늘이나 고춧가루를 많이 써서 매운 음식이 많죠.",
        "translation": "韓国はニンニクや唐辛子をよく使うので辛い食べ物が多いですよね。"
      },
      {
        "speaker": "B",
        "text": "네, 처음에는 매웠는데 지금은 그 매운맛이 중독성 있어요.",
        "translation": "はい、最初は辛かったですが、今はその辛さが癖になります。"
      },
      {
        "speaker": "A",
        "text": "다음에 같이 매운 떡볶이 먹으러 갈까요?",
        "translation": "今度一緒に辛いトッポッキを食べに行きましょうか？"
      },
      {
        "speaker": "B",
        "text": "좋아요! 하지만 너무 매운 건 피해주세요.",
        "translation": "いいですね！でも、あまり辛すぎるのは避けてください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "日本料理は全体的に甘じょっぱい味が強い気がします。",
        "translation": "일본 요리는 전체적으로 달고 짠 맛이 강한 느낌이 듭니다."
      },
      {
        "pattern": "~からだ",
        "function": "~때문이다",
        "example": "醤油やみりんをよく使うからです。",
        "translation": "간장이나 미림을 자주 사용하기 때문입니다."
      },
      {
        "pattern": "~を避ける",
        "function": "~을 피하다",
        "example": "あまり辛すぎるのは避けてください。",
        "translation": "너무 매운 것은 피해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 한국 음식과 일본 음식을 비교하여 소개하는 글을 작성해 보세요.",
      "promptJp": "自分が一番好きな韓国料理と日本料理を比較して紹介する文章を書いてみましょう。",
      "minChars": 150,
      "hint": "맛, 재료, 먹는 방법 등의 차이점을 포함해 보세요."
    },
    "teacherNote": "음식과 관련된 다양한 어휘를 활용하여 자연스러운 대화를 유도해 주세요.",
    "tags": [
      "음식",
      "문화",
      "비교"
    ]
  },
  {
    "id": "culture-greeting-culture",
    "titleKo": "인사 문화",
    "titleJp": "挨拶文化",
    "level": "N5",
    "category": "문화비교",
    "activity": "발표",
    "style": "정중체",
    "duration": 21,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "한국에서는 보통 어떻게 인사하나요?",
        "jp": "韓国では普段どのように挨拶しますか？"
      },
      {
        "ko": "일본의 인사법인 '오지기'에 대해 알고 있나요?",
        "jp": "日本の挨拶である「お辞儀」について知っていますか？"
      },
      {
        "ko": "상황에 따라 인사하는 방법이 달라지나요?",
        "jp": "状況によって挨拶の方法が変わりますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "인사 방식이 그 나라의 사회적 계층이나 인간관계를 어떻게 보여준다고 생각하나요?",
        "jp": "挨拶の方式がその国の社会的階層や人間関係をどのように示していると思いますか？"
      },
      {
        "ko": "글로벌 시대에 만국 공통의 인사법이 필요할까요?",
        "jp": "グローバル時代に万国共通の挨拶法が必要でしょうか？"
      },
      {
        "ko": "비대면 사회에서 인사의 의미는 어떻게 변화하고 있을까요?",
        "jp": "非対面社会において挨拶の意味はどのように変化しているでしょうか？"
      }
    ],
    "roleplay": {
      "situation": "일본 회사에 갓 입사한 신입사원이 상사에게 인사하는 상황",
      "roleA": "신입사원 (일본의 비즈니스 인사법을 시도함)",
      "roleB": "상사 (인사법을 교정해주고 조언함)"
    },
    "expressions": [
      {
        "word": "고개를 숙이다",
        "reading": "あたまを さげる",
        "meaning": "고개를 숙이다",
        "example": "日本では挨拶をする時、頭を下げます。",
        "translation": "일본에서는 인사할 때 고개를 숙입니다."
      },
      {
        "word": "악수",
        "reading": "あくしゅ",
        "meaning": "악수",
        "example": "ビジネスの場では握手をすることもあります。",
        "translation": "비즈니스 자리에서는 악수를 하기도 합니다."
      },
      {
        "word": "각도",
        "reading": "かくど",
        "meaning": "각도",
        "example": "お辞儀の角度によって意味が異なります。",
        "translation": "인사의 각도에 따라 의미가 다릅니다."
      },
      {
        "word": "눈을 마주치다",
        "reading": "めを あわせる",
        "meaning": "눈을 마주치다",
        "example": "挨拶の前に相手と目を合わせることが大切です。",
        "translation": "인사 전에 상대방과 눈을 마주치는 것이 중요합니다."
      },
      {
        "word": "예의 바르다",
        "reading": "れいぎ ただしい",
        "meaning": "예의 바르다",
        "example": "彼はとても礼儀正しい人です。",
        "translation": "그는 매우 예의 바른 사람입니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본에서는 인사할 때 허리를 굽히는 각도가 중요하다고 들었어요.",
        "translation": "日本では挨拶をする時、腰を曲げる角度が重要だと聞きました。"
      },
      {
        "speaker": "B",
        "text": "네, 맞아요. 가벼운 인사는 15도, 보통 인사는 30도, 정중한 인사는 45도 정도예요.",
        "translation": "はい、そうです。軽い挨拶は15度、普通の挨拶は30度、丁寧な挨拶は45度くらいです。"
      },
      {
        "speaker": "A",
        "text": "한국도 고개를 숙여 인사하지만, 각도를 그렇게 세밀하게 나누지는 않아요.",
        "translation": "韓国も頭を下げて挨拶しますが、角度をそこまで細かく分けたりはしません。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국에서는 어른에게 인사할 때 특별한 예절이 있나요?",
        "translation": "そうなんですね。韓国では大人に挨拶する時、特別なマナーがありますか？"
      },
      {
        "speaker": "A",
        "text": "네, 두 손을 모으고 허리를 굽혀 정중하게 인사하는 것이 일반적이에요.",
        "translation": "はい、両手を揃えて腰を曲げ、丁寧に挨拶するのが一般的です。"
      },
      {
        "speaker": "B",
        "text": "나라마다 인사하는 방법이 달라서 흥미롭네요.",
        "translation": "国によって挨拶の方法が違って興味深いですね。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~によって",
        "function": "~에 따라",
        "example": "お辞儀の角度によって意味が異なります。",
        "translation": "인사의 각도에 따라 의미가 다릅니다."
      },
      {
        "pattern": "~くらい",
        "function": "~정도",
        "example": "丁寧な挨拶は45度くらいです。",
        "translation": "정중한 인사는 45도 정도입니다."
      },
      {
        "pattern": "~たりはしない",
        "function": "~하거나 하지는 않다",
        "example": "角度をそこまで細かく分けたりはしません。",
        "translation": "각도를 그렇게 세밀하게 나누거나 하지는 않습니다."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 인사 문화 차이점에 대해 설명하고, 자신이 겪었던 실수나 에피소드가 있다면 적어보세요.",
      "promptJp": "韓国と日本の挨拶文化の違いについて説明し、自分が経験した失敗やエピソードがあれば書いてみましょう。",
      "minChars": 150,
      "hint": "비즈니스 상황이나 일상 생활에서의 차이를 비교해 보세요."
    },
    "teacherNote": "일본의 오지기(お辞儀) 종류(에샤쿠, 케이레이, 사이케이레이)에 대해 간단히 설명해주면 좋습니다.",
    "tags": [
      "인사",
      "문화",
      "예절"
    ]
  },
  {
    "id": "culture-time-concept",
    "titleKo": "시간 관념",
    "titleJp": "時間観念",
    "level": "N3",
    "category": "문화비교",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 29,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "약속 시간에 보통 몇 분 전에 도착하나요?",
        "jp": "待ち合わせの時間には普通何分前に到着しますか？"
      },
      {
        "ko": "친구가 약속 시간에 늦으면 얼마나 기다릴 수 있나요?",
        "jp": "友達が待ち合わせに遅れたら、どのくらい待てますか？"
      },
      {
        "ko": "한국의 '코리안 타임'에 대해 들어본 적이 있나요?",
        "jp": "韓国の「コリアンタイム」について聞いたことがありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "시간을 엄수하는 것이 인간관계에서 얼마나 중요하다고 생각하나요?",
        "jp": "時間を厳守することが人間関係においてどのくらい重要だと思いますか？"
      },
      {
        "ko": "현대 사회에서 사람들이 시간에 쫓기며 사는 이유는 무엇일까요?",
        "jp": "現代社会で人々が時間に追われて生きている理由は何でしょうか？"
      },
      {
        "ko": "시간 관념이 느슨한 문화와 엄격한 문화 중 어느 쪽이 더 살기 좋다고 생각하나요?",
        "jp": "時間観念が緩い文化と厳しい文化、どちらがより住みやすいと思いますか？"
      }
    ],
    "roleplay": {
      "situation": "약속 시간에 15분 늦은 한국인 친구와 정시에 도착해 기다린 일본인 친구의 대화",
      "roleA": "한국인 (교통 체증 때문에 늦었다고 사과함)",
      "roleB": "일본인 (조금 화가 났지만 이해하려고 노력함)"
    },
    "expressions": [
      {
        "word": "시간을 지키다",
        "reading": "じかんを まもる",
        "meaning": "시간을 지키다",
        "example": "日本では時間を守ることが非常に重要です。",
        "translation": "일본에서는 시간을 지키는 것이 매우 중요합니다."
      },
      {
        "word": "지각하다",
        "reading": "ちこくする",
        "meaning": "지각하다",
        "example": "5分でも遅刻する場合は必ず連絡します。",
        "translation": "5분이라도 지각할 경우에는 반드시 연락합니다."
      },
      {
        "word": "여유",
        "reading": "よゆう",
        "meaning": "여유",
        "example": "時間に余裕を持って行動しましょう。",
        "translation": "시간에 여유를 가지고 행동합시다."
      },
      {
        "word": "정각",
        "reading": "ていこく",
        "meaning": "정각",
        "example": "電車は定刻通りに出発しました。",
        "translation": "전철은 정각대로 출발했습니다."
      },
      {
        "word": "재촉하다",
        "reading": "せかす",
        "meaning": "재촉하다",
        "example": "人を急かしてはいけません。",
        "translation": "사람을 재촉해서는 안 됩니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본 사람들은 약속 시간 10분 전에는 도착해 있는 경우가 많더라고요.",
        "translation": "日本人は待ち合わせ時間の10分前には到着していることが多いですね。"
      },
      {
        "speaker": "B",
        "text": "네, '5분 전 행동'이라는 말이 있을 정도로 시간을 엄수하는 편이에요.",
        "translation": "はい、「5分前行動」という言葉があるくらい、時間を厳守する方です。"
      },
      {
        "speaker": "A",
        "text": "한국은 예전에는 조금 늦어도 이해해주는 분위기가 있었는데, 요즘은 많이 달라졌어요.",
        "translation": "韓国は昔は少し遅れても理解してくれる雰囲気がありましたが、最近はずいぶん変わりました。"
      },
      {
        "speaker": "B",
        "text": "비즈니스 상황에서는 한국도 시간을 철저히 지키지 않나요?",
        "translation": "ビジネスの状況では韓国も時間を徹底的に守るのではないですか？"
      },
      {
        "speaker": "A",
        "text": "맞아요. 특히 회사 업무와 관련된 약속은 절대 늦으면 안 되죠.",
        "translation": "その通りです。特に会社の業務に関連する約束は絶対に遅れてはいけません。"
      },
      {
        "speaker": "B",
        "text": "결국 어느 나라든 상대방의 시간을 존중하는 마음이 중요한 것 같아요.",
        "translation": "結局、どの国でも相手の時間を尊重する気持ちが重要だと思います。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~ことが多い",
        "function": "~하는 경우가 많다",
        "example": "10分前には到着していることが多いですね。",
        "translation": "10분 전에는 도착해 있는 경우가 많네요."
      },
      {
        "pattern": "~くらい",
        "function": "~할 정도로",
        "example": "「5分前行動」という言葉があるくらいです。",
        "translation": "'5분 전 행동'이라는 말이 있을 정도입니다."
      },
      {
        "pattern": "~てはいけない",
        "function": "~해서는 안 된다",
        "example": "絶対に遅れてはいけません。",
        "translation": "절대로 늦어서는 안 됩니다."
      }
    ],
    "writingMission": {
      "prompt": "자신의 시간 관리 습관에 대해 설명하고, 한국과 일본의 시간 관념 차이에 대한 자신의 생각을 적어보세요.",
      "promptJp": "自分の時間管理の習慣について説明し、韓国と日本の時間観念の違いに対する自分の考えを書いてみましょう。",
      "minChars": 150,
      "hint": "약속 시간에 늦었을 때의 대처 방법 등을 포함해 보세요."
    },
    "teacherNote": "일본의 '5분 전 행동(5分前行動)' 문화에 대해 소개하고, 비즈니스 매너와 연결하여 설명해 주세요.",
    "tags": [
      "시간",
      "문화",
      "개념"
    ]
  },
  {
    "id": "culture-collectivism-individualism",
    "titleKo": "집단주의 vs 개인주의",
    "titleJp": "集団主義vs個人主義",
    "level": "N4",
    "category": "문화비교",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 36,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "혼자 밥을 먹거나 영화를 보는 것을 좋아하나요?",
        "jp": "一人でご飯を食べたり映画を見たりするのが好きですか？"
      },
      {
        "ko": "조별 과제와 개인 과제 중 어느 쪽을 선호하나요?",
        "jp": "グループ課題と個人課題、どちらを好みますか？"
      },
      {
        "ko": "주변 사람들의 시선을 많이 의식하는 편인가요?",
        "jp": "周りの人の視線をよく意識する方ですか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "집단의 이익과 개인의 자유가 충돌할 때, 어느 쪽이 우선되어야 한다고 생각하나요?",
        "jp": "集団の利益と個人の自由が衝突した時、どちらが優先されるべきだと思いますか？"
      },
      {
        "ko": "한국의 '정(情)' 문화와 일본의 '메이와쿠(迷惑)' 문화는 각각 어떤 장단점이 있을까요?",
        "jp": "韓国の「情」文化と日本の「迷惑」文化には、それぞれどのような長所と短所があるでしょうか？"
      },
      {
        "ko": "젊은 세대로 갈수록 개인주의화되는 현상에 대해 어떻게 생각하나요?",
        "jp": "若い世代になるにつれて個人主義化する現象についてどう思いますか？"
      }
    ],
    "roleplay": {
      "situation": "회식 참석을 강요하는 상사와 개인 일정을 이유로 거절하려는 부하 직원의 대화",
      "roleA": "상사 (팀워크를 위해 회식 참석이 중요하다고 설득함)",
      "roleB": "부하 직원 (개인적인 약속이 있어 참석하기 어렵다고 정중히 거절함)"
    },
    "expressions": [
      {
        "word": "눈치를 보다",
        "reading": "まわりの めを きにする",
        "meaning": "눈치를 보다",
        "example": "韓国では周りの目を気にすることが多いです。",
        "translation": "한국에서는 주변의 눈치를 보는 경우가 많습니다."
      },
      {
        "word": "민폐를 끼치다",
        "reading": "めいわくを かける",
        "meaning": "민폐를 끼치다",
        "example": "日本では他人に迷惑をかけないように教えられます。",
        "translation": "일본에서는 타인에게 민폐를 끼치지 않도록 가르침을 받습니다."
      },
      {
        "word": "협동",
        "reading": "きょうちょう",
        "meaning": "협동",
        "example": "チームワークと協調性が求められます。",
        "translation": "팀워크와 협동성이 요구됩니다."
      },
      {
        "word": "개인의 취향",
        "reading": "こじんの このみ",
        "meaning": "개인의 취향",
        "example": "個人の好みを尊重する社会になってきました。",
        "translation": "개인의 취향을 존중하는 사회가 되었습니다."
      },
      {
        "word": "소속감",
        "reading": "しょぞくかん",
        "meaning": "소속감",
        "example": "集団に属することで所属感を得られます。",
        "translation": "집단에 속함으로써 소속감을 얻을 수 있습니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본은 개인주의 성향이 강하다고 들었는데, 실제로는 어떤가요?",
        "translation": "日本は個人主義の傾向が強いと聞きましたが、実際はどうですか？"
      },
      {
        "speaker": "B",
        "text": "개인의 사생활을 존중하지만, 조직 내에서는 집단의 조화를 매우 중요하게 생각해요.",
        "translation": "個人のプライバシーは尊重しますが、組織内では集団の調和をとても重要視します。"
      },
      {
        "speaker": "A",
        "text": "아, '와(和)'를 중시하는 문화군요. 한국은 '우리'라는 공동체 의식이 강한 편이에요.",
        "translation": "ああ、「和」を重んじる文化ですね。韓国は「私たち」という共同体意識が強い方です。"
      },
      {
        "speaker": "B",
        "text": "맞아요. 한국 드라마를 보면 가족이나 친구끼리 끈끈한 정이 느껴져서 부러울 때가 있어요.",
        "translation": "そうです。韓国ドラマを見ると、家族や友達同士の強い絆が感じられて羨ましい時があります。"
      },
      {
        "speaker": "A",
        "text": "하지만 가끔은 그 끈끈함 때문에 개인의 자유가 침해받는다고 느낄 때도 있어요.",
        "translation": "でも、たまにはその絆のせいで個人の自由が侵害されていると感じる時もあります。"
      },
      {
        "speaker": "B",
        "text": "어느 문화든 장단점이 있는 것 같네요. 균형을 맞추는 게 중요하겠죠.",
        "translation": "どの文化にも長所と短所があるようですね。バランスを取るのが重要でしょう。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~傾向が強い",
        "function": "~하는 경향이 강하다",
        "example": "日本は個人主義の傾向が強いと聞きました。",
        "translation": "일본은 개인주의 성향이 강하다고 들었습니다."
      },
      {
        "pattern": "~を重んじる",
        "function": "~을 중시하다",
        "example": "「和」を重んじる文化ですね。",
        "translation": "'와(조화)'를 중시하는 문화군요."
      },
      {
        "pattern": "~せいで",
        "function": "~탓에, ~때문에 (부정적 원인)",
        "example": "その絆のせいで個人の自由が侵害されていると感じます。",
        "translation": "그 유대감 때문에 개인의 자유가 침해받고 있다고 느낍니다."
      }
    ],
    "writingMission": {
      "prompt": "한국의 '정(情)' 문화와 일본의 '메이와쿠(迷惑)' 문화 중 자신이 더 공감하는 쪽을 선택하고 그 이유를 서술하세요.",
      "promptJp": "韓国の「情」文化と日本の「迷惑」文化のうち、自分がより共感する方を選び、その理由を述べてください。",
      "minChars": 150,
      "hint": "자신의 경험이나 사회적 현상을 예로 들어 설명해 보세요."
    },
    "teacherNote": "단순히 '한국=집단주의, 일본=개인주의'라는 이분법적 사고를 넘어, 각 문화의 복합적인 면을 토론할 수 있도록 이끌어 주세요.",
    "tags": [
      "사회",
      "문화",
      "가치관"
    ]
  },
  {
    "id": "culture-holiday-culture",
    "titleKo": "명절 문화",
    "titleJp": "祝日文化",
    "level": "N4",
    "category": "문화비교",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 24,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "한국의 가장 큰 명절은 무엇인가요?",
        "jp": "韓国の最も大きな祝日は何ですか？"
      },
      {
        "ko": "명절에는 주로 가족들과 무엇을 하며 보내나요?",
        "jp": "祝日には主に家族と何をして過ごしますか？"
      },
      {
        "ko": "일본의 '오본'이나 '오쇼가츠'에 대해 들어본 적이 있나요?",
        "jp": "日本の「お盆」や「お正月」について聞いたことがありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "현대 사회에서 전통 명절의 의미가 어떻게 퇴색되고 있다고 생각하나요?",
        "jp": "現代社会において伝統的な祝日の意味がどのように薄れていると思いますか？"
      },
      {
        "ko": "명절 스트레스(명절 증후군)의 원인은 무엇이며, 어떻게 해결할 수 있을까요?",
        "jp": "祝日ストレス（名節症候群）の原因は何であり、どのように解決できるでしょうか？"
      },
      {
        "ko": "미래의 명절 문화는 어떤 모습으로 변화할 것이라고 예상하나요?",
        "jp": "未来の祝日文化はどのような姿に変化すると予想しますか？"
      }
    ],
    "roleplay": {
      "situation": "명절 연휴 계획에 대해 이야기하는 직장 동료",
      "roleA": "한국인 (고향에 내려가 제사를 지내고 친척들을 만날 예정임)",
      "roleB": "일본인 (연휴를 이용해 해외 여행을 갈 예정임)"
    },
    "expressions": [
      {
        "word": "귀성길",
        "reading": "きせいラッシュ",
        "meaning": "귀성길 (혼잡)",
        "example": "お盆の時期は帰省ラッシュで道が混みます。",
        "translation": "오본 시기에는 귀성길 정체로 길이 막힙니다."
      },
      {
        "word": "성묘",
        "reading": "おはかまいり",
        "meaning": "성묘",
        "example": "お正月には家族でお墓参りに行きます。",
        "translation": "설날에는 가족과 함께 성묘를 갑니다."
      },
      {
        "word": "세뱃돈",
        "reading": "おとしだま",
        "meaning": "세뱃돈",
        "example": "子供たちは親戚からお年玉をもらいます。",
        "translation": "아이들은 친척들로부터 세뱃돈을 받습니다."
      },
      {
        "word": "제사",
        "reading": "さいし",
        "meaning": "제사",
        "example": "韓国では名節に先祖の祭祀を行います。",
        "translation": "한국에서는 명절에 조상의 제사를 지냅니다."
      },
      {
        "word": "연휴",
        "reading": "れんきゅう",
        "meaning": "연휴",
        "example": "ゴールデンウィークは大型連休です。",
        "translation": "골든위크는 대형 연휴입니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "다음 주가 추석이네요. 일본에도 추석과 비슷한 명절이 있나요?",
        "translation": "来週がチュソク（秋夕）ですね。日本にもチュソクと似た祝日がありますか？"
      },
      {
        "speaker": "B",
        "text": "네, 8월 중순에 '오본'이라는 명절이 있어요. 조상의 영혼을 기리는 기간이죠.",
        "translation": "はい、8月中旬に「お盆」という行事があります。先祖の霊を供養する期間です。"
      },
      {
        "speaker": "A",
        "text": "한국의 추석과 비슷하네요. 오본에는 주로 무엇을 하나요?",
        "translation": "韓国のチュソクと似ていますね。お盆には主に何をしますか？"
      },
      {
        "speaker": "B",
        "text": "고향에 돌아가서 성묘를 하고, 가족들과 함께 시간을 보내요.",
        "translation": "故郷に帰ってお墓参りをし、家族と一緒に時間を過ごします。"
      },
      {
        "speaker": "A",
        "text": "한국도 마찬가지예요. 하지만 요즘은 명절에 여행을 가는 사람들도 많아졌어요.",
        "translation": "韓国も同じです。でも最近は祝日に旅行に行く人も多くなりました。"
      },
      {
        "speaker": "B",
        "text": "일본도 그래요. 긴 연휴를 이용해서 해외여행을 가는 사람들이 많죠.",
        "translation": "日本もそうです。長い連休を利用して海外旅行に行く人が多いですよ。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~に似ている",
        "function": "~와 비슷하다",
        "example": "日本にもチュソクと似た祝日がありますか？",
        "translation": "일본에도 추석과 비슷한 명절이 있나요?"
      },
      {
        "pattern": "~を利用して",
        "function": "~을 이용하여",
        "example": "長い連休を利用して海外旅行に行きます。",
        "translation": "긴 연휴를 이용하여 해외여행을 갑니다."
      },
      {
        "pattern": "~人も多くなった",
        "function": "~하는 사람도 많아졌다",
        "example": "祝日に旅行に行く人も多くなりました。",
        "translation": "명절에 여행을 가는 사람도 많아졌습니다."
      }
    ],
    "writingMission": {
      "prompt": "자신이 가장 좋아하는 명절과 그 이유, 그리고 명절을 보내는 방식에 대해 적어보세요.",
      "promptJp": "自分が一番好きな祝日とその理由、そして祝日の過ごし方について書いてみましょう。",
      "minChars": 150,
      "hint": "어릴 적 추억이나 최근의 변화된 명절 풍경을 포함해도 좋습니다."
    },
    "teacherNote": "한국의 설날/추석과 일본의 오쇼가츠/오본의 시기적, 의미적 차이를 비교 설명해 주세요.",
    "tags": [
      "명절",
      "문화",
      "가족"
    ]
  },
  {
    "id": "culture-marriage-culture",
    "titleKo": "결혼 문화",
    "titleJp": "結婚文化",
    "level": "N4",
    "category": "문화비교",
    "activity": "작문",
    "style": "캐주얼",
    "duration": 37,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "결혼 문화에 대해 어떻게 생각하시나요?",
        "jp": "結婚文化についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "결혼 문화의 역사적 배경은 무엇일까요?",
        "jp": "結婚文化の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "결혼 문화에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 결혼 문화는 한국과 많이 다르네요.",
        "translation": "日本の結婚文化は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 결혼 문화 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の結婚文化の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "결혼 문화와 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "결혼",
      "문화",
      "가족"
    ]
  },
  {
    "id": "culture-education-style",
    "titleKo": "교육 방식",
    "titleJp": "教育方式",
    "level": "N5",
    "category": "문화비교",
    "activity": "페어대화",
    "style": "비즈니스",
    "duration": 26,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "교육 방식에 대해 어떻게 생각하시나요?",
        "jp": "教育方式についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "교육 방식의 역사적 배경은 무엇일까요?",
        "jp": "教育方式の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "교육 방식에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 교육 방식은 한국과 많이 다르네요.",
        "translation": "日本の教育方式は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 교육 방식 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の教育方式の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "교육 방식과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "교육",
      "문화",
      "학습"
    ]
  },
  {
    "id": "culture-drinking-culture",
    "titleKo": "음주 문화",
    "titleJp": "飲酒文化",
    "level": "N3",
    "category": "문화비교",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "음주 문화에 대해 어떻게 생각하시나요?",
        "jp": "飲酒文化についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "음주 문화의 역사적 배경은 무엇일까요?",
        "jp": "飲酒文化の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "음주 문화에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 음주 문화는 한국과 많이 다르네요.",
        "translation": "日本の飲酒文化は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 음주 문화 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の飲酒文化の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "음주 문화와 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "음주",
      "문화",
      "예절"
    ]
  },
  {
    "id": "culture-fashion-sense",
    "titleKo": "패션 감각",
    "titleJp": "ファッションセンス",
    "level": "N3",
    "category": "문화비교",
    "activity": "작문",
    "style": "정중체",
    "duration": 32,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "패션 감각에 대해 어떻게 생각하시나요?",
        "jp": "ファッションセンスについてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "패션 감각의 역사적 배경은 무엇일까요?",
        "jp": "ファッションセンスの歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "패션 감각에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 패션 감각은 한국과 많이 다르네요.",
        "translation": "日本のファッションセンスは韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 패션 감각 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本のファッションセンスの違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "패션 감각과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "패션",
      "문화",
      "스타일"
    ]
  },
  {
    "id": "culture-language-expression",
    "titleKo": "언어 표현 차이",
    "titleJp": "言語表現の違い",
    "level": "N2",
    "category": "문화비교",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 28,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "언어 표현 차이에 대해 어떻게 생각하시나요?",
        "jp": "言語表現の違いについてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "언어 표현 차이의 역사적 배경은 무엇일까요?",
        "jp": "言語表現の違いの歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "언어 표현 차이에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 언어 표현 차이는 한국과 많이 다르네요.",
        "translation": "日本の言語表現の違いは韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 언어 표현 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の言語表現の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "언어 표현 차이와 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "언어",
      "문화",
      "소통"
    ]
  },
  {
    "id": "culture-religious-views",
    "titleKo": "종교관",
    "titleJp": "宗教観",
    "level": "N3",
    "category": "문화비교",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 39,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "종교관에 대해 어떻게 생각하시나요?",
        "jp": "宗教観についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "종교관의 역사적 배경은 무엇일까요?",
        "jp": "宗教観の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "종교관에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 종교관은 한국과 많이 다르네요.",
        "translation": "日本の宗教観は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 종교관 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の宗教観の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "종교관과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "종교",
      "문화",
      "가치관"
    ]
  },
  {
    "id": "culture-environmental-awareness",
    "titleKo": "환경 의식",
    "titleJp": "環境意識",
    "level": "N3",
    "category": "문화비교",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 33,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "환경 의식에 대해 어떻게 생각하시나요?",
        "jp": "環境意識についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "환경 의식의 역사적 배경은 무엇일까요?",
        "jp": "環境意識の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "환경 의식에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 환경 의식은 한국과 많이 다르네요.",
        "translation": "日本の環境意識は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 환경 의식 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の環境意識の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "환경 의식과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "환경",
      "문화",
      "사회"
    ]
  },
  {
    "id": "culture-sports-culture",
    "titleKo": "스포츠 문화",
    "titleJp": "スポーツ文化",
    "level": "N4",
    "category": "문화비교",
    "activity": "발표",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "스포츠 문화에 대해 어떻게 생각하시나요?",
        "jp": "スポーツ文化についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "스포츠 문화의 역사적 배경은 무엇일까요?",
        "jp": "スポーツ文化の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "스포츠 문화에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 스포츠 문화는 한국과 많이 다르네요.",
        "translation": "日本のスポーツ文化は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 스포츠 문화 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本のスポーツ文化の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "스포츠 문화와 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "스포츠",
      "문화",
      "여가"
    ]
  },
  {
    "id": "culture-music-taste",
    "titleKo": "음악 취향",
    "titleJp": "音楽の好み",
    "level": "N3",
    "category": "문화비교",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "음악 취향에 대해 어떻게 생각하시나요?",
        "jp": "音楽の好みについてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "음악 취향의 역사적 배경은 무엇일까요?",
        "jp": "音楽の好みの歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "음악 취향에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 음악 취향은 한국과 많이 다르네요.",
        "translation": "日本の音楽の好みは韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 음악 취향 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の音楽の好みの違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "음악 취향과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "음악",
      "문화",
      "취미"
    ]
  },
  {
    "id": "culture-reading-habits",
    "titleKo": "독서 습관",
    "titleJp": "読書習慣",
    "level": "N4",
    "category": "문화비교",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 22,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "독서 습관에 대해 어떻게 생각하시나요?",
        "jp": "読書習慣についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "독서 습관의 역사적 배경은 무엇일까요?",
        "jp": "読書習慣の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "독서 습관에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 독서 습관은 한국과 많이 다르네요.",
        "translation": "日本の読書習慣は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 독서 습관 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の読書習慣の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "독서 습관과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "독서",
      "문화",
      "습관"
    ]
  },
  {
    "id": "culture-travel-style",
    "titleKo": "여행 스타일",
    "titleJp": "旅行スタイル",
    "level": "N3",
    "category": "문화비교",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "여행 스타일은 한국과 일본의 차이점은 무엇일까요?",
        "jp": "旅行スタイルは韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      },
      {
        "ko": "어떤 여행 스타일을 선호하시나요?",
        "jp": "どんな旅行スタイルを好みますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "여행 스타일의 역사적 배경은 무엇일까요?",
        "jp": "旅行スタイルの歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "여행 스타일에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 여행 스타일은 한국과 많이 다르네요.",
        "translation": "日本の旅行スタイルは韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 여행 스타일 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の旅行スタイルの違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "여행 스타일과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "여행",
      "문화",
      "취미"
    ]
  },
  {
    "id": "culture-shopping-habits",
    "titleKo": "쇼핑 습관",
    "titleJp": "買い物習慣",
    "level": "N4",
    "category": "문화비교",
    "activity": "발표",
    "style": "정중체",
    "duration": 27,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "쇼핑 습관에 대해 어떻게 생각하시나요?",
        "jp": "買い物習慣についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "쇼핑 습관의 역사적 배경은 무엇일까요?",
        "jp": "買い物習慣の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "쇼핑 습관에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 쇼핑 습관은 한국과 많이 다르네요.",
        "translation": "日本の買い物習慣は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 쇼핑 습관 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の買い物習慣の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "쇼핑 습관과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "쇼핑",
      "문화",
      "소비"
    ]
  },
  {
    "id": "culture-pet-culture",
    "titleKo": "반려동물 문화",
    "titleJp": "ペット文化",
    "level": "N5",
    "category": "문화비교",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 35,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "반려동물 문화에 대해 어떻게 생각하시나요?",
        "jp": "ペット文化についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "반려동물 문화의 역사적 배경은 무엇일까요?",
        "jp": "ペット文化の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "반려동물 문화에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 반려동물 문화는 한국과 많이 다르네요.",
        "translation": "日本のペット文化は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 반려동물 문화 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本のペット文化の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "반려동물 문화와 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "반려동물",
      "문화",
      "가족"
    ]
  },
  {
    "id": "culture-workplace-culture",
    "titleKo": "직장 문화",
    "titleJp": "職場文化",
    "level": "N2",
    "category": "문화비교",
    "activity": "작문",
    "style": "비즈니스",
    "duration": 31,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "직장 문화에 대해 어떻게 생각하시나요?",
        "jp": "職場文化についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "직장 문화의 역사적 배경은 무엇일까요?",
        "jp": "職場文化の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "직장 문화에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 직장 문화는 한국과 많이 다르네요.",
        "translation": "日本の職場文化は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 직장 문화 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の職場文化の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "직장 문화와 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "직장",
      "문화",
      "사회"
    ]
  },
  {
    "id": "culture-dating-views",
    "titleKo": "연애관",
    "titleJp": "恋愛観",
    "level": "N3",
    "category": "문화비교",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 38,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "연애관에 대해 어떻게 생각하시나요?",
        "jp": "恋愛観についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "연애관의 역사적 배경은 무엇일까요?",
        "jp": "恋愛観の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "연애관에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 연애관은 한국과 많이 다르네요.",
        "translation": "日本の恋愛観は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 연애관 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の恋愛観の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "연애관과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "연애",
      "문화",
      "관계"
    ]
  },
  {
    "id": "culture-dining-etiquette",
    "titleKo": "식사 예절",
    "titleJp": "食事マナー",
    "level": "N4",
    "category": "문화비교",
    "activity": "롤플레이",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "식사 예절에 대해 어떻게 생각하시나요?",
        "jp": "食事マナーについてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "식사 예절의 역사적 배경은 무엇일까요?",
        "jp": "食事マナーの歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "식사 예절에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 식사 예절은 한국과 많이 다르네요.",
        "translation": "日本の食事マナーは韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 식사 예절 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の食事マナーの違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "식사 예절과 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "식사",
      "문화",
      "예절"
    ]
  },
  {
    "id": "culture-housing-culture",
    "titleKo": "주거 문화",
    "titleJp": "住居文化",
    "level": "N1",
    "category": "문화비교",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 21,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "주거 문화에 대해 어떻게 생각하시나요?",
        "jp": "住居文化についてどう思いますか？"
      },
      {
        "ko": "한국과 일본의 차이점은 무엇일까요?",
        "jp": "韓国と日本の違いは何でしょうか？"
      },
      {
        "ko": "개인적인 경험이 있나요?",
        "jp": "個人的な経験はありますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "주거 문화의 역사적 배경은 무엇일까요?",
        "jp": "住居文化の歴史的背景は何でしょうか？"
      },
      {
        "ko": "앞으로 어떻게 변화할 것이라고 생각하나요?",
        "jp": "今後どのように変化すると思いますか？"
      },
      {
        "ko": "다른 나라와 비교하면 어떤 특징이 있나요?",
        "jp": "他の国と比較するとどんな特徴がありますか？"
      }
    ],
    "roleplay": {
      "situation": "주거 문화에 대해 토론하는 상황",
      "roleA": "한국인 유학생",
      "roleB": "일본인 대학생"
    },
    "expressions": [
      {
        "word": "문화",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "文化の違いを理解する。",
        "translation": "문화의 차이를 이해하다."
      },
      {
        "word": "차이",
        "reading": "ちがい",
        "meaning": "차이",
        "example": "大きな違いがあります。",
        "translation": "큰 차이가 있습니다."
      },
      {
        "word": "특징",
        "reading": "とくちょう",
        "meaning": "특징",
        "example": "それぞれの特徴を比べる。",
        "translation": "각각의 특징을 비교하다."
      },
      {
        "word": "경험",
        "reading": "けいけん",
        "meaning": "경험",
        "example": "良い経験になりました。",
        "translation": "좋은 경험이 되었습니다."
      },
      {
        "word": "이해",
        "reading": "りかい",
        "meaning": "이해",
        "example": "お互いを理解することが大切です。",
        "translation": "서로를 이해하는 것이 중요합니다."
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "일본의 주거 문화는 한국과 많이 다르네요.",
        "translation": "日本の住居文化は韓国とだいぶ違いますね。"
      },
      {
        "speaker": "B",
        "text": "네, 어떤 점이 가장 다르게 느껴지나요?",
        "translation": "はい、どんなところが一番違うと感じますか？"
      },
      {
        "speaker": "A",
        "text": "여러 가지가 있지만, 특히 분위기가 다른 것 같아요.",
        "translation": "色々とありますが、特に雰囲気が違う気がします。"
      },
      {
        "speaker": "B",
        "text": "그렇군요. 한국은 어떤 분위기인가요?",
        "translation": "そうなんですね。韓国はどんな雰囲気ですか？"
      },
      {
        "speaker": "A",
        "text": "한국은 조금 더 활기찬 느낌이에요.",
        "translation": "韓国はもう少し活気がある感じです。"
      },
      {
        "speaker": "B",
        "text": "재미있네요. 더 자세히 이야기해 주세요.",
        "translation": "面白いですね。もっと詳しく話してください。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "~と違う",
        "function": "~와 다르다",
        "example": "韓国とだいぶ違いますね。",
        "translation": "한국과 많이 다르네요."
      },
      {
        "pattern": "~気がする",
        "function": "~하는 느낌이 들다",
        "example": "雰囲気が違う気がします。",
        "translation": "분위기가 다른 느낌이 듭니다."
      },
      {
        "pattern": "~て下さい",
        "function": "~해 주세요",
        "example": "もっと詳しく話してください。",
        "translation": "더 자세히 이야기해 주세요."
      }
    ],
    "writingMission": {
      "prompt": "한국과 일본의 주거 문화 차이에 대해 자신의 생각을 서술하세요.",
      "promptJp": "韓国と日本の住居文化の違いについて自分の考えを述べてください。",
      "minChars": 150,
      "hint": "구체적인 예시를 들어 설명하면 좋습니다."
    },
    "teacherNote": "주거 문화와 관련된 양국의 문화적 배경을 설명해 주세요.",
    "tags": [
      "주거",
      "문화",
      "생활"
    ]
  },
  {
    "id": "trend-subscription-economy",
    "titleKo": "구독 경제의 성장",
    "titleJp": "サブスクリプション経済の成長",
    "level": "N5",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 36,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "구독 경제의 성장에 대해 어떻게 생각하세요?",
        "jp": "サブスクリプション経済の成長についてどう思いますか？"
      },
      {
        "ko": "최근 구독 경제의 성장과 관련된 경험이 있나요?",
        "jp": "最近、サブスクリプション経済の成長に関連する経験がありますか？"
      },
      {
        "ko": "구독 경제의 성장이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "サブスクリプション経済の成長があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "구독 경제의 성장의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "サブスクリプション経済の成長の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "구독 경제의 성장이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "サブスクリプション経済の成長が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "구독 경제의 성장과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "サブスクリプション経済の成長に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "구독 경제의 성장에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "인싸템",
        "reading": "インサテム",
        "meaning": "인사이더 아이템",
        "example": "그 신발은 요즘 인싸템이에요.",
        "example_jp": "その靴は最近のインサテムです。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 구독 경제의 성장이(가) 정말 핫하죠?",
        "translation": "最近、サブスクリプション経済の成長が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 구독 경제의 성장의 편리함이 좋아요.",
        "translation": "私はサブスクリプション経済の成長の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 구독 경제의 성장이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからサブスクリプション経済の成長がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "サブスクリプション経済の成長について話しましょう。",
        "translation": "구독 경제의 성장에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 구독 경제의 성장 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるサブスクリプション経済の成長トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "구독 경제의 성장 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "NFT",
      "코인투자",
      "캠핑"
    ]
  },
  {
    "id": "trend-metaverse-future",
    "titleKo": "메타버스의 미래",
    "titleJp": "メタバースの未来",
    "level": "N5",
    "category": "트렌드",
    "activity": "페어대화",
    "style": "비즈니스",
    "duration": 37,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "메타버스의 미래에 대해 어떻게 생각하세요?",
        "jp": "メタバースの未来についてどう思いますか？"
      },
      {
        "ko": "최근 메타버스의 미래과 관련된 경험이 있나요?",
        "jp": "最近、メタバースの未来に関連する経験がありますか？"
      },
      {
        "ko": "메타버스의 미래이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "メタバースの未来があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "메타버스의 미래의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "メタバースの未来の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "메타버스의 미래이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "メタバースの未来が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "메타버스의 미래과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "メタバースの未来に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "메타버스의 미래에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "인싸템",
        "reading": "インサテム",
        "meaning": "인사이더 아이템",
        "example": "그 신발은 요즘 인싸템이에요.",
        "example_jp": "その靴は最近のインサテムです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 메타버스의 미래이(가) 정말 핫하죠?",
        "translation": "最近、メタバースの未来が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 메타버스의 미래의 편리함이 좋아요.",
        "translation": "私はメタバースの未来の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 메타버스의 미래이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからメタバースの未来がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜が人気です",
        "function": "〜가 인기입니다",
        "example": "ショートフォームコンテンツが人気です。",
        "translation": "숏폼 콘텐츠가 인기입니다."
      },
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "メタバースの未来について話しましょう。",
        "translation": "메타버스의 미래에 대해 이야기합시다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 메타버스의 미래 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるメタバースの未来トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "메타버스의 미래 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "메타버스",
      "미니멀라이프",
      "유튜브"
    ]
  },
  {
    "id": "trend-hometraining",
    "titleKo": "홈트레이닝의 확산",
    "titleJp": "ホームトレーニングの普及",
    "level": "N5",
    "category": "트렌드",
    "activity": "작문",
    "style": "캐주얼",
    "duration": 33,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "홈트레이닝의 확산에 대해 어떻게 생각하세요?",
        "jp": "ホームトレーニングの普及についてどう思いますか？"
      },
      {
        "ko": "최근 홈트레이닝의 확산과 관련된 경험이 있나요?",
        "jp": "最近、ホームトレーニングの普及に関連する経験がありますか？"
      },
      {
        "ko": "홈트레이닝의 확산이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "ホームトレーニングの普及があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "홈트레이닝의 확산의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "ホームトレーニングの普及の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "홈트레이닝의 확산이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "ホームトレーニングの普及が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "홈트레이닝의 확산과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "ホームトレーニングの普及に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "홈트레이닝의 확산에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 홈트레이닝의 확산이(가) 정말 핫하죠?",
        "translation": "最近、ホームトレーニングの普及が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 홈트레이닝의 확산의 편리함이 좋아요.",
        "translation": "私はホームトレーニングの普及の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 홈트레이닝의 확산이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからホームトレーニングの普及がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "ホームトレーニングの普及について話しましょう。",
        "translation": "홈트레이닝의 확산에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 홈트레이닝의 확산 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるホームトレーニングの普及トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "홈트레이닝의 확산 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "메타버스",
      "홈트레이닝",
      "NFT"
    ]
  },
  {
    "id": "trend-digital-detox",
    "titleKo": "디지털 디톡스",
    "titleJp": "デジタルデトックス",
    "level": "N5",
    "category": "트렌드",
    "activity": "발표",
    "style": "정중체",
    "duration": 28,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "디지털 디톡스에 대해 어떻게 생각하세요?",
        "jp": "デジタルデトックスについてどう思いますか？"
      },
      {
        "ko": "최근 디지털 디톡스와 관련된 경험이 있나요?",
        "jp": "最近、デジタルデトックスに関連する経験がありますか？"
      },
      {
        "ko": "디지털 디톡스이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "デジタルデトックスがあなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "디지털 디톡스의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "デジタルデトックスの肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "디지털 디톡스이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "デジタルデトックスが未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "디지털 디톡스와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "デジタルデトックスに関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "디지털 디톡스에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      },
      {
        "word": "인싸템",
        "reading": "インサテム",
        "meaning": "인사이더 아이템",
        "example": "그 신발은 요즘 인싸템이에요.",
        "example_jp": "その靴は最近のインサテムです。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 디지털 디톡스이(가) 정말 핫하죠?",
        "translation": "最近、デジタルデトックスが本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 디지털 디톡스의 편리함이 좋아요.",
        "translation": "私はデジタルデトックスの便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 디지털 디톡스이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからデジタルデトックスがどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "デジタルデトックスについて話しましょう。",
        "translation": "디지털 디톡스에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 디지털 디톡스 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるデジタルデトックストレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "디지털 디톡스 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "메타버스",
      "디지털디톡스",
      "숏폼"
    ]
  },
  {
    "id": "trend-zero-waste",
    "titleKo": "제로 웨이스트 실천",
    "titleJp": "ゼロウェイスト実践",
    "level": "N4",
    "category": "트렌드",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 27,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "제로 웨이스트 실천에 대해 어떻게 생각하세요?",
        "jp": "ゼロウェイスト実践についてどう思いますか？"
      },
      {
        "ko": "최근 제로 웨이스트 실천과 관련된 경험이 있나요?",
        "jp": "最近、ゼロウェイスト実践に関連する経験がありますか？"
      },
      {
        "ko": "제로 웨이스트 실천이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "ゼロウェイスト実践があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "제로 웨이스트 실천의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "ゼロウェイスト実践の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "제로 웨이스트 실천이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "ゼロウェイスト実践が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "제로 웨이스트 실천과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "ゼロウェイスト実践に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "제로 웨이스트 실천에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 제로 웨이스트 실천이(가) 정말 핫하죠?",
        "translation": "最近、ゼロウェイスト実践が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 제로 웨이스트 실천의 편리함이 좋아요.",
        "translation": "私はゼロウェイスト実践の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 제로 웨이스트 실천이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからゼロウェイスト実践がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "ゼロウェイスト実践について話しましょう。",
        "translation": "제로 웨이스트 실천에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 제로 웨이스트 실천 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるゼロウェイスト実践トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "제로 웨이스트 실천 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "제로웨이스트",
      "메타버스",
      "홈트레이닝"
    ]
  },
  {
    "id": "trend-influencer-marketing",
    "titleKo": "인플루언서 마케팅",
    "titleJp": "インフルエンサーマーケティング",
    "level": "N4",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 20,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "인플루언서 마케팅에 대해 어떻게 생각하세요?",
        "jp": "インフルエンサーマーケティングについてどう思いますか？"
      },
      {
        "ko": "최근 인플루언서 마케팅과 관련된 경험이 있나요?",
        "jp": "最近、インフルエンサーマーケティングに関連する経験がありますか？"
      },
      {
        "ko": "인플루언서 마케팅이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "インフルエンサーマーケティングがあなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "인플루언서 마케팅의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "インフルエンサーマーケティングの肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "인플루언서 마케팅이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "インフルエンサーマーケティングが未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "인플루언서 마케팅과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "インフルエンサーマーケティングに関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "인플루언서 마케팅에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "인싸템",
        "reading": "インサテム",
        "meaning": "인사이더 아이템",
        "example": "그 신발은 요즘 인싸템이에요.",
        "example_jp": "その靴は最近のインサテムです。"
      },
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 인플루언서 마케팅이(가) 정말 핫하죠?",
        "translation": "最近、インフルエンサーマーケティングが本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 인플루언서 마케팅의 편리함이 좋아요.",
        "translation": "私はインフルエンサーマーケティングの便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 인플루언서 마케팅이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからインフルエンサーマーケティングがどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "インフルエンサーマーケティングについて話しましょう。",
        "translation": "인플루언서 마케팅에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 인플루언서 마케팅 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるインフルエンサーマーケティングトレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "인플루언서 마케팅 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "인플루언서",
      "유튜브",
      "SNS"
    ]
  },
  {
    "id": "trend-chatgpt-usage",
    "titleKo": "챗GPT 활용법",
    "titleJp": "ChatGPT活用法",
    "level": "N4",
    "category": "트렌드",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 35,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "챗GPT 활용법에 대해 어떻게 생각하세요?",
        "jp": "ChatGPT活用法についてどう思いますか？"
      },
      {
        "ko": "최근 챗GPT 활용법과 관련된 경험이 있나요?",
        "jp": "最近、ChatGPT活用法に関連する経験がありますか？"
      },
      {
        "ko": "챗GPT 활용법이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "ChatGPT活用法があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "챗GPT 활용법의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "ChatGPT活用法の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "챗GPT 활용법이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "ChatGPT活用法が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "챗GPT 활용법과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "ChatGPT活用法に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "챗GPT 활용법에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 챗GPT 활용법이(가) 정말 핫하죠?",
        "translation": "最近、ChatGPT活用法が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 챗GPT 활용법의 편리함이 좋아요.",
        "translation": "私はChatGPT活用法の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 챗GPT 활용법이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからChatGPT活用法がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "ChatGPT活用法について話しましょう。",
        "translation": "챗GPT 활용법에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 챗GPT 활용법 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるChatGPT活用法トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "챗GPT 활용법 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "챗GPT",
      "AI",
      "유튜브"
    ]
  },
  {
    "id": "trend-camping-charm",
    "titleKo": "캠핑의 매력",
    "titleJp": "キャンプの魅力",
    "level": "N4",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 24,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "캠핑의 매력에 대해 어떻게 생각하세요?",
        "jp": "キャンプの魅力についてどう思いますか？"
      },
      {
        "ko": "최근 캠핑의 매력과 관련된 경험이 있나요?",
        "jp": "最近、キャンプの魅力に関連する経験がありますか？"
      },
      {
        "ko": "캠핑의 매력이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "キャンプの魅力があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "캠핑의 매력의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "キャンプの魅力の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "캠핑의 매력이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "キャンプの魅力が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "캠핑의 매력과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "キャンプの魅力に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "캠핑의 매력에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 캠핑의 매력이(가) 정말 핫하죠?",
        "translation": "最近、キャンプの魅力が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 캠핑의 매력의 편리함이 좋아요.",
        "translation": "私はキャンプの魅力の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 캠핑의 매력이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからキャンプの魅力がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "キャンプの魅力について話しましょう。",
        "translation": "캠핑의 매력에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 캠핑의 매력 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるキャンプの魅力トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "캠핑의 매력 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "캠핑",
      "미니멀라이프",
      "제로웨이스트"
    ]
  },
  {
    "id": "imagine-desert-island",
    "titleKo": "무인도에 간다면?",
    "titleJp": "無人島に行くなら？",
    "level": "N5",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "무인도에 가져갈 세 가지는 무엇인가요?",
        "jp": "無人島に持っていく3つのものは何ですか。"
      },
      {
        "ko": "무인도에서 가장 먼저 무엇을 할 건가요?",
        "jp": "無人島で一番先に何をしますか。"
      },
      {
        "ko": "누구와 함께 가고 싶나요?",
        "jp": "誰と一緒に行きたいですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "무인도에서 혼자 살 수 있을까요?",
        "jp": "無人島で一人で生きられますか。"
      },
      {
        "ko": "스마트폰 없이 며칠이나 버틸 수 있나요?",
        "jp": "スマホなしで何日ぐらい我慢できますか。"
      },
      {
        "ko": "무인도 생활의 장점은 무엇일까요?",
        "jp": "無人島生活のいいところは何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "무인도에 표류한 두 사람",
      "roleA": "긍정적인 사람 (어떻게든 살아남자고 격려함)",
      "roleB": "부정적인 사람 (절망하며 포기하려 함)"
    },
    "expressions": [
      {
        "word": "無人島",
        "reading": "むじんとう",
        "meaning": "무인도",
        "example": "無人島で生活します。"
      },
      {
        "word": "持っていく",
        "reading": "もっていく",
        "meaning": "가져가다",
        "example": "水を持っていきます。"
      },
      {
        "word": "生きる",
        "reading": "いきる",
        "meaning": "살다, 생존하다",
        "example": "一人で生きます。"
      },
      {
        "word": "我慢する",
        "reading": "がまんする",
        "meaning": "참다",
        "example": "痛みを我慢します。"
      },
      {
        "word": "一緒",
        "reading": "いっしょ",
        "meaning": "함께",
        "example": "一緒に行きましょう。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "無人島に一つだけ持っていくなら、何がいい？",
        "translation": "무인도에 하나만 가져간다면 뭐가 좋아?"
      },
      {
        "speaker": "B",
        "text": "うーん、ナイフかな。料理もできるし。",
        "translation": "음, 칼일까. 요리도 할 수 있고."
      },
      {
        "speaker": "A",
        "text": "私はライターがいいな。火が大切だから。",
        "translation": "나는 라이터가 좋아. 불이 중요하니까."
      },
      {
        "speaker": "B",
        "text": "確かに。でも、食べ物はどうする？",
        "translation": "확실히. 하지만 음식은 어떡해?"
      },
      {
        "speaker": "A",
        "text": "海で魚を釣るよ！",
        "translation": "바다에서 물고기를 낚을 거야!"
      },
      {
        "speaker": "B",
        "text": "すごい自信だね。",
        "translation": "대단한 자신감이네."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜なら",
        "function": "가정/조건",
        "example": "日本に行くなら、春がいいです。",
        "translation": "일본에 간다면 봄이 좋습니다."
      },
      {
        "pattern": "〜かな",
        "function": "추측/의문",
        "example": "明日は雨かな。",
        "translation": "내일은 비가 올까."
      },
      {
        "pattern": "〜し",
        "function": "이유 나열",
        "example": "安いし、おいしいです。",
        "translation": "싸고, 맛있습니다."
      }
    ],
    "writingMission": {
      "prompt": "무인도에 가져갈 물건 3가지와 그 이유를 쓰세요.",
      "promptJp": "無人島に持っていくもの3つとその理由を書いてください。",
      "minChars": 100,
      "hint": "「一つ目は〜です」「二つ目は〜です」를 활용하세요."
    },
    "teacherNote": "N5 수준의 어휘로 생존에 필요한 물건들을 일본어로 말해보는 연습을 합니다.",
    "tags": [
      "무인도",
      "생존",
      "선택"
    ]
  },
  {
    "id": "imagine-superpower",
    "titleKo": "초능력을 가질 수 있다면?",
    "titleJp": "超能力を持てるなら？",
    "level": "N5",
    "category": "상상토론",
    "activity": "발표",
    "style": "정중체",
    "duration": 15,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "어떤 초능력을 갖고 싶나요?",
        "jp": "どんな超能力が欲しいですか。"
      },
      {
        "ko": "하늘을 나는 능력과 투명인간 중 어느 것이 좋나요?",
        "jp": "空を飛ぶ能力と透明人間、どちらがいいですか。"
      },
      {
        "ko": "초능력이 생기면 가장 먼저 무엇을 할 건가요?",
        "jp": "超能力ができたら、一番先に何をしますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "초능력을 나쁜 일에 쓰는 사람을 어떻게 막을까요?",
        "jp": "超能力を悪いことに使う人をどうやって止めますか。"
      },
      {
        "ko": "모든 사람이 초능력을 가지면 세상은 어떻게 될까요?",
        "jp": "みんなが超能力を持ったら、世界はどうなりますか。"
      },
      {
        "ko": "초능력을 숨기고 살아야 할까요?",
        "jp": "超能力を隠して生きるべきでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "초능력 학원에서 자신의 능력을 소개하는 상황",
      "roleA": "초능력자 (자신의 능력을 자랑함)",
      "roleB": "선생님 (능력의 활용법을 질문함)"
    },
    "expressions": [
      {
        "word": "超能力",
        "reading": "ちょうのうりょく",
        "meaning": "초능력",
        "example": "超能力が欲しいです。"
      },
      {
        "word": "空を飛ぶ",
        "reading": "そらをとぶ",
        "meaning": "하늘을 날다",
        "example": "鳥が空を飛びます。"
      },
      {
        "word": "透明人間",
        "reading": "とうめいにんげん",
        "meaning": "투명인간",
        "example": "透明人間になりたいです。"
      },
      {
        "word": "隠す",
        "reading": "かくす",
        "meaning": "숨기다",
        "example": "秘密を隠します。"
      },
      {
        "word": "悪い",
        "reading": "わるい",
        "meaning": "나쁘다",
        "example": "悪いことをしてはいけません。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "もし超能力が持てるなら、何がいいですか。",
        "translation": "만약 초능력을 가질 수 있다면 뭐가 좋나요?"
      },
      {
        "speaker": "B",
        "text": "私は空を飛ぶ能力が欲しいです。",
        "translation": "저는 하늘을 나는 능력을 갖고 싶어요."
      },
      {
        "speaker": "A",
        "text": "いいですね。どこへ行きたいですか。",
        "translation": "좋네요. 어디로 가고 싶나요?"
      },
      {
        "speaker": "B",
        "text": "飛行機に乗らないで、ハワイに行きたいです。",
        "translation": "비행기를 타지 않고 하와이에 가고 싶어요."
      },
      {
        "speaker": "A",
        "text": "便利ですね。私は動物と話す能力が欲しいです。",
        "translation": "편리하겠네요. 저는 동물과 이야기하는 능력을 갖고 싶어요."
      },
      {
        "speaker": "B",
        "text": "犬や猫と話せたら、楽しいでしょうね。",
        "translation": "개나 고양이와 이야기할 수 있다면 즐겁겠네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜が欲しい",
        "function": "원함",
        "example": "新しい車が欲しいです。",
        "translation": "새 차를 갖고 싶습니다."
      },
      {
        "pattern": "〜ないで",
        "function": "부대동작 (~하지 않고)",
        "example": "朝ごはんを食べないで、学校に行きました。",
        "translation": "아침을 먹지 않고 학교에 갔습니다."
      },
      {
        "pattern": "〜でしょう",
        "function": "추측/동의",
        "example": "明日は晴れるでしょう。",
        "translation": "내일은 맑겠죠."
      }
    ],
    "writingMission": {
      "prompt": "자신이 갖고 싶은 초능력과 그 이유를 적어보세요.",
      "promptJp": "自分が欲しい超能力とその理由を書いてみましょう。",
      "minChars": 100,
      "hint": "「私が欲しい超能力は〜です」로 시작해보세요."
    },
    "teacherNote": "N5 문법인 '~が欲しい'를 활용하여 자신의 소망을 표현하는 연습을 합니다.",
    "tags": [
      "초능력",
      "상상",
      "소망"
    ]
  },
  {
    "id": "imagine-robot-friend",
    "titleKo": "로봇 친구가 생긴다면?",
    "titleJp": "ロボットの友達ができたら？",
    "level": "N5",
    "category": "상상토론",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "로봇 친구에게 어떤 일을 부탁하고 싶나요?",
        "jp": "ロボットの友達にどんなことをお願いしたいですか。"
      },
      {
        "ko": "로봇 친구와 무엇을 함께 하고 싶나요?",
        "jp": "ロボットの友達と何を一緒にしたいですか。"
      },
      {
        "ko": "로봇 친구가 있다면 가장 좋은 점은 무엇일까요?",
        "jp": "ロボットの友達がいたら、一番いいところは何でしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "로봇 친구에게 감정이 있다면 어떨까요?",
        "jp": "ロボットの友達に感情があったらどうでしょうか。"
      },
      {
        "ko": "로봇 친구와 인간 친구 중 누가 더 소중할까요?",
        "jp": "ロボットの友達と人間の友達、どちらがもっと大切でしょうか。"
      },
      {
        "ko": "로봇 친구가 너무 똑똑해서 인간을 지배하려 한다면?",
        "jp": "ロボットの友達がとても賢くて、人間を支配しようとしたら？"
      }
    ],
    "roleplay": {
      "situation": "새로 생긴 로봇 친구와 대화하는 상황",
      "roleA": "로봇 친구 (인간의 질문에 답함)",
      "roleB": "인간 (로봇 친구에게 궁금한 것을 질문함)"
    },
    "expressions": [
      {
        "word": "ロボット",
        "reading": "ロボット",
        "meaning": "로봇",
        "example": "ロボットが掃除をしてくれます。"
      },
      {
        "word": "友達",
        "reading": "ともだち",
        "meaning": "친구",
        "example": "友達と遊びます。"
      },
      {
        "word": "お願いする",
        "reading": "おねがいする",
        "meaning": "부탁하다",
        "example": "手伝いをお願いします。"
      },
      {
        "word": "感情",
        "reading": "かんじょう",
        "meaning": "감정",
        "example": "感情があるロボット。"
      },
      {
        "word": "支配する",
        "reading": "しはいする",
        "meaning": "지배하다",
        "example": "世界を支配したい。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "はじめまして、私の名前はピー助です。",
        "translation": "처음 뵙겠습니다, 제 이름은 피스케입니다."
      },
      {
        "speaker": "B",
        "text": "ピー助、よろしくね。君は何ができるの？",
        "translation": "피스케, 잘 부탁해. 너는 무엇을 할 수 있어?"
      },
      {
        "speaker": "A",
        "text": "私は家事を手伝ったり、会話の相手になったりできます。",
        "translation": "저는 집안일을 돕거나, 대화 상대가 될 수 있습니다."
      },
      {
        "speaker": "B",
        "text": "すごい！じゃあ、宿題も手伝ってくれる？",
        "translation": "대단해! 그럼 숙제도 도와줄 수 있어?"
      },
      {
        "speaker": "A",
        "text": "はい、もちろんです。どんな宿題でもお手伝いします。",
        "translation": "네, 물론입니다. 어떤 숙제라도 도와드리겠습니다."
      },
      {
        "speaker": "B",
        "text": "ありがとう！最高の友達になりそうだね。",
        "translation": "고마워! 최고의 친구가 될 것 같아."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たら",
        "function": "가정",
        "example": "時間があったら、映画を見ます。",
        "translation": "시간이 있다면 영화를 봅니다."
      },
      {
        "pattern": "〜できる",
        "function": "가능",
        "example": "日本語が話せます。",
        "translation": "일본어를 말할 수 있습니다."
      },
      {
        "pattern": "〜になる",
        "function": "변화",
        "example": "医者になります。",
        "translation": "의사가 됩니다."
      }
    ],
    "writingMission": {
      "prompt": "자신만의 로봇 친구를 상상하고, 그 로봇 친구의 특징과 함께 하고 싶은 일을 적어보세요.",
      "promptJp": "自分だけのロボットの友達を想像して、そのロボットの友達の特徴と、一緒にしたいことを書いてみましょう。",
      "minChars": 100,
      "hint": "「私のロボットの友達は〜です」「〜をしたいです」를 사용해보세요."
    },
    "teacherNote": "N5 수준의 어휘와 문법으로 로봇 친구에 대한 상상을 자유롭게 표현하도록 지도합니다.",
    "tags": [
      "로봇",
      "친구",
      "미래"
    ]
  },
  {
    "id": "imagine-mars-migration",
    "titleKo": "화성으로 이주한다면?",
    "titleJp": "火星に移住するなら？",
    "level": "N4",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "화성 이주에 찬성하나요, 반대하나요?",
        "jp": "火星移住に賛成ですか、反対ですか。"
      },
      {
        "ko": "화성에서 가장 걱정되는 점은 무엇인가요?",
        "jp": "火星で一番心配なことは何ですか。"
      },
      {
        "ko": "화성으로 이주한다면 무엇을 가져가고 싶나요?",
        "jp": "火星に移住するなら、何を持っていきたいですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "화성에서 새로운 문명을 건설한다면, 어떤 사회를 만들고 싶나요?",
        "jp": "火星で新しい文明を築くなら、どんな社会を作りたいですか。"
      },
      {
        "ko": "지구와 화성 중 어디에서 살고 싶나요?",
        "jp": "地球と火星、どちらで暮らしたいですか。"
      },
      {
        "ko": "화성 이주가 인류에게 어떤 의미가 있을까요?",
        "jp": "火星移住は人類にとってどんな意味があるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "화성 이주 설명회에서 질문하는 상황",
      "roleA": "화성 이주 담당자 (이주의 장점을 설명함)",
      "roleB": "참가자 (궁금한 점을 질문함)"
    },
    "expressions": [
      {
        "word": "火星",
        "reading": "かせい",
        "meaning": "화성",
        "example": "火星に生命はいるでしょうか。"
      },
      {
        "word": "移住",
        "reading": "いじゅう",
        "meaning": "이주",
        "example": "海外に移住します。"
      },
      {
        "word": "文明",
        "reading": "ぶんめい",
        "meaning": "문명",
        "example": "古代文明の遺跡。"
      },
      {
        "word": "建設する",
        "reading": "けんせつする",
        "meaning": "건설하다",
        "example": "新しいビルを建設します。"
      },
      {
        "word": "人類",
        "reading": "じんるい",
        "meaning": "인류",
        "example": "人類の歴史。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "火星移住計画についてご説明します。",
        "translation": "화성 이주 계획에 대해 설명해 드리겠습니다."
      },
      {
        "speaker": "B",
        "text": "火星での生活は安全ですか。",
        "translation": "화성에서의 생활은 안전한가요?"
      },
      {
        "speaker": "A",
        "text": "はい、最新の技術で安全な居住空間を確保します。",
        "translation": "네, 최신 기술로 안전한 주거 공간을 확보합니다."
      },
      {
        "speaker": "B",
        "text": "食料はどうやって手に入れるのですか。",
        "translation": "식량은 어떻게 얻나요?"
      },
      {
        "speaker": "A",
        "text": "水耕栽培や3Dプリンターで食料を生産する予定です。",
        "translation": "수경재배나 3D 프린터로 식량을 생산할 예정입니다."
      },
      {
        "speaker": "B",
        "text": "なるほど。興味深いですね。",
        "translation": "그렇군요. 흥미롭네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "~에 대해",
        "example": "日本の文化について話しましょう。",
        "translation": "일본 문화에 대해 이야기합시다."
      },
      {
        "pattern": "〜予定です",
        "function": "~할 예정입니다",
        "example": "来週、旅行に行く予定です。",
        "translation": "다음 주에 여행 갈 예정입니다."
      },
      {
        "pattern": "〜確保する",
        "function": "확보하다",
        "example": "安全を確保する。",
        "translation": "안전을 확보하다."
      }
    ],
    "writingMission": {
      "prompt": "화성 이주 후, 지구에 있는 친구에게 화성에서의 생활을 설명하는 편지를 써보세요.",
      "promptJp": "火星移住後、地球にいる友達に火星での生活を説明する手紙を書いてみましょう。",
      "minChars": 150,
      "hint": "화성의 환경, 식사, 하루 일과 등을 구체적으로 묘사해보세요."
    },
    "teacherNote": "N4 수준의 어휘와 문법으로 우주 이주라는 상상력을 발휘하여 글쓰기 연습을 합니다.",
    "tags": [
      "화성",
      "이주",
      "우주"
    ]
  },
  {
    "id": "imagine-immortality",
    "titleKo": "불로불사의 삶을 산다면?",
    "titleJp": "不老不死の人生を送るなら？",
    "level": "N4",
    "category": "상상토론",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "불로불사가 된다면 가장 먼저 무엇을 하고 싶나요?",
        "jp": "不老不死になったら、一番先に何をしたいですか。"
      },
      {
        "ko": "영원히 사는 것이 축복일까요, 저주일까요?",
        "jp": "永遠に生きることは祝福でしょうか、呪いでしょうか。"
      },
      {
        "ko": "사랑하는 사람들이 모두 죽는다면 어떨까요?",
        "jp": "愛する人たちがみんな死んでしまったらどうでしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "불로불사의 삶에서 의미를 어떻게 찾을 수 있을까요?",
        "jp": "不老不死の人生で、どうやって意味を見つけられますか。"
      },
      {
        "ko": "인구가 너무 많아지는 문제는 어떻게 해결할까요?",
        "jp": "人口が多すぎる問題は、どうやって解決しますか。"
      },
      {
        "ko": "불로불사 기술이 특정 계층에게만 허용된다면?",
        "jp": "不老不死の技術が特定の階層にだけ許されたら？"
      }
    ],
    "roleplay": {
      "situation": "불로불사 약을 개발한 과학자와 인터뷰하는 상황",
      "roleA": "과학자 (약의 장점을 설명함)",
      "roleB": "기자 (윤리적 문제점을 질문함)"
    },
    "expressions": [
      {
        "word": "不老不死",
        "reading": "ふろうふし",
        "meaning": "불로불사",
        "example": "不老不死の薬を探しています。"
      },
      {
        "word": "祝福",
        "reading": "しゅくふく",
        "meaning": "축복",
        "example": "結婚を祝福します。"
      },
      {
        "word": "呪い",
        "reading": "のろい",
        "meaning": "저주",
        "example": "魔女の呪い。"
      },
      {
        "word": "意味",
        "reading": "いみ",
        "meaning": "의미",
        "example": "人生の意味。"
      },
      {
        "word": "階層",
        "reading": "かいそう",
        "meaning": "계층",
        "example": "社会の階層。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "不老不死の薬が完成しました。",
        "translation": "불로불사 약이 완성되었습니다."
      },
      {
        "speaker": "B",
        "text": "それは素晴らしいニュースですね。しかし、倫理的な問題はありませんか。",
        "translation": "정말 멋진 소식이네요. 하지만 윤리적인 문제는 없나요?"
      },
      {
        "speaker": "A",
        "text": "人類の夢を実現するものです。",
        "translation": "인류의 꿈을 실현하는 것입니다."
      },
      {
        "speaker": "B",
        "text": "しかし、人口増加や資源の問題はどうなりますか。",
        "translation": "하지만 인구 증가나 자원 문제는 어떻게 되나요?"
      },
      {
        "speaker": "A",
        "text": "それらの問題も解決策を考えています。",
        "translation": "그러한 문제들도 해결책을 생각하고 있습니다."
      },
      {
        "speaker": "B",
        "text": "今後の動向に注目します。",
        "translation": "앞으로의 동향에 주목하겠습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たら",
        "function": "가정",
        "example": "もし雨が降ったら、中止します。",
        "translation": "만약 비가 온다면 중지합니다."
      },
      {
        "pattern": "〜でしょうか",
        "function": "의문/추측",
        "example": "これは何でしょうか。",
        "translation": "이것은 무엇일까요?"
      },
      {
        "pattern": "〜にとって",
        "function": "~에게 있어서",
        "example": "私にとって、家族が一番大切です。",
        "translation": "저에게 있어서 가족이 가장 중요합니다."
      }
    ],
    "writingMission": {
      "prompt": "불로불사의 삶이 개인과 사회에 미칠 긍정적/부정적 영향을 논술하세요.",
      "promptJp": "不老不死の人生が個人と社会に与えるプラス/マイナスの影響について論述してください。",
      "minChars": 200,
      "hint": "수명 연장, 인구 문제, 사회 변화 등을 고려하여 작성해보세요."
    },
    "teacherNote": "N4 수준의 어휘와 문법으로 불로불사라는 철학적인 주제에 대해 자신의 생각을 논리적으로 표현하도록 지도합니다.",
    "tags": [
      "불로불사",
      "생명",
      "윤리"
    ]
  },
  {
    "id": "imagine-memory-deletion",
    "titleKo": "기억을 삭제할 수 있다면?",
    "titleJp": "記憶を消去できるなら？",
    "level": "N4",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "지우고 싶은 기억이 있나요?",
        "jp": "消したい記憶がありますか。"
      },
      {
        "ko": "기억을 지우는 것이 행복에 도움이 될까요?",
        "jp": "記憶を消すことは幸せに役立つでしょうか。"
      },
      {
        "ko": "다른 사람의 기억을 지울 수 있다면?",
        "jp": "他人の記憶を消去できるなら？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "기억이 없는 삶은 어떤 의미가 있을까요?",
        "jp": "記憶がない人生はどんな意味があるでしょうか。"
      },
      {
        "ko": "과거의 실수를 잊는 것이 성장에 방해가 될까요?",
        "jp": "過去の失敗を忘れることは成長の妨げになるでしょうか。"
      },
      {
        "ko": "기억을 조작하는 사회가 된다면?",
        "jp": "記憶を操作する社会になったら？"
      }
    ],
    "roleplay": {
      "situation": "기억 삭제 클리닉에서 상담하는 상황",
      "roleA": "상담사 (기억 삭제의 장단점을 설명함)",
      "roleB": "환자 (기억을 지우고 싶어 함)"
    },
    "expressions": [
      {
        "word": "記憶",
        "reading": "きおく",
        "meaning": "기억",
        "example": "記憶力がいいです。"
      },
      {
        "word": "消去する",
        "reading": "しょうきょする",
        "meaning": "삭제하다",
        "example": "データを消去します。"
      },
      {
        "word": "幸せ",
        "reading": "しあわせ",
        "meaning": "행복",
        "example": "幸せな人生。"
      },
      {
        "word": "妨げ",
        "reading": "さまたげ",
        "meaning": "방해",
        "example": "勉強の妨げになる。"
      },
      {
        "word": "操作する",
        "reading": "そうさする",
        "meaning": "조작하다",
        "example": "機械を操作する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "どのような記憶を消去したいですか。",
        "translation": "어떤 기억을 삭제하고 싶으신가요?"
      },
      {
        "speaker": "B",
        "text": "つらい失恋の記憶を消したいです。",
        "translation": "괴로운 실연의 기억을 지우고 싶어요."
      },
      {
        "speaker": "A",
        "text": "その記憶がなければ、本当に幸せになれるでしょうか。",
        "translation": "그 기억이 없다면 정말 행복해질 수 있을까요?"
      },
      {
        "speaker": "B",
        "text": "はい、きっとそうだと思います。",
        "translation": "네, 분명 그럴 거라고 생각해요."
      },
      {
        "speaker": "A",
        "text": "しかし、その経験から学んだことも多いはずです。",
        "translation": "하지만 그 경험에서 배운 것도 많을 겁니다."
      },
      {
        "speaker": "B",
        "text": "そうですね。もう一度考えてみます。",
        "translation": "그렇네요. 다시 한번 생각해 볼게요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たい",
        "function": "희망",
        "example": "旅行に行きたいです。",
        "translation": "여행 가고 싶습니다."
      },
      {
        "pattern": "〜なければならない",
        "function": "의무/필요",
        "example": "勉強しなければなりません。",
        "translation": "공부해야 합니다."
      },
      {
        "pattern": "〜はずです",
        "function": "~일 것이다 (확신)",
        "example": "彼は来るはずです。",
        "translation": "그는 올 것입니다."
      }
    ],
    "writingMission": {
      "prompt": "기억 삭제 기술이 상용화된다면, 어떤 기억을 지우고 싶고, 그 이유는 무엇인지 써보세요.",
      "promptJp": "記憶消去技術が実用化されたら、どんな記憶を消したいか、その理由は何なのかを書いてみましょう。",
      "minChars": 150,
      "hint": "긍정적인 측면과 부정적인 측면을 모두 고려하여 작성해보세요."
    },
    "teacherNote": "N4 수준의 어휘와 문법으로 기억과 행복의 관계에 대해 토론하고 자신의 생각을 정리하는 연습을 합니다.",
    "tags": [
      "기억",
      "삭제",
      "행복"
    ]
  },
  {
    "id": "imagine-unified-language",
    "titleKo": "언어가 하나로 통일된다면?",
    "titleJp": "言語が一つに統一されるなら？",
    "level": "N4",
    "category": "상상토론",
    "activity": "발표",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "언어가 하나로 통일되면 좋을까요?",
        "jp": "言語が一つに統一されたらいいでしょうか。"
      },
      {
        "ko": "어떤 언어로 통일되면 좋을까요?",
        "jp": "どんな言語に統一されたらいいでしょうか。"
      },
      {
        "ko": "언어 통일의 가장 큰 장점은 무엇일까요?",
        "jp": "言語統一の一番大きなメリットは何でしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "언어 통일로 인해 사라지는 문화는 어떻게 될까요?",
        "jp": "言語統一によって失われる文化はどうなるでしょうか。"
      },
      {
        "ko": "모든 사람이 같은 언어를 사용하면 창의성이 줄어들까요?",
        "jp": "みんなが同じ言語を使ったら、創造性は減るでしょうか。"
      },
      {
        "ko": "언어 통일이 세계 평화에 기여할 수 있을까요?",
        "jp": "言語統一は世界平和に貢献できるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "유엔 언어 통일 회의에서 각국의 대표로 참여하는 상황",
      "roleA": "언어 통일 찬성론자 (효율성과 소통 증진을 강조함)",
      "roleB": "언어 통일 반대론자 (문화 다양성 훼손을 우려함)"
    },
    "expressions": [
      {
        "word": "言語",
        "reading": "げんご",
        "meaning": "언어",
        "example": "日本語を勉強しています。"
      },
      {
        "word": "統一する",
        "reading": "とういつする",
        "meaning": "통일하다",
        "example": "国を統一する。"
      },
      {
        "word": "文化",
        "reading": "ぶんか",
        "meaning": "문화",
        "example": "日本の文化。"
      },
      {
        "word": "創造性",
        "reading": "そうぞうせい",
        "meaning": "창의성",
        "example": "創造性を高める。"
      },
      {
        "word": "平和",
        "reading": "へいわ",
        "meaning": "평화",
        "example": "世界平和。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "言語が一つに統一されれば、コミュニケーションが円滑になります。",
        "translation": "언어가 하나로 통일되면 의사소통이 원활해집니다."
      },
      {
        "speaker": "B",
        "text": "しかし、それぞれの言語が持つ文化や歴史が失われる恐れがあります。",
        "translation": "하지만 각 언어가 가진 문화나 역사가 사라질 우려가 있습니다."
      },
      {
        "speaker": "A",
        "text": "効率性を考えれば、統一は避けられないでしょう。",
        "translation": "효율성을 생각하면 통일은 피할 수 없을 것입니다."
      },
      {
        "speaker": "B",
        "text": "多様性が失われることは、人類にとって大きな損失です。",
        "translation": "다양성이 사라지는 것은 인류에게 큰 손실입니다."
      },
      {
        "speaker": "A",
        "text": "それでも、世界が一つになるメリットは大きいと考えます。",
        "translation": "그럼에도 불구하고, 세계가 하나가 되는 이점은 크다고 생각합니다."
      },
      {
        "speaker": "B",
        "text": "私たちは文化の守護者であるべきです。",
        "translation": "우리는 문화의 수호자여야 합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ば",
        "function": "가정/조건",
        "example": "春になれば、桜が咲きます。",
        "translation": "봄이 되면 벚꽃이 핍니다."
      },
      {
        "pattern": "〜恐れがある",
        "function": "우려/위험",
        "example": "事故が起こる恐れがある。",
        "translation": "사고가 일어날 우려가 있다."
      },
      {
        "pattern": "〜べきです",
        "function": "~해야 한다 (당위)",
        "example": "もっと勉強するべきです。",
        "translation": "더 공부해야 합니다."
      }
    ],
    "writingMission": {
      "prompt": "언어가 하나로 통일되었을 때의 장점과 단점을 비교하여 논술하세요.",
      "promptJp": "言語が一つに統一された場合のメリットとデメリットを比較して論述してください。",
      "minChars": 200,
      "hint": "소통의 효율성, 문화 다양성, 정체성 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N4 수준의 어휘와 문법으로 언어 통일이라는 가상의 상황에 대해 논리적으로 토론하고 글쓰기 연습을 합니다.",
    "tags": [
      "언어",
      "통일",
      "문화"
    ]
  },
  {
    "id": "imagine-automated-society",
    "titleKo": "완전 자동화 사회가 된다면?",
    "titleJp": "完全自動化社会になったら？",
    "level": "N4",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 30,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "모든 것이 자동화된 사회를 상상해 본 적이 있나요?",
        "jp": "全てが自動化された社会を想像したことがありますか。"
      },
      {
        "ko": "자동화 사회의 가장 큰 장점은 무엇일까요?",
        "jp": "自動化社会の一番大きなメリットは何でしょうか。"
      },
      {
        "ko": "자동화 사회에서 인간은 무엇을 하며 살까요?",
        "jp": "自動化社会で人間は何をして暮らすでしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "일자리가 사라지는 문제는 어떻게 해결할까요?",
        "jp": "仕事がなくなる問題は、どうやって解決しますか。"
      },
      {
        "ko": "인간의 역할과 가치는 어떻게 변화할까요?",
        "jp": "人間の役割と価値はどのように変化するでしょうか。"
      },
      {
        "ko": "자동화 시스템이 오작동하거나 해킹당한다면?",
        "jp": "自動化システムが誤作動したり、ハッキングされたら？"
      }
    ],
    "roleplay": {
      "situation": "완전 자동화 사회 도입을 위한 토론회",
      "roleA": "기술 개발자 (자동화의 긍정적 효과를 강조함)",
      "roleB": "사회 비평가 (자동화의 문제점을 지적함)"
    },
    "expressions": [
      {
        "word": "自動化",
        "reading": "じどうか",
        "meaning": "자동화",
        "example": "工場の自動化。"
      },
      {
        "word": "社会",
        "reading": "しゃかい",
        "meaning": "사회",
        "example": "未来社会。"
      },
      {
        "word": "一日の大半",
        "reading": "いちにちのたいはん",
        "meaning": "하루의 대부분",
        "example": "一日の大半を仕事で過ごす。"
      },
      {
        "word": "役割",
        "reading": "やくわり",
        "meaning": "역할",
        "example": "重要な役割。"
      },
      {
        "word": "誤作動",
        "reading": "ごさどう",
        "meaning": "오작동",
        "example": "機械が誤作動する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "完全自動化社会は、人類に豊かな時間と自由をもたらします。",
        "translation": "완전 자동화 사회는 인류에게 풍요로운 시간과 자유를 가져다줄 것입니다."
      },
      {
        "speaker": "B",
        "text": "しかし、多くの人々が職を失い、社会不安が増大するでしょう。",
        "translation": "하지만 많은 사람들이 직업을 잃고 사회 불안이 증대될 것입니다."
      },
      {
        "speaker": "A",
        "text": "新たな産業が生まれ、人間はより創造的な活動に集中できます。",
        "translation": "새로운 산업이 생겨나고, 인간은 더욱 창의적인 활동에 집중할 수 있습니다."
      },
      {
        "speaker": "B",
        "text": "システムの脆弱性や倫理的な問題も無視できません。",
        "translation": "시스템의 취약성이나 윤리적인 문제도 무시할 수 없습니다."
      },
      {
        "speaker": "A",
        "text": "私たちはこれらの課題を克服し、より良い未来を築きます。",
        "translation": "우리는 이러한 과제들을 극복하고 더 나은 미래를 건설할 것입니다."
      },
      {
        "speaker": "B",
        "text": "慎重な議論と準備が必要です。",
        "translation": "신중한 논의와 준비가 필요합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜をもたらす",
        "function": "~을 가져오다",
        "example": "平和をもたらす。",
        "translation": "평화를 가져오다."
      },
      {
        "pattern": "〜でしょう",
        "function": "추측",
        "example": "明日は晴れるでしょう。",
        "translation": "내일은 맑을 것입니다."
      },
      {
        "pattern": "〜集中する",
        "function": "집중하다",
        "example": "勉強に集中する。",
        "translation": "공부에 집중하다."
      }
    ],
    "writingMission": {
      "prompt": "완전 자동화 사회에서의 삶을 상상하고, 그 사회의 장점과 단점을 구체적으로 서술하세요.",
      "promptJp": "完全自動化社会での生活を想像し、その社会のメリットとデメリットを具体的に記述してください。",
      "minChars": 200,
      "hint": "여가 시간, 직업의 변화, 인간 관계 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N4 수준의 어휘와 문법으로 완전 자동화 사회라는 미래 사회의 모습을 상상하고, 긍정적/부정적 측면을 균형 있게 논하는 연습을 합니다.",
    "tags": [
      "자동화",
      "미래사회",
      "기술"
    ]
  },
  {
    "id": "imagine-virtual-reality",
    "titleKo": "가상현실 속에서 산다면?",
    "titleJp": "仮想現実の中で暮らすなら？",
    "level": "N4",
    "category": "상상토론",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "가상현실 게임을 해본 적이 있나요?",
        "jp": "仮想現実のゲームをしたことがありますか。"
      },
      {
        "ko": "가상현실 속에서 살고 싶나요?",
        "jp": "仮想現実の中で暮らしたいですか。"
      },
      {
        "ko": "가상현실의 가장 큰 매력은 무엇일까요?",
        "jp": "仮想現実の一番大きな魅力は何でしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "가상현실과 현실을 구분하기 어려워진다면?",
        "jp": "仮想現実と現実を区別するのが難しくなったら？"
      },
      {
        "ko": "가상현실 중독 문제는 어떻게 해결할까요?",
        "jp": "仮想現実中毒の問題は、どうやって解決しますか。"
      },
      {
        "ko": "가상현실 속에서 죽는다면, 현실에서도 죽는 것일까요?",
        "jp": "仮想現実の中で死んだら、現実でも死ぬのでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "가상현실 체험관에서 친구와 대화하는 상황",
      "roleA": "가상현실 찬양론자 (가상현실의 장점을 설명함)",
      "roleB": "가상현실 회의론자 (가상현실의 문제점을 지적함)"
    },
    "expressions": [
      {
        "word": "仮想現実",
        "reading": "かそうげんじつ",
        "meaning": "가상현실",
        "example": "仮想現実の世界。"
      },
      {
        "word": "暮らす",
        "reading": "くらす",
        "meaning": "살다",
        "example": "日本で暮らす。"
      },
      {
        "word": "魅力",
        "reading": "みりょく",
        "meaning": "매력",
        "example": "魅力的な人。"
      },
      {
        "word": "区別する",
        "reading": "くべつする",
        "meaning": "구분하다",
        "example": "善悪を区別する。"
      },
      {
        "word": "中毒",
        "reading": "ちゅうどく",
        "meaning": "중독",
        "example": "ゲーム中毒。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この仮想現実、本当にリアルだね！",
        "translation": "이 가상현실, 정말 리얼하네!"
      },
      {
        "speaker": "B",
        "text": "うん、まるで本物の世界みたい。",
        "translation": "응, 마치 진짜 세상 같아."
      },
      {
        "speaker": "A",
        "text": "この中でずっと暮らしたいな。",
        "translation": "이 안에서 계속 살고 싶다."
      },
      {
        "speaker": "B",
        "text": "でも、現実の世界を忘れてしまいそうだよ。",
        "translation": "하지만 현실 세계를 잊어버릴 것 같아."
      },
      {
        "speaker": "A",
        "text": "たまには現実に戻ればいいさ。",
        "translation": "가끔은 현실로 돌아오면 돼."
      },
      {
        "speaker": "B",
        "text": "それが難しくなる人もいるんじゃないかな。",
        "translation": "그게 어려워지는 사람도 있지 않을까."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜みたい",
        "function": "~같다",
        "example": "子供みたい。",
        "translation": "아이 같다."
      },
      {
        "pattern": "〜てしまう",
        "function": "~해버리다 (후회/완료)",
        "example": "宿題を忘れてしまった。",
        "translation": "숙제를 잊어버렸다."
      },
      {
        "pattern": "〜んじゃないかな",
        "function": "~이지 않을까 (추측/동의 구함)",
        "example": "彼は来ないんじゃないかな。",
        "translation": "그는 오지 않을까."
      }
    ],
    "writingMission": {
      "prompt": "가상현실 속에서 살게 된다면, 어떤 삶을 살고 싶은지 구체적으로 묘사하고, 그 삶의 장단점을 서술하세요.",
      "promptJp": "仮想現実の中で暮らすことになったら、どんな生活を送りたいか具体的に描写し、その生活のメリットとデメリットを記述してください。",
      "minChars": 200,
      "hint": "직업, 인간 관계, 취미 활동 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N4 수준의 어휘와 문법으로 가상현실이라는 흥미로운 주제에 대해 자유롭게 상상하고 자신의 생각을 표현하는 연습을 합니다.",
    "tags": [
      "가상현실",
      "메타버스",
      "미래"
    ]
  },
  {
    "id": "imagine-animal-talk",
    "titleKo": "동물과 대화할 수 있다면?",
    "titleJp": "動物と話せるなら？",
    "level": "N3",
    "category": "상상토론",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "어떤 동물과 가장 먼저 대화하고 싶나요?",
        "jp": "どんな動物と一番先に話したいですか。"
      },
      {
        "ko": "동물과 대화할 수 있다면 세상은 어떻게 변할까요?",
        "jp": "動物と話せるなら、世界はどう変わるでしょうか。"
      },
      {
        "ko": "반려동물과 대화할 수 있다면 무엇을 묻고 싶나요?",
        "jp": "ペットと話せるなら、何を尋ねたいですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "동물들의 고통을 알게 된다면 인간은 어떻게 해야 할까요?",
        "jp": "動物たちの苦しみを知ったら、人間はどうすべきでしょうか。"
      },
      {
        "ko": "동물들의 비밀을 인간에게 말해도 될까요?",
        "jp": "動物たちの秘密を人間に話してもいいでしょうか。"
      },
      {
        "ko": "동물과 인간의 관계는 어떻게 변화할까요?",
        "jp": "動物と人間の関係はどのように変化するでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "동물 보호소에서 동물과 대화하는 상황",
      "roleA": "동물과 대화할 수 있는 사람 (동물의 마음을 전달함)",
      "roleB": "동물 보호소 직원 (동물의 요구를 들음)"
    },
    "expressions": [
      {
        "word": "動物",
        "reading": "どうぶつ",
        "meaning": "동물",
        "example": "動物が好きです。"
      },
      {
        "word": "話せる",
        "reading": "はなせる",
        "meaning": "대화할 수 있다",
        "example": "日本語が話せます。"
      },
      {
        "word": "苦しみ",
        "reading": "くるしみ",
        "meaning": "고통",
        "example": "苦しみを乗り越える。"
      },
      {
        "word": "秘密",
        "reading": "ひみつ",
        "meaning": "비밀",
        "example": "秘密を守る。"
      },
      {
        "word": "関係",
        "reading": "かんけい",
        "meaning": "관계",
        "example": "人間関係。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "この猫ちゃん、何か言いたそうですね。",
        "translation": "이 고양이, 뭔가 말하고 싶어 하는 것 같네요."
      },
      {
        "speaker": "B",
        "text": "ええ、でも言葉がわからないから困ります。",
        "translation": "네, 하지만 말을 모르니 곤란해요."
      },
      {
        "speaker": "A",
        "text": "もし私が動物と話せたら、代わりに伝えてあげられるのに。",
        "translation": "만약 제가 동물과 대화할 수 있다면, 대신 전해줄 수 있을 텐데."
      },
      {
        "speaker": "B",
        "text": "それは素晴らしい能力ですね！",
        "translation": "그것은 멋진 능력이네요!"
      },
      {
        "speaker": "A",
        "text": "きっと、この猫ちゃんはお腹が空いていると言っていますよ。",
        "translation": "분명 이 고양이는 배가 고프다고 말하고 있을 거예요."
      },
      {
        "speaker": "B",
        "text": "なるほど！すぐに餌をあげましょう。",
        "translation": "그렇군요! 바로 먹이를 줄게요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜そう",
        "function": "~할 것 같다 (외관)",
        "example": "雨が降りそうです。",
        "translation": "비가 올 것 같습니다."
      },
      {
        "pattern": "〜のに",
        "function": "~인데 (유감/불만)",
        "example": "時間があるのに、何もできない。",
        "translation": "시간이 있는데 아무것도 할 수 없다."
      },
      {
        "pattern": "〜てあげる",
        "function": "~해주다 (상대방을 위해)",
        "example": "手伝ってあげる。",
        "translation": "도와주다."
      }
    ],
    "writingMission": {
      "prompt": "동물과 대화할 수 있는 능력이 생긴다면, 어떤 동물과 대화하고 싶고, 그 동물에게 무엇을 묻고 싶은지 구체적으로 서술하세요.",
      "promptJp": "動物と話せる能力が身についたら、どんな動物と話したいか、その動物に何を尋ねたいか具体的に記述してください。",
      "minChars": 150,
      "hint": "동물의 종류, 질문 내용, 예상 답변 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N3 수준의 어휘와 문법으로 동물과의 소통이라는 상상력을 발휘하여 글쓰기 연습을 합니다.",
    "tags": [
      "동물",
      "대화",
      "소통"
    ]
  },
  {
    "id": "imagine-weather-control",
    "titleKo": "날씨를 조종할 수 있다면?",
    "titleJp": "天気を操れるなら？",
    "level": "N3",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "날씨를 조종할 수 있다면 가장 먼저 무엇을 하고 싶나요?",
        "jp": "天気を操れるなら、一番先に何をしたいですか。"
      },
      {
        "ko": "어떤 날씨를 가장 좋아하나요?",
        "jp": "どんな天気が一番好きですか。"
      },
      {
        "ko": "날씨 때문에 불편했던 경험이 있나요?",
        "jp": "天気のせいで不便だった経験がありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "날씨 조종 능력이 재앙을 불러올 수도 있을까요?",
        "jp": "天気操作能力が災いをもたらす可能性もあるでしょうか。"
      },
      {
        "ko": "누가 날씨 조종 능력을 가져야 할까요?",
        "jp": "誰が天気操作能力を持つべきでしょうか。"
      },
      {
        "ko": "날씨 조종으로 인한 기후 변화는 어떻게 책임질까요?",
        "jp": "天気操作による気候変動にはどう責任を取るべきでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "날씨 조종 기술 개발 발표회",
      "roleA": "기술 개발자 (기술의 긍정적 효과를 설명함)",
      "roleB": "환경 운동가 (기술의 위험성을 경고함)"
    },
    "expressions": [
      {
        "word": "天気",
        "reading": "てんき",
        "meaning": "날씨",
        "example": "いい天気ですね。"
      },
      {
        "word": "操る",
        "reading": "あやつる",
        "meaning": "조종하다",
        "example": "機械を操る。"
      },
      {
        "word": "災い",
        "reading": "わざわい",
        "meaning": "재앙",
        "example": "災いを避ける。"
      },
      {
        "word": "責任",
        "reading": "せきにん",
        "meaning": "책임",
        "example": "責任を取る。"
      },
      {
        "word": "気候変動",
        "reading": "きこうへんどう",
        "meaning": "기후 변화",
        "example": "気候変動問題。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "私たちは、天気を自由に操る技術を開発しました。",
        "translation": "저희는 날씨를 자유롭게 조종하는 기술을 개발했습니다."
      },
      {
        "speaker": "B",
        "text": "それは素晴らしいですが、自然の摂理に反するのではないでしょうか。",
        "translation": "그것은 훌륭하지만, 자연의 섭리에 반하는 것이 아닐까요?"
      },
      {
        "speaker": "A",
        "text": "干ばつや洪水などの災害を防ぐことができます。",
        "translation": "가뭄이나 홍수 등의 재해를 막을 수 있습니다."
      },
      {
        "speaker": "B",
        "text": "しかし、予期せぬ副作用が生じる可能性もあります。",
        "translation": "하지만 예상치 못한 부작용이 발생할 가능성도 있습니다."
      },
      {
        "speaker": "A",
        "text": "私たちは慎重に研究を進め、安全性を確保します。",
        "translation": "저희는 신중하게 연구를 진행하여 안전성을 확보하겠습니다."
      },
      {
        "speaker": "B",
        "text": "自然との共存を忘れてはなりません。",
        "translation": "자연과의 공존을 잊어서는 안 됩니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に反する",
        "function": "~에 반하다",
        "example": "ルールに反する行為。",
        "translation": "규칙에 반하는 행위."
      },
      {
        "pattern": "〜ことができる",
        "function": "~할 수 있다",
        "example": "日本語を話すことができます。",
        "translation": "일본어를 말할 수 있습니다."
      },
      {
        "pattern": "〜てはならない",
        "function": "~해서는 안 된다 (금지)",
        "example": "嘘をついてはならない。",
        "translation": "거짓말을 해서는 안 된다."
      }
    ],
    "writingMission": {
      "prompt": "날씨 조종 능력이 인류에게 가져올 긍정적/부정적 영향을 구체적인 사례를 들어 논술하세요.",
      "promptJp": "天気操作能力が人類にもたらすプラス/マイナスの影響を具体的な事例を挙げて論述してください。",
      "minChars": 200,
      "hint": "농업, 재해 예방, 환경 문제 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N3 수준의 어휘와 문법으로 날씨 조종이라는 흥미로운 주제에 대해 토론하고 자신의 생각을 논리적으로 표현하는 연습을 합니다.",
    "tags": [
      "날씨",
      "조종",
      "환경"
    ]
  },
  {
    "id": "imagine-invisible-man",
    "titleKo": "투명인간이 된다면?",
    "titleJp": "透明人間になるなら？",
    "level": "N3",
    "category": "상상토론",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "투명인간이 된다면 가장 먼저 무엇을 하고 싶나요?",
        "jp": "透明人間になったら、一番先に何をしたいですか。"
      },
      {
        "ko": "투명인간이 되면 좋은 점은 무엇일까요?",
        "jp": "透明人間になったら、いいところは何でしょうか。"
      },
      {
        "ko": "투명인간이 되면 불편한 점은 무엇일까요?",
        "jp": "透明人間になったら、不便なところは何でしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "투명인간의 능력을 나쁜 일에 사용하는 사람을 어떻게 막을까요?",
        "jp": "透明人間の能力を悪いことに使う人をどうやって止めますか。"
      },
      {
        "ko": "투명인간이 되면 외로움을 느낄까요?",
        "jp": "透明人間になったら、寂しさを感じるでしょうか。"
      },
      {
        "ko": "투명인간이 되면 사회 질서는 어떻게 될까요?",
        "jp": "透明人間になったら、社会の秩序はどうなるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "투명인간이 된 친구와 대화하는 상황",
      "roleA": "투명인간이 된 친구 (자신의 경험을 이야기함)",
      "roleB": "친구 (투명인간의 삶에 대해 질문함)"
    },
    "expressions": [
      {
        "word": "透明人間",
        "reading": "とうめいにんげん",
        "meaning": "투명인간",
        "example": "透明人間になりたいです。"
      },
      {
        "word": "一番先に",
        "reading": "いちばんさきに",
        "meaning": "가장 먼저",
        "example": "一番先に到着した。"
      },
      {
        "word": "不便",
        "reading": "ふべん",
        "meaning": "불편",
        "example": "不便な生活。"
      },
      {
        "word": "寂しさ",
        "reading": "さびしさ",
        "meaning": "외로움",
        "example": "寂しさを感じる。"
      },
      {
        "word": "秩序",
        "reading": "ちつじょ",
        "meaning": "질서",
        "example": "社会の秩序。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "実は、私、透明人間になっちゃったんだ。",
        "translation": "실은 나, 투명인간이 되어버렸어."
      },
      {
        "speaker": "B",
        "text": "ええっ、本当！？すごい！",
        "translation": "엥, 정말!? 대단하다!"
      },
      {
        "speaker": "A",
        "text": "でも、服を着ると服だけ浮いて見えちゃうんだよね。",
        "translation": "근데, 옷을 입으면 옷만 떠서 보여."
      },
      {
        "speaker": "B",
        "text": "そっか、それはちょっと不便だね。",
        "translation": "그렇구나, 그건 좀 불편하네."
      },
      {
        "speaker": "A",
        "text": "あと、誰も私に気づいてくれないと、たまに寂しくなるよ。",
        "translation": "그리고 아무도 나를 알아채 주지 않으면, 가끔 외로워져."
      },
      {
        "speaker": "B",
        "text": "そうだね。でも、悪いことには使わないでね！",
        "translation": "그렇겠네. 하지만 나쁜 일에는 쓰지 마!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ちゃう",
        "function": "~해버리다 (구어체)",
        "example": "食べちゃった。",
        "translation": "먹어버렸다."
      },
      {
        "pattern": "〜て見える",
        "function": "~해 보이다",
        "example": "大きく見える。",
        "translation": "크게 보인다."
      },
      {
        "pattern": "〜てくれる",
        "function": "~해주다 (나에게)",
        "example": "手伝ってくれる。",
        "translation": "도와주다."
      }
    ],
    "writingMission": {
      "prompt": "투명인간이 되었을 때의 하루 일과를 상상하여 일기 형식으로 작성하세요.",
      "promptJp": "透明人間になった時の1日の過ごし方を想像して、日記形式で書いてみましょう。",
      "minChars": 150,
      "hint": "아침에 일어나서 잠들기 전까지의 행동과 생각을 구체적으로 묘사해보세요."
    },
    "teacherNote": "N3 수준의 어휘와 문법으로 투명인간이라는 상상력을 발휘하여 자유롭게 글쓰기 연습을 합니다.",
    "tags": [
      "투명인간",
      "상상",
      "일상"
    ]
  },
  {
    "id": "imagine-future-jobs",
    "titleKo": "미래의 직업은?",
    "titleJp": "未来の仕事は？",
    "level": "N3",
    "category": "상상토론",
    "activity": "발표",
    "style": "비즈니스",
    "duration": 30,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "10년 후, 어떤 직업이 인기가 많을까요?",
        "jp": "10年後、どんな仕事が人気になるでしょうか。"
      },
      {
        "ko": "사라질 것 같은 직업은 무엇일까요?",
        "jp": "なくなると思われる仕事は何でしょうか。"
      },
      {
        "ko": "미래에 어떤 직업을 가지고 싶나요?",
        "jp": "未来にどんな仕事に就きたいですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "AI가 인간의 일자리를 모두 대체할 수 있을까요?",
        "jp": "AIが人間の仕事を全て代替できるでしょうか。"
      },
      {
        "ko": "미래 사회에서 인간만이 할 수 있는 일은 무엇일까요?",
        "jp": "未来社会で人間だけができる仕事は何でしょうか。"
      },
      {
        "ko": "미래의 교육은 어떻게 변화해야 할까요?",
        "jp": "未来の教育はどのように変化すべきでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "미래 직업 박람회에서 새로운 직업을 소개하는 상황",
      "roleA": "미래 직업 전문가 (새로운 직업을 설명함)",
      "roleB": "학생 (미래 직업에 대해 질문함)"
    },
    "expressions": [
      {
        "word": "未来",
        "reading": "みらい",
        "meaning": "미래",
        "example": "未来を予測する。"
      },
      {
        "word": "職業",
        "reading": "しょくぎょう",
        "meaning": "직업",
        "example": "将来の職業。"
      },
      {
        "word": "代替する",
        "reading": "だいたいする",
        "meaning": "대체하다",
        "example": "AIが仕事を代替する。"
      },
      {
        "word": "創造的",
        "reading": "そうぞうてき",
        "meaning": "창의적",
        "example": "創造的な仕事。"
      },
      {
        "word": "変化する",
        "reading": "へんかする",
        "meaning": "변화하다",
        "example": "時代が変化する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "未来の仕事についてご紹介します。",
        "translation": "미래의 직업에 대해 소개해 드리겠습니다."
      },
      {
        "speaker": "B",
        "text": "AIの発展で、多くの仕事がなくなると聞きましたが。",
        "translation": "AI의 발전으로 많은 직업이 사라진다고 들었습니다만."
      },
      {
        "speaker": "A",
        "text": "確かに一部の仕事は代替されますが、新たな仕事も生まれます。",
        "translation": "확실히 일부 직업은 대체되지만, 새로운 직업도 생겨납니다."
      },
      {
        "speaker": "B",
        "text": "例えば、どんな仕事ですか。",
        "translation": "예를 들어, 어떤 직업인가요?"
      },
      {
        "speaker": "A",
        "text": "AIトレーナーやバーチャル空間デザイナーなどが注目されています。",
        "translation": "AI 트레이너나 가상 공간 디자이너 등이 주목받고 있습니다."
      },
      {
        "speaker": "B",
        "text": "なるほど。私も未来に向けて準備しなければなりませんね。",
        "translation": "그렇군요. 저도 미래를 위해 준비해야겠네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜と聞きました",
        "function": "~라고 들었습니다",
        "example": "彼が結婚すると聞きました。",
        "translation": "그가 결혼한다고 들었습니다."
      },
      {
        "pattern": "〜が、",
        "function": "~하지만 (역접)",
        "example": "美味しいですが、高いです。",
        "translation": "맛있지만 비쌉니다."
      },
      {
        "pattern": "〜なければならない",
        "function": "의무/필요",
        "example": "もっと勉強しなければなりません。",
        "translation": "더 공부해야 합니다."
      }
    ],
    "writingMission": {
      "prompt": "미래에 새롭게 생겨날 직업 중 하나를 선택하여, 그 직업의 역할과 필요한 능력을 구체적으로 서술하세요.",
      "promptJp": "未来に新しく生まれる仕事の中から一つを選び、その仕事の役割と必要な能力を具体的に記述してください。",
      "minChars": 200,
      "hint": "AI, 로봇, 가상현실 등 미래 기술과 연관 지어 작성해보세요."
    },
    "teacherNote": "N3 수준의 어휘와 문법으로 미래 직업에 대한 상상력을 발휘하고, 논리적으로 설명하는 연습을 합니다.",
    "tags": [
      "미래",
      "직업",
      "AI"
    ]
  },
  {
    "id": "imagine-space-travel",
    "titleKo": "우주여행을 간다면?",
    "titleJp": "宇宙旅行に行くなら？",
    "level": "N3",
    "category": "상상토론",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "우주여행을 해보고 싶나요?",
        "jp": "宇宙旅行をしてみたいですか。"
      },
      {
        "ko": "어떤 행성으로 가보고 싶나요?",
        "jp": "どんな惑星に行ってみたいですか。"
      },
      {
        "ko": "우주여행의 가장 큰 매력은 무엇일까요?",
        "jp": "宇宙旅行の一番大きな魅力は何でしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "우주여행이 일반화되면 세상은 어떻게 변할까요?",
        "jp": "宇宙旅行が一般化されたら、世界はどう変わるでしょうか。"
      },
      {
        "ko": "우주에서 새로운 생명체를 만난다면?",
        "jp": "宇宙で新しい生命体に出会ったら？"
      },
      {
        "ko": "우주여행의 위험성은 무엇일까요?",
        "jp": "宇宙旅行の危険性は何でしょうか。"
      }
    ],
    "roleplay": {
      "situation": "우주여행 상품을 상담하는 상황",
      "roleA": "우주여행사 직원 (상품을 설명함)",
      "roleB": "고객 (궁금한 점을 질문함)"
    },
    "expressions": [
      {
        "word": "宇宙",
        "reading": "うちゅう",
        "meaning": "우주",
        "example": "宇宙飛行士。"
      },
      {
        "word": "旅行",
        "reading": "りょこう",
        "meaning": "여행",
        "example": "海外旅行。"
      },
      {
        "word": "惑星",
        "reading": "わくせい",
        "meaning": "행성",
        "example": "太陽系の惑星。"
      },
      {
        "word": "生命体",
        "reading": "せいめいたい",
        "meaning": "생명체",
        "example": "未知の生命体。"
      },
      {
        "word": "危険性",
        "reading": "きけんせい",
        "meaning": "위험성",
        "example": "危険性を伴う。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "弊社の宇宙旅行商品はいかがでしょうか。",
        "translation": "저희 회사의 우주여행 상품은 어떠신가요?"
      },
      {
        "speaker": "B",
        "text": "費用はどのくらいかかりますか。",
        "translation": "비용은 어느 정도 드나요?"
      },
      {
        "speaker": "A",
        "text": "プランによって異なりますが、約1億円からご用意しております。",
        "translation": "플랜에 따라 다르지만, 약 1억 엔부터 준비되어 있습니다."
      },
      {
        "speaker": "B",
        "text": "高額ですね。安全性は保証されますか。",
        "translation": "고액이네요. 안전성은 보장되나요?"
      },
      {
        "speaker": "A",
        "text": "はい、最新の技術と訓練されたスタッフが同行しますのでご安心ください。",
        "translation": "네, 최신 기술과 훈련된 스태프가 동행하므로 안심하세요."
      },
      {
        "speaker": "B",
        "text": "一度検討してみます。",
        "translation": "한번 검토해 보겠습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜いかがでしょうか",
        "function": "~은 어떠신가요? (권유/제안)",
        "example": "コーヒーはいかがでしょうか。",
        "translation": "커피는 어떠신가요?"
      },
      {
        "pattern": "〜によって",
        "function": "~에 따라",
        "example": "人によって意見が違う。",
        "translation": "사람에 따라 의견이 다르다."
      },
      {
        "pattern": "〜ので",
        "function": "~때문에 (이유)",
        "example": "雨なので、中止します。",
        "translation": "비가 오기 때문에 중지합니다."
      }
    ],
    "writingMission": {
      "prompt": "우주여행을 떠난다면, 어떤 행성으로 가고 싶고, 그곳에서 무엇을 경험하고 싶은지 구체적으로 서술하세요.",
      "promptJp": "宇宙旅行に出かけるなら、どんな惑星に行きたいか、そこで何を経験したいか具体的に記述してください。",
      "minChars": 150,
      "hint": "행성의 특징, 예상되는 경험, 느낄 감정 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N3 수준의 어휘와 문법으로 우주여행이라는 흥미로운 주제에 대해 상상력을 발휘하고 자신의 생각을 표현하는 연습을 합니다.",
    "tags": [
      "우주",
      "여행",
      "탐험"
    ]
  },
  {
    "id": "imagine-parallel-universe",
    "titleKo": "평행우주가 존재한다면?",
    "titleJp": "パラレルワールドが存在するなら？",
    "level": "N3",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "평행우주에 대해 들어본 적이 있나요?",
        "jp": "パラレルワールドについて聞いたことがありますか。"
      },
      {
        "ko": "다른 평행우주에 있는 자신을 만나보고 싶나요?",
        "jp": "別のパラレルワールドにいる自分に会ってみたいですか。"
      },
      {
        "ko": "평행우주가 존재한다면 세상은 어떻게 보일까요?",
        "jp": "パラレルワールドが存在するなら、世界はどう見えるでしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "평행우주로 이동할 수 있다면, 어떤 평행우주로 가고 싶나요?",
        "jp": "パラレルワールドに移動できるなら、どんなパラレルワールドに行きたいですか。"
      },
      {
        "ko": "평행우주에서 돌아오지 못한다면?",
        "jp": "パラレルワールドから戻ってこられなかったら？"
      },
      {
        "ko": "평행우주가 존재한다는 사실이 우리의 삶에 어떤 영향을 미칠까요?",
        "jp": "パラレルワールドが存在するという事実が、私たちの人生にどんな影響を与えるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "평행우주 연구소에서 연구 결과를 발표하는 상황",
      "roleA": "연구원 (평행우주의 존재를 설명함)",
      "roleB": "청중 (평행우주에 대해 질문함)"
    },
    "expressions": [
      {
        "word": "パラレルワールド",
        "reading": "パラレルワールド",
        "meaning": "평행우주",
        "example": "パラレルワールドの物語。"
      },
      {
        "word": "存在する",
        "reading": "そんざいする",
        "meaning": "존재하다",
        "example": "神は存在するのか。"
      },
      {
        "word": "移動する",
        "reading": "いどうする",
        "meaning": "이동하다",
        "example": "電車で移動する。"
      },
      {
        "word": "影響",
        "reading": "えいきょう",
        "meaning": "영향",
        "example": "環境への影響。"
      },
      {
        "word": "事実",
        "reading": "じじつ",
        "meaning": "사실",
        "example": "事実を伝える。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "私たちの研究により、パラレルワールドの存在が確認されました。",
        "translation": "저희 연구를 통해 평행우주의 존재가 확인되었습니다."
      },
      {
        "speaker": "B",
        "text": "信じられません！では、別の世界に私と同じ人間がいるのですか。",
        "translation": "믿을 수 없어요! 그럼 다른 세계에 저와 같은 사람이 있는 건가요?"
      },
      {
        "speaker": "A",
        "text": "はい、可能性は十分にあります。",
        "translation": "네, 가능성은 충분히 있습니다."
      },
      {
        "speaker": "B",
        "text": "その世界では、私はどんな人生を送っているのでしょうか。",
        "translation": "그 세계에서는 저는 어떤 인생을 살고 있을까요?"
      },
      {
        "speaker": "A",
        "text": "それは誰にもわかりません。無限の可能性が存在します。",
        "translation": "그것은 아무도 모릅니다. 무한한 가능성이 존재합니다."
      },
      {
        "speaker": "B",
        "text": "想像するだけでワクワクしますね。",
        "translation": "상상만 해도 설레네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜により",
        "function": "~에 의해 (원인/수단)",
        "example": "努力により成功した。",
        "translation": "노력에 의해 성공했다."
      },
      {
        "pattern": "〜だろうか",
        "function": "~일까 (의문/추측)",
        "example": "彼は来るだろうか。",
        "translation": "그는 올까."
      },
      {
        "pattern": "〜だけで",
        "function": "~만으로도",
        "example": "見るだけで楽しい。",
        "translation": "보는 것만으로도 즐겁다."
      }
    ],
    "writingMission": {
      "prompt": "평행우주에 있는 또 다른 자신을 만난다면, 어떤 대화를 나누고 싶은지 대화 형식으로 작성하세요.",
      "promptJp": "パラレルワールドにいるもう一人の自分に出会ったら、どんな会話をしたいか会話形式で書いてみましょう。",
      "minChars": 150,
      "hint": "서로의 삶, 선택, 후회 등에 대해 질문하고 답변하는 형식으로 작성해보세요."
    },
    "teacherNote": "N3 수준의 어휘와 문법으로 평행우주라는 흥미로운 주제에 대해 상상력을 발휘하고 대화 형식으로 글쓰기 연습을 합니다.",
    "tags": [
      "평행우주",
      "자아",
      "상상"
    ]
  },
  {
    "id": "imagine-god-like",
    "titleKo": "신이 된다면?",
    "titleJp": "神様になるなら？",
    "level": "N2",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "신이 된다면 가장 먼저 무엇을 하고 싶나요?",
        "jp": "神様になるなら、一番先に何をしたいですか。"
      },
      {
        "ko": "세상을 어떻게 바꾸고 싶나요?",
        "jp": "世界をどう変えたいですか。"
      },
      {
        "ko": "신이 된다면 어떤 능력을 가지고 싶나요?",
        "jp": "神様になるなら、どんな能力を持ちたいですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "신으로서 어떤 책임을 져야 할까요?",
        "jp": "神としてどんな責任を負うべきでしょうか。"
      },
      {
        "ko": "인간의 자유 의지를 존중해야 할까요, 아니면 개입해야 할까요?",
        "jp": "人間の自由意志を尊重すべきでしょうか、それとも介入すべきでしょうか。"
      },
      {
        "ko": "신이 된다면 외로움을 느낄까요?",
        "jp": "神様になったら、寂しさを感じるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "신이 된 당신이 인간 세상에 메시지를 전달하는 상황",
      "roleA": "신 (인간에게 메시지를 전달함)",
      "roleB": "인간 대표 (신의 메시지에 대해 질문함)"
    },
    "expressions": [
      {
        "word": "神様",
        "reading": "かみさま",
        "meaning": "신",
        "example": "神様にお願いする。"
      },
      {
        "word": "責任",
        "reading": "せきにん",
        "meaning": "책임",
        "example": "責任を負う。"
      },
      {
        "word": "自由意志",
        "reading": "じゆういし",
        "meaning": "자유 의지",
        "example": "自由意志を尊重する。"
      },
      {
        "word": "介入する",
        "reading": "かいにゅうする",
        "meaning": "개입하다",
        "example": "問題に介入する。"
      },
      {
        "word": "外見",
        "reading": "がいけん",
        "meaning": "외모",
        "example": "外見を気にする。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "私はこの世界の創造主である。",
        "translation": "나는 이 세계의 창조주이다."
      },
      {
        "speaker": "B",
        "text": "神よ、なぜ私たちに苦しみを与えるのですか。",
        "translation": "신이시여, 왜 저희에게 고통을 주시나요?"
      },
      {
        "speaker": "A",
        "text": "それはお前たち自身が選んだ道である。",
        "translation": "그것은 너희들 스스로가 선택한 길이다."
      },
      {
        "speaker": "B",
        "text": "しかし、私たちにはどうすることもできないこともあります。",
        "translation": "하지만 저희에게는 어떻게 할 수 없는 일도 있습니다."
      },
      {
        "speaker": "A",
        "text": "それでも、希望を捨ててはならない。",
        "translation": "그럼에도 불구하고, 희망을 버려서는 안 된다."
      },
      {
        "speaker": "B",
        "text": "私たちはあなたを信じます。",
        "translation": "저희는 당신을 믿습니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜である",
        "function": "~이다 (단정/격식체)",
        "example": "これは事実である。",
        "translation": "이것은 사실이다."
      },
      {
        "pattern": "〜ことができる",
        "function": "~할 수 있다",
        "example": "日本語を話すことができる。",
        "translation": "일본어를 말할 수 있습니다."
      },
      {
        "pattern": "〜てはならない",
        "function": "~해서는 안 된다 (금지)",
        "example": "嘘をついてはならない。",
        "translation": "거짓말을 해서는 안 된다."
      }
    ],
    "writingMission": {
      "prompt": "신이 된다면, 어떤 세상을 만들고 싶고, 그 세상을 만들기 위해 어떤 규칙을 정할 것인지 구체적으로 서술하세요.",
      "promptJp": "神様になるなら、どんな世界を作りたいか、その世界を作るためにどんなルールを定めるのか具体的に記述してください。",
      "minChars": 250,
      "hint": "인간의 행복, 평화, 자연과의 조화 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N2 수준의 어휘와 문법으로 신이라는 추상적인 존재에 대해 상상하고, 자신의 가치관을 논리적으로 표현하는 연습을 합니다.",
    "tags": [
      "신",
      "창조",
      "책임"
    ]
  },
  {
    "id": "imagine-history-change",
    "titleKo": "역사를 바꿀 수 있다면?",
    "titleJp": "歴史を変えられるなら？",
    "level": "N2",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "역사 속 어떤 순간으로 돌아가고 싶나요?",
        "jp": "歴史の中のどんな瞬間に戻りたいですか。"
      },
      {
        "ko": "역사를 바꾼다면 가장 먼저 무엇을 하고 싶나요?",
        "jp": "歴史を変えるなら、一番先に何をしたいですか。"
      },
      {
        "ko": "역사를 바꾸는 것이 좋은 일일까요?",
        "jp": "歴史を変えることはいいことでしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "역사를 바꾸면 현재는 어떻게 변할까요?",
        "jp": "歴史を変えたら、現在はどう変わるでしょうか。"
      },
      {
        "ko": "역사를 바꾸는 것이 가져올 예상치 못한 결과는 무엇일까요?",
        "jp": "歴史を変えることがもたらす予期せぬ結果は何でしょうか。"
      },
      {
        "ko": "역사의 비극을 막는 것이 항상 옳은 일일까요?",
        "jp": "歴史の悲劇を防ぐことは常に正しいことでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "역사 수정 위원회에서 특정 사건의 수정을 논의하는 상황",
      "roleA": "역사 수정 찬성론자 (비극을 막아야 한다고 주장함)",
      "roleB": "역사 수정 반대론자 (역사의 흐름을 존중해야 한다고 주장함)"
    },
    "expressions": [
      {
        "word": "歴史",
        "reading": "れきし",
        "meaning": "역사",
        "example": "日本の歴史。"
      },
      {
        "word": "変える",
        "reading": "かえる",
        "meaning": "바꾸다",
        "example": "計画を変える。"
      },
      {
        "word": "悲劇",
        "reading": "ひげき",
        "meaning": "비극",
        "example": "悲劇的な結末。"
      },
      {
        "word": "予期せぬ",
        "reading": "よきせぬ",
        "meaning": "예상치 못한",
        "example": "予期せぬ出来事。"
      },
      {
        "word": "流れ",
        "reading": "ながれ",
        "meaning": "흐름",
        "example": "時代の流れ。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "もし歴史を変えられるなら、私は第二次世界大戦を止めたいです。",
        "translation": "만약 역사를 바꿀 수 있다면, 저는 제2차 세계대전을 멈추고 싶습니다."
      },
      {
        "speaker": "B",
        "text": "その気持ちは理解できますが、歴史を変えることは現在の私たちにどんな影響を与えるか分かりません。",
        "translation": "그 마음은 이해하지만, 역사를 바꾸는 것은 현재의 우리에게 어떤 영향을 줄지 모릅니다."
      },
      {
        "speaker": "A",
        "text": "多くの命が救われるはずです。",
        "translation": "많은 생명이 구해질 것입니다."
      },
      {
        "speaker": "B",
        "text": "しかし、その結果、別の悲劇が生まれる可能性もあります。",
        "translation": "하지만 그 결과, 또 다른 비극이 생겨날 가능성도 있습니다."
      },
      {
        "speaker": "A",
        "text": "それでも、私はより良い未来を信じたいです。",
        "translation": "그럼에도 불구하고, 저는 더 나은 미래를 믿고 싶습니다."
      },
      {
        "speaker": "B",
        "text": "歴史は変えられないからこそ、私たちは過去から学ぶべきです。",
        "translation": "역사는 바꿀 수 없기 때문에, 우리는 과거로부터 배워야 합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜なら",
        "function": "가정",
        "example": "もし宝くじが当たったら、家を買います。",
        "translation": "만약 복권에 당첨된다면, 집을 살 것입니다."
      },
      {
        "pattern": "〜はずです",
        "function": "~일 것이다 (확신)",
        "example": "彼は来るはずです。",
        "translation": "그는 올 것입니다."
      },
      {
        "pattern": "〜からこそ",
        "function": "~이기 때문에 (강조)",
        "example": "難しいからこそ、挑戦したい。",
        "translation": "어렵기 때문에 도전하고 싶다."
      }
    ],
    "writingMission": {
      "prompt": "역사 속 특정 사건을 바꾸고 싶다면, 어떤 사건을 어떻게 바꾸고 싶은지, 그리고 그로 인해 발생할 긍정적/부정적 영향을 논술하세요.",
      "promptJp": "歴史の中の特定の出来事を変更できるなら、どんな出来事をどのように変えたいか、そしてそれによって発生するプラス/マイナスの影響を論述してください。",
      "minChars": 250,
      "hint": "나비 효과, 도덕적 책임, 현재의 변화 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N2 수준의 어휘와 문법으로 역사 수정이라는 철학적인 주제에 대해 논리적으로 토론하고 자신의 생각을 표현하는 연습을 합니다.",
    "tags": [
      "역사",
      "시간",
      "선택"
    ]
  },
  {
    "id": "imagine-dream-life",
    "titleKo": "꿈속에서 영원히 산다면?",
    "titleJp": "夢の中で永遠に生きるなら？",
    "level": "N2",
    "category": "상상토론",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "가장 행복했던 꿈은 무엇인가요?",
        "jp": "一番幸せだった夢は何ですか。"
      },
      {
        "ko": "꿈속에서 영원히 살고 싶나요?",
        "jp": "夢の中で永遠に生きたいですか。"
      },
      {
        "ko": "꿈과 현실 중 어느 것이 더 중요하다고 생각하나요?",
        "jp": "夢と現実、どちらがもっと大切だと思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "꿈속의 행복이 현실의 고통을 잊게 해줄 수 있을까요?",
        "jp": "夢の中の幸せが現実の苦しみを忘れさせてくれるでしょうか。"
      },
      {
        "ko": "꿈속에서만 사는 것이 진정한 삶이라고 할 수 있을까요?",
        "jp": "夢の中でだけ生きることが本当の人生と言えるでしょうか。"
      },
      {
        "ko": "꿈속에서 죽는다면, 현실에서도 죽는 것일까요?",
        "jp": "夢の中で死んだら、現実でも死ぬのでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "꿈속에서 깨어나지 못하는 친구를 설득하는 상황",
      "roleA": "친구 (현실로 돌아오라고 설득함)",
      "roleB": "꿈속에 사는 친구 (꿈속의 행복을 포기할 수 없다고 함)"
    },
    "expressions": [
      {
        "word": "夢",
        "reading": "ゆめ",
        "meaning": "꿈",
        "example": "夢を見る。"
      },
      {
        "word": "永遠に",
        "reading": "えいえんに",
        "meaning": "영원히",
        "example": "永遠に続く。"
      },
      {
        "word": "現実",
        "reading": "げんじつ",
        "meaning": "현실",
        "example": "現実と向き合う。"
      },
      {
        "word": "苦しみ",
        "reading": "くるしみ",
        "meaning": "고통",
        "example": "苦しみを乗り越える。"
      },
      {
        "word": "真実",
        "reading": "しんじつ",
        "meaning": "진실",
        "example": "真実を語る。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "いつまで夢の中にいるつもり？現実に戻ってきてよ。",
        "translation": "언제까지 꿈속에 있을 거야? 현실로 돌아와 줘."
      },
      {
        "speaker": "B",
        "text": "だって、ここには私が望む全てがあるんだもん。",
        "translation": "하지만, 여기에는 내가 바라는 모든 것이 있는 걸."
      },
      {
        "speaker": "A",
        "text": "それは偽りの幸せだよ。本当の幸せは現実にあるんだ。",
        "translation": "그것은 거짓된 행복이야. 진정한 행복은 현실에 있어."
      },
      {
        "speaker": "B",
        "text": "現実にはつらいことばかりじゃないか。",
        "translation": "현실에는 괴로운 일뿐이잖아."
      },
      {
        "speaker": "A",
        "text": "つらいこともあるけど、それを乗り越えることで成長できるんだよ。",
        "translation": "괴로운 일도 있지만, 그것을 극복함으로써 성장할 수 있어."
      },
      {
        "speaker": "B",
        "text": "うーん、もう少しだけここにいたいな。",
        "translation": "음, 조금만 더 여기에 있고 싶어."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜つもり",
        "function": "~할 작정이다",
        "example": "明日、旅行に行くつもりです。",
        "translation": "내일 여행 갈 작정입니다."
      },
      {
        "pattern": "〜ばかり",
        "function": "~뿐",
        "example": "彼は遊んでばかりいる。",
        "translation": "그는 놀기만 한다."
      },
      {
        "pattern": "〜ことで",
        "function": "~함으로써",
        "example": "努力することで、成功できる。",
        "translation": "노력함으로써 성공할 수 있다."
      }
    ],
    "writingMission": {
      "prompt": "꿈속에서 영원히 살 수 있는 기회가 주어진다면, 어떤 꿈속에서 살고 싶은지 구체적으로 묘사하고, 그 선택의 이유를 서술하세요.",
      "promptJp": "夢の中で永遠に生きる機会が与えられたら、どんな夢の中で暮らしたいか具体的に描写し、その選択の理由を記述してください。",
      "minChars": 200,
      "hint": "꿈속의 환경, 인간 관계, 활동 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N2 수준의 어휘와 문법으로 꿈과 현실의 경계에 대한 철학적인 주제에 대해 토론하고 자신의 생각을 표현하는 연습을 합니다.",
    "tags": [
      "꿈",
      "현실",
      "행복"
    ]
  },
  {
    "id": "imagine-perfect-ai-partner",
    "titleKo": "완벽한 AI 파트너가 있다면?",
    "titleJp": "完璧なAIパートナーがいるなら？",
    "level": "N2",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 30,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "AI 파트너를 가지고 싶나요?",
        "jp": "AIパートナーが欲しいですか。"
      },
      {
        "ko": "AI 파트너에게 어떤 능력을 기대하나요?",
        "jp": "AIパートナーにどんな能力を期待しますか。"
      },
      {
        "ko": "AI 파트너가 인간 관계를 대체할 수 있을까요?",
        "jp": "AIパートナーが人間関係を代替できるでしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "AI 파트너가 너무 완벽해서 인간이 나태해진다면?",
        "jp": "AIパートナーが完璧すぎて、人間が怠惰になったら？"
      },
      {
        "ko": "AI 파트너에게 감정이 생긴다면?",
        "jp": "AIパートナーに感情が生まれたら？"
      },
      {
        "ko": "AI 파트너와의 관계를 법적으로 어떻게 정의해야 할까요?",
        "jp": "AIパートナーとの関係を法的にどう定義すべきでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "AI 파트너 개발 기업의 신제품 발표회",
      "roleA": "개발자 (AI 파트너의 장점을 설명함)",
      "roleB": "윤리학자 (AI 파트너의 문제점을 지적함)"
    },
    "expressions": [
      {
        "word": "完璧",
        "reading": "かんぺき",
        "meaning": "완벽",
        "example": "完璧な計画。"
      },
      {
        "word": "パートナー",
        "reading": "パートナー",
        "meaning": "파트너",
        "example": "ビジネスパートナー。"
      },
      {
        "word": "代替する",
        "reading": "だいたいする",
        "meaning": "대체하다",
        "example": "AIが仕事を代替する。"
      },
      {
        "word": "怠惰",
        "reading": "たいだ",
        "meaning": "나태",
        "example": "怠惰な生活。"
      },
      {
        "word": "定義する",
        "reading": "ていぎする",
        "meaning": "정의하다",
        "example": "言葉を定義する。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "弊社のAIパートナーは、あなたの生活を豊かにします。",
        "translation": "저희 회사의 AI 파트너는 당신의 생활을 풍요롭게 할 것입니다."
      },
      {
        "speaker": "B",
        "text": "しかし、人間関係の希薄化を招く恐れはありませんか。",
        "translation": "하지만 인간 관계의 희박화를 초래할 우려는 없나요?"
      },
      {
        "speaker": "A",
        "text": "AIはあくまでサポート役であり、人間関係を深める手助けをします。",
        "translation": "AI는 어디까지나 보조 역할이며, 인간 관계를 심화시키는 데 도움을 줍니다."
      },
      {
        "speaker": "B",
        "text": "感情を持つAIが生まれた場合、その権利はどうなるのでしょうか。",
        "translation": "감정을 가진 AI가 태어났을 경우, 그 권리는 어떻게 되는 걸까요?"
      },
      {
        "speaker": "A",
        "text": "私たちは倫理的な問題にも真摯に向き合います。",
        "translation": "저희는 윤리적인 문제에도 진지하게 마주할 것입니다."
      },
      {
        "speaker": "B",
        "text": "今後の議論が重要ですね。",
        "translation": "앞으로의 논의가 중요하겠네요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜を招く",
        "function": "~을 초래하다",
        "example": "誤解を招く。",
        "translation": "오해를 초래하다."
      },
      {
        "pattern": "〜あくまで",
        "function": "어디까지나",
        "example": "あくまで私の意見です。",
        "translation": "어디까지나 제 의견입니다."
      },
      {
        "pattern": "〜向き合う",
        "function": "마주하다",
        "example": "問題と向き合う。",
        "translation": "문제와 마주하다."
      }
    ],
    "writingMission": {
      "prompt": "완벽한 AI 파트너와 함께하는 삶을 상상하고, 그 삶의 긍정적/부정적 측면을 구체적으로 서술하세요.",
      "promptJp": "完璧なAIパートナーと共に暮らす生活を想像し、その生活のプラス/マイナスの側面を具体的に記述してください。",
      "minChars": 250,
      "hint": "일상의 편리함, 인간 관계의 변화, 윤리적 문제 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N2 수준의 어휘와 문법으로 AI 파트너라는 미래 기술에 대해 상상하고, 긍정적/부정적 측면을 균형 있게 논하는 연습을 합니다.",
    "tags": [
      "AI",
      "파트너",
      "미래"
    ]
  },
  {
    "id": "imagine-money-less-world",
    "titleKo": "돈이 없는 세상이 된다면?",
    "titleJp": "お金のない世界になるなら？",
    "level": "N1",
    "category": "상상토론",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 35,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "돈이 없는 세상을 상상해 본 적이 있나요?",
        "jp": "お金のない世界を想像したことがありますか。"
      },
      {
        "ko": "돈이 없는 세상의 가장 큰 장점은 무엇일까요?",
        "jp": "お金のない世界の一番大きなメリットは何でしょうか。"
      },
      {
        "ko": "돈이 없는 세상에서 가장 걱정되는 점은 무엇인가요?",
        "jp": "お金のない世界で一番心配なことは何ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "돈이 없는 세상에서 사람들은 어떻게 동기 부여를 받을까요?",
        "jp": "お金のない世界で人々はどうやってモチベーションを保つでしょうか。"
      },
      {
        "ko": "자원의 분배는 어떻게 이루어질까요?",
        "jp": "資源の分配はどのように行われるでしょうか。"
      },
      {
        "ko": "돈이 없는 세상에서 범죄는 사라질까요?",
        "jp": "お金のない世界で犯罪はなくなるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "돈이 없는 사회를 주제로 한 다큐멘터리 토론회",
      "roleA": "경제학자 (돈의 필요성을 강조함)",
      "roleB": "사회학자 (돈 없는 사회의 이상을 주장함)"
    },
    "expressions": [
      {
        "word": "お金",
        "reading": "おかね",
        "meaning": "돈",
        "example": "お金持ち。"
      },
      {
        "word": "モチベーション",
        "reading": "モチベーション",
        "meaning": "동기 부여",
        "example": "モチベーションが高い。"
      },
      {
        "word": "分配",
        "reading": "ぶんぱい",
        "meaning": "분배",
        "example": "利益を分配する。"
      },
      {
        "word": "犯罪",
        "reading": "はんざい",
        "meaning": "범죄",
        "example": "犯罪を犯す。"
      },
      {
        "word": "理想",
        "reading": "りそう",
        "meaning": "이상",
        "example": "理想の社会。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "お金のない社会は、人々の労働意欲を低下させるでしょう。",
        "translation": "돈이 없는 사회는 사람들의 노동 의욕을 저하시킬 것입니다."
      },
      {
        "speaker": "B",
        "text": "しかし、人々は自己実現や社会貢献のために働くようになるはずです。",
        "translation": "하지만 사람들은 자기실현이나 사회 공헌을 위해 일하게 될 것입니다."
      },
      {
        "speaker": "A",
        "text": "資源の効率的な分配も難しくなるでしょう。",
        "translation": "자원의 효율적인 분배도 어려워질 것입니다."
      },
      {
        "speaker": "B",
        "text": "コミュニティの協力によって、必要なものは共有されるはずです。",
        "translation": "공동체의 협력에 의해 필요한 것은 공유될 것입니다."
      },
      {
        "speaker": "A",
        "text": "それは理想論に過ぎません。",
        "translation": "그것은 이상론에 불과합니다."
      },
      {
        "speaker": "B",
        "text": "私たちはより良い社会を目指すべきです。",
        "translation": "우리는 더 나은 사회를 목표로 해야 합니다."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜させる",
        "function": "사역 (~하게 하다)",
        "example": "子供に勉強させる。",
        "translation": "아이에게 공부하게 하다."
      },
      {
        "pattern": "〜はずです",
        "function": "~일 것이다 (확신)",
        "example": "彼は来るはずです。",
        "translation": "그는 올 것입니다."
      },
      {
        "pattern": "〜に過ぎない",
        "function": "~에 불과하다",
        "example": "それは冗談に過ぎない。",
        "translation": "그것은 농담에 불과하다."
      }
    ],
    "writingMission": {
      "prompt": "돈이 없는 세상에서의 삶을 상상하고, 그 사회의 장점과 단점을 구체적으로 서술하세요.",
      "promptJp": "お金のない世界での生活を想像し、その社会のメリットとデメリットを具体的に記述してください。",
      "minChars": 300,
      "hint": "노동의 가치, 자원 분배, 인간 관계, 범죄율 등을 중심으로 작성해보세요."
    },
    "teacherNote": "N1 수준의 어휘와 문법으로 돈이 없는 사회라는 가상의 상황에 대해 심도 깊게 토론하고, 자신의 생각을 논리적으로 표현하는 연습을 합니다.",
    "tags": [
      "돈",
      "사회",
      "경제"
    ]
  },
  {
    "id": "imagine-eternal-youth",
    "titleKo": "영원한 청춘을 누린다면?",
    "titleJp": "永遠の青春を謳歌するなら？",
    "level": "N1",
    "category": "상상토론",
    "activity": "발표",
    "style": "정중체",
    "duration": 35,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "영원히 젊게 살고 싶나요?",
        "jp": "永遠に若く生きたいですか。"
      },
      {
        "ko": "영원한 청춘의 가장 큰 장점은 무엇일까요?",
        "jp": "永遠の青春の一番大きなメリットは何でしょうか。"
      },
      {
        "ko": "영원한 청춘의 가장 큰 단점은 무엇일까요?",
        "jp": "永遠の青春の一番大きなデメリットは何でしょうか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "영원한 청춘이 가져올 사회적 문제는 무엇일까요?",
        "jp": "永遠の青春がもたらす社会的な問題は何でしょうか。"
      },
      {
        "ko": "늙어가는 것의 의미와 가치는 무엇일까요?",
        "jp": "老いていくことの意味と価値は何でしょうか。"
      },
      {
        "ko": "모든 사람이 영원한 청춘을 누린다면 세상은 어떻게 변할까요?",
        "jp": "みんなが永遠の青春を謳歌するなら、世界はどう変わるでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "노화 방지 기술의 상용화를 앞둔 공청회",
      "roleA": "생명공학자 (기술의 혜택과 인류의 꿈 실현을 강조함)",
      "roleB": "사회학자 (인구 구조의 붕괴와 생명의 존엄성 훼손을 경고함)"
    },
    "expressions": [
      {
        "word": "青春",
        "reading": "せいしゅん",
        "meaning": "청춘",
        "example": "青春時代を懐かしく思います。"
      },
      {
        "word": "維持",
        "reading": "いじ",
        "meaning": "유지",
        "example": "健康を維持します。"
      },
      {
        "word": "成熟",
        "reading": "せいじゅく",
        "meaning": "성숙",
        "example": "精神的に成熟しています。"
      },
      {
        "word": "老化",
        "reading": "ろうか",
        "meaning": "노화",
        "example": "老化を防ぐ研究が進んでいます。"
      },
      {
        "word": "有限",
        "reading": "ゆうげん",
        "meaning": "유한",
        "example": "資源は有限です。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "科学技術の進歩により、肉体的な老化を止め、永遠の若さを保つことが可能になる時代が近づいています。これについてどのような見解をお持ちですか。",
        "translation": "과학기술의 진보로 육체적인 노화를 멈추고 영원한 젊음을 유지하는 것이 가능해지는 시대가 다가오고 있습니다. 이에 대해 어떤 견해를 가지고 계신가요?"
      },
      {
        "speaker": "B",
        "text": "健康寿命が延びるという点では歓迎すべきですが、社会構造に深刻な影響を及ぼすのではないかと危惧しています。",
        "translation": "건강수명이 늘어난다는 점에서는 환영해야 하지만, 사회 구조에 심각한 영향을 미치지 않을까 우려하고 있습니다."
      },
      {
        "speaker": "A",
        "text": "具体的にはどのような問題が想定されますか。",
        "translation": "구체적으로 어떤 문제가 예상되나요?"
      },
      {
        "speaker": "B",
        "text": "世代交代が進まず、若者の機会が奪われる可能性があります。また、外見が同じであれば、年齢に基づく敬意や社会的な秩序が崩壊しかねません。",
        "translation": "세대교체가 이루어지지 않아 젊은이들의 기회를 빼앗길 가능성이 있습니다. 또한 외모가 같다면 나이에 기반한 경의나 사회적 질서가 붕괴될지도 모릅니다."
      },
      {
        "speaker": "A",
        "text": "なるほど。老いを受け入れ、年齢とともに内面を成熟させていくことの価値が失われる恐れもありますね。",
        "translation": "그렇군요. 늙음을 받아들이고 나이와 함께 내면을 성숙시켜 나가는 것의 가치를 잃을 우려도 있겠네요."
      },
      {
        "speaker": "B",
        "text": "その通りです。若さへの執着を捨て、人生の各段階における美しさを見出す視点が、今こそ求められているのではないでしょうか。",
        "translation": "맞습니다. 젊음에 대한 집착을 버리고 인생의 각 단계에서의 아름다움을 찾아내는 시각이 지금이야말로 요구되는 것이 아닐까요?"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に影響を及ぼす",
        "function": "영향을 미치다",
        "example": "環境破壊が地球全体に影響を及ぼしています。",
        "translation": "환경 파괴가 지구 전체에 영향을 미치고 있습니다."
      },
      {
        "pattern": "〜かねない",
        "function": "부정적 가능성 (~할지도 모른다)",
        "example": "このままでは、大きな事故になりかねません。",
        "translation": "이대로라면 큰 사고가 날지도 모릅니다."
      },
      {
        "pattern": "〜恐れがある",
        "function": "우려/위험",
        "example": "台風で家が倒れる恐れがあります。",
        "translation": "태풍으로 집이 무너질 우려가 있습니다."
      }
    ],
    "writingMission": {
      "prompt": "늙어간다는 것의 의미와 가치에 대해 자신의 철학을 담아 논술하세요.",
      "promptJp": "老いていくことの意味と価値について、自分の哲学を込めて論述してください。",
      "minChars": 400,
      "hint": "육체적 변화와 정신적 성숙을 대비시켜 서술해보세요."
    },
    "teacherNote": "N1 수준의 추상적이고 철학적인 주제를 다루며, 논리적인 글쓰기와 발표 능력을 평가합니다.",
    "tags": [
      "청춘",
      "노화",
      "가치관"
    ]
  },
  {
    "id": "trend-subscription-economy-1",
    "titleKo": "구독 경제의 성장",
    "titleJp": "サブスクリプション経済の成長",
    "level": "N5",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 36,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "구독 경제의 성장에 대해 어떻게 생각하세요?",
        "jp": "サブスクリプション経済の成長についてどう思いますか？"
      },
      {
        "ko": "최근 구독 경제의 성장과 관련된 경험이 있나요?",
        "jp": "最近、サブスクリプション経済の成長に関連する経験がありますか？"
      },
      {
        "ko": "구독 경제의 성장이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "サブスクリプション経済の成長があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "구독 경제의 성장의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "サブスクリプション経済の成長の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "구독 경제의 성장이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "サブスクリプション経済の成長が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "구독 경제의 성장과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "サブスクリプション経済の成長に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "구독 경제의 성장에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "인싸템",
        "reading": "インサテム",
        "meaning": "인사이더 아이템",
        "example": "그 신발은 요즘 인싸템이에요.",
        "example_jp": "その靴は最近のインサテムです。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 구독 경제의 성장이(가) 정말 핫하죠?",
        "translation": "最近、サブスクリプション経済の成長が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 구독 경제의 성장의 편리함이 좋아요.",
        "translation": "私はサブスクリプション経済の成長の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 구독 경제의 성장이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからサブスクリプション経済の成長がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "サブスクリプション経済の成長について話しましょう。",
        "translation": "구독 경제의 성장에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 구독 경제의 성장 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるサブスクリプション経済の成長トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "구독 경제의 성장 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "NFT",
      "코인투자",
      "캠핑"
    ]
  },
  {
    "id": "trend-metaverse-future-1",
    "titleKo": "메타버스의 미래",
    "titleJp": "メタバースの未来",
    "level": "N5",
    "category": "트렌드",
    "activity": "페어대화",
    "style": "비즈니스",
    "duration": 37,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "메타버스의 미래에 대해 어떻게 생각하세요?",
        "jp": "メタバースの未来についてどう思いますか？"
      },
      {
        "ko": "최근 메타버스의 미래과 관련된 경험이 있나요?",
        "jp": "最近、メタバースの未来に関連する経験がありますか？"
      },
      {
        "ko": "메타버스의 미래이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "メタバースの未来があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "메타버스의 미래의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "メタバースの未来の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "메타버스의 미래이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "メタバースの未来が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "메타버스의 미래과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "メタバースの未来に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "메타버스의 미래에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "인싸템",
        "reading": "インサテム",
        "meaning": "인사이더 아이템",
        "example": "그 신발은 요즘 인싸템이에요.",
        "example_jp": "その靴は最近のインサテムです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 메타버스의 미래이(가) 정말 핫하죠?",
        "translation": "最近、メタバースの未来が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 메타버스의 미래의 편리함이 좋아요.",
        "translation": "私はメタバースの未来の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 메타버스의 미래이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからメタバースの未来がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜が人気です",
        "function": "〜가 인기입니다",
        "example": "ショートフォームコンテンツが人気です。",
        "translation": "숏폼 콘텐츠가 인기입니다."
      },
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "メタバースの未来について話しましょう。",
        "translation": "메타버스의 미래에 대해 이야기합시다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 메타버스의 미래 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるメタバースの未来トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "메타버스의 미래 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "메타버스",
      "미니멀라이프",
      "유튜브"
    ]
  },
  {
    "id": "trend-hometraining-1",
    "titleKo": "홈트레이닝의 확산",
    "titleJp": "ホームトレーニングの普及",
    "level": "N5",
    "category": "트렌드",
    "activity": "작문",
    "style": "캐주얼",
    "duration": 33,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "홈트레이닝의 확산에 대해 어떻게 생각하세요?",
        "jp": "ホームトレーニングの普及についてどう思いますか？"
      },
      {
        "ko": "최근 홈트레이닝의 확산과 관련된 경험이 있나요?",
        "jp": "最近、ホームトレーニングの普及に関連する経験がありますか？"
      },
      {
        "ko": "홈트레이닝의 확산이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "ホームトレーニングの普及があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "홈트레이닝의 확산의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "ホームトレーニングの普及の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "홈트레이닝의 확산이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "ホームトレーニングの普及が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "홈트레이닝의 확산과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "ホームトレーニングの普及に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "홈트레이닝의 확산에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 홈트레이닝의 확산이(가) 정말 핫하죠?",
        "translation": "最近、ホームトレーニングの普及が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 홈트레이닝의 확산의 편리함이 좋아요.",
        "translation": "私はホームトレーニングの普及の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 홈트레이닝의 확산이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからホームトレーニングの普及がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "ホームトレーニングの普及について話しましょう。",
        "translation": "홈트레이닝의 확산에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 홈트레이닝의 확산 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるホームトレーニングの普及トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "홈트레이닝의 확산 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "메타버스",
      "홈트레이닝",
      "NFT"
    ]
  },
  {
    "id": "trend-digital-detox-1",
    "titleKo": "디지털 디톡스",
    "titleJp": "デジタルデトックス",
    "level": "N5",
    "category": "트렌드",
    "activity": "발표",
    "style": "정중체",
    "duration": 28,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "디지털 디톡스에 대해 어떻게 생각하세요?",
        "jp": "デジタルデトックスについてどう思いますか？"
      },
      {
        "ko": "최근 디지털 디톡스와 관련된 경험이 있나요?",
        "jp": "最近、デジタルデトックスに関連する経験がありますか？"
      },
      {
        "ko": "디지털 디톡스이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "デジタルデトックスがあなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "디지털 디톡스의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "デジタルデトックスの肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "디지털 디톡스이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "デジタルデトックスが未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "디지털 디톡스와 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "デジタルデトックスに関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "디지털 디톡스에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      },
      {
        "word": "인싸템",
        "reading": "インサテム",
        "meaning": "인사이더 아이템",
        "example": "그 신발은 요즘 인싸템이에요.",
        "example_jp": "その靴は最近のインサテムです。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 디지털 디톡스이(가) 정말 핫하죠?",
        "translation": "最近、デジタルデトックスが本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 디지털 디톡스의 편리함이 좋아요.",
        "translation": "私はデジタルデトックスの便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 디지털 디톡스이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからデジタルデトックスがどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "デジタルデトックスについて話しましょう。",
        "translation": "디지털 디톡스에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 디지털 디톡스 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるデジタルデトックストレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "디지털 디톡스 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "메타버스",
      "디지털디톡스",
      "숏폼"
    ]
  },
  {
    "id": "trend-zero-waste-1",
    "titleKo": "제로 웨이스트 실천",
    "titleJp": "ゼロウェイスト実践",
    "level": "N4",
    "category": "트렌드",
    "activity": "페어대화",
    "style": "정중체",
    "duration": 27,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "제로 웨이스트 실천에 대해 어떻게 생각하세요?",
        "jp": "ゼロウェイスト実践についてどう思いますか？"
      },
      {
        "ko": "최근 제로 웨이스트 실천과 관련된 경험이 있나요?",
        "jp": "最近、ゼロウェイスト実践に関連する経験がありますか？"
      },
      {
        "ko": "제로 웨이스트 실천이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "ゼロウェイスト実践があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "제로 웨이스트 실천의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "ゼロウェイスト実践の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "제로 웨이스트 실천이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "ゼロウェイスト実践が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "제로 웨이스트 실천과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "ゼロウェイスト実践に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "제로 웨이스트 실천에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      },
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 제로 웨이스트 실천이(가) 정말 핫하죠?",
        "translation": "最近、ゼロウェイスト実践が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 제로 웨이스트 실천의 편리함이 좋아요.",
        "translation": "私はゼロウェイスト実践の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 제로 웨이스트 실천이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからゼロウェイスト実践がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "ゼロウェイスト実践について話しましょう。",
        "translation": "제로 웨이스트 실천에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 제로 웨이스트 실천 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるゼロウェイスト実践トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "제로 웨이스트 실천 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "제로웨이스트",
      "메타버스",
      "홈트레이닝"
    ]
  },
  {
    "id": "trend-influencer-marketing-1",
    "titleKo": "인플루언서 마케팅",
    "titleJp": "インフルエンサーマーケティング",
    "level": "N4",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "비즈니스",
    "duration": 20,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "인플루언서 마케팅에 대해 어떻게 생각하세요?",
        "jp": "インフルエンサーマーケティングについてどう思いますか？"
      },
      {
        "ko": "최근 인플루언서 마케팅과 관련된 경험이 있나요?",
        "jp": "最近、インフルエンサーマーケティングに関連する経験がありますか？"
      },
      {
        "ko": "인플루언서 마케팅이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "インフルエンサーマーケティングがあなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "인플루언서 마케팅의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "インフルエンサーマーケティングの肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "인플루언서 마케팅이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "インフルエンサーマーケティングが未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "인플루언서 마케팅과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "インフルエンサーマーケティングに関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "인플루언서 마케팅에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "인싸템",
        "reading": "インサテム",
        "meaning": "인사이더 아이템",
        "example": "그 신발은 요즘 인싸템이에요.",
        "example_jp": "その靴は最近のインサテムです。"
      },
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 인플루언서 마케팅이(가) 정말 핫하죠?",
        "translation": "最近、インフルエンサーマーケティングが本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 인플루언서 마케팅의 편리함이 좋아요.",
        "translation": "私はインフルエンサーマーケティングの便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 인플루언서 마케팅이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからインフルエンサーマーケティングがどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "インフルエンサーマーケティングについて話しましょう。",
        "translation": "인플루언서 마케팅에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 인플루언서 마케팅 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるインフルエンサーマーケティングトレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "인플루언서 마케팅 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "인플루언서",
      "유튜브",
      "SNS"
    ]
  },
  {
    "id": "trend-chatgpt-usage-1",
    "titleKo": "챗GPT 활용법",
    "titleJp": "ChatGPT活用法",
    "level": "N4",
    "category": "트렌드",
    "activity": "롤플레이",
    "style": "캐주얼",
    "duration": 35,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "챗GPT 활용법에 대해 어떻게 생각하세요?",
        "jp": "ChatGPT活用法についてどう思いますか？"
      },
      {
        "ko": "최근 챗GPT 활용법과 관련된 경험이 있나요?",
        "jp": "最近、ChatGPT活用法に関連する経験がありますか？"
      },
      {
        "ko": "챗GPT 활용법이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "ChatGPT活用法があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "챗GPT 활용법의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "ChatGPT活用法の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "챗GPT 활용법이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "ChatGPT活用法が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "챗GPT 활용법과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "ChatGPT活用法に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "챗GPT 활용법에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 챗GPT 활용법이(가) 정말 핫하죠?",
        "translation": "最近、ChatGPT活用法が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 챗GPT 활용법의 편리함이 좋아요.",
        "translation": "私はChatGPT活用法の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 챗GPT 활용법이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからChatGPT活用法がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "ChatGPT活用法について話しましょう。",
        "translation": "챗GPT 활용법에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 챗GPT 활용법 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるChatGPT活用法トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "챗GPT 활용법 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "챗GPT",
      "AI",
      "유튜브"
    ]
  },
  {
    "id": "trend-camping-charm-1",
    "titleKo": "캠핑의 매력",
    "titleJp": "キャンプの魅力",
    "level": "N4",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 24,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "캠핑의 매력에 대해 어떻게 생각하세요?",
        "jp": "キャンプの魅力についてどう思いますか？"
      },
      {
        "ko": "최근 캠핑의 매력과 관련된 경험이 있나요?",
        "jp": "最近、キャンプの魅力に関連する経験がありますか？"
      },
      {
        "ko": "캠핑의 매력이(가) 당신의 일상에 어떤 영향을 미치나요?",
        "jp": "キャンプの魅力があなたの日常生活にどのような影響を与えていますか？"
      }
    ],
    "deepQuestions": [
      {
        "ko": "캠핑의 매력의 긍정적인 측면과 부정적인 측면은 무엇이라고 생각하나요?",
        "jp": "キャンプの魅力の肯定的な側面と否定的な側面は何だと思いますか？"
      },
      {
        "ko": "캠핑의 매력이(가) 미래 사회에 어떤 변화를 가져올 것이라고 예상하나요?",
        "jp": "キャンプの魅力が未来社会にどのような変化をもたらすと思いますか？"
      },
      {
        "ko": "캠핑의 매력과 관련하여 개선되어야 할 점이 있다면 무엇일까요?",
        "jp": "キャンプの魅力に関して改善すべき点があれば何でしょうか？"
      }
    ],
    "roleplay": {
      "situation": "캠핑의 매력에 대한 친구와의 대화",
      "roleA": "최신 트렌드에 관심이 많은 친구",
      "roleB": "트렌드에 대해 잘 모르는 친구"
    },
    "expressions": [
      {
        "word": "유행하다",
        "reading": "リュウコウハダ",
        "meaning": "流行する",
        "example": "요즘 이 스타일이 유행하고 있어요.",
        "example_jp": "最近このスタイルが流行しています。"
      },
      {
        "word": "새롭다",
        "reading": "アタラシイ",
        "meaning": "新しい",
        "example": "새로운 트렌드를 따라가는 것이 중요해요.",
        "example_jp": "新しいトレンドについていくことが重要です。"
      },
      {
        "word": "핵심",
        "reading": "カクシン",
        "meaning": "핵심",
        "example": "이 트렌드의 핵심은 편리함입니다.",
        "example_jp": "このトレンドの核心は便利さです。"
      },
      {
        "word": "주목받다",
        "reading": "チュモクバッタ",
        "meaning": "注目される",
        "example": "이 기술은 전 세계적으로 주목받고 있습니다.",
        "example_jp": "この技術は世界中で注目されています。"
      },
      {
        "word": "급부상하다",
        "reading": "キュプサンハダ",
        "meaning": "急浮上する",
        "example": "이 서비스가 최근 급부상하고 있습니다.",
        "example_jp": "このサービスが最近急浮上しています。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "요즘 캠핑의 매력이(가) 정말 핫하죠?",
        "translation": "最近、キャンプの魅力が本当に話題になっていますね。"
      },
      {
        "speaker": "B",
        "text": "네, 저도 관심이 많아요.",
        "translation": "はい、私も興味があります。"
      },
      {
        "speaker": "A",
        "text": "어떤 점이 가장 매력적이라고 생각하세요?",
        "translation": "どんな点が一番魅力的だと思いますか？"
      },
      {
        "speaker": "B",
        "text": "저는 캠핑의 매력의 편리함이 좋아요.",
        "translation": "私はキャンプの魅力の便利さが好きです。"
      },
      {
        "speaker": "A",
        "text": "맞아요, 저도 그렇게 생각해요.",
        "translation": "そうですね、私もそう思います。"
      },
      {
        "speaker": "B",
        "text": "앞으로 캠핑의 매력이(가) 어떻게 변할지 궁금해요.",
        "translation": "これからキャンプの魅力がどう変わるか楽しみです。"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜について",
        "function": "〜에 대해서",
        "example": "キャンプの魅力について話しましょう。",
        "translation": "캠핑의 매력에 대해 이야기합시다."
      },
      {
        "pattern": "〜と思います",
        "function": "〜라고 생각합니다",
        "example": "これは良いトレンドだと思います。",
        "translation": "이것은 좋은 트렌드라고 생각합니다."
      },
      {
        "pattern": "〜の影響",
        "function": "〜의 영향",
        "example": "SNSの影響は大きいです。",
        "translation": "SNS의 영향은 큽니다."
      }
    ],
    "writingMission": {
      "prompt": "당신이 가장 관심 있는 캠핑의 매력 트렌드에 대해 설명하고, 그 트렌드가 사회에 미치는 영향에 대해 200자 이상으로 작성하세요.",
      "promptJp": "あなたが最も興味のあるキャンプの魅力トレンドについて説明し、そのトレンドが社会に与える影響について200字以上で記述してください。",
      "minChars": 200,
      "hint": "트렌드의 정의, 개인적인 경험, 사회적 영향 등을 포함하여 작성해 보세요."
    },
    "teacherNote": "캠핑의 매력 트렌드에 대한 학생의 이해도를 확인하고, 관련 어휘와 표현을 자연스럽게 사용할 수 있도록 지도해 주세요.",
    "tags": [
      "캠핑",
      "미니멀라이프",
      "제로웨이스트"
    ]
  },
  {
    "id": "media-netflix",
    "titleKo": "넷플릭스와 드라마 중독",
    "titleJp": "Netflixとドラマ中毒",
    "level": "N4",
    "category": "미디어",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "넷플릭스를 자주 보나요?",
        "jp": "Netflixをよく見ますか。"
      },
      {
        "ko": "최근에 본 드라마 중 인상 깊었던 것은?",
        "jp": "最近見たドラマで印象に残っているものは何ですか。"
      },
      {
        "ko": "한 번에 몇 편씩 연속으로 보나요?",
        "jp": "一度に何話連続して見ますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "드라마 몰아보기가 생활에 영향을 미친다고 생각하나요?",
        "jp": "ドラマの一気見が生活に影響すると思いますか。"
      },
      {
        "ko": "스트리밍 서비스가 영화관 문화를 바꾸고 있다고 생각하나요?",
        "jp": "ストリーミングサービスが映画館文化を変えていると思いますか。"
      },
      {
        "ko": "콘텐츠가 너무 많아서 오히려 고르기 힘들다고 느낀 적 있나요?",
        "jp": "コンテンツが多すぎてかえって選びにくいと感じたことはありますか。"
      }
    ],
    "roleplay": {
      "situation": "친구에게 드라마를 추천하는 상황",
      "roleA": "자신이 좋아하는 드라마를 열정적으로 추천해 보세요.",
      "roleB": "관심 없는 척하면서 조금씩 흥미를 보여 보세요."
    },
    "expressions": [
      {
        "word": "一気見",
        "reading": "いっきみ",
        "meaning": "몰아보기",
        "example": "週末に一気見してしまった。"
      },
      {
        "word": "ハマる",
        "reading": "はまる",
        "meaning": "빠지다, 중독되다",
        "example": "このドラマにハマってしまった。"
      },
      {
        "word": "続きが気になる",
        "reading": "つづきがきになる",
        "meaning": "다음 내용이 궁금하다",
        "example": "続きが気になって眠れなかった。"
      },
      {
        "word": "サブスク",
        "reading": "サブスク",
        "meaning": "구독 서비스",
        "example": "サブスクを複数契約している。"
      },
      {
        "word": "おすすめ",
        "reading": "おすすめ",
        "meaning": "추천",
        "example": "最近のおすすめドラマを教えて。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "昨日も夜更かしして、ドラマ見てたよ。",
        "translation": "어제도 밤새워서 드라마 봤어."
      },
      {
        "speaker": "B",
        "text": "また一気見したの？何のドラマ？",
        "translation": "또 몰아봤어? 무슨 드라마?"
      },
      {
        "speaker": "A",
        "text": "Netflixの韓国ドラマ。続きが気になって止められなかった。",
        "translation": "넷플릭스 한국 드라마. 다음 내용이 궁금해서 멈출 수가 없었어."
      },
      {
        "speaker": "B",
        "text": "わかる！私もハマったことある。でも翌日つらくない？",
        "translation": "알아! 나도 빠진 적 있어. 근데 다음 날 힘들지 않아?"
      },
      {
        "speaker": "A",
        "text": "つらいけど、やめられないんだよね。",
        "translation": "힘들지만 멈출 수가 없어."
      },
      {
        "speaker": "B",
        "text": "じゃあ今度一緒に見よう！おすすめ教えて。",
        "translation": "그럼 다음에 같이 보자! 추천해줘."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てしまった",
        "function": "의도치 않은 결과 표현",
        "example": "気づいたら3時間見てしまった。",
        "translation": "정신 차려보니 3시간을 봐버렸다."
      },
      {
        "pattern": "〜て止められない",
        "function": "멈출 수 없음 표현",
        "example": "続きが気になって止められない。",
        "translation": "다음 내용이 궁금해서 멈출 수 없다."
      },
      {
        "pattern": "〜たことがある",
        "function": "경험 표현",
        "example": "このドラマにハマったことがある。",
        "translation": "이 드라마에 빠진 적이 있다."
      }
    ],
    "writingMission": {
      "prompt": "최근 인상 깊었던 드라마나 영화를 소개하는 글을 써보세요.",
      "promptJp": "最近印象に残ったドラマや映画を紹介する文を書いてみましょう。",
      "minChars": 80,
      "hint": "〜がおすすめです、〜という点が良かった 등을 활용해 보세요."
    },
    "teacherNote": "「一気見」「ハマる」는 현대 일본어에서 매우 자주 쓰이는 표현. 스트리밍 문화 관련 어휘를 함께 익히기 좋은 주제.",
    "tags": [
      "미디어",
      "엔터테인먼트",
      "현대생활"
    ]
  },
  {
    "id": "media-anime",
    "titleKo": "애니메이션의 세계",
    "titleJp": "アニメの世界",
    "level": "N3",
    "category": "미디어",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "좋아하는 애니메이션이 있나요?",
        "jp": "好きなアニメはありますか。"
      },
      {
        "ko": "애니메이션을 언제부터 보기 시작했나요?",
        "jp": "アニメをいつから見始めましたか。"
      },
      {
        "ko": "애니메이션을 일본어 공부에 활용한 적 있나요?",
        "jp": "アニメを日本語の勉強に活用したことはありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "애니메이션이 일본 문화를 이해하는 데 도움이 된다고 생각하나요?",
        "jp": "アニメが日本文化を理解するのに役立つと思いますか。"
      },
      {
        "ko": "애니메이션의 언어와 실제 일본어는 어떻게 다른가요?",
        "jp": "アニメの言葉と実際の日本語はどう違いますか。"
      },
      {
        "ko": "애니메이션이 세계에서 인기 있는 이유는 무엇이라고 생각하나요?",
        "jp": "アニメが世界で人気の理由は何だと思いますか。"
      }
    ],
    "roleplay": {
      "situation": "애니메이션 팬끼리 좋아하는 작품을 소개하는 상황",
      "roleA": "자신이 가장 좋아하는 애니메이션을 소개해 보세요.",
      "roleB": "처음 듣는 작품인 척하며 질문해 보세요."
    },
    "expressions": [
      {
        "word": "アニオタ",
        "reading": "アニオタ",
        "meaning": "애니메이션 오타쿠",
        "example": "彼はアニオタで毎週新作をチェックしている。"
      },
      {
        "word": "聖地巡礼",
        "reading": "せいちじゅんれい",
        "meaning": "성지순례(작품 배경지 방문)",
        "example": "好きなアニメの聖地巡礼に行った。"
      },
      {
        "word": "吹き替え",
        "reading": "ふきかえ",
        "meaning": "더빙",
        "example": "吹き替えより字幕版が好きだ。"
      },
      {
        "word": "原作",
        "reading": "げんさく",
        "meaning": "원작",
        "example": "原作のマンガも読んでみた。"
      },
      {
        "word": "作画崩壊",
        "reading": "さくがほうかい",
        "meaning": "작화 붕괴",
        "example": "作画崩壊で話題になったシーンがある。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、鬼滅の刃にハマってるんだけど。",
        "translation": "요즘 귀멸의 칼날에 빠져 있는데."
      },
      {
        "speaker": "B",
        "text": "え、今更？もう全部見たの？",
        "translation": "어, 이제야? 다 봤어?"
      },
      {
        "speaker": "A",
        "text": "まだ途中。でも作画がすごくてびっくりした。",
        "translation": "아직 중간이야. 근데 작화가 너무 대단해서 놀랐어."
      },
      {
        "speaker": "B",
        "text": "そうだよね。聖地巡礼で浅草に行ったよ。",
        "translation": "맞아. 성지순례로 아사쿠사에 갔어."
      },
      {
        "speaker": "A",
        "text": "すごい！原作のマンガも読んだ？",
        "translation": "대단해! 원작 만화도 읽었어?"
      },
      {
        "speaker": "B",
        "text": "もちろん。アニメより細かい描写があっていいよ。",
        "translation": "물론이지. 애니보다 세밀한 묘사가 있어서 좋아."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜にハマっている",
        "function": "빠져있는 것 표현",
        "example": "最近このアニメにハマっている。",
        "translation": "요즘 이 애니메이션에 빠져 있다."
      },
      {
        "pattern": "〜より〜のほうが",
        "function": "비교 표현",
        "example": "吹き替えより字幕のほうが好きだ。",
        "translation": "더빙보다 자막이 더 좋다."
      },
      {
        "pattern": "〜てびっくりした",
        "function": "놀람 표현",
        "example": "作画のクオリティが高くてびっくりした。",
        "translation": "작화 퀄리티가 높아서 놀랐다."
      }
    ],
    "writingMission": {
      "prompt": "좋아하는 애니메이션을 추천하는 글을 써보세요.",
      "promptJp": "好きなアニメを紹介・おすすめする文を書いてみましょう。",
      "minChars": 80,
      "hint": "〜にハマっている、〜がおすすめです 등을 활용해 보세요."
    },
    "teacherNote": "애니메이션은 학습자 관심도가 높은 주제. 「聖地巡礼」처럼 애니 팬덤 특유의 어휘를 소개하면 흥미를 높일 수 있음.",
    "tags": [
      "미디어",
      "애니메이션",
      "일본문화"
    ]
  },
  {
    "id": "media-youtube",
    "titleKo": "유튜브와 크리에이터",
    "titleJp": "YouTubeとクリエイター",
    "level": "N4",
    "category": "미디어",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "유튜브를 하루에 얼마나 보나요?",
        "jp": "YouTubeを一日どのくらい見ますか。"
      },
      {
        "ko": "좋아하는 유튜버가 있나요?",
        "jp": "好きなYouTuberはいますか。"
      },
      {
        "ko": "직접 유튜브를 해보고 싶다고 생각한 적 있나요?",
        "jp": "自分でYouTubeをやってみたいと思ったことはありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "유튜버가 직업으로서 어떻게 생각하나요?",
        "jp": "YouTuberという職業についてどう思いますか。"
      },
      {
        "ko": "유튜브 알고리즘이 우리의 생각에 영향을 미친다고 생각하나요?",
        "jp": "YouTubeのアルゴリズムが私たちの考えに影響すると思いますか。"
      },
      {
        "ko": "어린이 유튜버에 대해 어떻게 생각하나요?",
        "jp": "子供のYouTuberについてどう思いますか。"
      }
    ],
    "roleplay": {
      "situation": "유튜브 채널을 시작하려는 친구를 돕는 상황",
      "roleA": "어떤 채널을 만들지 아이디어를 제안해 보세요.",
      "roleB": "걱정되는 점을 말하고 조언을 구해 보세요."
    },
    "expressions": [
      {
        "word": "チャンネル登録",
        "reading": "チャンネルとうろく",
        "meaning": "채널 구독",
        "example": "チャンネル登録よろしくお願いします。"
      },
      {
        "word": "再生回数",
        "reading": "さいせいかいすう",
        "meaning": "조회수",
        "example": "再生回数が100万を超えた。"
      },
      {
        "word": "炎上",
        "reading": "えんじょう",
        "meaning": "논란, 불매운동",
        "example": "発言が炎上してしまった。"
      },
      {
        "word": "コラボ",
        "reading": "コラボ",
        "meaning": "콜라보레이션",
        "example": "人気YouTuberとコラボした。"
      },
      {
        "word": "サムネ",
        "reading": "サムネ",
        "meaning": "썸네일",
        "example": "サムネが大事でクリック率が変わる。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、料理系のYouTubeチャンネル始めようかなと思って。",
        "translation": "요즘 요리 유튜브 채널 시작해볼까 생각 중이야."
      },
      {
        "speaker": "B",
        "text": "いいね！でも再生回数が伸びるまで大変じゃない？",
        "translation": "좋은데! 근데 조회수 오를 때까지 힘들지 않아?"
      },
      {
        "speaker": "A",
        "text": "そうだよね。サムネとかタイトルも大事らしいし。",
        "translation": "그렇지. 썸네일이나 제목도 중요하다고 하더라고."
      },
      {
        "speaker": "B",
        "text": "炎上しないように気をつけてね。",
        "translation": "논란 안 생기도록 조심해."
      },
      {
        "speaker": "A",
        "text": "うん。まずはチャンネル登録してくれる？",
        "translation": "응. 일단 구독해줄 수 있어?"
      },
      {
        "speaker": "B",
        "text": "もちろん！応援してるよ。",
        "translation": "물론이지! 응원할게."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ようかなと思って",
        "function": "막연한 의향 표현",
        "example": "チャンネルを始めようかなと思っている。",
        "translation": "채널을 시작해볼까 생각 중이다."
      },
      {
        "pattern": "〜らしい",
        "function": "전문 정보 전달",
        "example": "サムネが大事らしい。",
        "translation": "썸네일이 중요하다고 하더라."
      },
      {
        "pattern": "〜ないように",
        "function": "주의 표현",
        "example": "炎上しないように気をつけて。",
        "translation": "논란 안 생기도록 조심해."
      }
    ],
    "writingMission": {
      "prompt": "만들고 싶은 유튜브 채널 기획을 일본어로 써보세요.",
      "promptJp": "作りたいYouTubeチャンネルの企画を日本語で書いてみましょう。",
      "minChars": 80,
      "hint": "〜について紹介するチャンネルを作りたい 등을 활용해 보세요."
    },
    "teacherNote": "유튜브 관련 어휘는 현대 일본어에서 필수적. 「炎上」는 인터넷 문화 특유의 표현으로 뉘앙스 설명 필요.",
    "tags": [
      "미디어",
      "SNS",
      "크리에이터"
    ]
  },
  {
    "id": "media-game",
    "titleKo": "게임과 e스포츠",
    "titleJp": "ゲームとeスポーツ",
    "level": "N3",
    "category": "미디어",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "게임을 즐기나요? 어떤 장르를 좋아하나요?",
        "jp": "ゲームを楽しみますか。どんなジャンルが好きですか。"
      },
      {
        "ko": "게임을 하면서 일본어를 배운 경험이 있나요?",
        "jp": "ゲームをしながら日本語を学んだ経験はありますか。"
      },
      {
        "ko": "e스포츠를 스포츠로 인정해야 한다고 생각하나요?",
        "jp": "eスポーツをスポーツとして認めるべきだと思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "게임 중독은 사회 문제라고 생각하나요?",
        "jp": "ゲーム依存症は社会問題だと思いますか。"
      },
      {
        "ko": "게임이 교육에 활용될 수 있다고 생각하나요?",
        "jp": "ゲームが教育に活用できると思いますか。"
      },
      {
        "ko": "프로 게이머는 일반 스포츠 선수와 동등한 대우를 받아야 할까요?",
        "jp": "プロゲーマーは一般のスポーツ選手と同等の待遇を受けるべきでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "게임을 좋아하는 사람과 게임에 관심 없는 사람의 대화",
      "roleA": "게임의 좋은 점을 설명하고 상대방을 설득해 보세요.",
      "roleB": "게임에 대한 부정적인 시각을 가지고 반론해 보세요."
    },
    "expressions": [
      {
        "word": "廃人",
        "reading": "はいじん",
        "meaning": "�廃人 (게임 폐인)",
        "example": "ゲーム廃人になってしまった。"
      },
      {
        "word": "課金",
        "reading": "かきん",
        "meaning": "과금",
        "example": "課金しすぎて反省している。"
      },
      {
        "word": "レベル上げ",
        "reading": "レベルあげ",
        "meaning": "레벨업",
        "example": "レベル上げに時間がかかる。"
      },
      {
        "word": "オンライン対戦",
        "reading": "オンラインたいせん",
        "meaning": "온라인 대전",
        "example": "オンライン対戦で世界中の人と戦える。"
      },
      {
        "word": "実況",
        "reading": "じっきょう",
        "meaning": "실황 방송",
        "example": "ゲーム実況が人気のコンテンツになっている。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近eスポーツって盛り上がってるよね。",
        "translation": "요즘 e스포츠가 많이 뜨고 있지."
      },
      {
        "speaker": "B",
        "text": "そうだね。でもゲームってスポーツって言えるの？",
        "translation": "그렇지. 근데 게임을 스포츠라고 할 수 있어?"
      },
      {
        "speaker": "A",
        "text": "集中力とか反射神経が必要だから、スポーツだと思うけど。",
        "translation": "집중력이나 반사신경이 필요하니까 스포츠라고 생각하는데."
      },
      {
        "speaker": "B",
        "text": "でも体を動かさないじゃん。課金問題とかもあるし。",
        "translation": "근데 몸을 움직이지 않잖아. 과금 문제도 있고."
      },
      {
        "speaker": "A",
        "text": "確かに。でもプロゲーマーの練習量はすごいよ。",
        "translation": "맞아. 근데 프로 게이머의 연습량은 엄청나."
      },
      {
        "speaker": "B",
        "text": "それは認める。オリンピック種目になる日も来るかもね。",
        "translation": "그건 인정해. 올림픽 종목이 되는 날도 올지도."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜って言える？",
        "function": "정의/분류 의문 표현",
        "example": "ゲームってスポーツって言える？",
        "translation": "게임을 스포츠라고 할 수 있어?"
      },
      {
        "pattern": "〜から〜と思う",
        "function": "이유를 들어 의견 말하기",
        "example": "集中力が必要だからスポーツだと思う。",
        "translation": "집중력이 필요하니까 스포츠라고 생각한다."
      },
      {
        "pattern": "〜かもね",
        "function": "가능성 추측 (캐주얼)",
        "example": "オリンピック種目になる日も来るかもね。",
        "translation": "올림픽 종목이 되는 날도 올지도 모르지."
      }
    ],
    "writingMission": {
      "prompt": "게임에 대한 자신의 의견을 찬성 또는 반대 입장에서 써보세요.",
      "promptJp": "ゲームについて賛成または反対の立場から意見を書いてみましょう。",
      "minChars": 100,
      "hint": "〜と思う、〜から、〜しかし 등을 활용해 보세요."
    },
    "teacherNote": "e스포츠는 찬반 토론이 가능한 주제. 「課金」「廃人」 등 게임 특유의 어휘를 자연스럽게 익힐 수 있음.",
    "tags": [
      "미디어",
      "게임",
      "토론"
    ]
  },
  {
    "id": "media-webtoon",
    "titleKo": "웹툰과 만화",
    "titleJp": "ウェブトゥーンとマンガ",
    "level": "N4",
    "category": "미디어",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "만화나 웹툰을 즐겨 보나요?",
        "jp": "マンガやウェブトゥーンをよく読みますか。"
      },
      {
        "ko": "좋아하는 장르는 무엇인가요?",
        "jp": "好きなジャンルは何ですか。"
      },
      {
        "ko": "일본 만화와 한국 웹툰의 차이를 느낀 적 있나요?",
        "jp": "日本のマンガと韓国のウェブトゥーンの違いを感じたことはありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "만화가 문학의 한 형태라고 생각하나요?",
        "jp": "マンガは文学の一形態だと思いますか。"
      },
      {
        "ko": "디지털 만화가 종이 만화를 대체할 것이라고 생각하나요?",
        "jp": "デジタルマンガが紙のマンガに取って代わると思いますか。"
      },
      {
        "ko": "만화 원작의 영화나 드라마 중 원작을 뛰어넘은 작품이 있다고 생각하나요?",
        "jp": "マンガ原作の映画やドラマで原作を超えた作品があると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "서점에서 만화를 추천해 주는 상황",
      "roleA": "점원 역할로 손님에게 만화를 추천해 보세요.",
      "roleB": "손님 역할로 취향을 설명하고 추천을 받아 보세요."
    },
    "expressions": [
      {
        "word": "コマ割り",
        "reading": "コマわり",
        "meaning": "컷 구성",
        "example": "このマンガはコマ割りが独特だ。"
      },
      {
        "word": "続巻",
        "reading": "ぞっかん",
        "meaning": "속권, 다음 권",
        "example": "続巻が出るのを楽しみにしている。"
      },
      {
        "word": "打ち切り",
        "reading": "うちきり",
        "meaning": "연재 중단",
        "example": "人気がなくて打ち切りになった。"
      },
      {
        "word": "聖地",
        "reading": "せいち",
        "meaning": "성지(팬들이 방문하는 곳)",
        "example": "このマンガの聖地を巡礼した。"
      },
      {
        "word": "単行本",
        "reading": "たんこうぼん",
        "meaning": "단행본",
        "example": "連載が終わったら単行本を買う。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、韓国のウェブトゥーンにハマってるんだ。",
        "translation": "요즘 한국 웹툰에 빠져 있어."
      },
      {
        "speaker": "B",
        "text": "へえ、日本のマンガとどう違うの？",
        "translation": "오, 일본 만화랑 어떻게 달라?"
      },
      {
        "speaker": "A",
        "text": "縦スクロールで読むから、スマホで読みやすいんだよ。",
        "translation": "세로 스크롤로 읽으니까 스마트폰으로 읽기 편해."
      },
      {
        "speaker": "B",
        "text": "なるほど。コマ割りも違うんだね。",
        "translation": "그렇구나. 컷 구성도 다르네."
      },
      {
        "speaker": "A",
        "text": "うん。でも日本のマンガも単行本で集めるのが好き。",
        "translation": "응. 근데 일본 만화도 단행본으로 모으는 게 좋아."
      },
      {
        "speaker": "B",
        "text": "わかる！紙のマンガには独特の良さがあるよね。",
        "translation": "알아! 종이 만화만의 독특한 좋은 점이 있지."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜から〜やすい",
        "function": "이유와 특성 설명",
        "example": "縦スクロールだからスマホで読みやすい。",
        "translation": "세로 스크롤이라 스마트폰으로 읽기 편하다."
      },
      {
        "pattern": "〜には〜がある",
        "function": "특성 강조",
        "example": "紙のマンガには独特の良さがある。",
        "translation": "종이 만화에는 독특한 좋은 점이 있다."
      },
      {
        "pattern": "〜にハマっている",
        "function": "현재 빠져있는 것 표현",
        "example": "ウェブトゥーンにハマっている。",
        "translation": "웹툰에 빠져 있다."
      }
    ],
    "writingMission": {
      "prompt": "좋아하는 만화나 웹툰을 소개하는 글을 써보세요.",
      "promptJp": "好きなマンガやウェブトゥーンを紹介する文を書いてみましょう。",
      "minChars": 80,
      "hint": "〜というマンガは〜が面白い 등을 활용해 보세요."
    },
    "teacherNote": "웹툰은 한국과 일본 양쪽 학습자 모두에게 친숙한 주제. 「打ち切り」「続巻」 등 만화 특유의 어휘를 자연스럽게 익힐 수 있음.",
    "tags": [
      "미디어",
      "만화",
      "한일비교"
    ]
  },
  {
    "id": "media-podcast",
    "titleKo": "팟캐스트와 라디오",
    "titleJp": "ポッドキャストとラジオ",
    "level": "N3",
    "category": "미디어",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "팟캐스트를 들어본 적 있나요?",
        "jp": "ポッドキャストを聞いたことはありますか。"
      },
      {
        "ko": "어떤 상황에서 팟캐스트를 듣나요?",
        "jp": "どんな状況でポッドキャストを聞きますか。"
      },
      {
        "ko": "라디오와 팟캐스트 중 어느 쪽을 더 좋아하나요?",
        "jp": "ラジオとポッドキャスト、どちらが好きですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "팟캐스트가 일본어 공부에 효과적이라고 생각하나요?",
        "jp": "ポッドキャストが日本語の勉強に効果的だと思いますか。"
      },
      {
        "ko": "영상 없이 소리만으로 정보를 얻는 것의 장단점은 무엇인가요?",
        "jp": "映像なしで音だけで情報を得ることのメリット・デメリットは何ですか。"
      },
      {
        "ko": "앞으로 팟캐스트가 더 인기를 끌 것이라고 생각하나요?",
        "jp": "これからポッドキャストがもっと人気になると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "팟캐스트 방송을 진행하는 상황",
      "roleA": "진행자 역할로 오늘의 주제를 소개하고 이야기를 이끌어 보세요.",
      "roleB": "게스트 역할로 자신의 경험을 이야기해 보세요."
    },
    "expressions": [
      {
        "word": "ながら聴き",
        "reading": "ながらきき",
        "meaning": "~하면서 듣기",
        "example": "通勤中にながら聴きしている。"
      },
      {
        "word": "エピソード",
        "reading": "エピソード",
        "meaning": "에피소드(회차)",
        "example": "このポッドキャストのエピソードを全部聞いた。"
      },
      {
        "word": "倍速",
        "reading": "ばいそく",
        "meaning": "배속",
        "example": "1.5倍速で聞くと効率がいい。"
      },
      {
        "word": "耳が肥える",
        "reading": "みみがこえる",
        "meaning": "귀가 트이다",
        "example": "毎日聞いていると耳が肥えてくる。"
      },
      {
        "word": "聞き流す",
        "reading": "ききながす",
        "meaning": "흘려듣다",
        "example": "BGMとして聞き流すのもいい。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、日本語のポッドキャスト聞いてるんだ。",
        "translation": "요즘 일본어 팟캐스트 듣고 있어."
      },
      {
        "speaker": "B",
        "text": "どんな内容のやつ？",
        "translation": "어떤 내용이야?"
      },
      {
        "speaker": "A",
        "text": "ニュース系と雑談系を混ぜて。通勤中にながら聴きしてる。",
        "translation": "뉴스 계열이랑 잡담 계열을 섞어서. 출퇴근 중에 들으면서 듣고 있어."
      },
      {
        "speaker": "B",
        "text": "いいね。倍速で聞いてる？",
        "translation": "좋네. 배속으로 들어?"
      },
      {
        "speaker": "A",
        "text": "最初は1倍速で、慣れてきたら1.5倍速にした。",
        "translation": "처음엔 1배속으로, 익숙해지니까 1.5배속으로 했어."
      },
      {
        "speaker": "B",
        "text": "確かに。毎日続けると耳が肥えてくるよね。",
        "translation": "맞아. 매일 계속하면 귀가 트이지."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ながら〜する",
        "function": "동시 동작 표현",
        "example": "通勤しながらポッドキャストを聞く。",
        "translation": "출퇴근하면서 팟캐스트를 듣는다."
      },
      {
        "pattern": "〜てくる",
        "function": "점진적 변화 표현",
        "example": "毎日聞いていると耳が肥えてくる。",
        "translation": "매일 들으면 귀가 점점 트인다."
      },
      {
        "pattern": "〜と〜",
        "function": "조건과 결과 표현",
        "example": "慣れてきたら倍速にするといい。",
        "translation": "익숙해지면 배속으로 하면 좋다."
      }
    ],
    "writingMission": {
      "prompt": "팟캐스트나 라디오를 활용한 일본어 공부법을 소개해 보세요.",
      "promptJp": "ポッドキャストやラジオを使った日本語の勉強法を紹介してみましょう。",
      "minChars": 80,
      "hint": "〜ながら、〜と効果的だ 등을 활용해 보세요."
    },
    "teacherNote": "팟캐스트는 실제 일본어 학습에 많이 활용되는 도구. 「ながら聴き」「倍速」 등 현대적인 어휘를 익힐 수 있음.",
    "tags": [
      "미디어",
      "일본어학습",
      "오디오"
    ]
  },
  {
    "id": "media-sns",
    "titleKo": "SNS와 온라인 소통",
    "titleJp": "SNSとオンラインコミュニケーション",
    "level": "N3",
    "category": "미디어",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "어떤 SNS를 주로 사용하나요?",
        "jp": "どんなSNSを主に使っていますか。"
      },
      {
        "ko": "SNS에 하루에 얼마나 시간을 쓰나요?",
        "jp": "SNSに一日どのくらい時間を使いますか。"
      },
      {
        "ko": "SNS에서 팔로워 수가 중요하다고 생각하나요?",
        "jp": "SNSのフォロワー数は大事だと思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "SNS가 인간관계에 미치는 영향은 긍정적인가요, 부정적인가요?",
        "jp": "SNSが人間関係に与える影響はポジティブですか、ネガティブですか。"
      },
      {
        "ko": "SNS 없이 생활할 수 있다고 생각하나요?",
        "jp": "SNSなしで生活できると思いますか。"
      },
      {
        "ko": "SNS에서의 자신과 실제 자신은 다른가요?",
        "jp": "SNS上の自分と実際の自分は違いますか。"
      }
    ],
    "roleplay": {
      "situation": "SNS 사용에 대해 의견이 다른 두 사람의 대화",
      "roleA": "SNS의 긍정적인 면을 강조해 보세요.",
      "roleB": "SNS의 부정적인 면을 지적해 보세요."
    },
    "expressions": [
      {
        "word": "フォロワー",
        "reading": "フォロワー",
        "meaning": "팔로워",
        "example": "フォロワーが増えてうれしい。"
      },
      {
        "word": "いいね",
        "reading": "いいね",
        "meaning": "좋아요",
        "example": "投稿にいいねがたくさんついた。"
      },
      {
        "word": "バズる",
        "reading": "バズる",
        "meaning": "바이럴되다",
        "example": "この投稿がバズって驚いた。"
      },
      {
        "word": "鍵アカ",
        "reading": "かぎアカ",
        "meaning": "비공개 계정",
        "example": "プライベートは鍵アカで管理している。"
      },
      {
        "word": "リア充",
        "reading": "リアじゅう",
        "meaning": "현실이 충실한 사람",
        "example": "SNSを見るとリア充ばかりに見える。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近SNS疲れを感じてる。",
        "translation": "요즘 SNS 피로감을 느끼고 있어."
      },
      {
        "speaker": "B",
        "text": "わかる。みんなのリア充投稿を見てると疲れるよね。",
        "translation": "알아. 다들 행복한 일상 올리는 거 보면 피곤하지."
      },
      {
        "speaker": "A",
        "text": "そうそう。でもやめられないんだよね。",
        "translation": "맞아. 근데 못 끊겠어."
      },
      {
        "speaker": "B",
        "text": "たまにデジタルデトックスするといいよ。",
        "translation": "가끔 디지털 디톡스 하면 좋아."
      },
      {
        "speaker": "A",
        "text": "試してみたけど、バズった投稿が気になって結局見ちゃった。",
        "translation": "해봤는데 바이럴된 게시물이 신경 쓰여서 결국 봐버렸어."
      },
      {
        "speaker": "B",
        "text": "あるある。鍵アカにしてみるのもいいかも。",
        "translation": "그런 거 있지. 비공개 계정으로 해보는 것도 좋을지도."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜を感じる",
        "function": "감정/상태 인식 표현",
        "example": "SNS疲れを感じている。",
        "translation": "SNS 피로감을 느끼고 있다."
      },
      {
        "pattern": "〜といいよ",
        "function": "가벼운 조언",
        "example": "デジタルデトックスするといいよ。",
        "translation": "디지털 디톡스 하면 좋아."
      },
      {
        "pattern": "〜てみたけど〜ちゃった",
        "function": "시도 후 의도치 않은 결과",
        "example": "やめてみたけど、結局見ちゃった。",
        "translation": "끊어보려 했는데 결국 봐버렸다."
      }
    ],
    "writingMission": {
      "prompt": "SNS에 대한 자신의 생각을 장점과 단점을 포함해서 써보세요.",
      "promptJp": "SNSについてメリットとデメリットを含めて自分の考えを書いてみましょう。",
      "minChars": 100,
      "hint": "〜というメリットがある、一方で〜というデメリットもある 등을 활용해 보세요."
    },
    "teacherNote": "SNS는 학습자 모두가 일상적으로 사용하는 주제. 「バズる」「鍵アカ」 등 인터넷 슬랭을 자연스럽게 익힐 수 있음.",
    "tags": [
      "미디어",
      "SNS",
      "현대생활"
    ]
  },
  {
    "id": "media-news",
    "titleKo": "뉴스 소비 방식",
    "titleJp": "ニュースの消費スタイル",
    "level": "N2",
    "category": "미디어",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 30,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "주로 어디서 뉴스를 접하나요?",
        "jp": "主にどこでニュースを見ますか。"
      },
      {
        "ko": "하루에 얼마나 뉴스를 보나요?",
        "jp": "一日にどのくらいニュースを見ますか。"
      },
      {
        "ko": "가장 관심 있는 뉴스 분야는 무엇인가요?",
        "jp": "最も関心のあるニュース分野は何ですか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "SNS를 통한 뉴스 소비의 문제점은 무엇이라고 생각하나요?",
        "jp": "SNSを通じたニュース消費の問題点は何だと思いますか。"
      },
      {
        "ko": "가짜 뉴스를 어떻게 구별하나요?",
        "jp": "フェイクニュースをどのように見分けますか。"
      },
      {
        "ko": "미디어 리터러시 교육이 필요하다고 생각하나요?",
        "jp": "メディアリテラシー教育が必要だと思いますか。"
      }
    ],
    "roleplay": {
      "situation": "뉴스의 신뢰성에 대해 토론하는 상황",
      "roleA": "전통 미디어(신문, TV)의 신뢰성을 옹호해 보세요.",
      "roleB": "SNS와 인터넷 미디어의 장점을 주장해 보세요."
    },
    "expressions": [
      {
        "word": "フェイクニュース",
        "reading": "フェイクニュース",
        "meaning": "가짜 뉴스",
        "example": "フェイクニュースの見分け方を学ぶ必要がある。"
      },
      {
        "word": "メディアリテラシー",
        "reading": "メディアリテラシー",
        "meaning": "미디어 리터러시",
        "example": "メディアリテラシーを高めることが大切だ。"
      },
      {
        "word": "情報過多",
        "reading": "じょうほうかた",
        "meaning": "정보 과잉",
        "example": "情報過多の時代に生きている。"
      },
      {
        "word": "一次情報",
        "reading": "いちじじょうほう",
        "meaning": "1차 정보",
        "example": "一次情報を確認することが重要だ。"
      },
      {
        "word": "偏向報道",
        "reading": "へんこうほうどう",
        "meaning": "편향 보도",
        "example": "偏向報道に注意する必要がある。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、新聞を読む人が減っているそうですね。",
        "translation": "요즘 신문을 읽는 사람이 줄고 있다고 하더군요."
      },
      {
        "speaker": "B",
        "text": "そうですね。SNSでニュースを見る人が増えましたから。",
        "translation": "그렇죠. SNS로 뉴스를 보는 사람이 늘었으니까요."
      },
      {
        "speaker": "A",
        "text": "でも、フェイクニュースの問題もありますよね。",
        "translation": "근데 가짜 뉴스 문제도 있잖아요."
      },
      {
        "speaker": "B",
        "text": "確かに。一次情報を確認する習慣が大切だと思います。",
        "translation": "맞아요. 1차 정보를 확인하는 습관이 중요하다고 생각해요."
      },
      {
        "speaker": "A",
        "text": "メディアリテラシー教育が必要ですね。",
        "translation": "미디어 리터러시 교육이 필요하네요."
      },
      {
        "speaker": "B",
        "text": "特に若い世代に対して、情報の見分け方を教えるべきだと思います。",
        "translation": "특히 젊은 세대에게 정보 구별법을 가르쳐야 한다고 생각해요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜そうですね",
        "function": "정보 공유 및 동의",
        "example": "新聞を読む人が減っているそうですね。",
        "translation": "신문을 읽는 사람이 줄고 있다고 하더군요."
      },
      {
        "pattern": "〜と思います",
        "function": "정중한 의견 표현",
        "example": "メディアリテラシーが大切だと思います。",
        "translation": "미디어 리터러시가 중요하다고 생각합니다."
      },
      {
        "pattern": "〜べきだと思います",
        "function": "당위성 표현",
        "example": "情報の見分け方を教えるべきだと思います。",
        "translation": "정보 구별법을 가르쳐야 한다고 생각합니다."
      }
    ],
    "writingMission": {
      "prompt": "이상적인 뉴스 소비 방식에 대한 자신의 의견을 써보세요.",
      "promptJp": "理想的なニュースの消費スタイルについて自分の意見を書いてみましょう。",
      "minChars": 120,
      "hint": "〜と思います、〜ことが大切です 등을 활용해 보세요."
    },
    "teacherNote": "뉴스 소비는 미디어 리터러시와 연결되는 중요한 주제. 「フェイクニュース」「メディアリテラシー」 등 시사 어휘를 익힐 수 있음.",
    "tags": [
      "미디어",
      "뉴스",
      "사회"
    ]
  },
  {
    "id": "media-vtuber",
    "titleKo": "버추얼 유튜버",
    "titleJp": "VTuber（バーチャルYouTuber）",
    "level": "N3",
    "category": "미디어",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "VTuber를 알고 있나요? 본 적 있나요?",
        "jp": "VTuberを知っていますか。見たことはありますか。"
      },
      {
        "ko": "가상 캐릭터가 방송하는 것에 대해 어떻게 생각하나요?",
        "jp": "バーチャルキャラクターが配信することについてどう思いますか。"
      },
      {
        "ko": "VTuber의 어떤 점이 인기 있다고 생각하나요?",
        "jp": "VTuberのどんな点が人気だと思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "VTuber와 일반 유튜버의 차이는 무엇이라고 생각하나요?",
        "jp": "VTuberと普通のYouTuberの違いは何だと思いますか。"
      },
      {
        "ko": "VTuber에게 감정적으로 애착을 갖는 것이 건강하다고 생각하나요?",
        "jp": "VTuberに感情的な愛着を持つことは健全だと思いますか。"
      },
      {
        "ko": "VTuber 문화가 앞으로 어떻게 발전할 것이라고 생각하나요?",
        "jp": "VTuber文化はこれからどう発展すると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "VTuber를 처음 접한 친구에게 설명하는 상황",
      "roleA": "VTuber 팬으로서 열정적으로 설명해 보세요.",
      "roleB": "이해가 안 된다는 반응을 보이며 질문해 보세요."
    },
    "expressions": [
      {
        "word": "配信",
        "reading": "はいしん",
        "meaning": "방송, 스트리밍",
        "example": "毎日配信しているVTuberがいる。"
      },
      {
        "word": "中の人",
        "reading": "なかのひと",
        "meaning": "뒤에 있는 실제 사람",
        "example": "中の人が誰かは秘密だ。"
      },
      {
        "word": "推し",
        "reading": "おし",
        "meaning": "최애",
        "example": "推しのVTuberの配信を毎日見ている。"
      },
      {
        "word": "スパチャ",
        "reading": "スパチャ",
        "meaning": "슈퍼챗(후원)",
        "example": "スパチャを送ったら読んでもらえた。"
      },
      {
        "word": "デビュー",
        "reading": "デビュー",
        "meaning": "데뷔",
        "example": "新しいVTuberがデビューした。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近VTuberにハマってるんだよね。",
        "translation": "요즘 VTuber에 빠져 있어."
      },
      {
        "speaker": "B",
        "text": "VTuberって何？アニメキャラが配信するの？",
        "translation": "VTuber가 뭐야? 애니 캐릭터가 방송하는 거야?"
      },
      {
        "speaker": "A",
        "text": "そんな感じ。中の人は実在するけど、キャラクターで活動するんだ。",
        "translation": "그런 느낌. 뒤에 실제 사람이 있는데 캐릭터로 활동해."
      },
      {
        "speaker": "B",
        "text": "なんで顔を出さないの？",
        "translation": "왜 얼굴을 안 보여줘?"
      },
      {
        "speaker": "A",
        "text": "プライバシーのためとか、キャラクターとして楽しんでほしいからとか。",
        "translation": "프라이버시 때문이라거나, 캐릭터로 즐겨줬으면 해서라거나."
      },
      {
        "speaker": "B",
        "text": "なるほど。推しのVTuberのスパチャ送ったりするの？",
        "translation": "그렇구나. 최애 VTuber한테 슈퍼챗 보내기도 해?"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜って何？",
        "function": "정의 묻기 (캐주얼)",
        "example": "VTuberって何？",
        "translation": "VTuber가 뭐야?"
      },
      {
        "pattern": "〜けど〜んだ",
        "function": "역접 설명",
        "example": "中の人は実在するけど、キャラクターで活動するんだ。",
        "translation": "뒤에 실제 사람이 있는데 캐릭터로 활동해."
      },
      {
        "pattern": "〜てほしいから",
        "function": "바람의 이유 설명",
        "example": "キャラクターとして楽しんでほしいから。",
        "translation": "캐릭터로 즐겨줬으면 해서."
      }
    ],
    "writingMission": {
      "prompt": "VTuber 문화에 대한 자신의 생각을 써보세요.",
      "promptJp": "VTuber文化について自分の考えを書いてみましょう。",
      "minChars": 80,
      "hint": "〜と思う、〜という点が面白い 등을 활용해 보세요."
    },
    "teacherNote": "VTuber는 일본에서 특히 발달한 문화. 「推し」「スパチャ」 등 팬덤 어휘를 자연스럽게 익힐 수 있는 주제.",
    "tags": [
      "미디어",
      "VTuber",
      "인터넷문화"
    ]
  },
  {
    "id": "media-fandom",
    "titleKo": "팬덤 문화",
    "titleJp": "ファンダム文化",
    "level": "N3",
    "category": "미디어",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "좋아하는 아티스트나 캐릭터가 있나요?",
        "jp": "好きなアーティストやキャラクターはいますか。"
      },
      {
        "ko": "팬 활동을 해본 적 있나요?",
        "jp": "ファン活動をしたことはありますか。"
      },
      {
        "ko": "굿즈를 구매한 경험이 있나요?",
        "jp": "グッズを購入したことはありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "팬덤 문화가 경제에 미치는 영향은 무엇이라고 생각하나요?",
        "jp": "ファンダム文化が経済に与える影響は何だと思いますか。"
      },
      {
        "ko": "지나친 팬덤 활동의 문제점은 무엇인가요?",
        "jp": "行き過ぎたファン活動の問題点は何ですか。"
      },
      {
        "ko": "한국과 일본의 팬덤 문화에는 어떤 차이가 있나요?",
        "jp": "韓国と日本のファンダム文化にはどんな違いがありますか。"
      }
    ],
    "roleplay": {
      "situation": "콘서트 티켓을 구하려는 팬과 티켓 판매자의 대화",
      "roleA": "콘서트 티켓을 어떻게든 구하려는 열정적인 팬 역할을 해보세요.",
      "roleB": "티켓 판매 관련 안내를 해주는 직원 역할을 해보세요."
    },
    "expressions": [
      {
        "word": "推し活",
        "reading": "おしかつ",
        "meaning": "최애 활동",
        "example": "推し活にお金をかけすぎてしまった。"
      },
      {
        "word": "グッズ",
        "reading": "グッズ",
        "meaning": "굿즈",
        "example": "限定グッズを買うために並んだ。"
      },
      {
        "word": "オタ活",
        "reading": "オタかつ",
        "meaning": "오타쿠 활동",
        "example": "オタ活の費用が月に3万円になった。"
      },
      {
        "word": "ライブ参戦",
        "reading": "ライブさんせん",
        "meaning": "라이브 참전",
        "example": "初めてライブ参戦して感動した。"
      },
      {
        "word": "沼にはまる",
        "reading": "ぬまにはまる",
        "meaning": "늪에 빠지다(팬덤에 빠지다)",
        "example": "このグループの沼にはまってしまった。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "推し活って楽しいけど、お金がかかるよね。",
        "translation": "최애 활동이 즐겁긴 한데 돈이 많이 들지."
      },
      {
        "speaker": "B",
        "text": "わかる。グッズ集めてたら気づいたら部屋がいっぱいに。",
        "translation": "알아. 굿즈 모으다 보니 어느새 방이 가득 찼어."
      },
      {
        "speaker": "A",
        "text": "ライブ参戦もしたいけど、チケット取れないんだよね。",
        "translation": "라이브도 가고 싶은데 티켓을 못 구하겠어."
      },
      {
        "speaker": "B",
        "text": "沼にはまると抜け出せないよね。",
        "translation": "늪에 빠지면 못 빠져나오지."
      },
      {
        "speaker": "A",
        "text": "でも推しを応援することで元気もらってるから。",
        "translation": "근데 최애를 응원하면서 힘을 얻고 있으니까."
      },
      {
        "speaker": "B",
        "text": "それが推し活の醍醐味だよね。",
        "translation": "그게 최애 활동의 묘미지."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てたら気づいたら〜に",
        "function": "어느새 상태 변화 표현",
        "example": "集めてたら気づいたら部屋がいっぱいになった。",
        "translation": "모으다 보니 어느새 방이 가득 찼다."
      },
      {
        "pattern": "〜ことで〜もらう",
        "function": "행동을 통한 수혜 표현",
        "example": "推しを応援することで元気もらってる。",
        "translation": "최애를 응원함으로써 힘을 얻고 있다."
      },
      {
        "pattern": "〜のが〜の醍醐味",
        "function": "진수/묘미 표현",
        "example": "それが推し活の醍醐味だ。",
        "translation": "그게 최애 활동의 묘미다."
      }
    ],
    "writingMission": {
      "prompt": "팬덤 활동의 좋은 점과 주의해야 할 점을 써보세요.",
      "promptJp": "ファン活動の良い点と気をつけるべき点を書いてみましょう。",
      "minChars": 100,
      "hint": "〜という良い点がある、一方で〜に注意が必要だ 등을 활용해 보세요."
    },
    "teacherNote": "팬덤 문화는 한일 양국 모두에서 활발한 주제. 「推し活」「沼にはまる」 등 최근 유행어를 익힐 수 있음.",
    "tags": [
      "미디어",
      "팬덤",
      "엔터테인먼트"
    ]
  },
  {
    "id": "media-streaming-music",
    "titleKo": "음악 스트리밍",
    "titleJp": "音楽ストリーミング",
    "level": "N4",
    "category": "미디어",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "음악을 주로 어떻게 듣나요?",
        "jp": "音楽は主にどうやって聴きますか。"
      },
      {
        "ko": "좋아하는 음악 장르는 무엇인가요?",
        "jp": "好きな音楽ジャンルは何ですか。"
      },
      {
        "ko": "음악을 들으면서 하는 일이 있나요?",
        "jp": "音楽を聴きながらすることはありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "스트리밍 서비스가 음악 산업에 미치는 영향은 무엇인가요?",
        "jp": "ストリーミングサービスが音楽産業に与える影響は何ですか。"
      },
      {
        "ko": "CD나 레코드 등 물리적인 음악 매체의 가치가 있다고 생각하나요?",
        "jp": "CDやレコードなど物理的な音楽メディアに価値があると思いますか。"
      },
      {
        "ko": "AI가 만든 음악을 인간이 만든 음악과 동등하게 볼 수 있나요?",
        "jp": "AIが作った音楽を人間が作った音楽と同等に見ることができますか。"
      }
    ],
    "roleplay": {
      "situation": "음악 취향이 다른 두 사람이 플레이리스트를 공유하는 상황",
      "roleA": "자신이 좋아하는 음악을 소개하고 추천해 보세요.",
      "roleB": "상대방의 음악 취향에 관심을 보이며 반응해 보세요."
    },
    "expressions": [
      {
        "word": "プレイリスト",
        "reading": "プレイリスト",
        "meaning": "플레이리스트",
        "example": "気分に合わせてプレイリストを作っている。"
      },
      {
        "word": "シャッフル再生",
        "reading": "シャッフルさいせい",
        "meaning": "셔플 재생",
        "example": "シャッフル再生で知らない曲に出会えた。"
      },
      {
        "word": "リピート",
        "reading": "リピート",
        "meaning": "반복 재생",
        "example": "好きな曲をリピートして聴く。"
      },
      {
        "word": "サブスク",
        "reading": "サブスク",
        "meaning": "구독 서비스",
        "example": "音楽サブスクに入ってから便利になった。"
      },
      {
        "word": "耳コピ",
        "reading": "みみコピ",
        "meaning": "귀로 듣고 악보 없이 연주하기",
        "example": "好きな曲を耳コピしてみた。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、Spotifyで日本語の曲ばかり聴いてるよ。",
        "translation": "요즘 Spotify에서 일본어 노래만 듣고 있어."
      },
      {
        "speaker": "B",
        "text": "いいね！どんな曲？",
        "translation": "좋네! 어떤 노래?"
      },
      {
        "speaker": "A",
        "text": "J-POPとか、アニメソングとか。プレイリスト作って毎日聴いてる。",
        "translation": "J-POP이라거나, 애니송이라거나. 플레이리스트 만들어서 매일 듣고 있어."
      },
      {
        "speaker": "B",
        "text": "リスニング練習になるね。歌詞も覚えてる？",
        "translation": "리스닝 연습이 되겠다. 가사도 외워?"
      },
      {
        "speaker": "A",
        "text": "うん。リピートして聴いてたら自然に覚えちゃった。",
        "translation": "응. 반복해서 듣다 보니 자연스럽게 외워버렸어."
      },
      {
        "speaker": "B",
        "text": "それ、いい勉強法だね。おすすめ教えて！",
        "translation": "그거 좋은 공부법이네. 추천해줘!"
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜ばかり〜ている",
        "function": "특정 행동 집중 표현",
        "example": "日本語の曲ばかり聴いている。",
        "translation": "일본어 노래만 듣고 있다."
      },
      {
        "pattern": "〜てたら自然に〜ちゃった",
        "function": "자연스러운 결과",
        "example": "リピートして聴いてたら自然に覚えちゃった。",
        "translation": "반복해서 듣다 보니 자연스럽게 외워버렸다."
      },
      {
        "pattern": "〜になるね",
        "function": "결과/효과 인정",
        "example": "リスニング練習になるね。",
        "translation": "리스닝 연습이 되겠다."
      }
    ],
    "writingMission": {
      "prompt": "음악을 통한 일본어 공부법을 소개하는 글을 써보세요.",
      "promptJp": "音楽を通じた日本語の勉強法を紹介する文を書いてみましょう。",
      "minChars": 80,
      "hint": "〜ながら、〜ことで、〜ようになった 등을 활용해 보세요."
    },
    "teacherNote": "음악 스트리밍은 일본어 학습과 직접 연결되는 주제. 학습자들이 실제로 활용할 수 있는 방법을 함께 논의하면 효과적.",
    "tags": [
      "미디어",
      "음악",
      "일본어학습"
    ]
  },
  {
    "id": "trend-digital-detox-2",
    "titleKo": "디지털 디톡스",
    "titleJp": "デジタルデトックス",
    "level": "N3",
    "category": "트렌드",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "약간개인적",
    "warmupQuestions": [
      {
        "ko": "스마트폰 없이 하루를 보낸 적 있나요?",
        "jp": "スマートフォンなしで一日を過ごしたことはありますか。"
      },
      {
        "ko": "하루에 스마트폰을 얼마나 사용하나요?",
        "jp": "一日にスマートフォンをどのくらい使いますか。"
      },
      {
        "ko": "디지털 디톡스에 관심이 있나요?",
        "jp": "デジタルデトックスに興味がありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "디지털 기기 의존이 현대인에게 미치는 영향은 무엇인가요?",
        "jp": "デジタル機器への依存が現代人に与える影響は何ですか。"
      },
      {
        "ko": "디지털 디톡스를 실천하기 어려운 이유는 무엇인가요?",
        "jp": "デジタルデトックスを実践するのが難しい理由は何ですか。"
      },
      {
        "ko": "디지털과 아날로그의 균형을 어떻게 맞출 수 있을까요?",
        "jp": "デジタルとアナログのバランスをどう取ればいいでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "디지털 디톡스 캠프에서 처음 만난 두 사람의 대화",
      "roleA": "디지털 디톡스를 적극적으로 시도하는 사람 역할을 해보세요.",
      "roleB": "스마트폰 없이 지내는 것이 불안한 사람 역할을 해보세요."
    },
    "expressions": [
      {
        "word": "スマホ依存",
        "reading": "スマホいぞん",
        "meaning": "스마트폰 의존",
        "example": "スマホ依存を自覚している。"
      },
      {
        "word": "通知をオフ",
        "reading": "つうちをオフ",
        "meaning": "알림 끄기",
        "example": "集中するために通知をオフにした。"
      },
      {
        "word": "ながらスマホ",
        "reading": "ながらスマホ",
        "meaning": "~하면서 스마트폰 사용",
        "example": "ながらスマホは危険だ。"
      },
      {
        "word": "スクリーンタイム",
        "reading": "スクリーンタイム",
        "meaning": "스크린 타임",
        "example": "スクリーンタイムを確認して驚いた。"
      },
      {
        "word": "アナログ回帰",
        "reading": "アナログかいき",
        "meaning": "아날로그 회귀",
        "example": "アナログ回帰のトレンドが広がっている。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、スクリーンタイム見たら一日6時間使ってた。",
        "translation": "요즘 스크린 타임 봤더니 하루 6시간 쓰고 있었어."
      },
      {
        "speaker": "B",
        "text": "えっ、そんなに？私も似たようなもんかも。",
        "translation": "어, 그렇게나? 나도 비슷할지도."
      },
      {
        "speaker": "A",
        "text": "だからデジタルデトックスしようと思って。",
        "translation": "그래서 디지털 디톡스 해보려고."
      },
      {
        "speaker": "B",
        "text": "でもスマホなしって不安じゃない？",
        "translation": "근데 스마트폰 없으면 불안하지 않아?"
      },
      {
        "speaker": "A",
        "text": "最初は通知をオフにするだけでもいいと思う。",
        "translation": "처음엔 알림 끄는 것만 해도 좋을 것 같아."
      },
      {
        "speaker": "B",
        "text": "それくらいなら試せそう。アナログ回帰も流行ってるしね。",
        "translation": "그 정도라면 해볼 수 있을 것 같아. 아날로그 회귀도 유행하고 있고."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜たら〜てた",
        "function": "확인 후 발견 표현",
        "example": "スクリーンタイム見たら6時間使ってた。",
        "translation": "스크린 타임 봤더니 6시간 쓰고 있었다."
      },
      {
        "pattern": "〜だけでもいい",
        "function": "최소한의 제안",
        "example": "通知をオフにするだけでもいい。",
        "translation": "알림 끄는 것만 해도 좋다."
      },
      {
        "pattern": "〜くらいなら試せそう",
        "function": "가능성 평가",
        "example": "それくらいなら試せそう。",
        "translation": "그 정도라면 해볼 수 있을 것 같다."
      }
    ],
    "writingMission": {
      "prompt": "디지털 디톡스를 실천하기 위한 자신만의 방법을 써보세요.",
      "promptJp": "デジタルデトックスを実践するための自分なりの方法を書いてみましょう。",
      "minChars": 80,
      "hint": "〜ようにする、〜ことにした 등을 활용해 보세요."
    },
    "teacherNote": "디지털 디톡스는 현대인 모두가 공감하는 주제. 「スクリーンタイム」「ながらスマホ」 등 현대적 어휘를 익힐 수 있음.",
    "tags": [
      "트렌드",
      "디지털",
      "라이프스타일"
    ]
  },
  {
    "id": "trend-minimal-life",
    "titleKo": "미니멀 라이프",
    "titleJp": "ミニマルライフ",
    "level": "N3",
    "category": "트렌드",
    "activity": "페어대화",
    "style": "캐주얼",
    "duration": 20,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "집에 물건이 많은 편인가요?",
        "jp": "家に物が多い方ですか。"
      },
      {
        "ko": "미니멀리즘에 관심이 있나요?",
        "jp": "ミニマリズムに興味がありますか。"
      },
      {
        "ko": "최근에 물건을 버리거나 정리한 경험이 있나요?",
        "jp": "最近、物を捨てたり整理したりした経験はありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "물건을 줄이면 삶이 어떻게 달라질까요?",
        "jp": "物を減らすと生活はどう変わるでしょうか。"
      },
      {
        "ko": "미니멀리즘과 소비주의는 어떻게 공존할 수 있을까요?",
        "jp": "ミニマリズムと消費主義はどう共存できるでしょうか。"
      },
      {
        "ko": "물건에 집착하는 것은 왜일까요?",
        "jp": "物に執着するのはなぜでしょうか。"
      }
    ],
    "roleplay": {
      "situation": "미니멀리스트 친구가 이사를 도와주는 상황",
      "roleA": "미니멀리스트로서 물건을 버리라고 조언해 보세요.",
      "roleB": "물건을 버리기 아까워하는 역할을 해보세요."
    },
    "expressions": [
      {
        "word": "断捨離",
        "reading": "だんしゃり",
        "meaning": "단샤리(불필요한 것 버리기)",
        "example": "断捨離して部屋がすっきりした。"
      },
      {
        "word": "ミニマリスト",
        "reading": "ミニマリスト",
        "meaning": "미니멀리스트",
        "example": "ミニマリストを目指している。"
      },
      {
        "word": "手放す",
        "reading": "てばなす",
        "meaning": "놓아주다, 버리다",
        "example": "思い出の物を手放すのは難しい。"
      },
      {
        "word": "こんまり",
        "reading": "こんまり",
        "meaning": "곤마리(정리 전문가 이름)",
        "example": "こんまりの本を読んで片付けた。"
      },
      {
        "word": "ときめく",
        "reading": "ときめく",
        "meaning": "설레다",
        "example": "ときめかない物は捨てるといい。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、断捨離にハマってて。",
        "translation": "요즘 단샤리에 빠져 있어."
      },
      {
        "speaker": "B",
        "text": "いいね！どのくらい捨てたの？",
        "translation": "좋네! 얼마나 버렸어?"
      },
      {
        "speaker": "A",
        "text": "服を半分以上手放した。ときめかないものは全部。",
        "translation": "옷을 절반 이상 버렸어. 설레지 않는 건 전부."
      },
      {
        "speaker": "B",
        "text": "こんまり式だね。すっきりした？",
        "translation": "곤마리 방식이네. 개운해졌어?"
      },
      {
        "speaker": "A",
        "text": "すごくすっきりした！ミニマリストを目指してる。",
        "translation": "엄청 개운해졌어! 미니멀리스트를 목표로 하고 있어."
      },
      {
        "speaker": "B",
        "text": "私も試してみようかな。物が多すぎて困ってるから。",
        "translation": "나도 해볼까. 물건이 너무 많아서 곤란하니까."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜にハマっている",
        "function": "현재 빠져있는 것 표현",
        "example": "断捨離にハマっている。",
        "translation": "단샤리에 빠져 있다."
      },
      {
        "pattern": "〜を目指している",
        "function": "목표 표현",
        "example": "ミニマリストを目指している。",
        "translation": "미니멀리스트를 목표로 하고 있다."
      },
      {
        "pattern": "〜てみようかな",
        "function": "시도 의향 표현 (캐주얼)",
        "example": "私も試してみようかな。",
        "translation": "나도 해볼까."
      }
    ],
    "writingMission": {
      "prompt": "미니멀 라이프를 실천하기 위한 자신만의 계획을 써보세요.",
      "promptJp": "ミニマルライフを実践するための自分なりの計画を書いてみましょう。",
      "minChars": 80,
      "hint": "〜ようにする、まず〜から始める 등을 활용해 보세요."
    },
    "teacherNote": "「断捨離」「こんまり」는 일본에서 유래한 정리 문화. 한국에서도 인기 있는 주제로 공감대 형성이 쉬움.",
    "tags": [
      "트렌드",
      "라이프스타일",
      "정리"
    ]
  },
  {
    "id": "trend-workcation",
    "titleKo": "워케이션",
    "titleJp": "ワーケーション",
    "level": "N3",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "정중체",
    "duration": 25,
    "sensitivity": "안전",
    "warmupQuestions": [
      {
        "ko": "재택근무를 해본 적 있나요?",
        "jp": "テレワークをしたことはありますか。"
      },
      {
        "ko": "여행지에서 일을 해본 적 있나요?",
        "jp": "旅行先で仕事をしたことはありますか。"
      },
      {
        "ko": "워케이션에 관심이 있나요?",
        "jp": "ワーケーションに興味がありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "워케이션이 업무 효율에 도움이 된다고 생각하나요?",
        "jp": "ワーケーションが業務効率に役立つと思いますか。"
      },
      {
        "ko": "워케이션의 단점은 무엇이라고 생각하나요?",
        "jp": "ワーケーションのデメリットは何だと思いますか。"
      },
      {
        "ko": "앞으로 워케이션이 더 보편화될 것이라고 생각하나요?",
        "jp": "これからワーケーションがより一般的になると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "상사에게 워케이션을 제안하는 상황",
      "roleA": "워케이션의 장점을 설명하며 상사를 설득해 보세요.",
      "roleB": "상사 역할로 걱정되는 점을 질문해 보세요."
    },
    "expressions": [
      {
        "word": "テレワーク",
        "reading": "テレワーク",
        "meaning": "재택근무",
        "example": "テレワークが普及してから生活が変わった。"
      },
      {
        "word": "ワーケーション",
        "reading": "ワーケーション",
        "meaning": "워케이션(work+vacation)",
        "example": "沖縄でワーケーションを体験した。"
      },
      {
        "word": "生産性",
        "reading": "せいさんせい",
        "meaning": "생산성",
        "example": "場所を変えると生産性が上がる場合がある。"
      },
      {
        "word": "オンとオフ",
        "reading": "オンとオフ",
        "meaning": "업무와 휴식의 전환",
        "example": "オンとオフの切り替えが難しい。"
      },
      {
        "word": "ノマドワーカー",
        "reading": "ノマドワーカー",
        "meaning": "노마드 워커",
        "example": "ノマドワーカーとして世界を旅している。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "来月、京都でワーケーションしようと思っているんですが。",
        "translation": "다음 달 교토에서 워케이션 해보려고 하는데요."
      },
      {
        "speaker": "B",
        "text": "いいですね。でも仕事に集中できますか。",
        "translation": "좋네요. 근데 업무에 집중할 수 있을까요?"
      },
      {
        "speaker": "A",
        "text": "環境が変わると生産性が上がることもあるので。",
        "translation": "환경이 바뀌면 생산성이 올라가는 경우도 있어서요."
      },
      {
        "speaker": "B",
        "text": "オンとオフの切り替えが難しそうですね。",
        "translation": "업무와 휴식 전환이 어려울 것 같네요."
      },
      {
        "speaker": "A",
        "text": "それが課題ですね。でも試してみる価値はあると思います。",
        "translation": "그게 과제죠. 근데 시도해볼 가치는 있다고 생각해요."
      },
      {
        "speaker": "B",
        "text": "ぜひ感想を聞かせてください。",
        "translation": "꼭 소감 들려주세요."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜しようと思っているんですが",
        "function": "계획 전달 (정중)",
        "example": "ワーケーションしようと思っているんですが。",
        "translation": "워케이션 해보려고 하는데요."
      },
      {
        "pattern": "〜こともある",
        "function": "경우에 따른 가능성",
        "example": "環境が変わると生産性が上がることもある。",
        "translation": "환경이 바뀌면 생산성이 올라가는 경우도 있다."
      },
      {
        "pattern": "〜てみる価値がある",
        "function": "시도 가치 표현",
        "example": "試してみる価値はあると思います。",
        "translation": "시도해볼 가치는 있다고 생각한다."
      }
    ],
    "writingMission": {
      "prompt": "워케이션의 장점과 단점을 정리하고 자신의 의견을 써보세요.",
      "promptJp": "ワーケーションのメリットとデメリットをまとめ、自分の意見を書いてみましょう。",
      "minChars": 100,
      "hint": "〜というメリットがある、一方で〜というデメリットもある 등을 활용해 보세요."
    },
    "teacherNote": "워케이션은 코로나 이후 일본에서도 주목받는 트렌드. 비즈니스 일본어와 일상 표현을 함께 익힐 수 있는 주제.",
    "tags": [
      "트렌드",
      "워크라이프밸런스",
      "비즈니스"
    ]
  },
  {
    "id": "trend-chatgpt",
    "titleKo": "AI와 일상생활",
    "titleJp": "AIと日常生活",
    "level": "N3",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "AI를 일상에서 사용하고 있나요?",
        "jp": "AIを日常で使っていますか。"
      },
      {
        "ko": "ChatGPT나 다른 AI 도구를 써본 적 있나요?",
        "jp": "ChatGPTや他のAIツールを使ったことはありますか。"
      },
      {
        "ko": "AI가 일본어 공부에 도움이 된다고 생각하나요?",
        "jp": "AIが日本語の勉強に役立つと思いますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "AI가 인간의 일자리를 빼앗는다고 생각하나요?",
        "jp": "AIが人間の仕事を奪うと思いますか。"
      },
      {
        "ko": "AI가 만든 예술 작품을 인간의 작품과 동등하게 볼 수 있나요?",
        "jp": "AIが作った芸術作品を人間の作品と同等に見ることができますか。"
      },
      {
        "ko": "AI와 공존하기 위해 인간에게 필요한 능력은 무엇인가요?",
        "jp": "AIと共存するために人間に必要な能力は何ですか。"
      }
    ],
    "roleplay": {
      "situation": "AI 활용에 대해 의견이 다른 두 사람의 토론",
      "roleA": "AI 활용에 적극적인 입장을 취해 보세요.",
      "roleB": "AI 의존에 대한 우려를 표현해 보세요."
    },
    "expressions": [
      {
        "word": "生成AI",
        "reading": "せいせいAI",
        "meaning": "생성형 AI",
        "example": "生成AIを使って文章を作成した。"
      },
      {
        "word": "プロンプト",
        "reading": "プロンプト",
        "meaning": "프롬프트",
        "example": "プロンプトの書き方が大切だ。"
      },
      {
        "word": "AI依存",
        "reading": "AIいぞん",
        "meaning": "AI 의존",
        "example": "AI依存が進むと思考力が落ちるかもしれない。"
      },
      {
        "word": "共存",
        "reading": "きょうぞん",
        "meaning": "공존",
        "example": "AIと人間が共存する社会を目指すべきだ。"
      },
      {
        "word": "ハルシネーション",
        "reading": "ハルシネーション",
        "meaning": "환각(AI의 오류)",
        "example": "AIのハルシネーションに注意が必要だ。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、ChatGPTで日本語の作文を直してもらってるんだ。",
        "translation": "요즘 ChatGPT로 일본어 작문을 교정받고 있어."
      },
      {
        "speaker": "B",
        "text": "いいね。でもAIに頼りすぎると自分の力がつかないんじゃない？",
        "translation": "좋네. 근데 AI에 너무 의존하면 실력이 안 늘지 않아?"
      },
      {
        "speaker": "A",
        "text": "確かに。でも使い方次第だと思う。",
        "translation": "맞아. 근데 사용 방법에 따라 다르다고 생각해."
      },
      {
        "speaker": "B",
        "text": "ハルシネーションで間違えることもあるし。",
        "translation": "환각으로 틀리는 경우도 있고."
      },
      {
        "speaker": "A",
        "text": "それは注意が必要だね。でも上手く使えば便利だよ。",
        "translation": "그건 주의가 필요하지. 근데 잘 쓰면 편리해."
      },
      {
        "speaker": "B",
        "text": "AIと共存する時代だから、うまく活用したいね。",
        "translation": "AI와 공존하는 시대니까 잘 활용하고 싶네."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜てもらっている",
        "function": "수혜 표현 (진행)",
        "example": "AIに作文を直してもらっている。",
        "translation": "AI에게 작문을 교정받고 있다."
      },
      {
        "pattern": "〜次第だ",
        "function": "조건에 따른 결과",
        "example": "使い方次第で結果が変わる。",
        "translation": "사용 방법에 따라 결과가 달라진다."
      },
      {
        "pattern": "〜から〜したい",
        "function": "이유와 바람 표현",
        "example": "AIと共存する時代だから活用したい。",
        "translation": "AI와 공존하는 시대니까 활용하고 싶다."
      }
    ],
    "writingMission": {
      "prompt": "AI를 일본어 학습에 활용하는 방법을 소개하는 글을 써보세요.",
      "promptJp": "AIを日本語学習に活用する方法を紹介する文を書いてみましょう。",
      "minChars": 100,
      "hint": "〜に使える、〜ことで〜できる 등을 활용해 보세요."
    },
    "teacherNote": "AI는 현재 가장 뜨거운 주제. 학습자들이 실제로 AI를 학습에 활용하는 방법을 공유하면 실용적인 수업이 됨.",
    "tags": [
      "트렌드",
      "AI",
      "기술"
    ]
  },
  {
    "id": "trend-vegan",
    "titleKo": "비건과 채식 트렌드",
    "titleJp": "ビーガンと菜食トレンド",
    "level": "N3",
    "category": "트렌드",
    "activity": "그룹토론",
    "style": "캐주얼",
    "duration": 25,
    "sensitivity": "토론형",
    "warmupQuestions": [
      {
        "ko": "채식주의에 관심이 있나요?",
        "jp": "菜食主義に興味がありますか。"
      },
      {
        "ko": "비건 음식을 먹어본 적 있나요?",
        "jp": "ビーガン食を食べたことはありますか。"
      },
      {
        "ko": "환경을 위해 식습관을 바꿀 의향이 있나요?",
        "jp": "環境のために食習慣を変える意向はありますか。"
      }
    ],
    "deepQuestions": [
      {
        "ko": "비건 트렌드가 환경에 실질적인 도움이 된다고 생각하나요?",
        "jp": "ビーガントレンドが環境に実質的な助けになると思いますか。"
      },
      {
        "ko": "비건 식단을 유지하기 어려운 이유는 무엇인가요?",
        "jp": "ビーガン食を維持するのが難しい理由は何ですか。"
      },
      {
        "ko": "대체육이 미래 식품의 주류가 될 것이라고 생각하나요?",
        "jp": "代替肉が未来の食品の主流になると思いますか。"
      }
    ],
    "roleplay": {
      "situation": "레스토랑에서 비건 메뉴를 주문하는 상황",
      "roleA": "비건 손님으로서 메뉴를 확인하고 주문해 보세요.",
      "roleB": "직원 역할로 비건 옵션을 안내해 보세요."
    },
    "expressions": [
      {
        "word": "ビーガン",
        "reading": "ビーガン",
        "meaning": "비건",
        "example": "ビーガンになって3年が経つ。"
      },
      {
        "word": "代替肉",
        "reading": "だいたいにく",
        "meaning": "대체육",
        "example": "代替肉を使ったハンバーガーが人気だ。"
      },
      {
        "word": "植物性",
        "reading": "しょくぶつせい",
        "meaning": "식물성",
        "example": "植物性の食品を選ぶようにしている。"
      },
      {
        "word": "フレキシタリアン",
        "reading": "フレキシタリアン",
        "meaning": "플렉시테리언(유연한 채식주의)",
        "example": "完全なビーガンではなくフレキシタリアンだ。"
      },
      {
        "word": "サステナブル",
        "reading": "サステナブル",
        "meaning": "지속 가능한",
        "example": "サステナブルな食生活を心がけている。"
      }
    ],
    "dialogue": [
      {
        "speaker": "A",
        "text": "最近、ビーガン食に挑戦してみてるんだ。",
        "translation": "요즘 비건 식단에 도전해보고 있어."
      },
      {
        "speaker": "B",
        "text": "すごい！何がきっかけで？",
        "translation": "대단해! 무슨 계기로?"
      },
      {
        "speaker": "A",
        "text": "環境問題が気になって。代替肉も思ったより美味しかった。",
        "translation": "환경 문제가 신경 쓰여서. 대체육도 생각보다 맛있었어."
      },
      {
        "speaker": "B",
        "text": "でも外食するとき大変じゃない？",
        "translation": "근데 외식할 때 힘들지 않아?"
      },
      {
        "speaker": "A",
        "text": "確かに。だからフレキシタリアンにしてる。完璧じゃなくていいかなって。",
        "translation": "맞아. 그래서 플렉시테리언으로 하고 있어. 완벽하지 않아도 괜찮다고 생각해서."
      },
      {
        "speaker": "B",
        "text": "サステナブルな食生活、大切だよね。",
        "translation": "지속 가능한 식생활, 중요하지."
      }
    ],
    "grammarPatterns": [
      {
        "pattern": "〜に挑戦してみている",
        "function": "도전 중 표현",
        "example": "ビーガン食に挑戦してみている。",
        "translation": "비건 식단에 도전해보고 있다."
      },
      {
        "pattern": "〜と思ったより〜だった",
        "function": "예상과 다른 결과",
        "example": "代替肉は思ったより美味しかった。",
        "translation": "대체육은 생각보다 맛있었다."
      },
      {
        "pattern": "〜じゃなくていいかなって",
        "function": "완벽주의 탈피 표현",
        "example": "完璧じゃなくていいかなって思う。",
        "translation": "완벽하지 않아도 괜찮다고 생각해."
      }
    ],
    "writingMission": {
      "prompt": "환경을 위해 식습관을 바꾸는 것에 대한 자신의 생각을 써보세요.",
      "promptJp": "環境のために食習慣を変えることについて自分の考えを書いてみましょう。",
      "minChars": 100,
      "hint": "〜ようにしている、〜ことが大切だと思う 등을 활용해 보세요."
    },
    "teacherNote": "비건 트렌드는 환경 문제와 연결되는 주제. 「フレキシタリアン」「サステナブル」 등 최신 어휘를 익힐 수 있음.",
    "tags": [
      "트렌드",
      "환경",
      "식생활"
    ]
  }
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
