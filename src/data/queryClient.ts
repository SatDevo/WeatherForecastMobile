import { QueryClient } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistQueryClientOptions } from '@tanstack/react-query-persist-client';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 3,
      networkMode: 'offlineFirst',
    },
  },
});

// Create a persister
export const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

// Configure persistence options
export const persistOptions: PersistQueryClientOptions = {
  queryClient,
  persister: asyncStoragePersister,
  // Maximum age of cache in milliseconds
  maxAge: 1000 * 60 * 60 * 24, // 24 hours
};

export default queryClient;

