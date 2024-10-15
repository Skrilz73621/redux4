import './App.css';
import MainPage from './pages/mainPage/MainPage';
import UserPage from './pages/userPage/UserPage';
import Quote from './pages/quotePage/Quote';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <MainPage/> */}
      {/* <UserPage/> */}
      <h1>Random quote generator</h1>
      <Quote/>
    </div>
  );
}

export default App;
