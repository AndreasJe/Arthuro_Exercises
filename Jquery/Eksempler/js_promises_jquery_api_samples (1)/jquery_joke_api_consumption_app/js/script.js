/**
 * Example inspired in code from the LinkedIn Learning course "Introduction to Web APIs",
 * then rewritten with jQuery
 */
$(function() {

    $.ajax({
            url: 'http://official-joke-api.herokuapp.com/random_joke',
            type: 'GET',
        })
        .done(function(data) {

            // The GET response is a JavaScript object
            $('#response').html(data);
            $('#response_type').html(typeof data);
            
            // The object can be easily treated as an array
            const table = $('#parsed_object');
            for(let property in data) {
                let row = $('<tr></tr>');

                let cell = $('<td></td>', { 'text': property });
                row.append(cell);
                cell = $('<td></td>', { 'text': data[property] });
                row.append(cell);

                table.append(row);
            }
        });
});