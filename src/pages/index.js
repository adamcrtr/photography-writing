// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,
  Container,
  Nav,
  Card,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col


} from 'react-bootstrap';
import LightboxExample from '../components/LightboxExample';

// Step 2: Define your component
const IndexPage = () => {
  return (
     
    

      <Layout pageTitle="Home Page">  
      
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Container>
        <Row>
          <Col sm md>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/image.jpg"
      />
       
          </Col>
          <Col sm md>
      <StaticImage 
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://ik.imagekit.io/ybi4dztm50ub/image_ohO-CkdmB.jpg"
      />
       
          </Col>
          <Col sm md>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/image.jpg"
      />
       
          </Col>

          
         </Row>
<LightboxExample>

</LightboxExample>
      </Container>
     </Layout>
  )
}

// Step 3: Export your component
export default IndexPage