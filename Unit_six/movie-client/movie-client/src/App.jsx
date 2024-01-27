import { Routes, Route } from 'react-router-dom';
import './App.css'
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');

  console.log('App', sessionToken);

  const updateToken = newToken => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  }

  /* 
  useEffect()
  -Allows us to perform side effects in functional components
  -Accepts two arguments
    -function
    -dependency
      -optional
      -Can denote a specific event to trigger
  
      Examples:
      useEffect(() => {
        runs on very render
      });

      useEffect(() => {
        runs only on the first render
      }, []);

      useEffect(() => {
        runs on first render
        runs any time any dependency changes
      }, [state])
  */

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  return (
    <>
    <Routes>
      <Route 
      path='/'
      element={<Auth updateToken={updateToken}/>}
      />
      <Route 
      path='/movie'
      element={<h2>Movie Selection Placeholder</h2>}
      />
    </Routes>
    </>
  )
}

export default App
