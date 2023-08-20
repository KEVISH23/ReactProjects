// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer limit={4}/>
      <Header/>    
    </>
  );
}

export default App;
