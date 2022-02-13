import React, { useRef } from 'react';
import { Button, Form, ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useContacts } from '../contexts/ContactProvider';

export default function NewContactModal({ closeModal }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        createContact(idRef.current.value, nameRef.current.value)
        closeModal();
    };

    const idRef = useRef();
    const nameRef = useRef();
    const { createContact } = useContacts();

  return (
  <>    
  <ModalHeader closeButton>Create Contact</ModalHeader>
  <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label> 
            <Form.Control ref={idRef} type='text' required />
          </Form.Group>
        <Form.Group>
            <Form.Label>Name</Form.Label> 
            <Form.Control ref={nameRef} type='text' required />
        </Form.Group>   
        <Button type="submit">
            Create
        </Button>
      </Form>
  </ModalBody>
  </> 
  )
}
