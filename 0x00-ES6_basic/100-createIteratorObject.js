export default function createIteratorObject(report) {
  let employees = [];
    
  // Loop through each department in allEmployees and collect all employees
  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  }
  
  // Return the iterator for the collected list of employees
  return employees[Symbol.iterator]();
  }
  