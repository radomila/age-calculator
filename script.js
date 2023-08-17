function getDate() {
  let day = document.getElementById('day').value;
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;

  if (!day || !month || !year) {
    document.getElementById(
      'age'
    ).innerHTML = `No value was entered. Sorry &#128532`;
    return;
  }

  let birthDate = new Date(year, month - 1, day);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth();
  let birthYear = birthDate.getFullYear();

  let today = new Date();
  let todayDay = today.getDate();
  let todayMonth = today.getMonth();
  let todayYear = today.getFullYear();

  let m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day > todayDay) {
    todayDay = todayDay + m[todayMonth - 1];
  }

  if (month > todayMonth) {
    todayMonth = todayMonth + 12;
    todayYear = todayYear - 1;
  }

  let dayDiff = Math.abs(todayDay - birthDay);
  let monthDiff = Math.abs(todayMonth - birthMonth);
  let yearDiff = Math.abs(todayYear - birthYear);

  document.getElementById(
    'age'
  ).innerHTML = `Your age is ${yearDiff} years, ${monthDiff} months and ${dayDiff} days. &#129327`;
}
