import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return(
            <header>
                <h1 style={styles.inline}>RickAndMortyApp</h1>
                <input style={styles.inline} type="text" />
                <h2>Caracters</h2>
            </header>
        )
    }
}

const styles = {
    inline: {
        display: 'inline',
    }
}