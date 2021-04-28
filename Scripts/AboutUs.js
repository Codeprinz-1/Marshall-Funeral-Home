var func2 = function() {
  document.title = 'Why Choose Us | Marshall Funeral Home'
  $('#about-us').css({'background-image': 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/road.jpg)'})
  $('.link2').addClass('selected')
  $('.link1').removeClass('selected')
  $('.link3').removeClass('selected')
  $('.section-contents2').css({'display': 'block'})
  $('.section-contents1').css({'display': 'none'})
  $('.section-contents3').css({'display': 'none'})
}

var func3 = function() {
  document.title = 'Contact Us | Marshall Funeral Home'
  $('.picture-header').children('h1').text('Contact Us')
  $('#about-us').css({'background-image': 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(../Images/header-image-contact.jpg)'})
  $('.link3').addClass('selected')
  $('.link2').removeClass('selected')
  $('.link1').removeClass('selected')
  $('.section-contents3').css({'display': 'block'})
  $('.section-contents2').css({'display': 'none'})
  $('.section-contents1').css({'display': 'none'})
}

$(document).ready(function(){
  if (String(location.hash) == '#why-choose-us') {
    func2()
  } else if (String(location.hash) == '#contact-us') {
    func3()
  }
  $('.link1').click(function() {
    location.hash = ''
    document.title  = 'Who We Are | Marshall Funeral Home'
    $('#about-us').css({'background-image': 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../Images/road.jpg)'})
    $('.link1').addClass('selected');
    $('.link2').removeClass('selected')
    $('.link3').removeClass('selected')
    $('.section-contents1').css({'display': 'block'})
    $('.section-contents2').css({'display': 'none'})
    $('.section-contents3').css({'display': 'none'})
  })
  $('.link2').click(() => {
    location.hash = 'why-choose-us'
    func2()
  })
  $('.link3').click(() => {
    location.hash = 'contact-us'
    func3()
  })
})