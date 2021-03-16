import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { reset } from 'redux-form'

//Import self Components
import Category from './components/Category'
import News from './components/News'

//Import self Renducers
import { addCategory, selectCategory } from './reducers/Categories'
import { addNews } from './reducers/News'


class App extends Component {
  render() {
    const { 
      categories,
      news,
      addCategory,
      selectCategory,
      selected,
      addNews,
     } = this.props

    return (
      <div className="App">
        <Category 
          selectCategory={selectCategory} 
          addCategory={addCategory} 
          categories={categories} 
        />
        <News addNews={addNews} selectedCategory={selected} news={news} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //Usamos el destructuring para Sacar la informacion de Categories.data 
  // pero renombrandolo con el alias de "data" a "categories"
  const { Categories: { data: categories, selected } } = state
  const { News: { data: news } } = state

  return {
    categories,
    news: news.filter(x => x.categoryId === selected),
    selected,
  }
}

const mapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  },
  selectCategory: payload => dispatch(selectCategory(payload)),
  addNews: payload => {
    dispatch(addNews(payload))
    dispatch(reset('news'))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
