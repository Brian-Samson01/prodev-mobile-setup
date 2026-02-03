+# First Mobile App with Expo Router
+
+## Objective
+
+Create and run a first React Native mobile application using Expo Router, understand the project scaffolding process, explore the file structure, and test the reset functionality.
+
+## Environment
+
+- Node.js (LTS)
+- VS Code
+- Windows OS
+- Physical Android device
+- Expo Go installed
+
+## Project Setup Steps
+
+1. Navigate to the parent directory:
+
+```bash
+cd prodev-mobile-setup
+```
+
+2. Initialize the Expo project (Router template):
+
+```bash
+npx create-expo-app@latest .
+```
+
+What this did:
+
+- Downloaded the Expo template
+- Installed dependencies automatically
+- Configured Expo Router
+- Generated the starter project structure
+
+3. Install dependencies (if prompted):
+
+```bash
+npm install
+```
+
+4. Modify the Home Screen:
+
+Opened:
+
+```text
+app/(tabs)/index.tsx
+```
+
+Located:
+
+```tsx
+<Text>Welcome!</Text>
+```
+
+Changed to:
+
+```tsx
+<Text>First App Created</Text>
+```
+
+5. Start the development server:
+
+```bash
+npx expo start
+```
+
+6. Run on device:
+
+- Opened Expo Go
+- Scanned QR code
+- App loaded successfully
+- Confirmed updated text: `First App Created`
+
+## Project Structure Explanation
+
+After scaffolding, the main folders created were:
+
+```
+app-example/
+|
+|-- app/
+|   |-- (tabs)/
+|   |   |-- index.tsx   -> Home screen
+|   |   `-- _layout.tsx -> Tab navigation layout
+|   |
+|   `-- _layout.tsx     -> Root navigation config
+|
+|-- assets/             -> Images, icons, fonts
+|-- components/         -> Reusable UI components
+|-- constants/
+|   `-- Colors.tsx      -> App theme colors
+|-- package.json
+`-- README.md
+```
+
+## Key Files
+
+| File | Purpose |
+| --- | --- |
+| index.tsx | Home screen UI |
+| _layout.tsx | Navigation structure |
+| Colors.tsx | App color theme constants |
+| package.json | Project dependencies and scripts |
+
+## Reset the Project
+
+Command used:
+
+```bash
+npm run reset-project
+```
+
+Observations when running the reset command:
+
+- Cache cleared
+- Metro bundler restarted
+- Dependencies refreshed
+- App rebuilt from scratch
+- Development server restarted
+
+Why this is useful:
+
+- Helps when the app behaves unexpectedly
+- Helps when dependencies break
+- Helps with cache issues
+- Helps when changes are not reflecting
+
+Essentially, it performs a clean rebuild of the project.
+
+## Challenges Faced
+
+### 1. Expo command slow on first run
+
+Cause: dependency installation  
+Solution: waited for caching to complete
+
+### 2. QR not loading app
+
+Cause: different Wi-Fi networks  
+Solution: connected both devices to the same network
+
+## Outcome
+
+- [x] Expo Router project created
+- [x] App structure understood
+- [x] Home screen modified successfully
+- [x] App running on real device
+- [x] Reset command tested and understood
+
+The development environment is fully functional for future mobile app development.
