<template>
      <div class="container">
        <p class="text-center">登录</p>
        <van-form @submit="login">
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </div>
</template>

<script>
import md5 from 'md5'
import { Form, Field, Button, Panel } from 'vant'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Panel.name]: Panel
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['Login']),
    login (value) {
      const { Login } = this
      const loginParams = value
      loginParams.password = md5(value.password)
      Login(loginParams).then(res => {
        this.loginSuccess(res)
      })
    },
    loginSuccess (res) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 50%;
  }
  .text-center {
    text-align: center;
  }
</style>
