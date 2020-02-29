<template>
<!-- 商品 -->
<!-- 左 -->
    <div class="goods-div">
       <div class="left-div">
         <ul class="content">
           <div @click="clickLe(index)" 
           :class="{leftGoods:true,selected:index == curSelected}"
            v-for="(item,index) in list"
             :key="item.name">
          <span> <img width="12px" v-show="item.type == 2"  src="../assets/imgs/img/special_3@2x.png" alt=""/>
           {{ item.name }}</span>
           </div>
        </ul>
       </div>
<!-- 右 -->
       <div class="right-div">
         <ul class="content">
          <div :id="index" v-for="(item,index) in list" :key="item.id">
           <div class="title">
                    <p>{{item.name}}</p>
            </div>
            <div class="good">
                    <div class="good-list"  v-for="obj in item.foods" :key="obj.name">
                        <div class="img">
                            <img :src="obj.icon" alt="">
                        </div>
                        <div class="msg">
                            <p class="name">{{obj.name}}</p>
                            <p class="description">{{obj.description}}</p>
                            <p>
                                <span class="sellCount">月售{{obj.sellCount}}份  </span>
                                <span class="rating">评分{{obj.rating}}</span>
                            </p>
                            <p>
                                <span class="price">￥{{obj.price}}  </span>
                                <span class="oldPrice">{{obj.oldPrice}}</span>
                            </p>
                        </div>
                        <div class="btn">
                            <!-- <button>-</button> -->
                            <!-- <span>  1  </span> -->
                            <button>+</button>
                        </div>
                    </div>
                </div>
          </div>

         </ul>
          
       </div>
    </div>
</template>

<script>
import { getGoods } from "../api/apis.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      list: [],
      curSelected:0
    };
  },
  
  created() {
    getGoods().then(res => {
      this.list = res.data.data;
    });
  },
  mounted() {
    new BScroll(document.querySelector(".left-div"),{
      click:true
    });

   this.rightDiv = new BScroll(document.querySelector(".right-div"));
    
  },
  methods:{
      clickLe(index){
      this.curSelected = index
      this.rightDiv.scrollToElement(document.getElementById(index),1000);
     }
  }
};
</script>

<style lang="less" scoped>
.selected{
background: #fff;
}
.goods-div {
  flex: 1;
  display: flex;
  height: 400px; 
  // 左边
  .left-div {
    height: 100%;
    width: 80px;
    background-color: #f4f5f7;
    overflow: scroll;
    .leftGoods {
      height: 60px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
     
      span{
        margin: 0 10px;
      }
    }
  }
  // 右边
  .right-div {
    flex: 1;
    overflow: scroll;
    .title {
      height: 30px;
      background: #f4f5f7;
      p {
        line-height: 30px;
        text-indent: 1em;
      }
    }
    .good {
      padding: 0 20px;
      .good-list {
        position: relative;
        display: flex;
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
        .img {
          width: 60px;
          height: 60px;
          margin-right: 10px;
          img {
            width: 60px;
            height: 60px;
          }
        }
        .msg {
          flex: 1;
          color: #95989d;
          font-size: 12px;
          .name {
            color: #000;
            font-size: 14px;
          }
          .description {
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            .price {
              font-size: 16px;
              color: #fa1c0f;
              font-weight: bold;
            }
            .oldPrice {
              font-size: 12px;
              text-decoration: line-through;
            }
          }
        }
        .btn {
          position: absolute;
          right: 10px;
          bottom: 10px;
          button {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 0;
            background: cornflowerblue;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>