import React from 'react';
import './HomeStyle.css';


export default function Home() {
  
  return <div>
            <section className='bg-light container-fluid'>
              <div className="">
                  <div className="row shadow bg-light py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mr-3">
                    <div className=' heading'>
                      <h1 className='display-4'>The powerful <span className='text-warning'>multi-purpose</span></h1>
                      <h1 className='display-4'>platform that put you on</h1>
                      <h1 className='display-4'>the <span className='text-success'>blockchain</span> world</h1>
                    </div>
                    <div className='body-text text-dark'>
                      <p>Want to know about the next best thing coming your way?</p>  
                      <p>We bring you the best of social media, networking </p>
                      <p>and cryptocurrency in this project.</p>
                    </div>
                    </div>
                    <div className="div-2 col-lg-6 col-md-6 col-sm-12 col-12 back-img">
                    <div className='ml-3 pull-right'>
                      <img src="././assets/woman-hand.svg" alt="" className='img img-fluid ' />
                    </div>
                    </div>
                  </div>
              </div>
            </section>

        </div>
}
