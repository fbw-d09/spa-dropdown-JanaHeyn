const filmListElement = document.getElementById('movieList');

const filmTitleElement = document.querySelectorAll('.filmTitle');

const dropdown = document.querySelectorAll('.dropdown');


// const navElement = document.querySelector(".nav");
filmListElement.addEventListener("click", (event) => {
    const clickedElement = event.target;
    // console.log(clickedElement);

    filmTitleElement.forEach((element) => {
        if(element !== clickedElement) {
            element.classList.remove("activefilmTitle");
        }
        });

    dropdown.forEach((element) =>
    {
        if(element !== clickedElement.querySelector("ul"))
        {
            element.classList.remove("activeDropdown");
        }

        /* if(element !== clickedElement.querySelector("ul"))
        {
            element.classList.remove("activeDropdown");
        } */
    });

    clickedElement.classList.toggle("activefilmTitle");
    clickedElement.querySelector("ul").classList.toggle("activeDropdown");
}); 













/* filmListElement.onclick = (event) => {

    filmTitleElement.forEach((dropdown) => 
    {
        dropdown.children[0].style.display = 'none';
    });

    // console.log(event.target.nodeName);

    if(event.target.nodeName === 'LI') 
    {
        event.target.children[0].style.display = 'flex';

        event.target.onclick = () => 
        {
            dropdown.children[0].style.display = 'none';
        }
    } 
} */


