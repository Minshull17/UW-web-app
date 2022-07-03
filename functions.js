// Filters the condition table to show potential matches as the desired condition is typed
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}
// Copies the hidden text linked to that specific button to the clipboard
function copyToClipboard(element) {
    var text = $(element).clone().find('br').prepend('\r\n').end().text()
    element = $('<textarea>').appendTo('body').val(text).select()
    document.execCommand('copy')
    element.remove()
}
// Copies the contents of the text-box to the clipboard
function cpy(n){
    var id=n;
    var txt=document.getElementById(id);
    txt.select();
    document.execCommand("copy");
};
// Deletes the contents of the text-box
function del(n){
    var id=n;
    var txt=document.getElementById(id);
    txt.select();
    document.execCommand("delete");
};
// Opens an email pre-filled for the manual further advance calculator to be imaged
function praFunction() {
    window.location.href = "mailto:kofax.AriesNotes@paragonbank.co.uk?body=NB%0d%0aPRAFALN%0d%0a"+ new Date().toLocaleDateString();
 }




