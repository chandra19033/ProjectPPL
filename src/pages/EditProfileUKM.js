import React, { useEffect } from 'react'
import '../css/EditProfileUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import { useReducer, useState } from "react"
import { useHistory } from "react-router-dom"
import axios, { Axios } from 'axios'
import swal from "sweetalert"
import BackButton from '../components/BackButton'
import { Button } from 'react-bootstrap'

const Swal = require('sweetalert2');

const initialState = {
    name: "",
    desc: "",
	date: "",
	member: "",
	location: "",
	contact: "",
    avatar: null,
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case "name":
            return { ...currentState, name: action.upload };
        case "desc":
            return { ...currentState, desc: action.upload };
		case "date":
            return { ...currentState, date: action.upload };
		case "member":
            return { ...currentState, member: action.upload };
		case "location":
            return { ...currentState, location: action.upload };
		case "contact":
            return { ...currentState, contact: action.upload };
        case "avatar":
            return { ...currentState, avatar: action.upload };
        default:
            return currentState;
    }
}



export default function EditProfileUKM (props){

    const idUKM = props.match.params.ukm_id;
	console.log(idUKM);

	let history = useHistory();

    const [preload, setPreLoad] = useState([]);

    useEffect( () => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/${idUKM}`)
		  .then((response) => {
			console.log(response.data.data);
			setPreLoad(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

    const [ukm, dispatch] = useReducer(reducer, initialState)
    console.log(ukm);
	
    const [disable, setDisable] = useState(false);
	
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setDisable(true);
        const dataForm = new FormData();

		

		dataForm.append("id", idUKM);
        dataForm.append("name", ukm.name);
        dataForm.append("desc", ukm.desc);
        dataForm.append("date", ukm.date);
		dataForm.append("member", ukm.member);
		dataForm.append("location", ukm.location);
		dataForm.append("contact", ukm.contact);
		if (ukm.avatar !== null){
			dataForm.append("avatar", ukm.avatar);
		}
		

		console.log(dataForm.get('id'));
		console.log(dataForm.get('name'));
		console.log(dataForm.get('desc'));
		console.log(dataForm.get('date'));
		console.log(dataForm.get('member'));
		console.log(dataForm.get('location'));
		console.log(dataForm.get('contact'));
		console.log(dataForm.get('avatar'));

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}ukms/edit/${idUKM}`, dataForm
			)
            .then((response) => {
                setDisable(false);
                Swal.fire({
					icon: 'success',
					title: 'Edit Profile UKM Berhasil',
					allowOutsideClick: false,
					allowEscapeKey: false,
					confirmButtonText: 'OK',
					confirmButtonColor: '#21c177',
				});
                console.log(response)
                console.log("berhasil")
                history.push({pathname:'/dashboardukm', state:{idUKM}})
            })
            .catch((err) => {
                swal({
                    title: "Gagal mengedit profile",
                    icon: "warning",
                    dangerMode: true,
                })
                console.log(err)
            })
    }


    return (
	<div className='EditProfileUKM_EditProfileUKM'>
		<Navbar/>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.EditProfileUKM_Vector} />
			<img className='Vector_1' src = {ImgAsset.EditProfileUKM_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.EditProfileUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.EditProfileUKM_Vector_3} />
		</div>

		<div className='grup1'>
		<div className='Rectangle21'/>
		<span className='EditProfileUKM_1'>Edit Profile UKM</span>

		{/* Input File */}
		<div className='Group382'>
			<div className='Group301'>
				<input className='uploadFile' 
					disabled={disable}
					name="avatar"
					accept="image/*"
					onBlur={(e) =>
						dispatch({
							type: "avatar",
							upload: e.target.files[0],
						})
					}
					type="file"
				/>
				
			</div>
			<div className='Group381'>
				{/* Input Name */}
				<div className='Group314'>
					<input className='Rectangle1'
						disabled={disable}
						name="name"
						type="text" 
						defaultValue ={preload.name}
						onBlur={(e) =>
							dispatch({ type: "name", upload: e.target.value })
						}
					/>
					{/* <span className='UnitTaekwondoUnpadUTKD'>Unit Taekwondo Unpad (UTKD)</span> */}
					<span className='NamaUKM'>Nama UKM</span>
				</div>
				{/* Input Date */}
				<div className='Group314_1'>
					<input className='Rectangle1_1'
						disabled={disable}
						name="date"
						type="text" 
						defaultValue ={preload.date}
						onBlur={(e) =>
							dispatch({ type: "date", upload: e.target.value })
						}
					/>
					{/* <span className='SelasaJumat1600WIB'>Selasa & Jumat, 16.00 WIB</span> */}
					<span className='JadwalKegiatan'>Jadwal Kegiatan</span>
				</div>
				{/* Input Member */}
				<div className='Group314_2'>
					<input className='Rectangle1_2'
						disabled={disable}
						name="member"
						type="text" 
						defaultValue ={preload.member}
						onBlur={(e) =>
							dispatch({ type: "member", upload: e.target.value })
						}
					/>
					{/* <span className='_70Anggota'>70 Anggota</span> */}
					<span className='JumlahAnggota'>Jumlah Anggota</span>
				</div>
				{/* Input Location */}
				<div className='Group314_3'>
					<input className='Rectangle1_3'
						disabled={disable}
						name="location"
						type="text" 
						defaultValue ={preload.location}
						onBlur={(e) =>
							dispatch({ type: "location", upload: e.target.value })
						}
					/>
					{/* <span className='KompleksUKMBaratJatinangor'>Kompleks UKM Barat, Jatinangor</span> */}
					<span className='AlamatUKM'>Alamat UKM</span>
				</div>
				{/* Input Contact */}
				<div className='Group309'>
					<div className='Group314_4'>
						<input className='Rectangle1_4'
							disabled={disable}
							name="contact"
							type="text" 
							defaultValue ={preload.contact}
							onBlur={(e) =>
								dispatch({ type: "contact", upload: e.target.value })
							}
						/>
						{/* <span className='TaekwondoUnpadgmailcom'>Taekwondo.Unpad@gmail.com</span> */}
						<span className='Kontak'>Kontak</span>
					</div>
				</div>
			</div>

			<div className='Group349'>
				<div className='Rectangle22'/>
				<img className='Rectangle12' src = {`${process.env.REACT_APP_BACKEND_URL}${preload.avatar}`} />
			</div>
		</div>
		{/* Input Desc */}
		<div className='Group316'>
			<div className='Group314_5'>
				<textarea className='Rectangle1_5'
					disabled={disable}
					name="desc" id="desc" cols="30" rows="10"
					defaultValue ={preload.desc}
					onBlur={(e) =>
						dispatch({ type: "desc", upload: e.target.value })
					}
				/>
			
			</div>
		</div>
		<div className='Group383'>
			<div className='Group311'>
				<div className='Group314_6'>
					<span className='Deskripsi'>Deskripsi</span>
				</div>
			</div>
		</div>
		<Button className='Group319'
			disabled={disable} onClick={onSubmitHandler}
		>
			{/* <div className='Rectangle19_1'/> */}
			<div className='Group320'>
				<div className='Group300_1'>
					<span className='SaveProfile'>Save Profile</span>
				</div>
				<div className='bxssave'>
					<img className='Vector_6' src = {ImgAsset.EditProfileUKM_Vector_6} />
				</div>
			</div>
		</Button>

		<Link to='/dashboardukm'>
			<BackButton/>
		</Link> 

		</div>

		<Footer/>
	</div>
	)

}