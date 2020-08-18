"scripts": {
    "client": "cd dashboard && npm start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "formidable": "^1.2.2",
    "fs": "0.0.1-security",
    "mongoose": "^5.9.19",
    "multer": "^1.4.2",
    "nodemon": "^2.0.4"
  },
  "devDependencies": {
    "concurrently": "^4.1.2",
    "cors": "^2.8.5"
  }
}
