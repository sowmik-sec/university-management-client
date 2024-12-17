const arr = [1, 2, 3, 4];
console.log(arr);

const result = arr.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log(result);

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  acc.push(item);
  return acc;
}, []);

console.log(newArray);
