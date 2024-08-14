import Navbar from "../components/Navbar";

function Home() {
    return (
        <div>
            <Navbar/>
            <section className="pt-48 h-screen flex flex-col items-center">
                <h1 className="text-green-500 text-5xl font-bold mb-10">Pergola shelter safe</h1>
                <h2 className="text-xl w-8/12">Assurez-vous que votre espace extérieur reste confortable et votre pergola abri sûr grâce à nos systèmes de commande innovants, conçus pour s'adapter à toutes les conditions météorologiques.</h2>
                <button className="mt-20 border border-black rounded-md text-base hover-border-black hover:bg-black hover:text-white">En savoir plus</button>
            </section>
        </div>
    )
}

export default Home