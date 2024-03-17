import React, {useState} from 'react';
import './App.css';

  const initialData = 
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]
  
  

function App() {

  const [data, setData] = useState(initialData);

  const sortbydate = () => {
    const sortedData = [...data].sort((a,b) =>{
      if(a.date === b.date){
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    })
    setData(sortedData);
  }

  const sortbyviews = () => {
    const sortedData = [...data].sort((a,b) => {
      if(a.views === b.views){
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    })
    setData(sortedData);
  }

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div className='buttons'>
      <button onClick={()=>sortbydate()}>Sort by Date</button>
      <button onClick={()=>sortbyviews()}>Sort by Views</button>
      </div>
      <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {
            [...data].map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.views}</td>
                  <td>{row.article}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
