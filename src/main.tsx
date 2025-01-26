import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from '@/components/ui/provider';
import { system } from '../theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={system}>
      <App />
    </Provider>
  </React.StrictMode>,
);
