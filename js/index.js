import dates  from "./data.js"

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




