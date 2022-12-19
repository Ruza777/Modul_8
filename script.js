
let minValue;
let maxValue;
let userValue;
let answerNumber;
let unit;
let decimal;
let hundreds;
let exception;
let number;


//-----------------------------------------------------------------------------------------
//------------------------объявление функции для написания числа текстом------------------
function numberText(){
//------------------------определяем значения разрядов единиц, десяток, сотен--
    number=answerNumber;

    if (Math.abs(number)>99&&Math.abs(number)<=999){
        hundreds=Math.trunc(Math.abs(number)/100);
        decimal=Math.trunc((Math.abs(number)-hundreds*100)/10);
         unit=(Math.abs(number)-hundreds*100)-decimal*10;
        if (unit==0){
            unit=" ";
        }
         if(decimal==0){
         decimal=" ";
         }
 
    }

    if (Math.abs(number)>9&&Math.abs(number)<=99){
         hundreds='';
         decimal=Math.trunc(Math.abs(number)/10);
        unit=Math.abs(number)-decimal*10;
    if (unit==0){
        unit=" ";
        }
    
    }
    if (Math.abs(number)>=0&&Math.abs(number)<10){
        hundreds='';
        decimal='';
        unit=number;
    }
//--------------------------------задаем текстовое значение единиц------------------------------
    if (decimal>=2&&unit==1||decimal==0&&unit==1){
        unit='один';
    //   console.log(unit);
    } else if (decimal>=2&&unit==2||decimal==0&&unit==2){
        unit='два';
    }
    else if (decimal>=2&&unit==3||decimal==0&&unit==3){
        unit='три';
    }  
    else if (decimal>=2&&unit==4||decimal==0&&unit==4){
        unit='четыре';
    } 
    else if (decimal>=2&&unit==5||decimal==0&&unit==5){
        unit='пять';
    } 
    else if (decimal>=2&&unit==6||decimal==0&&unit==6){
        unit='шесть';
    } 
    else if (decimal>=2&&unit==7||decimal==0&&unit==7){
        unit='семь';
    } 
    else if (decimal>=2&&unit==8||decimal==0&&unit==8){
        unit='восемь';
    } 
    else if (decimal>=2&&unit==9||decimal==0&&unit==9){
        unit='девять';
    }

    //-------------------------------------------------------------------------

    //------------------------------задаем название числа от 11 до 20-ти----------------------------
    if (decimal==1&&unit==1){
        exception='одиннадцать';
    //   console.log(unit);
    }else if (decimal==1&&unit==2){
        exception='двенадцать';
    }
    else if (decimal==1&&unit==3){
        exception='тринадцать';
    }  
    else if (decimal==1&&unit==4){
        exception='четырнадцать';
    } 
    else if (decimal==1&&unit==5){
        exception='пятнадцать';
    } 
    else if (decimal==1&&unit==6){
        exception='шестнадцать';
    } 
    else if (decimal==1&&unit==7){
        exception='семнадцать';
    } 
    else if (decimal==1&&unit==8){
        exception='восемнадцать';
    } 
    else if (decimal==1&&unit==9){
        exception='девятнадцать';
    }
//-------------------------------------------------------------------------

//-----------------------------------задаем текстовое значение десяток ----------------------------
    if (decimal==1&&unit==0){
        decimal='десять';
    }else if (decimal==2){
        decimal='двадцать';
    
    } else if (decimal==3){
        decimal='тридцать';
    
    }else if (decimal==4){
        decimal='сорок';
    
    }else if (decimal==5){
        decimal='пятьдесят';
        
    }else if (decimal==6){
        decimal='шестьдесят';
        
    }else if (decimal==7){
        decimal='семьдесят';
    
    }else if (decimal==8){
        decimal='восемдесят';
    
    }else if (decimal==9){
        decimal='девяносто';
        
    }
//----------------------------------------------------------------------------

//-----------------------------------задаем текстовое значение сотен--------------------------------------

    if (hundreds==1){
        hundreds='сто';
        
    } else if (hundreds==2){
        hundreds='двести';
        
    } else if (hundreds==3){
        hundreds='триста';
        
    } else if (hundreds==4){
        hundreds='четыреста';
        
    } else if  (hundreds==5){
        hundreds='пятьсот';
        
    } else if (hundreds==6){
        hundreds='шестьсот';
        
    } else if (hundreds==7){
        hundreds='семьсот';
        
    } else if (hundreds==8){
        hundreds='восемьсот';
        
    } else if (hundreds==9){
        hundreds='девятьсот';
        
    } 

//--------------------------------выводим число текстом-----------------------------

        if (decimal==1&&unit<=9){
        number=number>0?hundreds+' '+exception:'минус'+' '+hundreds+' '+exception;
        }else if (number<0){
            number='минус'+' '+hundreds+' '+decimal+' '+unit; 
        }
        else {
        number=hundreds+' '+decimal+' '+unit;  
        }
        if (String(number).length>20){
            number=answerNumber;   
        }
//---------------------------------------------------------------
}
//-----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

document.querySelector('#box').style.display='none';
//--------------------------Проверка на NAN и корректировка минимального и максимального числа-------------------------
document.getElementById('minInput').addEventListener('change', (event)=>{    
   
    userValue = parseInt(event.target.value);
    if (isNaN(userValue)||userValue==' '&&userValue!=0){
        minValue=-999;
        alert(`Введите правильное число!`);
    } else{
        minValue = userValue<-999? -999:userValue;
     
    }
    document.getElementById('minSpan').textContent = minValue;
    document.getElementById('minInput').value = minValue; 
   
})

document.getElementById('maxInput').addEventListener('change', (event)=>{

    userValue = parseInt(event.target.value);
    if (isNaN(userValue)||userValue==''&&userValue!=0){
        maxValue=999;
        alert('Введите правильное число!');
    }
    else if (userValue<minValue) {
        alert('Ваше максимальное число меньше минимального!\nВведите правильное число!');
        maxValue=999;
    } 
        else {
            maxValue = userValue > 999? 999:userValue;
    }
    document.getElementById('maxSpan').textContent = maxValue; 
    document.getElementById('maxInput').value = maxValue;                              
})

//--------------------------------------------------------------------------
let orderNumber = 1;
let gameRun;

//-----------------------------Старт игры - кнопка "старт"---------------------------------
document.getElementById('inputBt').addEventListener('click', (event)=> {
document.querySelector('form').style.display='none';
document.querySelector('#box').style.display='';
gameRun = true;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
answerNumber  = Math.floor((minValue + maxValue) / 2);
orderNumberField.innerText = orderNumber;
numberText();
answerField.innerText = `Вы загадали число ${number}?`;


})
//--------------------------------------------------------------------------


//-------------------------------Кнопка "больше"---------------------------------
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){

        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);///////////////////выбор рандомного текста
            let answerPhrase;
            if (phraseRandom===0){
                answerPhrase='Вы загадали неправильное число!';
            }
            else if (phraseRandom===1) {
                answerPhrase='Я сдаюсь..';
            }
            else {
                answerPhrase='Неужели блефуете?';
            }
            answerField.innerText = answerPhrase;////////////////////////////////////////////////////////
            gameRun = false;
        } 
        
        else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
   
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round( Math.random()*5);///////////////////выбор рандомного текста
            let answerPhrase;
            numberText();
            if (phraseRandom===0){
                answerPhrase=`Вы загадали число ${number}?`;
            }
            else if (phraseRandom===1) {
                answerPhrase=`А может быть это  ${number}?`;
            }
            else if (phraseRandom===2) {
                answerPhrase=`Значит это число ${number}!`;
            }
            else if (phraseRandom===3) {
                answerPhrase=`Теперь я отгадаю - это ${number}?`;
            }
            else if (phraseRandom===4) {
                answerPhrase=`Правильный ответ ${number}?`;
            }
            else {
                answerPhrase=`И конечно же это ${number}?`;
            }
            answerField.innerText = answerPhrase;////////////////////////////////////////////////////////

        }
    }
})
//--------------------------------------------------------------------------

//-------------------------------Кнопка "меньше"----------------------------
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        }
        
        else {
            maxValue = answerNumber-1 ;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round( Math.random()*5);///////////////////выбор рандомного текста
            let answerPhrase;
            numberText();
            if (phraseRandom===0){
                answerPhrase=`Вы загадали число ${number}?`;
            }
            else if (phraseRandom===1) {
                answerPhrase=`Неужели это ${number}?`;
            }
            else if (phraseRandom===2) {
                answerPhrase=`Я думаю это ${number}!`;
            }
            else if (phraseRandom===3) {
                answerPhrase=`И всетаки  это ${number}?`;
            }
            else if (phraseRandom===4) {
                answerPhrase=`Правильный ответ ${number}?`;
            }
            else {
                answerPhrase=`Сейчас посчитаю....Это ${number}?`;
            }
            answerField.innerText = answerPhrase;////////////////////////////////////////////////////////

        }
    }
})


//--------------------------------------------------------------------------

//--------------------------------Кнопка "верно"----------------------------
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        const phraseRandom = Math.round( Math.random()*2);///////////////////выбор рандомного текста
        let answerPhrase;
        if (phraseRandom===0){
            answerPhrase=`Какой же я молодец!`;
        }
        else if (phraseRandom===1) {
            answerPhrase=`Я и не сомневался, что быстро угадаю!`;
        }
        else {
            answerPhrase=`Я так и знал!\nИгра окончена!`;
        }
        answerField.innerText = answerPhrase;////////////////////////////////////////////////////////
        gameRun = false;
    }
})
//--------------------------------------------------------------------------

//-------------------------------Кнопка "заново"-----------------------------
document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = -999;
    maxValue = 999;
    orderNumber = 1;
    document.getElementById('minSpan').textContent = -999;
    document.getElementById('maxSpan').textContent = 999;
    document.getElementById('minInput').value = -999;
    document.getElementById('maxInput').value= 999;  
    document.querySelector('#box').style.display='none';
    document.querySelector('form').style.display='';

    gameRun = false; 
})
//--------------------------------------------------------------------------



//--------------------------------------------------------------


