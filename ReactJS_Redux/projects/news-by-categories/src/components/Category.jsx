import React, { Component } from 'react'
// Import self Components
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'

export default class Category extends Component {
    render() {
        const { 
            categories, 
            addCategory, 
            selectCategory
        } = this.props
        return (
            <>
                <CategoryForm onSubmit={addCategory} />
                <CategoryList selectCategory={selectCategory} categories={categories} />
            </>
        )
    }
}