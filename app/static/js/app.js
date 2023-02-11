/* Add your Application JavaScript */
window.onload = function(){
  var button = document.getElementById("followbutton");

  button.addEventListener("click", function(event){
    event.preventDefault();
    if(button.innerHTML=="Follow"){
      button.innerHTML="Following";
    }else{
      button.innerHTML="Follow";
    }
  })
}