import React ,{Component} from 'react';
import Header from './common/header'
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
