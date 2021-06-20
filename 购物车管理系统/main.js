const app = new Vue({
  el:"#app",
  data:{
    message:"请选择您的菜单：",
    menus:[
      {name:"虾尾",price:68,num:0},
      {name:"大盘鸡",price:88,num:0},
      {name:"羊肉串",price:5,num:0},
      {name:"五花肉",price:5,num:0},
      {name:"羊眼",price:5,num:0},
      {name:"腰子",price:15,num:0},
      {name:"鱿鱼",price:3,num:0},
      {name:"金针菇",price:2,num:0},
      {name:"茄子",price:10,num:0},
      {name:"面筋",price:2,num:0},
      {name:"鱼豆腐",price:2,num:0},
      {name:"瑞瑞牌午餐肉",price:3,num:0},
      {name:"雪花勇闯天涯",price:3,num:0},
      {name:"金星啤酒",price:3,num:0},
      {name:"青岛啤酒",price:6,num:0},
    ]
  },
  methods:{
    decrease(index){
      this.menus[index].num --
    },
    increase(index){
      this.menus[index].num ++
    },
    totalPrice(){
     return this.menus.reduce((pre,menu) => pre + menu.num * menu.price,0)
    },
    remove(index){
      this.menus.splice(index,1)
    }
  }
})