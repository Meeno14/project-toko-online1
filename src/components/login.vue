<template>
  <div class="a">
    <div class="kotak_login shadow p-3 mb-5 bg-white rounded">
      <p class="tulisan_login">Silahkan login</p>
      <br />
      <form style="text-align: center">
        <label>Email</label>
        <input
          type="text"
          name="username"
          v-model="email"
          class="form_login"
          placeholder="Email .."
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form_login"
          placeholder="Password .."
        /><br />
        <div class="d-grid gap-2">
          <button @click="login" class="btn btn-lg btn-danger">
            <b>Login</b>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      users: {},
    };
  },
  methods: {
    async getUsers() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login() {
      const login = this.users.find(
        (data) => data.email === this.email && data.password === this.password
      );
      if (login === undefined) {
        alert("Username Or Password not found");
      } else {
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        this.$router.push("/");
        window.location.reload();
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style>
body {
  padding-top: 80px;
}
.a {
  display: grid;
  place-items: center;
}
.kotak_login {
  text-align: center;
  margin: 30px auto;
  width: 350px;
  font-size: 20px;
  border-radius: 15px;
}
.form_login {
  width: 100%;
  margin-bottom: 20px;
}
</style>
