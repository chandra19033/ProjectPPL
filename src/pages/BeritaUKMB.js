import React from 'react'
import '../css/BeritaUKMB.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import { Component } from 'react/cjs/react.production.min'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BeritaPost from '../components/BeritaPost'
import SearchBerita from '../components/SearchBerita'
import ReactPaginate from "react-paginate";
import axios from 'axios';

export default function BeritaUKMB (props) {
	let query = 'articles';

	const param1 = props.match.params.pathParam1;
	console.log(param1);
	const param2 = props.match.params.pathParam2;
	console.log(param2);
	const param3 = props.match.params.pathParam3;
	console.log(param3);

	if (param2 == null){
		query = param1;
	}
	if (param2 != null){
		query = param1 + '/' + param2 + '/' + param3;
	}

	const [berita, setBerita] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

  	const usersPerPage = 4;
  	const pagesVisited = pageNumber * usersPerPage;

  	const pageCount = Math.ceil(berita.length / usersPerPage);
	  
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}${query}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 
	
		return (
			<div className='BeritaUKMB_BeritaUKMB'>
				<Navbar/>
				<img className='Rectangle40' src = {ImgAsset.BeritaUKMB_Rectangle40} />
				<div className='Vectors'>
					<img className='Vector' src = {ImgAsset.BeritaUKMB_Vector} />
					<img className='Vector_1' src = {ImgAsset.BeritaUKMB_Vector_1} />
				</div>
				<div className='Vectors_1'>
					<img className='Vector_2' src = {ImgAsset.BeritaUKMB_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.BeritaUKMB_Vector_3} />
				</div>
				<span className='beritaukm'>BERITA UKM</span>
				
				<SearchBerita/>

				{/* <BeritaPost query={query}  /> */}
				<div className='BeritaPost2'>
					{ berita.length !== 0 
						? (
							berita
							.slice(pagesVisited, pagesVisited + usersPerPage)
							.map(post => {
								return <BeritaPost key={post.id} articles_id={post.id} ukm_id={post.ukm_id} subject={post.subject} content={post.content} created_at={post.created_at} image={post.image}/>
							})
						)	
						: (<div> <span className='notFound'>Berita Tidak Ditemukan</span></div>)
		
					}
				</div>
				
				
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
				
					
				<Footer />
			</div>
		)
	
}