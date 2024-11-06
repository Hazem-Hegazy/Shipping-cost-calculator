const costPerKilometer = 3; // تكلفة كل كيلومتر
const defaultWeight = 5; // الوزن الافتراضي بالكيلوغرام
const defaultWeightCost = 5; // تكلفة الوزن الافتراضي
const fragileFee = 10; // رسوم المنتجات الحساسة
const perishableFee = 15; // رسوم المنتجات القابلة للتلف

function calculateCost() {
    // جلب المسافة والوزن ونوع المنتج من الإدخالات
    const distance = parseFloat(document.getElementById("distance").value);
    const weight = parseFloat(document.getElementById("weight").value) || defaultWeight; // استخدام الوزن الافتراضي إذا لم يُدخل

    // التحقق من صحة المسافة والوزن
    if (!distance || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }
    if (weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    // حساب التكلفة الأساسية
    let totalCost = (distance * costPerKilometer) + (weight === defaultWeight ? defaultWeightCost : weight * costPerKilometer);

    // إضافة رسوم المنتج بناءً على نوعه
    const productType = document.getElementById("productType").value;
    if (productType === "fragile") {
        totalCost += fragileFee;
    } else if (productType === "perishable") {
        totalCost += perishableFee;
    }

    // عرض النتيجة
    document.getElementById("result").style.opacity = "1";
    document.getElementById("result").innerText = `Total Delivery Cost: ${totalCost} EGP`;
}
