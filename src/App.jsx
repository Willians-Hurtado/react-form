import { useState } from 'react'


const articles = [
  { id: 1, title: "React", topics: "Come imparare React" },
  { id: 2, title: "Angular", topics: "Come imparare Angular" },
  { id: 3, title: "Vue", topics: "Come imparare Vue" }

]

function App() {


  return (
    <>
      <div>
        {articles.map((article) => (
          <div key={article.id}>{article.title}</div>
        ))}


      </div>

    </>
  )
}

export default App
