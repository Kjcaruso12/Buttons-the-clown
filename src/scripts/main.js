import { fetchRequests } from "./dataAccess.js"
import { ClownReservation } from "./ClownReservation.js"


const mainContainer = document.querySelector("#container")


const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ClownReservation()
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()