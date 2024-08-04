// script.js
const dayjs = require('dayjs');

function read(id, url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function display(name){
    read('original', 'songs/' + name + '/Original.txt'); 
    read('translation', 'songs/' + name + '/Translation.txt')
}