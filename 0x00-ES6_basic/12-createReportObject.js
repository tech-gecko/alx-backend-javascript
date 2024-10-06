export default function createReportObject(employeesList) {
  const returnObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return returnObject;
}
