import './App.css';
import Container from './components/Container';
import FirstComponent from './components/FirstComponent'
import Hook from './components/Hook';
import Images from './components/Images';
import List from './components/List';
import RenderizacaoCondicional from './components/RenderizacaoCondicional';

const App = () => {
  return (
    <> {/*Dá para chamar sem gerar uma div dessa forma, Fragment*/}
      <header className="App-header">
        <h1>React Learning</h1>
      </header>
      <main>
        <FirstComponent/><hr/>
        <Hook/><hr/>
        <p>Example of Import image</p>
        <Images/>
        <hr/><List/><hr/>
        <Container>
          <p>Texto vindo do pai dentro da tag do componente</p>
        </Container>
        <hr/><RenderizacaoCondicional x={5}/><hr/>
      </main>
    </>
  );
}

export default App;
