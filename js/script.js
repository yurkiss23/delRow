window.onload=function(){

    var listRow=document.getElementsByTagName("tr");
    var listBtnUpdate=document.getElementsByClassName("btnUpdate");
    var listBtnDel=document.getElementsByClassName("btnDel");

    for(var i=0;i<listBtnUpdate.length;i++){
        listBtnUpdate[i].onclick=clickUpdate;
    }
    for(var i=0;i<listBtnDel.length;i++){
        listBtnDel[i].onclick=clickDel;
    }

    //document.getElementsByClassName("btnUpdate").onclick=
    function clickUpdate(){
        //alert("!");
        var elem=document.querySelectorAll(":hover");
        var id=0;
        for(i=0;i<elem.length;i++){
            alert(elem[i].tagName);
            if(elem[i].tagName=="TR"){
                id=elem[i].getAttribute("id");
                alert(id);
            }
        }
        for(i=0;i<listRow.length;i++){
            alert(listRow[i].getAttribute("id"));
            
        }

        //var element=document.getElementsByTagName("table")[ind];
        var newData=prompt("Update data?", element.nodeValue);
    }
    function clickDel(){
        confirm("You sure?");
    }
}