"use strict";
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Administrator"] = 1] = "Administrator";
    UserStatus[UserStatus["Author"] = 2] = "Author";
    UserStatus[UserStatus["Contributor"] = 3] = "Contributor";
    UserStatus[UserStatus["Editor"] = 4] = "Editor";
    UserStatus[UserStatus["Subscriber"] = 5] = "Subscriber";
})(UserStatus || (UserStatus = {}));
const EDIT_ROLES = [
    UserStatus.Administrator,
    UserStatus.Author,
    UserStatus.Editor,
];
function roleCheck(selector, roles) {
    return (value) => roles.includes(selector(value));
}
const isEditActionAvailable = roleCheck((user) => user.status, EDIT_ROLES);
console.log('boolean:', isEditActionAvailable({
    firstName: "lee",
    lastName: "suwon",
    status: UserStatus.Editor,
}));
