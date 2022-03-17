import React, { useEffect, useState } from "react";
import { ref, get } from 'firebase/database';
import { fireDb } from "../firebase";




function Home() {
  // Adress useState
  const [adress, getAdress] = useState([]);

  // If you want to fetch another data from firebase add another useState. Example:
  const [anotherDataFromFirebase, getAnotherData] = useState([]);

  // useEffect used to trigger React's componentDidMount
  useEffect(() => {

    // Get adress from Firebase
    const adressRef = ref(fireDb, 'adresse/');
    get(adressRef).then(snapShot => {
      if (snapShot.exists()) {
        getAdress(snapShot.val());
      } else {
        getAdress('No adress found!');
      }
    }).catch(error => {  
      
      console.error(error);
      getAdress('An error occurred while fetching data from Firebase');
    });

    // If you want others data from Firebase, you can write the code here. Example:
    getAnotherData('Others data here');
  }, [])

  

  return (
    <div>
      <div>{adress}</div>
      <div>{anotherDataFromFirebase}</div>
    </div>
  );
}

export default Home; 