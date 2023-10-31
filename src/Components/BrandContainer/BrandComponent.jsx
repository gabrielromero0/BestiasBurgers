import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';



function BrandComponent() {
  return (
      <Container>
      <Row>      
        <Col xs={6} md={6} >
        <Image src='https://firebasestorage.googleapis.com/v0/b/bestiasburgers.appspot.com/o/titulo.png?alt=media&token=7ff756c0-b0d3-420b-89bc-56fbb3f3150c&_gl=1*qu9rwi*_ga*NjU5ODc4Njc2LjE2OTgyNzgxMjM.*_ga_CW55HF8NVT*MTY5ODcxNTc2MC41LjEuMTY5ODcxNjU0Mi42LjAuMA.'></Image>
        </Col>  
        <Col xs={6} md={6} >
        <Image src='https://firebasestorage.googleapis.com/v0/b/bestiasburgers.appspot.com/o/bestiasBurguers.gif?alt=media&token=6b536de1-1445-4042-96c4-88ea108f1e00&_gl=1*1tp74k4*_ga*NjU5ODc4Njc2LjE2OTgyNzgxMjM.*_ga_CW55HF8NVT*MTY5ODcxMzU3OS40LjEuMTY5ODcxMzYyNy4xMi4wLjA.'></Image>
        </Col>   
      </Row>
    </Container>
  );
}

export default BrandComponent;
