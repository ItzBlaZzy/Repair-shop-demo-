import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { BookingProvider } from './context/BookingContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BookingProvider>
        <App />
      </BookingProvider>
    </ThemeProvider>
  </StrictMode>,
);
