import { GET_PHOTOS_FAILED, GET_PHOTOS_STARTED, GET_PHOTOS_SUCCESS} from '../actionCreators/photos'

const initialState = {
   photos: [],
   isProtosLoading: true
}

export const photosReduser = (state = initialState, action) => {
   switch(action.type) {
      case GET_PHOTOS_STARTED:
         return {
            ...state,
            isProtosLoading: true,
         }

      case GET_PHOTOS_FAILED: 
         return {
            ...state,
            isProtosLoading: false,
         }
      case GET_PHOTOS_SUCCESS:
         return {
            ...state,
            photos: action.payload,
            isProtosLoading: false,
         }
      default: {
         return {
            ...state
         }
      }
   }
};