import { dates } from "./data.js";
 
const timeline = document.querySelector(".timeline")
dates.map((item)=> {
    const card = document.createElement("div");
    card.classList.add("timeline-item");
    timeline.appendChild(card);

    const titleElement = document.createElement("h2");
    titleElement.classList.add("timeline-item-title");
    titleElement.textContent = item.title;

    const dateElement = document.createElement("p");
    dateElement.textContent = item.date;

    // const FullDescription = document.createElement("p");
    // FullDescriptionElement.textContent = FullDescription;

    // const imageElement = document.createElement("img");
    // imageElement.setAttribute("src", image);

    const summaryElement = document.createElement("p");
    summaryElement.textContent = item.summary
    const moreInfo = document.createElement("button");
    moreInfo.textContent = "READMORE"
    card.append(titleElement, dateElement, summaryElement, moreInfo);
})
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


