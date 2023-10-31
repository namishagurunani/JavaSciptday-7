const userForm = document.getElementById('userForm');
const userCard = document.getElementById('userCard');
const themeSelect = document.getElementById('themeSelect');

// Function to update the displayed user information
function updateUserCard() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const phone = document.getElementById('phone').value;
    const village = document.getElementById('village').value;
    const city = document.getElementById('city').value;

    document.getElementById('displayedFirstName').textContent = firstName;
    document.getElementById('displayedLastName').textContent = lastName;
    document.getElementById('displayedCountry').textContent = country;
    document.getElementById('displayedState').textContent = state;
    document.getElementById('displayedPhone').textContent = phone;
    document.getElementById('displayedVillage').textContent = village;
    document.getElementById('displayedCity').textContent = city;

    // Store data in local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('country', country);
    localStorage.setItem('state', state);
    localStorage.setItem('phone', phone);
    localStorage.setItem('village', village);
    localStorage.setItem('city', city);
}

// Function to load user information from local storage
function loadUserFromLocalStorage() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const country = localStorage.getItem('country');
    const state = localStorage.getItem('state');
    const phone = localStorage.getItem('phone');
    const village = localStorage.getItem('village');
    const city = localStorage.getItem('city');

    if (firstName) {
        document.getElementById('firstName').value = firstName;
        document.getElementById('lastName').value = lastName;
        document.getElementById('country').value = country;
        document.getElementById('state').value = state;
        document.getElementById('phone').value = phone;
        document.getElementById('village').value = village;
        document.getElementById('city').value = city;

        updateUserCard();
    }
}

// Event listener for form submission
userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    updateUserCard();
});

// Event listener for theme selection
themeSelect.addEventListener('change', function () {
    const selectedTheme = themeSelect.value;
    document.body.className = selectedTheme;
    userCard.className = `card ${selectedTheme}`;
});

// Load user information from local storage
loadUserFromLocalStorage();
