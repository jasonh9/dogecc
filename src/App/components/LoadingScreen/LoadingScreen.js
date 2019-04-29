import React, { Component } from 'react'
import './loadingscreen.css'
import 'css/animate.css'
import logo from 'img/doge_logo.svg'

function getLogo() {
    return (
        <div className='content'>
            <object aria-labelledby='test' alt='loading screen' className='logo animated fadeOut delay-1s' type='image/svg+xml' data={logo}></object>
        </div>
    )
}

function LoadingScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                loading: true,
            }
        }
        async componentDidMount() {
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    })
                }, 1800);
            } catch (err) {
                this.setState({
                    loading: false,
                })
                console.log(err)
            }
        }
        render() {
            if (this.state.loading) return getLogo();
            return <WrappedComponent />
        }
    }
}
export default LoadingScreen