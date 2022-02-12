import React from 'react';
import axios from 'axios';

export default class CounterApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter_time: null,
            reload:false,
            baseURL: 'http://localhost:8083',
            error: null,
        }
        axios.defaults.withCredentials = true
    }

    componentDidMount() {
        try {
            this.getCounter()
        }
        catch(error) {
            throw error
        }
    }

    getCounter = () => {
        axios.get(this.state.baseURL)
            .then(response => this.setState({ counter_time: response.data.pageCount }))
            .catch(error => {
                this.setState({ error: error.message });
                console.error('There was an error!', error);
            });
    }


    render() {
        if (this.state.error) {
            return <h1>Caught an error.</h1>
        }
        return (
            <h1>
                Number of time you visit webpage:
                { this.state.counter_time}
            </h1>
        )

    }

}