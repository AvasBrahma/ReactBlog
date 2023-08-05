import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/'Component={Home}/>
        <Route exact path='/post/:postId'Component={PostDetails}/>
        <Route exact path='/create-post'Component={CreatePost}/>
      </Switch>
    </div>
  );
}

export default App;
