import React from 'react';
import Reveal from 'react-reveal/Reveal';

const Footer = () => (
  <>
  <Reveal effect="fadeInUp">
  <footer className="page-footer font-small grn-bg" id="contact">
  <div className="container-fluid text-center text-md-left">

     <div className="row">

       <div className="col-md-6 mt-md-0 mt-3">

         <h5 className="text-uppercase">Hire Me</h5>
         <p>Please feel free to contact me.</p>

       </div>

       <hr className="clearfix w-100 d-md-none pb-3"/>

         <div className="col-md-6 mb-md-0 mb-3 footer-padding">

           <h5 className="text-uppercase">Contact Me</h5>

           <ul className="list-unstyled">
             <li>
               <a href="mailto:saidshahdev@gmail.com">saidshahdev@gmail.com</a>
             </li>

           </ul>

         </div>


     </div>

   </div>
    <div className=" text-center py-3 white-text">© 2018 Copyright:
      <a href="https://saidshah.com"> SBS Tech</a>
    </div>
  </footer>
   </Reveal>
</>
);

export default Footer;
