import './App.css';
import InputBox from './Pages/InputBox';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<InputBox/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
