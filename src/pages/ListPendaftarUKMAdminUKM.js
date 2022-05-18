import React from 'react'
import { useState, useEffect } from "react";
import '../css/ListPendaftarUKMAdminUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import { Table } from 'react-bootstrap';
import TableScrollbar from 'react-table-scrollbar';
import moment from 'moment'
import 'moment/locale/id'
import axios from 'axios';
import BackButton from '../components/BackButton'
import { Button } from 'react-bootstrap';
import BinConverter from 'bin-converter';
import fileDownload from 'js-file-download'
import { saveAs } from 'file-saver'

const BIN = require("bin-converter");

export default function ListPendaftarUKMAdminUKM (){

	const [userId, setUserId] = useState(() => {
		const localData = sessionStorage.getItem("id");
		return localData ? localData : null;
	});

	const [userName, setUserName] = useState(() => {
		const localData = sessionStorage.getItem("user");
		return localData ? localData : null;
	});

	

	const [pendaftar, setPendaftar]= useState([]);
	const [field, setField] = useState([]);

	useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/ukm/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			setPendaftar(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/field/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			setField(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]);

	var nameField1 = 'Field1';
	var nameField2 = 'Field2';
	var nameField3 = 'Field3';
	var nameField4 = 'Field4';
	var nameField5 = 'Field5';
	var nameFile1 = 'File 1';
	var nameFile2 = 'File 2';
	var nameFile3 = 'File 3';
	var nameFile4 = 'File 4';

	const test = "cobainaja";

	console.log(field.field1)
	if (field.field1 !== null){
		console.log("Field1 Ada")
		nameField1 = field.field1;
		console.log(nameField1)
	}
	if (field.field2 !== null){
		console.log("Field2 Ada")
		nameField2 = field.field2;
		console.log(nameField2)
	}
	if (field.field3 !== null){
		console.log("Field3 Ada")
		nameField3 = field.field3;
		console.log(nameField3)
	}
	if (field.field4 !== null){
		console.log("Field4 Ada")
		nameField4 = field.field4;
		console.log(nameField4)
	}
	if (field.field5 !== null){
		console.log("Field5 Ada")
		nameField5 = field.field5;
		console.log(nameField5)
	}
	if (field.file1 !== null){
		console.log("File1 Ada")
		nameFile1 = field.file1;
		console.log(nameFile1)
	}
	if (field.file2 !== null){
		console.log("File2 Ada")
		nameFile2 = field.file2;
		console.log(nameFile2)
	}
	if (field.file3 !== null){
		console.log("File3 Ada")
		nameFile3 = field.file3;
		console.log(nameFile3)
	}
	if (field.file4 !== null){
		console.log("File4 Ada")
		nameFile4 = field.file4;
		console.log(nameFile4)
	}

	var nameFile = "Data Pendaftaran" + userName + ".xlsx";

	const eksporHandle = () => {
	
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/export/${userId}`,
		{
			responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf'
            }
		})
		  .then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', nameFile); //or any other extension
            document.body.appendChild(link);
            link.click();		
		  })
		.catch((err) => {
			console.log(err);
		});
	}

    return (
	<div className='ListPendaftarUKMAdminUKM_ListPendaftarUKMAdminUKM'>
		<Navbar/>
		<div className='Vectors'>
			<img className='Vector_2' src = {ImgAsset.ListPendaftarUKMAdminUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.ListPendaftarUKMAdminUKM_Vector_3} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_4' src = {ImgAsset.ListPendaftarUKMAdminUKM_Vector_4} />
			<img className='Vector_5' src = {ImgAsset.ListPendaftarUKMAdminUKM_Vector_5} />
		</div>
		<Link to='/dashboardukm'>
			<BackButton/>
		</Link> 
		<span className='ListPendaftarukm'>List Pendaftar UKM</span>
	
		
		{/* Ekspor Data */}
		<Button className='Group301' onClick={eksporHandle}
		>
			{/* <div className='Rectangle19'/> */}
			<div className='Group300'>
				<span className='EksporData'>Ekspor Data</span>
				<div className='antdesigndownloadoutlined'>
					<img className='Vector' src = {ImgAsset.ListPendaftarUKMAdminUKM_Vector} />
				</div>
			</div>
		</Button>
	
		{/* Wajib */}
		<span className='IdentitasWajib'>Identitas Wajib</span>
		<div className='TableContainer1'>
			<TableScrollbar height="470px"> 
				<Table striped bordered hover variant="light" style={{border:5, borderColor:'black'}}>
					<thead>
						<tr style={{borderColor:'black'}}>
							<th style={{width:10, textAlign:'center', backgroundColor:'#224957', color:'white'}}>No</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>Nama</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>NPM</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>Angkatan</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>Fakultas</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>Kontak</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>Tanggal</th>
						</tr>
					</thead>
					<tbody style={{borderColor:'#224957', backgroundColor:'white'}}>
						{
							pendaftar.map((post, i) =>{
								const date = new Date(post.created_at)
								i *= 1;
						
								return (
									<tr key={post.id}>
										<td style={{textAlign:'center'}}>{i + 1}</td>
										<td style={{textAlign:'center'}}>{post.user.name}</td>
										<td style={{textAlign:'center'}}>{post.user.npm}</td>
										<td style={{textAlign:'center'}}>{post.user.year}</td>
										<td style={{textAlign:'center'}}>{post.user.faculty}</td>
										<td style={{textAlign:'center'}}>{post.user.phone_number}</td>
										<td style={{textAlign:'center'}}>{moment(date).format("DD-MM-YYYY")}</td>
									</tr>
								)
				
							})
					
						}

					</tbody>
				</Table>
			</TableScrollbar>
		</div>

		{/* Tambahan */}
		<span className='Tambahan'>Tambahan</span>
		<div className='TableContainer2'>
			<TableScrollbar height="470px"> 
				<Table striped bordered hover variant="light" style={{border:5, borderColor:'black'}}>
					<thead>
						<tr style={{borderColor:'black'}}>
							<th style={{width:10, textAlign:'center', backgroundColor:'#224957', color:'white'}}>No</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>Nama</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameField1}</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameField2}</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameField3}</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameField4}</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameField5}</th>
						</tr>
					</thead>
					<tbody style={{borderColor:'#224957', backgroundColor:'white'}}>
						{
							pendaftar.map((post, i) =>{
								const date = new Date(post.created_at)
								i *= 1;
						
								return (
									<tr key={post.id}>
										<td style={{textAlign:'center'}}>{i + 1}</td>
										<td style={{textAlign:'center'}}>{post.user.name}</td>
										<td style={{textAlign:'center'}}>{post.field1}</td>
										<td style={{textAlign:'center'}}>{post.field2}</td>
										<td style={{textAlign:'center'}}>{post.field3}</td>
										<td style={{textAlign:'center'}}>{post.field4}</td>
										<td style={{textAlign:'center'}}>{post.field5}</td>
									</tr>
								)
				
							})
					
						}
					</tbody>
				</Table>
			</TableScrollbar>
		</div>

		
		{/* File */}
		<span className='File'>File </span>
		<div className='TableContainer3'>
			<TableScrollbar height="470px"> 
				<Table striped bordered hover variant="light" style={{border:5, borderColor:'black'}}>
					<thead>
						<tr style={{borderColor:'black'}}>
							<th style={{width:10, textAlign:'center', backgroundColor:'#224957', color:'white'}}>No</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>Nama</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameFile1}</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameFile2}</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameFile3}</th>
							<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>{nameFile4}</th>
						</tr>
					</thead>
					<tbody style={{borderColor:'#224957', backgroundColor:'white'}}>
						{
							pendaftar.map((post, i) =>{
								const date = new Date(post.created_at)
								i *= 1;

								return (
									<tr key={post.id}>
										<td style={{textAlign:'center'}}>{i + 1}</td>
										<td style={{textAlign:'center'}}>{post.user.name}</td>
										<td style={{textAlign:'center'}}>{post.file1 !== null ?(<a href={`${process.env.REACT_APP_BACKEND_URL}${post.file1}`} target="_blank">{nameFile1}</a>):("")}</td>
										<td style={{textAlign:'center'}}>{post.file2 !== null ?(<a href={`${process.env.REACT_APP_BACKEND_URL}${post.file2}`} target="_blank">{nameFile2}</a>):("")}</td>
										<td style={{textAlign:'center'}}>{post.file3 !== null ?(<a href={`${process.env.REACT_APP_BACKEND_URL}${post.file3}`} target="_blank">{nameFile3}</a>):("")}</td>
										<td style={{textAlign:'center'}}>{post.file4 !== null ?(<a href={`${process.env.REACT_APP_BACKEND_URL}${post.file4}`} target="_blank">{nameFile4}</a>):("")}</td>
									</tr>
								)
				
							})
					
						}
					</tbody>
				</Table>
			</TableScrollbar>
		</div>


		
		<Link to='/aturpendaftaranukm'>
			<div className='Group352'>
				<div className='Group309'>
					<div className='Group293'>
						<div className='Rectangle13'/>
					</div>
					<div className='Group291'>
						<div className='akariconsedit'>
						</div>
					</div>
				</div>
				<div className='Group351'>
					<span className='AturPendaftaran'>Atur Pendaftaran</span>
					<div className='bilistul'>
						<img className='Vector_6' src = {ImgAsset.ListPendaftarUKMAdminUKM_Vector_6} />
					</div>
				</div>
			</div>
		</Link>
		<Footer/>
	</div>
	)
}
