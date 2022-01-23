"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = require("./src/first");
const user = {
    firstName: "lee",
    lastName: "suwon",
    status: first_1.UserStatus.Editor,
    teamStatus: first_1.TeamStatus.Developer,
};
console.log("isEditActionAvailable:", (0, first_1.isEditActionAvailable)(user));
console.log("isManagerOrLead:", (0, first_1.isManagerOrLead)(user));
