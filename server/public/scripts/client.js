$(document).ready(onReady);

function onReady() {
    getQuotes();
    $('#submit').on('click', postQuotes);
}

let newQuote = {
    text: "big gulps, eh? welp, seeya later",
    author: "lloyd christmas",
}

function postQuotes() {
    // ceate a POST request and log out the response
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: newQuote,
    }).then(function(response) {
        console.log('this is the post response from the server', response);
        // get the updated array
        getQuotes();
    }).catch(function(error) {
        console.log(error);
        alert(error.responseText);
    }); // a .then should most likely be followed by a .catch
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
    }); // this "response" could be named anything, but it is standard to call this response
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

// int randomWithMathRandom = (int) ((Math.random() * (max - min)) + min);