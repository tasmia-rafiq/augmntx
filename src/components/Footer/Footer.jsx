import './Footer.css';
import logoWhite from '../../assets/logo_dark.png';
import FooterBtn from '../FooterBtn/FooterBtn';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer_row">
                <div className="footer_logo">
                    <img src={logoWhite} alt="AugmntX" />
                </div>
                
                <div className="footer_col">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer_col">
                    <h3>AugmntX</h3>
                    <ul>
                        <li><a href="#">View Profiles</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">On Demand Talent</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>

                <div className="footer_col">
                    <h3>Vendor</h3>
                    <ul>
                        <li><a href="#">Apply as Vendor</a></li>
                        <li><a href="#">Vendor Login</a></li>
                        <li><a href="#">Remote Jobs</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer_row">
                <p className="copyright">
                    &copy; 2022 - 2023 <strong>AugmntX</strong> - Labor Omnia Vincit ⚡ by <a href="https://superlabs.co">SuperLabs</a>
                </p>

                <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>

        <FooterBtn />
    </footer>
  )
}

export default Footer