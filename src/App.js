import './App.css';
import EnrolmentForm from './components/EnrolmentForm';
import { Theme, ThemeProvider } from "@chakra-ui/react"

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <EnrolmentForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
