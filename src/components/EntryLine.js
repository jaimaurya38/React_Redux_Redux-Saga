import React, { useState } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react';
import Modaledit from './Modaledit';

function EntryLine({ id, discription, value, isExpense = true, deleteEntry }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign="right">
                    <Grid.Row>
                        <Grid.Column width={10} textAlign="left">{discription}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='edit' bordered onClick={() => setIsOpen(true)}></Icon>
                            <Icon name='trash' bordered onClick={() => deleteEntry(id)}></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Modaledit isOpen={isOpen} setIsOpen={setIsOpen}></Modaledit>
        </>
    )
}

export default EntryLine;