// Import Assets
import compound from '../assets/compound.png';
import Exam from '../assets/Exam.jpeg';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Portfoli Management</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Portfoli  Civil Enginner
                    </p>

                    <a href="https://ebroengicon.com/" target="_blank" className="button">Site</a>
                   
                </div>
                <div className="projects__card">
                    <h3>Exam App</h3>
                    <img src={Exam} alt="" class="projects__cardm" />
                    <p>Exam Mobile App
                    </p>

                    <a href="#" target="_blank" className="button">Site</a>
                    
                   
                </div>
               

            </div>
           

                

            
        </section>
    );
}

export default Projects;