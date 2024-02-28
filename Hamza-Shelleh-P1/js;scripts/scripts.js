//Product Data
var products = [
    {
        name: "Smartwatch",
        description: "Stay connected with the SmartWatch Pro. Featuring advanced health tracking, notifications, and sleek design.",
        price: "$199.99",
        image: "images/watch.jpg"
    },
    {
        name: "Earbuds",
        description: "Enjoy music on the go with the UltraFit Wireless Earbuds. Featuring premium sound quality and comfortable fit.",
        price: "$79.99",
        image: "images/ear.jpg"
    },
    {
        name: "Home Camera",
        description: "Keep an eye on your home with the Home Smart Security Camera. Featuring motion detection and two-way audio.",
        price: "$129.99",
        image: "images/cam.jpg"
    }
];


// JavaScript code to handle form submission
document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    
    var name = document.getElementById("name").value;
    var rating = document.getElementById("rating").value;
    var review = document.getElementById("review").value;

    alert("Thank you for your review, " + name + "! Rating: " + rating + ", Review: " + review);

    
});

// Function additional details
function toggleDetails() {
    var details = this.querySelector('.details');
    details.classList.toggle('show');
}

// Get all product elements
var products = document.querySelectorAll('.product');

// Add click event listener to each product
products.forEach(function(product) {
    product.addEventListener('click', toggleDetails);
});

