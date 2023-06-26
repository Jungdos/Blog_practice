import './App.css';
import {Container, Nav, Navbar, Card, Button } from 'react-bootstrap';
import Bg from './images/main_bg.jpg'
import Cloth_01 from './images/cloth_01.jpg'
import Cloth_02 from './images/cloth_02.jpg'
import Cloth_03 from './images/cloth_03.jpg'

function App() {
  return (
    <div className="App">
      <Navbar style={{backgroundColor: 'pink'}} data-bs-theme="white">
        <Container >
          <Navbar.Brand href="#home" style={{fontSize: '1.4rem'}}>JW_Company</Navbar.Brand>
          <Nav className="me-auto" style={{ fontWeight: 'bold' }}>
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main_bg' style={{ backgroundImage: 'url('+ Bg +')'}}></div>

      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '5%'}}>

      <Card style={{ width: '18rem' }}>
      <Card style={{ backgroundImage: 'url('+ Cloth_01 +')' , backgroundSize: 'cover', height: '150px', backgroundPosition: 'center'}} />
      <Card.Body>
        <Card.Title>의류 세일</Card.Title>
        <Card.Text>
          여러가지 의류 할인중!
        </Card.Text>
        <Button variant="primary">바로가기</Button>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card style={{ backgroundImage: 'url('+ Cloth_02 +')' , backgroundSize: 'cover', height: '150px', backgroundPosition: 'center'}} />
      <Card.Body>
        <Card.Title>편한 의상</Card.Title>
        <Card.Text>
          그냥 집앞에 나갈떈?
        </Card.Text>
        <Button variant="primary">바로가기</Button>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem' }}>
      <Card style={{ backgroundImage: 'url('+ Cloth_03 +')' , backgroundSize: 'cover', height: '150px', backgroundPosition: 'center'}} />
      <Card.Body>
        <Card.Title>프렌차이즈</Card.Title>
        <Card.Text>
          쇼핑백이 한손 가득
        </Card.Text>
        <Button variant="primary">바로가기</Button>
      </Card.Body>
      </Card>

    
    </div>
    </div>
  );
}

export default App;
