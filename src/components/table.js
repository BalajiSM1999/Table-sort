import React, { useState } from 'react';
import $ from 'jquery';
import { DATAS } from '../data/data';



export default function TableView() {
    function sortName() {
        var filterTable, rows, sorted, i, x, y, sortFlag;
        filterTable = document.querySelector("#myTable");
        sorted = true;
        while (sorted) {
            sorted = false;
            rows = filterTable.rows;
            console.log(rows)
            for (i = 1; i < rows.length - 1; i++) {
                sortFlag = false;
                x = rows[i].getElementsByTagName("TD")[0];
                y = rows[i + 1].getElementsByTagName("TD")[0];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    sortFlag = true;
                    break;
                }
            }
            if (sortFlag) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                sorted = true;
            }
        }
    }
    function sortJob() {
        var filterTable, rows, sorted, i, x, y, sortFlag;
        filterTable = document.querySelector("#myTable");
        sorted = true;
        while (sorted) {
            sorted = false;
            rows = filterTable.rows;
            console.log(rows)
            for (i = 1; i < rows.length - 1; i++) {
                sortFlag = false;
                x = rows[i].getElementsByTagName("TD")[1];
                y = rows[i + 1].getElementsByTagName("TD")[1];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    sortFlag = true;
                    break;
                }
            }
            if (sortFlag) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                sorted = true;
            }
        }
    }
    function doSearch() {
        var input, filter, found, table, tr, th, td, i, j;
        input = document.getElementById("searchTerm");
        filter = input.value.toUpperCase();
        table =document.querySelector("#myTable");
        th = table.getElementsByTagName("th");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            if (found) {
                tr[i].style.display = "";
                found = false;
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    return (
        <div>
            <p>Search: <input type="text" id="searchTerm" onKeyPress={doSearch} /></p>

            <table className="table" id="myTable" >
                <tr>
                    <th className="column" onClick={sortName} ><b>Name</b></th>
                    <th className="column" onClick={sortJob}><b>Job Title</b></th>

                </tr>
                {DATAS.map((row) => (

                    <tbody key={row.name} className='tablerow' >
                        <tr id="rows">
                            <td className="datas">{row.name}</td>
                            <td className="datas">{row.jobTitle}</td>
                        </tr>

                    </tbody>
                ))}

            </table>
        </div>
    )
}

/*

 function sortTable(){
       var $tbody = $('table tbody');
       $tbody.find('tr').sort(function(a,b){
           var tda = $(a).find('td:eq(1)').text(); // can replace 1 with the column you want to sort on
           var tdb = $(b).find('td:eq(1)').text(); // this will sort on the second column
                   // if a < b return 1
           return tda < tdb ? 1
                  // else if a > b return -1
                  : tda > tdb ? -1
                  // else they are equal - return 0
                  : 0;
       }).appendTo($tbody);
     }
     */