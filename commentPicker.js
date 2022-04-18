var names = [{
    // Random value in 0th index because name in 0th index is never returned 
    name: "random name",
    url: "Profile url",
}];
var comments = document.querySelectorAll('.comment');

comments.forEach(comment => {
    var commentVal = comment.querySelector('p').innerText;
    var name = comment.querySelector("span [itemprop='name']").innerText;
    var url = comment.querySelector("[itemprop='url']").getAttribute('href');
    if (commentVal.includes('I want this')) {
        var exists = names.some(existingName => existingName.name == name && existingName.url == url)
        if (!exists) {
            names.push({
                name: name,
                url: url,
            });
        }
    };
});

var winner = names[Math.floor(Math.random() * names.length)];
console.log('Congrats! ' + winner.name + ' on winning The Complete JavaScript Course 2022: From Zero to Expert! Udemy Course Giveaway ! 🎉🔥');;
winner.url