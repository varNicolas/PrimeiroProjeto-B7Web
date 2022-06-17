
window.onload = function(){
  document.querySelector(".menu_mobile").addEventListener("click", function(){
    if(document.querySelector('header nav ul').style.display === 'flex'){
      document.querySelector('header nav ul').style.display = 'none';
      document.querySelector('.logo img').style.display = 'block';

    } else{
      document.querySelector('header nav ul').style.display = 'flex';
      document.querySelector('.logo img').style.display = 'none';
    }
  })

}