let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice")
function speak(text) {
    window.speechSynthesis.cancel(); 
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good morning, sir.");
    } else if (hours >= 12 && hours < 18) {
        speak("Good afternoon, sir.");
    } else {
        speak("Good evening, sir.");
    }
}


window.addEventListener('load', wishMe);


let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false; 

recognition.onresult = (event) => {
    const transcript = event.results[0][0]?.transcript || "No speech detected";
    content.innerText = transcript;
    recognition.stop();  
    takeCommand(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
});

function takeCommand(message) {
    const msg = message.toLowerCase();
    btn.style.display="flex"
    voice.style.display="none"
   
    if (msg.includes("hello")) {
        speak("Hello sir, what can I help you with?");
    } 
    else if (
        msg.includes("who are you") || 
        msg.includes("tum kon ho") || 
        msg.includes("aap kon ha")
    ) {
        speak("I am your virtual assistant, created by Poorn sir , prem sir , punit sir .");
    }
    else if (
        msg.includes("what industry make you ")){
        speak(" i maked by dakshai industry, industry owner is Mr.Puran Mehar sir.");
    } 
    else if (
        msg.includes("your source code ")){
        speak(" i can't control my source code, then sorry to this artical.");
    } 

    else if (msg.includes("what is the time")) {
        let time = new Date().toLocaleTimeString();
        speak(`The current time is ${time}`);
    } 
    else if (msg.includes("what is the date")) {
        let date = new Date().toLocaleDateString();
        speak(`Today's date is ${date}`);
    } 
    else if (msg.includes("tell me a joke")) {
        tellJoke();
    } 
    else if (msg.includes("open telegram")) {
        speak("Opening telegram.");
        window.open("https://www.telegram.com", "_blank");
    }
    else if (msg.includes("open whatsapweb")) {
        speak("Opening whatsapweb.");
        window.open("https://www.whatsapweb.com", "_blank");
    }
    else if (msg.includes("open facebook")) {
        speak("Opening facebook.");
        window.open("https://www.facebook.com", "_blank");
    }
    else if (msg.includes("open instagram") || (msg.includes("open insta"))
    ) {
        speak("Opening instagram.");
        window.open("https://www.instagram.com", "_blank");
    }
    else if (msg.includes("open linkdin")){
        speak("Opening linkdin.");
        window.open("https://www.linkdin.com", "_blank");
    }
    else if (msg.includes("open google")) {
        speak("Opening Google.");
        window.open("https://www.google.com", "_blank");
    } 
    else if (msg.includes("open youtube")) {
        speak("Opening YouTube.");
        window.open("https://www.youtube.com", "_blank");
    } 
    else if (msg.includes("open gmail")) {
        speak("Opening Gmail.");
        window.open("https://mail.google.com", "_blank");
    }
    else if (msg.includes("open google drive")) {
        speak("Opening Google Drive.");
        window.open("https://drive.google.com", "_blank");
    }
    else if (msg.includes("open google docs")) {
        speak("Opening Google Docs.");
        window.open("https://docs.google.com", "_blank");
    }

    

    else if (msg.includes("weather")) {
        getWeather();
    } 
    else if (msg.includes("search for") || msg.includes("look up")) {
        const query = msg.replace("search for", "").replace("look up", "").trim();
        speak(`Searching for ${query}.`);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    }
    else {
        speak("Sorry, I didn't understand that.");
    }
}

function tellJoke() {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the bicycle fall over? It was two-tired.",
        "Why was the math book sad? It had too many problems."
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    speak(joke);
}

function getWeather() {
    
    const weather = "It's sunny with a temperature of 25 degrees Celsius.";
    speak(weather);
}


recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    speak("I couldn't understand. Please try again.");
};
// JavaScript for handling form submissions (basic validation)
document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Here you can add your AJAX or backend logic to store the data
    alert("Registration successful!");
});

document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here you can check the credentials with your backend
    alert("Login successful!");
});
