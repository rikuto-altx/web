import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Admin.module.css';

export default function AdminPage() {
  // 各セクションのデータを管理するための状態
  const [purificationPlants, setPurificationPlants] = useState([
    { id: 'xxxx', name: '', location: '', remarks: '', archive: '' }
  ]);
  const [aiModels, setAiModels] = useState([
    { id: 'xxxx', name: '', type: '', scriptFile: '', weightFile: '', remarks: '', archive: '' }
  ]);
  const [cameras, setCameras] = useState([
    { id: 'xxxx', name: '', plant: '', aiModel: '', interval: '', ipAddress: '', uuid: '' }
  ]);

  // 新しい項目を追加する関数
  const addPurificationPlant = () => {
    setPurificationPlants([...purificationPlants, { id: '', name: '', location: '', remarks: '' }]);
  };

  const addAiModel = () => {
    setAiModels([...aiModels, { id: '', name: '', type: '', scriptFile: '', weightFile: '', remarks: '' }]);
  };

  const addCamera = () => {
    setCameras([...cameras, { id: '', name: '', plant: '', aiModel: '', interval: '', ipAddress: '', uuid: '' }]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>管理者設定画面</title>
        <meta name="description" content="管理者設定画面" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logoutButtonContainer}>
        <Link href="/" className={styles.logoutButton}>
          ログインページに戻る
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>管理者設定画面</h1>
        
        <section className={styles.section}>
          <h2>浄水場の追加・編集</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>浄水場名</th>
                <th>住所</th>
                <th>備考</th>
                <th>アーカイブ</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {purificationPlants.map((plant, index) => (
                <tr key={index}>
                  <td>{plant.id}</td>
                  <td><input type="text" value={plant.name} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={plant.location} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={plant.remarks} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={plant.archive} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><button className={styles.button}>変更を反映</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.addButton} onClick={addPurificationPlant}>追加</button>
        </section>

        <section className={styles.section}>
          <h2>AIモデルの追加・編集</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>AIモデル名</th>
                <th>タイプ</th>
                <th>スクリプトファイル</th>
                <th>ウェイトファイル</th>
                <th>備考</th>
                <th>アーカイブ</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {aiModels.map((model, index) => (
                <tr key={index}>
                  <td>{model.id}</td>
                  <td><input type="text" value={model.name} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={model.type} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={model.scriptFile} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={model.weightFile} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={model.remarks} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={model.archive} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><button className={styles.button}>変更を反映</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.addButton} onClick={addAiModel}>追加</button>
        </section>

        <section className={styles.section}>
          <h2>カメラの追加・編集</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>カメラ名</th>
                <th>浄水場</th>
                <th>AIモデル</th>
                <th>撮影間隔</th>
                <th>IPアドレス</th>
                <th>UUID</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {cameras.map((camera, index) => (
                <tr key={index}>
                  <td>{camera.id}</td>
                  <td><input type="text" value={camera.name} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={camera.plant} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={camera.aiModel} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={camera.interval} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={camera.ipAddress} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><input type="text" value={camera.uuid} onChange={(e) => {/* 更新ロジック */}} /></td>
                  <td><button className={styles.button}>変更を反映</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={styles.addButton} onClick={addCamera}>追加</button>
        </section>
      </main>
    </div>
  );
}