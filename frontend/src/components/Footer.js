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
                          <Col className='text-center py-1'><Link to='https://github.com/hammadweb2020'><i className="fab fa-github" style={{fontSize:'24px'}}></i></Link> &nbsp; <Link to='http://linkedin.com/in/muhammad-hammad-siddique-a4a54765/'><i className="fab fa-linkedin" style={{fontSize:'24px'}}></i></Link> &nbsp; <Link to='https://www.behance.net/hammadweb'><i className="fab fa-behance" style={{fontSize:'24px'}}></i></Link></Col>  
                        
                    </Row>

                    <Row>
                          <Col className='text-center py-2'></Col>  
                        
                    </Row>


          </Container>
        </footer>
    )
}

export default Footer
