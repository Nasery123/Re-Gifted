<template>


    <img class="image-fluid gift-image rounded elevation-5" @click="openGift(giftProp.id)"  :src="giftProp?.opened ? giftProp.url : 'https://images.fineartamerica.com/images-medium-large-5/white-gift-box-with-red-dots-newnow-photography-by-vera-cepic.jpg'" alt="">
    <div class="d-flex justify-content-around">
        <p>tag: {{ giftProp.tag }}</p>
        <p>opened: {{ giftProp.opened }}</p>



</div>


</template>


<script>

import { Gifts } from '../models/Gift.js';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js';
import { onMounted } from 'vue';

export default {
    props:{
        giftProp:{ type:Gifts, required:true}
    },
    setup(){

        onMounted(() =>{
            // openGift()
        })
        return {

            async openGift(id){
            try {
                // console.log('please open this gift', id);
                await giftsService.openGifts(id)
            } catch (error) {
        Pop.error(error)
        console.log(error)
            }
        }
        }
    }
}
</script>


<style>
.gift-image{
    height: 280px;
    width: 100%;
    object-fit: cover;
}

</style>
