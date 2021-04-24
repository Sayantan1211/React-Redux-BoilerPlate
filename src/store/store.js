import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import mainReducer from './slices/main.slice';

const rootReducer = combineReducers({
	main: mainReducer,
});

const persistConfig = {
	key: 'root',
	storage: storage,
	blacklist: ['main'],
};

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: customizedMiddleware,
});
const persistor = persistStore(store);

export default store;
export { persistor };
