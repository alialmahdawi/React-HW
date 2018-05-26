import React, { Component } from 'react';
import './App.css';
import './Articles';
import Articles from './Articles';
import { ShowTitle, SubTitle } from './Article';



console.log(Articles.hn.topStories);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <a className='maintitle' href='https://news.ycombinator.com/news'>Hacker News</a> | 
            <a href='https://news.ycombinator.com/newcomments'>Comments</a> |
            <a href='https://news.ycombinator.com/show'>Show</a> | 
            <a href='https://news.ycombinator.com/ask'>Ask</a> | 
            <a href='https://news.ycombinator.com/jobs'>Jobs</a> | 
            <a href='https://news.ycombinator.com/submit'>Submit</a> 
            <a className='login' href='https://news.ycombinator.com/login?goto=news'>Login</a>
          </p>
        </header>
        <div>
          <ol className='mine'>{Articles.hn.topStories.map((item) => {
            return (
              <div id='TitleBlock'>
                <ShowTitle title={item.title} key={item.id} url={item.url} />
                <SubTitle by={item.by} id={item.by.id} timeISO={item.timeISO} />
              </div>
            )
          })}
          </ol>
          }
        </div>
      </div>

    );
  }
}

export default App;
