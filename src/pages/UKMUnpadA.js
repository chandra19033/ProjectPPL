import React from 'react'
import '../css/UKMUnpadA.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import UKMPost from '../components/UKMPost'
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import axios from 'axios';

export default function UKMUnpadA (props) {
	let query = 'ukms';

	const param1 = props.match.params.pathParam1;
	const param2 = props.match.params.pathParam2;
	const param3 = props.match.params.pathParam3;

	if (param2 == null){
		query = param1;
	}
	if (param2 != null){
		query = param1 + '/' + param2 + '/' + param3;
	}

	const [ukm, setUKM] = useState([]);
	const [query1, setQuery1] = useState(null);
	const [pageNumber, setPageNumber] = useState(0);

  	const usersPerPage = 9;
  	const pagesVisited = pageNumber * usersPerPage;

  	const pageCount = Math.ceil(ukm.length / usersPerPage);
	  
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}${query}`)
		  .then((response) => {
			console.log(response);
			setUKM(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

	const onSearchHandler = (e) => {	
		e.preventDefault();
		if(query1 === null){
			window.location.href = "/ukmunpad/ukms/";
		}
		else{window.location.href = "/ukmunpad/ukms/search/" + query1;}
	};


    return (
	<div className='UKMUnpadA_UKMUnpadA'>
		<Navbar/>
		{/*Sisi Kiri*/}
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.UKMUnpadA_Vector} />
			<img className='Vector_1' src = {ImgAsset.UKMUnpadA_Vector_1} />
		</div>
		{/*Sisi Kanan*/}
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.UKMUnpadA_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.UKMUnpadA_Vector_3} />
		</div>


		<span className='Title'>UNIT KEGIATAN MAHASISWA</span>

		{/*pilih kategori*/}
		<div className='grup1'>
		<div className='Group365'>
			<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic" className='Group359'>
							<div className='Group358'>
								<div className='Rectangle30'/>
								<div className='Rectangle31'/>
								<div className='Rectangle32'/>
								<div className='Rectangle33'/>
								<div className='Rectangle34'/>
								<div className='Rectangle35'/>
								<div className='Rectangle36'/>
								<div className='Rectangle37'/>
								<div className='Rectangle38'/>
							</div>
							<span className='Kategori'>Kategori</span>
							<img className='Icon1' src={ImgAsset.SegitigaSearch}/>
					</Dropdown.Toggle>

					<Dropdown.Menu>
					<Dropdown.Item href="/ukmunpad/ukms">All</Dropdown.Item>
						<Dropdown.Item href="/ukmunpad/ukms/category/Olahraga">Olahraga</Dropdown.Item>
						<Dropdown.Item href="/ukmunpad/ukms/category/Bela diri">Beladiri</Dropdown.Item>
						<Dropdown.Item href="/ukmunpad/ukms/category/Kesenian">Kesenian</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			
			{/* search */}
			<form onSubmit={onSearchHandler} >
				<input className='Frame2' placeholder='Search'value={query1}
                      onChange={(e) => setQuery1(e.target.value)}></input>
				
				<Button className='Frame360' placeholder='Search' type='submit'>
					<p className='searchText'>Search</p>
				</Button>	
			</form>
			
		</div>
		
		<Row xs={1} md={3} className="UKMRow">
			{ukm.length !== 0
				? (ukm
					.slice(pagesVisited, pagesVisited + usersPerPage)
					.map(post => {
					return <UKMPost key={post.id} ukm_id={post.id} ukm_name={post.name} avatar={post.avatar}/>
				}))
				: (<div><span className='notFound'>UKM Tidak Ditemukan</span></div>)
			}
		</Row>



		</div>

		
		{/* <SearchBerita/> */}

		<div className='Pagination'>
				<ReactPaginate
					previousLabel={"Prev"}
					nextLabel={"Next"}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={"paginationBttns"}
					previousLinkClassName={"previousBttn"}
					nextLinkClassName={"nextBttn"}
					disabledClassName={"paginationDisabled"}
					activeClassName={"paginationActive"}
				/>
		</div>



		
		{/*Footer*/}
		<Footer/>

	</div>
	)

}