export default function createEmployeesObject(departmentName, employees) {
  const iterator = {
    [departmentName]: [...employees]
  };

  return iterator;
}
