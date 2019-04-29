import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class SocketTome extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: "ws://192.168.1.35:8001"
        };
    }
    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("44/bus/route", data => this.setState({ response: data }));
    }
    render() {
        const { response } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                {response
                    ? <p>
                        Response From Server: {response}
            </p>
                    : <p>Loading...</p>}
            </div>
        );
    }
}
export default SocketTome;