var chances=[],rightAnswer=0,wrongAnswer=0;
$(document).ready(function(){
generateSalt();
$('#submitIt').click(function(){
ans=$('#yourAnswer').val();
if(ans=='' || ans.toLowerCase()!=logos[salt]){
$('#result').html('Wrong');
wrongAnswer++;
setTimeout(function(){$('#yourAnswer').val('');$('#result').html('');},1000);
}else{
$('#result').html('Correct');
$('.logoContainer').css('background','url(img/original/'+salt+'.jpg)');
rightAnswer++;
setTimeout(function(){generateSalt();},1000);
}

});
$('#skipIt').click(function(){
generateSalt();
});
$( ".homeBtn" ).click(function() {
	location.hash = "";
});
});

function generateSalt(){
if (chances.length!=60){
salt=Math.floor((Math.random() * 100) + 1); 
while(salt>59 || chances.indexOf(salt)>=0 ){
salt=Math.floor((Math.random() * 100) + 1); 
}
chances.push(salt);
$('.logoContainer').css('background','url(img/modified/'+salt+'.jpg)');
$('#yourAnswer').val('');
$('#result').html('');
}
}