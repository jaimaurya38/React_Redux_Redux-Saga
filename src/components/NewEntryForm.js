import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm() {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon='tags'
                    width={12}
                    label="Description"
                    Placeholder="New Entry"
                />
                <Form.Input
                    width={4}
                    label="Value"
                    icon='dollar'
                    iconPosition='left'
                    Placeholder="Amount"
                />
            </Form.Group>
            <ButtonSaveOrCancel />
        </Form>
    )
}

export default NewEntryForm