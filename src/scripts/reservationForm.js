import { sendRequest } from "./dataAccess.js"

export const ReservationForm = () => {
    let html = `
    <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfChildren">Number of Children</label>
            <input type="number" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="dateOfReservation">Date of Reservation</label>
            <input type="date" name="dateOfReservation" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfReservation">Length of Reservation</label>
            <input type="number" name="lengthOfReservation" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const numOfChildren = document.querySelector("input[name='numberOfChildren']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userReservationDate = document.querySelector("input[name='dateOfReservation']").value
        const lengthInHours = document.querySelector("input[name='lengthOfReservation']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfChildren: numOfChildren,
            address: userAddress,
            reservationDate: userReservationDate,
            lengthOfReservation: lengthInHours
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})