import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

const ModalCharacter = (props) => {
  const {
    image,
    origin = {},
    name,
    species,
    status,
  } = props;

  const nameOrigin = origin.name || '';

  return (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='border-0'></Modal.Header>
        <Modal.Body className='pt-0'>
          <Card className='border-0'>
            <Card.Img variant="top" className='card-img' src={ image } />
            <Card.Body>
              <Card.Title>{ name }</Card.Title>
              <ul>
                <li><strong>Status:</strong> { status }</li>
                <li><strong>Species:</strong> { species }</li>
                <li><strong>Origin:</strong> { nameOrigin }</li>
              </ul>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
  );
}

export default ModalCharacter;