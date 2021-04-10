function enable()
{
    var name=document.getElementById('a').value;
    var number=document.getElementById('b').value;
    var email =document.getElementById('c').value;
    if(name.length==0||email.length==0||number.length!=10)
    {
        alert("input invalid");
    }
    else{
    var temp=document.getElementById('append');
    var table=document.createElement('tr');
    var x=document.createElement("BUTTON");
    x.innerHTML="DELETE";
    var temp2=document.createElement('td');
    var temp3=document.createElement('td');
    var temp4=document.createElement('td');
    var temp5=document.createElement('td');
    temp2.innerHTML="<input type='text' class='l' value=" + name +" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
    temp3.innerHTML="<input type='text' class='l' value=" + number +" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
    temp4.innerHTML="<input type='text' class='l' value=" + email +" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
    temp5.innerHTML='<input type="button"  value="Delete" onclick="deleteRow(this)" >'
    temp5.classList.add("k");
    table.appendChild(temp2);
    table.appendChild(temp3);
    table.appendChild(temp4);
    table.appendChild(temp5);
    temp.appendChild(table);
    temp.style.display="block";
    }
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("append").deleteRow(i);
}

