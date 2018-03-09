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
