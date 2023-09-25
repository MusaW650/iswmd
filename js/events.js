

function renderEvents(events) {
  console.log("renderEvents");

  renderer = document.getElementById("renderer");
  events.forEach((element) => {
    div = document.createElement("div");
    div.class = "card h-100";

    cardBody = document.createElement("div");
    cardBody.class = "card-body";

    title = document.createElement("h3");
    title.innerText = element.title;

    date = document.createElement("h4");
    date.innerText = element.date === "" ? "" : "Date: " + element.date;

    description = document.createElement("h5");
    description.innerText = element.description;

    cardBody.appendChild(title);
    cardBody.appendChild(date);
    cardBody.appendChild(description);

    div.appendChild(cardBody);
    div.appendChild(document.createElement("hr"));

    renderer.appendChild(div);
  });
}

function renderThisWeek(events) {
  console.log("renderThisWeek");

  var i = 1;
  events.forEach((event) => {
    if (event.title.includes("\n")) event.title = "That's all for this week!";
    document.getElementById(`thisweek${i}title`).innerText = event.title;
    document.getElementById(`thisweek${i}date`).innerText = event.date;
    i++;
  });
}
var myLink = link("See form below for timings", "https://docs.google.com/forms/d/e/1FAIpQLSc3ElhtahCHoDIjxgGYvCKhy62wzTNLnP9xlRPMadYVRpiEew/viewform");
events = [
  {
    title: "Jummah khutba and evening halaqa by Brother Tarif Shraim",
    description: "",
    date: "Jummah: Fri, September 15, 1:30pm - 2:15pm\nEvening Halaqa: after Maghrib",
  },
  
  {
    title: "Seerah Class With Brother Abdul Waheed",
    description: "",
    date: "Every Wednesday after Maghrib",
  },
  {
    title: "Adult and Children Quran Classes",
    description: "",
    date: myLink.textContent,
  },
  {
    title: "\n\n\n\n\n\n\n\n\n",
    description: "",
    date: "",
  },
];

function link(text, href) {
    var link = document.createElement("a");

    // Set the text content for the link
    link.textContent = text;
    
    // Set the href attribute for the link
    link.href = href;
    
    // Append the link to a container element in the DOM
   // document.body.appendChild(link);
    return link;  
}

var page = window.location.pathname.split("/").pop();
if (page === "events.html" || page === "events")
  renderEvents(events); // just events in prod
else if (page === "index.html" || page === "") renderThisWeek(events); // empty string in prod

