import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/App.tsx';
import { store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <ToastContainer autoClose={3000} theme="light" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
