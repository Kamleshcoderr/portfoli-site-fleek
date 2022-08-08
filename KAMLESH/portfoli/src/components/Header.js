// Import Assets
import profile from '../assets/Kamlesh.jpg';

const Header = () => {
    return (
        <section className='header'>
    
            <img src={profile} alt="Kamlesh Kumar" />
           
            <div className='header__content'>
                <h1>Hi, I'm Kamlesh</h1>
                <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">MobileApp Developer</div>
              <div className="i-title-item">Blockchain Developer</div>
              <div className="i-title-item">Electronics Engineer</div>
            </div>
          </div>
          
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=Kamleshkumar91356@gmail.com" target="_blank"><button className='button'>Hire Me</button></a><br></br>
                <a href='https://drive.google.com/file/d/1WUb_D0RpvNVBYLcuu9J7oWC6e_F-9iY1/view?usp=sharing' target="_blank"><button className='button'>Dowanload CV</button></a>
              
                
            </div>
        </section>
    );
}

export default Header;