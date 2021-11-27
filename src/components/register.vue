<template>
  <div class="a">
    <div class="kotak_login shadow p-3 mb-5 bg-white rounded">
      <p class="tulisan_login">Silahkan Daftar</p>
      <br />
      <form style="text-align: center">
        <label>Username</label>
        <input
          type="text"
          name="username"
          v-model="username"
          class="form_login"
          placeholder="Username .."
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
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
            <b>Daftar</b>
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
      username: "",
      picture: "",
    };
  },
  methods: {
    async login() {
      switch (Math.floor(Math.random() * 16)) {
        case 0:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-11.jpg";
          break;
        case 1:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-12.jpg";
          break;
        case 2:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-13.jpg";
          break;
        case 3:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-14.jpg";
          break;
        case 4:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-15.jpg";
          break;
        case 5:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-16.jpg";
          break;
        case 6:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-17.jpg";
          break;
        case 7:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-18.jpg";
          break;
        case 8:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-19.jpg";
          break;
        case 9:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-20.jpg";
          break;
        case 10:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-21.jpg";
          break;
        case 11:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-22.jpg";
          break;
        case 12:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-23.jpg";
          break;
        case 13:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-24.jpg";
          break;
        case 14:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-25.jpg";
          break;
        case 15:
          this.picture =
            "https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-26.jpg";
          break;
      }
      {
        const payload = {
          email: this.email,
          username: this.username,
          saldo: 0,
          password: this.password,
          picture: this.picture,
          roles: "user",
        };
        const register = await axios.post(
          "http://localhost:3000/users",
          payload
        );
        var convertToString = JSON.stringify(register.data);
        sessionStorage.setItem("USER_DATA", convertToString);
        this.$router.push("/");
      }
    },
  },
};
</script>