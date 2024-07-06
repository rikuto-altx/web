import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleUserSubmit = (event) => {
    event.preventDefault();
    if (id === 'admin' && password === 'password') {
      router.push('/user/dashboard');
    } else {
      setError('IDまたはパスワードが間違っています');
    }
  };

  const handleAdminSubmit = (event) => {
    event.preventDefault();
    if (id === 'admin2' && password === 'testpassword') {
      router.push('/user/admin');
    } else {
      setError('管理者IDまたはパスワードが間違っています');
    }
  };

  return (
    <div className="container">
      <h2>ログイン</h2>
      <form onSubmit={handleUserSubmit}>
        <div>
          <label>ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="button-container">
          <button type="submit">ユーザーログイン</button>
          <button type="button" onClick={handleAdminSubmit}>管理者ログイン</button>
        </div>
      </form>
    </div>
  );
};

export default Login;