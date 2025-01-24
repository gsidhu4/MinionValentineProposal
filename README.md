# Valentines 2025 Web App

This is a fun, interactive web app where users can answer a Valentine proposal with either "Yes" or "No". The app displays cute animations, confetti, and personalized responses based on the user's choice. It also includes a 3D model for extra flair and dog side-eye images that cycle when the "No" button is clicked.

## Features
- **Confetti Effect**: Triggered when the user clicks "Yes", with accompanying audio.
- **Random Dog Side-Eye Images**: When the user clicks "No", a random dog side-eye image from a set of images is displayed.
- **3D Model**: A 3D model displayed using `react-three-fiber` that automatically rotates for a fun and dynamic experience.
- **Animated Heart**: A heart icon that adds to the interactive Valentine's theme.
- **Responsive Design**: Works well on various screen sizes and devices.

## Technologies Used
- **React**: For building the user interface.
- **react-spring**: For animations.
- **react-icons**: For adding icons like the heart.
- **react-confetti**: For the confetti effect.
- **@react-three/fiber**: For rendering 3D content using WebGL.
- **@react-three/drei**: For additional 3D components like `OrbitControls` and `useGLTF`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/valentines2025.git
2. Install the dependencies
   ```bash
   npm install
3. Run the app locally
   ```bash
   npm start

Usage
1. The app asks the user if they'll be their Valentine. The user can click "Yes" or "No".
2. If "Yes" is clicked, the app shows a minion gif, plays rich minion by Yeat, and drops confetti.
3. If "No" is clicked, doge side eye images are shown with the meme sound effect to go along with it. The "Yes" button also becomes larger.

Author
Created by Gurbachan Sidhu

