import { useState } from 'react';
import Link from 'next/link';
import styles from '../../../styles/segmentationAI.module.css';

const SegmentationAI = () => {
  const [interval, setInterval] = useState('');
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    alert(`撮影インターバル: ${interval}, メール: ${email}, 通知稼働: ${notification}`);
  };

  return (
    <div className="container">
      <div className={styles.logoutButtonContainer}>
        <Link href="/" className={styles.logoutButton}>
          ログインページに戻る
        </Link>
      </div>
      <h2>詳細: セグメンテーションAI</h2>
      <div className="graph">
        <img src="/images/graph.png" alt="Graph" className="responsive-image" />
      </div>
      <div className="images-container">
        <button className='image-navigation left'>◀</button>
        <div className="image-row">
          <img src="/images/sampleimages.jpg" alt="Sample1" className="responsive-image" />
          <img src="/images/sample2.jpg" alt="Sample2" className="responsive-image" />
          <img src="/images/sample3.jpg" alt="Sample3" className="responsive-image" />
          <img src="/images/sample4.jpg" alt="Sample4" className="responsive-image" />
          <img src="/images/sample5.jpg" alt="Sample5" className="responsive-image" />
        </div>
        <button className='image-navigation right'>▶</button>
      </div>
      <form className="settings" onSubmit={handleChange}>
        <div>
          <label>撮影インターバル</label>
          <input type="text" value={interval} onChange={(e) => setInterval(e.target.value)} />
        </div>
        <div>
          <label>通知先メールアドレス</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>通知稼働</label>
          <input type="checkbox" checked={notification} onChange={(e) => setNotification(e.target.checked)} />
        </div>
        <button type="submit">更新</button>
      </form>
      <div className="navigation-links">
        <Link href="/user/camera/classificationAI">分類AI</Link>
        <Link href="/user/dashboard">ダッシュボード</Link>
      </div>
    </div>
  );
};

export default SegmentationAI;