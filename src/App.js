import './App.css';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Colors from './Components/Colors/Colors.js';

function App() {
  return (
    <>
      <Header />
      <Main Colors={Colors} />
    </>
  );
}

export default App;
