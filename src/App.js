import NavBar from './components/Navbar';
import { Heading } from 'evergreen-ui';
import { Row } from 'reactstrap';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Heading size={900} marginTop="default">Hi 👋 </Heading>
      <Heading size={700} marginTop="default">
        I'm Alex Reyes. Welcome to my site
      </Heading>
      <br></br>
      <Row>
          <a href="twitter.com" className="sm_Links">Twitter</a>
          <a href="twitter.com" className="sm_Links">Github</a>
          <a href="twitter.com" className="sm_Links">Linkedins</a>
      </Row>
    </div>
  );
}

export default App;
