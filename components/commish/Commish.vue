<template>
  <div class="container">
    <p>{{ msg }}</p>
    <p> Then make sure you add this comission to your paypal cart </p>
    <div>
      <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
        <button v-on:click="submitFile()">Submit</button>
    </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios';

/* eslint-disable */
export default {
  name: 'Commish',
  data() {
    return {
      msg: '',
      file: ''
    };
  },
  methods: {
    getMessage() {
      const path = 'http://localhost:5000/commish';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },
    submitFile(){
      const path = 'http://localhost:5000/commish'
        let formData = new FormData();
        formData.append('file', this.file);
        axios.post( path,
  formData,
  {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  }
).then(function(){
  // eslint-disable-next-line no-console
  console.log('SUCCESS!!');
})
.catch(function(){
  // eslint-disable-next-line no-console
  console.log('FAILURE!!');
});
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
