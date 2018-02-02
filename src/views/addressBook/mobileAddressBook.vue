<template>
  <section>
    通讯录数据
  </section>
</template>
<script>
  import { MessageBox } from 'mint-ui'
  export default {
    data() {
      return {}
    },
    methods: {
      init() {
        MessageBox.confirm('“民革党家”想访问您的通讯录?', { confirmButtonText: '好', cancelButtonText: '不允许' }).then(action => {
          this.$store.dispatch('changeIsloadMobileAddressBook', true)
        }).catch(() => {
          MessageBox.alert('允许“民革党家”访问通讯录，才能使用此功能').then(action => {
            window.history.go(-1)
          })
        })
      }
    },
    created() {
      // this.init()
    },
    watch: {
      $route(val) {
        console.log(val, 'mobile')
        if (val.name === 'mobile' && !this.$store.state.addressBook.isLoadMobileAddressBook) {
          this.init()
        }
      }
    }
  }
</script>
