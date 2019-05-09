import React from 'react';
import{Route, Link, BrowserRouter as Router} from 'react-router-dom'
const Home = ()=>(
  <div>
     <h2>Home</h2>
  </div>
)
const About = ()=>(
  <div>
     <h2>About</h2>
  </div>
)
const Topic= ({match})=>console.log('match', match) || (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
const Topics = ({match})=>console.log('match',match)||(
  <div>
     <h2>Topics</h2>
     <ul>
       <li><Link to={`${match.url}/rendering`}>
        Rendering with react
       </Link></li>
       <li><Link to={`${match.url}/component`}>
        Components
       </Link></li>
       <li><Link to={`${match.url}/prop-v-state`}>
        Props vs state
       </Link></li>
     </ul>
     <Route path="/Topics/:topicId" component={Topic}></Route>
     {/* <Route path="/Topics/components" component={Topic}></Route> */}
     {/* <Route path="/Topics/props-v-state" component={Topic}></Route> */}
     <Route exact path={match.url} render={()=>(
       <h3>please select the topic</h3>
     )}></Route>
  </div>
)
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Topics">Topics</Link></li>
        </ul>
        <hr></hr>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Topics" component={Topics}></Route>
      </div>

    </Router>
    
  );
}

export default App;
