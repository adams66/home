import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Particles from '../../components/Particles/Particles';
import MainLayout from '../../layout/MainLayout';
import webSites from '../../key/projects.json';
import Card from '../../components/Projects/cards/Card';
import { useEffect } from 'react';
import PlainLayout from '../../layout/PlainLayout';
import NavbarPlain from '../../components/NavbarPlain/NavbarPlain';


function Projects() {
	var websites = webSites[2].data;


    useEffect(()=>{
window.scrollTo(0,0);
    });

	return (
		<PlainLayout>
         <NavbarPlain />   
			<div class="main-container " id="projects">
				<div class="main-inner">
					<div class="section margin-auto">
						<div class="heading-container  margin-bottom-40">
							<h2 class="sub-headings no-wrap text-center">All Projects</h2>
						</div>

						<div class="grid-container margin-bottom-40">
							{websites.map((w) => {
								return <Card data={w} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</PlainLayout>
	);
}

export default Projects;
