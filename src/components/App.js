import React from 'react';
import IntroText from './IntroText/IntroText';
import Workouts from './Workouts/Workouts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
    };
    this.handleHome = this.handleHome.bind(this);
  }

  handleHome() {
    window.location.assign(`/`);
    this.setState({view: 'home'});
  }

  handleKettlebell() {
    window.location.assign(`/kettlebell`);
    this.setState({view: 'kettlebell'});
  }

  handleJumprope() {
    window.location.assign(`/jumprope`);
    this.setState({view: 'jumprope'});
  }

  handleBody() {
    window.location.assign(`/body`);
    this.setState({view: 'body'});
  }

  componentDidMount() {
    const pathname = window.location.pathname.substring(1,24);
    if(pathname === 'home') {
      this.setState({view: 'home'});
    }
  }

  render() {
    let view;

    if(this.state.view === 'home') {
      view =
      <React.Fragment>
        <IntroText />
        <Workouts />
      </React.Fragment>
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default App;
