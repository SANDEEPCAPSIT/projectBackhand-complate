export const About = () => {
    return (
        <>
        <main>
            <section className="absection">
                <div className="containers grid grid two-cols">
                    <div className="hero-contant">
                        <h1>Welcome Sandeep Technical</h1>
                        <h2> Why Choose  Us?</h2>
                        <p>Expertise Our team consist of ecprerienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
                        <p>Costomization: We understand that  every business is unique. Thats why we create solution that  are tailored to your specific  needs and gools.</p>
                        <p>Customer- Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.</p>
                        <p>Affordability: We offer competive pricing without compromising on the qualityof our services.</p>
                        <p>Reliability Count on us  to be there when you needs us. We're committed to ensuring your IT environment is reliable and available 24/7.</p>
                        <div className="btn-group">
                            <a href="/contact">
                              <button className="btn">Contact Nou</button>
                            </a>
                            <a href="/services">
                                <button className="btn">Learn More</button>
                            </a>
                        </div>
                    </div>
                    <div className="heroimage">
                        <img src="Image/PR3.png"
                        width="400"
                        height="500"
                        />
                    </div>
                </div>
            </section>
        </main>

        {/* Section-2 */}
        <div className="section2">
            <div className="container2 grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>company registers</p>
                </div>
                <div className="div1">
                    <h2>150+</h2>
                    <p>project done</p>
                </div>
                <div className="div1">
                    <h2>250+</h2>
                    <p>Happy clients</p>
                </div>
                <div className="div1">
                    <h2>50+</h2>
                    <p>youtube subscribers</p>
                </div>
                    
            </div>
        </div>
        
        </>
    );
};