import Link from 'next/link';
import styles from '../../../styles/livestream.module.css';

const Livestream = () => {
  return (
    <div className="container">
      <div className={styles.logoutButtonContainer}>
        <Link href="/" className={styles.logoutButton}>
          ログインページに戻る
        </Link>
      </div>
      <h2>ライブ</h2>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/XwHF1xOD4b4?si=6vcKj4Za1RPWchA0&autoplay=1&mute=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link href="/user/dashboard">ダッシュボード</Link>
    </div>
  );
};

export default Livestream;