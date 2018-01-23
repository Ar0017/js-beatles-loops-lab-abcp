function theBeatlesPlay(musician, instrument){
  let array = []

  for (let i = 0; i < musician.length; i++){
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }

  return array
}

function johnLennonFacts(array){
  let facts = []

  for (let i = 0; i < array.length; i++){
    facts.push(`${array[i]}!!!`)
  }
  return facts
}

function iLoveTheBeatles(number){
  let array = []

  do {
    [array.push(`I love the Beatles!`)]
    number++
  } while (number <15)

  return array
}