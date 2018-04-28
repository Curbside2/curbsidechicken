import axios from "axios";

export default {
  // Gets all books
  getAll: function() {
    return axios.get("/api/orders");
  },
  // Gets the book with the given id
  getOrder: function(id) {
    return axios.get("/api/order/" + id);
  },
  // Saves a book to the database
  saveOrder: function(userData) {
    return axios.post("/api/users", userData);
  }
};