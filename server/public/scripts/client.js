$(document).ready(onReady);

function onReady() {
    console.log('in client.js');
    getQuotes();
}

function getQuotes() {
    // this is where we Get quotes from our server
    console.log('in getQuotes!');
    $.ajax({
        method: 'GET',
        url: '/quotes',
    }).then(function(response) {
        console.log('this is the response from the server', response);
        appendToDom(response);
    });
}

function appendToDom(array) {
    console.log('appendToDom Function', array);
    $('#output').empty();
    for(let item of array){
        $('#output').append(`
            <li>"${item.text}" said by ${item.author}</li>
        `)
    }
}