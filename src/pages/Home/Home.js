import './Home.css';
import{ Link } from'react-router-dom';
export default function Home() {
    return(

<main className="d-flex justify-content-center align-items-center">
        <div>
          <div className="home-header container-fluid d-flex flex-column justify-content-center align-items-center my-5 rounded-4">
            <h1 className="home-title text-center">Project Rick & Morty</h1>
            <h2 className="home-subtitles mb-4 text-center">
              Welcome to Rick & Morty Project!
            </h2>
            <p className="text-center mx-3">
              This proyect was made for practising React and to made a
              functional website
            </p>
            <p className="text-center mx-3">
              In this website you can know information of the characters of this
              animated series.
            </p>
            <p className="text-center mx-3">
              Also you can filter for diferent types of properties to find the
              character that you <br /> are looking for or send us a massage for
              any concern o sugestion
            </p>
            <h2 className="home-subtitles mb-5">Let's go!</h2>
            <nav className="d-flex justify-content-center gap-3">
              <Link to="/characters" className="home-buttons rounded-2 py-3 px-4">
                Characters
              </Link>
              <Link to="/contact" className="home-buttons rounded-2 py-3 px-4">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </main>
    )}