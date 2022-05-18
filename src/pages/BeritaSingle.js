import { useState, useEffect } from "react";
import '../css/BeritaSingle.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackButton from "../components/BackButton";
import moment from 'moment'
import 'moment/locale/id'
import axios from "axios";

function BeritaSingle (props) {
	const { articles_id } = props.match.params;
	console.log(articles_id);

	const [single, setSingle] = useState([]);
	const [ukm, setUKM] = useState([])

	useEffect(() => {
		axios
		  .get(`https://api-ukmscare.herokuapp.com/articles/${articles_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setSingle(response.data.data);
			console.log(response.data.data.ukm);
			setUKM(response.data.data.ukm);
		  })
		  .catch((err) => {
			console.log(err);
		  });
	},[]); 
	const date = new Date(single.created_at)
	console.log(date);

	return (
		<div className='BeritaSingle_BeritaSingle'>
			<Navbar />
			<div className='Vectors'>
				<img className='Vector' src = {ImgAsset.BeritaSingle_Vector} />
				<img className='Vector_1' src = {ImgAsset.BeritaSingle_Vector_1} />
			</div>
			<div className='Vectors_1'>
				<img className='Vector_2' src = {ImgAsset.BeritaSingle_Vector_2} />
				<img className='Vector_3' src = {ImgAsset.BeritaSingle_Vector_3} />
			</div>
			<div className='Frame367'>
				<span className='Subject'>{single.subject}</span>
			</div>
			<div className='Frame369'>
				<span className='UKM_Name'>{ukm.name}</span>
			</div>
			<div className='Frame370'>
				<span className='Time'>{moment(date).format('LLLL')} </span>
			</div>
			<div className='Frame371'>
				<img className='Image' src = {`${process.env.REACT_APP_BACKEND_URL}${single.image}`} />
			</div>
			<div className='Frame372'>
				<span className='content'>
					{single.content}
				</span>
			</div>
		
			<Link to='/beritaukm/articles'>
				<BackButton/>
			</Link>

			< Footer />
		</div>
	)	
}

export default BeritaSingle;