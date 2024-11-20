// JavaScript to handle language switching
let currentLangIndex = 0; // Starts with English

// Define the languages in the order of transition
const languages = ['en', 'hi', 'kn', 'ta']; // English, Hindi, Kannada, Tamil

// Function to switch languages
function switchLanguage() {
    // Hide all language spans
    const allLangElements = document.querySelectorAll('.lang');
    allLangElements.forEach(el => {
        el.style.display = 'none';
    });

    // Show the current language text
    const currentLang = languages[currentLangIndex];
    const currentLangElements = document.querySelectorAll(`.lang.${currentLang}`);
    currentLangElements.forEach(el => {
        el.style.display = 'inline';
    });

    // Move to the next language
    currentLangIndex = (currentLangIndex + 1) % languages.length;
}

// Set an interval to change the language every 4 seconds
setInterval(switchLanguage, 4000);
