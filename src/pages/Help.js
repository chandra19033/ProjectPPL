import React from 'react'
import '../css/Help.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'

class Help extends Component {
    render (){
		return (
			<div className='Help_Help'>
				<Navbar />
				<div className='Vectors'>
					<img className='Vector' src = {ImgAsset.BeritaUKMB_Vector} />
					<img className='Vector_1' src = {ImgAsset.BeritaUKMB_Vector_1} />
				</div>
				<div className='Vectors_1'>
					<img className='Vector_2' src = {ImgAsset.BeritaUKMB_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.BeritaUKMB_Vector_3} />
				</div>

                <span className='HC'>Help & Contact</span>
                <div className='Line1'/>
                <span className='Text'>Kapanpun Anda membutuhkan bantuan hubungi kami melalui Nomor dan Email berikut</span>
                <div className='Line2'/>
                {/*UKM 1*/}
		<div className='Group309'>
			<div className='Rectangle1'>
                <div className='carbonphonevoice'>
			        <img className='Vector_6' src = {ImgAsset.ProfileUser_Vector_6} />
			        <img className='Vector_7' src = {ImgAsset.ProfileUser_Vector_7} />
		        </div>
			    <span className='name1'>Phone </span>

                <span className='npm1'>081322893012 </span>
            </div>

            <div className='Rectangle2'>
                <div className='etnewspaper'>
			        <div className='Group_1'>
				        <img className='Vector_6' src = {ImgAsset.HomepageA_1_Vector_6} />
				        <img className='Vector_7' src = {ImgAsset.HomepageA_1_Vector_7} />
			        </div>
		        </div>
			    <span className='name2'>Email </span>
                <span className='npm2'>stmjmantap123@gmail.com </span>
            </div>



		</div>

	
		




				< Footer />
			</div>

		)
	}
}

export default Help;