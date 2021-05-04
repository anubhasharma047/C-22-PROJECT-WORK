var starImg,bgImg;
var star, starBody,starImg1,starImg2;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,fairyBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	starImg1 = loadImage("images/star.png");
	starImg2 = loadImage("images/starImage.png")
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();

	//create fairy sprite and add animation for fairy


	star = createSprite(50,100);
	star.addImage(starImg);
	star.scale = 0.2;

	fariy = createSprite(150,550);
	fariy.addAnimation("flying",fairyImg);
         

	engine = Engine.create();
	world = engine.world;


	starBody = Bodies.circle(550 , 100 , 10 , {restitution:1.0, isStatic:true});
	World.add(world, starBody);
	star.addImage(starImg1);
	star.scale = 0.3;

	starBody = Bodies.circle(600 , 60 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	star.addImage(starImg2);
	star.scale = 0.1;
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);  
	}

	//writw code to move fairy left and right
	if(keyDown("right")) {
		fairy.x = fairy.x + 20;
	}

	if(keyDown("left")){
		fairy.x = fairy.x-20;
	}
}
