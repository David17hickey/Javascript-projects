// Constructor function to create a User object
function User(name, age) {
    this.name = name; // Assign the name to the object
    this.age = age;   // Assign the age to the object
}

// Function to check eligibility using a ternary operation
function checkEligibility() {
    // Get user input from the browser
    const ageInput = document.getElementById('ageInput').value;

    // Ternary operation to determine eligibility
    const isEligible = ageInput >= 18 ? true : false;

    // Create a new User object using the constructor function
    const user = new User("Anonymous", ageInput);

    // Display the result using another function
    displayResult(user, isEligible);
}

// Function to display the results in an HTML element
function displayResult(user, isEligible) {
    // Nested function to format the message
    function formatMessage() {
        return isEligible
            ? `${user.name}, at age ${user.age}, you are eligible to vote.`
            : `${user.name}, at age ${user.age}, you are NOT eligible to vote.`;
    }

    // Update the content of the HTML element with the result
    document.getElementById('result').textContent = formatMessage();
}

// Note: The nested function `formatMessage` is used inside `displayResult` to encapsulate
// the logic for formatting the eligibility message, keeping the function modular and reusable.
