const currentPage = location.pathname
const menuItems = document.querySelectorAll("header nav a")
var map

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 33.268751, lng: 17.514737},
        zoom: 1.25
    })

    var markers = [
        {
            coords: {lat: -19.351787, lng: -144.814159},
        },
        {
            coords: {lat: 30.865259, lng: -41.982129}
        },
        {
            coords: {lat: -21.819898, lng: 79.834276}
        }
    ]

    for(var i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        })

        for(var i = 0; i < markers.length; i++) {
            marker.addListener("click", function() {
                modalOverlay.classList.add("active")
            })
        }
    }   
}

for (item of menuItems) {
    if(currentPage == item.getAttribute("href")) {
        item.classList.add("bold")
    }
}

const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`

    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
}) 

let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show
})