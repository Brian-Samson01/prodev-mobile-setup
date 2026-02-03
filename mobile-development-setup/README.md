# Mobile Development Environment Setup (Expo + React Native)

## Objective

Set up and test a mobile development environment using the Expo framework for React Native. Expo simplifies mobile development by allowing apps to run directly on a physical device using Expo Go, without heavy emulators.

## System Requirements

- Node.js (LTS version)
- Visual Studio Code (VS Code)
- Windows 10/11 (64-bit) or macOS/Linux equivalent
- Physical smartphone (Android or iOS)
- Stable internet connection

## Installed Tools and Versions

| Tool | Version |
| --- | --- |
| Node.js | v18+ LTS |
| npm | v9+ |
| VS Code | Latest |
| Expo Go | Latest (from Play Store/App Store) |

## Setup Process

### 1. Verify Node.js Installation

Checked installation:

```bash
node -v
npm -v
```

Both commands returned version numbers successfully.

### 2. Install Expo CLI

Installed Expo globally:

```bash
npm install -g expo-cli
```

Verified:

```bash
expo --version
```

### 3. Install Expo Go on Mobile Device

Steps followed:

- Visited `https://expo.dev/go`
- Selected latest SDK
- Installed Android from Google Play Store
- Installed iOS from Apple App Store
- Opened the Expo Go app
- Created an Expo account and logged in

### 4. Create a Test Project

Created a starter Expo app:

```bash
npx create-expo-app my-first-app
cd my-first-app
npm start
```

### 5. Run the App on Physical Device

Steps:

- Started development server (`npm start`)
- QR code appeared in terminal/browser
- Opened Expo Go on phone
- Scanned QR code
- App loaded successfully on device

## Project Structure Created

```
mobile-development-setup/
|-- README.md
`-- my-first-app/
```

## Challenges Faced and Solutions

### Problem 1: Expo command not recognized

Cause:

- Expo CLI not installed globally

Solution:

```bash
npm install -g expo-cli
```

### Problem 2: Phone not connecting to development server

Cause:

- PC and phone were on different Wi-Fi networks

Solution:

- Connected both devices to the same Wi-Fi network

### Problem 3: Slow initial build

Cause:

- First-time dependency installation

Solution:

- Waited for caching to complete (subsequent builds were faster)

## Why Expo Go?

Benefits observed:

- No emulator setup required
- Faster testing on real device
- Cross-platform (Android and iOS)
- Lightweight and beginner-friendly
- Reduced hardware requirements

## Outcome

- [x] Node.js installed
- [x] Expo CLI installed
- [x] Expo Go installed
- [x] Test React Native app successfully running on physical device

The mobile development environment is fully operational and ready for future projects.

## Author

Brian Samson Njunu Mwangi  
Geospatial Engineering Student  
Aspiring Spatial Data Scientist and Mobile Developer
