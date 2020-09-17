import tokenService from '../services/tokenService';
const BASE_URL = '/api/meetings/';

export function create(meeting) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(meeting)
    }, { mode: "cors" })
        .then(res => res.json());
}

// export function getAll() {
//     return fetch(BASE_URL, { mode: "cors" })
//         .then(res => res.json())
// }