import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Volets() {
    return (
        <div>
            <Navbar />
            <section className="pt-32 px-10 md:px-32 flex flex-col md:flex-row items-center gap-10 md:gap-28 min-h-[80vh]">
                <p className="md:w-1/2 text-start lg:text-lg">
                Notre application vous permet désormais de contrôler facilement
                les volets de votre pergola. Grâce à cette fonctionnalité intuitive,
                vous pouvez ouvrir ou fermer les volets en fonction de vos besoins,
                que ce soit pour ajuster la luminosité,
                vous protéger du vent ou simplement créer une atmosphère plus intime.
                Le contrôle des volets vous offre une gestion complète de votre espace extérieur,
                directement depuis votre appareil.
                </p>
                <div className="md:w-1/2 flex flex-col gap-5 md:gap-10">
                    <h2 className="text-3xl">Etat</h2>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b pr-5 md:pr-0 pl-3 md:pl-0 border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="horizontal-list-radio-license" defaultChecked type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ouverts</label>
                            </div>
                        </li>
                        <li className="w-full border-b pr-5 md:pr-0 pl-3 md:pl-0 border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex justify-around items-center ps-3">
                                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fermés</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Volets
