import { ReservationForm } from "./ReservationForm.js"
import { Requests } from "./requests.js"

export const ClownReservation = () => {
    return `
    <h1>Buttons and Lollipop's party clowns</h1>
    <section class="serviceForm">
        ${ReservationForm()}
    </section>

    <section class="reservations">
        <h2>Reservation Requests</h2>
        ${Requests()}
    </section>
    `
}