
import dates from "./data.js"

function openModal() {
    const modal = document.createElement("div");
    modal.id = "modal-container";
    newDiv.appendChild(modal);

    const date = document.createElement("h3");
    date.id = "modal-date";
    date.textContent = dates[i].date;
    modal.appendChild(date);

    const title = document.createElement("h2");
    title.id = "modal-title";
    title.textContent = dates[i].title;
    modal.appendChild(title);

    const image = document.createElement("img");
    image.id ="modal-image";
    image.src = dates[i].image;
    modal.appendChild(image);

    const info = document.createElement("p");
    info.id = "modal-full-description";
    info.textContent = dates[i].fullDescription;
    modal.appendChild(info);


    const closeButton = document.createElement("button");
    closeButton.id ="modal-close-button";
    closeButton.textContent ="Close";
    modal.appendChild(closeButton);
    closeButton.addEventListener("click", closeModal);

    function closeModal() {
        newDiv.removeChild(modal)
    }
        
    }

for (let i = 0; i < dates.length; i++) {
    const timeline = document.querySelector(".timeline");
    const newDiv = document.createElement("div");

    newDiv.setAttribute("class", "timeline-item");

    const timelineDate = document.createElement("span");
    timelineDate.textContent = dates[i].date;
    timelineDate.setAttribute("class", "date");
  
    newDiv.appendChild(timelineDate);

    const h2 = document.createElement("h2");
    h2.setAttribute("class" ,"time-timeline-title");
    h2.textContent = dates[i].title;
    newDiv.appendChild(h2);

    const span = document.createElement("span");
    span.setAttribute("class" ,"time-timeline-date");
    span.textContent = dates[i].date;
    newDiv.appendChild(span);

    const text = document.createElement("p")
    text .setAttribute("class" ,"time-timeline-summary");
    text.textContent = dates[i].summary;
    newDiv.appendChild(text);

    const openButton = document.createElement("button");
    openButton.setAttribute("class" ,"time-timeline-more-info");
    openButton.textContent = "More Info";
    newDiv.appendChild(openButton);

   
}

