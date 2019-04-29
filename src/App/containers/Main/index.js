import React from 'react'
import Home from '../Home'
import Muni from '../Muni'
import Weather from '../Weather'

// MQTT configurations


class Main extends React.Component {

    constructor(props){
        super()
        this.state = {
            selection : props.selection
        }
    }

    componentWillReceiveProps = (props) =>{
        this.setState({
            selection : props.selection
        })
    }

    render(){
        if(this.state.selection === 'home'){
            return <Home />
        } else if (this.state.selection === 'muni') {
            return <Muni />
        } else if (this.state.selection === 'weather') {
            return <Weather />
        } else {
            return ('somethng went terribly wrong...')
        }
    }
}
export default Main