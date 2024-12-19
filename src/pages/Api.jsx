import React, { useEffect, useState } from 'react';
import './Api.css';

function Api() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("API ga no'tog'ri murojaat qilindi");
      })
      .then((data) => setComments(data))
      .catch((error) => setError(error.message))
      .finally(() => console.log('API ga murojaat tugadi'));
  }, []);

  return (
    <div id="wrapper">
      {error ? (
        <p>{error}</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="block">
            <h3>{comment.name}</h3>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
            <span>{comment.id}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Api;
