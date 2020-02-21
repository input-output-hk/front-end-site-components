const sass = require('node-sass')
const path = require('path')
const fs = require('fs')

sass.render({
  file: path.join(__dirname, '..', 'src', 'index.scss')
}, (err, result) => {
  if (err) {
    console.error('Error building CSS', err)
    process.exit(1)
  }

  fs.writeFile(path.join(__dirname, '..', 'components', 'index.css'), result.css.toString(), () => {
    console.log('CSS build complete ...')
  })
})
