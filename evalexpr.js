var output = [];
var number = [];
var input = [];
var stack = [];
var preOperation = [];
var result = [];
var precedenceIndex;
var stacklength = stack.length;

function precedence(a){
  if(a == "+"){
    precedenceIndex = 2;
  }
  if(a == "-"){
    precedenceIndex = 2;
  }
  if(a == "*"){
    precedenceIndex = 3;
  }
  if(a == "/"){
    precedenceIndex = 3;
  }
  if(a == "%"){
    precedenceIndex = 3;
  }
  if(a == "("){
    precedenceIndex = null;
  }
  if(a == ")"){
    precedenceIndex = null;
  }
  return precedenceIndex;
}


function evalExpr(str){
  input = str.split("");

  for (var i = 0; i < input.length; i++) {

    if(!(input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/" || input[i] == "%" || input[i] == "(" || input[i] == ")")){
      number.push(input[i]);

      if(input[i+1] == "+" || input[i+1] == "-" || input[i+1] == "*" || input[i+1] == "/" || input[i+1] == "%" || input[i+1] == "(" || input[i+1] == ")" || i == input.length -1){
        output.push(number.join(""));
        number.splice(0, number.length);
      }
    }

    if(input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/" || input[i] == "%"){


      if(stack.length == 0){
        stack.push(input[i]);
      }

      else if(precedence(input[i]) > precedence(stack[stack.length -1])){
          stack.push(input[i]);
      }

      else if(precedence(input[i]) == precedence(stack[stack.length -1])){
          output.push(stack[stack.length -1]);
          stack.splice(stack.length-1,1);

          if(precedence(input[i]) > precedence(stack[stack.length -1]) || stack.length == 0){
             stack.push(input[i]);
          }
        }

      else if(precedence(input[i]) < precedence(stack[stack.length -1])){

          j = stack.length -1;
          while(precedence(input[i]) < precedence(stack[j])){
            var insertIndex = j;
            j--;
          }

          stack.splice(j,0,input[i]);
          output.push(stack[stack.length -1]);
          stack.splice(stack.length-1,1);
      }
    }


   else if(input[i] == "("){
       stack.push(input[i]);
   }

   else if(input[i] == ")"){

     j = stack.length -1;

       while(stack[j] != "("){
          output.push(stack[j]);
          stack.splice(j,1);
         j--;
       }
     stack.splice(stack.length-1,1);
    }
   }

  for(var k = stack.length - 1; k >= 0; k--){
    output.push(stack[k]);
  }

  for (var l = 0; l < output.length; l++){

    if(!(output[l] == "+" || output[l] == "-" || output[l] == "*" || output[l] == "/" || output[l] == "%")){
      preOperation[l] = parseInt(output[l]);
      console.log(preOperation[l])

    }else{

    if(result.length === 0){

    if(output[l] == "+"){
      result[0] = preOperation[preOperation.length -2] + preOperation[preOperation.length -1];
      preOperation.splice(preOperation.length -2, preOperation.length-1);
    }

    if(output[l] == "-"){
      result[0] = preOperation[preOperation.length -2] - preOperation[preOperation.length -1];
      preOperation.splice(preOperation.length -2, preOperation.length-1);
    }

    if(output[l] == "*"){
      result[0] = preOperation[preOperation.length -2] * preOperation[preOperation.length -1];
      preOperation.splice(preOperation.length -2, preOperation.length-1);
    }

    if(output[l] == "/"){
      result[0] = preOperation[preOperation.length -2] / preOperation[preOperation.length -1];
      preOperation.splice(preOperation.length -2, preOperation.length-1);
    }

    if(output[l] == "%"){
      result[0] = preOperation[preOperation.length -2] % preOperation[preOperation.length -1];
      preOperation.splice(preOperation.length -2, preOperation.length-1);
    }
    }

    else {
      if(output[l] == "+"){
      result[1] = result[result.length -1] + preOperation[preOperation.length -1];
      preOperation.splice(0, preOperation.length-1);
      result.splice(0,1);
    }

    if(output[l] == "-"){
      result[1] = result[result.length -1] - preOperation[preOperation.length -1];
      preOperation.splice(0, preOperation.length-1);
      result.splice(0,1);
    }

    if(output[l] == "*"){
      result[1] = result[result.length -1] * preOperation[preOperation.length -1];
      preOperation.splice(0, preOperation.length-1);
      result.splice(0,1);
    }

    if(output[l] == "/"){
      result[1] = result[result.length -1] / preOperation[preOperation.length -1];
      preOperation.splice(0, preOperation.length-1);
      result.splice(0,1);
    }

    if(output[l] == "%"){
      result[1] = result[result.length -1] % preOperation[preOperation.length -1];
      preOperation.splice(0, preOperation.length-1);
      result.splice(0,1);
    }
   }
  }
 }
}

evalExpr("(23+(3-6))*2+2");
