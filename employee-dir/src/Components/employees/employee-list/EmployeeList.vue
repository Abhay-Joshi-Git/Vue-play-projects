<template>
  <div>
    <h1>Employee List</h1>
    <div v-for="emp in employees" :key="emp.id">{{emp.name}}</div>
  </div>
</template>

<script src="./EmployeeList.js">
</script>
