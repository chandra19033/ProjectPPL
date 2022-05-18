import React, { useEffect } from 'react'
import '../css/BuatBeritaUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import { useReducer, useState } from "react"
import { useHistory } from "react-router-dom"
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import axios, { Axios } from 'axios'
import swal from "sweetalert"
import { Button } from 'react-bootstrap'

const Swal = require('sweetalert2');

const initialState = {
    subject: "",
    content: "",
    image: null,
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case "subject":
            return { ...currentState, subject: action.upload };
        case "content":
            return { ...currentState, content: action.upload };
        case "image":
            return { ...currentState, image: action.upload };
        default:
            return currentState;
    }
}

export default function BuatBeritaUKM (props) {
	const ukm_id = props.location.state.ukm_id;
	console.log(ukm_id);

	let history = useHistory();

    const [artikel, dispatch] = useReducer(reducer, initialState)
	
    const [disable, setDisable] = useState(false);
	
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const dataForm = new FormData();
		dataForm.append("ukm_id", ukm_id);
        dataForm.append("subject", artikel.subject);
        dataForm.append("content", artikel.content);

		if(artikel.image !== null){
			dataForm.append("image", artikel.image);
		}else{
			swal({
				title: "Silahkan Pilih Gambar Berita",
				icon: "warning",
				dangerMode: true,
			})
			return;
		}
        

		console.log(dataForm.get('ukm_id'));
		console.log(dataForm.get('subject'));
		console.log(dataForm.get('content'));
		console.log(dataForm.get('image'));

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}articles`, dataForm
			)
            .then((response) => {
                setDisable(false);
				console.log(response)
                console.log("berhasil")
				setDisable(true);
				Swal.fire({
					icon: 'success',
					title: 'Berita Berhasil Dibuat',
					allowOutsideClick: false,
					allowEscapeKey: false,
					confirmButtonColor: '#21c177',
					preConfirm: () => {
						history.push({pathname:'/listberitaukm', state:{ukm_id}})
					}	  
				}) 		        
                
            })
            .catch((err) => {
                swal({
                    title: "Gagal membuat berita",
                    icon: "warning",
                    dangerMode: true,
                })
                console.log(err)
            })
    }


	return (
		


		
	<div className='BuatBeritaUKM_BuatBeritaUKM'>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.BuatBeritaUKM_Vector} />
			<img className='Vector_1' src = {ImgAsset.BuatBeritaUKM_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.BuatBeritaUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.BuatBeritaUKM_Vector_3} />
		</div>
		<Navbar/>
		

		<span className='Buatberitaukm'>Buat Berita UKM</span>
	
		<div className='Rectangle21'/>
		{/* Judul Berita */}
			<div className='Group314'>
				<input className='Rectangle1'
					disabled={disable}
					name="subject"
					type="text"
					value={artikel.subject}
					onChange={(e) =>
						dispatch({ type: "subject", upload: e.target.value })
					}
				/>
				{/* <span className='UnitTaekwondoUnpadUTKDberhasilmeraihperunggudikompetisinasional2022'>Unit Taekwondo Unpad (UTKD) berhasil meraih perunggu di kompetisi nasional 2022</span> */}
				<span className='JudulBerita'>Judul Berita</span>
			</div>

		{/* Gambar Berita */}
		<span className='CoverBerita'>Gambar Berita</span>
		<div className='Group301'>
			<input className='uploadFile'
				 disabled={disable}
				 name="image"
				 accept="image/*"
				 onChange={(e) =>
					 dispatch({
						 type: "image",
						 upload: e.target.files[0],
					 })
				 }
				 type="file"
			> 
				{/* <div className='Group313'>
					<div className='Group300'>
						<span className='UploadGambar'>Upload Gambar</span>
					</div>
					<div className='bxupload'>
						<img className='Vector_5' src = {ImgAsset.BuatBeritaUKM_Vector_5} />
						<img className='Vector_6' src = {ImgAsset.BuatBeritaUKM_Vector_6} />
					</div>
				</div> */}
			</input>
			
		</div>
		
		
		{/* <div className='Rectangle58'/> */}
		<span className='IsiBerita'>Isi Berita</span>
		<textarea className='Rectangle59'
			disabled={disable}
			name="content" id="content" cols="30" rows="10"
			value={artikel.content}
			onChange={(e) =>
				dispatch({ type: "content", upload: e.target.value })
			}
			style={{whiteSpace: "pre-line"}}
		/>
		{/* <span className='deskripsi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse amet tristique montes, nisl molestie mattis amet nisi ultricies. Urna purus diam massa vitae. Ac vitae nunc, leo senectus eget eget facilisi euismod. Adipiscing porta lobortis ut felis aliquam consequat natoque. Netus at amet sed tortor nibh purus tortor. Varius vulputate justo purus mi consectetur sed. Suspendisse enim semper tortor volutpat nec. Semper eros dolor, morbi risus vitae. Sollicitudin ut nam lectus enim. Dictum porttitor morbi rhoncus adipiscing tristique sapien, scelerisque. Bibendum a at eu amet velit eros, nisl. Tempor et ut ultricies eu et erat nec elit in. Est metus congue adipiscing aliquam.
		Donec consequat sed dictum gravida ornare. Cras est ultrices egestas eget leo ultricies semper sit sed. Tristique orci, varius volutpat mi a cras ullamcorper vestibulum, non. Sed rhoncus, sit sagittis, turpis eleifend. Aenean sit nunc, volutpat nisi.
		Donec consequat sed dictum gravida ornare. Cras est ultrices egestas eget leo ultricies semper sit sed. Tristique orci, varius volutpat mi a cras ullamcorper vestibulum, non. Sed rhoncus, sit sagittis, turpis eleifend. Aenean sit nunc, volutpat nisi.
		Etiam sit nisi, pellentesque ultrices aliquet cras orci semper. Tincidunt in vitae fringilla urna pulvinar. Sed sed dolor neque ornare faucibus at tempor eget curabitur. Sit eleifend leo eu, in cursus lorem diam elementum amet. Habitant felis amet, cras non vitae. At magna et facilisis tellus turpis. Tellus sapien nisl consectetur ut. Suspendisse lacus maecenas ac at nisl, imperdiet sit. Ultrices eget dictum sed amet id pulvinar sed. Massa massa tellus neque magna. Congue eget elementum tellus pellentesque. Aliquet tellus fermentum non enim pellentesque est facilisis. Malesuada integer in ornare faucibus lorem. Lorem at lacus vestibulum proin mauris.
		Nibh amet ornare eros purus senectus vitae arcu. Non, eu ut dignissim at ac, quis varius vitae, donec. Ullamcorper enim, leo adipiscing morbi malesuada aliquet sit. Et massa enim, elit, dignissim nunc, quis urna, sit. Est sapien ultrices convallis tellus porta tempor.
		Augue est, varius diam, nec, proin varius. Nisi porta etiam arcu magna enim, aliquet augue d ut.
		Duis nulla nisl, quis egestas felis ipsum accumsan, nullam. Cum netus sed dolor faucibus sagittis facilisi tincidunt. Eget purus morbi egestas non tristique imperdiet vel. Ultrices morbi nunc tincidunt mauris dapibus. Pulvinar quam gravida sed sed id integer ornare. Turpis turpis at sed venenatis. Tellus sed facilisi lobortis tellus varius scelerisque eget. Urna elit feugiat lectus volutpat, hendrerit adipiscing neque. Leo quisque velit pellentesque elit. Tristique nibh id et turpis massa tempor viverra sit. Odio scelerisque integer libero, urna.</span> */}
		{/* <div className='bxbold'>
			<img className='Vector_7' src = {ImgAsset.BuatBeritaUKM_Vector_7} />
		</div>
		<div className='bxitalic'>
			<img className='Vector_8' src = {ImgAsset.BuatBeritaUKM_Vector_8} />
		</div>
		<div className='feinsertlink'>
			<img className='Vector_9' src = {ImgAsset.BuatBeritaUKM_Vector_9} />
		</div>
		<div className='Group317'>
			<img className='Line2' src = {ImgAsset.BuatBeritaUKM_Line2} />
			<img className='Line3' src = {ImgAsset.BuatBeritaUKM_Line3} />
		</div>
		<div className='evaattach2fill'>
			<img className='Vector_10' src = {ImgAsset.BuatBeritaUKM_Vector_10} />
		</div> */}
		
		<div className='Group239'>
			<div className='Group294'>
				<div className='Group293'>
					<Button className='Rectangle13' 
						disabled={disable} onClick={onSubmitHandler}
					> 
						<div className='Group291'>
							<span className='PostBerita'>Post Berita</span>
							<div className='akariconsedit'>
								<div className='Group'>
									<img className='Vector_11' src = {ImgAsset.BuatBeritaUKM_Vector_11} />
									<img className='Vector_12' src = {ImgAsset.BuatBeritaUKM_Vector_12} />
								</div>
							</div>
						</div>
					</Button>
				</div>
			</div>
		</div>
		<Footer/>
	</div>
	)

}
