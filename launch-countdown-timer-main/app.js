const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
  const items = document.querySelectorAll('.timer h1');
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  
  const futureDate = new Date(tempYear, tempMonth, tempDay + 14, 24, 12, 0);

  
  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureDate.getTime() - today;
  
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
  
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return `0${item}`;
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  }
  
  let countDown = setInterval(getRemainingTime, 1000);
  getRemainingTime();
  