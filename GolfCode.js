const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (par == 1, strokes == 1){
  return "Hole-in-one!";
}
else if (par == 2 , strokes <= par - 2){
  return "Eagle";
}
else if (par == 3 , strokes == par - 1){
  return "Birdie";
}
else if (par == 4 , strokes == par){
  return "Par";
}
else if (par == 5 , strokes == par + 1){
  return "Bogey";
}
else if (par == 6 , strokes == par + 2){
  return "Double Bogey";
}
else {
  return "Go Home!";
}    
  // Only change code above this line
}

golfScore(5, 4);