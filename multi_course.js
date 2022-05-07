var names = [];
var comments = document.querySelectorAll('.comment');
var forFlutter = /\bI want to learn flutter\b/i;
var forPython = /\bI want to learn python\b/i;
var forHacking = /\bI want to learn hacking\b/i;

comments.forEach(comment => {
    var commentVal = comment.querySelector('p').innerText;
    var name = comment.querySelector("span [itemprop='name']").innerText;
    var url = comment.querySelector("[itemprop='url']").getAttribute('href');
    if (forFlutter.test(commentVal) || forPython.test(commentVal) || forHacking.test(commentVal)) {
        var exists = names.some(existingName => existingName.name == name && existingName.url == url)
        if (!exists) {
            names.push({
                name: name,
                url: url,
                course: forFlutter.test(commentVal) ? 'Flutter' : forPython.test(commentVal) ? 'Python' : 'Hacking',
            });
        }
    };
});

var flutterParticipants = names.filter(name => name.course == 'Flutter');
var pythonParticipants = names.filter(name => name.course == 'Python');
var hackingParticipants = names.filter(name => name.course == 'Hacking');


var flutterWinner = flutterParticipants[Math.floor(Math.random() * flutterParticipants.length)];
var pythonWinner = pythonParticipants[Math.floor(Math.random() * pythonParticipants.length)];
var hackingWinner = hackingParticipants[Math.floor(Math.random() * hackingParticipants.length)];

console.log('Congrats! ' + flutterWinner.name + ' on winning Dart & Flutter & GetX Master Class, Build Android & iOS app  Course Giveaway ! 🎉🔥');
console.log(flutterWinner.url)

console.log('Congrats! ' + pythonWinner.name + ' on winning 100 Days of Code: The Complete Python Pro Bootcamp for 2022  Course Giveaway ! 🎉🔥');
console.log(pythonWinner.url)

console.log('Congrats! ' + hackingWinner.name + ' on winning Complete Ethical Hacking Bootcamp 2022: Zero to Mastery  Course Giveaway ! 🎉🔥');
console.log(hackingWinner.url);