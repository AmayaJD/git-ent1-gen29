// elemeto random de un arregle
// math.ramdom numero aleatoria entre 0 < 1
// math.floor


const getRandomElement = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    // 
    return arr[indexRandom]
}

export default  getRandomElement