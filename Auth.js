const Customer = require('./Customer.js');

class Auth{
    constructor(){
        this.customers = [];
    }
    register(name, email, shippingAddress){
        let customer = new Customer(name, email, shippingAddress);
        this.customers.push(customer);
    }
    login(email){
        for (let customer of this.customers){
            if (customer.email === email){
                return customer;
            }
            else {
                return null;
            }
        }
    }
}

module.exports = Auth;