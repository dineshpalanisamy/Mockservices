
var response;
$(document).ready(function () {
    var xmlhttp = new XMLHttpRequest();
        var url = " http://www.mocky.io/v2/5843d2f5100000611a1a571b";


        xmlhttp.onreadystatechange=function() {
           // if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';
                var arr = JSON.parse(text);
                response = arr;
                
                var tbody = $('#statustable' + ' tbody');
                   
                 $.each(response, function (i, d) {
                    var row = '<tr>';
                    var array = new Array(8);
                    var tripno = d.TripNo;
                    $.each(d, function (j, e) {
                        
                        
                        switch (j) {
                            
                            case "Name" :
                                    array[1] = e;
                                    break;
                        }

                        
                    });
                    for (var i = 0; i < 1; i++) {
                            row +='<td> '+"<div id='"+ array[7]+"' onClick=doSomething(this.id);><a href=\"javascript:;\">"+ array[7]+"</a></div>" + '</td>';
                        }
                       
                    row += '</tr>';
                    tbody.append(row);
                });
           // }
        }   
        xmlhttp.open("GET", url, true);
        xmlhttp.send();


});

$(function() {
    $("#save-button").on('click',function () {
      document.getElementById('save-result').innerHTML = '<span class="label label-info" id="save-result">Saved Successfully <script> faderesult </script> </span>';
      document.getElementById('example-text-input-1').disabled = true;
      document.getElementById('example-text-input-2').disabled = true;
      document.getElementById('example-text-input-3').disabled = true;
      document.getElementById('example-text-input-4').disabled = true;
    });
});
$(function() {
    $("#edit-button").on('click',function () {
      document.getElementById('example-text-input-1').disabled = false;
      document.getElementById('example-text-input-2').disabled = false;
      document.getElementById('example-text-input-3').disabled = false;
      document.getElementById('example-text-input-4').disabled = false;
    });
});