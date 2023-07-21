function setSearchEngine(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the selected search engine value
    const selectedEngine = document.querySelector('input[name="engine"]:checked');

    // Get the search query
    const searchQuery = document.getElementById("query").value;

    // Validate the search engine and search query
    if (!selectedEngine) {
        displayErrorMessage("Please select a search engine.");
    } else if (!searchQuery.trim()) {
        displayErrorMessage("Please enter a search term.");
    } else {
        // Object to map engines to their respective URLs
        const engineUrls = {
            "google": "https://www.google.com/",
            "bing": "https://www.bing.com/",
            "yahoo": "https://www.yahoo.com/"
            // Add more search engines and their URLs as needed
        };

        // Get the action URL from the engineUrls object based on the selected engine
        const actionURL = engineUrls[selectedEngine.value];

        // Set the form's action attribute and submit the form
        const searchForm = document.getElementById("searchForm");
        searchForm.setAttribute("action", actionURL);
        searchForm.submit();
    }
}

function displayErrorMessage(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
}

// Get the form element and add setSearchEngine as the handler for the submit event
const form = document.getElementById("searchForm");
form.addEventListener("submit", setSearchEngine);