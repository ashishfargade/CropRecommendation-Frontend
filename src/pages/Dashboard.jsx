
import React, { useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
import { Menu } from '../components/Menu'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

export const Dashboard = () => {

    const [selection, setSelection] = useState(() => {
      const storedSelection = localStorage.getItem('selection');
      return storedSelection ? parseInt(storedSelection) : 0;
    }
    ) ;

    useEffect(() => {
      // Save the count in localStorage whenever it changes
      localStorage.setItem('selection', selection.toString());
    }, [selection]);

    useEffect(()=> {
      onAuthStateChanged(auth, (user) => {
        if(user){
          const uid = user.uid;
          console.log("uid", uid);
        }else{
          console.log("user logged out");
        }
      })
    }, [])

  return (

    <>
        <div className="flex">
        {/* Navigation Bar */}
            <Menu selection={selection} setSelection={setSelection}/>
        {/* Main Components */}
          <MainContent selection={selection}/>
        </div>

        

        

    </>
  )
}
