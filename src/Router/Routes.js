import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import HomepageA_1 from '../pages/HomepageA_1';
import UKMUnpadA from '../pages/UKMUnpadA';
import BeritaUKMB from '../pages/BeritaUKMB';
import BeritaSingle from '../pages/BeritaSingle';
import SigninUser from '../pages/SigninUser';
import SignupUser from '../pages/SignupUser';
import DetailUKMA from '../pages/DetailUKMA';
import ProfileUser from '../pages/ProfileUser';
import DaftarUKM from '../pages/DaftarUKM';
import EditProfileUser from '../pages/EditProfileUser';
import SigninAdmin from '../pages/SigninAdmin';
import DashboardUKMB from '../pages/DashboardUKMB';
import EditProfileUKM from '../pages/EditProfileUKM';
import AturPendaftaranUKM from '../pages/AturPendaftaranUKM';
import BuatBeritaUKM from '../pages/BuatBeritaUKM';
import ListPendaftarUKMAdminUKM from '../pages/ListPendaftarUKMAdminUKM';
import ListBeritaUKMAdminUKM from '../pages/ListBeritaUKMAdminUKM';
import EditBeritaUKM from '../pages/EditBeritaUKM';
import AboutUs from '../pages/AboutUs';
import Help from '../pages/Help';


function RouterDOM () {

	const localDataRole = sessionStorage.getItem("role");
	const localDataID = sessionStorage.getItem("id");
	const localDataEmail = sessionStorage.getItem("user");
	console.log(localDataRole);
	console.log(localDataID);
	console.log(localDataEmail);

	const data = {
		"role" : localDataRole,
		"id" : localDataID,
		"email" : localDataEmail
	}

	return (
		<Router>

			<Switch>
				<Route path="/" 
						exact 
						component={() => <HomepageA_1 data={data}/>}></Route>
				<Route path="/homepage" 
						exact 
						component={() => <HomepageA_1 data={data}/>}></Route>

				<Route exact path="/SigninUser"><SigninUser /></Route>
				<Route exact path="/SignupUser"><SignupUser /></Route>
				<Route path="/beritaukm/:pathParam1?/:pathParam2?/:pathParam3?" component={BeritaUKMB}></Route>
				<Route path="/beritasingle/:articles_id" component={BeritaSingle}></Route>
				<Route path="/ukmunpad/:pathParam1?/:pathParam2?/:pathParam3?" component={UKMUnpadA}></Route>
				<Route exact path="/profileuser"><ProfileUser /></Route>
				<Route exact path="/editprofileuser/:id" component={EditProfileUser}></Route>
				<Route path="/detailukm/:ukm_id" component={DetailUKMA}></Route>
				<Route path="/daftarukm/:ukm_id" component={DaftarUKM}></Route>

				<Route exact path="/SigninAdmin"><SigninAdmin /></Route>
				<Route exact path="/dashboardukm"><DashboardUKMB /></Route>
				<Route path="/editprofileukm/:ukm_id" component={EditProfileUKM}></Route>
				<Route path="/listberitaukm" component={ListBeritaUKMAdminUKM}></Route>
				<Route path="/buatberitaukm" component={BuatBeritaUKM}></Route>
				<Route path="/editberitaukm/:articles_id" component={EditBeritaUKM}></Route>
				<Route exact path="/listpendaftarukm"><ListPendaftarUKMAdminUKM /></Route>
				<Route exact path="/aturpendaftaranukm"><AturPendaftaranUKM /></Route>		

				<Route exact path="/AboutUs"><AboutUs /></Route>
				<Route exact path="/Help"><Help /></Route>
				
			</Switch>
					
		</Router>
	);
}
export default RouterDOM;