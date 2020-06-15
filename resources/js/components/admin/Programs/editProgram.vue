<template>
  <div id="form">
    <form @submit.prevent="update">
      <legend>Create new {{type}}</legend>
      <div class="form-group">
        <label for="title">Program name</label>
        <input
          type="text"
          class="form-control"
          name="title"
          id="title"
          v-model="program.name"
          aria-describedby="helpId"
          placeholder="Enter title"
        />
      </div>

      <div class="form-group">
        <label for>About</label>
        <app-editor
          v-model="program.about"
          apiKey="b2xt6tkzh0bcxra613xpq9319rtgc3nfwqbzh8tn6tckbgv3"
          :init="{
                         selector: 'textarea',
                            toolbar_mode: 'floating',
                            plugins: 'advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount a11ychecker advcode  formatpainter linkchecker autolink lists media mediaembed   table  tinymcespellchecker',
                            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table',
                            image_title: true,
                            height: 300,
                            file_picker_types: 'image',
                            automatic_uploads:false,
                            relative_urls:false,
                           convert_urls:false,
                           images_upload_handler: function (blobInfo, success, failure) {
                                 upload_handler( blobInfo, success, failure)
                           },
                            file_picker_callback:function(callback, value, meta) {
                                  loadFile(callback, value,meta)

                        },
                        images_dataimg_filter: function(img) {
                            return img.hasAttribute('internal-blob');
                            }
                      }"
          class="form-control"
        ></app-editor>
      </div>

      <div class="form-group">
        <label for="cover">Cover Image</label>
        <label class="custom-file">
          <img :src="placeholder" height="100" alt />

          <input
            type="file"
            name="cover"
            id="cover"
            @change="handleFileChange($event)"
            class="custom-file-input"
            aria-describedby="fileHelpId"
          />

          <div
            class="progress-bar progress-bar-striped active"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            v-bind:style="{width:progress}"
          >{{progress}}</div>
        </label>
      </div>
      <div class="form-group">
        <button type="submit" class="button-green">Update</button>
      </div>
    </form>
  </div>
</template>


<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  data() {
    return {
      type: this.$route.params.type,
      program: {
        subject: "",
        coverImage: "",
        content: ""
      },

      placeholder: "/images/placeholder.png",
      filesSelectedLength: null,
      progress: null,
      uploadedFileUrl: "",
      cloudinary: {
        uploadPreset: "knkccgjv",
        apiKey: "634813511968181",
        cloudName: "bizguruh-com"
      }
    };
  },
  components: {
    "app-editor": Editor
  },
  mounted() {
      this.getprogram()
  },
  methods: {
    update() {
      axios.put(`/api/update-program/${this.$route.params.id}`, this.program).then(res => {
        if (res.status == 200) {
        }
      });
    },
    getprogram(){
   axios.get(`/api/get-program/${this.$route.params.id}`).then(res => {
          if (res.status == 200) {
            this.program = res.data;
            this.placeholder = res.data.cover_image;
          }
        });
},
  handleFileChange(event) {
    let file = event.target.files[0];
    this.loadCoverFile(file);
  },
  loadCoverFile(file) {
    let reader = new FileReader();
    reader.onload = event => {
      this.placeholder = event.target.result;
    };
    reader.readAsDataURL(file);
    this.processUpload(file);
  },
  processUpload(file) {
    let that = this;
    this.start = true;
    var formData = new FormData();
    var xhr = new XMLHttpRequest();
    var cloudName = this.cloudinary.cloudName;
    var upload_preset = this.cloudinary.uploadPreset;
    formData.append("file", file);
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
          this.start = false;
        }, 1000);
        var response = JSON.parse(xhr.response);
        this.uploadedFileUrl = response.secure_url; // https address of uploaded file
        this.post.coverImage = response.secure_url;
      } else {
        this.start = false;
        alert("Upload failed. Please try again.");
      }
    };
    xhr.send(formData);
  },
  upload_handler(blobInfo, success, failure) {
    var xhr, formData;
    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", "/api/image-upload");
    xhr.onload = function() {
      var json;

      if (xhr.status != 200) {
        failure("HTTP Error: " + xhr.status);
        return;
      }
      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != "string") {
        failure("Invalid JSON: " + xhr.responseText);
        return;
      }
      success(json.location);
    };
    formData = new FormData();
    formData.append("file", blobInfo.blob());
    xhr.send(formData);
  },
  loadFile(cb, value, mt) {
    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.onchange = function() {
      var file = this.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        var id = "blobid" + new Date().getTime();
        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
        var base64 = reader.result.split(",")[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);
        cb(blobInfo.blobUri(), { title: file.name });
      };
    };
    input.click();
  }
  },

};
</script>

<style scoped>
#form {
  padding: 20px;
}
.custom-control-input {
  opacity: 1;
  z-index: 0;
}
.progress {
  height: 20px;
}
</style>
