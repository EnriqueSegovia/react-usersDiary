import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const { newUser } = this.props
        return(
            <header>
                <h2 style={styles.inline}>Users</h2>
                <button onClick={newUser} style={styles.inline}>New User</button>
            </header>
        )
    }
}

const styles = {
    inline: {
        display: 'inline',
    }
}