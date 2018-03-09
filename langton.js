c = document.getElementById("game");
ctx = c.getContext("2d");

cells = new Array(400);
//init array with 0s
for(i=0;i<400;i++)
{
  cells[i] = 0;
}
