function randint(min, max) {
    d = max - min

    return min + Math.floor(Math.random() * d)
}

function set() {
    visits.innerHTML = `Over <div class='amount'>${random}</div> visits and counting... Literally...`
}

function increment() {
    set();

    random += randint(0, 100);

    setTimeout(increment)
}

random = randint(100_000_000, 900_000_000)

set();

setTimeout(increment, 50)
