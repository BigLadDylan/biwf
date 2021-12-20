function randint(min, max) {
  d = max - min;

  return min + Math.floor(Math.random() * d);
}

function set() {
  visits.innerHTML = `Over ${random} visits and counting... Literally...`;
}

function increment() {
  set();

  random += randint(0, 100);

  setTimeout(increment);
}

random = randint(100, _000_000, 900, _000_000);

set();

setTimeout(increment, 50);
