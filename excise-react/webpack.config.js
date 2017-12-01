

const part = request('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './index'
    ]
  }
}