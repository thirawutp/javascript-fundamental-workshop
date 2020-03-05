function localScopeVariable(sentences) {
  let totalCharacters = 0;
  if (sentences instanceof Array) {
    totalCharacters = sentences.reduce((result, sentence) => {
      return result + sentence.length
    }, 0)
  }

  if (typeof sentences === "string") {
    totalCharacters = sentences.length
  }

  return +totalCharacters
}

export default localScopeVariable