var a="", b="";

var sign="";

function add(){
    a=(Number(a)+Number(b))
    return a;
}

function sub(){
    a=(Number(a)-Number(b))
    return a;
}

function multiply(){
    a=(Number(a)*Number(b))
    return a;
}

function divide(){
    a=(Number(a)/Number(b))
    return a;
}

function calculate(){
    var reslut="";
    switch(sign){
        case'+':
        reslut = add();
        break;
        
        case'-':
        reslut = sub();
        break;

        case'*':
        reslut = multiply();
        break;

        case'/':
        reslut = divide();
        break;
    }
    document.getElementById('numdisplay').innerHTML=result;
    b="";
    sign="";
}

function perform(m){
    if (m=="="){
        if((a!="")&(b!=="")){
            calculate();
        }
    }
    else if((m=="+")||(m=="-")||(m=="*")||(m=="/")){
        if((a!="")&&(b=="")){
            sign=m;
            document.getElementById('numdisplay').innerHTML=a+sign;
        }
        else if ((a!="")&&(b!="")){
            calculate();
            sign=m;
            document.getElementById('numdisplay').innerHTML=a+sign;
        }
    }
        else{
            if(sign==""){
                a=a+m;
             document.getElementById('numdisplay').innerHTML=a;
            }
            else{
                b=b+m
                document.getElementById('numdisplay').innerHTML=a+sign+b;
            }
        }
    }

    function reset(m){
        location.reload();
    }
