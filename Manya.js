if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
  
    if(deformation>180){
     car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="green";
    }
    if(deformation<100){
     car.shapeColor="blue";
    }}
 