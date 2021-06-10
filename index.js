var customerName = "bob";

const leastFavoriteCustomer = "other bob";

//I first used code -
//function upperCaseCustomerName() {
 //   return customerName.toUpperCase();
//}
/*And was told the test still did not pass, even tho when I tried it on replit, it returned BOB, which is what the test was looking for. I ran through trial and error a couple times to find the return customerName = customerName.toUpperCase(); to pass, but was wondering why the original code would not when the result was the same.*/

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer="not bob";
}

function overwriteBestCustomer() {
    bestCustomer="maybe bob"
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer="third bob"
}