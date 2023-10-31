const textarea = document.getElementById("myTextarea");
const themeSelect = document.getElementById('themeSelect');

// Function to save the textarea content to local storage
function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}

// Check if there's existing data in local storage and populate the textarea
if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}

// Add an event listener to the textarea for input changes and save to local storage
textarea.addEventListener("input", saveToLocalStorage);
// Event listener for theme selection
themeSelect.addEventListener('change', function () {
    const selectedTheme = themeSelect.value;
    document.body.className = selectedTheme;
    userCard.className = `card ${selectedTheme}`;
});

// Load user information from local storage
loadUserFromLocalStorage();
