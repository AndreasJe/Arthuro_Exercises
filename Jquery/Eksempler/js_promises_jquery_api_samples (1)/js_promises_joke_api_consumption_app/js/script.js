/**
 * Example inspired in code from the LinkedIn Learning course "Introduction to Web APIs",
 * later reworked in JavaScript Promises
 */

fetch('http://official-joke-api.herokuapp.com/random_joke')
.then(
    function(response) {
        // The GET response is a Response object
        document.getElementById('response').innerHTML = response;
        document.getElementById('response_type').innerHTML = typeof response;

        return response.json();
    })
.then(
    function(joke) {
        
        // But once turned to JSON, it becomes a JavaScript object
        document.getElementById('parsed_response').innerHTML = joke;
        document.getElementById('parsed_response_type').innerHTML = typeof joke;

        // The object can be easily treated as an array
        const table = document.getElementById('parsed_object');
        for(let property in joke) {
            let row = document.createElement('tr');

            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(property))
            row.appendChild(cell);
            
            cell = document.createElement('td');
            cell.appendChild(document.createTextNode(joke[property]))
            row.appendChild(cell);

            table.appendChild(row);
        }
    }
);