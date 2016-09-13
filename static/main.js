$.get('http://express-blog-wdi5.herokuapp.com/blogposts', function(data) {
  $('#main').append(data)
})
