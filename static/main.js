$(function () {
  $.ajax({
    url: 'http://localhost:3000/',
    type: 'GET'
  })
    .done(function (data) {
      console.log('success')

      $('main').empty()
      data.forEach(function (elem, index) {
        $('main').append('<div class="board"  id="' + index + '">' +
          '<div class="card-header">' + elem.name + '</div>' +
          '<div class="card-block">' + elem.score + '</div>' +
          '</div>')
      })
    })
    .fail(function () {
      console.log('error')
    })
    .always(function () {
      console.log('complete')
    })
})
