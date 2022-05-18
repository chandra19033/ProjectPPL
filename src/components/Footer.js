import React from 'react'
import '../css/Footer.css'
import * as SVGAsset from '../SVG/index'
import {Link} from 'react-router-dom'
import ImgAsset from '../resources'

export default function Footer () {
    return (
            <div >
					<div className='Footer'>
						<div className='Group226'>
							<div className='PageHeaderSecondary'>
								<div className='PageHeader'>
									<div className='ColorsSecondary'>
									</div>
									<span className='ProjectBrandGuidelines'>Project DESIGN Guidelines</span>
									<span className='_2020'></span>
								</div>
							</div>
							<div className='Group224'>
								<span className='UKMsCare2022'>© UKM's Care 2022</span>
								<div className='Group341'>
									<span className='FollowUs'>Follow Us</span>
									<img className='instagram1' src = {ImgAsset.ListPendaftarUKMAdminUKM_instagram1} />
									<img className='facebook1' src = {ImgAsset.ListPendaftarUKMAdminUKM_facebook1} />
									<img className='twitter1' src = {ImgAsset.ListPendaftarUKMAdminUKM_twitter1} />
									<img className='gmail1' src = {ImgAsset.ListPendaftarUKMAdminUKM_gmail1} />
								</div>
								<div className='Group364'>
								<Link to='/ukmunpad/ukms' className="link"><span className='UKMUnpad'>UKM Unpad</span></Link>
								<Link to='/beritaukm/articles' className="link"><span className='BeritaUKM'>Berita UKM</span></Link>					
								<Link to='/AboutUs' className="link"><span className='AboutUs'>About Us</span></Link>
								<Link to='/Help' className="link"><span className='Help'>Help</span></Link>
								</div>
							</div>
						</div>
					</div>
			</div>

    )
}

                