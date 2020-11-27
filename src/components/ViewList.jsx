import React, { Component } from 'react'
import Header from './Header'
import List from './List'

export default class ViewList extends Component {
    render() {
        const { data, handleClick, newUser } = this.props
        return(
            <>
                <Header newUser={newUser} />
                <List handleClick={handleClick} data={data} />
            </>
        )
    }
}