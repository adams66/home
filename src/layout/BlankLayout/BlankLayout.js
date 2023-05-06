import Particles from "../../components/Particles/Particles";

function BlankLayout(props) {
    return (  
        <div style={{height: "100vh"}}>
        {props.children}
        <Particles />
        </div>



    );
}

export default BlankLayout;