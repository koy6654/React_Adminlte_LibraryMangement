import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { AsyncComponent, Content, Row } from 'adminlte-2-react';

export default class GetAsync extends Component {
    state = {};
    loadedPath = {};
    getAsync(path) {
        const asyncRequire = () => {
            switch (path) {
                case '/helloworld3':
                    return AsyncComponent(() => {
                        if (this.loadedPath[path]) {
                            console.log('cached');
                            return this.loadedPath[path];
                        }
                        console.log("Loading '/helloworld3'");
                        const newPath = import('../presenter/HelloWorld');
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
                        const newPath = import('../presenter/HelloWorld2');
                        this.loadedPath[path] = newPath;
                        return newPath;
                    })
            }
        }
        return <Route path={path} exact component={asyncRequire(path)} />;
    }
    render() {
        return (
            <div>
                {this.getAsync(this.props.address)}
            </div>
        );
    }
}