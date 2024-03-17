// Verifica si el navegador admite la API de reconocimiento de voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();

    // Define una lista de comandos que deseas reconocer
    const commands = ["encender", "apagar", "saludar"];

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log("Texto reconocido:", transcript);

        // Ejecuta acciones según los comandos reconocidos
        if (commands.includes(transcript)) {
            switch (transcript) {
                case "encender":
                    // Lógica para encender algo en tu página
                    console.log("Encendido");
                    break;
                case "apagar":
                    // Lógica para apagar algo en tu página
                    console.log("Apagado");
                    break;
                case "saludar":
                    // Lógica para saludar al usuario
                    console.log("¡Hola!");
                    break;
                default:
                    console.log("Comando no reconocido");
            }
        }
    };

    // Inicia el reconocimiento de voz
    recognition.start();
} else {
    console.log("El navegador no admite el reconocimiento de voz.");
}
