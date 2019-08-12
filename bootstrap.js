$('#barre').click(function(){
    $('#rideau').slideToggle(2000); // permet de cacher/montré 'slide' du rideau ou menu 
}); 
$('#rideau').mouseleave(function(){
    $('#rideau').hide(2000);
});

/* focus sur la barre recherche*/ 
document.getElementById('recherche').addEventListener("focus", monFocus);
document.getElementById('recherche').addEventListener("blur", monBlur);

function monFocus(){ this.style.cssText="background-color:white"; document.getElementById('recherche').style.cssText="background-color:pink";}
function monBlur(){ this.style.cssText="background-color:white"; }