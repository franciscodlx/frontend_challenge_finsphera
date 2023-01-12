import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image'
import logo from '../../assets/logo_black.png';

import NabBar from "../global/nav-bar";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <NabBar />
      <Container className='h-100'>
        <Form 
          className='formLogin pt-4 pb-5 mx-4 col-md-7 mx-md-auto col-lg-6 col-xl-4'
          noValidate 
          validated={ validated } >
          <fieldset 
            className='d-flex flex-column justify-content-center col-10 me-auto ms-auto mb-5 col-lg-7'
            >
            <Image 
              className='brand-image mx-auto'  
              src={ logo } 
              />
            <p
              className='text-center formLogin-titleLogin mt-3 mb-4 pb-2'>
                Hola, por favor ingresa tus datos
            </p>
            <FloatingLabel 
              controlId="floatingUsername"
              label="Usuario &oacute; email"
              className="mb-4 pb-3 mx-3" >
              <Form.Control 
                id="username" 
                placeholder="Usuario &oacute; email"
                required />
              <Form.Control.Feedback 
                type="invalid">
                Por favor ingresa usuario &oacute; email
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel 
              className="mb-4 pb-3 mx-3"
              controlId="floatingPassword"
              label="Contrase&ntilde;a"
            >
              <Form.Control
                id="password" 
                placeholder="Contrase&ntilde;a"
                required 
                type='password'
              />
              <FontAwesomeIcon 
                className='icon-eyeShow'
                icon={ faEye } />
              <Form.Control.Feedback 
                type="invalid">
                Por favor ingresa contrase&ntilde;a
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button 
              className='btn-login py-2'
              onClick={ handleSubmit }
              type="button" 
              variant="success"
              >
                Iniciar Sesi&oacute;n
            </Button>
          </fieldset>
          <hr className='me-auto ms-auto w-75' />
          <fieldset
            className='d-flex flex-column justify-content-center col-10 me-auto ms-auto col-lg-7'
            >
            <p className='text-center formLogin-notAccount fw-semibold'>
              ¿A&uacute;n no tienes cuenta con nosotros?
            </p>
            <Button 
              className='btn-sigin py-2'
              type="button"
              variant="warning"
              onClick={() => window.location.href = '/sigin'}
              >
                Reg&iacute;strate aqu&iacute;
            </Button>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}

export default Login;