import React, { useEffect } from 'react'
import '../css/BuatBeritaUKM.css'
import ImgAsset from '../resources'
import { useReducer, useState } from "react"
import { useHistory } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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



export default function EditBeritaUKM (props) {
	const idBerita = props.match.params.articles_id;
	console.log(idBerita);
    const ukm_id = props.location.state.ukm_id;
	console.log(ukm_id);

	let history = useHistory();

    const [preload, setPreLoad] = useState([]);

    useEffect( () => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}articles/${idBerita}`)
		  .then((response) => {
			console.log(response.data.data);
			setPreLoad(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

    const [artikel, dispatch] = useReducer(reducer, initialState)
    console.log(artikel);
	
    const [disable, setDisable] = useState(false);
	
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setDisable(true);
        const dataForm = new FormData();
		dataForm.append("id", idBerita);
        dataForm.append("subject", artikel.subject);
        dataForm.append("content", artikel.content);

		if (artikel.image !== null){
			dataForm.append("image", artikel.image);
		}
        

		console.log(dataForm.get('id'));
		console.log(dataForm.get('subject'));
		console.log(dataForm.get('content'));
		console.log(dataForm.get('image'));

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}articles/edit/${idBerita}`, dataForm
			)
            .then((response) => {
                setDisable(false);
				console.log(response)
                console.log("berhasil")
                Swal.fire({
					icon: 'success',
					title: 'Berita Berhasil Diedit',
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
                    title: "Gagal mengedit berita",
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
                <span className='JudulBerita'>Judul Berita</span>
				<input className='Rectangle1'
                    // ref={artikel}
					disabled={disable}
					name="subject"
					type="text" 
                    defaultValue ={preload.subject}
					onBlur={(e) =>
						dispatch({ type: "subject", upload: e.target.value })
					}
				/>
			</div>

		{/* Gambar Berita */}
		<span className='CoverBerita'>Gambar Berita</span>
		<div className='Group301'>
			<input className='uploadFile'
				 disabled={disable}
				 name="image"
				 accept="image/*"
				 onBlur={(e) =>
					 dispatch({
						 type: "image",
						 upload: e.target.files[0],
					 })
				 }
				 type="file"
			> 
			</input>
			
		</div>
		
        {/* Content Berita */}
		<span className='IsiBerita'>Isi Berita</span>
		<textarea className='Rectangle59'
			disabled={disable}
			name="content" id="content" cols="30" rows="10"
            defaultValue ={preload.content}
			onBlur={(e) =>
				dispatch({ type: "content", upload: e.target.value })
			}
			style={{whiteSpace: "pre-line"}}
		/>
		
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
