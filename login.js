function handleLogin(event) {
    event.preventDefault();  // منع إعادة التحميل

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // تحقق بسيط (يمكن تغييره لاحقاً ليتحقق من قاعدة بيانات أو نظام أكثر أماناً)
    if (username === "hazem" && password === "123456") {
        window.location.href = "home.html";  // تحويل إلى صفحة التطبيق الرئيسية
    } else {
        errorMessage.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
        errorMessage.style.display = "block";
    }
}
