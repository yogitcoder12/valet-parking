//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext('2d');
//Give specific height and width to the car image
greencar_width= 75;
greencar_hieght= 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
gx = 5;
gy=225;
//Set initial position for a car image.

function add() {
	background_imgTag = new Image(); background_imgTag.onload = uploadBackground; background_imgTag.src = background_image; greencar_imgTag = new Image(); greencar_imgTag.onload = uploadgreencar; greencar_imgTag.src = greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag, gx, gy, greencar_width, greencar_hieght);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(gy>=0){
		gy = gy-10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car upward
}

function down()
{
	if(gy<=500){
		gy = gy+10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car downward
}

function left()
{
	if(gx>=0){
		gx = gx-10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car left side
}

function right()
{
	if(gx<=900){
		gx = gx+10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car right side
}
