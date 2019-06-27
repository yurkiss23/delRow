window.onload=function(){

    var id=0;
    var listRow=document.getElementsByTagName("tr");
    var listBtnUpdate=document.getElementsByClassName("btnUpdate");
    var listBtnDel=document.getElementsByClassName("btnDel");

    for(var i=0;i<listBtnUpdate.length;i++){
        listBtnUpdate[i].onclick=clickUpdate;
    }
    for(var i=0;i<listBtnDel.length;i++){
        listBtnDel[i].onclick=clickDel;
    }

    function findRow(){
        var elem=document.querySelectorAll(":hover");
        for(i=0;i<elem.length;i++){
            if(elem[i].tagName=="TR"){
                id=elem[i].getAttribute("id");
            }
        }
    }
    function clickUpdate(){
        findRow();
        for(i=0;i<listRow.length;i++){
            if(listRow[i].getAttribute("id")==id){
                var dataRow=listRow[i].getElementsByTagName("TD");
                var newData=prompt("Update data?", dataRow[1].innerHTML+' '+dataRow[2].innerHTML);
                if(newData==dataRow[1].innerHTML+' '+dataRow[2].innerHTML){
                    alert("Data don't change");
                }
                else{
                    var names=newData.split(' ',2);
                    for(j=0;j<names.length;j++){
                        var cloneData=dataRow[j+1].cloneNode(true);
                        cloneData.innerHTML=names[j];
                        dataRow[j+1].parentNode.insertBefore(cloneData,dataRow[j+1].nextSibling);
                        dataRow[j+1].remove();
                    }
                    alert("Data is update");
                }
            }
        }
    }
    function clickDel(){
        findRow();
        for(i=0;i<listRow.length;i++){
            if(listRow[i].getAttribute("id")==id){
                if(confirm("You sure?")){
                    listRow[i].remove();
                    alert("Done!");
                }
            }
        }
    }
}