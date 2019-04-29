import React from 'react';
import { timingSafeEqual } from 'crypto';

class Cards extends React.Component {

    constructor(props){
        super()
        this.state = {
            weather : props
        }
    }

    async componentWillReceiveProps(props){
        await this.setState({
            weather: props.name
        })
        console.log(this.state.weather)
    }

    renderWeatherName(){
    }

    render(){
        // const items = this.state.weather.map((item,key) =>
            // <li key={}>{item.name}</li>)
        return(
           <ul>
             test
           </ul>
        )
    }
}

export default Cards;