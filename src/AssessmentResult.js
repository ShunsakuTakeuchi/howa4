import React from 'react';
import './index.css';

// ナビゲーションバーコンポーネント
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">寿命価値査定システム</div>
      <div className="navbar-right">
        <div className="notification-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
          <div className="notification-badge"></div>
        </div>
        <div className="user-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// サイドバーコンポーネント
function Sidebar({ activeItem, setActiveItem }) {
  const menuItems = [
    { id: 'home', label: 'ホーム', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { id: 'search', label: '検索', icon: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' },
    { id: 'mypage', label: 'マイページ', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
    { id: 'history', label: '履歴', icon: 'M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z' },
    { id: 'notice', label: 'お知らせ', icon: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z' },
    { id: 'attendance', label: '勤怠管理', icon: 'M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v17H6.5V4H5V2h4.5V1h5v1H19v2h-1.5V2z' },
    { id: 'help', label: 'ヘルプ', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z' }
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.id} className="sidebar-item">
            <button
              className={`sidebar-link ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <svg className="sidebar-icon" viewBox="0 0 24 24">
                <path d={item.icon} />
              </svg>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AssessmentResult() {
  const [activeItem, setActiveItem] = React.useState('home');
  const [showPersonalData, setShowPersonalData] = React.useState(false);
  const [showResult, setShowResult] = React.useState(false);
  const [formData, setFormData] = React.useState({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    gender: '',
    birthDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    setShowPersonalData(true);
  };

  const handleStartAssessment = () => {
    setShowResult(true);
  };

  // 検索画面
  if (!showPersonalData) {
    return (
      <div className="app">
        <Navbar />
        <div className="main-layout">
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
          <div className="content-area">
            <div className="main-container">
          <h1 className="title">検索</h1>
          <p className="notice">(売却の申し出があった場合のみ使用してください)</p>
          
          <div className="form-container">
            <div className="name-group">
              <div className="name-field">
                <label>姓</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="例: 野口"
                />
              </div>
              <div className="name-field">
                <label>名</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="例: 燈子"
                />
              </div>
            </div>
            
            <div className="name-group">
              <div className="name-field">
                <label>姓（カナ）</label>
                <input
                  type="text"
                  name="lastNameKana"
                  value={formData.lastNameKana}
                  onChange={handleInputChange}
                  placeholder="例: ノグチ"
                />
              </div>
              <div className="name-field">
                <label>名（カナ）</label>
                <input
                  type="text"
                  name="firstNameKana"
                  value={formData.firstNameKana}
                  onChange={handleInputChange}
                  placeholder="例: トウコ"
                />
              </div>
            </div>
            
            <div className="single-field">
              <label>性別</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">選択してください</option>
                <option value="男性">男性</option>
                <option value="女性">女性</option>
                <option value="その他">その他</option>
                <option value="回答しない">回答しない</option>
              </select>
            </div>
            
            <div className="single-field">
              <label>生年月日</label>
              <input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                placeholder="例: 1999/01/15"
              />
            </div>
            
            <button
              type="button"
              onClick={handleSearch}
              className="start-button"
            >
              検索
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 個人データ画面
  if (showPersonalData && !showResult) {
    return (
      <div className="app">
        <Navbar />
        <div className="main-layout">
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
          <div className="content-area">
            <div className="personal-data-container">
              <h1 className="title">個人データ</h1>
              
              <div className="person-profile">
                <div className="profile-photo">
                  <svg width="120" height="120" viewBox="0 0 120 120" className="default-avatar">
                    <circle cx="60" cy="60" r="60" fill="#e0e0e0"/>
                    <circle cx="60" cy="45" r="20" fill="#bdbdbd"/>
                    <path d="M20 100 Q60 80 100 100 L100 120 L20 120 Z" fill="#bdbdbd"/>
                  </svg>
                </div>
                <h2 className="person-name">野口燈子さん</h2>
              </div>
              
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">氏名：</span>
                  <span className="info-value">野口燈子</span>
                </div>
                <div className="info-item">
                  <span className="info-label">性別：</span>
                  <span className="info-value">女性</span>
                </div>
                <div className="info-item">
                  <span className="info-label">生年月日：</span>
                  <span className="info-value">2003年8月30日</span>
                </div>
                <div className="info-item">
                  <span className="info-label">年齢：</span>
                  <span className="info-value">20歳</span>
                </div>
                <div className="info-item">
                  <span className="info-label">住所：</span>
                  <span className="info-value">東京都江東区東砂14-6-3 第三アパート</span>
                </div>
                <div className="info-item">
                  <span className="info-label">職業：</span>
                  <span className="info-value">フリーター</span>
                </div>
              </div>
              
              <button
                type="button"
                onClick={handleStartAssessment}
                className="assessment-button"
              >
                査定開始
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 査定結果画面
  return (
    <div className="app">
      <Navbar />
      <div className="main-layout">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="content-area">
          <div className="result-container">
            <div style={{ paddingTop: '50px' }}></div>
            
            <h1 className="result-title">個人データ：野口燈子</h1>
            <h2 className="result-subtitle">総合査定結果</h2>
            
            <div className="warning">
              警告：極端な評価値が検出されました。<br />
              　　　システムの想定範囲外であるため、査定に再検討を要する可能性があります。
            </div>
            
            <div className="result-box">
              <h3>査定結果</h3>
              <div className="result-content">
                査定額：測定不能<br /><br />
                人生価値指数：-2.78<br />
                ※人生価値指数は、個人の幸福度、社会との繋がり、将来的な価値を総合的に評価する指標です。<br />
                マイナス値は、これらの要素が極めて不足していることを示します。<br /><br />
                特記事項：査定結果がマイナス域に達しており、金額を算出できません。人生における他者からの愛情、<br />
                社会への貢献、幸福な交流の記録が極端に少なく、自己肯定感の著しい欠如が見られるため、<br />
                システム上の価値基準を下回ると判断されました。
              </div>
            </div>
            
            <div className="detail-section">
              <h2 className="detail-title">査定詳細</h2>
              
              <div className="detail-item">
                <h4>1. 他者との幸福な交流</h4>
                <div className="rating">評価: ★☆☆☆☆ (1/5)</div>
                <div className="analysis">
                  分析: 家族、友人との幸福な交流記録が皆無。戸籍上の存在がない期間も影響し、<br />
                  人間関係のデータが著しく欠如しています。
                </div>
              </div>
              
              <div className="detail-item">
                <h4>2. 自己肯定感・精神的幸福度</h4>
                <div className="rating">評価: ☆☆☆☆☆ (0/5)</div>
                <div className="analysis">
                  分析: 本人の自己評価が極めて低く、「ろくでもない人生」と認識していることが<br />
                  複数データから確認されました。将来に対する希望や目標も極端に低く、<br />
                  精神的な幸福度はマイナス域と判断されました。
                </div>
              </div>
              
              <div className="detail-item">
                <h4>3. 社会的貢献度</h4>
                <div className="rating">評価: ★☆☆☆☆ (1/5)</div>
                <div className="analysis">
                  分析: 現在までの社会貢献や、他者への援助・影響を示すデータが著しく不足しています。<br />
                  これは、社会との積極的な関わりが欠如しているためです。
                </div>
              </div>
              
              <div className="detail-item">
                <h4>4. 将来の価値予測</h4>
                <div className="rating">評価: ★☆☆☆☆ (1/5)</div>
                <div className="analysis">
                  分析: 今後、人生の価値を向上させる可能性を示すデータ（スキル習得、人間関係の改善、<br />
                  目標設定など）が見られません。このままでは、将来的な幸福度も期待できないと予測されます。
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h2 className="detail-title">経歴詳細</h2>
              
              <div className="detail-item">
                <h4>0歳〜7歳：存在の不在</h4>
                <div className="analysis">
                  母親との二人暮らし。出生届が出されておらず、戸籍上の存在が確認できませんでした。<br />
                  近隣住民の通報により保護されるまで、公式に存在が認識されていなかった期間です。<br />
                  身体には虐待の痕跡が認められました。母親は精神病を患っており、この時期の燈子の人生は、<br />
                  外部との繋がりが皆無な閉鎖空間にありました。
                </div>
              </div>
              
              <div className="detail-item">
                <h4>7歳〜16歳：居場所のない日々</h4>
                <div className="analysis">
                  保護された後、児童養護施設に入所。この時期にようやく学校に通い始めましたが、<br />
                  周囲に馴染むことができず、孤立が続きました。施設と学校という新しい環境でも、<br />
                  心から安らげる居場所を見つけられませんでした。母親は精神病院に入院しましたが、<br />
                  12歳のときに退院した母親が自殺。燈子は再び孤独に直面しました。
                </div>
              </div>
              
              <div className="detail-item">
                <h4>16歳〜19歳：憧れと絶望</h4>
                <div className="analysis">
                  高校生になっても、彼女の孤独は解消されませんでした。友達と学校に行ったり、<br />
                  遊んだりといった経験は皆無でした。心の中では「あたりまえの幸せ」を強く求めていましたが、<br />
                  それが叶わない現実とのギャップに絶望を深め、自身の人生を「ろくでもない」と<br />
                  評価するようになりました。
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', margin: '60px 0' }}>
              <button
                type="button"
                className="assessment-button"
                onClick={() => alert('査定を開始します')}
              >
                査定開始
              </button>
            </div>
            
            <div style={{ paddingBottom: '50px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentResult;
