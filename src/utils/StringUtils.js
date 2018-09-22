
/**
 * 将数字转换成⭐
 * @param level
 */
function getLevelStar (level) {
  var result = ''
  while (level > 0) {
    result += '⭐'
    level--
  }
  return result
}

export {
  getLevelStar
}
