import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AdminLTE, { Sidebar, AsyncComponent } from 'adminlte-2-react';

import HomePresenter from './HomePresenter';
import HelloWorld from './HelloWorld';

const { Item } = Sidebar;

export default class Home extends Component {

    sidebar = [
        <Item text='HelloWorld' to='/helloworld' />
    ]
    state = {};
    loadedPath = {};

    getAsync(path) {
        const asyncRequire = () => {
            switch (path) {
                case '/helloworld':
                    return AsyncComponent(() => {
                        if (this.loadedPath[path]) {
                            console.log('cached');
                            return this.loadedPath[path];
                        }
                        console.log("Loading '/helloworld'");
                        const newPath = import('./HelloWorld');
                        this.loadedPath[path] = newPath;
                        return newPath;
                    });
                // case '/helloworld':
                //     return asyncComponent(() => {
                //         if(this.)
                //     })
                default:
                    return AsyncComponent(() => {
                        if (this.loadedPath[path]) {
                            console.log('cached');
                            return this.loadedPath[path];
                        }
                        console.log("Loading '/'");
                        const newPath = import('./HomePresenter');
                        this.loadedPath[path] = newPath;
                        return newPath;
                    })
            }
        }
        return <Route path={path} exact component={asyncRequire(path)} />;
    }

    render() {

        return (
            <AdminLTE titleShort="AL" sidebar={this.sidebar} theme="purple">
                <HomePresenter path='/' exact />
                <HelloWorld path='/helloworld' exact />
                {this.getAsync('/')}
                {this.getAsync('/helloworld')}
            </AdminLTE>
        );
    }
}




