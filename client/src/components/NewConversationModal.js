import React, { useState } from 'react';
import { Button, Form, ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useContacts } from '../contexts/ContactProvider';
import { useConversations } from '../contexts/ConversationsProvider';

export default function NewConversationModal({ closeModal }) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts } = useContacts();
    const { createConversation } = useConversations();

    function handleSubmit(e) {
        e.preventDefault();
        createConversation(selectedContactIds)
        closeModal();
    }

    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContactsIds => {
            if (prevSelectedContactsIds.includes(contactId)) {
                return prevSelectedContactsIds.filter(prevId => {
                    return contactId === prevId
                })
            } else {
                return [...prevSelectedContactsIds, contactId]
            }
        })
    }

  return (
    <>    
    <ModalHeader closeButton>Create Conversation</ModalHeader>
    <ModalBody>
          <Form onSubmit={handleSubmit}>
            {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check 
                type='checkbox'
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
                />
            </Form.Group>
            ))}
         <Button type='submit'>Create</Button>   
        </Form>
    </ModalBody>
    </> 
  )
}
