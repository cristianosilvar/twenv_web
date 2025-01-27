import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { Provider } from '@/components/ui/provider';

import { App } from './app';
import { system } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={system}>
      <App />
    </Provider>
  </React.StrictMode>,
);
