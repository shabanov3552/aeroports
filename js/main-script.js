// File
(function(){
  const inputFile = document.querySelector('.input-file');
  const labelFileName = document.querySelector('.label-file');
  
  if(inputFile != null) {
  let clearFile = renderCloseBtn();
  
    inputFile.addEventListener('change', inputFileHendler)
    clearFile.addEventListener('click', cickCloseHeendler)
  
  function inputFileHendler(e) {
  let target = e.target;
  
  if(target == inputFile && target.files != null) {
  let fileName = target.files[0].name;
  
      labelFileName.textContent = fileName;
      labelFileName.append(clearFile);
    }
  }
  
  function cickCloseHeendler(e) {
  e.preventDefault();
  
      inputFile.value = '';
      clearFile.remove();
      labelFileName.textContent = 'Прикрепить резюме';
  }
  
  function renderCloseBtn() {
  let span = document.createElement('span');
      span.classList.add('label-file__clear');
      span.innerHTML = '&times;';
  
  return span;
    }
  }
  
})()


$(document).ready(function(){

  // calendar
  
  $(function() {
    $('.date-calendar').datepicker($.datepicker.regional["ru"]);
  });
  
  // MODAL LEFT

  $('[data-modal=modal-branch]').click(function(){
    $('.modal').addClass('modal-open');
  });
  
  $('.modal__block-close').click(function(){
    $('.modal').removeClass('modal-open');
  });

  // Mobile menu

  $('.hamburger').click(function(){
      $('.menu-mobile').addClass('modal-open'),
          $('body').addClass('body-scroll');
  });

  $('.menu-mobile__close').click(function(){
      $('.menu-mobile').removeClass('modal-open'),
          $('body').removeClass('body-scroll');
  });

  // SCROLL
  
//   $(".timetable-table__container").niceScroll(".timetable-table", {
//     cursorcolor:"#405877",
//     cursoropacitymin:"1",
//     cursorwidth:"13px",
//     cursorborder:"none",
//     cursorborderradius:"0",
//     railvalign:"top",
//     background: "#e7e7e7"
//   });

});

// MACK
jQuery(function($){
  $.mask.definitions['~']='[1,2,3,4,5,6,9]';
    $('.phone_validate').mask("+7 (~99) 999-99-99");
    $.mask.definitions['~']='[1,2,3,4,5,6,9]';
});

jQuery(function($){
  $('.date-calendar').mask("99.99.9999");
});

