<template>
  <div >
<!-- 头部 -->
  <div class="Main-head" >
  <div  class="Main-heads" :style="{backgroundImage:'url('+data.avatar+')'}"></div>
   <div class="Main-head-top">
        <div class="top-left">
          <div>
            <img :src="data.avatar" alt />
          </div>
        </div>
        <div class="top-right">
          <p class="top-p1">
            <img src="../assets/imgs/img/brand@2x.png" alt />
            <strong>{{data.name}}</strong>
          </p>
          <p class="top-p2">{{data.description}}/{{data.deliveryTime}}分钟送达</p>
          <p class="top-p3">
            <span>
              <img src="../assets/imgs/img/decrease_1@2x.png" alt />
              <span>{{ data.supports[0].description}}</span>
            </span>
            <span><router-link to="/Message">5个></router-link></span>
          </p>
        </div>
      </div>
      <div class="top-bottom">
        <img src="../assets/imgs/img/bulletin@2x.png" alt />
        <div>{{data.bulletin}}</div>
        <span>></span>
      </div>
    </div>
<!-- 导航条 -->
    <div class="router-link-div">
      <router-link to='/goods'>商品</router-link>
      <router-link to='/evaluate'>评价</router-link>
      <router-link to='/merchant'>商家</router-link>
    </div>

    <router-view></router-view>
<!-- 购物车 -->
   <div class="shopcar-bar">
      <div class="shop-left">
        <div class="left-left">
          <div class="bottom-circle">
            <img src="../assets/imgs/img/log.png" alt style="width:50px" />
          </div>
        </div>
        <div class="left-right"><span>￥0</span><span class="deliveryPrice">另需配送费￥{{data.deliveryPrice}}元</span></div>
     <div class="shop-right">￥{{data.minPrice}}元起送</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/apis.js";
export default {
  data() {
    return {
      data: { supports: [{ description: "" }], pics: [], avatar: "" }
    };
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.Main-head {
  height: 170px;
  width: 100%;
  position: relative;
  .Main-heads {
    height: 170px;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: rgb(3, 3, 3);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(2px);
  }
  .Main-head-top {
    display: flex;
    height: 138px;
    background-color: rgba(41, 38, 38, 0.4);
    .top-left {
      flex: 1;
      padding: 20px 10px 20px 20px;
      img {
        width: 100px;
        border-radius: 10%;
      }
    }
    .top-right {
      flex: 3;
      padding: 20px 10px 20px 0px;
      color: aliceblue;

      p:not(:last-child) {
        margin-bottom: 10px;
      }
      .top-p3 {
        display: flex;
        justify-content: space-between;
        font: 16px/1.5em;
        color: #c1c1be;
        img {
          width: 16px;
        }
      }
      .top-p1 {
        display: flex;
        align-items: center;
        font-size: 20px;
        img {
          width: 35px;
        }
        strong {
          margin-left: 10px;
        }
      }
      .top-p2 {
        font: 16px/1.5em;
        color: #c1c1be;
      }
      .top-p3 {
        span:first-child {
          display: flex;
          align-items: center;
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .top-bottom {
    padding: 6px 10px;
    width: 100%;
    background-color: rgba(3, 3, 3, 0.6);
    display: flex;
    align-items: center;
    img {
      width: 30px;
    }
    span {
      color: aliceblue;
    }
    div {
      height: 20px;
      width: 100%;
      margin-left: 5px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: aliceblue;
    }
  }
}

// 航条
.router-link-div {
  display: flex;
  height: 40px;
  align-items: center;
  font-size: 16px;
  justify-content: space-around;
  box-shadow: 0 2px 3px -1px #ccc;
  a {
    color: #141427;
    font: bold;
  }
  a:hover {
    color: red;
  }
}
// 购物车
.shopcar-bar {
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0;
  background-color: #141c27;
  .shop-left {
    display: flex;
    flex: 3;
    position: relative;
    .left-left {
      flex: 1;
      .bottom-circle {
        padding: 5px;
        margin-left: 10px;
        background-color: aliceblue;
        border-radius: 50%;
        position: absolute;
        bottom: 16px;
        width: 60px;
        height: 60px;
        background-color: #2a353a;
        img {
          width: 60px;
        }
      }
    }
    .left-right {
      flex: 2;
      line-height: 60px;
      text-align: center;
    }
  }
  .shop-right {
    flex: 1;
    color: #82898c;
    line-height: 60px;
    text-align: center;
    background-color: #2a353a;
    font: 16px/1.5em;
  }
}
</style>