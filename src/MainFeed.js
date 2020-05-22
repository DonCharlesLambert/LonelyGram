import React from 'react';
import Post from './Post';
import LazyLoad from 'react-lazyload';

export default class MainFeed extends React.Component{
    main = {
        paddingTop: "50px",
        backgroundColor: "#ed7773",
    }

    render(){
        let posts = new Array(5);
        return(
            <div style={this.main}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        );
    }
}
