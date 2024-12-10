function performSearch() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (query) {
        let searchURL;

        if (query === "campus") {
            searchURL = "campuses.html";
        } else if (query === "home") {
            searchURL = "index.html";
        } else if (query === "about") {
            searchURL = "about.html";
        } else if (query === "students") {
            searchURL = "students.html";
        } else if (query === "faculty") {
            searchURL = "faculty.html";
        } else if (query === "admissions") {
            searchURL = "admissions.html";
        } else if (query === "courses") {
            searchURL = "academics.html";
        } else if (query === "main campus" || query === "main") {
            searchURL = "main-campus.html";
        } else if (query === "sta. maria campus" || query === "sta. maria") {
            searchURL = "sta.maria.html";
        } else if (query === "narvacan campus" || query === "narvacan") {
            searchURL = "narvacan.html";
        } else if (query === "santiago campus" || query === "santiago") {
            searchURL = "santiago.html";
        } else if (query === "candon campus" || query === "candon") {
            searchURL = "candon.html";
        } else if (query === "tagudin campus" || query === "tagudin") {
            searchURL = "tagudin.html";
        } else if (query === "cervantes campus" || query === "cervantes") {
            searchURL = "cervantes.html";
        }

        if (searchURL) {
            window.location.href = searchURL;
        }
    }
}

