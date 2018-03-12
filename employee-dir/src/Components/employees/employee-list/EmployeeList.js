import employee from '../employee.model';
import cloneDeep from 'lodash/cloneDeep';


const empList = {
  data: function() {
    return {
      employees: []
    }
  },
  mounted: function() {
    fetch('src/Components/employees/employees.json')
    .then(r => r.json())
      .then((res) => {
        this.employees.push(...res);
      })
  }
}

export default empList;