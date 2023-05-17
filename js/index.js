const filmListElement = document.getElementById('movieList');

const filmTitleElement = document.querySelectorAll('.filmTitle');

const dropdown = document.querySelectorAll('.dropdown');


filmListElement.addEventListener("click", (event) => {
    const clickedElement = event.target;
    // console.log(clickedElement);

    filmTitleElement.forEach((element) => {
        if(element !== clickedElement) {
            element.classList.remove("activefilmTitle");
        }
        });

    clickedElement.classList.toggle("activefilmTitle");
}); 
