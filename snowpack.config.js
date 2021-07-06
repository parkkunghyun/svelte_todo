module.exports = {
    mount: {
        public: '/',
        //각각의 폴더를 만들어줘야한다
        //public 폴더는 루트폴더이다
        src: '/dist'
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-optimize',
        '@snowpack/plugin-babel',
        '@snowpack/plugin-sass'
    ],
    alias: {
        '~': './src'
        //~쓰면 src폴더이다
    },
    devOptions: {
        port: 8080,
        //근데 기본이 이미 8080이기는 함...
        //open:'none' 하면 브라우저가 자동으로 나오지 않고 별도의 로컬8080에서 오픈함 ??? 이게 뭔말임
        open: 'none'
    }
}