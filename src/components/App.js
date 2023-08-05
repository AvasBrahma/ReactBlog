//import {Switch, Route} from 'react-router-dom';-> Old way
import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import NavBar from './NavBar';

 
function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:postId' element={<PostDetails />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
