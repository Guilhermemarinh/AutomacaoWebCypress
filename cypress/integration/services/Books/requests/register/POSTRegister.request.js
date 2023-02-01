/// <reference types="cypress"/>

const payloadAddNewUser = require('../../payloads/register/add-new-user.json')

function addNewUser(auth){
    return cy.request({
        method: 'POST',
        url: '/login/auth/register',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${auth}`
        },
        failOnStatusCode: false,
        body: payloadAddNewUser
    })

}

export { addNewUser }