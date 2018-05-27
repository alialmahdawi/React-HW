import React from 'react';
import './Articles';
import './Article.css';


function ShowTitle(props) {
    return (
        <li key={props.id} className='title'>
            {props.title ? <div><img src='https://news.ycombinator.com/grayarrow.gif' alt='arrow' className='votearrow'></img><a href={props.url}>{props.title}</a></div> : null}
        </li>
    );

}
function TimePassed(props) {
    return (
        <span>{getDate(new Date()) - getDate(props.timeISO)} ago</span>
    )
}
function SubTitle(props) {
    return (
        <p>points by {props.by.id} <TimePassed /> | hide | comments</p>
    )
}
export {
    ShowTitle,
    SubTitle,
}

function getDate(str){

    var dateObj = new Date(str);
    var hours = dateObj.getUTCHours();
    var minutes = dateObj.getUTCMinutes();

    return( hours*60+minutes);
}
