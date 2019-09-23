var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    username: 'User1234',
    usernameChanged: '',
    seen: true,
    books: {
      book: [
        {name: 'Book A', price: 5},
        {name: 'Book B', price: 15},
        {name: 'Book C', price: 50}
      ]
    },

  },
  //methods for the #app
  methods: {
    //simple reverse the 'message'
    reverse: function () {
      this.message = this.message.split('').reverse().join('');
    },

    //it can be good for save Form details
    saveUserName: function (text) {
      this.usernameChanged = text;
    }
  }
});
//change the message
app.message = 'First printout by VUE!';
//hide the id='seen' tag
app.seen = false;
//add extra object into the book array in the books object
app.books.book.push({name: 'Book D', price: 500});
