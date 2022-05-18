import React from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";
import Cookies from "js-cookie";
import ImgAsset from '../resources'
import { Dropdown } from 'react-bootstrap'
import axios from 'axios';

const Swal = require('sweetalert2');


export default function Navbar () {

	// Navbar State Handler

	const [user, setUser] = useState([]);

	const [userRole, setUserRole] = useState(() => {
		const localData = sessionStorage.getItem("role");
		return localData ? localData : null;
	});
	const [userId, setUserId] = useState(() => {
		const localData = sessionStorage.getItem("id");
		return localData ? localData : null;
	});

	var isLoggedIn = false;
	
	// For Checking userRole
	const admin = '1';

	// Change var isLoggedIn
	if(userRole !== null){
		var isLoggedIn = true;
	}

	var status = true;
	
	useEffect(() => {	
		if (userId !== null){	
			axios.get(`${process.env.REACT_APP_BACKEND_URL}profiles/${userId}`)
			.then((response)=> {
					console.log(response);
					setUser(response.data.data);
			})
		}		
	}, [])

	// logout handler
	const logoutHandler = () => {
		sessionStorage.clear();
		Swal.fire({
			icon: 'success',
			title: 'Anda Berhasil Log Out',
			allowOutsideClick: false,
			allowEscapeKey: false,
			confirmButtonText: 'OK',
			confirmButtonColor: '#21c177',
			preConfirm: () => {
				window.location.href = "/homepage";
			}
				
		});	
	  };
	
    return (
		<div className='Navbar'>	

		{isLoggedIn === false ? (
				// Navbar Sebelum Login 
				<div className='Frame382'>
					<div className='Frame368'>
						<div className='Navbar1'>
							<div className='Group222'>
								<div className='PageHeaderSecondary_1'>
									<div className='PageHeader_1'>
										<div className='ColorsSecondary_1'>
										</div>
										<span className='ProjectBrandGuidelines_1'>Project DESIGN Guidelines</span>
										<span className='_2020_1'></span>
									</div>
								</div>
							</div>
							<div className='Frame375'>
								<Link to='/homepage'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
							</div>
							<div className='Frame238'>
								<Link to='/ukmunpad/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
								<Link to='/beritaukm/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>					
							</div>
							<div>

							</div>
							<div className='Dropdown2'>
								<Dropdown >
									<Dropdown.Toggle variant='none' id="dropdown-autoclose-true" className='Toggle'>
										<div className='Rectangle1'/>
										<span className='Login'>Login</span>
									</Dropdown.Toggle>
									
									<Link to='/SignupUser' className="link">
										<Button className='Rectangle2' > 
											<span className='Register'>Register</span>
										</Button> 	
									</Link>	

									
									<Dropdown.Menu align='start' className='Menu2'>
										<Dropdown.Item href="/SigninAdmin">Admin</Dropdown.Item>
										<Dropdown.Item href="/SigninUser">Mahasiswa</Dropdown.Item>
									</Dropdown.Menu>
								
								</Dropdown>
							</div>
						</div>
					</div>
				</div>
			):( <div>
				{ userRole === admin ? (
					<div> {/*Admin*/} 
						<div className='Frame382'>
							<div className='Frame368'>
								<div className='Navbar1'>
									<div className='Group222'>
										<div className='PageHeaderSecondary_1'>
											<div className='PageHeader_1'>
												<div className='ColorsSecondary_1'>
												</div>
												<span className='ProjectBrandGuidelines_1'>Project DESIGN Guidelines</span>
												<span className='_2020_1'></span>
											</div>
										</div>
									</div>
									<div className='Frame375'>
										<Link to='/Homepage'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
									</div>
									<div className='Frame238'>
										<Link to='/dashboardukm' className="link"><span className='Dashboard'>Dashboard</span></Link>
										<Link to='/ukmunpad/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
										<Link to='/beritaukm/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>		
									</div>

									<div className='Dropdown'>
										<Dropdown >
											<Dropdown.Toggle variant='none' id="dropdown-autoclose-true" className='Toggle'>
												{
													user.avatar !== null ? (
														<img className='Avatar' src = {`${process.env.REACT_APP_BACKEND_URL}${user.avatar}`} style={{width: 50, height: 50, borderRadius: 50/ 2}} />	
													):(
														<img className='Avatar' src = {ImgAsset.Avatar} />	
													)
												}	
											</Dropdown.Toggle>

											
											<Dropdown.Menu align='start' className='Menu'>
												<Dropdown.Item href="/profileuser">Profile</Dropdown.Item>
												<Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
											</Dropdown.Menu>
										
										</Dropdown>
									</div>
								</div>
							</div>
						</div>
					</div>
					):(
					<div>
						{/*User Sudah Login*/} 
						<div className='Frame382'>
							<div className='Frame368'>
								<div className='Navbar1'>
									<div className='Group222'>
										<div className='PageHeaderSecondary_1'>
											<div className='PageHeader_1'>
												<div className='ColorsSecondary_1'>
												</div>
												<span className='ProjectBrandGuidelines_1'>Project DESIGN Guidelines</span>
												<span className='_2020_1'></span>
											</div>
										</div>
									</div>
									<div className='Frame375'>
										<Link to='/homepage'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
									</div>
									<div className='Frame238'>
										<Link to='/ukmunpad/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
										<Link to='/beritaukm/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
										
									</div>

								
									<div className='Dropdown'>
										<Dropdown >
											<Dropdown.Toggle variant='none' id="dropdown-autoclose-true" className='Toggle'>			
											{
												user.avatar !== null ? (
													<img className='Avatar' src = {`${process.env.REACT_APP_BACKEND_URL}${user.avatar}`} style={{width: 50, height: 50, borderRadius: 50/ 2}}/>	
												):(
													<img className='Avatar' src = {ImgAsset.Avatar} />	
												)
											}	
											</Dropdown.Toggle>

											<Dropdown.Menu align='start' className='Menu'>
												<Dropdown.Item href="/profileuser">Profile</Dropdown.Item>
												<Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
											</Dropdown.Menu>
										
										</Dropdown>
									</div>
								</div>
							</div>
						</div>

					</div>
					)

				}
				</div>	
			)



		}
			
		</div>
	)
}