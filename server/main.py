from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, origins='*')

class Customer():
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        # self.id = 13

class Product():
    def __init__(self, name, price):
        self.name = name
        self.price = price
        # self.id = randint

class order():
    def __init__(self, customer, product):
        self.customer = customer
        self.product = product
        # self.date = datetime
        # self.id = randint
customer_a = Customer("Adam", "acif333@gmail.com", "585-409-7283")

all_customers = {1 : Customer("Adam", "acif333@gmail.com", "585-409-2864"), 2 : Customer("John", "example@example.com", "716-590-1347"), 3 : Customer("Shrek", "swampdaddy@godaddy.edu", "318-462-4277")}

@app.route(f"/customer/<int:id>", methods = ["GET"])
def customers(id):
    return jsonify(
        {'name': all_customers[id].name, 'email': all_customers[id].email,'phone': all_customers[id].phone}
    )

@app.route("/add_customer", methods=["POST"])
def add_customer():
    all_customers[5] = request.data
    print(request.data)
    return jsonify({"message": "New customer added succesfully"}), 201


@app.route("/product", methods = ["GET"])
def products():
    return jsonify(
        # customerobject
    )

@app.route("/order", methods = ["GET"])
def orders():
    return jsonify(
        # customerobject
    )


if __name__ == "__main__":
    app.run(debug=True, port=5000)