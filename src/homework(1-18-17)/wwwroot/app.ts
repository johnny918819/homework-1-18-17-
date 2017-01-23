let articles = [
    "Two teenage girls hospitalised after Whatsapp message unleashed 'Satanic possession'!", 
    "ALIENS took my eggs to create ET-human hybrids, claims ‘abducted woman’",
    "Are YOU prepared? Zombie outbreak could wipe out humanity in 100 DAYS, experts reveal"
]


let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    alert(articles[Math.floor(Math.random() * 3)]);
});

let things = [
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true
];
for(i = ""; i < things.length; i++) {
    console.log(`${i}`);
}