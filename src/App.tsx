import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import store from './store';
import MainComponent from './components/MainComponent';
import './index.css';
import BoardComponent from './components/BoardComponent';
// import BoardComponent from './components/BoardComponent';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mt-4">Welcome to Questions</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<MainComponent />} />
              <Route path="/board" element={<BoardComponent />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          {/* <footer>
            <p className="text-xl text-red font-bold mb-2">Footer content goes here</p>
          </footer> */}
        </div>
      </Router>
    </Provider>
  );
};

export default App;