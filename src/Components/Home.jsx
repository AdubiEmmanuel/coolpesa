import React from 'react';
import './HomeStyle.css';


export default function Home() {
  
  return <div>
           
                <div className="container-fluid">
                <section className=''>
                      <div className="row shadow bg-light py-5 bg-light container-fluid">
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
                          <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                            <button class="btn btn-outline-success" type="button" id="button-addon1">Email</button>
                          </div>
                          
                        </div>
                        
                        <div className="div-2 col-lg-6 col-md-6 col-sm-12 col-12 back-img">
                        <div className='ml-3 pull-right'>
                          <img src="././assets/woman-hand.svg" alt="" className='img img-fluid ' />
                        </div>
                        </div>
                      </div>
                    </section>          
                    <section>
                      <div className="container-fluid text-center bg-muted">
                        <div className="wrapper py-5">
                          <h1 className='display-4 text-bold text-success'>Our Aim</h1>
                          <img src="" alt="././assets/underline.svg" />
                          <p>We aim to reinvent the scope of individual development via incentivized connections garnered via interactive networking and enrich the lives of Africans both on the continent and in the diaspora.
                            We are creating a blockchain-based social profit system that enables users to connect and express their creative potential.
                            The collective community will promote and support individuals and organizations that proffer relevant solutions to rampant problems in African society.
                            We believe that it will help foster a positive interdependency where everyone is his own man yet interwoven enough to offer support to others. </p>
                          </div>
                      </div>
                    </section>
                    <section>
                    
                    </section>
            </div>
        </div>
}
