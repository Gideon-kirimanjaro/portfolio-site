/* eslint-disable no-console */ /* eslint-disable no-console */
<template>
  <div id="dash" class="d-md-flex p-sm-5 mt-sm-3">
    <b-container>
      <div
        v-for="item in dashBoards"
        :key="item.key"
        class="d-md-flex justify-content-around py-4"
      >
        <div class="pl-sm-5">
          <iframe
            target="_blank"
            :title="item.title"
            width="500"
            height="400"
            :src="item.src"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div class="mt-md-5">
          <a id="header-link" class="px-md-5" target="_blank">
            {{ item.title }}
          </a>
          <h4 class="px-md-5 text-light">{{ item.description }}.</h4>
          <!-- <div class="px-5">
            <a target="_blank" href="image.url">
              <b-button variant="success">View it here</b-button></a
            >
          </div> -->
          <hr
            style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
          />
        </div>
      </div>
      <Contact />
    </b-container>
  </div>
</template>

<script>
import Contact from '../components/Contact/Contact'
export default {
  name: 'Dash',
  components: { Contact },
  computed: {
    dashBoards() {
      const dashBoardData = this.$store.state.dashboard.dashBoards
      const sortedDash = dashBoardData.slice(0, 3)
      return sortedDash
    },
  },
  // eslint-disable-next-line vue/order-in-components
  data: () => {
    return {}
  },
  // created() {
  //   this.fetchDash()
  // },
  methods: {
    fetchDash() {},
  },
}
</script>

<style scoped>
h5,
h4 {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Black.ttf');
  padding: 0%;
  box-sizing: border-box;
  margin: 0%;
}
#dash {
  background-color: #ff69b4;
}
#header-link {
  color: #00ffff;
  font-size: 20px;
  font-weight: bolder;
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Black.ttf');
}
</style>
