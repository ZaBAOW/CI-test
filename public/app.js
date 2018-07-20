'use strict';

var MOCK_USERS = {
    "users": [
        {
            "username": "Zabel",
            "password": "wooly1234",
            "firstName": "jim",
            "lastName": "jam",
            "id": "11111"
        },
        {
            "username": "zabaow",
            "password": "wily1234",
            "firstName": "tim",
            "lastName": "tam",
            "id": "22222"
        },
        {
            "username": "Zabelina",
            "password": "willy1234",
            "firstName": "bim",
            "lastName": "bam",
            "id": "33333"
        },
        {
            "username": "Zabelus",
            "password": "wolly1234",
            "firstName": "zim",
            "lastName": "zam",
            "id": "44444"
        }
    ]
};

function getRecentUsers(callbackFn) {
    setTimeout(function() {
        callbackFn(MOCK_USERS   )
    }, 100)
}

function displayUsers(data) {
    for (index in data.users) {
        $('body').append(
            '<p>' + data.users[index].usersname + '</p>');
    }
}

function getAndDisplayUsers() {
    getRecentUsers(displayUsers);
}

$(function() {
    getAndDisplayUsers();
})

module.exports = {app}