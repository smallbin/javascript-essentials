// if else conditionals
let userRole = "admin";
let accessLevel;

if(userRole === "admin") {
    accessLevel = "Full access granted";
} else if(userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

// nested if else conditionals
if(isLoggedIn) {
    if(accessLevel === "admin"){
        userMessage = "Welcome, admin!";
    } else {
        userMessage = "Welcome, user!";
    }
} else {
    userMessage = "Please log in to access the system";
}
console.log("User Message: ", userMessage);

// switch statement
let userType = "subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);