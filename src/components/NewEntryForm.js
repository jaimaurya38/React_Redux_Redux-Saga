import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm() {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon='tags'
                    width={12}
                    label="Description"
                    placeholder="New Entry"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    width={4}
                    label="Value"
                    icon='dollar'
                    iconPosition='left'
                    placeholder="Amount"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
            <ButtonSaveOrCancel />
        </Form>
    )
}

export default NewEntryForm