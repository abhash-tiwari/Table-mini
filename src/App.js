import React, { useState } from 'react';
import styles from "./app.module.css"

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA || b.views - a.views;
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      return b.views - a.views || new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
  };

  return (
    <div>
      <div className={styles.header}>
      <h1 >Date and Views Table</h1>
      </div>
      
      <div className={styles.btn}>
         <button className={styles.btnStyl} onClick={sortByDate}>Sort by Date</button>
         <button className={styles.btnStyl} onClick={sortByViews}>Sort by Views</button>
      </div>

     <div className={styles.tableHeading}>
     <table className={styles.tableCard}>
        <thead>
          <tr className={styles.tr}>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody className={styles.table}>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
      
    </div>
  );
}

export default App;
