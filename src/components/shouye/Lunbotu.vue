<template>
    <div class="lunbotu">
      <van-swipe :autoplay="3000" indicator-color="#F50">
        <van-swipe-item>
          <img src="https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.lunbotu {
  .van-swipe__indicator {
    background: white;
    opacity: 1;
  }
  img {
    width: 100%;
  }
}
</style>