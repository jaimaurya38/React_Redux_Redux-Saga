import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react';

function EntryLine({ id, discription, value, isExpense = true, deleteEntry }) {
    return (
        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">{discription}</Grid.Column>
                    <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name='edit' bordered></Icon>
                        <Icon name='trash' bordered onClick={() => deleteEntry(id)}></Icon>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default EntryLine;