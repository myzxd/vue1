<template>
    <div class="loding" v-show="ishow">
        <div class="lod" >
            ....加载中
        </div>
    </div>
</template>
<script>
    export default {
          data(){
              return{
                  ishow:false
              }
          },
          methods:{
              show(){
                  this.ishow=true
              },
              hide(){
                  this.ishow=false
              }
          }
    }
</script>
<style scoped lang="less">
    .loding{
        position: absolute;
        top:0;
        left:0;
        right: 0;
        bottom:0;
        z-index: 20000;
        background: red;
        .lod{
            width:200px;
            height: 100px;
            background: rgba(0,0,0,.5);
            color:#fff;
            font-size: 16px;
            text-align: center;
            line-height: 100px;
            border-radius: 10px;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
        }
    }
</style>
