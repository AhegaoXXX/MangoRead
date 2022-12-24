import './App.css';
import MainPage from './pages/mainPage/MainPage';
import InfoPage from './pages/infoPage/InfoPage';
import MainSignUp from './components/registerModal/MainSignUp';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        

        <MainPage/>
        {/* <InfoPage/>  */}
        {/* <MainSignUp/>  */}
    </div>
  );
}

export default App;
