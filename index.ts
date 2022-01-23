enum UserStatus {
  Administrator = 1,
  Author = 2,
  Contributor = 3,
  Editor = 4,
  Subscriber = 5,
}

interface User {
  firstName: string;
  lastName: string;
  status: UserStatus;
}

const EDIT_ROLES = [
  UserStatus.Administrator,
  UserStatus.Author,
  UserStatus.Editor,
];

function roleCheck<D, T>(
  selector: (data: D) => T,
  roles: T[]
): (value: D) => boolean {
  return (value: D) => roles.includes(selector(value));
}

const isEditActionAvailable = roleCheck(
  (user: User) => user.status,
  EDIT_ROLES
);

console.log('result:',
  isEditActionAvailable({
    firstName: "lee",
    lastName: "suwon",
    status: UserStatus.Editor,
  })
);
