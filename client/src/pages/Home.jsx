


export const Home = () => {
    return (
        <>
        <main>
            <section className="section-hero">
                <div className="containers grid grid two-cols">
                    <div className="hero-contant">
                        <p>We are the Best IT Company</p>
                        <h1>Welcome to Sandeep</h1>
                        <p>
                            Are You Ready to take your Business to the next level with cutting-edge IT solutions? Look no further! At Thapa Techinacal, we Specialize in providing innovation IT services and solutions tailored to meet your unique needs.
                        </p>
                        <div className="btn-group">
                            <a href="/contact">
                               <button className="btn"> Conect Now</button>
                            </a>
                            <a href="/services">
                               <button className="btn"> Learn More</button>
                            </a>
                        </div>
                    </div>

                    {/* hero image */}
                    <div className="heroimage">
                        <img src="Image/PR3.png"
                        alt="coding together"
                        width="400"
                        height="500"
                        
                        />
                    </div>
                </div>
            </section>
        </main>

        {/* 2nd section */}
        <div className="section2">
            <div className=" container2 grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>register companies</p>
                </div>
                <div className="div1">
                    <h2>100,00+</h2>
                    <p>Happy Client</p>
                </div>
                <div className="div1">
                    <h2>500+</h2>
                    <p>register companies</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>service</p>
                </div>
            </div>
        </div>



        {/* 3rd section */}

        <div className="containers grid grid two-cols">
            <div className="hero2">
                <img src="Image/PR4.png"
                width="400"
                height="500"
                />
            </div>
            <div className="part1">
                <p> We are here to help you</p>
                <h1>Get Started Today</h1>
                <p>Ready to take the first step towards a more effecient and secure IT infrastructer? Contact us today for a free consultation and lets discuss how Sandeep Technical can help your business thrive in the digital age.</p>

                <div className="btn-group">
                    <a href="/contact">
                      <button className="btn">Contact Now</button>
                    </a>
                    <a href="/services">
                      <button className="btn">Learn More</button>
                    </a>
                </div>
            </div>
              
        </div>
        </>

        
    );
};