function renderEvents(events) {
    console.log("renderEvents")

    renderer = document.getElementById("renderer")
    events.forEach(element => {
        div = document.createElement("div")
        div.class = "card h-100"
        
        cardBody = document.createElement("div")
        cardBody.class = "card-body"
        
        title = document.createElement("h3")
        title.innerText = element.title

        date = document.createElement("h4")
        date.innerText = element.date === "" ? "" : "Date: " + element.date

        description = document.createElement("h5")
        description.innerText = element.description

        cardBody.appendChild(title)
        cardBody.appendChild(date)
        cardBody.appendChild(description)
        
        div.appendChild(cardBody)
        div.appendChild(document.createElement("hr"))

        renderer.appendChild(div)
    });
}

function renderThisWeek(events) {
    console.log("renderThisWeek")

    var i = 1
    events.forEach(event => {
        if (event.title.includes("\n")) event.title = "That's all for this week!"
        document.getElementById(`thisweek${i}title`).innerText = event.title
        document.getElementById(`thisweek${i}date`).innerText = event.date
        i++ 
    }) 
} 

events = [
    {
        title: "Jummah khutba by Sh Haroon Baqai",
        description: "",
        date: "Fri, April 14, 1:30pm - 2:15pm"
    },
    {
        title: "Fundraising Al huda school",
        description: "",
        date: "Fri, April 14, 7:30pm - 8:30pm"
    },
    {
        title: "\n\n\n\n\n\n\n\n\n",
        description: "",
        date: ""
    },
]

// DEV
// var path = window.location.pathname;
// var page = path.split("/").pop();

// PROD
page = document.location.pathname.split("/").pop()

if (page === "events") renderEvents(events) // remove .html in prod
else if (page === "") renderThisWeek(events) // empty string in prod
