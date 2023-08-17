function getDate() {
  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;

  if (!day || !month || !year) {
    document.getElementById(
      'age'
    ).innerHTML = `No value was entered. Sorry &#128532`;
    return;
  }

  const birthDate = new Date(year, month - 1, day);

  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthYear = birthDate.getFullYear();

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const dayDiff = Math.abs(todayDay - birthDay);
  const monthDiff = Math.abs(todayMonth - birthMonth);
  const yearDiff = Math.abs(todayYear - birthYear);

  document.getElementById(
    'age'
  ).innerHTML = `Your age is ${yearDiff} years, ${monthDiff} months and ${dayDiff} days. &#129327`;
}
