function sortTable(tableId, n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(tableId);

    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    // var sort = table.tHead.row.getElementsByClassName('sort');
    var thead = table.tHead,
        th = thead.rows[0].getElementsByTagName("TH");

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/

        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (isNumeric(x.innerHTML) && isNumeric(y.innerHTML)) {
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }

                } else {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }

            } else if (dir == "desc") {
                if (isNumeric(x.innerHTML) && isNumeric(y.innerHTML)) {
                    if (Number(x.innerHTML) < Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }

                } else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }

            }
        }

        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
            for (j = 0; j < th.length; j++) {
                if (j == n) {
                    if (dir == "asc") {
                        th[j].style.backgroundImage = "url('../../img/ic_arrow_drop_up_black_24px.svg')";
                    } else {
                        th[j].style.backgroundImage = "url('../../img/ic_arrow_drop_down_black_24px.svg')";
                    }
                } else {
                    if (th[j].className == 'sort') {
                        th[j].style.backgroundImage = " url('../../img/ic_arrow_drop_black_24px.svg')";
                    }
                }

            }

        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;

            }
        }
    }

}

// function sortMe(evt) {
//     var table = this;          // Table clicked on
//     var cell = evt.target;     // Cell clicked on
//     var col = cell.cellIndex;  // Column number

//     // Put rows into an array
//     var rowArray = [].slice.call(table.rows);
//     // Or for ECMAScript 2015
//     // var rowArray = Array.from(table.rows);

//     // Sort rows
//     rowArray.sort(function (a, b) {

//         // Get values of col to sort on
//         a = a.cells[col].textContent;
//         b = b.cells[col].textContent;

//         // If numeric, sort as number
//         if (isNumeric(a)) {
//             return a - b;
//         }
//         // Other sort options here, e.g. as dates
//         // Otherwise, sort as string
//         return a.localeCompare(b);
//     });

//     // Put rows back in table in order
//     var tbody = table.tBodies[0];
//     rowArray.forEach(function (row) {
//         tbody.appendChild(row);
//     })

// }

// Helper function
// Check if value is numeric, '2' returns true
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}