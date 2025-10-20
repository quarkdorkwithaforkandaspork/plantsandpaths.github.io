
let n = 0;
let c = 5;
let favClasses = [];

function preload() {
    let fighterImg = loadImage('fighter.jpg');
    let rangerImg = loadImage('ranger.jpg');
    let paladinImg = loadImage('paladin.jpg');
    let sorcererImg = loadImage('sorcerer.jpg');
    let druidImg = loadImage('druid.jpg');
    let wizardImg = loadImage('wizard.jpg');
    let monkImg = loadImage('monk.jpg');
    let clericImg = loadImage('cleric.jpg');
    let bardImg = loadImage('bard.jpg');
    let rogueImg = loadImage('rogue.jpg');

    favClasses = [
    Fighter = {
        upvotes: 255,
        className: 'Fighter',
        favoriteTraits: 'Easy to play and understand while fulfilling players\'s need for engaging combat.',
        classImg: fighterImg
    },
    Ranger = {
        upvotes: 76,
        className: 'Ranger',
        favoriteTraits: 'Players enjoy the ranged support playstyle offered by the Ranger.',
        classImg: rangerImg
    },
    Paladin = {
        upvotes: 36,
        className: 'Paladin',
        favoriteTraits: 'The paladin enables players to tough out large damage and heal allies, while enhancing RP abilities out of combat.',
        classImg: paladinImg
    },
    Sorcerer = {
        upvotes: 31,
        className: 'Sorcerer',
        favoriteTraits: 'Sorcerers can create unusual scenarios for themselves through their subclasses that spice up gameplay.',
        classImg: sorcererImg
    },
    Druid = {
        upvotes: 21,
        className: 'Druid',
        favoriteTraits: 'Druids have access to a unique list of spells that allow you to synergize your playstyle with that of your party\'s needs.',
        classImg: druidImg
    },
    Wizard = {
        upvotes: 12,
        className: 'Wizard',
        favoriteTraits: 'Wizards have an expansive set of subclass options to choose from that can meet nearly any player\'s playstyle preferences.',
        classImg: wizardImg
    },
    Monk = {
        upvotes: 12,
        className: 'Monk',
        favoriteTraits: 'Players enjoy the background bonuses monks recieve and their uniquely acrobatic style of combat.',
        classImg: monkImg
    },
    Cleric = {
        upvotes: 5,
        className: 'Cleric',
        favoriteTraits: 'Players appreciate being able to play a role that focuses on healing and empowering their allies through magic.',
        classImg: clericImg
    },
    Bard = {
        upvotes: 5,
        className: 'Bard',
        favoriteTraits: 'Bards\' ability to navigate roleplay extends to the battlefield as well; players enjoy their playstyle despite its seperation from damage dealing.',
        classImg: bardImg
    },
    Rogue = {
        upvotes: 3,
        className: 'Rogue',
        favoriteTraits: 'Some people enjoy the rogue\'s shadowy crafitiness.',
        classImg: rogueImg
    }
]
}



function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-container');
    imageMode(CENTER);
    textAlign(CENTER);
    fontRegular = loadFont('Baskervville-Regular.ttf');
    fontBold = loadFont('Baskervville-Bold.ttf');
    textWrap(WORD);
}

function draw() {
    translate(width/2, height/2);
    clear();

    let centerMouseX = mouseX - width / 2;
    let centerMouseY = mouseY - height / 2;

for (let i = favClasses.length - 1; i >= 0; i--) {
    let charClass = favClasses[i];
        var a = n * 137.5;
        var r = c * sqrt(n);

        var x = r * cos(a);
        var y = r * sin(a);

        let maxSize = 300;
        let minSize = 100;  
        let size = map(i, 0, favClasses.length - 1, maxSize, minSize);
            image(charClass.classImg, x , y, size, size);
            textFont(fontBold);
            text(charClass.className, x  - size / 2, y + size / 2 + 10, size);
              textFont(fontRegular);
            text(charClass.favoriteTraits, x - size / 2, y + size / 2 + 40, size);
            textFont(fontBold);
            text('Upvotes: ' + charClass.upvotes, x, y + size / 2 + 25);

        n += 100 + -(centerMouseY/100000);
        c = c + -(centerMouseX/100);
    };

    n = 0
    c = 5
}