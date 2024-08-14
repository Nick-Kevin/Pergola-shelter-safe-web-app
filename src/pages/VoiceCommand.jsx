import VoiceRecognition from "../components/VoiceRecognition";
import Navbar from "../components/Navbar";

function VoiceCommand() {
    return (
        <div>
            <Navbar/>
            <div className="pt-32">
                <VoiceRecognition/>
            </div>
        </div>
    )
}

export default VoiceCommand
