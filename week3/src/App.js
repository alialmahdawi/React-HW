import React, { Component } from 'react';
import './App.css';
import './Articles';
//import Articles from './Articles';
//import { ShowTitle, SubTitle } from './Article';
import './News';
import NewsViewer from './News';


//console.log(Articles.hn.topStories);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <a className='maintitle' href='https://news.ycombinator.com/news'>Hacker News</a> | 
            <a href= {<NewsViewer />} onClick={()=>showIt()}>Top</a> | 
            <a href='https://news.ycombinator.com/newcomments'>Comments</a> |
            <a href='https://news.ycombinator.com/show'>Show</a> | 
            <a href='https://news.ycombinator.com/ask'>Ask</a> | 
            <a href='https://news.ycombinator.com/jobs'>Jobs</a> | 
            <a href='https://news.ycombinator.com/submit'>Submit</a> 
            <a className='login' href='https://news.ycombinator.com/login?goto=news'>Login</a>
          </p>
        </header>
        <div>
          {showIt(() =>
            (<NewsViewer/>))}
          </div>
      </div>

    );
  }
}

export default App;
