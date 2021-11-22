// Actions
exports.wait = () => {
  return
    `[⏳] Wait a moment...`
}

// Permission
exports.notAllowed = () => {
  return
    `[❕] This command is not permitted by the owner.`
}

// Require
exports.needQuery = () => {
  return
    `[❕] Query parameters not found.`
}
exports.needLink = () => {
  return
    `[❕] The link parameter was not found.`
}
exports.yt3res = (title, quality, type, size) => {
  return
`
╭﹝🅈🅃🄼🄿③﹞
├ Title : ${title}
├ Quality : ${quality}
├ Type : ${type}
├ Size : ${size}
╰────────
`
}
