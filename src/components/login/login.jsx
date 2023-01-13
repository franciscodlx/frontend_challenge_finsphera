import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image'
import logo from '../../assets/logo.png';

import NabBar from "../global/nav-bar";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [viewPass, setViewPass] = useState(false);

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
              label="Usuario &oacute; email"
              className="mb-4 mx-3" >
              <Form.Control 
                id="username" 
                onChange={val => setUsername(val.target.value)}
                placeholder="Usuario &oacute; email"
                value={ username }
                required />
              <Form.Control.Feedback 
                type="invalid">
                Por favor ingresa usuario &oacute; email
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel 
              className="mb-4 mx-3"
              label="Contrase&ntilde;a"
            >
              <Form.Control
                id="password" 
                onChange={val => setPass(val.target.value)}
                placeholder="Contrase&ntilde;a"
                required 
                type={ viewPass ? 'text' : 'password' }
                value={ pass }
                pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$'
                isValid={ false }
              />
              <FontAwesomeIcon 
                className='icon-eyeShow'
                onClick={() => setViewPass(!viewPass)}
                icon={ viewPass ? faEyeSlash : faEye } />
              <Form.Control.Feedback 
                type="invalid">
                Por favor ingresa contrase&ntilde;a, m&iacute;nimo 8 caracteres incluyendo n&uacute;meros, may&uacute;sculas y min&uacute;sculas y caracteres especiales
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button 
              className='btn-login py-2 fw-semibold'
              onClick={ handleSubmit }
              type="button" 
              variant="success"
              >
                Iniciar Sesi&oacute;n
            </Button>
          </fieldset>
          <div className='col-10 col-lg-7 mx-auto'>
            <hr className='mx-auto w-75' />
          </div>
          <fieldset
            className='d-flex flex-column justify-content-center col-10 me-auto ms-auto col-lg-7'
            >
            <p className='text-center formLogin-notAccount fw-semibold'>
              ¿A&uacute;n no tienes cuenta con nosotros?
            </p>
            <Button 
              className='btn-sigin py-2 fw-semibold'
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