function showAlert() {
    alert("Thanks! You have successfully subscribed!");
}


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    const signupBox = document.createElement("div");
    /*signupBox.id = "signup-box";*/
    signupBox.id = "signup-box";

    signupBox.innerHTML = `
        <h2>Sign Up For Our Newsletter</h2>
        <p>Sign up for our newsletter to receive information about cryptocurrencies.</p>
        <p>Stay on top of your values ​​and where to buy. Receive exclusive links.</p>
        <form id="signup-form">
            
            <label id="email-name" for="email"></label>
            <input type="email" id="email" name="email" placeholder="youremail@email.com" required>
            <br>
            <button type="button" id="subscribe-btn" onclick="showAlert()"><strong>LEARN WITH US! CLICK HERE!<strong></button>
        
            </form>
    `;
    body.appendChild(signupBox);
});