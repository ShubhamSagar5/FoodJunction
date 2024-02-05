
import { Outlet } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import UserContext from './utilis/UserContext';
import { useEffect, useState } from 'react';
import {Provider} from 'react-redux'
import appStore from './utilis/appStore';

const App = () => {
  
  const [userName, setUserName] = useState()

  useEffect(()=>{
    

    const data = {
      name:"Hari"
    }
    setUserName(data.name)
  },[])
  
  
  
  return (
    <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
       <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </UserContext.Provider>
    </Provider>

   
  )
}






export default App;
