
/*var MAXQ =3;
var queue=[0,0,0];
var rear = -1;
var front = -1;
var x;
var choice;
var element;
var i=1;
function insertion(i)
{
    if ((rear + 1) % MAXQ == front)
    {
        alert("wait for some time");
        return false;
    }
    else if (front == -1)
    {
        front = 0;
        rear = 0;
        queue[rear] = i;
        if(i%3==1){
            document.querySelector("p.oone").innerHTML=i;
        }
        else if(i%3==2){
            document.querySelector("p.ttwo").innerHTML=i;
        }
        else{
            document.querySelector("p.tthree").innerHTML=i;        
        }
        return true;
    }
    else
    {
        rear = (rear + 1) % MAXQ;
        queue[rear] = i;
        if(i%3==1){
            document.querySelector("p.oone").innerHTML=i;
        }
        else if(i%3==2){
            document.querySelector("p.ttwo").innerHTML=i;
        }
        else{
            document.querySelector("p.tthree").innerHTML=i;        
        }
        return true;
    }
}

function deleteq()
{
    var temp;
    if (rear == -1)
    {
        alert("nothing is there to delete");
    }
    else if (front == rear)
    {
        temp = queue[front];
        front = -1;
        rear = -1;
    }
    else
    {
        temp = queue[front];
        front = (front + 1) % MAXQ;
    }
}


document.addEventListener("keydown",function(e){
    switch (e.key)
    {
    case "w":
        choice=insertion(i);
        if (choice==true)
        i++;
        break;
    case "s":
        x = deleteq();
        break;
    }
});*/
/*var queue=[];
function Insert(i){
    queue[i]=i;
}
var i=1;;
document.addEventListener("keydown",function(e){
    switch (e.key)
    {
    case "w":
        insertion(i);
        i++;
        break;
    case "s":
        x = deleteq();
        break;
    }
})*/
var come=new Audio("./audio/Please come.m4a");
var no=new Audio("./audio/No one is there.m4a");
var full=new Audio("./audio/Counter is full.m4a");

var MAXQ =3;
var queue=[0,0,0];
var rear = -1;
var front = -1;
var x;
var choice;
var element;
var i=1;
var a=0;
var b=1;
var c=2;
var s1=false;
var s2=false;
var s3=false;
function insertion(i)
{
if(s1==true && s2==true && s3==true){

    full.play();
    return false;
}
else if(s1==false){
    queue[a]=i;
    s1=true;
    document.querySelector("p.oone").innerHTML=i;
    come.play();
    return true;

}
else if(s2==false){
    queue[b]=i;
    s2=true;
    document.querySelector("p.ttwo").innerHTML=i; 
    come.play();
    return true;
           

}
else if(s3==false){
    queue[c]=i;
    s3=true; 
    document.querySelector("p.tthree").innerHTML=i;  
    come.play(); 
    return true;
        

}
}
function deletea(a){
    if(s1==false && s2==false && s3==false){
        no.play();
    }
    else if(s1==true){
        queue[a]=0;
        s1=false;
        document.querySelector("p.oone").innerHTML="-";        

    }
}
function deleteb(b){
    if(s1==false && s2==false && s3==false){

        no.play();
    }
    else if(s2==true){
        queue[b]=0;
        s2=false;
        document.querySelector("p.ttwo").innerHTML="-";        

    }
}
function deletec(c){
    if(s1==false && s2==false && s3==false){
    
        no.play();
    }
    else if(s3==true){
        queue[c]=0;
        s3=false;
        document.querySelector("p.tthree").innerHTML="-";        

    }
}
document.addEventListener("keydown",function(e){
    switch (e.key)
    {
    case "w":
        choice=insertion(i);
        if (choice==true)
        i++;
        break;
    case "s":
        deleteb(b);
        break;
    case "a":
        deletea(a);
        break;
    case "d":
        deletec(c);
        break;
}});
