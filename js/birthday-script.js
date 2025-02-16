function updateAgeCounter() {
  const birthDate = new Date("2024-02-09T19:10:00"); // জন্মতারিখ ও সময়
  const now = new Date(); // বর্তমান সময়

  // মোট সময় পার্থক্য (মিলিসেকেন্ডে)
  let difference = now - birthDate;

  // সঠিক বয়স বের করা
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  // যদি সেকেন্ড ঋণাত্মক হয়, তাহলে ৬০ সেকেন্ড যোগ করে মিনিট কমাই
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  // যদি মিনিট ঋণাত্মক হয়, তাহলে ৬০ মিনিট যোগ করে ঘণ্টা কমাই
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  // যদি ঘণ্টা ঋণাত্মক হয়, তাহলে ২৪ ঘণ্টা যোগ করে দিন কমাই
  if (hours < 0) {
    hours += 24;
    days--;
  }

  // যদি দিন ঋণাত্মক হয়, তাহলে আগের মাসের দিন সংখ্যা যোগ করি
  if (days < 0) {
    let previousMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    months--;
    days += previousMonthDays;
  }

  // যদি মাস ঋণাত্মক হয়, তাহলে এক বছর কমিয়ে ১২ মাস যোগ করি
  if (months < 0) {
    years--;
    months += 12;
  }

  // HTML এ বয়স আপডেট করা
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// প্রতি সেকেন্ডে বয়স আপডেট হবে
setInterval(updateAgeCounter, 1000);