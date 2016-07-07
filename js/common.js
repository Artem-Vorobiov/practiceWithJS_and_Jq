function changeText () {
    var info = document.login.vvod.value;
    alert(info);
}

function winOpen () {
    var pam = window.open("http://ya.ru", "Yandex");
}

function toggleCheckboxes(master,group){
    var cbarray = document.getElementsByClassName(group);
    for (var i = 0; i < cbarray.length; i++){
        var cb = document.getElementById(cbarray[i].id);
        cb.checked = master.checked;
    }
}