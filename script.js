$(document).ready(function(){
  $("#mypform").validate({
    rules: {
      fl: "required",
      sl: "required",
      en: "required",
      hi: "required",
      ss: "required",
      ph: "required",
      ch: "required",
      bi: "required",
      ma: "required",
      it: "required",
    },
    messages: {
      fl:"Please Select FristLanguage Grade!",
      sl: "Please Select SecondLanguage Grade!",
      en: "Please Select English Grade!",
      hi: "Please Select Hindi Grade!",
      ss: "Please Select SocialScience Grade!",
      ph: "Please Select Physcis Grade!",
      ch: "Please Select Chemistry Grade!",
      bi: "Please Select Biology Grade!",
      ma: "Please Select Mathematics Grade!",
      it: "Please Select Information Technology Grade!",
    }
  });

$(function(){
  $('.formDiv').on('change', 'select', function(){
      if(this.value){
        $('#Calculate').click(function(){
          var FristLanguage = $('#FristLanguage').find(":selected").val();
          var SecondLanguage = $('#SecondLanguage').find(":selected").val();
          var English = $('#English').find(":selected").val();
          var Hindi = $('#Hindi').find(":selected").val();
          var SocialScience = $('#SocialScience').find(":selected").val();
          var Physics = $('#Physics').find(":selected").val();
          var Chemistry = $('#Chemistry').find(":selected").val();
          var Biology = $('#Biology').find(":selected").val();
          var Mathematics = $('#Mathematics').find(":selected").val();
          var InformationTechnology = $('#InformationTechnology').find(":selected").val();
          if(FristLanguage>0 && SecondLanguage>0 && English>0 && Hindi>0 && SocialScience>0 && Physics>0 && Chemistry>0 && Biology>0 && Mathematics>0 && InformationTechnology>0){
            document.getElementById("resutl").innerHTML = "True";
           }else{
            document.getElementById("resutl").innerHTML = "";
           }
         });
          
      }
  });
});

})