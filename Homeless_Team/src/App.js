/* eslint-disable import/first */

import React, { Component } from 'react';
import './App.css';

import LoginBox from './MINIBEEF_Component/LoginBox'
import Content from './HOLOLO_Component/Content'
import Detail from './ire0546_Component/Detail'
import FloatingB from './HOLOLO_Component/FloatingB'
import Navi from './ire0546_Component/NavigationBar'
import Kate from './ire0546_Component/Kategorie'
import Arti from './MINIBEEF_Component/ArticleList'
import Write from './HOLOLO_Component/Write'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <LoginBox></LoginBox>
        <Content link1="http://codegate.org/" c_name1="CODEGATE" c_img1="https://ctftime.org/media/cache/72/e3/72e30fa751acf026cda1e67366dedc3e.png"
        link2="http://www.powerofcommunity.net/" c_name2="POC" c_img2="http://www.powerofcommunity.net/img/poclogo.png"
        link3="https://codeengn.com/conference/17" c_name3="CodeEngn" c_img3="https://codeengn.com/img/codeengn_20_20.png"></Content>
        <Detail></Detail>
        <FloatingB></FloatingB>
        */}
        <Navi></Navi>
        <Arti></Arti>
        <Write></Write>
      </div>
    )
  }
}

export default App;
