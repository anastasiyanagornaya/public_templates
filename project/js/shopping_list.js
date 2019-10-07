var btn_list = document.getElementsByClassName('table-row-btn del');
for (var i=0; i<btn_list.length; i++) {
    btn_list[i].addEventListener('click', removeRow, false);
    console.log(i);
}
var table_lines = btn_list.length;

function removeRow() {
    var t = this.id.toString();
    t = t.replace("del_","item_");
    console.log(t);
    var delEl = document.getElementById(t);
    delEl.remove();    
    renumLines();
}
function renumLines() {
    console.log("Renum me maybe");
}
function addLine() {
    console.log(++table_lines);
    var line = document.getElementById("item_table").insertRow(-1);

    line.className = ((table_lines % 2)==0)?"even":"odd";
    line.id = "item_"+table_lines;
    line.innerHTML = 
    ' <td> '+
    '     <input type="checkbox" name="a"> '+
    '     <input type="text" name="item_text" value="Товар '+table_lines+'" class="table-form-width"> '+
    ' </td> '+
    ' <td> '+
    '     <form action="/action_page.php"> '+
    '         <input type="number" name="quantity" min="1" max="1000000" class="table-form-width"> '+
    '     </form> '+
    ' </td> '+
    ' <td> '+
    '     <form action="/action_page.php"> '+
    '         <input type="number" name="cost" min="1" max="1000000" class="table-form-width"> '+
    '     </form> '+
    ' </td> '+
    ' <td> '+
    '     <span class="table-row-btn del" href="" id="del_'+table_lines+'">-</span> '+
    ' </td> ';
    line.querySelector("#del_"+table_lines).addEventListener('click', removeRow, false);
}