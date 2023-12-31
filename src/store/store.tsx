import {
    configureStore,
    combineReducers,
    ThunkAction,
    Action,
} from "@reduxjs/toolkit";

// import ticketReducer from "./middleware";
import UserSlice from "./UserSlice";
const rootReducer = combineReducers({
        Users: UserSlice,
    
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;