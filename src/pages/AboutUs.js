import React from 'react'
import '../css/AboutUs.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'

class AboutUs extends Component {
    render (){
		return (
			<div className='AboutUs_AboutUs'>
				<Navbar />
				<div className='Vectors'>
					<img className='Vector' src = {ImgAsset.BeritaUKMB_Vector} />
					<img className='Vector_1' src = {ImgAsset.BeritaUKMB_Vector_1} />
				</div>
				<div className='Vectors_1'>
					<img className='Vector_2' src = {ImgAsset.BeritaUKMB_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.BeritaUKMB_Vector_3} />
				</div>

                <span className='STMJ'>==TIM STMJ MANTAP==</span>

                {/*UKM 1*/}
		<div className='Group309'>
			<div className='Rectangle1'>
			    <img className='image1' src = {ImgAsset.gambar_01} />
			    <span className='name1'>M Rafiq Abdillah </span>
                <span className='npm1'>140810190011 </span>
            </div>

            <div className='Rectangle2'>
			    <img className='image2' src = {ImgAsset.gambar_02} />
			    <span className='name2'>Chandra Wijaya </span>
                <span className='npm2'>140810190033 </span>
            </div>

            <div className='Rectangle3'>
			    <img className='image3' src = {ImgAsset.gambar_03} />
			    <span className='name3'>Bagas Adi Firdaus </span>
                <span className='npm3'>140810190037 </span>
            </div>

            <div className='Rectangle4'>
			    <img className='image4' src = {ImgAsset.gambar_04} />
			    <span className='name4'>Adam Din Naufan</span>
                <span className='npm4'>140810190045 </span>
            </div>


		</div>

	
		




				< Footer />
			</div>

		)
	}
}

export default AboutUs;