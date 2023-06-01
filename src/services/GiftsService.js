import { AppState } from "../AppState.js"
import { Gifts } from "../models/Gift.js"
// import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {
    async getGifts() {
        const res = await api.get('api/gifts')
        AppState.gifts = res.data.map(g => new Gifts(g))
        console.log(res.data)
    }
    async openGifts(id) {
        const gift = AppState.gifts.find(g => g.id == id)
        gift.opened = !gift.opened
        console.log('OPENING THE GIFT', gift.opened)
        const res = await api.put('api/gifts' + id, gift)
        console.log('[OPENING GIFTS]', res.data)
    }
    async createGift(formdata) {
        const res = await api.post('api/gifts', formdata)
        console.log('here is the created gift', res.data)
        AppState.gifts.unshift(new Gifts(res.data))

    }
    async deletGift(id) {
        const res = await api.delete(`api/gifts/${id}`)
        AppState.gifts = AppState.gifts.filter(g => g.id != id)
    }

}
export const giftsService = new GiftsService()
