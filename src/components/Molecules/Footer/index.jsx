import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <ul className="footer-links">
                <li>YTS &#169; 2021-2021</li>
                <li>-</li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">DMCA</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">API</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">RSS</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">Browse Movie</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">Request</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
            {/* second link */}
            <ul className="footer-links">
                <li>
                    <a href="#">EZTV</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">YIFY Status</a>
                </li>
                <li>-</li>
                <li>
                    <a href="#">YTS Proxies</a>
                </li>
            </ul>
            <p className="site-agreement">
                By using this site you agree to and accept our{" "}
                <a href="#">User Agreement</a>, which can be read <a href="#">here.</a>
            </p>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center" }}>
                <p style={{ color: "white", paddingTop: "12px" }}>Copy Right All rights reserved.</p>
                <a style={{ textDecoration: "none", color: "white" }} href="https://github.com/Gaurab17">
                    @Gaurab Shrestha
                </a>
            </div>

        </footer>
    );
}

export default Footer;
