import { dates } from "./data.js";




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