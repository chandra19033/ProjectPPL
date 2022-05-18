import React, { useEffect } from 'react'
import '../css/EditProfileUser.css'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import { Button, DropdownButton } from 'react-bootstrap'
import { useState } from "react";
import { useReducer } from "react";
import axios from 'axios'
import swal from 'sweetalert'

const Swal = require('sweetalert2');

const initialState = {
	name: "",
	npm: "",
	avatar: null,
	year: "",
	faculty: "",
	phone_number: "",
	password: ""
};

const reducer = (currentState, action) => {
	switch (action.type) {
		case "name":
			return { ...currentState, name: action.payload };
		case "npm":
			return { ...currentState, npm: action.payload };
		case "avatar":
			return { ...currentState, avatar: action.upload };
		case "year":
			return { ...currentState, year: action.payload };
		case "faculty":
			return { ...currentState, faculty: action.payload };
		case "phone_number":
			return { ...currentState, phone_number: action.payload };
		case "password":
			return { ...currentState, password: action.payload };
		default:
			return currentState;
	}
  };

export default function EditProfileUser (props) {
	const idUser = props.match.params.id;

	const [preload, setPreLoad] = useState([]);

	useEffect(()=>{
	    axios.get(`${process.env.REACT_APP_BACKEND_URL}profiles/${idUser}`)
	    .then((response)=> {
			setPreLoad(response.data.data);
			console.log(response.data.data);
		})
		.catch((err) => {
			console.log(err);
		});
	},[])

	const [user, dispatch] = useReducer(reducer, initialState);


  	const [disable, setDisable] = useState(false);	

	const submitProfile = (e) => {
		e.preventDefault();
		setDisable(true);
		console.log(user);
	
		const dataForm = new FormData();
		dataForm.append("id", idUser);
		if (user.name !== ""){
			dataForm.append("name", user.name);
		}
		if (user.avatar !== null){
			dataForm.append("avatar", user.avatar);
		}
		if (user.npm !== ""){
			dataForm.append("npm", user.npm);
		}
		if (user.year !== ""){
			dataForm.append("year", user.year);
		}
		if (user.faculty !== ""){
			dataForm.append("faculty", user.faculty);
		}

		if (user.phone_number !== ""){
			dataForm.append("phone_number", user.phone_number);
		}
		
		if (user.password !== ""){
			dataForm.append("password", user.password);
		}


		axios
		  .post(`${process.env.REACT_APP_BACKEND_URL}profiles/edit/${idUser}`, dataForm)
		  .then((response) => {
			console.log(response)
			setDisable(false);
			Swal.fire({
				icon: 'success',
				title: 'Edit Profile Berhasil',
				allowOutsideClick: false,
				allowEscapeKey: false,
				confirmButtonColor: '#21c177',
				preConfirm: () => {
					window.location.href = "/profileuser";
				}	  
			}) 		
		  })
		  .catch((err) => {
			swal({
				title: "Edit Profile Gagal",
				icon: "warning",
				dangerMode: true,
			})
			return;
		  });
		
	};

    return (
	<div className='EditProfileUser_EditProfileUser'>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.EditProfileUser_Vector} />
			<img className='Vector_1' src = {ImgAsset.EditProfileUser_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.EditProfileUser_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.EditProfileUser_Vector_3} />
		</div>

		<Navbar/>
		<Link to='/profileuser'>
			<BackButton/>
		</Link>

		<img className='Rectangle21' src = {ImgAsset.EditProfileUser_Rectangle21} />
		
		<center><span className='EditProfile'>Edit Profile</span></center>
		<div className='grup1'>
			<img className='Line7' src = {ImgAsset.EditProfileUser_Line7} />
			
			{
			preload.avatar !== null ? (
				<img className='Image' src = {`${process.env.REACT_APP_BACKEND_URL}${preload.avatar}`} style={{width: 280, height: 280, borderRadius: 280/ 2}} />
			):(
				<img className='Image' src = {ImgAsset.BlankWhite} style={{width: 280, height: 280, borderRadius: 280/ 2}} />
			)
		}

		</div>
		<div className='Group577'>
			<input className='Rectangle19_1'
				type="file"
				name="avatar"
				accept="image/*"
				onChange={(e) =>
					dispatch({
						type: "avatar",
						upload: e.target.files[0],
					})
				}
			/>				
		</div>
		
		<div className='Group317'>
			<input className='InputForm1'
				// disabled={disable}
				name='name'
				type="text" 
				defaultValue ={preload.name}
				onBlur={(e) =>
				  dispatch({ type: "name", payload: e.target.value })
				}
                placeholder="Enter Name"
			/>
			<span className='NamaLengkap'>Nama Lengkap</span>
		</div>
		<div className='Group580_1'>
			<input className='InputForm1'
				// disabled={disable}
				name='phone_number'
				type="text"
				defaultValue ={preload.phone_number}
				onBlur={(e) =>
				  dispatch({ type: "phone_number", payload: e.target.value })
				}
                placeholder="Enter Contact"
			/>
			<span className='NomorTelepon'>Kontak</span>
		</div>
		<div className='Group582'>
			<input className='InputForm1'
				// disabled={disable}
				name='faculty'
				type="text" 
				defaultValue ={preload.faculty}
				onChange={(e) =>
				  dispatch({ type: "faculty", payload: e.target.value })
				}
                placeholder="Enter your Faculty"
			/>
			<span className='Fakultas'>Fakultas</span>
		</div>
		<div className='Group583'>
			<input className='InputForm1'
				// disabled={disable}
				name='npm'
				type="text" 
				defaultValue ={preload.npm}
				onChange={(e) =>
				  dispatch({ type: "npm", payload: e.target.value })
				}
                placeholder="Enter NPM"
			/>
			<span className='NPM'>NPM</span>
		</div>
		<div className='Group571'>
			{/* <DropdownButton className='Rectangle1_4'/> */}
			<input className='InputForm1'
				// disabled={disable}
				name='year'
				type="text" 
				defaultValue ={preload.year}
				onChange={(e) =>
				  dispatch({ type: "year", payload: e.target.value })
				}
                placeholder="Enter Year"
			/>
			{/* <span className='_2019'>2019</span> */}
			<span className='Angkatan'>Angkatan</span>
			{/* <img className='Polygon2' src = {ImgAsset.EditProfileUser_Polygon2} /> */}
		</div>
		<div className='Group581'>
			<input className='InputForm2'
				// disabled={disable}
				name="password"
				type='password'
				value ={user.password}
				onChange={(e) =>
				  dispatch({ type: "password", payload: e.target.value })
				}
				id="exampleInputPassword"
                aria-describedby="Password"
                placeholder="Enter Password"
			/>
			<span className='Password'>Password</span>
		<div/>
		{/* <div className='Group580_2'>
			<input className='InputForm1'
				// disabled={disable}
				name='email'
				type="email" 
				defaultValue ={user.email}
				onBlur={(e) =>
				  dispatch({ type: "email", payload: e.target.value })
				}
                placeholder="Enter Email"
			/>
			<span className='Email'>Email</span>
		</div> */}
			
		</div>
		{/* Submit Button */}
			<div className='Group319'>
				<div className='Group580'>
					<Button 
						variant='primary'
						className='ButtonSubmit'
						// disabled={disable}
						onClick={submitProfile}
					>
						<div className='Group578'>
							<div className='Group579'>
								<div className='Group320'>
									<div className='Group300'>
										<span className='Simpan'>Simpan</span>
									</div>
								</div>
								<div className='akariconsedit'>
									<div className='Group'>
										<img className='Vector_5' src = {ImgAsset.EditProfileUser_Vector_5} />
										<img className='Vector_6' src = {ImgAsset.EditProfileUser_Vector_6} />
									</div>
								</div>
							</div>
						</div>	
					</Button> 
				</div>
			</div>
		<Footer/>
	</div>
	)
}