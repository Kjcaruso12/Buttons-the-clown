import { dateSort, getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


export const convertRequestToListElement = (request) => {
    let HTMLString = ""
    if (request.id % 2 !== 0)
        HTMLString += `<li class="reservation">
    Party of ${request.numberOfChildren} for ${request.parentName} on ${request.reservationDate}
        <button class="request__delete"
                id="request--${request.id}">
            Deny
        </button>
    </li>
    `
    else {
        HTMLString += `<li class="reservation2">
    Party of ${request.numberOfChildren} for ${request.parentName} on ${request.reservationDate}
    <button class="request__delete"
            id="request--${request.id}">
        Deny
    </button>
</li>
`

    }
    return HTMLString
}

export const Requests = () => {
    const requests = getRequests()
    const sortedArray = requests.sort((a, b) => {
        const date1 = new Date(a.reservationDate)
        const date2 = new Date(b.reservationDate)

        return date1 - date2
    })
    let html = `<ul class="list_item">
        ${sortedArray.map(convertRequestToListElement).join("")}
        </ul>
        `

    return html
}