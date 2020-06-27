const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    mode:'development',
    entry:'./index.js',
    output:{
        path: __dirname+'/public',
        filename: 'index_bundle.js',
    },
    
      
    //  optimization: { splitChunks: { chunks: 'all' }},
    //   plugins: [
        
    //     new HtmlWebpackPlugin({
    //       filename: 'app/public/index.html',
    //       template: 'app/public/index.html',
    //       inject: true,
    //     }),
    //   ],
    
    plugins: [
      new MiniCssExtractPlugin({
        path:__dirname+'./public/style',
        filename: 'App.css',
        //chunkFilename: '[id].css',
      }),
    ],
    devServer:{
        inline:true,
        contentBase:'./public',
        port:4001
    },
    
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:'babel-loader',
                options:{
                    presets: ['@babel/react', '@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                    
                }

            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                  {loader:'file-loader',
                options:{
                  esModule: false,
                  outputPath:'./',
                }},
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
               
              },
              {
                test: /\.css$/,
                use: [
                  {loader: MiniCssExtractPlugin.loader,
                  
                  }
                 ,'css-loader'
                ]
              }
           
        ]


    }

}