<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <div>
      <input type="text" v-model="msg" />
      <button @click="doClick">Click</button>
    </div>
    <table>
      <tr>
        <th>User ID</th>
        <td>{{ json_data.userId }}</td>
      </tr>
      <tr>
        <th>ID</th>
        <td>{{ json_data.id }}</td>
      </tr>
      <tr>
        <th>Titel</th>
        <td>{{ json_data.title }}</td>
      </tr>
      <tr>
        <th>Body</th>
        <td>{{ json_data.body }}</td>
      </tr>
    </table>

    <hr />
    <div>
      key: {{ find }} <br />
      <input type="text" v-model="find" />
      <button @click="searchData">Click</button>
    </div>
    <table>
      <ul v-for="(data, index) in person_data" :key="index">
        <li>{{ data.name }}({{ data.age }})[{{ index }}]</li>
      </ul>
    </table>

    <hr />
    <div>
      age: {{ find1 }} <br />
      <input type="text" v-model="find1" />
      <button @click="getAgeData">Click</button>
      <ul v-for="(data, key) in person_data" :key="key">
        <li>
          <strong>{{ key }}</strong
          ><br />{{ data }}
        </li>
      </ul>
    </div>

    <hr />
    <div>
      put<br />
      <table>
        <tr>
          <th>Email</th>
          <td><input type="text" v-model="email" /></td>
        </tr>
        <tr>
          <th>Name</th>
          <td><input type="text" v-model="username" /></td>
        </tr>
        <tr>
          <th>Age</th>
          <td><input type="number" v-model="age" /></td>
        </tr>
        <tr>
          <th>Tel</th>
          <td><input type="text" v-model="tel" /></td>
        </tr>
        <tr>
          <button @click="addData">Click</button>
        </tr>
      </table>
    </div>

    <hr />
    <div>
      delete<br />
      <input type="text" v-model="email" />
      <button @click="delData">削除</button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
let url = 'https://jsonplaceholder.typicode.com/posts/';
let fire_url = 'https://smaple-t.firebaseio.com/person';
let fire_key_url =
  'https://smaple-t.firebaseio.com/person.json?orderBy=%22$key%22&equalTo=%22';

export default {
  data: function() {
    return {
      title: 'Axios',
      message: 'axios sample',
      msg: '',
      json_data: {},
      person_data: {},
      find: '',
      find1: '',
      flg1: false,
      email: '',
      username: '',
      tel: '',
      age: 0
    };
  },

  asyncData: async function() {
    let result = await axios.get(fire_url + '.json');
    return {
      person_data: result.data
    };
  },

  methods: {
    doClick: function() {
      axios
        .get(url + this.msg)
        .then((res) => {
          this.message = 'get ID=' + this.msg;
          this.json_data = res.data;
        })
        .catch((error) => {
          this.message = error;
          this.json_data = {};
        });
    },
    searchData: function() {
      axios
        .get(fire_key_url + this.find + '%22')
        .then((res) => {
          this.person_data = res.data;
        })
        .catch((error) => {
          this.find = error;
          this.person_data = {};
        });
    },
    getAgeData: function() {
      this.flg1 = true;
      let range = this.find1.split(',');
      let age_url =
        'https://smaple-t.firebaseio.com/person.json?orderBy=%22age%22' +
        '&startAt=' +
        range[0] +
        '&endAt=' +
        range[1];
      axios
        .get(age_url)
        .then((res) => {
          this.message = 'get:' + range[0] + '< age <' + range[1];
          this.person_data = res.data;
        })
        .catch((error) => {
          this.find1 = error;
          this.person_data = {};
        });
    },
    addData: function() {
      let add_url =
        'https://smaple-t.firebaseio.com/person/' + this.email + '.json';
      let data = {
        name: this.email,
        age: this.age,
        tel: this.tel
      };
      axios.put(add_url, data).then((res) => {
        this.email = '';
        this.username = '';
        this.age = '';
        this.tel = '';
        this.getData();
      });
    },
    getData: function() {
      axios
        .get(fire_url + '.json')
        .then((res) => {
          this.message = 'akk get ddata';
          this.person_data = res.data;
        })
        .catch((error) => {
          this.message = error;
          this.person_data = {};
        });
    },
    delData: function() {
      let del_url = url + '/' + this.email + '.json';
      axios.delete(del_url).then((error) => {
        this.message = this.email + 'を削除しました';
        this.email = '';
        this.getData();
      });
    }
  }
};
</script>

<style>
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top: 5px;
  font-style: 20pt;
}
div {
  font-style: 14pt;
}
pre {
  padding: 10px;
  font-style: 16pt;
  background-color: #efefef;
  white-space: pre-wrap;
}
hr {
  margin: 10px 0px;
}
tr th {
  width: 150px;
  background-color: darkblue;
  color: white;
  font-style: 16pt;
}
tr td {
  padding: 5px 10px;
  background-color: #eef;
  font-style: 14pt;
}
input {
  font-style: 14pt;
}
button {
  font-style: 14pt;
}
</style>
