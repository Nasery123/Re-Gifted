<template>

<card class="gif">
    <img class="image-fluid gift-image rounded elevation-5" @click="openGift(giftProp?.id)"  :src="giftProp?.opened ? giftProp.url : 'https://images.fineartamerica.com/images-medium-large-5/white-gift-box-with-red-dots-newnow-photography-by-vera-cepic.jpg'" alt="picture is not working for right now">
    <div class="d-flex justify-content-around">
        <p>tag: {{ giftProp.tag }}</p>
        <p>opened: {{ giftProp.opened }}</p>
        <p class="mdi mdi-trash-can text-danger fs-3" @click="deletGift(giftProp.id)"></p>
        <!-- opened(`${giftProp.id}` instead of the image url -->



    </div>
</card>


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
        },
        async deletGift(id) {
        try {
            const yes = await Pop.confirm("do you want to delet the Todo")
            if (!yes) {
                return
            }
            await giftsService.deletGift(id)

        } catch (error) {
            Pop.error(error)

        }
    }
        // },
        // get opened(){
        //     if(giftProp?.opened){
        //         return `${this.giftProp.url}`
        //     }
        //     return "'https://images.fineartamerica.com/images-medium-large-5/white-gift-box-with-red-dots-newnow-photography-by-vera-cepic.jpg'"
        // }
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
.gif{
    background-color: aliceblue;
    display: inline-block;
	color: black;
	width: 90%;
  max-height: 26rem;
	text-decoration: none;
	/* background: hsl(187 75% 64%); */
	border-radius: 0.6rem;
	font-weight: 700;
	border: 0.05rem solid;
}


</style>
