
import React, { useEffect } from 'react';

function RedirectComponent() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      window.location.href = `myapp://callback?code=${code}`;
    }
  }, []);

  return <p>Redirecting...</p>;
}

function App() {
  return (
    <div className="App">
      <RedirectComponent />
    </div>
  );
}

export default App;