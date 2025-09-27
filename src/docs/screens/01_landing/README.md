# Landing Screen — ShopLab

**File:** `src/presentation/screens/Landing/LandingScreen.tsx`  
**Screen type:** Presentation (entry point / stateless container)  
**Status:** Implemented (bare-bones UI with navigation to Login / Register)

---

## Purpose
The Landing screen is the app **entry point**. It welcomes users and offers navigation choices:
- **Login** — existing users
- **Register** — new users

It is intentionally minimal and acts as a navigation gateway — no business logic or data persistence lives here.

---

## File / Exports
- **Component:** `LandingScreen` (default export)  
- **Expected to receive:** `navigation` (from React Navigation) typed as `NativeStackScreenProps<RootStackParamList, 'Landing'>` when using TypeScript.

---

## Implementation Notes
- **SafeAreaView**: Use to avoid the device notch/status bar region.
- **Layout**: Centered vertical layout using `flex`, `justifyContent`, `alignItems`.
- **Responsive sizing**: Use `react-native-responsive-screen` (`wp`, `hp`) to scale fonts, paddings and button sizes across devices.
- **Pressable**: Use `Pressable` (instead of `TouchableOpacity`) for better press-state control and performance.
- **Styling**: Shared styles via `StyleSheet.create` for performance and readability.
- **Navigation**: Use `navigation.navigate('Login')` / `navigation.navigate('Register')`. Keep `initialRouteName="Landing"` in navigator to make the entry explicit.
- **Type Safety (TS)**: Use `RootStackParamList` for `navigation` typing; use `NativeStackScreenProps` for screen props.
- **Minimal responsibilities**: This screen should not call APIs, handle auth, or mutate global state—only navigate and optionally log analytics events.

---

