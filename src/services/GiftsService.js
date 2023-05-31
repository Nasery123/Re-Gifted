import { AppState } from "../AppState.js"
import { Gifts } from "../models/Gift.js"
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
        // const res = await api.put('api/gifts' + id, gifts)
        // console.log('[OPENING GIFTS]', res.data)
    }

}
export const giftsService = new GiftsService()
