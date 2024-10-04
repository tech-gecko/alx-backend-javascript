import createEmployeesObject from './11-createEmployeesObject';
const employeesList = createEmployeesObject;

export default function createReportObject(employeesList) {
    const ret_obj = {
        allEmployees: {...employeesList},
        getNumberOfDepartments(employeesList) {
            return Object.keys(employeesList).length;
        }
    };

    return ret_obj;
}