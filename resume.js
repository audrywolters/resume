
let sections

window.onload = function() {
    let sectionsCollection = document.getElementsByClassName("section")
    sections = Array.from(sectionsCollection)
}

const highlightSection = (mousedOver) => {

    // run away if something strange has gone on
    if ((typeof (mousedOver === undefined) === true) || mousedOver == null) {
        console.log("error: section is undefined or null")
        makeAllBlack(mousedOver)
        return
    }

    // we've got something that isn't wanted - don't do fancy highlighting
    if (mousedOver.className !== "section") {
        console.log("error: not a section")
        return
    }

    // check if we've got a proper section
    let mousedOverInt = 0;
    if (typeof (mousedOver.id === "string")) {
        mousedOverInt = parseInt(mousedOver.id, 10)
    }
    if (Number.isNaN(mousedOverInt) || mousedOverInt < 1 || mousedOverInt > 30) {
        console.log("error: there's a section w/ bad id")
        return
    }

    // we've found the right stuff!
    sections.forEach(function (section) {
        if (section.id === mousedOver.id) {
            mousedOver.style.color = "#000000"
        } else {
            section.style.color = "#7d7c7d"
        }
    })

    // mousedOver.style.fontSize = "105%"

}

const makeAllBlack = (mousedOver) => {

    sections.forEach(function(section) {
        section.style.color = "#000000"
    })
    // mousedOver.style.fontSize = "100%"
}

