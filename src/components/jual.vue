<template>
  <div class="all">
    <div class="item-list row">
      <div v-for="(item, index) in terjual" :key="index" class="item">
        <div class="image">
          <img :src="item.fotoproduk" />
        </div>
        <div class="item-desc">
          <span class="item-name"> {{ item.barang }} </span>
          <h6>Rp {{ item.harga }}</h6>
          <span style="text-transform: capitalize">{{ item.lokasi }}</span>
        </div>
      </div>
      <div @click="add = true" class="item add">
        <img
          src="https://wriconsortium.com/assets/wri_front_end/plugins/ionicons-2.0.1/png/512/plus-round.png"
          alt=""
        />
      </div>
    </div>
    <div v-if="add" class="mask">
      <div class="add-box row">
        <h2 class="close" @click="add = false">&times;</h2>
        <h2>Tambahkan Barang Untuk Dijual</h2>
        <form>
          <div class="col">
            <div class="input">
              <label>Nama Barang</label>
              <input type="text" v-model="barang" />
            </div>
            <div class="input">
              <label>Foto Barang (url)</label>
              <input style="margin-bottom: 10px" type="text" v-model="foto" />
            </div>
            <div class="input">
              <label>Harga: </label>
              <input type="number" v-model="harga" /><br />
            </div>
          </div>
          <div class="col">
            <div class="input">
              <label>Kondisi</label>
              <div class="justify">
                <div>
                  <input
                    id="baru"
                    type="radio"
                    name="kondisi"
                    value="Baru"
                    v-model="condition"
                  />
                  <label for="kondisi">Baru</label>
                </div>
                <div>
                  <input
                    id="bekas"
                    type="radio"
                    name="kondisi"
                    value="Bekas"
                    v-model="condition"
                  />
                  <label for="kondisi">Bekas</label>
                </div>
              </div>
            </div>
            <div class="input">
              <label>Stok: </label>
              <input type="number" v-model="stok" number /><br />
            </div>
            <div class="input">
              <label style="margin-top: 10px">Lokasi</label>
              <input type="text" v-model="lokasi" />
            </div>
            <div class="input">
              <label>Kategori</label>
              <input type="text" v-model="kategori" />
            </div>
          </div>
        </form>
        <div class="d-grid gap-2">
          <button
            style="margin-top: 20px"
            @click="addItem"
            class="btn btn-lg btn-danger"
          >
            <b>Jual</b>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      user: {},
      barang: "",
      foto: "",
      condition: "",
      stok: "",
      harga: "",
      kategori: "",
      lokasi: "",
      add: false,
      diskon: false,
      persentase: 0,
    };
  },
  mounted() {
    this.load();
    this.getUser();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/items")
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUser() {
      this.user = JSON.parse(sessionStorage.getItem("USER_DATA"));
    },
    async addItem() {
      let x = Math.floor(Math.random() * 100);
      if (x > 60) {
        this.diskon = true;
      }
      if (this.diskon === true) {
        if (this.harga > 800000) {
          this.persentase = Math.floor(Math.random() * 35);
        } else if (this.harga > 100000) {
          this.persentase = Math.floor(Math.random() * 80);
        }
      }
      const payload = {
        barang: this.barang,
        userid: this.user.id,
        diskon: this.persentase,
        harga: this.harga,
        lokasi: this.lokasi,
        stok: this.stok,
        kondisi: this.condition,
        kategori: this.kategori,
        fotoproduk: this.foto,
      };
      axios.post("http://localhost:3000/items", payload);
      this.add = false;
      this.load();
    },
  },
  computed: {
    terjual() {
      return this.items.filter((item) => {
        return item.userid === this.user.id;
      });
    },
  },
};
</script>

<style scoped>
.row:after {
  content: "";
  display: table;
  clear: both;
}
* {
  box-sizing: border-box;
}
.all {
  margin: auto;
  width: 1190px;
}
.item-list {
  width: 100%;
  display: flex;
  margin-left: 0px;
}
.item-row {
  float: left;
  width: 84%;
  margin-left: -8%;
}
.item {
  border: solid 3px white;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
  padding: 5px;
  float: left;
  background-color: white;
  border-radius: 10px;
  width: 15.66%;
  height: 300px;
  margin: 25px 0.5%;
  cursor: pointer;
}
.add {
  border: dashed 3px;
  background-color: #ffeaef;
  display: grid;
  place-items: center;
}
.add img {
  width: 100%;
  opacity: 80%;
}
.image img {
  width: 100%;
  border-radius: 5px;
}
.item-name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 45px;
  text-overflow: ellipsis;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.add-box {
  margin-top: 40px;
  background-color: white;
  width: 600px;
  padding: 10px;
  text-align: center;
}
.close {
  color: black;
  top: 5px;
  left: auto;
  right: 10px;
  font-size: 40px;
  cursor: pointer;
  text-align: right;
}
.col {
  float: left;
  width: 50%;
  padding: 5px;
}
.add-box input[type="text"] {
  width: 100%;
  height: 40px;
  font-size: 18px;
}
.add-box input[type="number"] {
  width: 40%;
  height: 35px;
  font-size: 18px;
}
.add-box input[type="text"]:focus {
  border: 1px solid #f44336;
}
.justify {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
</style>