import { dates } from "./data.js";

const h1 = document.createElement('h1');
   h1.classList.add('animate__animated')
   h1.classList.add('animate__bounceInLeft');
   h1.textContent = "Mayme's Bakery";
   document.body.prepend(h1);

console.log(h1.textContent); 
 
const timeline = document.querySelector(".timeline")
dates.map((item)=> {
    const card = document.createElement("div");
    card.classList.add("timeline-item");
    timeline.appendChild(card);

    const titleElement = document.createElement("h2");
    titleElement.classList.add("timeline-item-title");
    titleElement.textContent = item.title;

    const dateElement = document.createElement("span");
    dateElement.classList.add("timeline-item-date");
    dateElement.textContent = item.date;

    // const FullDescription = document.createElement("p");
    // FullDescriptionElement.textContent = FullDescription;

    // const imageElement = document.createElement("img");
    // imageElement.setAttribute("src", image);

    const summaryElement = document.createElement("p");
    summaryElement.classList.add("timeline-item-summary");
    summaryElement.textContent = item.summary

    const moreInfo = document.createElement("button");
    moreInfo.classList.add("timeline-item-more-info");
    moreInfo.textContent = "READ MORE"

    moreInfo.addEventListener('click', function () {
        openModal(item)
    })

    card.append(titleElement, dateElement, summaryElement, moreInfo);
})

function openModal(item){
    if(document.querySelector("#modal-container")) {
        document.removeChild(document.querySelector("#modal-container"))
    }   
    // container
    const modalContainer = document.createElement('div') 
    modalContainer.id = 'modal-container'

    const modalTitleElement = document.createElement('h2')
    modalTitleElement.id = 'modal-title'
    modalTitleElement.textContent = item.title
    modalContainer.append(modalTitleElement)
    
    const modalDateElement = document.createElement('span')
    modalDateElement.id = 'modal-date'
    modalDateElement.textContent = item.date
    modalContainer.append(modalDateElement)

    const modalFullDescriptionElement = document.createElement('p')
    modalFullDescriptionElement.id = 'modal-full-description'
    modalFullDescriptionElement.textContent = item.fullDescription
    modalContainer.append(modalFullDescriptionElement)


    const modalImageElement = document.createElement('img')
    modalImageElement.id = 'modal-image'
    modalImageElement.setAttribute("src", item.image);
    modalContainer.append(modalImageElement)

    const modalClose = document.createElement('button')
    modalClose.id ='modal-close-button'
    modalClose.textContent = 'CLOSE'
    modalClose.addEventListener('click', function(){
        modalContainer.remove()
    })
    modalContainer.append(modalClose)

    document.body.appendChild(modalContainer)



    imageElement.setAttribute("src", item.image);
}
    



/**
 *       <div class="timeline-item">
          <h2 class="timeline-item-title"></h2>
          <span class="timeline-item-date"> </span>
          <p class="timeline-item-summary"></p>

               <button class= "timeline-item-more-info">
               <div id = "modal-container">
                  <h2 id="modal-title"></h2>
                  <span id="modal-date"> </span>
                  <img id="modal-image">
                 <p id="modal-full-description"></p>
                 <button id="modal-close-button">Minimise</button>
          </div> <!-- end of modal-container -->  
         </button>
<div> <!-- end of timeline-item  -->

 */


