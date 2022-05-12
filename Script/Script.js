var button_num = 0;
var button_text = "";
var textdata = "";
var val1 = 0;
var val2 = 0;
var once = true;
var input_kigou = 0;
var kigou_num = 0;
var result_num = 0;
var karidata = "";
var plus_minus = true;
var calc_now = true;

//jsは右から左に代入することしかできない
function art(){
    textdata = document.getElementById('Result').innerHTML;
    window.alert(
    "入力されている数値："+ textdata +
    "\n" + "Val1："+ val1 +
    "\n" + "Val2："+ val2
    );
}

function input_num(button_num){
        

        if(calc_now == false){
            document.getElementById('Result').innerHTML = "";
            calc_now = true;
            input_num(button_num);

        }else if(calc_now == true){
             //Resultから文字を取得
        textdata = document.getElementById('Result').innerHTML;
        
        //押されたbuttonについている引数を文字に変換する
        button_text = button_num.toString().document;

        //Resultと引数をテキスト化した文字の文字結合を行う
        textdata = textdata + button_num;
        
        //データをリザルトに挿入
        document.getElementById('Result').innerHTML = textdata;
        
        //コンソールに出力
        console.log(button_num);
        }
    }

function calc(){
        textdata = document.getElementById('Result').innerHTML;
        val2 = parseFloat(textdata);

        console.log("val2:"+val2)
        
        if(isNaN(val2)){
            document.getElementById('Result').innerHTML = val1.toString();

        }else{
        

        if(kigou_num == 1){
            result_num = parseFloat(val1) + parseFloat(val2);
            document.getElementById('Result').innerHTML = result_num.toString();

        }else if(kigou_num == 2){
            result_num = parseFloat(val1) - parseFloat(val2);
            document.getElementById('Result').innerHTML = result_num.toString();

        }else if(kigou_num == 3){
            result_num = parseFloat(val1) * parseFloat(val2);
            document.getElementById('Result').innerHTML = result_num.toString();
            
        }else if(kigou_num == 4){
            result_num = parseFloat(val1) / parseFloat(val2);
            document.getElementById('Result').innerHTML = result_num.toString();
            
        }else if(kigou_num == 5){
            result_num = parseFloat(val1) + parseFloat(val2);
            document.getElementById('Result').innerHTML = result_num.toString();
            
        }else if(kigou_num == 6){
            result_num = parseFloat(val1) % parseFloat(val2);
            document.getElementById('Result').innerHTML = result_num.toString();
            
        }   
    }
    
}

function plus_minus_fanc(){
    karidata = document.getElementById('Result').innerHTML;
    karidata = parseFloat(karidata) * -1
    document.getElementById('Result').innerHTML = karidata
}
    
function kigou(input_kigou){
    kigou_num = input_kigou;
    textdata = document.getElementById('Result').innerHTML;
    val1 = parseFloat(textdata);
    console.log(kigou_num);
    document.getElementById('Result').innerHTML = "";
    once = false;
}

function All_Clear(){
     button_num = 0;
     button_text = "";
     textdata = "";
     val1 = 0;
     val2 = 0;
     once = true;
     input_kigou = 0;
     kigou_num = 0;
     result_num = 0;
     karidata = "";
     plus_minus = true;
     calc_now = true;
    document.getElementById('Result').innerHTML = "";
}