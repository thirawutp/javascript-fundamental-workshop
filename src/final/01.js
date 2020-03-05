function globalScopeVariable(sentences) {
  if (sentences instanceof Array) {
    var totalCharacters = sentences.reduce((result, sentence) => {
      return result + sentence.length
    }, 0)
  }
  return Number(totalCharacters) + sentences.length
}

export default globalScopeVariable
