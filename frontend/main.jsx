import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch('http://44.202.23.199:3001/api') // usa tu IP real aquí
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return <h1>{message || "Cargando desde el backend..."}</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
