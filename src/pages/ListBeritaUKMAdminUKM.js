import React from 'react'
import { useState, useEffect } from "react";
import '../css/ListBeritaUKMAdminUKM.css'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReactTimeAgo from 'react-time-ago'
import ReactPaginate from "react-paginate";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import { Button } from 'react-bootstrap';
import BackButton from '../components/BackButton'
import 'react-confirm-alert/src/react-confirm-alert.css';

const Swal = require('sweetalert2');

export default function ListBeritaUKMAdminUKM (props) {
	const ukm_id = props.location.state.ukm_id;
	console.log(ukm_id);

	const [berita, setBerita] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

  	const usersPerPage = 4;
  	const pagesVisited = pageNumber * usersPerPage;

  	const pageCount = Math.ceil(berita.length / usersPerPage);
	  
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const getPostAPI = () => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}articles/ukm/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});
	}

	const handleRemove = (data) => {
		console.log(data);

		Swal.fire({
			title: 'Apakah Anda Yakin Ingin Menghapus ?',
			icon:'question',
			allowOutsideClick: false,
			allowEscapeKey: false,
			confirmButtonText: 'Ya',
			confirmButtonColor: '#21c177',
			showDenyButton: true,
			denyButtonText: 'Tidak',
			preConfirm: () => {
				axios
					.delete(`${process.env.REACT_APP_BACKEND_URL}articles/${data}`)
					.then((response) => {
						console.log(response);
						getPostAPI();
					})
					.catch((err) => {
						console.log(err);
					});
			}	  
		}) 	
	};

	useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}articles/ukm/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

    return (
	<div className='ListBeritaUKMAdminUKM_ListBeritaUKMAdminUKM'>
				<Link to='/dashboardukm'>
			<BackButton/>
		</Link> 
		<span className='Listberitaukm'>List Berita UKM</span>

		<div className='Vectors'>
			<img className='Vector_1' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_1} />
			<img className='Vector_2' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_2} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_3' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_3} />
			<img className='Vector_4' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_4} />
		</div>

		<Navbar/>


		{/* Buat Berita */}
		<Link to={{pathname:'/buatberitaukm', state:{ukm_id}}}>
			<div className='Group567'>
				<div className='Group301'>
					<div className='Rectangle19'/>
				</div>
				<div className='Group581'>
					<div className='Group300'>
						<span className='BuatBerita'>Buat Berita</span>
					</div>
					<img className='Vector_8' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_8} />
				</div>
			</div>
		</Link>
		

		<div className='BeritaPost2'>
			{ berita.length !== 0 
					? (
						berita
						.slice(pagesVisited, pagesVisited + usersPerPage)
						.map(post => {
							const date = post.created_at;
							const dt = new Date(date);
							const contents = post.content;
							return (
								<div className='PostCard' key={post.id}>
									<Link to={`/beritasingle/${post.id}`} >
			
											<div className='Frame338_3'>
												<div className='Alltickets_4'>
													<div className='cardsdefault_4'>
														<div className='sheet_4'/>
														<div className='Group362_4'>
															<div className='Group337_4'>
																<div className='Group361_4'>
																	{/* <div className='Rectangle26_4'/> */}
																	<img className='Images' src = {`${process.env.REACT_APP_BACKEND_URL}${post.image}`} />
																</div>
															</div>
															<span className='Title2'>{post.subject}</span>
															<span className='UKM_Name2'>{post.ukm.name}</span>
															<span className='Date2'><ReactTimeAgo date={dt} locale="en-US"/></span>
															<span className='Content2'> {contents.slice(0,200)} ... Berita Selengkapnya</span>
														</div>
													</div>
												</div>
											</div>
									</Link>
									<div className='BeritaButton'>
										<Link to={{pathname:`/editberitaukm/${post.id}`, state:{ukm_id}}}> 
											<div className='Group565'>
												<img className='Rectangle56_1' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56_1} />
												<div className='akariconsedit'>
													<div className='Group'>
														<img className='Vector_6' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_6} />
														<img className='Vector_7' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_7} />
													</div>
												</div>
											</div>
										</Link>
										{/* Delete Button */}
										<Button className='Group561' onClick={() => handleRemove(post.id)}>
											<img className='Rectangle56' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56} />
											<img className='Vector_5' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_5} />
										</Button>
									</div>
									{/* Edit Button */}
									
								</div>	
							)
						})
					)	
					: (<div> <span className='notFound2'>Belum Ada Berita</span></div>)

			}
		</div>
		
		<div className='Pagination3'>
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

		<Footer/>
	</div>
	)

}