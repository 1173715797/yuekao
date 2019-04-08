var gulp = require('gulp');
var web = require('gulp-webserver');

gulp.task('web', function() {
    return gulp.src('./src/')
        .pipe(web({
            open: true,
            port: 9090,
            proxies: [
                { source: '/api/chazhao', target: 'http://localhost:3000/api/chazhao' },
                { source: '/api/charu', target: 'http://localhost:3000/api/charu' },
                { source: '/api/shanchu', target: 'http://localhost:3000/api/shanchu' },
                { source: '/api/genggai', target: 'http://localhost:3000/api/genggai' }
            ]
        }))
})