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
          let FristLanguage = $('#FristLanguage').find(":selected").val();
          let SecondLanguage = $('#SecondLanguage').find(":selected").val();
          let English = $('#English').find(":selected").val();
          let Hindi = $('#Hindi').find(":selected").val();
          let SocialScience = $('#SocialScience').find(":selected").val();
          let Physics = $('#Physics').find(":selected").val();
          let Chemistry = $('#Chemistry').find(":selected").val();
          let Biology = $('#Biology').find(":selected").val();
          let Mathematics = $('#Mathematics').find(":selected").val();
          let InformationTechnology = $('#InformationTechnology').find(":selected").val();
          let totel=parseInt(FristLanguage)+parseInt(SecondLanguage)+parseInt(English)+parseInt(Hindi)+parseInt(SocialScience)+parseInt(Physics)+parseInt(Chemistry)+parseInt(Biology)+parseInt(Mathematics)+parseInt(InformationTechnology)
          let percentage=totel*1.11
          if(FristLanguage>0 && SecondLanguage>0 && English>0 && Hindi>0 && SocialScience>0 && Physics>0 && Chemistry>0 && Biology>0 && Mathematics>0 && InformationTechnology>0){
            document.getElementById("result-text").innerHTML = "You Got " +percentage +"%"
            $('#PercentageScreen').modal('show');
           }else{
            document.getElementById("result-text").innerHTML = "";
           }
         });
          
      }
  });
});

})