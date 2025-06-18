# 🛒 StateCraft – Angular State Management Showcase

**StateCraft** is a mock e-commerce application built with Angular and NgRx to demonstrate clean and scalable state management across cart, inventory, and user modules.

---

## 🔍 Features

- 🔁 Centralized state management with **NgRx Store**
- ⚡ Side effects and async operations using **NgRx Effects**
- 🛒 Interactive **Cart Module** with stateful logic
- 📦 **Inventory Module** with live stock validation
- 👤 Auth simulation (Customer/Admin roles)
- 🧠 Memoized selectors and **OnPush** components
- 🧪 Unit testing of store, selectors, and effects
- 🧰 Integrated with **NgRx DevTools** for debugging

---

## 🚀 Technologies

- Angular 20+
- NgRx (Store, Effects, Entity)
- RxJS 7+
- Angular Material / Tailwind (choose one)
- Mock API with JSON-server / Firebase (optional)

---

## 🧱 Modules

```
src/
├── app/
│ ├── store/ # Global store config (app state, reducers, meta)
│ ├── features/
│ │ ├── products/ # Standalone component + feature store
│ │ ├── cart/
│ │ ├── auth/
│ │ ├── orders/
│ └── shared/ # Shared components, pipes, UI
├── assets/
├── environments/
```

## 🧪 Testing

- ng test

## 🗣️ Why I Built This

_In my Angular experience, managing complex forms, carts, or dashboards often required shared state and async flows. I built StateCraft to deepen my understanding of NgRx and explore how large-scale Angular apps can be architected cleanly._

## 📚 Learnings

- Component isolation vs global state
- Effect patterns for API workflows
- Change detection optimizations
- Time travel debugging with NgRx DevTools

## ✅ Roadmap

- [ ] Product listing with async load
- [ ] Cart module with NgRx state
- [ ] Auth and role-based routes
- [ ] Order history (persisted state)
- [ ] UI/UX polish and mobile responsiveness
