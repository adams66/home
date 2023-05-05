import Navbar from '../../components/Navbar/Navbar';
import Showcase from '../../components/Showcase/Showcase';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Particles from '../../components/Particles/Particles';
import MainLayout from '../../layout/MainLayout';
import Hidden from '../../components/Hidden/Hidden';

function Home() {
	return (
		<MainLayout>
			<Showcase />
			<About    />
			<Projects />
			<Contact  />
			<Hidden />
		</MainLayout>
	);
}

export default Home;
