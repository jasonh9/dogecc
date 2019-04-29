// https://api.weather.gov/points/37.7749,-122.4194
// https://api.weather.gov/gridpoints/MTR/88,126/forecast
// https://api.weather.gov/gridpoints/MTR/88,126/forecast/hourly

import React from 'react';
import axios from 'axios';
import Cards from './cards';

const endPoint = 'https://api.weather.gov/gridpoints/MTR/88,126/forecast'

class weatherAPI extends React.Component {

    constructor() {
        super()
        this.state = {
            weather: [],
            period: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get(endPoint)
            const periods = await response.data.properties.periods[0]
            this.setState({
                period: periods
            })
            console.log(this.state.period)
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <div>
                <Cards
                    name={this.state.period}
                />
            </div>
        )
    }
}

export default weatherAPI