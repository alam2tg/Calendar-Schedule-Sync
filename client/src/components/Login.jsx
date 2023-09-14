//login page
// see SignupForm.js for comments
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

const style  =  {

  inputFields: {
    background: 'red',
    color: 'white',
  },
  inputLabels: {
    color: 'grey',
  }

};

const LoginPage = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation (LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
   
      
      const { data } = await login({
        variables: {
          ...userFormData
        }
      })
      Auth.login(data.login.token);

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Label
          style={style.inputLabels}
           htmlFor='email'>Email</Form.Label>
          <Form.Control
            style={style.inputFields}
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label
          style={style.inputLabels}
           htmlFor='password'>Password</Form.Label>
          <Form.Control
            style={style.inputFields}
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='danger'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;
