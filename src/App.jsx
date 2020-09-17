import React, { Component } from 'react';
import AdminLTE, { Content, Row, Sidebar, Navbar, AsyncComponent } from 'adminlte-2-react';
import { Route } from 'react-router-dom';

import GetAsync from './container/GetAsync';
import HomePresenter from './presenter/HomePresenter';
import HelloWorld from './presenter/HelloWorld';

const { Item, Header } = Sidebar;
const { Entry } = Navbar;

export default class APP extends Component {
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
            console.log("Loading '/helloworld'");
            const newPath = import('./presenter/HelloWorld');
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
            const newPath = import('./presenter/HelloWorld2');
            this.loadedPath[path] = newPath;
            return newPath;
          })
      }
    }
    return <Route path={path} exact component={asyncRequire(path)} />;
  }

  render() {
    return (
      <AdminLTE title={["Library Management"]} titleShort="LM" theme="purple">
        <Navbar.Core>

        </Navbar.Core>
        <Sidebar.Core>
          <Item text='Home' to='/' />
          <Item text='HelloWorld' to='/helloworld' />
          <Item text='HelloWorld2' to='/helloworld2' />
        </Sidebar.Core>

        <HomePresenter path='/' exact />
        <HelloWorld path='/helloworld' exact />


        <GetAsync path='/helloworld2' address='/helloworld2' />


        {/* {this.getAsync('/')}
        {this.getAsync('/helloworld2')} */}


      </AdminLTE>
    );
  }
}


