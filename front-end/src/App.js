import './App.css';
import React from "react";
import CounterApp from './components/counter-app.js';
import ErrorBoundary from './components/error-boundary.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ErrorBoundary>
              <CounterApp/>
          </ErrorBoundary>
      </header>

    </div>
  );
}

export default App;
