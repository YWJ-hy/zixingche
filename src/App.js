import React from 'react';
import './App.less';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Navleft from './components/Navleft'

function App() {
  return (
    <div>
     <Row>
       <Col span={4}>
         <Navleft/>
       </Col>
       <Col span={20}>
         <Header/>
         <Row>content</Row>
         <Footer/>
       </Col>
     </Row>
  </div>
  );
}

export default App;
