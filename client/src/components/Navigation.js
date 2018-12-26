import React, { Component } from 'react';
import { Navbar, Alignment, Button } from '@blueprintjs/core';
import { Link, Route, Switch, HashRouter } from "react-router-dom";


class Navigation extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        
                        <Navbar.Heading>Movie Rankings</Navbar.Heading>
                        <Navbar.Divider />
                        <HashRouter basename="/"/>
                        <Link to="/"><Button className="bp3-minimal" icon="home" text="Home" /></Link>
                        <Link to="/leaderboards"><Button className="bp3-minimal" icon="comparison" text="Leaderboards" /></Link>
                        <Link to="/movies"><Button className="bp3-minimal" icon="film" text="Movies" /></Link>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <Navbar.Heading>Yeet</Navbar.Heading>
                    </Navbar.Group>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;