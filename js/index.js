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


