"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.app.listen(process.env.PORT, () => console.log(`App is running on http://localhost:${process.env.PORT}/open`));
