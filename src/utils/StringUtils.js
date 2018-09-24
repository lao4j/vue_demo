
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

/**
 * 通讯方式转换中文
 * @param type
 */
function contactTypeEn2Cn (type) {
  switch (type) {
    case 'qq' :
      return 'QQ'
    case 'mobile' :
      return '手机'
    case 'tel' :
      return '电话'
    case 'wechat' :
      return '微信'
    case 'email' :
      return '邮箱'
    default:
      return '卫星'
  }
}

export {
  getLevelStar,
  sexEn2Cn,
  contactTypeEn2Cn
}
