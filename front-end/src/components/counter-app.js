import React from 'react';
import axios from 'axios';
const baseURL ='http://localhost:8083'

export default class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter_time: [],
            error: null,
            reload:false
        }
    }

    componentDidMount() {
        axios.get(baseURL)
            .then(response => this.setState({ counter_time: response.data.pageCount }))
            .catch(error => {
                this.setState({ error: error.message });
                console.error('There was an error!', error);
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.reload !== this.props.reload) {
            console.log("go there")
            axios.get(baseURL)
                .then(response => this.setState({ counter_time: response.data.pageCount }))
                .catch(error => {
                    this.setState({ error: error.message });
                    console.error('There was an error!', error);
                });
            this.setState({ reload: false })
        }
    };

    refreshPage = () => {
        console.log("go there")
        this.setState(
            {reload: true},
            () => this.setState({reload: false})
        )
        axios.get(baseURL)
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
            <div className="Test">
                Number of time you visit webpage:
                { this.state.counter_time}
            </div>
        )

    }

}