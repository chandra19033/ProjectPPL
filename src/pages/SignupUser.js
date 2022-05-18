import React from 'react'
import '../css/SignupUser.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import UseRegister from '../hook/UseRegister'
import { registerAPI } from '../API/authAPI'
import 'react-confirm-alert/src/react-confirm-alert.css';

const Swal = require('sweetalert2');

export default function SignupUser () {
	const [
		usernameReg,
		passwordReg,
		confirmPass,
		usernameHandler,
		passwordHandler,
		confirmPassHandler,
	] = UseRegister();
	
	// Post Register
	const register = () => {

		
		// Email Unpad Checker
		var A = [usernameReg]
		var B = ['@mail.unpad.ac.id']

		const checkUsername = A.filter( 
			el => B.some(obj => el.toLowerCase().includes(obj.toLowerCase()))
		)

		if (usernameReg === "") {
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
		if (passwordReg === "") {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Silahkan Masukkan Password',
				confirmButtonColor: '#c41607',	  
			}) 
			return;	}
		if (confirmPass === "") {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Silahkan Masukkan Confirm Password',
				confirmButtonColor: '#c41607',	  
			}) 
			return;	}
		if (confirmPass !== passwordReg) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Confirm Password dan Password Tidak Sesuai!',
				confirmButtonColor: '#c41607',
		}) } 
		else {
		  const payload = {
			email: usernameReg,
			password: passwordReg,
			password_confirmation: confirmPass
		  };
		  registerAPI
			.post("register", payload)
			.then((response) => {
			  console.log(response);
			  console.log(usernameReg);
			  if (response.status === 200) {
				Swal.fire({
					title: 'Registrasi Akun Telah Berhasil',
					text: "Silahkan Cek Email Anda untuk Verifikasi Akun",
					allowOutsideClick: false,
					allowEscapeKey: false,
					confirmButtonText: 'Sign In',
					confirmButtonColor: '#21c177',
					preConfirm: () => {
						window.location.href = "/signinuser";
					  }
				});
			  }
			})
			.catch((err) => {
			  console.log(err.response.data.message);
			  let message = err.response.data.message;
			  Swal.fire({
				icon: 'error',
				title: 'Oops!',
				text: message,
				showDenyButton: true,
				allowOutsideClick: false,
				allowEscapeKey: false,
				showConfirmButton: false,			
				denyButtonText: 'Ok',
				denyButtonColor: '#07redb5c4',
			  });
			});
		}
	  };
	
	  const enterSumbit = (e) => {
		  console.log("enter");
		  register();
	  };


    return (
	<div className='SignupUser_SignupUser'>
		<div className='Group220'>
			<div className='Rectangle6'/>
			<div className='Vectors'>
				<img className='Vector' src = {ImgAsset.SignupUser_Vector} />
				<img className='Vector_1' src = {ImgAsset.SignupUser_Vector_1} />
			</div>
			<span className='Text1'>Lakukan Sign In untuk melakukan pendaftaran UKM</span>
		</div>
	
			<div className='Group228'>
				<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
				<img className='logo' src = {ImgAsset.ukms_care_logo} />
			</div>
		
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.SignupUser_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.SignupUser_Vector_3} />
		</div>
			
		<div className='Username'>
			<input className='Input_Form' placeholder='Enter Email Unpad'
				value={usernameReg}
				onChange={usernameHandler}
				type="email"
			> 	
			</input>
		</div>
		<div className='Password'>
			<input className='Input_Form' placeholder='Enter Password'
				value={passwordReg}
                onChange={passwordHandler}
                type="password"
			> 	
			</input>
		</div>

		<div className='Password_2'>
			<input className='Input_Form' placeholder='Re-Enter Password'
				value={confirmPass}
                onChange={confirmPassHandler}
                type="password"
			> 	
			</input>
		</div>

		{/* <Link to='/homepagea_1'> */}
			<div className='Loginbtn'>
				<Button className='Button1'
					    type="submit"
						onClick={() => {
						  register();
						}}
				> <span className='Register1'>Register</span>	
				</Button>
				
			</div>
		{/* </Link> */}
		
		<span className='Signup'>Sign Up</span>
		<span className='Sudahpunyaakun'>Sudah punya akun?</span>
		<Link to='/signinuser'>
			<span className='Signin'>Sign In!</span>
		</Link>
		
	</div>
	)
}