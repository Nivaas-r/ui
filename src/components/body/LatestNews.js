import React, { useState, useEffect } from 'react';
import '../styles/LatestNews.css';

const LatestNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null); 

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = 'a529bfd0a80241f6b889197a06c1c67e'; 
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`
        
      );

      const data = await response.json();
      setNewsArticles(data.articles.slice(0, 6)); 
    };

    fetchNews();
  }, []); 

  const handleLearnMoreClick = (article) => {
    setSelectedArticle(article); 
  };

  const closeDetailedView = () => {
    setSelectedArticle(null); 
  };

  return (
    <section className="latest-news">
      <h2>Latest Medical News</h2>
      {newsArticles.length > 0 ? (
        <ul className="news-card-list">
          {newsArticles.map((article) => (
            <li key={article.url} className="news-card">
              <img src={article.urlToImage} alt={article.title} />
              <div className="content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
               <div className='new-button'>
                <button onClick={() => handleLearnMoreClick(article)}>
                  Learn More
                </button></div> 
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading news articles...</p>
      )}

      {selectedArticle && (
        <div className="detailed-view">
          <h2>{selectedArticle.title}</h2>
          <img src={selectedArticle.urlToImage} alt={selectedArticle.title} />
          <p>{selectedArticle.content}</p>
          <button onClick={closeDetailedView}>Close</button>
          <a href={selectedArticle.url} target="_blank" rel="noreferrer">
            Read Full Article
          </a>
        </div>
      )}
    </section>
  );
};

export default LatestNews;
