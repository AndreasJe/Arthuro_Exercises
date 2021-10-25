/**
 * Example inspired in code from the LinkedIn Learning course "Introduction to Web APIs"
 */
const request = new XMLHttpRequest();

request.open('GET', 'http://official-joke-api.herokuapp.com/random_joke');

request.onload = function() {
    const response = request.response;

    // The GET response is a string
    document.getElementById('response').innerHTML = response;
    document.getElementById('response_type').innerHTML = typeof response;
    
    // But once parsed, it becomes a JavaScript object
    const jsonData = JSON.parse(response);
    document.getElementById('parsed_response').innerHTML = jsonData;
    document.getElementById('parsed_response_type').innerHTML = typeof jsonData;

    // The object can be easily treated as an array
    const table = document.getElementById('parsed_object');
    for(let property in jsonData) {
        let row = document.createElement('tr');

        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(property))
        row.appendChild(cell);
        
        cell = document.createElement('td');
        cell.appendChild(document.createTextNode(jsonData[property]))
        row.appendChild(cell);

        table.appendChild(row);
    }
};

request.send();