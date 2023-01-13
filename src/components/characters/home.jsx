import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Alert } from 'react-bootstrap';
import NabBarCharacters from "../global/nav-bar-characters";
import Sidebar from '../global/sidebar';
import ModalCharacter from './modal-character';
import { getSearch } from '../../actions/characters'
import Character from './character';

const Home = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(!1)
  const handleClose = () => setShowModal(!1)
  const [infoCharacter, setInfoCharacter] = useState(null);
  const handleShow = (key) => (setShowModal(!0), setInfoCharacter(items[key]));

  const handleMenu = () => setShow(!show);

  const dispatch = useDispatch();

  const {
    items = [],
  } = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(getSearch());
  }, [dispatch]);

  return (
    <>
      <NabBarCharacters handleMenu={ handleMenu } />
      <Container fluid={ true } className='characters-body'>
        <Row>
          <Sidebar show={ show } />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Alert show={ true } variant="danger" className='mt-4'>
              <h1 className='h1 alert-heading'>Hero Header</h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </Alert>
            <Row className='rounded border py-4'>
              {
                items.length ?
                  items.map((character, key) => <Character count={ key } handleShow={ handleShow } { ...character } key={ key } />)
                : 
                  <Alert variant='danger w-75 mx-auto'>
                    No se encontraron resultados.
                  </Alert>
              }
            </Row>
          </main>
        </Row>
      </Container>
      <><ModalCharacter show={showModal} {...infoCharacter} onHide={handleClose} /> </>
    </>
  );
}

export default Home;