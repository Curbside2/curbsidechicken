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
  createOrder: function(orderData) {
    console.log('Creating order:', orderData);
    return axios.post('/api/orders/create', orderData)
  }
};