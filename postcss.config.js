/**
 * Created by fan.xinlong on 2017/11/2.
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                'iOS >= 7',
                'Android >= 4.1',
                'last 10 Chrome versions',
                'last 10 Firefox versions',
                'Safari >= 6', 'ie > 8'
            ]
        })
    ]
}