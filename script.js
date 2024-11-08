const costPerKilometer = 3; // تكلفة كل كيلومتر
const defaultWeight = 5; // الوزن الافتراضي بالكيلوغرام
const defaultWeightCost = 5; // تكلفة الوزن الافتراضي
const fragileFee = 10; // رسوم المنتجات الحساسة
const perishableFee = 15; // رسوم المنتجات القابلة للتلف

function calculateCost() {
    // جلب المسافة والوزن ونوع المنتج من الإدخالات
    const distance = parseFloat(document.getElementById("distance").value);
    const weight = parseFloat(document.getElementById("weight").value) || defaultWeight; // استخدام الوزن الافتراضي إذا لم يُدخل
    const productType = document.getElementById("productType").value;
    const errorMessage = document.getElementById("error-message");

    // إخفاء رسالة الخطأ في البداية
    errorMessage.style.display = "none";

    // التحقق من صحة المسافة
    if (!distance || distance <= 0) {
        errorMessage.innerText = "Please enter a valid distance.";
        errorMessage.style.display = "block";
        return;
    }

    // حساب التكلفة الأساسية
    let totalCost = (distance * costPerKilometer) + (weight === defaultWeight ? defaultWeightCost : weight * costPerKilometer);

    // إضافة رسوم إضافية حسب نوع المنتج
    if (productType === "food") {
        totalCost += fragileFee;
    } else if (productType === "perishable_or_fragile") {
        totalCost += perishableFee;
    }

    // عرض النتيجة النهائية
    document.getElementById("result").style.opacity = "1";
    document.getElementById("result").innerText = `Total Delivery Cost: ${totalCost} EGP`;
}
