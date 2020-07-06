<template>
  <div>
    <div class="main-body">
      <div class="left rounded shadow">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Remove</th>
              <th>
                <input type="checkbox" v-model="item" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,idx) in users" :key="idx">
              <td scope="row">{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.role}}</td>
              <td>
                <span @click="editUser(user.id)">
                  <i class="fas fa-edit"></i> Change
                </span>
              </td>
              <td>
                <span @click="singleDelete(user.id)">
                  <i class="fa fa-minus-circle text-red" aria-hidden="true"></i> Drop
                </span>
              </td>
              <td>
                <input type="checkbox" :value="user.id" v-model="items" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right rounded shadow text-center py-5">
        <div>
          <button class="button-red mb-4" @click="multiDelete">Multi-Delete</button>
        </div>

        <div>
          <form @submit.prevent="submit" class="text-left p-3 border rounded m-2">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                v-model="detail.name"
                id="name"
                aria-describedby="helpId"
                placeholder="John Doe"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="detail.email"
                aria-describedby="helpId"
                placeholder="example@email.com"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                v-model="detail.password"
                aria-describedby="helpId"
                placeholder="********"
                required
              />
            </div>
            <div class="form-group">
              <label for="role">Role</label>
              <select class="form-control" name="role" id="role" v-model="detail.role" required>
                <option value disabled>Select role</option>
                <option value="administrator">Administrator</option>
                <option value="supervisor">Supervisor</option>
                <option value="manager">Manager</option>
                <option value="user">User</option>
              </select>
            </div>

            <div class="d-flex">
              <button type="submit" v-if="!current" class="button-green my-4">Add User</button>
              <button type="submit" v-if="current" class="button-green my-4 mr-3">Update User</button>
              <button
                type="button"
                v-if="current"
                class="button-blue my-4 mb-4"
                @click="handleCurrent"
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      detail: {
        id: "",
        name: "",
        email: "",
        password: "",
        role: ""
      },
      current: false,
      admin: {},
      items: [],
      item: ""
    };
  },
  mounted() {
    this.admin = JSON.parse(localStorage.getItem("adminUser"));
    this.getUsers();
  },
  watch: {
    item: "multiSlect"
  },
  methods: {
    handleCurrent() {
      this.current = false;
      this.detail = {
        id: "",
        name: "",
        email: "",
        password: "",
        role: ""
      };
    },
    multiSlect() {
      if (this.item) {
        this.users.forEach(ite => {
          this.items.push(ite.id);
        });
      } else {
        this.items = [];
      }
    },
    getUsers() {
      axios
        .get(`/api/admin`, {
          headers: {
            Authorization: `Bearer ${this.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.users = res.data;
          }
        });
    },
    multiDelete() {
      let con = confirm("Are you sure");
      if (con) {
        if (this.item) {
          let data = {
            admins: this.items
          };
          axios
            .post(`/api/multi-delete`, data, {
              headers: {
                Authorization: `Bearer ${this.admin.access_token}`
              }
            })
            .then(res => {
              if (res.status == 200) {
                this.getUsers();
                this.items = []
                this.item = false
              }
            });
        } else {
          this.$toasted.info("Select a min of 2 users!");
        }
      }
    },
    singleDelete(id) {
      let con = confirm("Are you sure");
      if (con) {
        axios
          .delete(`/api/admin/${id}`, {
            headers: {
              Authorization: `Bearer ${this.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getUsers();
            }
          });
      }
    },
    editUser(id) {
      this.current = true;
      axios
        .get(`/api/admin/${id}`, {
          headers: {
            Authorization: `Bearer ${this.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.detail = res.data;
          }
        });
    },

    submit() {
      if (!this.current) {
        axios
          .post(`/api/admin`, this.detail, {
            headers: {
              Authorization: `Bearer ${this.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 201) {
              this.getUsers();
              this.$toasted.info("Added");
            }
          });
      } else {
        axios
          .put(`/api/admin/${this.detail.id}`, this.detail, {
            headers: {
              Authorization: `Bearer ${this.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.current = false;
              this.getUsers();
              this.$toasted.info("Updated");
            }
          });
      }
      this.detail = {
        id: "",
        name: "",
        email: "",
        password: "",
        role: ""
      };
    }
  }
};
</script>
<style scoped>
.main-body {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
}
.left {
  width: 65%;
  height: 100%;
  overflow: scroll;
  background: white;
}
.right {
  width: 34%;
  background: white;
  height: auto;
}
.text-red{
  color:red;
}
</style>