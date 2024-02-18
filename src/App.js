//import logo from './logo.svg';
import './App.css'
import React, {useReducer} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from './components/Booking';
import HomePage from './components/HomePage'
import ConfirmationPage from "./components/ConfirmationPage";
//import {fetchAPI, submitAPI} from "./bookingsAPI";


const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());
  for (let i = 17; i <= 22; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}
const submitAPI = function(formData) {
  return true;
};


function App() {
  const initialState = {availableTimes:  fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return {availableTimes: fetchAPI(new Date(date))}
}
const navigate = useNavigate();
function submitForm (formData) {
    if (submitAPI(formData)) {
        navigate("/confirmation")
    }
}
  return (
        <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
          <Route path="/confirmation" element={<ConfirmationPage/> } />
        </Routes>
        </>
  );
}

export default App;
