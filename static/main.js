$(function () {
  $.ajax({
    url: 'http://localhost:3000/data',
    type: 'GET'
  })
    .done(function (data) {
      console.log('success')

      // $('.main').empty()

      data.forEach(function (elem, index) {
        $('table').append('<tr>' +
          '<td>' + elem.name + '</td>' +
          '<td>' + elem.score + '</td>' +
          '<td> <button onclick="">Edit</button> </td>' +
          '<td> <button onclick="">Delete</button> </td>' +
          '</tr>')
      })
    })
    .fail(function () {
      console.log('error')
    })
    .always(function () {
      console.log('complete')
    })
})
