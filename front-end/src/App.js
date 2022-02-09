import './App.css';
import React, {useEffect} from "react";
import CounterApp from './components/counter-app.js';
import axios from "axios";
const baseURL ='http://localhost:8083'


function App() {
    useEffect(() => {
        if (performance.navigation.type === 1) {
            console.log("This page is reloaded");
            //CounterApp.setState({reload: true})
        } else {
            console.log("This page is not reloaded");
        }
    });

    function updateCounter() {
        axios.get(baseURL)
            .then(response => this.setState({ counter_time: response.data.pageCount }))
            .catch(error => {
                this.setState({ error: error.message });
                console.error('There was an error!', error);
            });
    }

  return (
    <div className="App">
      <header className="App-header">
          <CounterApp/>
      </header>

    </div>
  );
}

export default App;

