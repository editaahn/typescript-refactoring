export enum UserStatus {
  Administrator = 1,
  Author = 2,
  Contributor = 3,
  Editor = 4,
  Subscriber = 5,
}

export enum TeamStatus {
  Lead = 1,
  Manager = 2,
  Developer = 3,
}

export interface User {
  firstName: string;
  lastName: string;
  status: UserStatus;
  teamStatus: TeamStatus;
}

const EDIT_ROLES = [
  UserStatus.Administrator,
  UserStatus.Author,
  UserStatus.Editor,
];

const MANAGER_OR_LEAD = [TeamStatus.Lead, TeamStatus.Manager];

function roleCheck<D, T>(
  selector: (data: D) => T,
  roles: T[]
): (value: D) => boolean {
  return (value: D) => roles.includes(selector(value));
}

export const isEditActionAvailable = roleCheck(
  (user: User) => user.status,
  EDIT_ROLES
);

export const isManagerOrLead = roleCheck(
  (user: User) => user.teamStatus,
  MANAGER_OR_LEAD
);

