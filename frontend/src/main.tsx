import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./provider/store"
import './index.css';
import App from './provider/App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No root element found");
}

createRoot(rootElement).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);