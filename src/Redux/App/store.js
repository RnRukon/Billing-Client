import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { billingsApi } from '../Featurse/Billings/BillingsApi';
import { userApi } from '../Featurse/Users/UserApi/userApi';
import userSlice from '../Featurse/Users/UserSlice/UserSlice'



const store = configureStore({
    reducer: {


        [billingsApi.reducerPath]: billingsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        users: userSlice,
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( userApi.middleware,billingsApi.middleware),

})

setupListeners(store.dispatch)

export default store;