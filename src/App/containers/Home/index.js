import React from 'react'
import {SwitchButton, BrightnessButton} from 'App/components/Button/SwitchButtons'
// import BrightnessButtons from 'App/components/Button/SwitchButtons'

import LedStatus from '../../data/LedStatus'
import socketIOClient from "socket.io-client";


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            endpoint: "ws://192.168.1.35:8001",
            brightness : 0,
            response: false,
        };
        this.handleOnButtonPress = this.handleOnButtonPress.bind(this);
        this.handleOffButtonPress = this.handleOffButtonPress.bind(this);
        this.handleOnSwitchButtonPress = this.handleOnSwitchButtonPress.bind(this);
        this.handleOffSwitchButtonPress = this.handleOffSwitchButtonPress.bind(this);

    }

    handleOnButtonPress () {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit('led/status/on', "BrightnessUp");
    }

    handleOffButtonPress () {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit('led/status/off', "BrightnessDown");
    }

    handleOnSwitchButtonPress() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit('led/status', "BrightnessOn");
    }

    handleOffSwitchButtonPress() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit('led/status', "BrightnessOff");
    }

    getStatus(){
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        // socket.on("led/status/on", data => this.setState({ response: data }));
        // socket.on("led/status/off", data => this.setState({ response: data }));
        socket.emit('led/status', "getStatus")
        socket.on("led/status", data => this.setState({ response: data }));
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        // socket.on("led/status/on", data => this.setState({ response: data }));
        // socket.on("led/status/off", data => this.setState({ response: data }));
        socket.emit('led/status', "getStatus")
        socket.on("led/status", data => this.setState({ response: data }));
    }

    handleClickthis(value){
        this.setState({ brightness : 0 });
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit('led/status/on', value)
        socket.emit('led/status/off', value)
    }

    render() {
        let SwitchButtonPower;
        if(this.state.response === "LedOn"){
            SwitchButtonPower = <span className="on" onClick={this.handleOffSwitchButtonPress}><SwitchButton type="On" /></span>
        } else if(this.state.response === "LedOff") {
            SwitchButtonPower = <span className="off" onClick={this.handleOnSwitchButtonPress}><SwitchButton type="Off" /></span>
        } else {
            SwitchButtonPower = <span onClick={this.getStatus}><SwitchButton /></span>
        }

        return (
            <div className="bedroomButtons">
                <LedStatus />
                <div className="brightness">
                    <span className="b_switch">
                        {SwitchButtonPower}
                    </span>
                    <span className="b_up" 
                        // onTouchStart={this.handleButtonPress} 
                        // onTouchEnd={this.handleButtonRelease} 
                        // onMouseDown={this.handleButtonPress} 
                        // onMouseUp={this.handleButtonRelease} 
                        // onMouseLeave={this.handleButtonRelease}
                        onClick={this.handleOnButtonPress}
                    >
                        <BrightnessButton icon="up" type='Brightness Up' />
                    </span>
                    <span className="b_down" 
                        // onTouchStart={this.handleOffButtonPress} 
                        // onTouchEnd={this.handleOffButtonRelease} 
                        // onMouseDown={this.handleOffButtonPress} 
                        // onMouseUp={this.handleOffButtonRelease} 
                        // onMouseLeave={this.handleOffButtonRelease}
                        onClick={this.handleOffButtonPress}
                    >
                        <BrightnessButton icon="down" type='Brightness Down' />
                    </span>
                </div>
            </div>
        )
    }
}
export default Home;