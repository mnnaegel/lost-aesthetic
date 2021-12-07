import React from 'react'
import './App.css'
import Navbase from './components/NavBase.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbase />
        <Alert variant="success">This is a button!!!</Alert>
        <Button>Test Button</Button>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="mb-3" style={{color:'black'}}>
          <Card.Img src="https://picsum.photos/200/300"/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of bootstrap carsd
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
