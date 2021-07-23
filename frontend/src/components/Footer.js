import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <Container>
                    <Row>
                          <Col className='text-center py-3'>Copyright &copy; MERN Shopping App | Developed by Hammad Siddique</Col>  
                        
                    </Row>
                    <Row>
                          <Col className='text-center py-1'><a href='https://github.com/hammadweb2020' target='_blank' rel="noreferrer"><i className="fab fa-github" style={{fontSize:'24px'}}></i></a> &nbsp; <a target='_blank' href='http://linkedin.com/in/muhammad-hammad-siddique-a4a54765/' rel="noreferrer"><i className="fab fa-linkedin" style={{fontSize:'24px'}}></i></a> &nbsp; <a target='_blank' href='https://www.behance.net/hammadweb' rel="noreferrer"><i className="fab fa-behance" style={{fontSize:'24px'}}></i></a></Col>  
                        
                    </Row>

                    <Row>
                          <Col className='text-center py-2'></Col>  
                        
                    </Row>


          </Container>
        </footer>
    )
}

export default Footer
