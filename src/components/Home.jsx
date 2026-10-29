import CardPizza from "./CardPizza"
import Header from "./Header"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {pizzas} from '../../public/pizzas.js'

let Home = () =>{

    return (
        <>
          <Header/>
          <main className="my-4">
            <Container>
              <Row className="gy-3">
                {pizzas.map((pizza) => (
                  <Col md={6} lg={4} >
                  <CardPizza
                    img={pizza.img}
                    name={pizza.name}
                    price={pizza.price.toLocaleString()}
                    ingredients={pizza.ingredients}
                    />
                </Col>
                  ))}
              </Row>
            </Container>
          </main>
        </>
    )
}

export default Home