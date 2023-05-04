import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Particles from '../../components/Particles/Particles';
import MainLayout from '../../layout/MainLayout';
import webSites from '../../key/projects.json';
import Card from '../../components/Projects/cards/Card';

function Projects() {
	var websites = webSites[2].data;

	return (
		<MainLayout>


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


	
		</MainLayout>
	);
}

export default Projects;
