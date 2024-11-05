const costPerKilometer = 10; // Cost per kilometer
const defaultWeight = 5; // Default weight in kg
const defaultWeightCost = 15; // Cost for 5 kg

function calculateCost() {
    const distance = parseFloat(document.getElementById("distance").value);
    const weight = parseFloat(document.getElementById("weight").value) || defaultWeight; // Use default weight if not provided
    
    if (!distance || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    const totalCost = (distance * costPerKilometer) + (weight === defaultWeight ? defaultWeightCost : weight * costPerKilometer);
    document.getElementById("result").innerText = `Total Delivery Cost: ${totalCost} EGP`;
}
