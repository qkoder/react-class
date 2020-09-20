import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Homepage from './homepage'
import About from './about'
import Contact from './contact'
import Faq from './faq'

class MainRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter basename={'/demo/test'}>
                    <Switch>
                        <Route path='/' exact component={Homepage}/>
                        <Route path='/about'  component={About}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/faq' component={Faq}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainRouter;