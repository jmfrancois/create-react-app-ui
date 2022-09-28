import logo from './logo.svg';
import { ThemeProvider, ButtonPrimary } from '@talend/design-system';
import './App.css';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <header className="App-header"><img className="App-logo" src={logo} alt="logo" /></header>

      <article>
        <ButtonPrimary onClick={(e) => console.log(e)}>Coucou</ButtonPrimary>
      </article>
    </div>
    </ThemeProvider>
  );
}

export default App;
