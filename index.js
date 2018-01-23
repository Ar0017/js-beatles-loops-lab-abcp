function theBeatlesPlay(musician, instrument){
  let array = []

  for (let i = 0; i < musician.length; i++){
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }

  return array
}