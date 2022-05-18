import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';


export default function ListPages () {
    return (
	<div >
		<Link to='/HomepageA_1'><div>HomepageA_1</div></Link>
		<Link to='/UKMUnpadA'><div>UKMUnpadA</div></Link>
		<Link to='/DetailUKMA'><div>DetailUKMA</div></Link>
		<Link to='/DaftarUKM'><div>DaftarUKM</div></Link>
		<Link to='/BeritaUKMB'><div>BeritaUKMB</div></Link>
		<Link to='/BeritaSingle'><div>BeritaSingle</div></Link>
		<Link to='/SigninUser'><div>SigninUser</div></Link>
		<Link to='/SignupUser'><div>SignupUser</div></Link>
		<Link to='/ProfileUser'><div>ProfileUser</div></Link>
		<Link to='/EditProfileUser'><div>EditProfileUser</div></Link>

		<Link to='/SigninAdmin'><div>SigninAdmin</div></Link>
		<Link to='/DashboardUKMB'><div>DashboardUKMB</div></Link>
		<Link to='/EditProfileUKM'><div>EditProfileUKM</div></Link>
		<Link to='/AturPendaftaranUKM'><div>AturPendaftaranUKM</div></Link>
		<Link to='/BuatBeritaUKM'><div>BuatBeritaUKM</div></Link>
		<Link to='/ListPendaftarUKMAdminUKM'><div>ListPendaftarUKMAdminUKM</div></Link>
		<Link to='/ListBeritaUKMAdminUKM'><div>ListBeritaUKMAdminUKM</div></Link>
		<Link to='/AboutUs'><div>AboutUs</div></Link>
	</div>
	)
}