const prefix = (() => {
  const styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('')
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
})();

const animationEnd = `
                      ${prefix['lowercase']}AnimationEnd
                      ${prefix['lowercase']}animationend
                     `;
$.fn.extend({
  animateCss: function (animationName) {
      $(this).addClass(`animated ${animationName}`).one(animationEnd, () => {
          $(this).removeClass(`animated ${animationName}`);
      });
  }
});

$('.popper li').mouseover( (e) => {
  $(e.currentTarget).animateCss('rubberBand');
});

$('.home').one(animationEnd, (e) => {
  $('.home-h2').animateCss('tada');
});


$('.fa-bars').click( e => {
  $('.fa-bars').toggle('fast', () => {
    $('nav').toggleClass('hidden-xs');
  });
});

$('.fa-times').click( e => {
  $('nav').toggleClass('hidden-xs');
  $('.fa-bars').toggle();
});

$('#home-link').click( () => {
  $('html,body').animate({
      scrollTop: $(".home").offset().top + 20},
      'slow', () => $('.home-h2').animateCss('tada'));
});

$('#port-link').click( () => {
  $('html,body').animate({
      scrollTop: $(".portfolio").offset().top + 20},
      'slow');
});

$('#about-link').click( () => {
  $('html,body').animate({
      scrollTop: $(".about").offset().top + 20},
      'slow');
});

$('#contact-link').click( () => {
  $('html,body').animate({
      scrollTop:  $(document).height() + 1000},
      'slow');
});
