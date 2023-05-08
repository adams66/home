import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Particles from "../components/Particles/Particles";


function MainLayout(props) {
    return (
        <div style={{height: "100vh"}}>
        <Navbar pathUrl={props.pathUrl} />
        {props.children}
        <Footer />
        <Particles />
        </div>
      );
}

export default MainLayout;