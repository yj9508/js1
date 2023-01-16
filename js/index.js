var inputSum = 0;
var productSum = 0;
var change = 0;

var obj = function(name, count, price){
    this.name = name;
    this.count = count;
    this.price = price;
};

var objArr = [];

/* 돈 투입 */
function func1(btn){
    var f1 = document.querySelector('#calc');
    inputSum += Number(btn.innerHTML);
    f1.setAttribute('value', inputSum);
};

/* 스크린 출력 */
function printScreen(name){
    var sc = document.querySelector('#screen');
    var str='';
    for( var i in objArr ){
        if(objArr[i].name==name){
            var text = document.createTextNode(objArr[i].name+' '+objArr[i].count+' '+objArr[i].price);
            if( document.getElementById(name) ){
                var h = document.getElementById(name);
                sc.removeChild(h);
            }
            var h = document.createElement('h6');
            h.setAttribute("id", name);
            
            h.appendChild(text);
        }
    }
    sc.appendChild(h);
    return;
}
/* 지출액 계산 */
function func2(x){
    var btn = x.querySelector('span');
    var f2 = document.querySelector('#spend');
    productSum += Number(btn.innerHTML);
    f2.setAttribute('value', productSum);
    
    var str = x.innerHTML;
    var name = str.substring(0, str.indexOf('<'));
    var price = Number(btn.innerHTML);
    
    if(objArr.length==0){
        objArr.push(new obj(name, 1, price));
        printScreen(name); return;
    }
    else{
        for(var i in objArr){
            if(objArr[i].name == name){
                objArr[i].count += 1;
                objArr[i].price += price;
                printScreen(name); return;
            }
        }        
        objArr.push(new obj(name, 1, price));
        printScreen(name);
    }
};

/* 거스름 계산 */
function calc(f){
    var f = document.querySelector('#change');
    change = inputSum-productSum;  // 투입액-상품액
    f.setAttribute('value', change);

    if(change < 0) {
        alert('금액이 부족합니다.');
    }
};