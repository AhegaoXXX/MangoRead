import './App.css';
import MainPage from './pages/mainPage/MainPage';
import InfoPage from './pages/infoPage/InfoPage';
import { Route,Routes} from 'react-router-dom';



function App(props) {
  return (
    <Routes>
      <Route index element={<MainPage/>} />
      <Route path="/:id" element={<InfoPage/>}/>
    </Routes>
  );
}

export default App;
