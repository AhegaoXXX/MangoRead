import './App.css';
// import "@fontsource/montserrat";
import MainPage from './pages/mainPage/MainPage';
import InfoPage from './pages/infoPage/InfoPage';
import MainSignUp from './components/registerModal/MainSignUp';

function App() {
  return (
    <div className="App">
      <>
        {/* <MainPage/> */}
        {/* <InfoPage/> */}
        <MainSignUp/>
      </>
    </div>
  );
}

export default App;
