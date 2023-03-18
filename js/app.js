const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const hh = document.querySelector('.hour')
const mm = document.querySelector('.minutes')
const ss = document.querySelector('.seconds')

const formatDate = (date) => {
  return (date < 10) ? `0${date}` : date;
}

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  secondHand.style.transform = `rotate(${((seconds / 60) * 360) + 90}deg)`;
  minHand.style.transform = `rotate(${((minutes / 60) * 360) + 90}deg)`;
  hourHand.style.transform = `rotate(${((hour / 60) * 360) + 90}deg)`;

  hh.innerHTML = formatDate(hour);
  mm.innerHTML = formatDate(minutes);
  ss.innerHTML = formatDate(seconds);
}

setInterval(setDate, 1000);