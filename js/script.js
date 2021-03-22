// Function declartion
// function search(x, T) {
//   var s = 0;
//   for (var i = 0; i < T.length; i++) {
//     if (T[i] == x) {
//       s = s + 1;
//     }
//   }
//   return s;
// }

// Function call
// var x = search(5, [12, 7, 5, 1, 5]);
// var y = search(6, [17, 6, 6]);
// alert(x);
// alert(y);

function sumArrays(A, B) {
  var C = [];
  for (let i = 0; i < B.length; i++) {
    C[i] = A[i] + B[B.length - 1 - i];
  }
  return C;
}
// alert(sumArrays([1,6,2], [23,8,0]));

function pairImpair(x) {
  if (x % 2 == 0) {
    alert("Pair");
  } else {
    alert("Impair");
  }
}
function invoice(Qty, Price) {
  var priceHT = 0;
  var priceTTC = 0;
  for (let i = 0; i < Qty.length; i++) {
    priceHT = priceHT + Qty[i] * Price[i];
  }
  priceTTC = 1.19 * priceHT;
  return [priceHT, priceTTC];
}

// alert(invoice([12,15,18], [2,9,11]));

function consumns(T) {
  var C = [];
  for (let i = 0; i < T.length; i++) {
    var ch = T[i];
    var s = 0;
    for (let j = 0; j < ch.length; j++) {
      if (
        ch[j] == "a" ||
        ch[j] == "o" ||
        ch[j] == "i" ||
        ch[j] == "u" ||
        ch[j] == "y" ||
        ch[j] == "e"
      ) {
        s = s + 1;
      }
    }
    C[i] = ch.length - s;
  }
  return C;
}
// alert(consumns(['hello', 'test']));

function reverseLoop(T) {
  for (var i = T.length - 1; i >= 0; i--) {
    alert(T[i]);
  }
}

// reverseLoop([5,3,9,14]);

function verifLength(x, nb) {
  // if (x.length > nb) {
  //   return true;
  // } else {
  //   return false;
  // }
  return x.length > nb;
}

function signup(x) {
  var firstName = document.getElementById("firstName").value;
  var verifFirstName = firstName.length < 3;
  displayError(
    "First Name should have at least 5 chars",
    "firstNameError",
    verifFirstName
  );
  var lastName = document.getElementById("lastName").value;
  var verifLastName = lastName.length < 5;
  if (verifLastName) {
    document.getElementById("lastNameError").innerHTML =
      "Last name should have at least 5 characters";
    document.getElementById("lastNameError").style.color = "red";
  } else {
    document.getElementById("lastNameError").innerHTML = "";
  }
  var email = document.getElementById("email").value;
  var isEmailUnique = checkUniqueEmail(email);
  var verifEmail = validateEmail(email);
  if (verifEmail) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "Invalid Email";
    document.getElementById("emailError").style.color = "red";
  }
  if (!isEmailUnique) {
    document.getElementById("emailUniqueError").innerHTML = "";
  } else {
    document.getElementById("emailUniqueError").innerHTML = "Email exists";
    document.getElementById("emailUniqueError").style.color = "red";
  }
  var pwd = document.getElementById("pwd").value;
  var verifPwd = pwd.length < 5;
  if (verifPwd) {
    document.getElementById("pwdError").innerHTML =
      "Pwd should have at least 8 characters";
    document.getElementById("pwdError").style.color = "red";
  } else {
    document.getElementById("pwdError").innerHTML = "";
  }
  var tel = document.getElementById("tel").value;
  var verifTel = tel.length == 8;
  if (verifTel) {
    document.getElementById("telError").innerHTML = "";
  } else {
    document.getElementById("telError").innerHTML =
      "Tel should have 8 characters";
    document.getElementById("telError").style.color = "red";
  }
  if (
    !verifFirstName &&
    !verifLastName &&
    verifEmail &&
    !verifPwd &&
    verifTel &&
    !isEmailUnique
  ) {
    var userId = JSON.parse(localStorage.getItem("userId") || "1");
    var user = {
      id: Number(userId),
      firstName: firstName,
      lastName: lastName,
      email: email,
      pwd: pwd,
      tel: tel,
      role: x,
    };
    var T = JSON.parse(localStorage.getItem("users") || "[]");
    T.push(user);
    localStorage.setItem("users", JSON.stringify(T));
    localStorage.setItem("userId", Number(userId) + 1);
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addProduct() {
  var name = document.getElementById("name").value;
  var verifName = name.length < 3;
  if (!verifName) {
    document.getElementById("nameError").innerHTML = "";
  } else {
    document.getElementById("nameError").innerHTML =
      "Name must have 3 characters";
    document.getElementById("nameError").style.color = "red";
  }

  var price = document.getElementById("price").value;
  var verifPrice = Number(price) < 0;
  if (!verifPrice) {
    document.getElementById("priceError").innerHTML = "";
  } else {
    document.getElementById("priceError").innerHTML =
      "Price must be greater then 0";
    document.getElementById("priceError").style.color = "red";
  }

  var stock = document.getElementById("stock").value;
  var verifStock = Number(stock) < 10;
  if (!verifStock) {
    document.getElementById("stockError").innerHTML = "";
  } else {
    document.getElementById("stockError").innerHTML =
      "Stock must be greater then 10";
    document.getElementById("stockError").style.color = "red";
  }

  var category = document.getElementById("category").value;

  if (!verifStock && !verifPrice && !verifName) {
    var prId = JSON.parse(localStorage.getItem("prId") || "1");
    var product = {
      id: Number(prId),
      name: name,
      price: price,
      stock: stock,
      category: category,
    };
    var products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("prId", Number(prId) + 1);
  }
}

function displayUsers() {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  var userTable = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>`;
  for (let i = 0; i < users.length; i++) {
    userTable =
      userTable +
      `
    <tr>
      <th scope="row">${users[i].id}</th>
      <td>${users[i].firstName}</td>
      <td>${users[i].lastName}</td>
      <td>${users[i].email}</td>
    </tr>`;
  }
  userTable =
    userTable +
    `</tbody>
  </table>`;

  document.getElementById("users").innerHTML = userTable;
}

function displayProducts() {
  var products = JSON.parse(localStorage.getItem("products") || "[]");
  var productTable = `
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Price</th>
    <th scope="col">Stock</th>
    <th scope="col">Category</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>`;
  for (let i = 0; i < products.length; i++) {
    productTable =
      productTable +
      `
  <tr>
    <th scope="row">${products[i].id}</th>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].stock}</td>
    <td>${products[i].category}</td>
    <td>
    <button class="btn btn-info" onclick="editProduct(${products[i].id})">Edit</button>
    </td>
  </tr>
  <tr id='editBloc${products[i].id}'></tr>
  `;
  }
  productTable =
    productTable +
    `</tbody>
</table>`;

  document.getElementById("products").innerHTML = productTable;
}

function login() {
  var email = document.getElementById("emailLogin").value;
  var pwd = document.getElementById("pwdLogin").value;
  var user = searchUserByEmailAndPwd(email, pwd);
  if (user) {
    localStorage.setItem("connectedUser", user.id);
    if (user.role == "admin") {
      location.replace("admin.html");
    } else {
      location.replace("shop.html");
    }
  }
}

function searchUserByEmailAndPwd(email, pwd) {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  var findedUser;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].pwd == pwd) {
      findedUser = users[i];
    }
  }
  return findedUser;
}

function checkUniqueEmail(email) {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  var findedUser = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      findedUser = true;
    }
  }
  return findedUser;
}

function shopProducts() {
  var products = getObjectsFromLS("products");
  var prDiv = "";
  for (let i = 0; i < products.length; i++) {
    prDiv =
      prDiv +
      `
    <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-2.jpg">
                            <ul class="featured__item__pic__hover">
                                <li><a onclick="addToWishList(${products[i].id})"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">${products[i].name}</a></h6>
                            <h5>${products[i].price}</h5>
                            <button class='btn btn-success' onclick='reserve(${products[i].id})'>Reserve</button>
                        </div>
                    </div>
                </div>`;
  }

  document.getElementById("shopProducts").innerHTML = prDiv;
}

function displayError(msg, idError, condition) {
  if (condition) {
    document.getElementById(idError).innerHTML = msg;
    document.getElementById(idError).style.color = "red";
  } else {
    document.getElementById(idError).innerHTML = "";
  }
}

//Function declaration
function getObjectsFromLS(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function reserve(id) {
  localStorage.setItem("idPrToRserve", id);
  location.replace("product-details.html");
}

function searchObjectById(key, id) {
  var objects = getObjectsFromLS(key);
  var findedObj;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      findedObj = objects[i];
    }
  }
  return findedObj;
}

function displayProductInfo() {
  var idPr = localStorage.getItem("idPrToRserve");
  var product = searchObjectById("products", idPr);
  document.getElementById("prName").innerHTML = product.name;
  document.getElementById("prPrice").innerHTML = product.price;
  document.getElementById("prStock").innerHTML = product.stock;
}

function addToCard() {
  var qty = document.getElementById("qty").value;
  var idPr = localStorage.getItem("idPrToRserve");
  var product = searchObjectById("products", idPr);
  if (product.stock >= Number(qty)) {
    var connectedUser = localStorage.getItem("connectedUser");
    var orderId = JSON.parse(localStorage.getItem("orderId") || "1");
    var order = {
      id: Number(orderId),
      qty: Number(qty),
      userId: Number(connectedUser),
      productId: Number(idPr),
    };
    var orders = getObjectsFromLS("orders");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("orderId", Number(orderId) + 1);

    // Mise à jour du stock du produit réservé
    var products = getObjectsFromLS("products");
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == idPr) {
        products[i].stock = products[i].stock - Number(qty);
        break;
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
  } else {
    alert("Stock indisponible");
  }
}

function deleteObject(pos, key) {
  var objects = JSON.parse(localStorage.getItem(key) || "[]");
  objects.splice(pos, 1);
  localStorage.setItem(key, JSON.stringify(objects));
  location.reload();
}

function displayOrders() {
  var orders = JSON.parse(localStorage.getItem("orders") || "[]");
  var connectedUser = localStorage.getItem("connectedUser");
  var myOrders = [];
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].userId == connectedUser) {
      myOrders.push(orders[i]);
    }
  }

  var orderTable = `
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Product name</th>
    <th scope="col">Unit Price</th>
    <th scope="col">Qty</th>
    <th scope="col">Total Price</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>`;
  var sum = 0;
  for (let i = 0; i < myOrders.length; i++) {
    var pr = searchObjectById("products", myOrders[i].prId);
    var price = Number(myOrders[i].qty) * Number(pr.price);
    // sum += price;
    sum = sum + price;
    orderTable =
      orderTable +
      `
  <tr>
    <th scope="row">${myOrders[i].id}</th>
    <th scope="row">${pr.prName}</th>
    <th scope="row">${pr.price}</th>
    <td>${myOrders[i].qty}</td>
    <td>${price}</td>
    <td>
    ${displayModal(i, "orders", "Order")}
    </td>
  </tr>`;
  }
  orderTable =
    orderTable +
    `
<tr>
    <th scope="row" colspan= "4">Total</th>
    <th scope="row">${sum}</th>
    </td>
  </tr></tbody>
</table>`;

  document.getElementById("orders").innerHTML = orderTable;
}

function displayModal(i, key, objectName) {
  return `
  <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            delete
    </button>
    <div class="modal fade" id='exampleModal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        Would you like to delete this ${objectName} ?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="deleteObject(${i}, '${key}')">Confirm Delete</button> 
        </div>
      </div>
    </div>
  </div>`;
}

function addToWishList(id) {
  var wishId = JSON.parse(localStorage.getItem("wishId") || "1");
  var connectedUser = localStorage.getItem("connectedUser");
  var wish = {
    id: wishId,
    userId: Number(connectedUser),
    prId: id,
  };
  var wishList = getObjectsFromLS("wishes");
  wishList.push(wish);
  localStorage.setItem("wishes", JSON.stringify(wishList));
  localStorage.setItem("wishId", Number(wishId) + 1);
}

function displayWishes() {
  var wishes = getObjectsFromLS("wishes");
  var connectedUser = localStorage.getItem("connectedUser");
  var myWishes = [];
  for (let i = 0; i < wishes.length; i++) {
    if (wishes[i].userId == connectedUser) {
      myWishes.push(wishes[i]);
    }
  }

  var wishTable = `
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Product name</th>
    <th scope="col">Price</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>`;
  for (let i = 0; i < myWishes.length; i++) {
    var pr = searchObjectById("products", myWishes[i].prId);
    wishTable =
      wishTable +
      `
  <tr>
    <th scope="row">${myWishes[i].id}</th>
    <th scope="row">${pr.name}</th>
    <th scope="row">${pr.price}</th>
    <td>
    ${displayModal(i, "wishes", "Wish")}
    </td>
  </tr>`;
  }
  wishTable =
    wishTable +
    `</tbody>
</table>`;

  document.getElementById("wishes").innerHTML = wishTable;
}

function searchProduct() {
  var minPrice = document.getElementById("minPrice").value;
  var maxPrice = document.getElementById("maxPrice").value;

  var emptyMin = minPrice.length > 0;
  var emptyMax = maxPrice.length > 0;
  var checkMax = Number(minPrice) > Number(maxPrice);
  displayError("Please insert min value", "minPriceError", !emptyMin);
  displayError("Please insert max value", "maxPriceError", !emptyMax);
  displayError(
    "Please insert Correct values : Max must be greater then min",
    "checkError",
    checkMax
  );
  var products = getObjectsFromLS("products");
  var prDiv = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= minPrice && products[i].price <= maxPrice) {
      prDiv =
        prDiv +
        `
    <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-2.jpg">
                            <ul class="featured__item__pic__hover">
                                <li><a onclick="addToWishList(${products[i].id})"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <img src="img/featured/feature-2.jpg" >
                        <div class="featured__item__text">
                            <h6><a href="#">${products[i].name}</a></h6>
                            <h5>${products[i].price}</h5>
                            <button class='btn btn-success' onclick='reserve(${products[i].id})'>Reserve</button>
                        </div>
                    </div>
                </div>`;
    }
  }
  document.getElementById("searchProducts").innerHTML = prDiv;
}

function setHeader() {
  var connectedUser = localStorage.getItem("connectedUser");
  var headerBloc = "";
  if (connectedUser) {
    var user = searchObjectById("users", Number(connectedUser));
    if (user.role == "admin") {
      headerBloc = `
      <nav class="header__menu">
                            <ul>
                                <li><a href="./index.html">Home</a></li>
                                <li><a href="./admin.html">Admin</a></li>
                                <li><a href="./add-product.html">Add Product</a></li>
                                <li><a href="./profile.html">${user.firstName} ${user.lastName} </a></li>
                                <li><a href="#" onclick="logout()">Logout</a></li>
                                <li class="active"><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>`;
    } else {
      headerBloc = `
      <nav class="header__menu">
                            <ul>
                                <li><a href="./index.html">Home</a></li>
                                <li><a href="./shop.html">Shop</a></li>
                                <li><a href="./basket.html">basket</a></li>
                                <li><a href="./profile.html">${user.firstName} ${user.lastName} </a></li>
                                <li><a href="#"  onclick="logout()">Logout</a></li>
                                <li class="active"><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>`;
    }
  } else {
    headerBloc = `
  <nav class="header__menu">
                        <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="./login.html">Login</a></li>
                            <li><a href="./signup.html">Signup</a></li>
                            <li class="active"><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>`;
  }
  document.getElementById("headerId").innerHTML = headerBloc;
}

function logout() {
  localStorage.removeItem('connectedUser');
  location.reload();
}

function profile() {
  var connectedUser = localStorage.getItem('connectedUser');
  var user = searchObjectById('users',Number(connectedUser));
  document.getElementById('firstNameProfile').innerHTML = user.firstName;
  document.getElementById('lastNameProfile').innerHTML = user.lastName;
  document.getElementById('emailProfile').innerHTML = user.email;
  document.getElementById('pwdProfile').innerHTML = user.pwd;
}

function editProfile() {
  var newTel = document.getElementById('newTel').value;
  var newPwd = document.getElementById('newPwd').value;
  var connectedUser = localStorage.getItem('connectedUser');
  var users = getObjectsFromLS('users');
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == connectedUser) {
      users[i].pwd = newPwd;
      users[i].tel = newTel;
    }    
  }
  localStorage.setItem('users', JSON.stringify(users));
  location.replace('basket.html');
}


function editProduct(id) {
  var product = searchObjectById('products', id);
  var editForm = `
  <div class="row">
                    <span id="lastNameError"></span>
                    <div class="form-group col-lg-6 col-md-6">
                        <input type="text" id="newStock" class="form-control" value=${product.stock} placeholder="Stock">
                    </div>
                    <div class="form-group col-lg-6 col-md-6">
                        <input type="text" id="newPrice" class="form-control" value=${product.price} placeholder="Price">
                    </div>
                    <div class="col-lg-12 text-center">
                        <button type="submit" onclick="validateEdit(${product.id})" class="site-btn">Edit</button>
                    </div>
                </div>
  `;
  document.getElementById(`editBloc${id}`).innerHTML = editForm;
}

function validateEdit(id) {
  var newStock = document.getElementById('newStock').value;
  var newPrice = document.getElementById('newPrice').value;
  products = getObjectsFromLS('products');
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i].stock = newStock;
      products[i].price = newPrice;
      break;
    }    
  }

  localStorage.setItem('products', JSON.stringify(products));
  location.reload();
}
