import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { initializeAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import {
  EXPO_FIREBASE_API_KEY,
  EXPO_FIREBASE_AUTH_DOMAIN,
  EXPO_FIREBASE_PROJECT_ID,
  EXPO_FIREBASE_STORAGE_BUCKET,
  EXPO_FIREBASE_MESSAGING_SENDER_ID,
  EXPO_FIREBASE_APP_ID,
  EXPO_FIREBASE_MEASUREMENT_ID,
} from '@env';

const firebaseConfig = {
  apiKey: EXPO_FIREBASE_API_KEY,
  authDomain: EXPO_FIREBASE_AUTH_DOMAIN,
  projectId: EXPO_FIREBASE_PROJECT_ID,
  storageBucket: EXPO_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: EXPO_FIREBASE_MESSAGING_SENDER_ID,
  appId: EXPO_FIREBASE_APP_ID,
  measurementId: EXPO_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

let auth;
if (Platform.OS === 'android') {
  auth = initializeAuth(app, {
    persistence: {
      type: 'LOCAL',
      storage: AsyncStorage,
    } as any, // quick fix for typing
  });
} else {
  auth = initializeAuth(app);
  setPersistence(auth, browserLocalPersistence);
}

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { auth, db };
