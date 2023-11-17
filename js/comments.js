function rateRestaurant(rating) {
    const stars = document.querySelectorAll('.star');

    // Remove "selected" class from all stars
    stars.forEach(star => star.classList.remove('selected'));

    // Add "selected" class to stars up to the clicked one
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected');
    }
}

function submitComment() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    if (name && comment) {
        var commentHtml = "<p><strong>" + name + ":</strong> " + comment + "</p>";
        document.getElementById("comments").innerHTML += commentHtml;
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    } else {
        alert("Please fill in both name and comment fields");
    }
    window.location.href = "thankyou.html";
}