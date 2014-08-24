var app = {};
app.x = 0;
app.y = 0;
app.j = 0;
app.a = false;
app.b = false;
app.c = false;
document.getElementById("optionA").style.display = 'none';
document.getElementById("optionB").style.display = 'none';
document.getElementById("optionC").style.display = 'none';


app.quiz = function (question, answerA, answerB, answerC) {

    this.question = question;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
};
app.q0 = new app.quiz("What is my name", "Brooks", "Bob", "Fred")
app.q1 = new app.quiz("What is my sons name", "Brooks", "Wesley", "Fred")
app.q2 = new app.quiz("What is my Dads name", "Brooks", "Bob", "Tom")
app.q3 = new app.quiz("What is my Wifes name", "Annie", "Bob", "Fred")
app.q4 = new app.quiz("What is my fishes name", "Brooks", "cannonball", "Fred")

app.output = function (x, y) {


    var holder = "";

    holder += "<p>";
 
    if (app.x === 0) {
        holder += app.q0.question;
        holder += "<br />"
        holder += "A: " + app.q0.answerA;
        holder += "<br />"
        holder += "B: " + app.q0.answerB;
        holder += "<br />"
        holder += "C: " + app.q0.answerC;

        } else if (app.x === 1) {
        holder += app.q1.question;
        holder += "<br />"
        holder += "A: " + app.q1.answerA;
        holder += "<br />"
        holder += "B: " + app.q1.answerB;
        holder += "<br />"
        holder += "C: " + app.q1.answerC;

    } else if (app.x === 2) {
        holder += app.q2.question;
        holder += "<br />"
        holder += "A: " + app.q2.answerA;
        holder += "<br />"
        holder += "B: " + app.q2.answerB;
        holder += "<br />"
        holder += "C: " + app.q2.answerC;

    } else if (app.x === 3) {
        holder += app.q3.question;
        holder += "<br />"
        holder += "A: " + app.q3.answerA;
        holder += "<br />"
        holder += "B: " + app.q3.answerB;
        holder += "<br />"
        holder += "C: " + app.q3.answerC;

    } else {
        holder += app.q4.question;
        holder += "<br />"
        holder += "A: " + app.q4.answerA;
        holder += "<br />"
        holder += "B: " + app.q4.answerB;
        holder += "<br />"
        holder += "C: " + app.q4.answerC;

    };




    document.getElementById("optionA").style.display = '';
    document.getElementById("optionB").style.display = '';
    document.getElementById("optionC").style.display = '';

    if (app.x >= 5) {

        document.getElementById("optionA").style.display = 'none';
        document.getElementById("optionB").style.display = 'none';
        document.getElementById("optionC").style.display = 'none';
        document.getElementById("next").style.display = 'none';
        holder = "<p>"
        holder += "<h1>You are done!</h1>"
        holder += "<br />"
        holder += "<h2>You got " + app.y;
        holder += " correct!!!!</ h2>"

    }

    holder += "</p>";
    document.getElementById("question").innerHTML = holder;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("next").innerHTML = "Next";
    return app.x;
};

app.answerA = function (x, y) {
    var holder = "";
    if (app.x === 0 || app.x === 3) {
        holder = "You Are correct!!!!";
        app.y++
    } else {
        holder = "Nope!"
    }

    
    document.getElementById("answer").innerHTML = holder;
    document.getElementById("optionA").style.display = 'none';
    document.getElementById("optionB").style.display = 'none';
    document.getElementById("optionC").style.display = 'none';

    app.x++;
    app.progress();
    return app.x;
    return app.y;

 
};
app.answerB = function (x, y) {
    var holder = "";
    if (app.x === 1 || app.x === 4) {
        holder = "You Are correct!!!!";
        app.y++;
    } else {
        holder = "Nope!"
    }


    document.getElementById("answer").innerHTML = holder;
    document.getElementById("answer").innerHTML = holder;
    document.getElementById("optionA").style.display = 'none';
    document.getElementById("optionB").style.display = 'none';
    document.getElementById("optionC").style.display = 'none';
    app.x++;
    app.progress();
    return app.x;
    return app.y;

};
app.answerC = function (x, y) {
    var holder = "";
    if (app.x === 2) {
        holder = "You Are correct!!!!";
        app.y++;
    } else {
        holder = "Nope!"
    }


    document.getElementById("answer").innerHTML = holder;
    document.getElementById("answer").innerHTML = holder;
    document.getElementById("optionA").style.display = 'none';
    document.getElementById("optionB").style.display = 'none';
    document.getElementById("optionC").style.display = 'none';
    app.x++;
    app.progress();
    return app.x;
    return app.y;

};

app.progress = function (x) {
    
    app.j = app.x * 20;
    document.getElementById("prog123").style.width = app.j + '%';
    document.getElementById("prog123").innerHTML = app.j + '%';
}