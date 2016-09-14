$(function () {
  listScorers()

  $('#add-leader').submit(function (event) {
  event.preventDefault() // stop the browser reloading
  var data = $('#add-leader').serialize() // extract the data from the form
  $('#add-leader').trigger('reset') // clear the form
  addScorer(data) // send ajax request
})

$('main').on('click', '.delete-scorer', function () {
  var id = $(this).parent().attr('id')
  deleteScore(id)
})
})




  function listScorers(){
  $.ajax({
    url: 'http://localhost:3000/data',
    type: 'GET'
  })
    .done(function (data) {
      console.log('success')

      $('.trow').empty()

      data.forEach(function (elem, index) {
        $('table').append('<tr class="trow">' +
          '<td>' + elem.name + '</td>' +
          '<td>' + elem.score + '</td>' +
          '<td> <button class="btn btn-info">Edit</button> </td>' +
          '<td> <button class="btn btn-danger delete-scorer">Delete</button> </td>' +
          '</tr>')
      })
    })
    .fail(function () {
      console.log('error')
    })
    .always(function () {
      console.log('complete')
    })
}

function addScorer (scoreData) {
  $.ajax({
    url: 'http://localhost:3000/data',
    type: 'POST',
    data: scoreData
  }).done(function (data) {
    console.log('success adding scorer')
    // if we wanted to be efficient we would just append the new peanut but for ease we will instead just redisplay the list

    listScorers()
  }).fail(function () {
    console.log('error adding scorer')
  })
}

// DELETE /peanuts/:id
function deletePeanut (scoreId) {
  $.ajax({
    url: 'http://localhost:3000/peanuts/' + scoreId,
    type: 'DELETE'
  }).done(function (data) {
    console.log('success deleting peanut')
    // if we wanted to be efficient we would just append the new peanut but for ease we will instead just redisplay the list
    listScorers()
  }).fail(function () {
    console.log('error deleting peanut')
  })
}
