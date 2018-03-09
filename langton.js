c = document.getElementById("game");
ctx = c.getContext("2d");

cells = new Array(400);
//init array with 0s
for(i=0;i<400;i++)
{
  cells[i] = 0;
}

function drawCells()
{
  for(i=0;i<400;i++)
  {
    var x = i%20;
    var y = Math.floor(i/20);
    if(cells[i] == 1)
    {
      ctx.fillStyle = "#000000";
      ctx.fillRect(x*20, y*20, 20, 20);
    }
    else
    {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(x*20, y*20, 20, 20);
    }
  }
}

function drawGrid()
{
  for(i=0;i<20;i++)
  {
    ctx.beginPath();
    ctx.moveTo(i*20,0);
    ctx.lineTo(i*20,400);
    ctx.stroke();
  }
  for(i=0;i<20;i++)
  {
    ctx.beginPath();
    ctx.moveTo(0,i*20);
    ctx.lineTo(400,i*20);
    ctx.stroke();
  }
}

function userDraw(e)
{
  var x = Math.floor((e.clientX - c.offsetLeft) / 20);
  var y = Math.floor((e.clientY - c.offsetTop) / 20);
  
  var i = y*20 + x;
  
  cells[i] = 1;
  
  ctx.fillStyle = "#000000";
  ctx.fillRect(x*20, y*20, 20, 20);
}

drawCells();
drawGrid();

function update()
{
  var temp = new Array(400);
  
  for(i=0; i<temp.length; i++)
  {
    temp[i] = cells[i];
  }
  
  init = Math.floor(Math.random() * 400); //pick a random cell to start with
  
}

function play()
{
  var tick = setInterval(update, 1000);
}

function stop()
{
  clearInterval(tick);
}

c.addEventListener('click', userDraw, false);

