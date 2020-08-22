module.exports = {
    //devServer.proxy适用于本地开发使用，
    //生成环境请用第三方代理软件，如nginx。
    devServer: {
        port: 8888, //本机端口号
        host: "localhost", //本机主机名
        https: false, //协议
        open: true, //启动服务器时自动打开浏览器访问
        proxy: {
            '/api': {
               target: 'http://127.0.0.1:7001/', //API服务器的地址
               pathRewrite: {
                '^/api': '' 
              }
           }
       }
    }
}