// Prompt 1
const argument = document.getElementById("who-is-right")

function whoIsRight(me) {
    argument.innerText = me;
}

function nover() {
    alert("Hey, I told you not to hover over me! >:O");
}

function numericalPass() {
    let x = document.forms["prompt3"]["user"].value;
    // Empty username field check
    if (x == "") {
        alert("Please enter a username for prompt 3");
        return false;
    }

    // Empty password field check
    x = document.forms["prompt3"]["pass"].value;
    if (x == "") {
        alert("Please enter a password for prompt 3");
        return false;
    } else if (x !== "12345678") {
        alert("Incorrect password")
        return false;
    } else {
        document.getElementById("correct-pass").innerText = "Correct pass";
        // Don't reload page and erase changes made to #correct-pass T _ T
        return false;
    }

    x = document.forms["prompt3"]["email"].value;
    // Empty email field check
    if (x == "") {
        alert("Please enter an email for prompt 3");
        return false;
    }
}