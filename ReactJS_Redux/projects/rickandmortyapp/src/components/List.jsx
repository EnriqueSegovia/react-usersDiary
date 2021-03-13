import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const { data } = this.props
        const caractersResults = data.results
        console.log(caractersResults)
        return(
            <ul>
                {caractersResults.map(x =>
                    <li key={x.id}>{x.name}</li>    )}
            </ul>
        )
    }
}