const obj = {
    data() {
        return {
            matn1: "moshina",
            matn2: "tabiat",
            matn3: "qush",
            rasm: "moshina.jpg",
            list:[
                {link:"moshina", img: "moshina.jpg"},
                {link:"tabiat", img: "tabiat.jpeg"},
                {link:"qush", img: "qush.jpg"}
            ]
        }
    },  
    methods: {
        button1(){
            this.rasm = this.list[0].img
        },
        button2(){
            this.rasm = this.list[1].img
        },
        button3(){
            this.rasm = this.list[2].img
        }
    }
}
Vue.createApp(obj).mount('.container')