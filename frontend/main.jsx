import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return <h1>{message || "Loading..."}</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
