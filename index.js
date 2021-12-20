random = 100_000_000 + Math.floor(Math.random() * 900_000_000)

function set() {
    visits.innerHTML = `Over ${random} visits and counting... Literally...`
}

function increment() {
    set();
    

    random += Math.floor(Math.random() * 100);

    setTimeout(increment)
}

set();

setTimeout(increment, 50)
