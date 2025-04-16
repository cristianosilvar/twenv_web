import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { Provider } from '@/shared/ui/provider';

import { App } from './app';
import { system } from './shared/config/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={system}>
      <App />
    </Provider>
  </React.StrictMode>,
);
