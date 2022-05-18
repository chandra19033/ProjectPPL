import React from 'react'
import '../css/SigninUser.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { loginAPI } from "../API/authAPI";
import UseLogin from "../hook/UseLogin";
import swal from "sweetalert";
import Cookies from "js-cookie";

const Swal = require('sweetalert2');

export default function SigninUser (props) {

	const [username, password, usernameHandler, passwordHandler] = UseLogin();

	// post login
	const login = () => {
		var A = [username]
		var B = ['@mail.unpad.ac.id']

		const checkUsername = A.filter( 
			el => B.some(obj => el.toLowerCase().includes(obj.toLowerCase()))
		)

		if (username === "") {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Silahkan Masukkan Email',
				confirmButtonColor: '#c41607',	  
			}) 
			return;	}
			if (checkUsername.length === 0){
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Silahkan Masukkan Email Unpad',
					confirmButtonColor: '#c41607',	  
				}) 
				return;	}
			if (password === "") {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Silahkan Masukkan Password',
					confirmButtonColor: '#c41607',	  
				}) 
				return;	}
				
		const payload = {
		  email: username,
		  password: password,
		};
		console.log(payload);
		loginAPI
		  .post("login", payload)
		  .then((response) => {
			console.log(response);
			if (response.status === 200) {
				let getID = '';
				let getUser = '';
				const temp = response.data.data;
				temp.slice(0,1).map((data)=> {
					getID = data.id
					getUser = data.email
				});
				sessionStorage.setItem("id", JSON.stringify(getID));
				sessionStorage.setItem("user", JSON.stringify(getUser));
				sessionStorage.setItem("role", JSON.stringify(2));

				Swal.fire({
					icon: 'success',
					title: 'Berhasil Login',
					allowOutsideClick: false,
					allowEscapeKey: false,
					confirmButtonColor: '#21c177',
					preConfirm: () => {
						window.location.href = "/homepage";
					}	  
				}) 			
			} 
		  })
		  .catch((err) => {
			console.log(err.response.data.error);
			
			if (err.response.status === 404){
				console.log("error 404");
				Swal.fire({
					icon: 'error',
					title: 'Login Gagal',
					text: err.response.data.error,
					allowOutsideClick: false,
					allowEscapeKey: false,
					confirmButtonColor: '#21c177',
				}) 		
			}else{
				Swal.fire({
					icon: 'error',
					title: 'Login Gagal',
					text: "Akun Tidak Ditemukan",
					allowOutsideClick: false,
					allowEscapeKey: false,
					confirmButtonColor: '#21c177',
				}) 		
			}
				
		  });
	  };

	const enterSumbit = (e) => {
			console.log("enter login");
			login();
	};

	return (
	<div className='SigninUser_SigninUser'>
		<div className='carbonuseravatarfilledalt'>
			<img className='Vector' src = {ImgAsset.SigninUser_Vector} />
			<img className='Vector_1' src = {ImgAsset.SigninUser_Vector_1} />
		</div>

		

		<span className='Signin'>Sign In</span>
		<div className='Group220'>
			{/*Atas*/}
			<div className='Rectangle6'/>
			<div className='Vectors'>
				<img className='Vector_2' src = {ImgAsset.SigninUser_Vector_2} />
				<img className='Vector_3' src = {ImgAsset.SigninUser_Vector_3} />
			</div>
			<span className='Text1'>Silahkan Sign In untuk 
			melakukan pendaftaran UKM</span>
		</div>
		
			<div className='Group229'>
				<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
				<img className='logo' src = {ImgAsset.ukms_care_logo} />		
			</div>
		
		
		{/*Bawah*/}
		<div className='Vectors_1'>
			<img className='Vector_4' src = {ImgAsset.SigninUser_Vector_4} />
			<img className='Vector_5' src = {ImgAsset.SigninUser_Vector_5} />
		</div>
		
		{/*Lupa password*/}
		{/* <div className='SectionForgot'>
			<span className='Forgotpassword'>Forgot password?</span>
			<span className='Rememberme'>Remember me</span>
			<div className='Rectangle1'/>
		</div> */}

		{/*Email,Password*/}
		<div className='Username'>
			<input className='Input_Form' placeholder='Enter Email Unpad'
				value={username}
				onChange={usernameHandler}
				type="email"
			> 	
			</input>
		</div>
		<div className='Password'>
			<input className='Input_Form' type='password' placeholder='Enter Password'
				value={password}
				onChange={passwordHandler}
				// onKeyDown={(e) => enterSumbit(e)}
			> 	
			</input>
		</div>

		{/*Button Login*/}
		<Button className='Loginbtn'
			onClick={() => {
				login();
              }}
		> 
			{/* <div className='Rectangle'/> */}
			<span className='login'>Login</span>
		</Button>
		
		<span className='Belumpunyaakun'>Belum punya akun? </span>
		<Link to='/signupuser'>
			<span className='Signup'>Sign up!</span>
		</Link>
		
		
	</div>
	)
}