"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nocache_1 = __importDefault(require("nocache"));
const express_session_1 = __importDefault(require("express-session"));
const db_1 = require("./infrastructure/db");
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./interfaces/userRoute"));
const adminRoute_1 = __importDefault(require("./interfaces/adminRoute"));
dotenv_1.default.config();
(0, db_1.connectDb)();
const app = (0, express_1.default)();
app.use((0, express_session_1.default)({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use((0, nocache_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/', userRoute_1.default);
app.use('/', adminRoute_1.default);
app.listen(3000, () => {
    console.log("server is running on 3000");
});
