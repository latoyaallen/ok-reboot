import React from 'react';
import ArticleRow from './ArticleRow/ArticleRow';
import Sidebar from './Sidebar/Sidebar';
import articles from '../data/articles';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
    };
    this.handleHome = this.handleHome.bind(this);
  }

  handleHome() {
    window.location.assign(`/`)
    this.setState({view: 'home'});
  }

  componentDidMount() {
    const pathname = window.location.pathname.substring(1,24);
    if(pathname === 'home') {
      this.setState({view: 'home'});
    }
  }

  render() {
    let view;
    const mostRecent = articles.slice(0,4);

    if(this.state.view === 'home') {
      view =
      <React.Fragment>
        <ArticleRow
          mostRecent={mostRecent}
        />
        <Sidebar
          mostRecent={mostRecent}
        />
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
