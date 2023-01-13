import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image'
import logo from '../../assets/logo.png';
import { getSearch } from '../../actions/characters'
import { useDispatch } from 'react-redux';

const NabBarCharacters = (props) => {
  const {
    handleMenu
  } = props;

  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState('');
  
  return (
    <>
      <Navbar bg="white" sticky='top' expand={ false } className='flex-md-nowrap p-0'>
          <Navbar.Brand href="#" className='col-md-3 col-lg-2 me-0 px-3 navbar-logo text-center'>
            <Image 
              className='brand-image'  
              src={ logo } 
              />
          </Navbar.Brand>
          <Navbar.Toggle className='position-absolute d-md-none' onClick={ () =>handleMenu() } type='button' />
          <div className='d-flex w-100 navbar-search m-2'>
            <div className='w-100 position-relative'>
              <Form.Control
                type="text"
                placeholder="Buscar"
                aria-label="Buscar"
                value={ inputSearch }
                onChange={val => setInputSearch(val.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} className='position-absolute icon-search' onClick={ () => dispatch(getSearch(inputSearch)) } />
            </div>
            <Nav className="d-none d-md-flex">
              <Nav.Item  className='text-nowrap'>
                <Nav.Link href="#" className='px-3'><FontAwesomeIcon icon={faUser} /> Nombre usuario</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
      </Navbar>
    </>
  );
}

export default NabBarCharacters;