
// Allow getting multiple HTML elements with a single function call
Document.prototype.getElementsById = elementIdArray => {
  if (!Array.isArray(elementIdArray)) console.error(`Invalid parameter type '${typeof elementIdArray}' submitted to getElementsById, expected 'array'`)
  else {
    return elementIdArray.map(elementId => {
      if (typeof elementId !== 'string') console.error(`Ignoring invalid element ID '${elementId}' in getElementsById, was of type '${typeof elementId}' not 'string'`)
      else return document.getElementById(elementId)
    })
  }
}
