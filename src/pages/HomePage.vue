<template>
  <section>
    <div class="container-fluid">
      <div class="row justify-content-center">
      <div class="col-md-4 g-card" v-for="g in gifts" :key="g.id">
      <GiftsCard :giftProp="g" />
      </div>
    </div>
  </div>

    <!-- {{ gifts }} -->
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import {giftsService} from '../services/GiftsService.js'
import GiftsCard from '../components/GiftsCard.vue'
import { computed } from '@vue/reactivity'
import {AppState} from '../AppState.js'


export default {
    setup() {
        async function getGifts() {
            try {
                logger.log("here is the home page");
                await giftsService.getGifts();
            }
            catch (error) {
                logger.log(error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getGifts();
        });
        return {

          gifts :computed(() => AppState.gifts)
        };
    },
    components: { GiftsCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 100px;
      max-width: 100px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .g-card{
    background-color: aliceblue;

}
}
</style>
