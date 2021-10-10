import React, { Component } from 'react'
import './FooterStyle.css'

export class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- Site footer --> */}
                <footer className="site-footer"> {/*<hr />*/}
                    <div className="container" style={{ marginBottom:"30px" }}>
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2021 by Soumyadeep
                                    {/* <a href="#">Scanfcode</a>. */}
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                                    <li><a className="dribbble" href="https://dribbble.com"><i className="fab fa-dribbble"></i></a></li>
                                    <li><a className="linkedin" href="http://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
