import { Col, Card } from 'react-bootstrap';

const Character = ({
  count,
  image,
  handleShow,
  name,
}) => {  
  return (
    <Col xs={ 6 } md={ 4 } lg={ 2 } onClick={ () => handleShow(count) } className='my-2'>
      <Card className='h-100'>
        <Card.Img className='card-img' variant="top" src={ image } />
        <Card.Body className='d-flex justify-content-center align-items-center'>
          <Card.Title className='text-center m-0'>{ name }</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Character;