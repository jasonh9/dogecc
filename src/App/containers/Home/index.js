import React from 'react'
import {SwitchButton, BrightnessButton} from 'App/components/Button/SwitchButtons'
// import BrightnessButtons from 'App/components/Button/SwitchButtons'

import LedStatus from '../../services/LedStatus'
import socketIOClient from "socket.io-client";
import Switch from '../../components/Switch';
import './index.css';

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
        socket.emit('led/status', "getStatus")
        socket.on("led/status", data => this.setState({ response: data }));
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
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
            <div className="main">
                <ul className="switches">
                    <li><Switch name="Bedroom" /></li>
                    <li><Switch /></li>
                    <li><Switch /></li>
                    <li><Switch /></li>
                </ul>
            </div>
        )
    }
}
export default Home;