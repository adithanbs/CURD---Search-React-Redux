import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Home from './component/Home';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
