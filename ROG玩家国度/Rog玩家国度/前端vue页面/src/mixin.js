// 编写共用的混合文件 export分别暴露
export const a = {
    methods: {
        shopBagCount() {
            let tokenString = localStorage.getItem('_lk');
            // 
            if (!tokenString) {
                return;
            }
            
            this.$toast.loading({
                message: "加载中...",
                forbidClick: true,
                duration: 0
            });

            this.axios({
                method: 'GET',
                url: '/shopcartRows',
                params: {
                    appkey: this.appkey,
                    tokenString
                }
            }).then(res => {

                this.$toast.clear();
                if (res.data.code == 8000) {
                    this.bagCount = res.data.result;
                }

            }).catch(err => {
                console.log(err);
                this.$toast.clear();
                
            })
        },
    },

}