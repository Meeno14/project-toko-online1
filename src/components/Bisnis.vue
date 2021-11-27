<template>
  <div id="market">
    <center>
      <h1><b>MARKETPLACE</b></h1>
    </center>
    <br /><br /><br /><br /><br />
    <div class="place">
      <div class="place1">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/859556d5.jpg"
          class="place2"
        />
      </div>
      <div class="place3">
        <h2>
          <b
            >Marketplace dengan <br />
            Pilihan Produk Paling<br />
            Beragam</b
          >
        </h2>
        <br />
        <p>
          Marketplace kami menyediakan pilihan produk paling beragam di
          Indonesia. Kami telah bekerjasama dengan lebih dari 11 juta penjual,
          berbagai toko resmi dan mitra logistik serta pembayaran untuk
          memberikan pengalaman terbaik bagi pelanggan kami.
        </p>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br />
    <div class="level">
      <div class="level1">
        <h2>
          <b
            >Di Marketplace Kami, <br />
            Perekonomian <br />
            Indonesia Bergerak di <br />
            Level Tinggi</b
          >
        </h2>
      </div>
      <div class="level2">
        <div class="level3">
          <div class="isi1">
            <h1 class="l"><b>> 1%</b></h1>
          </div>
          <div class="isi2">
            <p>
              dari total Perekonomian Indonesia terjadi di <br />
              Marketplace Tokomedia
            </p>
          </div>
        </div>
        <br /><br />
        <div class="level4">
          <div class="isi3">
            <h3 class="a"><b>> 500 JUTA</b></h3>
            <p>Produk</p>
          </div>
          <div class="isi4">
            <h3 class="r"><b>> 11 JUTA</b></h3>
            <p>Penjual</p>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br />
    <center>
      <h1><b>Bisnis Lainnya</b></h1>
    </center>
    <br /><br /><br />
    <hr />
    <br /><br /><br />
    <div class="lainnya">
      <div class="lainnya1">
        <h2><b>Bisnis Lainnya</b></h2>
        <br />
        <hr />
        <br />
        <p>
          Penjual ataupun pengguna, layanan teknologi finansial kami akan
          memberi Anda akses permodalan, solusi investasi terjangkau, dan
          berbagai opsi pembayaran. Dengan membuat layanan keuangan yang lebih
          mudah diakses oleh semua orang, kami memungkinkan adanya inklusi
          keuangan di Indonesia.
        </p>
      </div>
      <div class="lainnya2">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/2ae6aea8.jpg"
          class="lainnya3"
        />
      </div>
    </div>
    <br /><br /><br /><br /><br />
    <div class="retail">
      <div class="retail1">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/bdfebcde.jpg"
          class="retail2"
        />
      </div>
      <div class="retail3">
        <h2><b>New Retail</b></h2>
        <br />
        <hr />
        <br />
        <p>
          Aplikasi Mitra Tokomedia menjembatani kesenjangan antara online dan
          offline. Mitra Tokopedia menambah nilai ke toko fisik tradisional
          melalui perluasan jangkauan pelanggan online dan mengekspos penjual ke
          lebih banyak pilihan pemasok dengan harga cerdas. Anggap Mitra sebagai
          mitra digital, sambil menjalankan toko yang sama.
        </p>
      </div>
    </div>
    <br /><br /><br />
    <hr />
    <br /><br /><br />
    <div class="lainnya">
      <div class="lainnya1">
        <h2><b>Logistik & Fulfillment</b></h2>
        <br />
        <hr />
        <br />
        <p>
          Pengiriman menjadi mudah dengan sistem logistik dan fulfillment yang
          terintegrasi. Pelanggan dapat memilih waktu kedatangan paket yang akan
          diakomodasi oleh mitra kami sementara penjual dapat menyimpan produk
          mereka di gudang pintar kami yang berlokasi di seluruh Indonesia.s
        </p>
      </div>
      <div class="lainnya2">
        <img
          src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/fccbeeb4.jpg"
          class="lainnya3"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#market {
  width: 1190px;
  margin: auto;
}
.place {
  display: flex;
}
.place2 {
  width: 65%;
  border-radius: 10px;
  margin-left: 50px;
  filter: hue-rotate(250deg);
}
.place3 {
  border-radius: 3px;
  width: 40%;
  background-color: whitesmoke;
  padding: 15px;
  margin-left: -170px;
  padding-top: 4.5rem;
}
.level3 {
  display: flex;
  width: 100%;
  font-size: 17px;
}
.isi2 {
  margin-left: 30px;
}
.isi3,
.isi4 {
  border: 1px solid gainsboro;
  width: 50%;
  border-radius: 10px;
  text-align: center;
  margin-left: 50px;
}
.level2 {
  margin-left: 50px;
}
.level {
  display: flex;
  border: 1px solid gainsboro;
  border-radius: 10px;
  padding: 80px;
  margin-left: 20px;
}
.level4 {
  display: flex;
}
.l,
.a,
.r {
  color: red;
}
.l {
  font-size: 70px;
}
.a,
.r {
  font-size: 30px;
}
.lainnya {
  display: flex;
  background-color: whitesmoke;
  margin-right: -50px;
  margin-left: -50px;
}
.lainnya1 {
  width: 60%;
  margin-top: 70px;
  padding-top: 50px;
  padding-left: 70px;
  color: rgb(77, 77, 77);
  font-size: 17.5px;
}
.lainnya3 {
  width: 80%;
  margin-left: 50px;
  border-radius: 20px;
  padding-top: 50px;
  padding-left: 70px;
  padding-bottom: 70px;
}
.retail {
  display: flex;
  background-color: whitesmoke;
  margin-right: -50px;
  margin-left: -50px;
}
.retail2 {
  width: 80%;
  margin-left: 50px;
  border-radius: 20px;
  padding-top: 50px;
  padding-left: 70px;
  padding-bottom: 70px;
}
.retail3 {
  width: 60%;
  margin-top: 70px;
  padding-top: 10px;
  padding-left: 70px;
  color: rgb(77, 77, 77);
  font-size: 17.5px;
  padding-right: 40px;
}
</style>
