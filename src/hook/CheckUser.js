import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';


export default function CheckUser (){
    const [user, setUser] = useState([]);
    var count = 0;
    var StatusProfile = false;

    const [userId, setUserId] = useState(() => {
		const localData = sessionStorage.getItem("id");
		return localData ? localData : null;
	});

    console.log(userId);

    useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}profiles/${userId}`)
		.then((response) => {
                console.log(response.data.data);
			    setUser(response.data.data);
		})
		.catch((err) => {
			console.log(err);
		});

	},[]); 

    if (user.name !== null){
        count += 1;
    }
    if (user.npm !== null){
        count += 1;
    }
    if (user.faculty !== null){
        count += 1;
    }
    if (user.year !== null){
        count += 1;
    }
    if (user.phone_number !== null){
        count += 1;
    }
    if (count >= 5){
        StatusProfile = true;
    }

	return StatusProfile;
}
 
 