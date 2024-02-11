const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", function(e) {
        removeActiveClass(menuItems);
        e.currentTarget.classList.add("active-menu");
    }) 
});

function removeActiveClass(elements) {
    try {
        elements.forEach(element => {
            if (element.classList.length === 2)
                element.classList.remove("active-menu");
        })
    }
    catch (e) {
        console.error(e);
        console.log("removeActiveClass did not get passed an element as parameter!");
    }
}

const searchInput = document.getElementById("search-bar");
const deleteButton = document.getElementById("delete");
const allResults = document.querySelectorAll(".search-result");

searchInput.addEventListener("keyup", () => {
    if (searchInput.value !== "") {
        deleteButton.style.display = "inline-block";
    }
    else {        
        deleteButton.style.display = "none";
    }
});

searchInput.addEventListener("input", () => {
    let i = 0; // Counts total non-matches for user's query
    allResults.forEach(result => {
        result.style.display = "flex"; // Refreshes display for all elements
        let h3Text = result.getElementsByClassName("search-text")[0].children[0].textContent; // Gets h3 element text
        if (!h3Text.toUpperCase().includes(searchInput.value.toUpperCase())) {
            result.style.display = "none"; // Removes every element which its h3 text does not include the search query
            i++;
        }
    });
    if (i === allResults.length) { // No element was found
        if (!!document.querySelector(".not-found")) { // Element with class "not-found" already exists
            return;
        }
        let notFound = document.createElement("h3");
        notFound.classList.add("not-found");
        notFound.innerText = "No results.";
        document.querySelector(".results").appendChild(notFound);
    }
    else { // Elements were found
        if (!!document.querySelector(".not-found")) { // Element with class "not-found" already exists
            document.querySelector(".not-found").remove();
        }
    }
});