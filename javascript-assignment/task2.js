function mergeCars(car1, car2) {
  // If both objects have the same property, car2's property will be used.
  const mergedCar = {};

  for (const key in car1) {
    mergedCar[key] = car1[key];
  }

  for (const key in car2) {
    mergedCar[key] = car2[key];
  }

  return mergedCar;
}

const car1 = { brand: 'Toyota', model: 'Corolla', year: 2017 };
const car2 = { brand: 'Honda', color: 'red' };

const mergedCar = mergeCars(car1, car2);
console.log(mergedCar); // { brand: 'Honda', model: 'Corolla', year: 2017, color: 'red' }
