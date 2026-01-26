/*Made by: https://github.com/IseeJ
Please don't use my code without permission!*/

document.addEventListener("DOMContentLoaded", function () {

    let resultPage = document.getElementById("result-page");

    function checkAndTriggerGif() {
        if (resultPage.style.display !== "none") {
            //let randomInterval = Math.floor(Math.random() * 70000) + 10000;
            let randomInterval = Math.floor(Math.random() * 10000) + 10000;
            setTimeout(showFloatingGif, randomInterval);
        }
    }

    function showFloatingGif() {
        if (resultPage.style.display === "none") return;

        let gif = document.createElement("img");
        gif.src = "Sweetsona/cupid.gif";
        gif.style.position = "absolute";
        gif.style.top = Math.random() * (window.innerHeight - 150) + "px";
        gif.style.right = "-200px";
        gif.style.width = "150px";
        gif.style.cursor = "pointer";
        gif.style.animation = "floatUpDown 3s ease-in-out infinite";

        gif.onclick = function () {
            window.open("https://iseej.github.io/LovePawsona/new.html", "_blank");
        };
        document.body.appendChild(gif);

        setTimeout(() => {
            gif.style.transition = "right 7s linear";
            gif.style.right = window.innerWidth + "px";
        }, 100);

        setTimeout(() => {
            gif.remove();
        }, 6000);
        checkAndTriggerGif();
    }

    let observer = new MutationObserver(checkAndTriggerGif);
    observer.observe(resultPage, { attributes: true, attributeFilter: ["style"] });

    let style = document.createElement("style");
    style.innerHTML = `
        @keyframes floatUpDown {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); } 
            100% { transform: translateY(0px); } 
        }
    `;
    document.head.appendChild(style);
});


document.getElementById('start-button1').addEventListener('click', function () {
    const notifSound = document.getElementById('notifSound');
    notifSound.play();
    document.getElementById('interm').style.display = 'none';
    document.getElementById('phone-screen').style.display = 'flex';
});


document.getElementById('start-button2').addEventListener('click', function () {
    const notifSound = document.getElementById('notifSound');
    notifSound.play();
    document.getElementById('interm').style.display = 'none';
    document.getElementById('phone-screen').style.display = 'flex';
});
let currentMessageIndex = 0;
const scores = { B: 0, S: 0, W: 0, G: 0, P: 0, D: 0, A: 0, R: 0 };
const dialogue = [
    // 0 (0)
    {
        speaker: 'bot',
        text: ["*Notification from yours truly*"],
        choices: [
            { id: 1, text: '*Open*', type: 'A', weight: 1, next: 2, followUpText: [] },
            { id: 2, text: '*Ignore it*', type: 'R', weight: 1, next: 1, followUpText: [] },
            { id: 3, text: 'DEBUG', type: 'O', weight: 1, next: 47, followUpText: [] },
        ]
    },
    // 1
    {
        speaker: 'bot',
        text: ['*Oh come on! You remember me! From last year?!*'],
        choices: [
            { id: 1, text: 'FINE I\'ll open it', type: 'O', weight: 1, next: 2, followUpText: [] },
        ]
    },

    // 2 (1)
    {
        speaker: 'bot',
        text: ['Hey hey heyyy', 'You found my bakery!!', "It's Cupid, your favourite love pâtissier, ready to take your order~", 'Missed me? ,:3'],
        choices: [
            { id: 1, text: 'Nah, not really', type: 'G', weight: 1, next: 3, followUpText: [] },
            { id: 2, text: 'Aw ofc i missed you!', type: 'P', weight: 1, next: 4, followUpText: [] },
            { id: 3, text: 'Sure, what do you need?', type: 'D', weight: 1, next: 5, followUpText: [] },
            { id: 4, text: 'just a little...I think', type: 'G', weight: 1, next: 3, followUpText: [] },
        ]
    },


    // 3 (2.1)
    {
        speaker: 'bot',
        text: [';( ouch', '...', "fineee I'll be profesh", "I'm in charge of collecting some data to pick THE perfect dessert for you", 'cupid\'s duty, 12 questions, you know the drill, ready?'],
        choices: [
            { id: 1, text: 'yes, plz proceed', type: 'R', weight: 1, next: 6, followUpText: [] },
            { id: 2, text: 'YESSS LETS GOOOOO IM READYYYY', type: 'A', weight: 1, next: 6, followUpText: [] }
        ]
    },

    // 4 (2.2)
    {
        speaker: 'bot',
        text: ['AWWWW missed you tooo', 'Let\'s seeee', "I'm in charge of collecting some data to make THE perfect dessert for you", 'cupid\'s duty, 12 questions, you know the drill, ready?'],
        choices: [
            { id: 1, text: 'yes, go on', type: 'R', weight: 1, next: 6, followUpText: [] },
            { id: 2, text: 'YESSS LETS GOOOOO', type: 'A', weight: 1, next: 6, followUpText: [] }
        ]
    },

    // 5 (2.3)
    {
        speaker: 'bot',
        text: ['Straightttt to the point! I LIKE it!', 'lemme explain', "I'm in charge of collecting some data to make THE perfect sweets for you", 'cupid\'s duty, 12 questions, blah blah blah, you know the drill, ready?'],
        choices: [
            { id: 1, text: 'yes, Im ready', type: 'R', weight: 1, next: 6, followUpText: [] },
            { id: 2, text: 'YESSS LETS GOOOOO', type: 'A', weight: 1, next: 6, followUpText: [] }
        ]
    },


    // 6 (3)
    {
        speaker: 'bot',
        text: ['LOVEE the spirit, how \'bout some ice breaker huh?', 'ahem', 'roses are red...', 'violets are blue...'],
        choices: [
            { id: 1, text: 'I\'ll bring you snacks and a warm blankie too.', type: 'S', weight: 1, next: 7, followUpText: [] },
            { id: 2, text: 'This makes me nervous... but hi, it\'s good to see you.', type: 'W', weight: 1, next: 7, followUpText: [] },
            { id: 3, text: 'You, Me, A date. Pick you up at two?', type: 'B', weight: 1, next: 7, followUpText: [] }
        ]
    },

    // 7 (4)
    {
        speaker: "bot",
        text: ["smoooooooth, what a poet you are! how charming!", "So... any updates in your love life???", "Did my Cupid powers finally work?? huh huuuuhhh"],
        choices: [
            { id: 1, text: "nope, still single", type: "S", weight: 1, next: 8, followUpText: [] },
            { id: 2, text: "I'm in a relationship", type: "B", weight: 1, next: 9, followUpText: [] },
            { id: 3, text: "Well.. There's someone..", type: "S", weight: 1, next: 9, followUpText: [] },
            { id: 4, text: "Why should I tell you?!", type: "W", weight: 1, next: 10, followUpText: [] },
        ]
    },


    // 8 (5.1)
    {
        speaker: 'bot',
        text: ["Well that's ok!", "I'm here to change that! (if you wan ofc)", "1) What kinda love are you hoping for, if I may ask...?"],
        choices: [
            { id: 1, text: 'the ride or die type, even when stuff gets messy', type: 'D', weight: 1, next: 11, followUpText: [] },
            { id: 2, text: 'total chaos, total fun. never a dull moment', type: 'P', weight: 1, next: 11, followUpText: [] },
            { id: 3, text: 'something chill and solid. no drama, just real', type: 'G', weight: 1, next: 11, followUpText: [] },
        ]
    },
    // 9 (5.2) BRANCH HERE
    {
        speaker: 'bot',
        text: ["Ohooo, now we're talkin!!", "1) How’s it feeling so far?"],
        choices: [
            { id: 1, text: 'like being held firmly through storm AND sunshine', type: 'D', weight: 1, next: 27, followUpText: [] },
            { id: 2, text: 'like a rollercoaster! Chaotic, thrilling, no boring moments', type: 'P', weight: 1, next: 27, followUpText: [] },
            { id: 3, text: 'like a safe place. Stable, solid, no nonsense', type: 'G', weight: 1, next: 27, followUpText: [] },
        ]
    },
    // 10 (5.3)
    {
        speaker: 'bot',
        text: ["Keeping secrets, huh", "Fine—then tell me this:", "1) When love hits… what do you want it to feel like?"],
        choices: [
            { id: 1, text: 'like knowing someone’s got my back, no matter what', type: 'D', weight: 1, next: 11, followUpText: [] },
            { id: 2, text: 'something kinda wild, spontaneous. but like... in a fun way', type: 'P', weight: 1, next: 11, followUpText: [] },
            { id: 3, text: 'a soft couch, oversized hoodie, fluffy socks. Simple & Comfortable', type: 'G', weight: 1, next: 11, followUpText: [] },
        ]
    },
    // 11 (6)
    {
        speaker: "bot",
        text: ["You deserve that kinda love, no question.", "2) Where do you think it's most likely to find you?"],
        choices: [
            { id: 1, text: "Probably out doing something like hiking, book club, concert, etc.", type: "A", type2: "G", weight: 1, next: 13, followUpText: [] },
            { id: 2, text: "Somewhere familiar, like workplace, school", type: "R", type2: "D", weight: 1, next: 13, followUpText: [] },
            { id: 3, text: "Networking event, party, or through mutual friends", type: "A", type2: "P", weight: 1, next: 13, followUpText: [] },
            { id: 4, text: "dunno...kinda hope they'd just spawn right in front of me", type: "R", type2: "G", weight: 1, next: 13, followUpText: [] },
            { id: 5, text: "Dude that's your job as MY Cupid", type: "P", weight: 1, next: 12, followUpText: [] },
        ]
    },
    // 12 (6.1)
    {
        speaker: "bot",
        text: ["Oh Really?", "...", "BEEEEP! Wrong answer", "Give it a guess, you menace"],
        choices: [
            { id: 1, text: "out and about, doing stuffs, pretending to be busy", type: "A", weight: 1, next: 13, followUpText: [] },
            { id: 2, text: "just same old place I HAVE to be at every dayy", type: "R", weight: 1, next: 13, followUpText: [] },
            { id: 3, text: "party + a good friend who knows a lot of ppl = success", type: "A", weight: 1, next: 13, followUpText: [] },
            { id: 4, text: "if only i have a more talented Cupid...", type: "R", weight: 1, next: 13, followUpText: ["I'd have gotten one delivered at my doorsteps already!!"] },
        ]
    },

    // 13 (7)
    {
        speaker: "bot",
        text: ["Yeh, if you say so", "OoOoOOoh, our data said that someone's into you", "3) How do you wish they show it?"],
        choices: [
            { id: 1, text: "Pull me aside and just say it already!", type: "B", weight: 1, next: 14, followUpText: [] },
            { id: 2, text: "Just stick around. Be there. I’ll pick up on it.", type: "S", weight: 1, next: 14, followUpText: [] },
            { id: 3, text: "Be very careful and patient, I need time, like a lot of time", type: "W", weight: 1, next: 14, followUpText: [] },
            { id: 4, text: "Psh, I already clocked it. I’ll probably just go tell them first", type: "B", weight: 1, next: 14, followUpText: [] },
        ]
    },


    // 14 (8)
    {
        speaker: "bot",
        text: ["Ah, that sounds like you!", "4) Any idea what would start a strong connection?"],
        choices: [
            { id: 1, text: "Shared interests, goals in life", type: "B", weight: 1, next: 15, followUpText: [] },
            { id: 2, text: "Friendship turning into something more.", type: "S", weight: 1, next: 15, followUpText: [] },
            { id: 3, text: "A safe comfort zone for both of us", type: "W", weight: 1, next: 15, followUpText: [] },
            { id: 4, text: "Clear chemistry, strong sparks", type: "B", weight: 1, next: 15, followUpText: [] },
            { id: 5, text: "Understanding boundaries and respect", type: "W", weight: 1, next: 15, followUpText: [] },
            { id: 6, text: "Slow-burn connection, no rush", type: "S", weight: 1, next: 15, followUpText: [] },
        ]
    },
    // 15 (9) 
    {
        speaker: "bot",
        text: ["Adorable", "5) Your type is someone who..."],
        choices: [
            { id: 1, text: "never failed to surprise me. Keeping it fun, energetic, and a bit chaotic!", type: "P", weight: 1, next: 16, followUpText: [] },
            { id: 2, text: "pay attention, remember the small things. Make me feel seen :)", type: "D", weight: 1, next: 16, followUpText: [] },
            { id: 3, text: "take good care of me, put in the effort to keep me happy, being there, always.", type: "G", weight: 1, next: 16, followUpText: [] },
        ]
    },


    // 16 (10) 
    {
        speaker: "bot",
        text: ["Stawppp im swooning", "OMG~ they texted you~", "6) Which one got you blushing giggling kicking your feet"],
        choices: [
            { id: 1, text: "You’ve been on my mind all day and I’m not even trying to stop it", type: "D", type2: "B", weight: 1, next: 17, followUpText: [] },
            { id: 2, text: "BABEEE THIS IS SO YOUUU *cat memes*", type: "P", type2: "S", weight: 1, next: 17, followUpText: [] },
            { id: 3, text: "There’s food waiting, and your laundry’s folded. Come home safe, ok?", type: "G", type2: "S", weight: 1, next: 17, followUpText: [] },
            { id: 4, text: "I miss you sooooo muchhh why aren't you HERE rnnn", type: "P", type2: "W", weight: 1, next: 17, followUpText: [] },
            { id: 5, text: "How's your day? Do you need anything?", type: "G", type2: "W", weight: 1, next: 17, followUpText: [] },
            { id: 6, text: "Thinking 'bout you ;) see you in five, sweetheart", type: "D", type2: "S", weight: 1, next: 17, followUpText: [] },
        ]
    },
    // 17 (11)
    {
        speaker: "bot",
        text: ["just in case...", "7) How do you handle awkward silences?"],
        choices: [
            { id: 1, text: "silently hoping they would say something first", type: "W", weight: 1, next: 18, followUpText: [] },
            { id: 2, text: "start a random new topic like nothing happened. I got us", type: "B", weight: 1, next: 18, followUpText: [] },
            { id: 3, text: "see the vibes and go with the flow", type: "S", weight: 1, next: 18, followUpText: [] },
        ]
    },
    // 18 (12)
    {
        speaker: "bot",
        text: ["Good strategy, I'd do that too", "Say you're on a date", "8) THIS would win your heart, no doubt!"],
        choices: [
            { id: 1, text: "Do something nice without being asked", type: "G", weight: 1, next: 19, followUpText: [] },
            { id: 2, text: "Listen, support me, and actually care", type: "D", weight: 1, next: 20, followUpText: [] },
            { id: 3, text: "Make me laugh so hard I snort", type: "P", weight: 1, next: 21, followUpText: [] },
            { id: 4, text: "Dedicate their time for me, no distractions", type: "D", weight: 1, next: 22, followUpText: [] },
            { id: 5, text: "Give me random little gifts, surprises", type: "G", weight: 1, next: 23, followUpText: [] },
            { id: 6, text: "Casual touches that feel safe and warm", type: "P", weight: 1, next: 24, followUpText: [] },
        ]
    },
    // 19 (13.1)
    {
        speaker: "bot",
        text: ["9) What kind of nice are we talking?"],
        choices: [
            { id: 1, text: "Plan cute dates for me", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 2, text: "Do errands or chores so I can relax", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 3, text: "Remembers things I mentioned weeks ago and acts on it", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 4, text: "Shows up with snacks, a blanket, and no expectations", type: "R", weight: 1, next: 25, followUpText: [] },
        ]
    },
    // 20 (13.2)
    {
        speaker: "bot",
        text: ["9) You're venting, all you want is for them to..."],
        choices: [
            { id: 1, text: "Listen quietly and let me get it all out", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 2, text: "Hype me up no matter what! And feed me, I need to be fed.", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 3, text: "Drops everything and come stay by my side", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 4, text: "Distract me, make me laugh it off, but remember every detail later", type: "A", weight: 1, next: 25, followUpText: [] },
        ]
    },
    // 21 (13.3)
    {
        speaker: "bot",
        text: ["9) Their humor better looks like..."],
        choices: [
            { id: 1, text: "Doing silly stuffs together, zero thoughts, all love", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 2, text: "Playful banter, roasting each other (affectionately)", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 3, text: "Inside jokes no one else gets", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 4, text: "Being goofy and chaotic just to see my reaction", type: "R", weight: 1, next: 25, followUpText: [] },
        ]
    },
    // 22 (13.4)
    {
        speaker: "bot",
        text: ["9) When they give you their time, you expect them to..."],
        choices: [
            { id: 1, text: "Sweep me off my feet somewhere nice and pamper me", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 2, text: "Plan a fun date together, hanging out and having fun", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 3, text: "Just be by my side, doing our own things", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 4, text: "Always there when I need them, anytime, no questions", type: "R", weight: 1, next: 25, followUpText: [] },
        ]
    },
    // 23 (13.5)
    {
        speaker: "bot",
        text: ["9) Your fav kind of surprise is...?"],
        choices: [
            { id: 1, text: "Weird handmade gifts with big meanings", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 2, text: "Flowers bouquet and nice dinner", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 3, text: "Taking me to place I mentioned once (thought they forgot!)", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 4, text: "A spontaneous weekend getaway after a long week", type: "A", weight: 1, next: 25, followUpText: [] },
        ]
    },
    // 24 (13.6)
    {
        speaker: "bot",
        text: ["9) You would melt immediately if they..."],
        choices: [
            { id: 1, text: "Hold my hand most (all) of the time", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 2, text: "Rest their head on my shoulder randomly", type: "R", weight: 1, next: 25, followUpText: [] },
            { id: 3, text: "Hug me from behind when I least expect it", type: "A", weight: 1, next: 25, followUpText: [] },
            { id: 4, text: "Playfully touch my arm or shoulder while talking", type: "A", weight: 1, next: 25, followUpText: [] },
        ]
    },
    // 25 (14) --> 10 AR+GDP
    {
        speaker: "bot",
        text: ["okayy im blushinggg", "10) Date ideas for this Valentines'??"],
        choices: [
            { id: 1, text: "Cozy night in, matching pajamas, movies, wrapped in the same blanket", type: "R",type2:"G", weight: 1, next: 26, followUpText: [] },
            { id: 2, text: "Chaotic surprise date, fancy dinner, beach walk, then karaoke at some point?", type: "A",type2:"P", weight: 1, next: 26, followUpText: [] },
            { id: 3, text: "Fun day full of silly little crafts, and way too many heart-shaped cookies", type: "R",type2:"P", weight: 1, next: 26, followUpText: [] },
            { id: 4, text: "Whatever they want, I'll make it happen :)", type: "A",type2:"D", weight: 1, next: 26, followUpText: [] },
        ]
    },
    // 26 (15) --> 11 BSW
    {
        speaker: "bot",
        text: ["11) It's important that your future partner can guarantee you..."],
        choices: [
            { id: 1, text: "Loyalty, passion, enough energy to match mine", type: "B", weight: 1, next: 42, followUpText: [] },
            { id: 2, text: "Consistency, warm hugs, 24/7 support (emotionally and etc.)", type: "S", weight: 1, next: 42, followUpText: [] },
            { id: 3, text: "Understanding, soft reassurances, and always taking care of me", type: "W", weight: 1, next: 42, followUpText: [] },
            { id: 4, text: "Spontaneity, big gesture, and a lot of surprises", type: "B", weight: 1, next: 42, followUpText: [] },
            { id: 5, text: "Respect for my personal space and time, soft quiet love, and a safe zone", type: "W", weight: 1, next: 42, followUpText: [] },
        ]
    },

    ////////////
    /* BRANCH */
    ////////////

    // 27 (6)
    {
        speaker: "bot",
        text: ["You deserve that kinda love, no question.", "2) Where did you find your person hm?"],
        choices: [
            { id: 1, text: "I was out doing some activities like hiking, book club, concert, etc.", type: "A", type2: "G", weight: 1, next: 28, followUpText: [] },
            { id: 2, text: "We met at workplace/school", type: "R", weight: 1, type2: "D", next: 28, followUpText: [] },
            { id: 3, text: "Networking event, party, mutual friends", type: "A", type2: "P", weight: 1, next: 28, followUpText: [] },
            { id: 4, text: "We just kinda found each other tbh, it's meant to be", type: "R",  type2: "G", weight: 1, next: 28, followUpText: [] },
            { id: 5, text: "Online/Dating Apps", type: "R", type2:"P", weight: 1, next: 28, followUpText: [] },
        ]
    },

    // 28 (7)
    {
        speaker: "bot",
        text: ["Awesomee", "3) So, how did it happen?", "Spill the teaaaa"],
        choices: [
            { id: 1, text: "I confessed first, they felt the same.", type: "B", weight: 1, next: 29, followUpText: [] },
            { id: 2, text: "We've been around each other for a while, we bonded well", type: "S", weight: 1, next: 29, followUpText: [] },
            { id: 3, text: "They asked me out, and I said yes!", type: "W", weight: 1, next: 29, followUpText: [] },
            { id: 4, text: "They fell first, I fell harder :)", type: "W", weight: 1, next: 29, followUpText: [] },
        ]
    },
    // 29 (8)
    {
        speaker: "bot",
        text: ["Ah, that sounds like you!", "4) What do you think bring you two together?"],
        choices: [
            { id: 1, text: "Shared interests, goals in life", type: "B", weight: 1, next: 30, followUpText: [] },
            { id: 2, text: "Started from friendship, built up into something more", type: "S", weight: 1, next: 30, followUpText: [] },
            { id: 3, text: "We're each other's safe space", type: "W", weight: 1, next: 30, followUpText: [] },
            { id: 4, text: "Clear chemistry, strong sparks", type: "B", weight: 1, next: 30, followUpText: [] },
            { id: 5, text: "We listen, we understand, communication is the key.", type: "W", weight: 1, next: 30, followUpText: [] },
            { id: 6, text: "Slow-burn connection, no rush", type: "S", weight: 1, next: 30, followUpText: [] },
        ]
    },
    // 30 (9)
    {
        speaker: "bot",
        text: ["Adorable", "5) You’d fall HARD if they just..."],
        choices: [
            { id: 1, text: "never failed to surprise me. Keeping it fun, energetic, and a bit chaotic!", type: "P", weight: 1, next: 31, followUpText: [] },
            { id: 2, text: "pay attention, remember the small things. Make me feel seen :)", type: "D", weight: 1, next: 31, followUpText: [] },
            { id: 3, text: "take good care of me, put in the effort to keep me happy, being present", type: "G", weight: 1, next: 31, followUpText: [] },
        ]
    },
    // 31 (10)
    {
        speaker: "bot",
        text: ["Stawppp now im jealouss, and curious..", "6) The kind of texts you get from them sound like..."],
        choices: [
            { id: 1, text: "You’ve been on my mind all day and I’m not even trying to stop it", type: "D", type2: "B", weight: 1, next: 32, followUpText: [] },
            { id: 2, text: "BABEEE THIS IS SO YOUUU *cat memes*", type: "P", type2: "S", weight: 1, next: 32, followUpText: [] },
            { id: 3, text: "There’s food waiting, and your laundry’s folded. Come home safe, ok?", type: "G", type2: "S", weight: 1, next: 32, followUpText: [] },
            { id: 4, text: "I miss you sooooo muchhh why aren't you HERE rnnn", type: "P", type2: "W", weight: 1, next: 32, followUpText: [] },
            { id: 5, text: "How's your day? Do you need anything?", type: "G", type2: "W", weight: 1, next: 32, followUpText: [] },
            { id: 6, text: "Thinking 'bout you ;) see you in five, sweetheart", type: "D", type2: "S", weight: 1, next: 32, followUpText: [] },
        ]
    },
    // 32 (11)
    {
        speaker: "bot",
        text: ["Okkk, shifting gears a little", "7) When things get a little tense/awkward you..."],
        choices: [
            { id: 1, text: "kinda shut down and wait for them to bring it up. I don't wanna push or make it worse", type: "W", weight: 1, next: 33, followUpText: [] },
            { id: 2, text: "gently steer us somewhere softer, something we can both agree on", type: "S", weight: 1, next: 33, followUpText: [] },
            { id: 3, text: "face it head-on. I'd rather talk it out and fix it than leave things in the air", type: "B", weight: 1, next: 33, followUpText: [] },
        ]
    },

    // 33 (12)
    {
        speaker: "bot",
        text: ["That's the way to go!", "back to happy times~", "8) Things they did that makes you fall in love..."],
        choices: [
            { id: 1, text: "Do something nice without being asked", type: "G", weight: 1, next: 34, followUpText: [] },
            { id: 2, text: "Listen, support me, and actually care", type: "D", weight: 1, next: 35, followUpText: [] },
            { id: 3, text: "Make me laugh so hard I snort", type: "P", weight: 1, next: 36, followUpText: [] },
            { id: 4, text: "Spend a lot of time with me, being together", type: "D", weight: 1, next: 37, followUpText: [] },
            { id: 5, text: "Give me random little gifts. Celebrate important dates.", type: "G", weight: 1, next: 38, followUpText: [] },
            { id: 6, text: "Show affection through physical touches", type: "P", weight: 1, next: 39, followUpText: [] },
        ]
    },

    // 34 (13.1)
    {
        speaker: "bot",
        text: ["9) What kind of nice are we talking?"],
        choices: [
            { id: 1, text: "Plan cute dates for me", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 2, text: "Do errands or chores so I can relax", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 3, text: "Remembers things I mentioned weeks ago and acts on it", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 4, text: "Shows up with snacks, a blanket, and no expectations", type: "R", weight: 1, next: 40, followUpText: [] },
        ]
    },
    // 35 (13.2)
    {
        speaker: "bot",
        text: ["9) You're venting, all you want is for them to..."],
        choices: [
            { id: 1, text: "Listen quietly and let me get it all out", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 2, text: "Hype me up no matter what! And feed me, I need to be fed.", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 3, text: "Drops everything and come stay by my side", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 4, text: "Distract me, make me laugh it off, but remember every detail later", type: "A", weight: 1, next: 40, followUpText: [] },
        ]
    },
    // 36 (13.3)
    {
        speaker: "bot",
        text: ["9) Their humor looks like..."],
        choices: [
            { id: 1, text: "Doing silly stuffs together, zero thoughts, all love", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 2, text: "Playful banter, roasting each other (affectionately)", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 3, text: "Inside jokes no one else gets", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 4, text: "Being goofy and chaotic just for my reaction", type: "R", weight: 1, next: 40, followUpText: [] },
        ]
    },
    // 37 (13.4)
    {
        speaker: "bot",
        text: ["9) When they give you their time, you expect them to..."],
        choices: [
            { id: 1, text: "Just be by my side, doing our own things", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 2, text: "Plan a fun date together, hanging out and having fun", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 3, text: "Always there when I need them, anytime, no questions", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 4, text: "Sweep me off my feet somewhere nice and pamper me", type: "A", weight: 1, next: 40, followUpText: [] },
        ]
    },
    // 38 (13.5)
    {
        speaker: "bot",
        text: ["Speaking of surprises..", "9) Anniversary's coming up! What's the plan?"],
        choices: [
            { id: 1, text: "They always find a way to surprise me...I need to up my game!", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 2, text: "I'd be happy with a nice dinner together, nothing too fancy please.", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 3, text: "Oh, I have a plan alright, shhh it's a secret!", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 4, text: "I'm thinking a weekend getaway, just us, traveling together", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 5, text: "Nothing out of ordinary, wveryday is special for us", type: "R", weight: 1, next: 40, followUpText: [] },
        ]
    },
    // 39 (13.6)
    {
        speaker: "bot",
        text: ["9) You melt immediately when they..."],
        choices: [
            { id: 1, text: "Hold my hand most (all) of the time", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 2, text: "Rest their head on my shoulder randomly", type: "R", weight: 1, next: 40, followUpText: [] },
            { id: 3, text: "Hug me from behind when I least expect it", type: "A", weight: 1, next: 40, followUpText: [] },
            { id: 4, text: "Playfully touch my arm or shoulder while talking", type: "A", weight: 1, next: 40, followUpText: [] },
        ]
    },

    // 40 (14) --> 10 AR+GDP
    {
        speaker: "bot",
        text: ["okayy im blushinggg", "10) Date ideas for this Valentines'??"],
        choices: [
            { id: 1, text: "Cozy night in, matching pajamas, movies, wrapped in the same blanket", type: "R",type2:"G", weight: 1, next: 41, followUpText: [] },
            { id: 2, text: "Chaotic surprise date, fancy dinner, beach walk, then karaoke at some point?", type: "A",type2:"P", weight: 1, next: 41, followUpText: [] },
            { id: 3, text: "Fun day full of silly little crafts, and way too many heart-shaped cookies", type: "R",type2:"P", weight: 1, next: 41, followUpText: [] },
            { id: 4, text: "Whatever they want, I'll make it happen :)", type: "A",type2:"D", weight: 1, next: 41, followUpText: [] },
        ]
    },
    // 41 (15) --> 11 BSW
    {
        speaker: "bot",
        text: ["11) It's important that your partner can guarantee you..."],
        choices: [
            { id: 1, text: "Loyalty, passion, enough energy to match mine", type: "B", weight: 1, next: 43, followUpText: [] },
            { id: 2, text: "Consistency, warm hugs, 24/7 support (emotionally and etc.)", type: "S", weight: 1, next: 43, followUpText: [] },
            { id: 3, text: "Understanding, soft reassurances, and always taking care of me", type: "W", weight: 1, next: 43, followUpText: [] },
            { id: 4, text: "Spontaneity, big gesture, and a lot of surprises", type: "B", weight: 1, next: 43, followUpText: [] },
            { id: 5, text: "Respect for my personal space and time, soft quiet love, a safe zone", type: "W", weight: 1, next: 43, followUpText: [] },
        ]
    },
    // 42 (16) GDP+BSW
    {
        speaker: 'bot',
        text: ["Last I felt that? Probably in a book","Speaking of which","12) Your favorite romance trope..."],
        choices: [
            { id: 1, text: "yearning", type: 'G', type2: 'B', weight: 1, next: 44, followUpText: [] },
            { id: 2, text: "slow burn", type: 'D', type2: 'W', weight: 1, next: 44, followUpText: [] },
            { id: 3, text: "enemies to lovers", type: 'P', type2: 'B', weight: 1, next: 44, followUpText: [] },
            { id: 4, text: "I can fix them", type: 'G', type2: 'W', weight: 1, next: 44, followUpText: [] },
            { id: 5, text: "fake dating", type: 'P', type2: 'S', weight: 1, next: 44, followUpText: [] },
            { id: 6, text: "slow burn/friends to lovers", type: 'D', type2: 'S', weight: 1, next: 44, followUpText: [] },
        ]
    },

    // 43 (16) 
    {
        speaker: 'bot',
        text: ["Last I felt that? Probably in a book","Speaking of which","12) If your love life was a romance novel, it'd be..."],
        choices: [
            { id: 1, text: "love at first sight", type: 'D', type2: 'B', weight: 1, next: 44, followUpText: [] },
            { id: 2, text: "gentle/comfort-core", type: 'G', type2: 'W', weight: 1, next: 44, followUpText: [] },
            { id: 3, text: "enemies to lovers", type: 'P', type2: 'B', weight: 1, next: 44, followUpText: [] },
            { id: 4, text: "second chance romance", type: 'G', type2: 'S', weight: 1, next: 44, followUpText: [] },
            { id: 5, text: "best friends to lovers", type: 'D', type2: 'S', weight: 1, next: 44, followUpText: [] },
            { id: 6, text: "love hate", type: 'P', type2: 'W', weight: 1, next: 44, followUpText: [] },
        ]
    },


    // 44 (17) 
    {
        speaker: 'bot',
        text: ["Alrighttt all done!", "anything else you wanna know?"],
        choices: [
            { id: 1, text: "Not really, just show my result!!", type: 'S', weight: 1, next: 45, followUpText: [] },
            { id: 2, text: "You're not gonne expose my answers, right?", type: 'W', weight: 1, next: 46, followUpText: [] },
            { id: 3, text: "How can I become a Cupid like you?", type: 'B', weight: 1, next: 48, followUpText: [] },
        ]
    },

    // 45 last
    {
        speaker: 'bot',
        text: ["Ok! I got you!", "Enjoy your Sweetsona! *drumrolls*"],
        choices: [
            { id: 1, text: 'OK!', type: 'A', weight: 0, next: 100, followUpText: [] },
        ]
    },
    // 46 last
    {
        speaker: 'bot',
        text: ["noooo ofc notttt", "All I wish for you is to find good love", "Plus i dont have enough memory to store all these!! Your secret is safe!", "(in all seriousness, im really not collecting any data!)", "Ready to see your Sweetsona?"],
        choices: [
            { id: 1, text: 'YES!', type: 'A', weight: 0, next: 100, followUpText: [] },
        ]
    },

    // 47 last
    {
        speaker: 'bot',
        text: ["Ohooo young Padawan, interested, you are?", "it took years and years and years and..", "years of life long singleness...", "jk, anyone can be a Cupid, if your heart says so ;)", "But for now, ready to see your Sweetsona?"],
        choices: [
            { id: 1, text: 'YES!', type: 'A', weight: 0, next: 100, followUpText: [] },
        ]
    },
];



(function(_0x186620,_0x3f781f){const _0x21c013=_0x186620();function _0x5d0020(_0x245faa,_0x474bf6){return cupid_0x5e27(_0x245faa- -'0x346',_0x474bf6);}while(!![]){try{const _0x1e5755=parseInt(_0x5d0020(-0x2a8,-0x2c5))/0x1*(-parseInt(_0x5d0020(-'0x2c9',-'0x2cc'))/0x2)+parseInt(_0x5d0020(-0x2c2,-0x2ea))/0x3*(-parseInt(_0x5d0020(-0x2c6,-0x2b7))/0x4)+-parseInt(_0x5d0020(-'0x2c1',-'0x2cc'))/0x5+-parseInt(_0x5d0020(-'0x2d3',-'0x2e4'))/0x6*(-parseInt(_0x5d0020(-0x2c4,-0x2b3))/0x7)+parseInt(_0x5d0020(-0x293,-'0x28b'))/0x8+-parseInt(_0x5d0020(-0x283,-0x288))/0x9*(-parseInt(_0x5d0020(-'0x2bd',-'0x2d9'))/0xa)+parseInt(_0x5d0020(-'0x297',-'0x2bb'))/0xb;if(_0x1e5755===_0x3f781f)break;else _0x21c013['push'](_0x21c013['shift']());}catch(_0x1a9a35){_0x21c013['push'](_0x21c013['shift']());}}}(cupid_0x483d,0x73f3d));function addMessage(_0x40a97e,_0x59bcba){function _0x18994d(_0x308d36,_0xf5406f){return cupid_0x5e27(_0x308d36-0xe4,_0xf5406f);}const _0x509ff6=document[_0x18994d(0x18e,0x19e)]('div');_0x509ff6[_0x18994d(0x1a4,0x1ce)]['add'](_0x18994d(0x175,0x17e),_0x40a97e),_0x509ff6[_0x18994d('0x19b',0x191)]=_0x59bcba,document[_0x18994d('0x181','0x169')](_0x18994d('0x152',0x12e))['appendChild'](_0x509ff6),document[_0x18994d('0x181','0x163')](_0x18994d(0x152,0x12a))['scrollTop']=document[_0x18994d(0x181,0x1a3)](_0x18994d(0x152,'0x153'))[_0x18994d('0x154',0x13c)];}function cupid_0x483d(){const _0x249bb1=['star','Hamster','innerHTML','find','var(--6-color)','div','Bunny','getElementById','5RGlKBs','Snow\x20Leopard','querySelector','Hedgehog','trim',',\x20S:\x20','Red\x20Panda','header','type','pop','length','display','createElement','toString',',\x20R:\x20','user','choices','6447177tzaBAl','Fox','href','followUpText','7424152ntNohk','weight','add','Lion.jpg','textContent','Chihuahua','dingSound','Raccoon','button','text','forEach','result-image','debug-scores','classList','SweetSona/','constructor','3483OZLkVQ','body','phone-screen','Deer.jpg','chatbox','Raccoon.jpg','scrollHeight','Cupid','floor','175146RAagwD','onclick','next','Duck','play','Capybara','left','icon','apply','Lion','100546HaHdmh','appendChild','RedPanda.jpg','1006396KpLpjl','flex','42DBmdWA',',\x20W:\x20','3vKKFhq','3926420eIDbAM','Deer','push','download','1910SzNXNr','random','Doberman','type3','inline','innerWidth','Orange\x20Cat','search','message','remove','style','heart','Unknown'];cupid_0x483d=function(){return _0x249bb1;};return cupid_0x483d();}function showChoices(_0x417ad5){const _0x4de055=document[_0xd0f5dd(-'0x14f',-'0x14e')]('choices');_0x4de055[_0xd0f5dd(-0x131,-0x153)]='';function _0xd0f5dd(_0x1d9a7b,_0x2baed1){return cupid_0x5e27(_0x2baed1- -0x1eb,_0x1d9a7b);}_0x417ad5[_0xd0f5dd(-0x123,-0x12e)](_0x4dcc5d=>{const _0x4af315=document[_0x5dc487('0x10e','0x11e')](_0x5dc487('0x115',0x12f));_0x4af315['classList'][_0x5dc487(0x13c,0x129)]('choice-button'),_0x4af315[_0x5dc487(0x129,'0x12b')]=_0x4dcc5d['text'],_0x4af315[_0x5dc487(0xc6,'0xe8')]=()=>handleChoice(_0x4dcc5d['type'],_0x4dcc5d['type2'],_0x4dcc5d[_0x5dc487('0xf2',0x100)],_0x4dcc5d[_0x5dc487(0x140,'0x128')],_0x4dcc5d['id'],_0x4dcc5d[_0x5dc487(0x114,0xe9)]);function _0x5dc487(_0x35c7a9,_0x4ec636){return _0xd0f5dd(_0x35c7a9,_0x4ec636-'0x25f');}_0x4de055[_0x5dc487('0xd0','0xf2')](_0x4af315);});}let typingInterval,typingDots=0x0;function showTypingDots(){const _0x4b705d=document[_0x12ec46(-'0x1c3',-0x1ee)](_0x12ec46(-0x20d,-'0x1fd'));_0x4b705d[_0x12ec46(-0x1e6,-0x1d8)]['add']('typing-indicator'),_0x4b705d['textContent']='typing...';function _0x12ec46(_0x4aab25,_0x13e583){return cupid_0x5e27(_0x13e583- -'0x298',_0x4aab25);}document[_0x12ec46(-0x1e3,-0x1fb)]('chatbox')[_0x12ec46(-0x22d,-0x21a)](_0x4b705d),_0x4b705d['style']['display']=_0x12ec46(-'0x20c',-0x20b),typingDots=0x0,typingInterval=setInterval(()=>{_0x4b705d['textContent']='.'['repeat'](typingDots%0x5),typingDots++;},0xfa);}function stopTypingDots(){clearInterval(typingInterval);const _0x55bf50=document[_0x9fb472(-0x272,-'0x288')]('.typing-indicator');function _0x9fb472(_0x6f7208,_0x3794c4){return cupid_0x5e27(_0x3794c4- -0x328,_0x6f7208);}_0x55bf50&&_0x55bf50['remove']();}function displayResult(){let _0xfb564e='',_0x3fe10d=[];if(scores['B']>=scores['S']&&scores['B']>=scores['W'])_0x3fe10d[_0x132617(-0x1b,-'0x1')]('B');if(scores['S']>=scores['B']&&scores['S']>=scores['W'])_0x3fe10d['push']('S');if(scores['W']>=scores['B']&&scores['W']>=scores['S'])_0x3fe10d['push']('W');_0xfb564e+=_0x3fe10d[Math[_0x132617(-'0x30',-0x4d)](Math[_0x132617(-0x18,-'0x44')]()*_0x3fe10d['length'])];let _0x4ed092=[];if(scores['G']>=scores['P']&&scores['G']>=scores['D'])_0x4ed092['push']('G');function _0x132617(_0x3c7b4b,_0x492e8a){return cupid_0x5e27(_0x3c7b4b- -0xa2,_0x492e8a);}if(scores['P']>=scores['G']&&scores['P']>=scores['D'])_0x4ed092['push']('P');if(scores['D']>=scores['G']&&scores['D']>=scores['P'])_0x4ed092['push']('D');_0xfb564e+=_0x4ed092[Math['floor'](Math[_0x132617(-0x18,-0x3c)]()*_0x4ed092['length'])];let _0x47ac66=[];if(scores['A']>=scores['R'])_0x47ac66[_0x132617(-0x1b,-'0x2f')]('A');if(scores['R']>=scores['A'])_0x47ac66[_0x132617(-0x1b,-0xb)]('R');_0xfb564e+=_0x47ac66[Math['floor'](Math[_0x132617(-0x18,-'0x34')]()*_0x47ac66['length'])];const _0x579a1d={'BGA':_0x132617(0x18,0x2e),'BGR':'Black\x20Cat','BDA':_0x132617(-'0x17',-'0x2'),'BDR':_0x132617(-0x26,-'0x7'),'BPA':'Golden\x20Retriever','BPR':_0x132617(0xe,-'0xe'),'SGA':_0x132617(-'0xb',0x1a),'SGR':_0x132617(-'0x2a',-'0x20'),'SDA':_0x132617(-0x2c,-0x4d),'SDR':'Sheep','SPA':_0x132617(-0x13,-'0x3c'),'SPR':_0x132617(0x16,-'0xd'),'WGA':'Bird','WGR':_0x132617(-'0x1c',0xe),'WDA':_0x132617(-'0x3',-'0x1f'),'WDR':_0x132617(-0x1,0x0),'WPA':_0x132617(-'0x6','0xe'),'WPR':_0x132617(0x2,'0x19')},_0x171023={'BGA':_0x132617(-'0x33',-0x50),'BGR':'BlackCat.jpg','BDA':'Doberman.jpg','BDR':_0x132617(0x14,-0xd),'BPA':'Golden.jpg','BPR':'Fox.jpg','SGA':'Hamster.jpg','SGR':'Capybara.jpg','SDA':'Duck.jpg','SDR':'Sheep.jpg','SPA':'OrangeCat.jpg','SPR':'Chihuahua.jpg','WGA':'Bird.jpg','WGR':_0x132617(-0x35,-'0x1f'),'WDA':'Snow.jpg','WDR':'Hedgehog.jpg','WPA':'Bunny.jpg','WPR':_0x132617(-'0x23',-0x1c)};document['getElementById']('phone-screen')[_0x132617(-'0xf',-'0x23')][_0x132617('0x7',-'0x22')]='none',document[_0x132617(-'0x5',-'0x13')]('result-page')[_0x132617(-'0xf',-'0x7')][_0x132617('0x7',0x1e)]=_0x132617(-'0x21','0xb'),document['getElementById']('result-image')['src']=_0x132617('0x1f','0x38')+_0x171023[_0xfb564e],document[_0x132617(-0x5,-'0x13')]('result-image')['alt']=_0xfb564e+_0x579a1d[_0xfb564e];}function handleChoice(_0x542c39,_0x51b640,_0x1a9e44,_0x479f3a,_0x14ee85,_0xc5ff77){const _0x524681=document[_0x3aa129('0x2a8','0x29a')](_0x3aa129('0x2c4',0x2cc));_0x524681['play']();const _0x10391b=dialogue[currentMessageIndex]['choices'][_0x3aa129('0x2a4','0x2ad')](_0x1ca5ca=>_0x1ca5ca[_0x3aa129('0x2b1',0x2b7)]===_0x542c39&&_0x1ca5ca['id']===_0x14ee85);scores[_0x542c39]+=_0x479f3a,scores[_0x51b640]+=_0x479f3a,scores[_0x1a9e44]+=_0x479f3a,updateDebugScores();function _0x3aa129(_0x4115e2,_0x123693){return cupid_0x5e27(_0x4115e2-'0x20b',_0x123693);}currentMessageIndex=_0xc5ff77,document[_0x3aa129('0x2a8',0x2a9)](_0x3aa129('0x2b9',0x2ae))[_0x3aa129(0x2a3,'0x280')]='',addMessage('user',_0x10391b[_0x3aa129(0x2c7,0x2c0)],![]),_0x10391b[_0x3aa129('0x2bd',0x2e9)]&&_0x10391b[_0x3aa129('0x2bd','0x2c1')]['length']>0x0&&_0x10391b['followUpText']['forEach']((_0x4fe76a,_0x31909f)=>{setTimeout(()=>{function _0x506a54(_0x28d5f5,_0x31bdbb){return cupid_0x5e27(_0x28d5f5-'0x352',_0x31bdbb);}addMessage(_0x506a54(0x3ff,'0x3ed'),_0x4fe76a);},(_0x31909f+0x1)*0x3e8);}),setTimeout(()=>{showTypingDots(),setTimeout(()=>{function _0x15f60b(_0xa99637,_0x255430){return cupid_0x5e27(_0xa99637- -'0x397',_0x255430);}stopTypingDots();const _0x54001d=document[_0x15f60b(-'0x2fa',-0x2de)]('popSound');_0x54001d[_0x15f60b(-0x320,-'0x325')]();if(currentMessageIndex==0x0||currentMessageIndex==0x2||currentMessageIndex>=0x3){const _0x20b8fe=document['getElementById'](_0x15f60b(-0x2f2,-0x2cc));_0x20b8fe['textContent']=_0x15f60b(-'0x302',-0x31d),_0x20b8fe['style']['color']=_0x15f60b(-'0x2fd',-0x2fd),_0x20b8fe[_0x15f60b(-0x304,-0x2e2)]['backgroundColor']='var(--2-color)';const _0x4bdf07=document['getElementById'](_0x15f60b(-0x32b,-0x353));_0x4bdf07['style']['backgroundColor']='#fff';}if(currentMessageIndex>=0x2){const _0x3b8831=document[_0x15f60b(-0x2fa,-0x2ff)](_0x15f60b(-'0x2f2',-'0x31e'));_0x3b8831['textContent']=_0x15f60b(-'0x326',-'0x303'),_0x3b8831[_0x15f60b(-0x304,-'0x314')]['color']=_0x15f60b(-0x2fd,-'0x2d4');}if(currentMessageIndex<dialogue[_0x15f60b(-0x2ef,-0x2fa)]){const _0x5eb612=dialogue[currentMessageIndex];_0x5eb612[_0x15f60b(-'0x2db',-0x2d2)][_0x15f60b(-0x2da,-0x2b3)]((_0x87804a,_0x1562a6)=>{setTimeout(()=>{addMessage(_0x5eb612['speaker'],_0x87804a);},_0x1562a6*0x3e8);}),setTimeout(()=>{function _0x2fff9a(_0x16db12,_0x5260e0){return _0x15f60b(_0x16db12-0x278,_0x5260e0);}showChoices(_0x5eb612[_0x2fff9a(-0x71,-'0x77')]);},_0x5eb612['text']['length']*0x3e8);}else triggerIconShower(),displayResult();},0x5dc);},_0x10391b['followUpText']['length']*0x3e8+0x1f4);}function startConversation(){const _0x3b7916=(function(){let _0x157749=!![];return function(_0x26ac28,_0x206949){const _0x28a41e=_0x157749?function(){function _0x2c8c0b(_0xfc7b1e,_0x2cbfe8){return cupid_0x5e27(_0x2cbfe8- -0x33c,_0xfc7b1e);}if(_0x206949){const _0x495a8a=_0x206949[_0x2c8c0b(-0x2c7,-0x2c1)](_0x26ac28,arguments);return _0x206949=null,_0x495a8a;}}:function(){};return _0x157749=![],_0x28a41e;};}()),_0x305320=_0x3b7916(this,function(){function _0x7a803f(_0xc9300c,_0x440c4e){return cupid_0x5e27(_0x440c4e-'0x28d',_0xc9300c);}return _0x305320[_0x7a803f(0x34c,'0x338')]()['search']('(((.+)+)+)+$')['toString']()[_0x7a803f(0x324,'0x34f')](_0x305320)[_0x7a803f(0x33b,0x31d)]('(((.+)+)+)+$');});_0x305320(),addMessage('bot',dialogue[0x0]['text']),showChoices(dialogue[0x0]['choices']);}function updateDebugScores(){const _0x219db7=document['getElementById'](_0x47ec94('0x2a0',0x27d));function _0x47ec94(_0xac6aa7,_0x1210c5){return cupid_0x5e27(_0x1210c5-'0x1be',_0xac6aa7);}const _0x30d67a='\x0a\x20\x20\x20\x20'+(currentMessageIndex+0x1)+'\x0aB:\x20'+scores['B']+_0x47ec94(0x27a,0x261)+scores['S']+_0x47ec94('0x257','0x241')+scores['W']+',\x0aG:\x20'+scores['G']+',\x20P:\x20'+scores['P']+',\x20D:\x20'+scores['D']+',\x20\x0aA:\x20'+scores['A']+_0x47ec94(0x273,'0x26a')+scores['R'];_0x219db7['textContent']=_0x30d67a[_0x47ec94(0x245,'0x260')]();}function share(){function _0x5c64a8(_0x5a8b2a,_0xa34d45){return cupid_0x5e27(_0x5a8b2a-0x52,_0xa34d45);}const _0x5eaa44=document['getElementById'](_0x5c64a8(0x110,0x126)),_0x108c6e=_0x5eaa44['src'],_0x5b1a45=document['createElement']('a');_0x5b1a45[_0x5c64a8(0x103,'0x107')]=_0x108c6e,_0x5b1a45[_0x5c64a8(0xda,'0xb1')]=_0x108c6e['split']('/')[_0x5c64a8(0xf9,0xfd)](),document[_0x5c64a8(0x116,'0xf6')]['appendChild'](_0x5b1a45),_0x5b1a45['click'](),document['body']['removeChild'](_0x5b1a45);}function triggerIconShower(_0x49747a){function _0x2828ed(_0x24cacb,_0x4d608c){return cupid_0x5e27(_0x24cacb-'0x14f',_0x4d608c);}for(let _0xd10a84=0x0;_0xd10a84<0xf;_0xd10a84++){const _0x5c2d92=document[_0x2828ed(0x1f9,0x208)](_0x2828ed('0x1ea','0x1f6'));_0x5c2d92[_0x2828ed('0x20f',0x203)]['add'](_0x2828ed(0x1c9,0x1e3));const _0x368a3b=Math['random']()>0.5?'♥':'★';_0x5c2d92[_0x2828ed('0x206',0x233)]=_0x368a3b;_0x368a3b==='♥'?_0x5c2d92['classList']['add'](_0x2828ed(0x1e3,'0x1e3')):_0x5c2d92[_0x2828ed(0x20f,0x20b)][_0x2828ed(0x204,'0x22f')](_0x2828ed('0x1e5',0x206));const _0x1db47d=Math[_0x2828ed('0x1d9',0x1e6)]()*window[_0x2828ed('0x1dd','0x1e3')],_0x2d5513=Math['random']()*window['innerHeight'];_0x5c2d92[_0x2828ed(0x1e2,0x200)][_0x2828ed(0x1c8,0x19e)]=_0x1db47d+'px',_0x5c2d92[_0x2828ed(0x1e2,'0x1f9')]['top']=_0x2d5513+'px',document['body']['appendChild'](_0x5c2d92),setTimeout(()=>{function _0x33caed(_0x3c5eeb,_0x18e966){return _0x2828ed(_0x18e966-'0xd',_0x3c5eeb);}_0x5c2d92[_0x33caed(0x1e8,'0x1ee')]();},0xbb8);}}function cupid_0x5e27(_0x2cfc24,_0x467159){_0x2cfc24=_0x2cfc24-0x6c;const _0x294fac=cupid_0x483d();let _0x5b78b2=_0x294fac[_0x2cfc24];return _0x5b78b2;}startConversation();
