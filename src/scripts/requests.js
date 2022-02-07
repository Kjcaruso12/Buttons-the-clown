import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


export const convertRequestToListElement = (request) => {
    let HTMLString = ""
    if( request.id % 2 !== 0)
    HTMLString += `<li class="reservation">
    Party of ${request.numberOfChildren} for ${request.parentName} on ${request.reservationDate}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
    `
    else {HTMLString += `<li class="reservation2">
    Party of ${request.numberOfChildren} for ${request.parentName} on ${request.reservationDate}
    <button class="request__delete"
            id="request--${request.id}">
        Delete
    </button>
</li>
`

    }
    return HTMLString
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul class="list_item">
            ${requests.map(convertRequestToListElement).join("")
        }
        </ul>
    `

    return html
}