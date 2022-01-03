import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import tees from '../cgAssets/Tees.jpg'
import sweats from '../cgAssets/Sweatas.jpg'
import accessories from '../cgAssets/Accessories.gif'
import bottoms from '../cgAssets/Bottoms.jpg'
import knits from '../cgAssets/Knits.jpg'
import outerwear from '../cgAssets/Outerwear.jpg'
import '../css/clothingrid.css'

const ClothingGrid = () => {
    return (
        <div>
            <Container>
                <Row className="text-center g-1">
                    <Col md={6} className="col-padding">
                        <a href="/collections" className="img-holder">
                            <p className="hover-text">Bottoms</p>
                            <img src={bottoms} alt="" className="img-fluid" />   
                        </a>
                    </Col>
                    <Col md={6} className="col-padding">
                        <a href="/collections" className="img-holder">
                            <p className="hover-text">Accessories</p>
                            <img src={accessories} alt="" className="img-fluid" />   
                        </a>
                    </Col>
                    <Col md={6} className="col-padding">
                        <a href="/collections" className="img-holder">
                            <p className="hover-text">Knits</p>
                            <img src={knits} alt="" className="img-fluid" />   
                        </a>
                    </Col>
                    <Col md={6} className="col-padding">
                        <a href="/collections" className="img-holder">
                            <p className="hover-text">Outerwear</p>
                            <img src={outerwear} alt="" className="img-fluid" />   
                        </a>
                    </Col>
                    <Col md={6}>
                        <a href="/collections" className="img-holder">
                            <p className="hover-text">Tees</p>
                            <img src={tees} alt="" className="img-fluid" />   
                        </a>
                    </Col>
                    <Col md={6}>
                        <a href="/collections" className="img-holder">
                            <p className="hover-text">Sweats</p>
                            <img src={sweats} alt="" className="img-fluid" />   
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClothingGrid
