# React-Project
npx create-react-app app_name[to create react app]
npm install react-bootstrap bootstrap[add bootstrap]

For adding font awesome
npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest
npm i react-notification [for install notification packeges]
To add Tailwind
npm install -D tailwindcss
npx tailwindcss init

In tailwindcss.config.js

/** @type {inport('tailwindcss').config}
module.exports = {
    content : [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

In index.js
@tailwind base;
@tailwind components;
@tailwind utilities;