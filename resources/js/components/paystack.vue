<template>
    <paystack
        :amount="amount"
        :email="email"
        :paystackkey="paystackkey"
        :reference="reference"
        :callback="callback"
        :close="close"
        :embed="false"
    >
       <button class="button-green"><i class="fas fa-money-bill-alt"></i>
       Make Payment</button>
    </paystack>
</template>
 
<script type="text/javascript">
import paystack from 'vue-paystack';
export default {
  props:['amount1','email1'],
    components: {
        paystack
    },
    data(){
        return{
          paystackkey: "pk_test_8047f2961e0e83a7b455b8c6644b21cccb01d900", //paystack public key
          email: "foobar@example.com", // Customer email
          amount: 1000000 // in kobo
        }
    },
    computed: {
      reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
 
        return text;
      }
    },
    mounted() {
      this.email = this.$props.email1
      this.amount= this.$props.amount1
    },
    methods: {
      callback: function(response){
        console.log(response)
        this.$emit('getResponse',response)
      },
      close: function(){
          console.log("Payment closed")
      }
    }
}
</script>
<style scoped lang="scss">
.button-green {
    padding: 8px 32px;
    box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
    line-height: 1.25;
    border-radius: 3px;
    background: #0F7A8A;
    text-decoration: none;
    color: white;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: initial;
    position: relative;
    transition: background-color 0.6s ease;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      transform-style: flat;
      transform: translate3d(-50%, -50%, 0);
      background: rgba(white, 0.1);
      border-radius: 100%;
      transition: width 0.3s ease, height 0.3s ease;
    }
    &:focus,
    &:hover {
      background: darken(#0F7A8A, 7%);
    }
    &:active {
      &:after {
        width: 200px;
        height: 200px;
      }
    }
  }

</style>