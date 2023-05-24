import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GameStore from './store/GameStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      user: new UserStore(),
      game: new GameStore()
    }}>
      <App />
    </Context.Provider>

);

