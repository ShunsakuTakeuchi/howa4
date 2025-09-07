import React, { useState } from 'react';
import './index.css';
import AssessmentResult from './AssessmentResult';

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

function App() {
  const [showResult, setShowResult] = useState(false);
  const [showPersonalData, setShowPersonalData] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [viewMode, setViewMode] = useState('app'); // 'app' or 'assessment'
  const [formData, setFormData] = useState({
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

  const handleStartAssessment = () => {
    setShowResult(true);
  };

  const handleSearchSubmit = () => {
    setShowPersonalData(true);
  };

  // 切り替えバーコンポーネント
  const ToggleBar = () => (
    <div className="toggle-bar">
      <button
        className={`toggle-button ${viewMode === 'app' ? 'active' : ''}`}
        onClick={() => setViewMode('app')}
      >
      </button>
      <button
        className={`toggle-button ${viewMode === '' ? 'active' : ''}`}
        onClick={() => setViewMode('assessment')}
      >
      </button>
    </div>
  );

  // AssessmentResultを表示する場合
  if (viewMode === 'assessment') {
    return (
      <>
        <AssessmentResult />
        <ToggleBar />
      </>
    );
  }

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
        <ToggleBar />
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="app">
        <Navbar />
        <div className="main-layout">
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
          <div className="content-area">
            <div className="result-container">
          <div style={{ paddingTop: '50px' }}></div>
          
          <h1 className="result-title">個人データ野口燈子</h1>
          <h2 className="result-subtitle">総合査定結果</h2>
          
          <div className="result-box">
            <h3>査定結果</h3>
            <div className="result-content">
              査定額：200万円<br /><br />
              人生価値指数：3.85<br />
              <br />
              特記事項：査定結果が前回よりも急上昇しています。極端な環境変化による短期的な変動の<br />
              可能性があり、査定値の安定性について再検討が必要です。
            </div>
          </div>
          
          <div className="detail-section">
            <h2 className="detail-title">査定詳細</h2>
            
            <div className="detail-item">
              <h4>1. 他者との幸福な交流</h4>
              <div className="rating">評価: ★★★★☆</div>
              <div className="analysis">
                分析: 友人「坂本沙紀」との深い交流記録が複数確認されました。特に、海での活動や<br />
                誕生日を祝われた記録は、被査定者の幸福度を大幅に向上させています。
              </div>
            </div>
            
            <div className="detail-item">
              <h4>2. 自己肯定感・精神的幸福度</h4>
              <div className="rating">評価: ★★★☆☆</div>
              <div className="analysis">
                分析: 笑顔を見せる回数や、楽しそうに話す様子が記録され、<br />
                自己肯定感の改善が認められます。
              </div>
            </div>
            
            <div className="detail-item">
              <h4>3. 社会的貢献度</h4>
              <div className="rating">評価: ★★★☆☆ (指数 +20%)</div>
              <div className="analysis">
                分析: 友人である沙紀を精神的に支え、喜びを与えたという記録が複数存在します。<br />
                これにより、他者への貢献度が向上したと判断されました。
              </div>
            </div>
            
            <div className="detail-item">
              <h4>4. 将来の価値予測</h4>
              <div className="rating">評価: ★★★☆☆ (指数 +40%)</div>
              <div className="analysis">
                分析: 友人との活動を通じて、人生への前向きな姿勢や、将来への期待が記録されました。<br />
                これにより、今後の人生において価値を生み出す可能性が飛躍的に高まったと予測されます。
              </div>
            </div>
          </div>
          
          <div style={{ paddingBottom: '50px' }}></div>
        </div>
          </div>
        </div>
        <ToggleBar />
      </div>
    );
  }

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
              />
            </div>
            <div className="name-field">
              <label>名</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
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
              />
            </div>
            <div className="name-field">
              <label>名（カナ）</label>
              <input
                type="text"
                name="firstNameKana"
                value={formData.firstNameKana}
                onChange={handleInputChange}
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
            />
          </div>
          
          <button
            type="button"
            onClick={handleSearchSubmit}
            className="start-button"
          >
            検索
          </button>
        </div>
          </div>
        </div>
      </div>
      <ToggleBar />
    </div>
  );
}

export default App;
