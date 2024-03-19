$(".shop").click(function(){
  var cls=this.className;
  switch (cls){
    case "ramesh shop":alert("You have selected Ramesh service\n Proceed to checkout");
      break;
    case "suresh shop":alert("You have selected Suresh service\n Proceed to ckeckout");
      break;
    case "venkat shop":alert("You have selected Venkateshwara service\n Proceed to checkout");
  }
});


$(".edit").click(function(){
  var changed= prompt("Enter new value:")
  var valclas=this.className;
  switch (valclas){
    case "edit name":$(".name1").val(changed);
      break;

    case "edit contact":$(".contactno").val(changed);
      break;

    case "edit add":$(".add1").val(changed);
      break;

    case "edit mail":$(".mail1").val(changed);
      break;
  }
});