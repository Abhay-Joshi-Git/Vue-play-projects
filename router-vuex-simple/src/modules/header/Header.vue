<template functional>
  <b-navbar toggleable="md" variant="secondary">
    <b-navbar-brand href="#">
      <router-link to="/">
        <img
          src="http://wwwcdn.oldcarsweekly.com/wp-content/uploads/Auction-gavel.jpg"
          class="logo"
        />
      </router-link>
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item><router-link to="/events">Events</router-link></b-nav-item>
      <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>

.link-container{
  display: inline-block;
}

.logo {
  height: 50px;
  width: 50px;
}

.nav-item a {
  color: #FFF;
}

</style>
