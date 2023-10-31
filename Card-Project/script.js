const userForm = document.getElementById('userForm');
        const userCard = document.getElementById('userCard');
        const themeSelect = document.getElementById('themeSelect');

        // Function to update the displayed user information
        function updateUserCard() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const village = document.getElementById('village').value;
            const city = document.getElementById('city').value;

            document.getElementById('displayedName').textContent = name;
            document.getElementById('displayedPhone').textContent = phone;
            document.getElementById('displayedVillage').textContent = village;
            document.getElementById('displayedCity').textContent = city;

            // Store data in local storage
            localStorage.setItem('name', name);
            localStorage.setItem('phone', phone);
            localStorage.setItem('village', village);
            localStorage.setItem('city', city);
        }

        // Function to load user information from local storage
        function loadUserFromLocalStorage() {
            const name = localStorage.getItem('name');
            const phone = localStorage.getItem('phone');
            const village = localStorage.getItem('village');
            const city = localStorage.getItem('city');

            if (name) {
                document.getElementById('name').value = name;
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