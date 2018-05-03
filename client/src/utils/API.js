import axios from "axios";

export default {
  // Gets all orders
  getAll: function() {
    return axios.get("/api/orders");
  },
  // Gets the order with the given id
  getOrder: function(id) {
    return axios.get("/api/order/" + id);
  },
  // Saves a book to the database
  saveOrder: function(userData) {
    return axios.post("/api/users", userData);
  },
  //creates an order to 
  createOrder: function(order) {
    console.log('Creating order:', order);
    return axios.post('/api/orders', order)
  }
};