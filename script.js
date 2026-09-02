class FoodItem {
    constructor(name, price, category, image) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;
    }
    
    display() {
        return `
            <div class="${this.category} food-item">
                <img class="menu" src="${this.image}">
                <p>
                    ${this.name}<br>
                    Price = ${this.price} Rs<br>
                    ${this.category}<br>
                    <button onclick="addtocart('${this.name}', ${this.price})">
                        Add to Cart
                    </button>
                </p>
            </div>
            
        `;
    }
}
var food1 = new FoodItem(
    "paneer tikka pizza",
    99,
    "pizza",
    "Image/Pizza/paneer tikka pizza.jpeg"
);
var food2 = new FoodItem(
    "farmhouse pizza",
    47,
    "pizza",
    "Image/Pizza/farmhouse pizza.jpeg"
);
var food3 = new FoodItem(
    "mashroom pizza",
    35,
    "pizza",
    "Image/Pizza/mashroom pizza.jpeg"
);
var food4 = new FoodItem(
    "double cheese pizza",
    49,
    "pizza",
    "Image/Pizza/double cheese pizza.jpeg"
);
var food5 = new FoodItem(
    "corn and cheese pizza",
    62,
    "pizza",
    "Image/Pizza/corn and cheese pizza.jpeg"
);
var food6 = new FoodItem(
    "spicy veggi pizza",
    25,
    "pizza",
    "Image/Pizza/spicy veggi pizza.jpeg"
);
var food7 = new FoodItem(
    "spinach pizza",
    37,
    "pizza",
    "Image/Pizza/spinach pizza.jpeg"
);
var food8 = new FoodItem(
    "tandoori paneer pizza",
    37,
    "pizza",
    "Image/Pizza/tandoori paneer pizza.jpeg"
);
var food9 = new FoodItem(
    "spicy paneer burger",
    37,
    "burger",
    "Image/Burger/spicy paneer burger.jpeg"
);
var food10 = new FoodItem(
    "cheese veg burger",
    37,
    "burger",
    "Image/Burger/cheese veg burger.jpeg"
);
var food11 = new FoodItem(
    "Chipotle sweet corn burger",
    37,
    "burger",
    "Image/Burger/Chipotle sweet corn burger.jpeg"
);
var food12 = new FoodItem(
    "aloo tikki burger",
    37,
    "burger",
    "Image/Burger/aloo tikki burger.jpeg"
);
var food13 = new FoodItem(
    "variyari sharbat",
    37,
    "beverages",
    "Image/Beverages/variyari sharbat.jpeg"
);
var food14 = new FoodItem(
    "thandai",
    37,
    "beverages",
    "Image/Beverages/thandai.jpeg"
);
var food15 = new FoodItem(
    "sugarcane juice",
    37,
    "beverages",
    "Image/Beverages/sugarcane juice.jpeg"
);
var food16 = new FoodItem(
    "rose juice",
    37,
    "beverages",
    "Image/Beverages/rose juice.jpeg"
);
var food17 = new FoodItem(
    "lemonade",
    37,
    "beverages",
    "Image/Beverages/lemonade.jpeg"
);
var food18 = new FoodItem(
    "kokam sharbat",
    37,
    "beverages",
    "Image/Beverages/kokam sharbat.jpeg"
);
var food19 = new FoodItem(
    "fuljar soda",
    37,
    "beverages",
    "Image/Beverages/fuljar soda.jpeg"
);
var food20 = new FoodItem(
    "aam panna",
    37,
    "beverages",
    "Image/Beverages/aam panna.jpeg"
);
var foodItems = [
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8,
    food9,
    food10,
    food11,
    food12,
    food13,
    food14,
    food15,
    food16,
    food17,
    food18,
    food19,
    food20,
];
function displayMenu() {
    var menu = document.getElementById("menu-items");
    var output = "";
    for (var i = 0; i < foodItems.length; i++) {
        output += foodItems[i].display();
    }
    menu.innerHTML = output;
}
displayMenu();
function filter(category)
{
    var items = document.getElementsByClassName("food-item");

    for (var i = 0; i < items.length; i++)
    {
        if (category === "all" ||
            items[i].classList.contains(category))
        {
            items[i].style.display = "flex";
        }
        else
        {
            items[i].style.display = "none";
        }
    }
}
var cart = [];
function addtocart(itemname, price) {
    cart.push({
        name: itemname,
        price: price
    });
    displaycart();
    alert(
        itemname +
        " added to cart, price: " +
        price +
        " Rs"
    );
}
function displaycart()
{
    var output = "";
    var total = 0;

    for (var i = 0; i < cart.length; i++)
    {
        output +=
            (i + 1) +
            ". " +
            cart[i].name +
            " - " +
            cart[i].price +
            " Rs " +
            '<button onclick="deletefromcart(' + i + ')">' +
'<img src="Image/Icon/delete.png" width="20" height="20">' +
'</button>' +
            "<br>";

        total += cart[i].price;
    }

    output += "<br>Total: " + total + " Rs";

    document.getElementById("order-detail").innerHTML = output;
}
function deletefromcart(index)
{
    cart.splice(index, 1);

    displaycart();
}
function payment()
{
    if (cart.length === 0)
    {
        alert("Cart is empty.");
        return;
    }
    var output = "";
    var total = 0;
    for (var i = 0; i < cart.length; i++)
    {
        output +=
            (i + 1) + ". " +
            cart[i].name + " - " +
            cart[i].price + " Rs<br>";
        total += cart[i].price +"<br>";
    }
    output += "<br>Total: " + total + " Rs";
    document.getElementById("order-history").innerHTML += output;
    alert("Order confirmed!");
    cart = [];
    displaycart();
}
