import Particles from "../components/Particles/Particles";


function PlainLayout(props) {
    return ( 

        <div style={{height: "100vh"}}>
        {props.children}
        <Particles />
        </div>


     );
}

export default PlainLayout;