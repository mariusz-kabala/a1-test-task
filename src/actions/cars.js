export const CREATE_CAR = 'create_car'
export const SHOW_CAR = 'show_car'

export const createCar = car => ({
  type: CREATE_CAR,
  car
})

export const showCar = carIndex => ({
  type: SHOW_CAR,
  carIndex
})
