import React, { Component } from 'react'
import './App.css'
import LoadingScreen from './App/components/LoadingScreen/LoadingScreen'
import BottomNavi from './App/components/BottomNavigation/BottomNavi'
import Main from './App/containers/Main'
import Header from './App/containers/Header/index'

class App extends Component {

  constructor() {
    super()
    this.state = {
      value: 'home'
    }
  }

  onClickNewComponent(newPage){
    this.setState({
      value: newPage
    })
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="content">
            <Main selection={this.state.value} />
          </div>
          <footer>
            <BottomNavi
              changePage={this.onClickNewComponent.bind(this)}
            />
          </footer>
        </div>
    );
  }
}

// export default LoadingScreen(App);

export default App;
