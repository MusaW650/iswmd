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

events = [
    {
        title: "Jumma khutba with Mufti Yusuf",
        description: "",
        date: "Fri, March 24, 1:30pm - 2:15pm"
    },
    {
        title: "Fundraising Madinatul Uloom",
        description: "",
        date: "Fri, March 24, 7:30pm - 8:30pm"
    },
    {
        title: "\n\n\n\n\n\n\n\n\n",
        description: "",
        date: ""
    },
]

renderEvents(events)