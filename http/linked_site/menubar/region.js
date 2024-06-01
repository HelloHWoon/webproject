  function on_mouse_num(num) {
    document.querySelector('#main_img').src = `/image/map/${num}.png`;
    document.querySelector('#info_img').src = `/image/썸네일${num}.png`;
  }
  function off_mouse() {
    document.querySelector('#main_img').src = '/image/map/강원도.png';
    document.querySelector('#info_img').src = `/image/썸네일.png`;
  }

  function abc(){
    var iframe = document.getElementById("frames");
    iframe.style.width = 100;
  }