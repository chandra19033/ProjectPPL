import React, { useState, useEffect } from 'react'
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/BeritaPost.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';

export default function BeritaPost (props) {

	const dummyDate = "2022-04-13T22:27:44.000000Z";
	
	const date = props.created_at;
	const dt = new Date(date);
	const contents = props.content;
					
	// const param = props.query;
	// const [berita, setBerita] = useState([]);
	const [ukm, setUKM] = useState([]);
	// var UKMName = '';
	// console.log(param);
	
	useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/${props.ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

		

	},[]); 

	
    return (
		<>
			<Link to={`/beritasingle/${props.articles_id}`} >
		
					<div className='Frame338_2'>
						<div className='Alltickets_3'>
							<div className='cardsdefault_3'>
								<div className='sheet_3'/>
								<div className='Group362_3'>
									<div className='Group337_3'>
										<div className='Group361_3'>
											<div className='Rectangle26_3'/>
											<img className='ImageArticle' src = {`${process.env.REACT_APP_BACKEND_URL}${props.image}`} />
										</div>
									</div>
									<span className='Title'>{props.subject}</span>
									<span className='UKM_Name'>{ukm.name}</span>
									<span className='Date'><ReactTimeAgo date={dt} locale="en-US"/></span>
									<span className='Content'> {contents.slice(0,500)} ... Berita Selengkapnya</span>
								</div>
							</div>
						</div>
					</div>

			</Link>
		</>
			
		// <>
		// { berita.length !== 0 
		// 	? (
		// 		berita.map(article => {
		// 			let date = article.created_at;
		// 			let dt = new Date(date);
		// 			let contents = article.content;
					

		// 			axios
		// 			.get(`https://api-ukmscare.herokuapp.com/ukms/${article.ukm_id}`)
		// 			.then((response) => {
		// 				console.log(response.data.data.name);
		// 				UKMName = response.data.data.name;
		// 				console.log(UKMName);
		// 			})
		// 			.catch((err) => {
		// 				console.log(err);
		// 			});	

		// 			return (
						
		// 			)
		// 		})
		// 	)	
		// 	: (<div> <span className='notFound'>Berita Tidak Ditemukan</span></div>)

		// }
		
		// </>	
    )
}

