import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { Heading } from 'evergreen-ui';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading size={900} marginTop="default">Hi 👋 </Heading>
      <Heading size={700} marginTop="default">I'm Alex. Welcome to my place on the web</Heading>
    </div>
  );
}

export default App;
