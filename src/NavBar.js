import React from 'react';

export default class NavBar extends React.Component{
    main = {
        position: "fixed",
        width: "100%",
        top: "0px",
        zIndex: 2,
    }

    render(){
        return(
            <nav style={this.main} class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">📷 LonelyGram</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}
