// Acc
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});

//modal

$('.js-click-modal').click(function(){
    $('.container').addClass('modal-open');
  });
  
  $('.js-close-modal').click(function(){
    $('.container').removeClass('modal-open');
  });

  //calc
  var keys = document.querySelectorAll('#calculator span');
  var operators = ['+', '-', 'x', '÷'];
  var decimalAdded = false;
  
  
  for(var i = 0; i < keys.length; i++) {
      keys[i].onclick = function(e) {
          
          var input = document.querySelector('.screen');
          var inputVal = input.innerHTML;
          var btnVal = this.innerHTML;
          var total;
          if(btnVal == 'C') {
              input.innerHTML = '';
              decimalAdded = false;
          }
          
          else if(btnVal == '=') {
              var equation = inputVal;
              var lastChar = equation[equation.length - 1];
              
              equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
              
              if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                  equation = equation.replace(/.$/, '');
              
              if(equation)
                  {
               total = eval(equation);
                if(total.toString().indexOf('.') != -1)
                  total= total.toFixed(2);
            
            input.innerHTML = total;
          }
                  
              decimalAdded = false;
          }
          
          
          else if(operators.indexOf(btnVal) > -1) {
              
              var lastChar = inputVal[inputVal.length - 1];
              
              if(inputVal != '' && operators.indexOf(lastChar) == -1) 
                  input.innerHTML += btnVal;
              
              else if(inputVal == '' && btnVal == '-') 
                  input.innerHTML += btnVal;
              
              if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                  input.innerHTML = inputVal.replace(/.$/, btnVal);
              }
              
              decimalAdded =false;
          }
          
          else if(btnVal == '.') {
              if(!decimalAdded) {
                  input.innerHTML += btnVal;
                  decimalAdded = true;
              }
          }
          
          else {
              input.innerHTML += btnVal;
          }
          
          e.preventDefault();
      } 
  }