import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './normalize.css';
import Test from './Test';
import LoginReg from './components/templates/LoginReg';
import LoginFormComplete from './UI/organisms/LoginFormComplete';
import RegisterFormComplete from './UI/organisms/RegisterFormComplete';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <useNavigate path='/' to='/login' replace={true} /> */}
      <Routes>     
        <Route path='/' element={<LoginReg form={<LoginFormComplete />} />} />
        <Route path="/Reg" element={<LoginReg form={<RegisterFormComplete />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
