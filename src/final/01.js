function globalScopeVariable(sentences) {
  if (sentences instanceof Array) {
    var totalCharacters = sentences.reduce((result, sentence) => {
      return result + sentence.length
    }, 0)
  }

  if (typeof sentences === "string") {
    totalCharacters = sentences.length
  }

  return +totalCharacters
}

export default globalScopeVariable
