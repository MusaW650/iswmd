function renderEvents(events) {
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
    var i = 0
    events.forEach(event => {
        if (event.title.includes("\n")) event.title = "That's all for this week!"
        switch(i) {
            case 0:
              document.getElementById("thisweek1title").innerText = event.title
              document.getElementById("thisweek1date").innerText = event.date
              break;
            case 1:
                document.getElementById("thisweek2title").innerText = event.title
                document.getElementById("thisweek2date").innerText = event.date
              break;
            case 2:
                document.getElementById("thisweek3title").innerText = event.title
                document.getElementById("thisweek3date").innerText = event.date
              break;
          }
          i++ 
    }) 
} 

events = [
    {
        title: "Jumma khutba with INK",
        description: "",
        date: "Fri, March 31, 1:30pm - 2:15pm"
    },
    {
        title: "Fundraising CMLMD",
        description: "",
        date: "Sat, April 1, 7:45pm - 8:45pm"
    },
    {
        title: "\n\n\n\n\n\n\n\n\n",
        description: "",
        date: ""
    },
]

var path = window.location.pathname;
var page = path.split("/").pop();

if (page === "events.html") renderEvents(events)
else if (page === "index.html") renderThisWeek(events)
