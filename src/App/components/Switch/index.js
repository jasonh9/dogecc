import React from 'react'
import './index.css'
import socketIOClient from "socket.io-client";
import KeyUp from '@material-ui/icons/KeyboardArrowUp'
import KeyDown from '@material-ui/icons/KeyboardArrowDown'
import Power from '@material-ui/icons/Power'
import PowerOff from '@material-ui/icons/PowerOff'

// connect to the socket
const socketURL = 'ws://192.168.1.85:8001'
const socket = socketIOClient(socketURL);

class Switch extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title : 'noName',
            status : 'off',
            sPercent : 80
        }
    }


    componentDidMount(){
        socket.emit('bedroom/led/get/brightness', data => {
            this.setState({
                sPercent : data
            })
        })
    }

    touchHapticFeedback = () => {
        window.navigator.vibrate(5)
    }
    
    handleUp = () => {
        this.touchHapticFeedback()
        socket.emit('bedroom/led/set/brightness', '10');
    }

    handleDown = () => {
        this.touchHapticFeedback()
        socket.emit('bedroom/led/set/brightness', '10');
    }

    handlePower = () => {
        const power = (action) => {
            if(action === 'on'){
                this.setState({ status : 'on'})
                socket.emit('bedroom/led/set/brightness', 100);
            } else {
                this.setState({status : 'off'})
                socket.emit('bedroom/led/set/brightness', 0);
            }
        }
        this.state.status === 'off' ? power('on') : power('off')
    }

    render(){

        const SwitchStatus = () => {
            return(this.state.status === 'on'? <p><Power />{this.state.sPercent}%</p> : <p><PowerOff />OFF</p>)
        }

        return(
            <div className="switch">
                <p>{this.state.sPercent}</p>
                <h4>{this.state.title}</h4>
                <button onClick={this.handlePower} className="status">
                    <SwitchStatus />
                </button>
                <div className="user-controls">
                    <button onClick={this.handleUp} className="up"><KeyUp /></button>
                    <button onClick={this.handleDown} className="down"><KeyDown /></button>
                </div>
            </div>
        )
    }
}

export default Switch;