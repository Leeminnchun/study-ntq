import React from 'react';
import './App.css';
import FormValidate from './components/form-validation';
import {Route, Routes} from 'react-router-dom'
import UseForm from './components/use-form';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route  path='/' element={<FormValidate/>}/>
            <Route  path='/useform' element={<UseForm/>} />
        </Routes>
    </div>
  );
}

export default App;
