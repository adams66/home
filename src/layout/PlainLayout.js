import Particles from "../components/Particles/Particles";
import Footer from "../components/Footer/Footer";


function PlainLayout(props) {
    return ( 

        <div style={{height: "100vh"}}>
        {props.children}
        <Footer />
        <Particles />
        </div>


     );
}

export default PlainLayout;