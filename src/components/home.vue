<template>
  <div class="all">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/11/23/871e8020-f34f-4235-b86f-45c8457e2ce5.jpg.webp?ect=3g"
            class="d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/7/30/74d32a7f-6a2d-49a3-b325-114de4b055c5.jpg.webp?ect=3g"
            class="d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/11/23/782b6890-613d-4d0c-b9ed-3678c4bea187.jpg.webp?ect=3g"
            class="d-block w-100"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="block">
      <div class="block-text">
        <h2><b>Kategori Pilihan</b></h2>
      </div>
      <div class="item-list row">
        <img
          class="image-category"
          src="https://images.tokopedia.net/img/cache/200-square/attachment/2019/2/18/20723472/20723472_abf0b8ac-7f50-4c95-be2d-7a9ae559df19.jpg.webp"
        />
        <img
          class="image-category"
          src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/21/8470985/8470985_090882d9-32fb-4437-9bef-f50ad3e831af.png.webp"
        />
        <img
          class="image-category"
          src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/11/21/26958584/26958584_696b5fe8-8c2c-429f-ba08-c9167445c79d.jpg.webp"
        />
        <img
          class="image-category"
          src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp"
        />
        <img
          class="image-category"
          src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp"
        />
        <img
          class="image-category"
          src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp"
        />
      </div>
    </div>
    <div class="block">
      <div class="block-text">
        <h2><b>Traktiran Pengguna Baru</b></h2>
      </div>
      <div class="item-list row">
        <div class="item-label">
          <img
            src="https://images.tokopedia.net/img/cache/240/PYbRbC/2021/11/25/98a32848-e154-459a-8d17-0ffdc4251d8d.png.webp?ect=4g"
          />
        </div>
        <div class="item-row">
          <div v-for="(item, index) in traktir" :key="index" class="item promo">
            <div class="image">
              <img :src="item.fotoproduk" />
            </div>
            <div class="item-desc">
              <span class="item-name"> {{ item.barang }} </span>
              <h6>Rp {{ ((100 - item.diskon) / 100) * item.harga }}</h6>
              <div class="original-price">
                <span class="discount">{{ item.diskon }}%</span>
                <span>Rp {{ item.harga }}</span>
              </div>
              <br />
              <span style="text-transform: capitalize">{{ item.lokasi }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="block-text">
        <h2><b>Kejar Diskon Spesial</b></h2>
      </div>
      <div class="item-list row">
        <div class="item-label">
          <img
            src="https://images.tokopedia.net/img/cache/240/attachment/2021/11/18/168340518/168340518_e90b338e-bf9c-4b95-98e7-cf31f545bba6.png.webp?ect=4g"
          />
        </div>
        <div class="item-row">
          <div
            v-for="(item, index) in discspesial"
            :key="index"
            class="item promo"
          >
            <div class="image">
              <img :src="item.fotoproduk" />
            </div>
            <div class="item-desc">
              <span class="item-name"> {{ item.barang }} </span>
              <h6>Rp {{ ((100 - item.diskon) / 100) * item.harga }}</h6>
              <div class="original-price">
                <span class="discount">{{ item.diskon }}</span>
                <span
                  >Rp
                  <span style="text-decoration: line-through">{{
                    item.harga
                  }}</span></span
                >
              </div>
              <br />
              <span style="text-transform: capitalize">{{ item.lokasi }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="user" class="block">
      <div class="block-text">
        <h2><b>Berdasarkan Pencarianmu</b></h2>
      </div>
      <div class="item-list row">
        <div v-for="(item, index) in recomend" :key="index" class="item full">
          <div class="image">
            <img :src="item.fotoproduk" />
          </div>
          <div class="item-desc">
            <span class="item-name"> {{ item.barang }} </span>
            <h6>Rp {{ item.harga }}</h6>
            <span style="text-transform: capitalize">{{ item.lokasi }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="block-text">
        <h2><b>Spesial di Tokopedia</b></h2>
      </div>
      <div class="item-list banner">
        <img
          src="https://images.tokopedia.net/img/cache/400/wCVIqt/2021/11/25/66e1f267-4835-437e-8b93-8dcfcbc008c0.jpg.webp?ect=4g"
        />
        <img
          src="https://images.tokopedia.net/img/cache/400/wCVIqt/2021/10/31/6a1a584e-3fc1-48e0-b74a-03c2d34b828f.jpg.webp?ect=4g"
        />
        <img
          src="https://images.tokopedia.net/img/cache/400/wCVIqt/2021/11/25/26b79791-07d3-431a-b075-60c4ce29497d.jpg.webp?ect=4g"
        />
      </div>
    </div>
    <div class="block">
      <div class="block-text">
        <h2><b>Official Store</b></h2>
      </div>
      <div class="item-list row">
        <div class="item-label">
          <img
            src="https://images.tokopedia.net/img/cache/240/PYbRbC/2021/11/22/ac2c5283-8fa0-4aa7-bb49-a09672a790ae.png.webp?ect=4g"
          />
        </div>
        <div class="item-row">
          <div
            v-for="(item, index) in official"
            :key="index"
            class="item promo"
          >
            <div class="image">
              <img :src="item.fotoproduk" />
            </div>
            <div class="item-desc">
              <span class="item-name"> {{ item.barang }} </span>
              <h6>Rp {{ ((100 - item.diskon) / 100) * item.harga }}</h6>
              <div class="original-price">
                <span class="discount">{{ item.diskon }}%</span>
                <span
                  >Rp
                  <span style="text-decoration: line-through">{{
                    item.harga
                  }}</span></span
                >
              </div>
              <br />
              <span style="text-transform: capitalize">{{ item.lokasi }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="user" class="block">
      <div class="block-text">
        <h2>
          <b>For {{ user.username }}</b>
        </h2>
      </div>
      <div class="item-list row">
        <div v-for="(item, index) in normal" :key="index" class="item full">
          <div class="image">
            <img :src="item.fotoproduk" />
          </div>
          <div class="item-desc">
            <span class="item-name"> {{ item.barang }} </span>
            <h6>Rp {{ item.harga }}</h6>
            <span style="text-transform: capitalize">{{ item.lokasi }}</span>
          </div>
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
      user: {},
      items: [],
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
  },
  computed: {
    traktir() {
      return this.items.filter((item) => {
        return item.diskon === 100;
      });
    },
    discspesial() {
      return this.items.filter((item) => {
        return item.diskon < 40 && item.diskon > 0;
      });
    },
    official() {
      return this.items.filter((item) => {
        return item.diskon < 80 && item.diskon > 0;
      });
    },
    recomend() {
      return this.items.filter((item) => {
        return item.kategori === this.user.searched;
      });
    },
    normal() {
      return this.items.filter((item) => {
        return item.diskon === 0;
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
.carousel-item img {
  border-radius: 20px;
}
.block {
  width: 100%;
  margin: 10px;
  margin-bottom: 64px;
  border-bottom: solid 1px gray;
}
.item-list {
  width: 100%;
  display: flex;
  margin-left: 0px;
}
.item-label {
  padding: 0;
  float: left;
  width: 24%;
  border-radius: 20px;
  background-color: #f44336;
}
.item-label img {
  margin-left: 10px;
  height: 100%;
  filter: hue-rotate(253deg);
  width: 50%;
}
.image-category {
  width: 15.6%;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  border: 1px solid darkgray;
  margin: 0 0.5% 30px 0.5%;
}
.item-row {
  float: left;
  width: 84%;
  margin-left: -8%;
}
.item {
  border: solid white;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
  padding: 5px;
  float: left;
  background-color: white;
  border-radius: 10px;
}
.promo {
  width: 19%;
  margin: 25px 0.5%;
}
.full {
  width: 15.66%;
  margin: 25px 0.5%;
}
.item:hover {
  border: solid gray;
}
.item img {
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
.item-desc h6 {
  margin: 0;
}
.original-price {
  font-size: 0.714286rem;
  margin-top: 5px;
}
.discount {
  color: rgb(65, 173, 38);
  background-color: rgb(209, 255, 197);
}
.banner img {
  width: 32.3%;
  border-radius: 20px;
  margin: 0 0.5%;
}
</style>