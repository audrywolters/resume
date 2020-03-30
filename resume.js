
let sections

// get all the sections so we only have to do it once
window.onload = function() {
    let sectionsCollection = document.getElementsByClassName("section")
    if (sectionsCollection === undefined || sectionsCollection === null) {
        console.log("error: no sections were collected")
        return
    }

    sections = Array.from(sectionsCollection)
    if (sections === undefined || sections === null || sections.length < 1) {
        console.log("error: was unable to convert sections into an array")
        return
    }
}

const highlightSection = (mousedOver) => {

    // run away if something strange has gone on
    if (mousedOver === undefined || mousedOver === null) {
        console.log("error: section is undefined or null")
        makeAllBlack(mousedOver)
        return
    }

    // we've got something that isn't wanted - don't do fancy highlighting
    if (mousedOver.className !== "section") {
        console.log("error: not a section")
        makeAllBlack(mousedOver)
        return
    }

    // check if we've got a proper section
    let mousedOverInt = 0;
    if (typeof (mousedOver.id === "string")) {
        mousedOverInt = parseInt(mousedOver.id, 10)
    }
    if (Number.isNaN(mousedOverInt) || mousedOverInt < 1 || mousedOverInt > 30) {
        console.log("error: there's a section w/ bad id")
        makeAllBlack(mousedOver)
        return
    }

    // we've found the right stuff!
    // 'highlight' what the user wants to read
    sections.forEach(function (section) {
        if (section.id === mousedOver.id) {
            mousedOver.style.color = "#000000"
        } else {
            section.style.color = "#7d7c7d"
        }
    })
}

// either the user is not hovering over a section
// or there's been an error
const makeAllBlack = () => {
    sections.forEach(function(section) {
        section.style.color = "#000000"
    })
}
