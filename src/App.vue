<template>
  <div id="app">
    <div class="nav shadow">
      <div class="nav1">
        <a href="#"
          ><i class="vector vec-nav" style="background-position: 60% 60%"></i
          >Download Tokopedia App</a
        >
        <div class="right">
          <a href="/beranda">Beranda</a>
          <a href="/tentang">Tentang</a>
          <a href="/bisnis">Bisnis</a>
          <a href="/kontak">Kontak</a>
          <a href="/care">Tokopedia Care</a>
          <a href="/berjualan">Mulai Berjualan</a>
          <a href="/mitra">Mitra Tokopedia</a>
        </div>
      </div>
      <div class="nav2">
        <a href="/"
          ><img
            src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
            style="filter: hue-rotate(253deg)"
        /></a>
        <a href="#" style="margin: 0">Kategori</a>
        <div class="search-container">
          <form class="search-form">
            <div class="search-bar">
              <input class="text-search" v-model.lazy="search" type="text" />
              <button class="search"><i class="fas fa-search"></i></button>
            </div>
          </form>
        </div>
        <span class="keranjang vec-nav" style="background-position: 60% 0%"
          ><i @click="$router.push('/keranjang')" class="vector"></i
        ></span>
        <div v-if="!logout" class="login">
          <button @click="$router.push('/login')" class="button masuk">
            <b>Masuk</b>
          </button>
          <button @click="$router.push('/daftar')" class="button daftar">
            <b>Daftar</b>
          </button>
        </div>
        <div v-else-if="logout" class="profile">
          <button
            @click="$router.push('/jual')"
            v-if="logout.roles === 'user'"
            class="button daftar"
          >
            <b>Jual</b>
          </button>
          <button
            @click="$router.push('/costumer')"
            v-if="logout.roles === 'admin'"
            class="button daftar"
          >
            <b>Costumer</b>
          </button>
          <a href="/profile">
            <img :src="logout.picture" width="30px" height="30px" />
            <h6>{{ logout.username }}</h6>
          </a>
          <div class="dropdown-content shadow">
            <div class="profile-drop shadow-sm">
              <a style="margin: 0" href="/profile">
                <img :src="logout.picture" width="48" />
                <h5>{{ logout.username }}</h5>
              </a>
            </div>
            <div class="row">
              <div class="col-drop">
                <div class="payment">
                  <img
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9deb8233.png"
                    width="24"
                    height="24"
                  />
                  <a href="#">GoPay</a>
                </div>
                <div class="payment">
                  <img
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/60674228.png"
                    width="24"
                    height="24"
                  />
                  <a href="#">Saldo</a>
                </div>
                <div class="payment">
                  <img
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8bdce0f2.png"
                    width="24"
                    height="24"
                  />
                  <a href="#">OVO Cash</a>
                </div>
              </div>
              <div class="col-drop">
                <a href="">Pembelian</a>
                <a v-if="logout.roles === 'user'" href="/jual">Jual Barang</a>
                <a v-else-if="logout.roles === 'admin'" href="/costumer"
                  >Costumer List</a
                >
                <a href="">Toko Favorit</a>
                <a href="/" @click="out"
                  ><i class="vector vec-out"></i>Logout</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      logout: {},
      search: "",
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    searched() {
      return axios
        .put("http://localhost:3000/users/" + this.logout.id, {
          search: this.search,
        })
        .then(() => {
          this.$router.push("/searched-item");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.logout = user;
    },
    out() {
      sessionStorage.clear();
    },
  },
};
</script>

<style scoped>
.nav {
  flex-direction: column;
  width: 100%;
  display: flex;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0px;
  height: 80px;
  z-index: 999;
  align-items: center;
}
.nav1 {
  display: flex;
  background-color: #f1f1f1;
  color: gray;
  border-bottom: 1px solid gray;
  padding: 0 32px;
  position: fixed;
  justify-content: space-between;
  left: 0px;
  right: 0px;
}
.vector {
  width: 20px;
  height: 20px;
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
  cursor: pointer;
}
.vec-nav {
  background-image: url("https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/413cd754.svg");
}
.vec-out {
  background-image: url("https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/b6d85a62.svg");
}
.nav a {
  font-size: 12px;
  line-height: 31px;
  color: gray;
  cursor: pointer;
  margin-top: 6px;
  text-decoration: none;
}
.nav a:hover {
  color: #f44336;
}
.right {
  display: flex;
  justify-content: space-around;
  width: 533px;
}
.nav2 {
  height: 56px;
  top: 30px;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  display: flex;
  width: 100%;
  padding: 0 3%;
}
.search-container {
  width: 60%;
  display: flex;
}
.search-container form {
  width: 100%;
  box-sizing: border-box;
  border: solid 1px lightgray;
  height: 32px;
  border-radius: 8px;
}
.search-bar {
  height: 100%;
}
.text-search {
  border: none;
  width: 95%;
  height: 100%;
}
.search {
  border: none;
  background-color: lightgray;
  height: 100%;
  width: 5%;
  margin-top: -10px;
}
.login {
  border-left: 1px solid black;
}
.button {
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  border: solid #f44336;
}
.masuk {
  background-color: transparent;
  color: #f44336;
}
.daftar {
  background-color: #f44336;
  color: white;
}
.masuk:hover {
  background-color: #f44336;
  color: white;
}
.daftar:hover {
  background-color: transparent;
  color: #f44336;
}
.profile {
  position: relative;
  display: flex;
  justify-content: space-around;
}
.profile a {
  display: flex;
  color: black;
}
.profile img {
  border-radius: 50%;
  display: flex;
  margin: -5px 5px 0 0;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  width: 300px;
  top: 30px;
  right: 0;
  padding: 10px;
  z-index: 1;
}
.profile-drop {
  padding: 10px;
  display: flex;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
* {
  box-sizing: border-box;
}
.col-drop {
  float: left;
  width: 50%;
}
.payment {
  margin-top: 15px;
  display: flex;
  border-bottom: solid 1px gray;
}
.payment a {
  text-decoration: none;
  color: black;
  margin-top: -10px;
}
.profile:hover .dropdown-content {
  display: block;
}
</style>
