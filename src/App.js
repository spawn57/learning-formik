import './App.css';
import EnrolmentForm from './components/EnrolmentForm';
import { theme, ThemeProvider } from "@chakra-ui/react"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <EnrolmentForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
