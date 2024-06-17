import "./App.css";
import Router from "../routes/Router";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router/>

      <div>
        {/* <button onClick={notify}>Notify !</button> */}
        <ToastContainer />
      </div>
      
    </>
  );
}

export default App;
