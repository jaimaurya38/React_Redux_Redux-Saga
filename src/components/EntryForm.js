import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

export default function EntryForm({
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setisExpense,
}) {
    return (
        <>
            <Form.Group>
                <Form.Input
                    icon='tags'
                    width={12}
                    label="description"
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
            <Segment compact>
                <Checkbox
                    toggle
                    label="is expenses"
                    checked={isExpense}
                    onChange={() => { setisExpense((oldState) => !oldState) }}
                />
            </Segment>
        </>
    )
}
