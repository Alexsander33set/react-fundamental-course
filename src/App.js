import './App.css';
import FirstComponent from './components/FirstComponent'
import Hook from './components/Hook';
import Images from './components/Images';
import List from './components/List';

const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>React Learning</h1>
      </header>
      <main>
        <FirstComponent/>
        <Hook/>
        <Images/>
        <List/>
      </main>
    </>
  );
}

export default App;
