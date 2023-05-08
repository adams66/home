import Navbar from '../../components/Navbar/Navbar';
import Showcase from '../../components/Showcase/Showcase';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Particles from '../../components/Particles/Particles';
import MainLayout from '../../layout/MainLayout';
import Splash from '../../components/Splash/Splash';
import { useEffect } from 'react';

function Home(props) {
	useEffect(()=>{
		window.scrollTo(0,0);
			});


	return (
		<MainLayout pathurl={props.pathurl}>
			<Showcase />
			<About    />
			<Projects />
			<Contact  />
			<Splash />
		</MainLayout>
	);
}

export default Home;
