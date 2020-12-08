alert("connected");

var color=RandomArray(6);

  var square=document.querySelectorAll(".squares");
  var choose=random();
  var colordisplay=document.querySelector("#colorchoosen");
  colordisplay.textContent=choose;
  var result=document.querySelector("#result");
  var heading=document.querySelector("#heading");
  var news=document.querySelector("#new");
  var easy=document.querySelector("#easy");
  var hard=document.querySelector("#hard");


//for easy button
  easy.addEventListener("click",function(){
  	heading.style.backgroundColor="steelblue";
  	result.textContent="";
  	hard.classList.remove("switch");
  	easy.classList.add("switch");
  	easy.style.color="white";
  	hard.style.color="steelblue";
  	 color=RandomArray(3);
  	 choose=random();
    colordisplay.textContent=choose;
    for(var i=0;i<color.length;i++)
    {
    	square[i].style.backgroundColor=color[i];
    }

    //rest three grid is made colored with same background color
  for(var i=color.length;i<square.length;i++)
  {
  	square[i].style.backgroundColor="#232323";
  }

  })

// for hard button
hard.addEventListener("click",function(){
	heading.style.backgroundColor="steelblue";
	result.textContent="";
	easy.classList.remove("switch");
  	hard.classList.add("switch");
  	hard.style.color="white";
  	easy.style.color="steelblue";
	color=RandomArray(6);
	choose=random();
	colordisplay.textContent=choose;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=color[i];
	}
})

  news.addEventListener("click",function(){
  	news.textContent="New Colors";
  	result.textContent="";
  	heading.style.backgroundColor="steelblue";
  	easy.classList.remove("switch");
  	hard.classList.add("switch");
  	hard.style.color="white";
  	easy.style.color="steelblue";
  	color=RandomArray(6);
  	choose=random();
  	colordisplay.textContent=choose;
  	for(var i=0;i<square.length;i++)
  	{
  		square[i].style.backgroundColor=color[i];

  	}

  })
  for(var i=0;i<square.length;i++)
  {
  	square[i].style.backgroundColor=color[i];
    square[i].addEventListener("click",function(){
       //alert(this.style.backgroundColor);
       if(this.style.backgroundColor==choose)
       {
       	//alert("Correct");
       	result.textContent="Correct!!!!";
       	change(choose);
        heading.style.backgroundColor=choose;
        news.textContent="Try Again";
       }

       else{

       // Instead of putting alert we will just fade it out	alert("Wrong");
       this.style.backgroundColor="#232323";
       result.textContent="Wrong";

       }
    })

  }         


// when we guess it correct then we use it for making all of same color in all grid
  function change(color)
  {
  	for(var i=0;i<square.length;i++)
  	{
  		square[i].style.backgroundColor=color;
  	}
  }



  // NOW WE WILL be using Math.random() function which chooses random number between 0 to 1 (excluding 1) can be decimal also.
  //so we will be multiplying it with the given lenght of array and floor the value as index in an array starts with 0 to array.length-1

  function random(){
  	var k=Math.floor(Math.random()*color.length);
  	return color[k];
  }


  function RandomArray(num)
  {
  	var arr=[];
        for(var i=0;i<num;i++)
        {
             arr.push(RandomColorGenerator());
        }
        return arr;
  }

  function RandomColorGenerator()
  {
  	var r=Math.floor(Math.random()*256);
  	var g=Math.floor(Math.random()*256);
  	var b=Math.floor(Math.random()*256);
  	return "rgb(" + r + ", " + g + ", " + b + ")";
  }