
function Phone(brand, price, color, system) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
	this.system = system;
};

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

Phone.prototype.operatingSystem = function() {
	console.log("And it works with " + this.system + ".");
};

var iPhone6S = new Phone("Apple", 2250, "silver", "Apple iOS");
var samsungGalaxyS6 = new Phone ("Samsung", 1800, "black", "Android");
var onePlusOne = new Phone("OnePlus", 1300, "white", "OxygenOS");

samsungGalaxyS6.printInfo();
samsungGalaxyS6.operatingSystem();

iPhone6S.printInfo();
iPhone6S.operatingSystem();

onePlusOne.printInfo();
onePlusOne.operatingSystem();





