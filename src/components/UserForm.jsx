import React, { Component } from 'react'

const validate = values => {
    const errors = {}
    if(!values.name) {
        errors.name = 'You must enter your name'
    }
    if(!values.email) {
        errors.email = 'You must enter your email'
    }
    if(!values.website) {
        errors.website = 'You must enter your website'
    }
    return errors
}

export default class UserForm extends Component {
    state = {
        errors: {},
    }

    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            ...props.initialsValues,
        }
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...noErrors } = this.state
        const result = validate(noErrors)
        this.setState({ errors: result })
        if (!Object.keys(result).length) {
            const { handleSubmit, handleUpdate, initialsValues } = this.props
            if(initialsValues.id) {
                handleUpdate(initialsValues.id, noErrors)
            }else {
                handleSubmit(noErrors)
            }
        }else {
            this.setState({ errors: result })
        }
    }

    render() {
        const { errors } = this.state
        const { initialsValues } = this.props

        return(
            <form onSubmit={this.handleSubmit}>
                <input defaultValue={initialsValues.name} placeholder="Name" name="name" onChange={this.handleChange} />
                {errors.name && <p>{errors.name}</p>}
                <input defaultValue={initialsValues.email} placeholder="Email" name="email" onChange={this.handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <input defaultValue={initialsValues.website} placeholder="Website" name="website" onChange={this.handleChange} />
                {errors.website && <p>{errors.website}</p>}
                <input type="submit" value="Send" />
            </form>
        )
    }
}