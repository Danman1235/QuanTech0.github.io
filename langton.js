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
