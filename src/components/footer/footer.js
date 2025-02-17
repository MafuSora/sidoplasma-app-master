import React from 'react';
import logo from '../img/UB.png';
import UT from '../img/UT.png';
import Sidoplasma from '../img/LOGO SIDOPLASMA.png';
import Gmail from '../img/Gmail.png';
import './footer.css'

const Footer = () => {
    return (
        <footer class="footer-distributed">

			<div class="footer-left">

				<h3><span></span></h3>
				<img src={Sidoplasma} alt="sidoplasma" width="210" height="50"></img>

				<p class="footer-links">
					<a href="#" class="link-1" color="black" >Home</a>
					
					<a href="#">SignIn</a>
				
					<a href="#">SignUp</a>
				
					<a href="#">Contact</a>
					
				</p>

				<p class="footer-company-name">SIDOPLASMA ©2021</p>
			</div>

			<div class="footer-center">

				<div>
					<p class="footer-links">
						<a href="#" class="link-1" color="black" ><strong>Created By</strong></a>
						
						<a href="#"className="link-primary"><strong>Supported By</strong></a>
					
						<a href="#" className="link-primary"><strong>Contact Us </strong></a>
						<br/>
						<img src={logo} alt="UB" width="40" height="40" className="logos"></img>
						<img src={UT} alt="UT" width="100" height="60" className="logos"></img>
						<img src={Gmail} alt="Gmail" width="60" height="30" className="logos"></img>
					</p>
					
				</div>

				{/* <div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div> */}

				{/* <div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div> */}

			</div>

			<div class="footer-right">

				<p class="blackText">
					<span></span>
					Sidoplasma is the use of media in the form of a website that is integrated with auto messages is used to collect data on prospective COVID-19 convalescent plasma donors by various health facilities and can be accessed by Indonesian Red Cross Society(PMI).
				</p>

				<div class="footer-icons">

					

				</div>

			</div>

		</footer>
    );}

    export default Footer;