import Navbar from "../components/Navbar"
import illustration1 from "../assets/home-page/colors-green-gradient-spiral.png"
import illustration2 from "../assets/home-page/colors-yellow-star.png"
import illustration3 from "../assets/home-page/doodle-green-scribble.png"
import illustration4 from "../assets/home-page/energy-bright-green-wave.png"
import illustration5 from "../assets/home-page/line-scribble-1.png"
import microphone from "../assets/home-page/features/voice-fill-svgrepo-com.svg"
import camera from "../assets/home-page/features/icons8-caméra-30.png"
import volets from "../assets/home-page/features/icons8-fermeture-des-volets-50.png"
import manualControl from "../assets/home-page/features/icons8-télécommande-50.png"
import Footer from "../components/Footer";


function Home() {

  
    return (
        <div>
            <Navbar isLoggedIn = {false}/>
            <section className="pt-48 relative h-screen flex flex-col items-center">
                <h1 className="text-green-500 text-3xl sm:text-5xl font-bold mb-10">Pergola shelter safe</h1>
                <h2 className="text-base sm:text-xl w-8/12 text-justify sm:text-center">Assurez-vous que votre espace extérieur reste confortable et votre pergola abri sûr grâce à nos systèmes de commande innovants, conçus pour s'adapter à toutes les conditions météorologiques.</h2>
                <a href="#features" className="mt-20 py-3 px-7 text-black border border-black rounded-md text-base hover-border-black hover:bg-black hover:text-white">En savoir plus</a>
                <img src={illustration1} alt="illustration1" className="absolute z-0 opacity-50 lg:opacity-100 w-14 top-56 right-32" />
                <img src={illustration2} alt="illustration2" className="absolute z-0 opacity-80 lg:opacity-100 w-10 top-60 left-0 lg:left-32" />
                <img src={illustration3} alt="illustration3" className="absolute z-0 w-12 lg:w-28 bottom-40 left-0 lg:left-96" />
                <img src={illustration4} alt="illustration4" className="absolute z-0 opacity-50 lg:opacity-100 lg:w-32 bottom-10 lg:right-32" />
                <img src={illustration5} alt="illustration5" className="absolute z-0 w-14 top-32 right-12 lg:right-96" />
            </section>
            <section id="features" className="mb-5 sm:mb-0 sm:py-32">
                <h1 className="text-2xl md:text-4xl">Les fonctionnalités</h1>
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center sm:items-stretch gap-10 sm:gap-0 md:px-28 mt-10 sm:mt-20">
                    <div className="w-72 sm:w-80 rounded-lg border border-[#06060630] shadow-lg p-8">
                        <div className="flex justify-center">
                            <img src={microphone} alt="microphone" className="w-10" />
                        </div>
                        <p className="mt-5">Commande vocale (ouverture/fermeture)</p>
                    </div>
                    <div className="w-72 sm:w-80 rounded-lg border border-[#06060630] shadow-lg p-8">
                        <div className="flex justify-center">
                            <img src={manualControl} alt="manual control" className="w-10" />
                        </div>
                        <p className="mt-5">Commande manuelle (ouverture/fermeture)</p>
                    </div>
                    <div className="w-72 sm:w-80 rounded-lg border border-[#06060630] shadow-lg p-8">
                        <div className="flex justify-center">
                            <img src={volets} alt="microphone" className="w-10" />
                        </div>
                        <p className="mt-5">Volets</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home