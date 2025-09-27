# create expo app (TypeScript template)
npx create-expo-app ShopLab --template expo-template-blank-typescript
cd ShopLab
# install recommended deps (you can use yarn/npm)
npm install @reduxjs/toolkit react-redux
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
# Firebase RN modules 
# For now just keep firebase config placeholder; when ready:
# yarn add @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore @react-native-firebase/storage @react-native-firebase/analytics


# initialize git (optional immediate)
git init
