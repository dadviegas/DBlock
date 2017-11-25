import { use, setting } from 'mblock-webpack'

use(
  setting({}, () => {
    const rules = [
      {
        test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.md$/,
        use: 'html-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: { sourceMap: 1 }
        }, 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      }
    ]

    return {
      module: {
        rules
      }
    }
  })
)




