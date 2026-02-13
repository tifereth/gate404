import React, { useMemo, useState } from "react";

function Icon({ name, size = 20, stroke = 2 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "home") {
    return (
      <svg {...common}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V20h13V9.5" />
        <path d="M10 20v-5h4v5" />
      </svg>
    );
  }
  if (name === "list") {
    return (
      <svg {...common}>
        <path d="M9 6h12" />
        <path d="M9 12h12" />
        <path d="M9 18h12" />
        <circle cx="4" cy="6" r="1.2" fill="currentColor" />
        <circle cx="4" cy="12" r="1.2" fill="currentColor" />
        <circle cx="4" cy="18" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.6-3.3 4.4-5 8-5s6.4 1.7 8 5" />
      </svg>
    );
  }
  if (name === "chat") {
    return (
      <svg {...common}>
        <path d="M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  if (name === "megaphone") {
    return (
      <svg {...common}>
        <path d="m3 11 13-5v12L3 13z" />
        <path d="M16 9h2a3 3 0 0 1 0 6h-2" />
      </svg>
    );
  }
  if (name === "shop") {
    return (
      <svg {...common}>
        <path d="M4 10h16l-1.5-5H5.5z" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 14h4" />
      </svg>
    );
  }
  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  }
  if (name === "plus") {
    return (
      <svg {...common}>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    );
  }
  if (name === "login") {
    return (
      <svg {...common}>
        <path d="M10 17H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="m13 15 5-5-5-5" />
        <path d="M18 10H9" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="4" />
        <path d="M3 20c1.2-3 3.4-4.5 6-4.5s4.8 1.5 6 4.5" />
        <path d="M17 9c1.8 0 3.3 1.5 3.3 3.3S18.8 16 17 16" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4a12 12 0 0 1 0 16" />
        <path d="M12 4a12 12 0 0 0 0 16" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 5 6v6c0 4.4 2.8 7.6 7 9 4.2-1.4 7-4.6 7-9V6z" />
      </svg>
    );
  }
  if (name === "filter") {
    return (
      <svg {...common}>
        <path d="M3 5h18l-7 8v6l-4-2v-4z" />
      </svg>
    );
  }
  if (name === "gamepad") {
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="10" rx="4" />
        <path d="M8 12h4" />
        <path d="M10 10v4" />
        <circle cx="16" cy="11" r="1" fill="currentColor" />
        <circle cx="18" cy="13" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (name === "ghost") {
    return (
      <svg {...common}>
        <path d="M12 2C7.58 2 4 5.58 4 10v10l2.5-1.5L9 20l3-1.5L15 20l2.5-1.5L20 20V10c0-4.42-3.58-8-8-8z" />
        <circle cx="9" cy="10" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }
  if (name === "scissors") {
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="m20 4-8.5 8.5" />
        <path d="M15 14.5 20 20" />
        <path d="m8.5 8.5 3 3" />
      </svg>
    );
  }
  if (name === "compass") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "sword") {
    return (
      <svg {...common}>
        <path d="m14.5 17.5-12-12V3h3l12 12" />
        <path d="m13 19 6-6" />
        <path d="m16 16 4 4" />
      </svg>
    );
  }
  if (name === "target") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "crown") {
    return (
      <svg {...common}>
        <path d="M2 20h20l-3-12-4 5-3-8-3 8-4-5z" />
        <path d="M2 20h20" />
      </svg>
    );
  }
  if (name === "dragon") {
    return (
      <svg {...common}>
        <path d="M12 2c-3 4-7 7-7 12a7 7 0 0 0 14 0c0-5-4-8-7-12z" />
        <path d="M10 16a2.5 2.5 0 0 0 4 0" />
      </svg>
    );
  }
  if (name === "anchor") {
    return (
      <svg {...common}>
        <circle cx="12" cy="5" r="3" />
        <path d="M12 8v13" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      </svg>
    );
  }
  if (name === "star") {
    return (
      <svg {...common}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
      </svg>
    );
  }
  if (name === "biohazard") {
    return (
      <svg {...common}>
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <path d="M12 9v4" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "rocket") {
    return (
      <svg {...common}>
        <path d="M12 2C8 6 6 10 6 15l6 5 6-5c0-5-2-9-6-13z" />
        <path d="M5 18l-2 4" />
        <path d="M19 18l2 4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  if (name === "flower") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a4 4 0 0 1 1 6.5A4 4 0 0 1 18 7a4 4 0 0 1-1.5 5.5A4 4 0 0 1 20 17a4 4 0 0 1-5.5-1A4 4 0 0 1 12 22a4 4 0 0 1-2.5-5.5A4 4 0 0 1 4 17a4 4 0 0 1 3.5-4.5A4 4 0 0 1 6 7a4 4 0 0 1 5-1.5A4 4 0 0 1 12 2z" />
      </svg>
    );
  }
  return <span />;
}

const topTabs = [
  { id: "community", label: "커뮤니티", icon: "chat" },
  { id: "recruit", label: "구인", icon: "megaphone" },
  { id: "store", label: "상점", icon: "shop" },
];

const recruitCards = [
  {
    title: "랄랄라랄라",
    subtitle: "",
    body: "ㅏ라라 ㅏ라라라",
    people: "1/4",
    mood: "blue",
  },
  {
    title: "ddddddddd",
    subtitle: "네 번째 불연속",
    body: "dddddddddddd",
    people: "1/2",
    mood: "navy",
  },
  {
    title: "ddddddddd",
    subtitle: "해적왕의 보물",
    body: "보물 지도를 찾아 출발합니다",
    people: "2/4",
    mood: "gold",
  },
];

const storeCards = [
  { title: "네 번째 불연속", desc: "안드로이드 제조 기업을 무너뜨리기 위한 비밀 조직의 침투 작전.", mood: "navy", tag: "무료" },
  { title: "당신만의 에덴", desc: "인공 태양 아래 유리 정원, 쉘터 에덴. 멸망한 세계에서 마지막 두 사람의 이야기.", mood: "teal", tag: "무료" },
  { title: "드래곤의 둥지", desc: "화산 깊은 곳에서 잠든 고대 드래곤을 깨우지 않고 보물을 훔쳐야 하는 모험.", mood: "orange", tag: "1,900원" },
  { title: "마법학교 입학", desc: "신비로운 마법학교에 입학하여 마법을 배우고 학교의 어둠을 물리치세요.", mood: "violet", tag: "1,900원" },
];

const scenarios = [
  {
    title: "미스터리 저택",
    desc: "어두운 저택에 숨겨진 비밀을 파헤치세요. 시간이 흐를수록 드러나는 충격적 진실.",
    icon: "ghost",
    gradient: "purple",
    genre: "미스터리",
    difficulty: "보통",
    price: null,
    progress: 45,
    time: "30분 전",
    players: "2/4",
  },
  {
    title: "타임 패러독스",
    desc: "시간 여행자의 실수로 뒤틀린 과거를 바로잡아야 합니다.",
    icon: "clock",
    gradient: "blue",
    genre: "SF",
    difficulty: "어려움",
    price: "2,900원",
    progress: 72,
    time: "1시간 전",
    players: "1/2",
  },
  {
    title: "네 번째 불연속",
    desc: "안드로이드 제조 기업을 무너뜨리기 위한 비밀 조직의 침투 작전.",
    icon: "scissors",
    gradient: "navy",
    genre: "SF/스릴러",
    difficulty: "어려움",
    price: null,
    progress: 88,
    time: "15분 전",
    players: "1/2",
  },
  {
    title: "AI 대화 테스트",
    desc: "인공지능과의 대화를 통해 튜링 테스트에 도전하세요.",
    icon: "target",
    gradient: "teal",
    genre: "실험",
    difficulty: "쉬움",
    price: null,
    progress: 100,
    time: "2시간 전",
    players: "1/1",
  },
  {
    title: "해적왕의 보물",
    desc: "보물 지도를 찾아 대항해 시대의 모험을 떠나세요.",
    icon: "compass",
    gradient: "gold",
    genre: "모험",
    difficulty: "보통",
    price: "1,900원",
    progress: 30,
    time: "45분 전",
    players: "3/4",
  },
  {
    title: "마왕성 침공",
    desc: "용사 파티를 이끌고 마왕성에 침투하세요.",
    icon: "sword",
    gradient: "red",
    genre: "판타지",
    difficulty: "어려움",
    price: "2,900원",
    progress: 15,
    time: "20분 전",
    players: "2/4",
  },
  {
    title: "사이버펑크 2099",
    desc: "네온 불빛 가득한 미래 도시에서 해커로 살아남으세요.",
    icon: "target",
    gradient: "cyan",
    genre: "SF",
    difficulty: "보통",
    price: "1,900원",
    progress: 60,
    time: "3시간 전",
    players: "1/2",
  },
  {
    title: "잊혀진 왕국",
    desc: "고대 왕국의 유적을 탐험하고 잃어버린 왕관을 찾으세요.",
    icon: "crown",
    gradient: "gold",
    genre: "판타지",
    difficulty: "보통",
    price: null,
    progress: -1,
    time: null,
    players: null,
    preparing: true,
  },
  {
    title: "드래곤의 둥지",
    desc: "화산 깊은 곳에서 잠든 고대 드래곤을 깨우지 않고 보물을 훔쳐야 하는 모험.",
    icon: "dragon",
    gradient: "orange",
    genre: "판타지",
    difficulty: "어려움",
    price: "1,900원",
    progress: 88,
    time: "15분 전",
    players: "4/4",
  },
  {
    title: "심해 탐사",
    desc: "깊은 바다 속 미지의 세계를 탐험하세요.",
    icon: "anchor",
    gradient: "deep",
    genre: "모험",
    difficulty: "보통",
    price: "2,900원",
    progress: 55,
    time: "1시간 전",
    players: "2/3",
  },
  {
    title: "마법학교 입학",
    desc: "신비로운 마법학교에 입학하여 마법을 배우고 학교의 어둠을 물리치세요.",
    icon: "star",
    gradient: "violet",
    genre: "판타지",
    difficulty: "쉬움",
    price: "1,900원",
    progress: 20,
    time: "4시간 전",
    players: "1/4",
  },
  {
    title: "좀비 아포칼립스",
    desc: "좀비로 가득한 세상에서 생존자들과 함께 살아남으세요.",
    icon: "biohazard",
    gradient: "darkred",
    genre: "호러",
    difficulty: "어려움",
    price: null,
    progress: 35,
    time: "2시간 전",
    players: "3/4",
  },
  {
    title: "우주 모험",
    desc: "미지의 행성을 탐험하고 외계 문명을 만나세요.",
    icon: "rocket",
    gradient: "space",
    genre: "SF",
    difficulty: "쉬움",
    price: null,
    progress: 10,
    time: "5시간 전",
    players: "1/2",
  },
  {
    title: "당신만의 에덴",
    desc: "인공 태양 아래 유리 정원, 쉘터 에덴. 멸망한 세계에서 마지막 두 사람의 이야기.",
    icon: "flower",
    gradient: "teal",
    genre: "드라마",
    difficulty: "보통",
    price: null,
    progress: -1,
    time: null,
    players: null,
    preparing: true,
  },
  {
    title: "사막의 신기루",
    desc: "끝없는 사막에서 오아시스를 찾아 떠나는 생존 모험.",
    icon: "compass",
    gradient: "sand",
    genre: "모험",
    difficulty: "보통",
    price: "1,900원",
    progress: 40,
    time: "50분 전",
    players: "2/3",
  },
];

function CommunityPage() {
  return (
    <section className="page-section">
      <div className="empty-card">
        <p className="empty-main">아직 게시물이 없습니다</p>
        <p className="empty-sub">첫 게시물을 작성해보세요!</p>
      </div>
    </section>
  );
}

function RecruitPage() {
  return (
    <section className="page-section">
      <div className="search-row">
        <div className="search">
          <Icon name="search" size={23} />
          <input value="구인글 검색..." readOnly />
        </div>
      </div>

      <div className="public-tabs">
        <button className="public-tab active">
          <Icon name="globe" size={20} /> 전체 공개 <span className="chip-num">4</span>
        </button>
        <button className="public-tab">
          <Icon name="shield" size={20} /> 친구 공개 <span className="chip-num">3</span>
        </button>
      </div>

      <div className="recruit-list">
        {recruitCards.map((card) => (
          <article className="recruit-card" key={card.title + card.mood}>
            <header className={`recruit-head ${card.mood}`}>
              <div className="recruit-title">
                <span className="mini-icon">
                  <Icon name="gamepad" size={20} />
                </span>
                <div>
                  <h3>{card.title}</h3>
                  {card.subtitle && <p>{card.subtitle}</p>}
                </div>
              </div>
              <span className="green-chip">
                <Icon name="globe" size={14} /> 전체
              </span>
            </header>
            <div className="recruit-body">
              <div className="author-row">
                <span className="avatar" />
                <strong>러티</strong>
                <span className="time">1시간 전</span>
              </div>
              <p className="body-copy">{card.body}</p>
              <div className="tags-row">
                <span>#사랑</span>
                <span>#바보</span>
                <span className="people">
                  <Icon name="users" size={18} /> {card.people}
                </span>
              </div>
              <button className="join-btn">
                <Icon name="users" size={20} /> 참가 신청
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StorePage() {
  return (
    <section className="page-section">
      <div className="search-row">
        <div className="search">
          <Icon name="search" size={23} />
          <input value="시나리오 이름, 장르, 설명으로 검색..." readOnly />
        </div>
      </div>

      <div className="filters">
        <button className="btn-outline">
          <Icon name="filter" size={22} /> 필터
        </button>
        <button className="btn-chip active">전체</button>
        <button className="btn-chip">무료</button>
        <button className="btn-chip">유료</button>
        <button className="sort">이름순</button>
      </div>

      <p className="result-count">14개의 시나리오</p>

      <div className="store-grid">
        {storeCards.map((card) => (
          <article className="store-card" key={card.title}>
            <div className={`store-cover ${card.mood}`}>
              <span className="price-pill">{card.tag}</span>
              <span className="cover-icon">
                <Icon name="gamepad" size={36} />
              </span>
            </div>
            <div className="store-body">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="store-foot">
                <span className="genre-pill">SF/스릴러</span>
                <span className="genre-pill soft">어려움</span>
                <span className="players">
                  <Icon name="users" size={17} /> 1명
                </span>
                <button className="play-btn">
                  <Icon name="gamepad" size={17} /> 플레이
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LoginPage() {
  return (
    <section className="login-wrap">
      <article className="login-card">
        <span className="login-mark">
          <Icon name="login" size={44} />
        </span>
        <h1>로그인</h1>
        <p>계정으로 로그인하여 게임을 즐기세요</p>

        <button className="social white">Google로 계속하기</button>
        <button className="social yellow">카카오로 계속하기</button>
        <button className="social green">네이버로 계속하기</button>

        <div className="divider">또는</div>

        <label>이메일</label>
        <input className="field" value="example@email.com" readOnly />
        <label>비밀번호</label>
        <input className="field" value="비밀번호 (최소 6자)" readOnly />

        <button className="submit">로그인</button>
        <p className="signup">계정이 없으신가요? 회원가입</p>
        <p className="demo">데모 계정으로 빠른 시작</p>
      </article>
    </section>
  );
}

function HomePage() {
  return (
    <section className="home-layout">
      <div className="home-left">
        <header className="home-head">
          <h2>진행 중인 모험</h2>
          <button className="new-game">
            <Icon name="plus" size={18} /> 새 게임
          </button>
        </header>
        <p className="home-sub">시나리오 둘러보기</p>
        <div className="home-list">
          {scenarios.map((s) => (
            <article className="adventure-card" key={s.title}>
              <div className={`adv-gradient ${s.gradient}`}>
                <span className="adv-icon">
                  <Icon name={s.icon} size={32} />
                </span>
              </div>
              <div className="adv-info">
                <div className="adv-top">
                  <h3>{s.title}</h3>
                  <span className="adv-genre">{s.genre}</span>
                  <span className={`adv-diff ${s.difficulty === "어려움" ? "hard" : s.difficulty === "쉬움" ? "easy" : "normal"}`}>
                    {s.difficulty}
                  </span>
                </div>
                <p className="adv-desc">{s.desc}</p>
                {s.preparing ? (
                  <div className="adv-meta">
                    <span className="adv-preparing">준비 중</span>
                  </div>
                ) : (
                  <div className="adv-meta">
                    <span className={`adv-price ${s.price ? "paid" : "free"}`}>
                      {s.price || "무료"}
                    </span>
                    <div className="adv-progress">
                      <div className="adv-progress-fill" style={{ width: `${s.progress}%` }} />
                    </div>
                    <span className="adv-pct">{s.progress}%</span>
                    <span className="adv-time">{s.time}</span>
                    <span className="adv-players">{s.players}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <aside className="home-right">
        <article className="locked-card">
          <Icon name="users" size={72} />
          <h3>로그인이 필요합니다</h3>
          <p>친구와 함께 게임을 즐겨보세요!</p>
        </article>
      </aside>
    </section>
  );
}

export default function App() {
  const [topTab, setTopTab] = useState("community");
  const [sideTab, setSideTab] = useState("home");

  const isLogin = sideTab === "profile";
  const showTopTabs = sideTab === "home";

  const page = useMemo(() => {
    if (sideTab === "list") return <HomePage />;
    if (sideTab === "profile") return <LoginPage />;
    if (topTab === "community") return <CommunityPage />;
    if (topTab === "recruit") return <RecruitPage />;
    return <StorePage />;
  }, [sideTab, topTab]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className={`side-btn ${sideTab === "home" ? "active" : ""}`} onClick={() => setSideTab("home")} type="button">
          <Icon name="home" />
        </button>
        <button className={`side-btn ${sideTab === "list" ? "active" : ""}`} onClick={() => setSideTab("list")} type="button">
          <Icon name="list" />
        </button>
        <button className={`side-btn ${sideTab === "profile" ? "active" : ""}`} onClick={() => setSideTab("profile")} type="button">
          <Icon name="user" />
        </button>
      </aside>

      <main className={`content ${isLogin ? "login-mode" : ""}`}>
        {showTopTabs && (
          <header className="top-tabs">
            {topTabs.map((tab) => (
              <button
                key={tab.id}
                className={`top-tab ${topTab === tab.id ? "active" : ""}`}
                onClick={() => setTopTab(tab.id)}
                type="button"
              >
                <Icon name={tab.icon} size={20} />
                {tab.label}
              </button>
            ))}
          </header>
        )}
        {page}
      </main>

      <nav className="bottom-nav">
        <button className={sideTab === "home" ? "active" : ""} onClick={() => setSideTab("home")} type="button">
          <Icon name="home" />
        </button>
        <button className={sideTab === "list" ? "active" : ""} onClick={() => setSideTab("list")} type="button">
          <Icon name="list" />
        </button>
        <button className={sideTab === "profile" ? "active" : ""} onClick={() => setSideTab("profile")} type="button">
          <Icon name="user" />
        </button>
      </nav>
    </div>
  );
}
