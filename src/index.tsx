import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import Header from 'components/common/Header';
import CreateForm from 'components/createTicket/CreateForm';

const App = () => {
  return (
    <>
      <Header
        mainTitle="Your Journey to Coding Conf 2025 Starts Here!"
        secondTitle="Secure your spot at next year's biggest coding conference."
      />
      <CreateForm/>
    </>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
