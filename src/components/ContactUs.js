
// import Developer from './Developer.jpg';
import Ceo from './Ceo.jpg';
import './FooterStyle.css';

export default function ContactUs(props) {

    document.title = 'SDNews - About Us'


    return (
        <>
            <div style={{ "fontFamily": "Arial, Helvetica, sans-serif", "margin": "0", "backgroundColor": "#42fb5d66" }}>
                <div className="aboutSection" style={{ "padding": "50px", "textAlign": "center", "backgroundColor": "#474e5d", "color": "white" }}>
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>This website is build by using Javascript Library React JS. News is fetched from external NewsApi so the contents are real and reliable. Hope you like it :) </p>
                </div>

                <h2 className="my-3" style={{ "textAlign": "center" }}>Our Team</h2>
                <div className="row  text-center justify-content-center">
                    <div className="col-12 col-md-12 col-lg-4 col-xl-4" style={{ "float": "left", "marginBottom": "16px", "padding": "0 10px" }}>
                        <div className="card text-align-center" style={{ "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)", "margin": "8px" }}>
                            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg" alt="Jane" style={{ "width": "100%" }} />
                            <div className="container" style={{ "padding": "0 16px" }}>
                                <h2>Jane Doe</h2>
                                <p className="title" style={{ "color": "grey" }}>CEO & Founder</p>
                                <p>I am everywhere...</p>
                                <p>chimku@sdnews.com</p>
                                <p><a href="https://www.facebook.com/soumyadeep07guin/" target="_blank" rel="noreferrer">
                                    <button className="button" style={{ "border": "none", "outline": "0", "display": "inlineBlock", "padding": "8px", "color": "white", "backgroundColor": "#000", "textAlign": "center", "cursor": "pointer", "width": "100" }}>Contact</button>
                                </a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4 col-xl-4" style={{ "float": "left", "marginBottom": "16px", "padding": "0 10px" }}>
                        <div className="card" style={{ "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)", "margin": "8px" }}>
                            <img src="https://cdn.codechef.com/sites/default/files/uploads/pictures/5e448f31d182a43aacf8063b4beb0721.jpg" alt="Mike" style={{ "width": "100%" }} />
                            <div className="container" style={{ "padding": "0 16px" }}>
                                <h2>Soumyadeep</h2>
                                <p className="title" style={{ "color": "grey" }}>Developer</p>
                                <p>Developer and maintainer of this whole application.</p>
                                <p>soumyadeep@sdnews.com</p>
                                <p>
                                    <a href="https://www.facebook.com/soumyadeep07guin/" target="_blank" rel="noreferrer"><button className="button" style={{ "border": "none", "outline": "0", "display": "inlineBlock", "padding": "8px", "color": "white", "backgroundColor": "#000", "textAlign": "center", "cursor": "pointer", "width": "100" }}>Contact</button>
                                    </a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4 col-xl-4" style={{ "float": "left", "marginBottom": "85px", "padding": "0 10px" }}>
                        <div className="card" style={{ "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)", "margin": "8px" }}>
                            <img src={Ceo} alt="John" style={{ "width": "100%" }} />
                            <div className="container" style={{ "padding": "0 16px" }}>
                                <h2>Sourodeep</h2>
                                <p className="title" style={{ "color": "grey" }}>Designer Architect</p>
                                <p>One of the best Web designers of modern time..</p>
                                <p>sourodeep@sdnews.com</p>
                                <p><a href="https://www.facebook.com/soumyadeep07guin/" target="_blank" rel="noreferrer">
                                    <button className="button" style={{ "border": "none", "outline": "0", "display": "inline-block", "padding": "8px", "color": "white", "backgroundColor": "#000", "textAlign": "center", "cursor": "pointer", "width": "100" }} >Contact</button>
                                </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}


