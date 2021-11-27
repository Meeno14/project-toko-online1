<template>
  <div class="keranjang">
    <div class="tblkrjg">
      <img
        src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/60adc47d.jpg"
        alt="keranjang"
      /><br />
      <h3>Wah, keranjang belanjamu kosong</h3>
    </div>
    <p>Yuk, isi dengan barang-barang impianmu!</p>
    <a href="/"
      ><button
        class="button keranjang"
        style="border-radius: 7px; background-color: red"
      >
        <b>Mulai Belanja!</b>
      </button></a
    >
  </div>
</template>
<script>
export default {
  name: "keranjang",
};
</script>
<style scoped>
.keranjang {
  text-align: center;
}
</style>