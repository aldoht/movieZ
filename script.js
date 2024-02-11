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

searchInput.addEventListener("keyup", () => {
    if (searchInput.value !== "") {
        deleteButton.style.display = "inline-block";
    }
    else {        
        deleteButton.style.display = "none";
    }
})