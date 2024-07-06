import Link from 'next/link';
import styles from '../../styles/dashboard.module.css';

const Dashboard = () => {
  return (
    <div className="container dashboard">
      <div className={styles.logoutButtonContainer}>
        <Link href="/" className={styles.logoutButton}>
          ログインページに戻る
        </Link>
      </div>
      <h2>Dashboard</h2>
      <div className="camera-list">
        <div className="camera-item">
          <div>
            <p>浄水槽: A</p>
            <p>カメラID: 1</p>
            <p>稼働状況: 稼働</p>
            <p>検知: なし</p>
            <p>撮影間隔: 10</p>
          </div>
          <div>
            <Link href="/user/camera/livestream">ライブ</Link>
            <Link href="/user/camera/classificationAI">詳細</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
