    module.exports = {
    	publicPath: './',
    	outputDir: 'dist', // 构建输出目录
    	assetsDir: 'static', // 静态资源目录 (js, css, img, fonts)
    	css: { // 配置高于chainWebpack中关于css loader的配置
    		extract: true,
    		// 开启 CSS source maps?
    		sourceMap: false,
    		// css预设器配置项
    		loaderOptions: {},
    	},
    	chainWebpack:(config)=>{
    			if(process.env.NODE_ENV ==='production'){
					if(process.env.npm_config_report){
						config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin).end();
    					config.plugins.delete('prefetch')
    				}
    			}
    	},
    	devServer: {
    		open: true,
    		host: 'localhost',
    		port: 8888,
    		https: false,
    		//以上的ip和端口是我们本机的;下面为需要跨域的
    		proxy: { //配置跨域
    			'/api': {
    				target: 'http://localhost:8688/', //这里后台的地址模拟的;应该填写你们真实的后台接口
    				ws: true,
    				changOrigin: true, //允许跨域
    				pathRewrite: {
    					'^/api': '' //请求的时候使用这个api就可以
    				}
    			}

    		}
    	}
    };