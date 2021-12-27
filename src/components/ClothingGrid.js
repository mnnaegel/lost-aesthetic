import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import temp0 from '../assets/temp1.png'
import '../css/clothingrid.css'

const ClothingGrid = () => {
    return (
        <div>
            <Container>
                <Row className="text-center">
                    <Col md={6}>
                        <div className="img-holder">
                            <p>Text Aligned Centrally Vertical &amp; Horizontal.</p>
                            <img src={temp0} alt="" className="img-fluid" />   
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="img-holder">
                            <p>Text Aligned Centrally Vertical &amp; Horizontal.</p>
                            <img src={temp0} alt="" className="img-fluid" />   
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="img-holder">
                            <p>Text Aligned Centrally Vertical &amp; Horizontal.</p>
                            <img src={temp0} alt="" className="img-fluid" />   
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="img-holder">
                            <p>Text Aligned Centrally Vertical &amp; Horizontal.</p>
                            <img src={temp0} alt="" className="img-fluid" />   
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="img-holder">
                            <p>Text Aligned Centrally Vertical &amp; Horizontal.</p>
                            <img src={temp0} alt="" className="img-fluid" />   
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="img-holder">
                            <p>Text Aligned Centrally Vertical &amp; Horizontal.</p>
                            <img src={temp0} alt="" className="img-fluid" />   
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="img-holder">
                            <p>Text Aligned Centrally Vertical &amp; Horizontal.</p>
                            <img src={temp0} alt="" className="img-fluid" />   
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="img-holder">
                            <p>Text Aligned Centrally Vertical &amp; Horizontal.</p>
                            <img src={temp0} alt="" className="img-fluid" />   
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClothingGrid
