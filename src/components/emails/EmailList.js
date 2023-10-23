import React, { useEffect, useState } from 'react';
import './emaillist.css';

const EmailList = ({id,email,name,date,subject,short_description,body}) => {

  const url = "https://flipkart-email-mock.vercel.app/";
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (id,name,email, subject, short_description) => {
    const favorites = {
      id: 1,
      name:name,
      email:email, 
      subject:subject, 
      short_description:short_description
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } 

  return (
    <div className='container'>
        <div className="left-container">
            <h1>F</h1>
        </div>
        <div className="right-container">
            <p>From: <span>{name} {`<${email}>`}</span></p>
            <p>Subject: <span>{subject}</span></p>
            <p>{short_description}</p>
            <p>26/06/2020 10:30am <span onClick={addFavorites(id,name,email, subject, short_description)} className='favorite-color'>Favorite</span></p>
        </div>
        
    </div>
  )
}

export default EmailList