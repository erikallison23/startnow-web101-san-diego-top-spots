//function grabs the json info and builds a table to display it on.
$(document).ready(function () {
    $.getJSON("./data.json", function (result) {
        $.each(result, function (i, obj) {

            var build = '<tr>';

            var link = 'https://www.google.com/maps?q=' + obj.location[0] + "," + obj.location[1];

            build += '<td>';

            build += obj.name;

            build += '</td>';

            build += '<td>';

            build += obj.description;

            build += '</td>';

            build += '<td>';

            build += "<a href=\"" + link + "\"> location</a>";

            build += '</td>';

            build += '</tr>';

            $("table").append(build);
        });
    });
});
