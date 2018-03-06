import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import {withStyles} from 'material-ui/styles';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

/**
 * Pages
 * */

import IndexPage from '../pages/Index';
import DashboardPage from '../pages/Dashboard';

const styles = theme => ({
    root: {
        height: '100%'
    }
});

class App extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Reboot/>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={IndexPage}/>
                            <Route path="/dashboard" component={DashboardPage}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(App);