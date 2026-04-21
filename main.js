const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const clock = () => {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  hour.textContent = String(h).padStart(2, '0');
  min.textContent = String(m).padStart(2, '0');
  sec.textContent = String(s).padStart(2, '0');
};

clock();
setInterval(clock, 1000);
