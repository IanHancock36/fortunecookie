import React from "react";
import "./style.css";
import axios from 'axios'

export default function App() {
  const [post, setPost] = React.useState('');
  React.useEffect(() => {
    axios.get('http://fortunecookieapi.com/v1/lessons/id')
    .then((response) => {
      setPost(response)
      console.log(response.data)
      console.log(post,'post')
    .catch(error)
    console.log(error)
   });
  }, []);
  return (
    <div>
     <h1>{post.lessonId}</h1>
      <p>{post.body}</p> 
    </div>
  );
}