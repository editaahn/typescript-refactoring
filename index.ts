import { isEditActionAvailable, isManagerOrLead, TeamStatus, UserStatus } from "./src/first";

const user = {
  firstName: "lee",
  lastName: "suwon",
  status: UserStatus.Editor,
  teamStatus: TeamStatus.Developer,
};


console.log(
  "isEditActionAvailable:",
  isEditActionAvailable(user)
);


console.log(
  "isManagerOrLead:",
  isManagerOrLead(user)
);
