 <template>
    <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Create Gift</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        </div>

        <form @submit="submitGiftsForm()">
            <div class="modal-body" name="modal-body">
                <div class="mb-3">
                    <label for="tag" class="form-label">tag</label>
                    <input type="text" v-model="editable.tag" required class="form-control" id="tag">
                </div>
                <div class="mb-3">
                    <label for="opened" class="form-label">Opened</label>
                    <input type="text" v-model="editable.opened" required class="form-control" id="opened">
                </div>
                <div class="mb-3">
                    <label for="url" src="" class="form-label">picture</label>
                    <input type="url" v-model="editable.url"  required class="form-control" id="img">
                </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create Gift</button>
            </div>
            </form>
 </template>


 <script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js';
import { Modal } from 'bootstrap';

 export default {
    setup(){
        const editable = ref({})
        // form submission goes here
        return {
            editable,
            async submitGiftsForm(){
                try {
                    logger.log('[SUBMITTING GIFTS FORM]')
                    const formData = editable.value
                    window.event.preventDefault()
                    await giftsService.createGift(formData)
                    editable.value = {}
                    Modal.getOrCreateInstance('#create-gift').hide()

                } catch (error) {
                    logger.log(error)
                }
            }
        }
    }
 }
 </script>


 <style lang="scss" scoped>

 </style>
