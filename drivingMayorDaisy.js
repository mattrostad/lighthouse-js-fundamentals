const carPassing = function (cars, speed) {
  let newCar = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newCar); 
  return cars; 
}