
import { Flip, ToastContainer } from 'react-toastify';
import './App.css';

import Index from './Routing';

function App() {
  return (
<>
<ToastContainer
 limit={4}
 transition={Flip}/>
<Index/>
</>

  );
}

export default App;
