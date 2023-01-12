import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import NewEntryForm from './NewEntryForm'

export default function Modaledit({ isOpen, setIsOpen }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <NewEntryForm />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}
