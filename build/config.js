const config = {
    // 源文件目录(相对于 build 文件夹)
    target_dir: '../src',

    // 所有文件输出根目录(相对于 build 文件夹)
    dest_dir: '../dist',

    // css
    styles: {
        // 入口文件
        entry: 'index.scss',

        // 入口文件目录
        target_dir: '/',

        // 输出目录
        dest_dir: '/',

        // 小图片是否转换成base64格式
        base64: true,

        // 自动添加前缀
        autoprefixer: {
            enabled: true,
            options: {
				browsers: [
					'last 2 versions',
					'last 2 Chrome versions',
					'> 5%',
					'> 5% in US',
					'ie >= 9',
					'Firefox >= 20',
					'Firefox <= 20',
					'iOS 7'
				]
			}
        },

        // 输出css是否压缩
        uglify: process.env.NODE_ENV === 'production'
    },

    // 静态文件
    assets: {
        // 文件目录
        target_dir: '/static',

        // 输出目录
        dest_dir: '/static',
    }
};

module.exports = config;
