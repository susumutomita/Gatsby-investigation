import React from 'react'
import { Link } from 'gatsby'
import ArticleCard from './ArticleCard'
import './ArticleList.css'

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList 
