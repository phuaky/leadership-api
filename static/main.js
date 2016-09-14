$(function () {
  getScorers()

  $('#add-leader').submit(function (event) {
    event.preventDefault() // stop the browser reloading
    var data = $('#add-leader').serialize() // extract the data from the form
    $('#add-leader').trigger('reset') // clear the form
    addScorer(data) // send ajax request
  })

  $('.main').on('click', '.edit-scorer', function () {
    var id = $(this).val()
    console.log('helo edit ' + id)
    editScore(id)
  })

  $('.main').on('click', '.delete-scorer', function () {
    var id = $(this).val()
    console.log(id)
    deleteScore(id)
  })
})

function getScorers () {
  $.ajax({
    url: 'http://localhost:3000/data',
    type: 'GET'
  })
    .done(function (data) {
      // console.log('success')
      displayScorer(data)
    })
    .fail(function () {
      console.log('error')
    })
    .always(function () {
      // console.log('complete')
    })
}

function displayScorer (data) {
  $('tbody').empty()

  data.forEach(function (elem, index) {
    $('tbody').append(
      '<tr>' +
      '<td> <value="'+ index + '">' + elem.id + '</td>' +
      '<td>' + '<span class="editedName" contenteditable="true" id="name' + index + '">' + elem.name + '</td>' +
      '<td>' + '<span class="editedScore" contenteditable="true" id="score' + index + '">' + elem.score + '</td>' +
      '<td> <button class="btn btn-info edit-scorer" value="' + index + '">Update</button> </td>' +
      '<td> <button class="btn btn-danger delete-scorer" value="' + index + '">Delete</button> </td>' +
      '</tr>')
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

    getScorers()
  }).fail(function () {
    console.log('error adding scorer')
  })
}

function editScore (data) {
var nameID = "#name" + data
var scoreID = "#score" + data
var entry = {name: $(nameID).text(),
             score: $(scoreID).text()
            }
  $.ajax({
    url: 'http://localhost:3000/data/' + data,
    type: 'PUT',
    data: entry
  }).done(function (zebra) {
    getScorers(zebra)
    console.log('edit succeed');
  }).fail(function () {
    console.log('loading failed')
  })
}

// DELETE /score/:id
function deleteScore (scoreId) {
  $.ajax({
    url: 'http://localhost:3000/data/' + scoreId,
    type: 'DELETE'
  }).done(function (data) {
    // console.log('success deleting score')
    // if we wanted to be efficient we would just append the new peanut but for ease we will instead just redisplay the list
    getScorers()
  }).fail(function () {
    // console.log('error deleting score')
  })
}
