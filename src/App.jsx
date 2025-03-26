import { useState, useEffect } from 'react';

const initialArticles = [
  { id: 1, title: "React", topics: "Come imparare React" },
  { id: 2, title: "Angular", topics: "Come imparare Angular" },
  { id: 3, title: "Vue", topics: "Come imparare Vue" }
];

function App() {
  const [newArticle, setNewArticle] = useState('');
  const [articleList, setArticleList] = useState(initialArticles);
  const [error, setError] = useState(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (newArticle.length <= 0) {
      setError('Error');
      return;
    } else {
      setError(null);
    }

    const newArticleItem = {
      id: articleList.length + 1,
      title: newArticle,
      topics: `Come imparare ${newArticle}`
    };

    setArticleList([newArticleItem, ...articleList]);
    setNewArticle('');
  }


  return (
    <>
      <div>
        <h1>Lista degli Articoli</h1>
        {articleList.map((article) => (
          <div key={article.id}>{article.title}</div>
        ))}
      </div>

      <h2>Aggiungi un nuovo articolo</h2>

      <div className="container">

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="new_article" className="form-label">Article</label>
            <input
              type="text"
              className="form-control"
              id="new_article"
              placeholder="Enter your article"
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
