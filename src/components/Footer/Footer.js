import "./footer.css"

function Footer() {

function resetTheme(){
    localStorage.setItem("home-theme", "undecided");
    window.location.href = "/home";
}





    return ( <div className="footer">
    <div className="main-inner">
        <div className="section margin-auto flex flex-j-center flex-a-center flex-column">
            <div className="social sticky-left flex">
           
               <a className="text-decoration-none" href="https://github.com/adams66" target="_blank"> <i className="ri-github-fill footerIcons icon-size"></i></a>
               <a className="text-decoration-none" href="https://www.linkedin.com/in/dalton-adams-b99502117" target="_blank"> <i className="ri-linkedin-box-line footerIcons   icon-size"></i></a>
                <a className="text-decoration-none" href="https://www.facebook.com/dadams12345/" target="_blank"><i className="ri-facebook-box-line footerIcons  icon-size"></i></a>


                <div className="footerLine"></div>
            </div>
          
            <div className="copy">
                <p className="copyRight margin-bottom-20 copyrights">Copyright &copy; Dal10. All Rights Reserved <button onClick={resetTheme}>Reset Theme</button></p>
            </div>

            <div className="email sticky-right">
                
                <a  className="email-link footerEmail" href="mailto: dalton@dal-10.com">dalton@dal-10.com</a>
                <div className=" footerLine"></div>
             </div>
        </div>

    </div>
</div> );
}

export default Footer;