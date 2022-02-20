
import dates from "./data.js"

const modalcontainer = document.createElement("div")
modalcontainer.id="modal-container"
modalcontainer.className="modal"
modalcontainer.className="hidden"
const modaldate = document.createElement("span")
modaldate.id="modal-date"

const modaltitle = document.createElement("span")
modaltitle.id="modal-title"

const modalimage = document.createElement("img")
modalimage.id="modal-image"

const modaldescription = document.createElement("p")
modaldescription.id="modal-full-description"

const modalbutton = document.createElement("button")
modalbutton.addEventListener ("click", closeModal)

modalbutton.id="modal-close-button"
modalbutton.textContent = "Close"

modalcontainer.appendChild(modaldate)
modalcontainer.appendChild(modaltitle)
modalcontainer.appendChild(modalimage)
modalcontainer.appendChild(modaldescription)
document.body.appendChild(modalcontainer)
const openModalElement=document.querySelector(".timeline-item-more-info")
.addEventListener("click", openModal )


function openModal(){
    modalcontainer.classList.remove("hidden")
    modalcontainer.classList.remove("hidden");

}
function closeModal(){
    modalcontainer.classList.add("hidden")
    modalcontainer.classList.add("hidden");

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

