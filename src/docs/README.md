
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

