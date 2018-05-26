import React, { Component } from 'react';
import getHNStories from './getHNnews';
import { ShowTitle, SubTitle } from './Article';
import './App.css';

 class NewsViewer extends Component {

    constructor() {

        super();

        this.state = {
            data: [],
        };

        this.FetchData = () => {
            getHNStories('top')
                .then((data) => {
                    this.setState({ data: data, });
                    console.log(data[0]);
                })
                .catch((error) => {
                    return error;
                    //console.log(error);
                })
        }

    }

    render() {
        return (
            <div>
                <ol className='mine'>{this.state.data.map((item) => {
                    return (
                        <div id='TitleBlock'>
                            <ShowTitle id={item.id} title={item.title} url={item.url} />
                            <SubTitle by={item.by} id={item.by.id} timeISO={item.timeISO} />
                        </div>
                                   )
                }
                )
                }
                </ol>
            </div>
        )
    }
}

export default NewsViewer;