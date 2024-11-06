const costPerKilometer = 3; // Cost per kilometer
const defaultWeight = 5; // Default weight in kg
const defaultWeightCost = 5; // Cost for 5 kg
const fragileFee = 10; // رسوم المنتجات الحساسة
const perishableFee = 15; // رسوم المنتجات القابلة للتلف

function calculateCost() {
    const distance = parseFloat(document.getElementById("distance").value);
    const weight = parseFloat(document.getElementById("weight").value) || defaultWeight; // Use default weight if not provided
    const productType = document.getElementById("productType").value;

    if (!distance || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    let totalCost = (distance * costPerKilometer) + (weight === defaultWeight ? defaultWeightCost : weight * costPerKilometer);

    if (productType === "fragile") {
        totalCost +=fragileFee;
    } else if (productType === "perishable") {
        totalCost += perishableFee
    }

    // عرض النتيجة
    document.getElementById("result").innerText = `Total Delivery Cost: ${totalCost} EGP`;
}
