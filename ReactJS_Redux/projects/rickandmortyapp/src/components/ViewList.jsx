import React, { Component } from 'react'
import Header from './Header'
import List from './List'

export default class ViewList extends Component {
    render() {
        const { data } = this.props
        return(
            <>
                <Header />
                <List data={data} />
            </>
        )
    }
}