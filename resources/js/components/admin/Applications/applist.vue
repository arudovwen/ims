<template>
    <div>
        <b-container>
            <b-table :items="items"  :fields="fields" bordered>
                <template v-slot:cell(sn)="data">
                    <div>
                        {{data.index+1}}
                    </div>
                </template>
                 <template v-slot:cell(action)="data">
                    <div @click="view(data.item)">
                       view
                    </div>
                </template>
            </b-table>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields:['sn','title','group','phase','action'],
            items:[]
        }
    },
    mounted() {
        this.getItems()
    },
    methods: {
        getItems(){
             axios.get("/api/application").then((res) => {
        if (res.status == 200) {
          this.items = res.data;
        }
      });
        },
         view(data){
        const {id,title} = data
        this.$router.push(`/form/${id}/${title.replace(/ /g,'-')}`)
    }
    },
   
}
</script>

<style scoped>
.container{
    padding:50px 15px;
}
</style>