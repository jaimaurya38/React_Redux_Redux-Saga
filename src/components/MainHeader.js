import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader({ title, type = 'h1', style = {} }) {
    return (
        <Header as={type} style={style}>{title}</Header>
    )
}

export default MainHeader