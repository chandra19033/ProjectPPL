import React from 'react'
import '../css/BackButton.css'
import * as SVGAsset from '../SVG/index'
import {Link} from 'react-router-dom'
import ImgAsset from '../resources'
import { ButtonGroup } from 'react-bootstrap'

export default function BackButton () {
    return (
		<div className='grup1'>
        	<div className='Frame323'>
				<div className='Group384'>
					<div className='Group385_1'>
						<div className='Group239_1'>
							<div className='Group294_1'>
								<div className='Group293_1'>
									<div className='Rectangle13_1'/>
								</div>
							</div>
						</div>
						<ButtonGroup className='Group322_1'>
							<div className='Group321_1'>
								<span className='Kembali_1'>Kembali</span>
							</div>
							<img className='Vector_6' src = {ImgAsset.BeritaSingle_Vector_6} />
						</ButtonGroup>
					</div>
				</div>
			</div>
		</div>
            
    )
}