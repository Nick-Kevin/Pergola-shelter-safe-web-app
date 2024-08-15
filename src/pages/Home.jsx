import Navbar from "../components/Navbar"
import illustration1 from "../assets/home-page/colors-green-gradient-spiral.png"
import illustration2 from "../assets/home-page/colors-yellow-star.png"
import illustration3 from "../assets/home-page/doodle-green-scribble.png"
import illustration4 from "../assets/home-page/energy-bright-green-wave.png"
import illustration5 from "../assets/home-page/line-scribble-1.png"


function Home() {

  
    return (
        <div>
            <Navbar isLoggedIn = {false}/>
            <section className="pt-48 relative h-screen flex flex-col items-center">
                <h1 className="text-green-500 text-5xl font-bold mb-10">Pergola shelter safe</h1>
                <h2 className="text-xl w-8/12">Assurez-vous que votre espace extérieur reste confortable et votre pergola abri sûr grâce à nos systèmes de commande innovants, conçus pour s'adapter à toutes les conditions météorologiques.</h2>
                <button className="mt-20 border border-black rounded-md text-base hover-border-black hover:bg-black hover:text-white">En savoir plus</button>
                <img src={illustration1} alt="illustration1" className="absolute opacity-50 lg:opacity-100 w-14 top-56 right-32" />
                <img src={illustration2} alt="illustration2" className="absolute opacity-80 lg:opacity-100 w-10 top-60 left-0 lg:left-32" />
                <img src={illustration3} alt="illustration3" className="absolute w-12 lg:w-28 bottom-40 left-0 lg:left-96" />
                <img src={illustration4} alt="illustration4" className="absolute opacity-50 lg:opacity-100 lg:w-32 bottom-10 lg:right-32" />
                <img src={illustration5} alt="illustration5" className="absolute w-14 top-32 right-12 lg:right-96" />
            </section>
        </div>
    )
}

export default Home