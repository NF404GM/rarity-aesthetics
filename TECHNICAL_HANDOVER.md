# Technical Handover & Diagnostic Brief: Rarity Aesthetics

This document provides a full technical overview of the Rarity Aesthetics website to assist an external developer or engineer in diagnosing the persistent "White Screen of Death" issue.

## 1. Core Technology Stack

- **Framework**: React 18.3.1 (Vite-based)
- **3D Engine**: Three.js (v0.173.0)
- **React 3D Bridge**: `@react-three/fiber` (v8.16.1) & `@react-three/drei` (v9.102.6)
- **Styling**: Tailwind CSS (v3.4.17)
- **Animation**: Framer Motion (v12.34.0)
- **Routing**: React Router Dom (v7.13.0)
- **Environment**: Node.js / npm

## 2. Application Architecture

### Entry Points

- **HTML**: `index.html` (Entry: `src/main.jsx`)
- **React Root**: `src/main.jsx` -> `App.jsx`
- **Layout**: `src/components/layout/Layout.jsx` (Wraps all routes with Header/Footer/Lenis)

### Implementation Summary

- **Hero Section**: Located in `src/pages/Home.jsx`. It utilizes a custom `CloudScene` component (`src/components/3d/CloudScene.jsx`) for a volumetric WebGL cloud effect.
- **3D Scene**: Uses `Standard` Three.js geometry and a procedural `CanvasTexture` for clouds to eliminate external asset dependencies.

## 3. The "White Screen" Diagnostic Log

Despite a successful production build (`npm run build`), the development server often presents a blank white screen.

### Captured Critical Error

Using automated browser diagnostics, the following runtime exception was captured from the console:
**Error**: `TypeError: Cannot read properties of undefined (reading 'S')`
**Trace**: Occurs within the `@react-three/fiber` reconciler (`Tt.exports` in Vite chunks).

### Analysis of the Error

- **The 'S' Property**: In the React Three Fiber source, "S" often refers to internal React hooks (like `React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`).
- **The Cause**: This usually indicates a **Version Mismatch** or **Multiple React Instances**.
  - The project was recently attempted on R3F v9 (React 19 native), which caused this crash on React 18.
  - I have downgraded to R3F v8, which is the stable version for React 18, but the crash persists for the user.
- **Potential Resolution Path**:
  - Verification of `node_modules` for duplicate `react` packages.
  - Checking for WebGL 1 vs WebGL 2 compatibility in the user's browser environmental context.

## 4. Troubleshooting Steps Taken

1. **Dependency Downgrade**: Reverted `package.json` to stable React 18 / R3F v8 builds.
2. **Procedural Textures**: Switched from `.png` textures to `CanvasTexture` to rule out image loading blockers.
3. **ErrorBoundary**: Wrapped the `Home` component in `src/components/core/ErrorBoundary.jsx` to catch and display hooks/render errors visually.
4. **Process Cleanup**: Explicitly killed Node processes and cleared Vite caches (`vite --force`).

## 5. Current File State for Review

- **`package.json`**: Contains the standardized dependency list.
- **`src/components/3d/CloudScene.jsx`**: The root of the 3D implementation.
- **`src/pages/Home.jsx`**: The page where the crash is localized.
- **`DEBUG_LOG.md`**: Chronological log of investigative steps.

## 6. Known Potential Blockers for the Next Engineer

- **Vite Caching**: Vite's pre-bundling system sometimes preserves old, broken modules even after `npm install`. Use `npm run dev -- --force`.
- **Port Conflict**: Multiple ghost Node processes were found listening on 5173.
- **Suspense Boundary**: The `CloudScene` is wrapped in `<Suspense fallback={null}>`. If `three-drei` fails to initialize internally, it may hang in the null state indefinitely.

---
**Document Generated for Rarity Aesthetics Audit**
*Date: 2026-02-10*
