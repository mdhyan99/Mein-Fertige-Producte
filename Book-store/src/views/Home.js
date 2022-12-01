import React , {useContext}from 'react'
import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'
import  Button  from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'

import {BookContext} from '../contexts/BooksProvider'

export default function Home() {
    const {books} =useContext(BookContext)
  return (
    <Container>
        <Row>
            {
                books.map((book,i)=> {
                    return (
                        <Col key={i}>
                        <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={book.image} />
                        <Card.Body>
                        <Card.Title>{book.name}</Card.Title>
                        <Card.Text>
                       {book.price}
                        </Card.Text>
                        <Button variant="primary">Zum Warenkorp hinzufügen</Button>
                        </Card.Body>
                        </Card>
                        </Col> 
                    )
                })
            }
        </Row>
    </Container>
  )
}
