import React from 'react'
import { useState, useEffect } from "react";
import ImgAsset from '../resources'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/BeritaPost3.css";
import Sliderslick from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTimeAgo from 'react-time-ago'

export default function BeritaPost3(props) {
    const [berita, setBerita] = useState([]);
    const [infinite, setInfinite] = useState(true);

    const ID = props.idUKM;
    console.log(ID);

    const [userId, setUserId] = useState(() => {
		const localData = localStorage.getItem("id");
		return localData ? localData : null;
	});

    // const settingsSlick = {
    //     infinite: infinite,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     vertical: true,
    //     verticalSwiping: true,
    //     responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true,
    //         },
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2,
    //         },
    //         dots: false,
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         },
    //         dots: false,
    //     },
    //     ],
    // };

    // useEffect(() => {
    //     setID(props.ukm_id);  
    //     console.log(ID);
	// });

    const [date1, setDate1] = useState();
    const [date2, setDate2] = useState();
    const [dt1, setDt1] = useState();
    const [dt2, setDt2] = useState();

    
    useEffect(() => {
		axios
        .get(`${process.env.REACT_APP_BACKEND_URL}articles/ukm/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });

        if(berita.length !== 0){
            console.log("Berita Ada");
            
        }
        
	  }, []); 

    useEffect(() => {
        if (berita.length === 0) {
            console.log("Berita Tidak Ada")
           

        } else {
           console.log("lohhkok")
           setDate1(berita[0].created_at);
           setDate2(berita[1].created_at);
           console.log(date1);
           console.log(date2);
        }

        if(date1 !== null && date2 !== null){
            setDt1(new Date(date1));
            setDt2(new Date(date2));
        }else{
            setDt1(new Date("16-05-21"));
            setDt2(new Date("16-05-21"));
        }

    }, [berita.length]);
    console.log(berita);
    console.log(infinite);

    if(berita.length !== 0){
        console.log("Berita Ada");
        // setDate1(berita[0].created_at);
        // setDate2(berita[1].created_at);
        // console.log(date1);
        // console.log(date2);
        
    }

   


    return (
        <div>

        {
            berita.length === 0 ? (<div className='NoBerita'>Belum Ada Berita</div>
            ): (<div>
                
                <div className='Group302'>
                    <div className='Rectangle20'/>
                    <div className='Group390'>
                        <span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2013'>{berita[0].subject}</span>
                        <img className='JuaraTaekwondo1' src = {`${process.env.REACT_APP_BACKEND_URL}${berita[0].image}`} />
                        <span className='UnitTaekwondoUnpad'>{berita[0].ukm.name}</span>
                        <span className='Jumat25Maret2022'><ReactTimeAgo date={'1355972400000'} locale="en-US"/></span>
                    </div>
                </div>
                    
                <div className='Group390_1'>
                    <div className='Rectangle20_1'/>
                    <div className='Group390_2'>
                        <span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2013_1'>{berita[1].subject}</span>
                        <img className='JuaraTaekwondo1_1' src = {`${process.env.REACT_APP_BACKEND_URL}${berita[1].image}`} />
                        <span className='UnitTaekwondoUnpad_1'>{berita[1].ukm.name}</span>
                        <span className='Jumat25Maret2022_1'><ReactTimeAgo date={"1355972400000"} locale="en-US"/></span>
                    </div>
                </div>

            </div>)

        }

        
        {/* <section id="marketplace-product">
            <div >
            <Sliderslick {...settingsSlick} className="slickSlider">
                {berita.map((post) => (
                <Link className="link" to={`/beritasingle/${post.id}`} key={post.id}>
                    <div className="d-flex justify-content-center ">
                        <div className='Group302'>
                            <div className='Rectangle20'/>
                            <div className='Group390'>
                                <span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2013'>{post.subject}</span>
                                <img className='JuaraTaekwondo1' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
                                <span className='UnitTaekwondoUnpad'>{post.ukm.name}</span>
                                <span className='Jumat25Maret2022'>{post.created_at}</span>
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
            </Sliderslick>
            </div>
        </section> */}
        </div>
    );
}
