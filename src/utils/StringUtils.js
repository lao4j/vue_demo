
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

/**
 * 将英文性别转换中文
 * @param sex
 */
function sexEn2Cn (sex) {
  switch (sex) {
    case 'male' :
      return '男'
    case 'female' :
      return '女'
    default:
      return '人妖'
  }
}

export {
  getLevelStar,
  sexEn2Cn
}
