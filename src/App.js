import './App.css';
import MainPage from './pages/mainPage/MainPage';
import InfoPage from './pages/infoPage/InfoPage';
import MainSignUp from './components/registerModal/MainSignUp';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import CardsMainPage from './components/cardsMainPage/CardsMainPage';
import AddCommentPage from './pages/addCommmentPage/AddCommentPage';




function App(props) {
  return (
    <Routes>
      <Route index element={<MainPage/>} />
      <Route path="/:id" element={<InfoPage/>}/>
      {/* <Route index element={<AddCommentPage/>}/> */}
    </Routes>
  );
}

export default App;
