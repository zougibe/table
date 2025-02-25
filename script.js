document.getElementById("addLessons").addEventListener("click", function () {
  var tableBody = document.querySelector("table tbody");

  var lessons = parseInt(prompt("كام حصة موجودة ف الجدول؟"));

  if (isNaN(lessons) || lessons <= 0) {
    alert("ادخل رقم صحيح.");
    return;
  }

  for (var i = 0; i < lessons; i++) {
    let day, time, subject, description;

    // Validate Day Input
    do {
      day = prompt(`ادخل يوم المادة ${i + 1} (مثال: الاثنين):`);
      if (day === null) return; // Exit option
      day = day.trim();
    } while (!/^[\u0600-\u06FFa-zA-Z]{3,10}$/.test(day));

    day = day.charAt(0).toUpperCase() + day.slice(1);

    // Validate Time Input
    do {
      time = prompt(`ادخل ساعة المادة ${i + 1} (مثال: 10:00 AM):`);
      if (time === null) return;
      time = time.trim();
    } while (!/^\d{1,2}:\d{2}\s?(AM|PM|ص|م)?$/i.test(time));

    // Validate Subject Input
    do {
      subject = prompt(`ادخل اسم المادة ${i + 1} (مثال: رياضيات):`);
      if (subject === null) return;
      subject = subject.trim();
    } while (!/^[\u0600-\u06FFa-zA-Z\s]{3,20}$/.test(subject));

    // Description Input (optional)
    description = prompt(`اضافة وصف اذا كان موجود ${i + 1} (اختياري):`) || "لا يوجد وصف";
    description = description.trim();

    // Append Row to Table
    let row = tableBody.insertRow();
    row.insertCell(0).textContent = day;
    row.insertCell(1).textContent = time;
    row.insertCell(2).textContent = subject;
    row.insertCell(3).textContent = description;
  }

  alert("تم إنشاء جدول الحصص بنجاح!");
});
