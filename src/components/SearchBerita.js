import React from 'react'
import '../css/SearchBerita.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import axios from "axios";
import BeritaUKMB from '../pages/BeritaUKMB';
import { Link } from 'react-router-dom';

export default function SearchBerita () {

	const [ukm, setUKM] = useState([]);
	const [query, setQuery] = useState(null);
	
	const onSearchHandler = (e) => {
		e.preventDefault();
		if(query === null){
			window.location.href = "/beritaukm/articles";
		}
		else {window.location.href = "/beritaukm/articles/search/" + query;}
	};

	useEffect(() => {
		axios
		  .get(`${process.env.REACT_APP_BACKEND_URL}ukms`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });

	  },[]); 

    return (
	<div className='SearchBerita'>	
		<div className='Group365'>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic" className='Frame359'>
						
						
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
						<Dropdown.Item href="/beritaukm/articles">All</Dropdown.Item>
						<Dropdown.Item href="/beritaukm/articles/category/Olahraga">Olahraga</Dropdown.Item>
						<Dropdown.Item href="/beritaukm/articles/category/Bela diri">Beladiri</Dropdown.Item>
						<Dropdown.Item href="/beritaukm/articles/category/Kesenian">Kesenian</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic" className='Frame361'>
						<div className='Group358_1'>
							<div className='Rectangle30_1'/>
							<div className='Rectangle31_1'/>
							<div className='Rectangle32_1'/>
							<div className='Rectangle33_1'/>
							<div className='Rectangle34_1'/>
							<div className='Rectangle35_1'/>
							<div className='Rectangle36_1'/>
							<div className='Rectangle37_1'/>
							<div className='Rectangle38_1'/>
						</div>
						<span className='UKM'>UKM</span>
						<img className='Icon1' src={ImgAsset.SegitigaSearch}/>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{/* <Dropdown.Item href="#/action-1">UTU</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Beladiri</Dropdown.Item>
						<Dropdown.Item href="#/action-3">del</Dropdown.Item> */}
						{
							ukm.map(post => {
								return <Dropdown.Item href={"/beritaukm/articles/ukm/" + post.id} key={post.id}>{post.short_name}</Dropdown.Item>
			
							})
						}
					</Dropdown.Menu>
				</Dropdown>
					
				<form onSubmit={onSearchHandler} >
					<input className='Frame2' placeholder='Search' value={query}
                      onChange={(e) => setQuery(e.target.value)}>
					</input>
					
					<Button className='Frame360' placeholder='Search' type='submit'>
						<p className='searchText'>Search</p>
					</Button>	
				</form>
					
		</div>
	</div>
	)
}