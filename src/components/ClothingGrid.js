import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import temp0 from '../assets/temp1.png'
import '../css/clothingrid.css'

const ClothingGrid = () => {
    return (
        <div>
            <Container>
                <Row className="text-center">
                    <Col md={6} className="parent">
                        <p className="child">
                            Test
                            <Image className="image-hover" src={temp0} alt="hello" fluid />
                        </p>
                    </Col>
                    <Col md={6}>
                        <p><Image className="image-hover" src={temp0} alt="hello" fluid /></p>
                    </Col>
                    <Col md={6}>
                        <p><Image className="image-hover" src={temp0} alt="hello" fluid /></p>
                    </Col>
                    <Col md={6}>
                        <p><Image  className="image-hover" src={temp0} alt="hello" fluid /></p>
                    </Col>

                    <Col md={6}>
                        <p><Image className="image-hover"src={temp0} alt="hello" fluid /></p>
                    </Col>
                    <Col md={6}>
                        <p><Image className="image-hover" src={temp0} alt="hello" fluid /></p>
                    </Col>
                    <Col md={6}>
                        <p><Image className="image-hover" src={temp0} alt="hello" fluid /></p>
                    </Col>
                    <Col md={6}>
                        <p><Image className="image-hover" src={temp0} alt="hello" fluid /></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClothingGrid
