
---

# 📘 Project Root README.md (Portfolio & GPT-Friendly)

**File:** `README.md`

```markdown
# ShopLab (React Native + TypeScript + Clean Architecture)

## 🚀 Overview
ShopLab is an **E-commerce mobile application** built with:
- **React Native (Expo + TS)**
- **Redux Toolkit (RTK)**
- **Firebase (Auth, Firestore)**
- **Clean Architecture principles**

The app demonstrates:
- Modular folder structure
- Modern state management with RTK
- Firebase integration
- Documentation-first approach (every screen documented with flow diagrams)

---

## 📂 Folder Structure

src/
app/ # Global providers (store, App.tsx, configs)
data/ # Firebase, API, repositories
domain/ # Entities, Use Cases
presentation/
navigation/ # Stack & Tab navigators
screens/ # UI Screens (Landing, Login, Product, etc.)
docs/
screens/ # Documentation per screen (Markdown)
diagrams/ # Mermaid / UML diagrams



---

## 🛠️ Tech Stack
- **React Native (Expo)**
- **TypeScript**
- **Redux Toolkit (RTK)**
- **Firebase (Auth, Firestore, Storage)**
- **Jest + React Testing Library** for unit/UI testing

---

## 🎯 Features Roadmap
- [x] Landing screen
- [x] Authentication (Login, Register, Forgot Password)
- [ ] Product listing & detail
- [ ] Cart & Checkout
- [ ] Order history
- [ ] Analytics & offline sync
- [ ] Test-driven development (TDD)

---

## 🧭 Documentation Approach
- Each screen documented under `docs/screens/`.
- Each doc includes:
  - Purpose
  - Responsibilities
  - Clean Architecture mapping
  - Navigation flow (Mermaid diagrams)
  - Notes

This makes the project **portfolio-ready and GPT-friendly**.

---

## ⚡ Getting Started

```bash
git clone https://github.com/hegde10122/ShopLab.git
cd ShopLab
yarn install
npx expo start -c
```


## Implementation Notes

- Uses `react-native-responsive-screen` for responsive layout (`wp`/`hp`)
- Shows `ActivityIndicator` during async operations
- Resets input fields when screen gains focus (`navigation.addListener('focus')`)
- Navigation handled via **React Navigation stack**
- Async calls are handled with `async/await`
- Redux Toolkit used for global state updates
- `window.alert` is temporary; can be replaced with custom modal
- Can be converted to TypeScript:
  - `navigation` typed with `NativeStackScreenProps<RootStackParamList, 'Login'>`
  - State variables typed as `string` or `boolean`

## Screen Name: Landing

- Purpose: Entry screen of the app; allows navigation to Login and Register
- Libraries Used: react-native, react-navigation/native-stack, react-native-safe-area-context, react-native-responsive-screen
- Layer: Presentation Layer
- Domain Interaction: None (pure UI/navigation screen)
- Data Layer Repositories: None

## Screen Name: Login

- Purpose: Authenticate user and navigate to main app
- Libraries Used: react-native, react-redux, react-native-responsive-screen, react-navigation/native-stack
- Layer: Presentation Layer
- Domain Interaction: login(), fetchOrderHistory()
- Data Layer Repositories: AuthRepository, OrderRepository
