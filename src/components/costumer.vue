<template>
  <div>
    <table>
      <tr>
        <th>No</th>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Action</th>
      </tr>
      <tr v-for="(user, index) in daftarUser" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
        <td>
          <button @click="del(user)">
            <b>Delete</b>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/users/" + user.id).then(() => {
        this.load();
        let index = this.users.indexOf(user.username);
        this.users.splice(index, 1);
      });
    },
  },
  computed: {
    daftarUser() {
      return this.users.filter((user) => {
        return user.roles === "user";
      });
    },
  },
};
</script>
<style scoped>
/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 500px) {
  .a {
    width: 40%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 500px) {
  .a {
    width: 40%;
  }
}
.kepo {
  background-color: pink;
}
button {
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  border: solid #f44336;
  background-color: #f44336;
  color: white;
}
button:hover {
  background-color: transparent;
  color: #f44336;
}
table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
th,
td {
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
th {
  background-color: red;
  color: white;
}
</style>