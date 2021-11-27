<template>
  <div class="profile-container">
    <div class="left">
      <div class="profile">
        <a href="#">
          <img :src="logout.picture" width="48" height="48" />
        </a>
        <h6>{{ logout.username }}</h6>
      </div>
      <div class="money">
        <div class="payment">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9deb8233.png"
            width="24"
          />
          <a href="#"
            >GoPay <span><b>Aktifkan</b></span></a
          >
        </div>
        <div class="payment">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/d2f61a5c.png"
            width="24"
          />
          <a href="#"
            >GoPayLater <span><b>Aktifkan</b></span></a
          >
        </div>
        <div class="payment">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/60674228.png"
            width="24"
          />
          <a href="#"
            >Saldo <span>Rp{{ logout.saldo }}</span></a
          >
        </div>
        <div class="payment">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8bdce0f2.png"
            width="24"
          />
          <a href="#"
            >OVO Cash <span><b>Aktifkan</b></span></a
          >
        </div>
        <br />
      </div>
    </div>
    <div class="right">
      <span><i class="vector"></i>{{ logout.username }}</span>
      <div class="bio">
        <div class="bio-section"><h2>Biodata Diri</h2></div>
        <div class="bio-content">
          <div class="bio-image shadow">
            <img :src="logout.picture" />
          </div>
          <div class="side">
            <h3>Ubah Biodata Diri</h3>
            <div>
              <span style="width: 114px">Nama</span
              ><span style="margin-right: 15px">{{ logout.username }}</span
              ><a href="#">Ubah</a>
            </div>
            <div>
              <span style="width: 114px">Tanggal Lahir</span
              ><a href="#">Tambah Tanggal Lahir</a>
            </div>
            <div>
              <span style="width: 114px">Jenis Kelamin</span
              ><a href="#">Tambah Jenis Kelamin</a>
            </div>
            <h3>Ubah Kontak</h3>
            <div>
              <span style="width: 114px">Email</span
              ><span>{{ logout.email }}</span>
            </div>
            <div>
              <span style="width: 114px">Nomor HP</span
              ><a href="#">Tambah Nomor HP</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      edit: false,
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
  },
};
</script>
<style scoped>
.profile-container {
  margin: 40px auto 40px auto;
  display: flex;
  width: 1190px;
  box-sizing: border-box;
}
.left {
  width: 20%;
  border-radius: 12px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
}
.profile {
  width: 100%;
  padding: 12px 12px 12px 16px;
  display: flex;
}
.profile a img {
  border-radius: 50%;
}
.profile h6 {
  margin-left: 10px;
}
.money {
  border-top: solid 1px;
  padding: 10px;
}
.payment {
  margin-top: 15px;
}
.payment a {
  text-decoration: none;
  color: black;
}
.payment a:hover {
  color: #f44336;
}
.payment a span {
  float: right;
}
.payment a span b {
  color: #f44336;
}
.right {
  margin-left: 24px;
}
.vector {
  background-image: url("https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/224d2462.svg");
  width: 14px;
  height: 20px;
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 20px;
}
.bio {
  width: 940px;
  border: solid gray 1px;
  border-radius: 20px;
}
.bio-section {
  margin: 20px 20px 20px;
}
.bio-content {
  padding: 20px;
  display: flex;
  border-top: solid gray 1px;
}
.bio-image {
  padding: 16px;
  width: 300px;
}
.bio-image img {
  width: 268px;
  height: 268px;
}
.bio-image input {
  margin-top: 15px;
}
.side {
  margin-left: 26px;
}
.side div,
h3 {
  display: flex;
  margin-bottom: 32px;
}
</style>