var boat, boatAni;
var obs1, obs2, obs3, obs4;
var obsImg1, obsImg2;
var river, riverImg;
var fish1, fishImg;
var pos1, pos2, pos3;
var posX = [];
var img = [];
var sound1;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

function preload()
{
    boatAni = loadAnimation("img/boat3_0.png", "img/boat3_1.png", "img/boat3_2.png", "img/boat3_3.png", "img/boat3_4.png");
    obsImg1 = loadImage("img/boat1.png");
    obsImg2 = loadImage("img/boat2.png");
    riverImg = loadImage("img/Background.png");
    fishImg = loadImage("img/fish.png");
    sound1 = loadSound("collect_point.wav");
}

function setup()
{
    canvas = createCanvas(400, 400);

    pos1 = 100;
    pos2 = 200;
    pos3 = 290;

    posX.push(pos1);
    posX.push(pos2);
    posX.push(pos3);

    img.push(obsImg1);
    img.push(obsImg2);

    river = createSprite(200, -600, 400, 10000);
    river.addImage("bg", riverImg);

    boat = createSprite(pos2, 200, 50, 50);
    boat.shapeColor = "red";
    boat.velocityY = -2;
    boat.addAnimation("boat", boatAni);
    boat.scale = 0.1
    //boat.setCollider("rectangle", 0, 0, 50, 50, 0);

    fish1 = createSprite(posX[Math.round(random(0, 24)/10)], -50);
    fish1.addImage(fishImg);
    fish1.scale = 0.1;

    fish2 = createSprite(posX[Math.round(random(0, 24)/10)], -250);
    fish2.addImage(fishImg);
    fish2.scale = 0.1;

    fish3 = createSprite(posX[Math.round(random(0, 24)/10)], -450);
    fish3.addImage(fishImg);
    fish3.scale = 0.1;

    fish4 = createSprite(posX[Math.round(random(0, 24)/10)], -650);
    fish4.addImage(fishImg);
    fish4.scale = 0.1;

    fish5 = createSprite(posX[Math.round(random(0, 24)/10)], -850);
    fish5.addImage(fishImg);
    fish5.scale = 0.1;

    fish6 = createSprite(posX[Math.round(random(0, 24)/10)], -1050);
    fish6.addImage(fishImg);
    fish6.scale = 0.1;

    fish7 = createSprite(posX[Math.round(random(0, 24)/10)], -1250);
    fish7.addImage(fishImg);
    fish7.scale = 0.1;

    obs1 = createSprite(posX[Math.round(random(0, 24)/10)], 50);
    obs1.addImage(img[Math.round(random(0, 1))]);
    obs1.scale = 0.1;

    obs2 = createSprite(posX[Math.round(random(0, 24)/10)], -350);
    obs2.addImage(img[Math.round(random(0, 1))]);
    obs2.scale = 0.1;

    obs3 = createSprite(posX[Math.round(random(0, 24)/10)], -750);
    obs3.addImage(img[Math.round(random(0, 1))]);
    obs3.scale = 0.1;

    obs4 = createSprite(posX[Math.round(random(0, 24)/10)], -1150);
    obs4.addImage(img[Math.round(random(0, 1))]);
    obs4.scale = 0.1;
}

function draw()
{
    if (gameState === PLAY)
    {
        background("white");

    camera.position.x = 200;
    camera.position.y = boat.y;

    //boat.debug = true;
    //obs1.debug = true;
    //obs2.debug = true;

    if (frameCount % 100 === 0)
    {
        boat.velocityY = boat.velocityY - 0.2;
    }

    if (boat.y < -1370)
    {
        boat.y = 200;
        boat.y += 5;
    }

    if (boat.y > 195)
    {
        fish1.visible = true;
        fish2.visible = true;
        fish3.visible = true;
        fish4.visible = true;
        fish5.visible = true;
        fish6.visible = true;
        fish7.visible = true;

        obs1.x = posX[Math.round(random(0, 24)/10)];
        obs2.x = posX[Math.round(random(0, 24)/10)];
        obs3.x = posX[Math.round(random(0, 24)/10)];
        obs4.x = posX[Math.round(random(0, 24)/10)];
    }

    /*if (keyDown(RIGHT_ARROW))
    {
        boat.x = boat.x + 10;
    }
    
    if (keyDown(LEFT_ARROW))
    {
        boat.x = boat.x - 10;
    }*/

    if (keyDown(RIGHT_ARROW) && boat.x === pos1)
    {
        boat.x = pos2;
    }
    else if (keyDown(RIGHT_ARROW) && boat.x === pos2)
    {
        boat.x = pos3;
    }
    else if (keyDown(RIGHT_ARROW) && boat.x === pos3)
    {
        boat.x = pos3;
    }

    if (keyDown(LEFT_ARROW) && boat.x === pos1)
    {
        boat.x = pos1;
    }
    else if (keyDown(LEFT_ARROW) && boat.x === pos2)
    {
        boat.x = pos1;
    }
    else if (keyDown(LEFT_ARROW) && boat.x === pos3)
    {
        boat.x = pos2;
    }
    
    if (boat.isTouching(fish1))
    {
        fish1.visible = false;
        fish1.x = posX[Math.round(random(0, 24)/10)];
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish2))
    {
        fish2.visible = false;
        fish2.x = posX[Math.round(random(0, 24)/10)];
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish3))
    {
        fish3.visible = false;
        fish3.x = posX[Math.round(random(0, 24)/10)];
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish4))
    {
        fish4.visible = false;
        fish4.x = posX[Math.round(random(0, 24)/10)];
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish5))
    {
        fish5.visible = false;
        fish5.x = posX[Math.round(random(0, 24)/10)];
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish6))
    {
        fish6.visible = false;
        fish6.x = posX[Math.round(random(0, 24)/10)];
        score++;
        sound1.play();
    }
    if (boat.isTouching(fish7))
    {
        fish7.visible = false;
        fish7.x = posX[Math.round(random(0, 24)/10)];
        score++;
        sound1.play();
    }

    if (boat.isTouching(obs1) || boat.isTouching(obs2) || boat.isTouching(obs3) || boat.isTouching(obs4))
    {
        gameState = END;
    }

    drawSprites();

    textSize(20);
    fill("black")
    text("Score: " + score, 300, boat.y - 165);

    }

    if (gameState === END)
    {
        end();
    }
}

function end()
{
    background("yellow");

    boat.velocityY = 0;
    camera.position.y = 200;

    textSize(40);
    fill("black");
    text("GAME OVER!!", 70, 180);

    textSize(25);
    text("Your Score: " + score, 130, 230);
}