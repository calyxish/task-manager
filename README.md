# Task Manager UI - DCIT 324

A beautifully designed, scrollable task management interface built with React Native and Expo. This project was developed for the **DCIT 324** coursework, strictly adhering to the provided Figma reference design while incorporating custom 3D assets and original data.

## Features & Assignment Requirements Met

- **Pixel-Perfect UI:** Accurately matches the provided Figma design, including layout, colors (`#F7F0E8` background), and typography weights.
- **Dynamic Categories (Horizontal Scroll):** Utilizes a horizontal `<FlatList>` to display 7 unique category cards, including custom original entries (Internet Surfing, Gifting, Rocket Science, Travel, Robots) alongside the base Exercise and Study cards.
- **Ongoing Tasks (Vertical Scroll):** Implements a vertical `<ScrollView>` rendering 8 distinct tasks for the day, combining default tasks with custom additions (e.g., Reading Research Papers, Learning to Drive).
- **Custom 3D Assets:** Integrates high-quality Saly 3D illustrations mapped dynamically to specific categories.
- **Native Components Only:** Built entirely with core React Native components (`View`, `Text`, `Image`, `ScrollView`, `FlatList`, `TextInput`, `TouchableOpacity`). 
- **No External Navigation:** Adheres strictly to the rule of excluding third-party navigation libraries like React Navigation.
- **Safe Area Handling:** Integrates `react-native-safe-area-context` to ensure the UI renders perfectly below modern device notches and the Dynamic Island.

## Tech Stack

- **Framework:** React Native / Expo (Blank JavaScript Template)
- **Styling:** React Native StyleSheet (Flexbox)
- **Icons:** Custom Figma Exports & Expo Vector Icons
