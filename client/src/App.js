import logo from './logo.svg';
import './App.css';
import Post from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className='container'>
      <h1>Create Post</h1>
    <Post/>
    <hr/>
    <h1>Posts</h1>
    <PostList/>
    </div>
  );
}

export default App;
