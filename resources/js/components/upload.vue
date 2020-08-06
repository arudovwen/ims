<template>
  <div>
    <form @submit.prevent="processUpload" class="">
     
        <div >
          <!-- <input
            type="file"
            class="form-control"
            id="file-input"
            aria-describedby="helpId"
            placeholder
            @change="handleFileChange($event)"
          /> -->
            <b-form-file :id="label" class="mt-3" plain   @change="handleFileChange($event)"></b-form-file>
 
          <b-button
            type="submit"
            class="  my-3"
            :disabled="filesSelectedLength < 1"
          >Upload</b-button>
          <div class="progress mt-2" v-if="start">
            <div
              class="progress-bar progress-bar-striped "
                :class="{active: progress !='Completed'}"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              v-bind:style="{width:progress}"
            >{{progress}}</div>
          </div>
         
        </div>
   
    </form>
  </div>
</template>
<style scoped>
.progress {
  height: 20px;
}
.logo {
  width: 50%;
  height: 120px;
  padding: 5px;
}
.images {
  display: flex;
  margin-top: 15px;
}
.oldimg {
  width: 50%;
  height: 120px;
  padding: 5px;
}
.oldimg img,
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
<script>
export default {
  name: "CloudinaryUpload",
  props: ["index",'label'],
  data() {
    return {
      filesSelectedLength: 0,
      file: null,
      filetype: "",
      uploadedFile: this.oldimage,
      uploadedFileUrl: "",
      cloudinary: {
        uploadPreset: "wo4qwffs",
        apiKey: "754134295584927",
        cloudName: "imostate"

      },
      progress: 0,
      start: false
    };
  },

  computed: {},
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];

      this.filesSelectedLength = event.target.files.length;

      this.loadFile();
    },
    loadFile() {
      let reader = new FileReader();
      reader.onload = event => {
        this.uploadedFile = event.target.result;
      };
      reader.readAsDataURL(this.file);
    },
    processUpload() {
      let that = this;
      this.start = true;
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      var cloudName = this.cloudinary.cloudName;
      var upload_preset = this.cloudinary.uploadPreset;
      formData.append("file", this.file);
      formData.append("resource_type", "auto");
      formData.append("upload_preset", upload_preset); // REQUIRED
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/" + cloudName + "/upload"
      );
      xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
          that.progress = Math.round((e.loaded / e.total) * 100) + "%";
        }
      };
      xhr.upload.onloadstart = function(e) {
        this.progress = "Starting...";
      };
      xhr.upload.onloadend = function(e) {
        this.progress = "Completing..";
      };
      xhr.onload = progressEvent => {
        if (xhr.status === 200) {
          // Success! You probably want to save the URL somewhere
          this.progress = "Completed";
          setTimeout(() => {
        
          }, 1000);
          var response = JSON.parse(xhr.response);
          this.uploadedFileUrl = response.secure_url; // https address of uploaded file
          this.$emit("getUploadDetails",this.$props.index, response);
        } else {
          this.start = false;
          this.progress = 0
          alert("Upload failed. Please try again.");
        }
      };
      xhr.send(formData);
    }
  }
};
</script>