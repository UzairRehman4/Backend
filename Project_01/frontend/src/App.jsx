import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => {
        console.log(">>>>>>>>>>", response);
        setData(response.data);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Integrate Backend with Frontend</h1>
      <p>Data Length: {data.posts?.length}</p>

      <h1>Posts</h1>
      {
        data.posts?.map((post) => (
          <div key={post.post_id} style={{ backgroundColor: "lightblue", color: "black", padding: "20px" }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
              <h4>Comments:</h4>
              {post.comments.map(comment => (
                <div key={comment.comment_id}>
                  <p>{comment.user}: {comment.content} (Likes: {comment.likes})</p>
                </div>
              ))}
            </div>
          </div>
        ))
      }
      <h1>Notifications</h1>
      {
        data.notifications?.map((notifications) => (
          <div key={notifications.notification_id} style={{ backgroundColor: "lightblue", color: "black", padding: "20px" }}>
            <h3>{notifications.type}</h3>
            <p>{notifications.message}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
