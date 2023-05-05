function Footer() {
    return ( <div className="footer">
    <div className="main-inner">
        <div className="section margin-auto flex flex-j-center flex-a-center flex-column">
            <div className="social sticky-left flex">
           
               <a className="text-decoration-none" href="https://github.com/adams66" target="_blank"> <i className="ri-github-fill color-icons-fill-Theme  icon-size"></i></a>
               <a className="text-decoration-none" href="https://www.linkedin.com/in/dalton-adams-b99502117" target="_blank"> <i className="ri-linkedin-box-line color-icons-fill-Theme  icon-size"></i></a>
                <a className="text-decoration-none" href="https://www.facebook.com/dadams12345/" target="_blank"><i className="ri-facebook-box-line color-icons-fill-Theme  icon-size"></i></a>


                <div className="vertLine"></div>
            </div>
          
            <div className="copy">
                <p className="color-footer-text margin-bottom-20 copyrights">Copyright &copy; Dal10. All Rights Reserved</p>
            </div>

            <div className="email sticky-right">
                
                <a  className="email-link color-footer-text" href="mailto: dalton@dal-10.com">dalton@dal-10.com</a>
                <div className="vertLine"></div>
             </div>
        </div>

    </div>
</div> );
}

export default Footer;