// ==========================================
// FOOD ITEM CLASS
// ==========================================

class FoodItem {

    constructor(name, price, category, image) {

        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;

    }


    // Create HTML for one food item
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

            <br>
        `;
    }
}


// ==========================================
// FOOD OBJECTS / INSTANCES
// ==========================================

var food1 = new FoodItem(
    "pavbhaji",
    99,
    "hot_and_fresh",
    "pavbhaji.webp"
);

var food2 = new FoodItem(
    "gulab jamun",
    47,
    "dessert",
    "gulab jamun.png"
);

var food3 = new FoodItem(
    "coffee",
    35,
    "drinks",
    "coffee.png"
);

var food4 = new FoodItem(
    "dosa",
    49,
    "hot_and_fresh",
    "dosa.webp"
);

var food5 = new FoodItem(
    "jalebi",
    62,
    "dessert",
    "jalebi.webp"
);

var food6 = new FoodItem(
    "tea",
    25,
    "drinks",
    "tea.png"
);

var food7 = new FoodItem(
    "samosa",
    37,
    "hot_and_fresh",
    "samosa.webp"
);


// ==========================================
// FOOD ARRAY
// ==========================================

var foodItems = [

    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7

];


// ==========================================
// DISPLAY FOOD ITEMS
// ==========================================

function displayMenu() {

    var menu = document.getElementById("menu-items");

    var output = "";

    for (var i = 0; i < foodItems.length; i++) {

        output += foodItems[i].display();

    }

    menu.innerHTML = output;
}


// Display menu when page loads
displayMenu();


// ==========================================
// FILTER FUNCTION
// ==========================================

function filter(category)
{
    var items = document.getElementsByClassName("food-item");

    for (var i = 0; i < items.length; i++)
    {
        if (category === "all" ||
            items[i].classList.contains(category))
        {
            items[i].style.display = "";
        }
        else
        {
            items[i].style.display = "none";
        }
    }
}


// ==========================================
// CART
// ==========================================

var cart = [];


// Add item to cart
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


// Display cart
function displaycart() {

    var output = "";

    var total = 0;

    for (var i = 0; i < cart.length; i++) {

        output +=
            (i + 1) +
            ". " +
            cart[i].name +
            " - " +
            cart[i].price +
            " Rs<br>";

        total += cart[i].price;

    }


    output += "<br>Total: " + total + " Rs";


    document.getElementById("order-detail").innerHTML =
        output;
}


// ==========================================
// PAYMENT
// ==========================================

function payment() {

    alert(
        "Payment gateway under maintenance, order failed."
    );

}
