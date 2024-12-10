var table = document.querySelector("table tbody");

var lessons = parseInt(prompt("كام حصة موجودة ف الجدول؟"));

if (isNaN(lessons) || lessons <= 0) {
  alert("ادخل رقم صحيح.");
} else {
  for (var i = 0; i < lessons; i++) {
    let day, time, subject, description;

    // Validate Day Input
    do {
      day = prompt("ادخل يوم المادة " + (i + 1) + " (e.g., Monday):");
    } while (
      !day || day.trim().length < 3 || day.trim().length > 10 || !isNaN(day)
    );
    day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);

    // Validate Time Input
    do {
      time = prompt(
        "ادخل ساعة المادة " + (i + 1) + " (e.g., 10:00 AM):"
      );
    } while (!time || time.trim() === "");

    // Validate Subject Input
    do {
      subject = prompt(
        "ادخل اسم المادة " + (i + 1) + " (e.g., Math):"
      );
    } while (
      !subject || subject.trim().length < 3 || subject.trim().length > 20
    );

    // Description Input (optional)
    description = prompt(
      "اضافة وصف اذا كان موجود " + (i + 1) + " (optional):"
    );
    description = description ? description.trim() : "No description provided";

    // Append Row to Table
    table.innerHTML += `<tr>
      <td>${day}</td>
      <td>${time}</td>
      <td>${subject}</td>
      <td>${description}</td>
    </tr>`;
  }
}

alert("Your lessons schedule has been successfully created!");
