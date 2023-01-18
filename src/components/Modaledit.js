import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

export default function Modaledit({ isOpen, setIsOpen, addEntry, description, value, isExpense, setDescription, setValue, setisExpense }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    addEntry={addEntry}
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setisExpense={setisExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>ok</Button>
            </Modal.Actions>
        </Modal>
    )
}
