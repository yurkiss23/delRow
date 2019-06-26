window.onload=function(){

    var listBtnUpdate=document.getElementsByClassName("btnUpdate");
    var listBtnDel=document.getElementsByClassName("btnDel");

    for(var i=0;i<listBtnUpdate.length;i++){
        listBtnUpdate[i].onclick=clickUpdate;
    }
    for(var i=0;i<listBtnDel.length;i++){
        listBtnDel[i].onclick=clickDel;
    }

    function clickUpdate(){
        prompt("Update data?", "No data");
    }
    function clickDel(){
        confirm("You sure?");
    }
}