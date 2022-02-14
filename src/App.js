import './App.css';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <NavBar />
        <Title />
      </div>
      <About />
    </div>
  );
}

export default App;
