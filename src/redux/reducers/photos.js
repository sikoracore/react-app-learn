import { GET_PHOTOS_FAILED, GET_PHOTOS_STARTED, GET_PHOTOS_SUCCESS, GET_PHOTOS_TOTAL} from '../actionCreators/photos'

const initialState = {
   photos: [],
   isProtosLoading: true,
   totalPhotos: 0,
}

export const photosReduser = (state = initialState, action) => {
   switch(action.type) {
      case GET_PHOTOS_STARTED:
         return {
            ...state,
            isProtosLoading: true,
         };

      case GET_PHOTOS_FAILED: 
         return {
            ...state,
            isProtosLoading: false,
         };
      case GET_PHOTOS_SUCCESS:
         return {
            ...state,
            photos: action.payload,
            isProtosLoading: false,
         };
      case GET_PHOTOS_TOTAL:
         return {
            ...state,
            totalPhotos: action.payload,
         };
      default: {
         return {
            ...state
         };
      }
   }
};