<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="code"
        type="text"
        name="code"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import source from '../api/source';
  const sourceApi = new source();

  type LoginResponseData = {
    successed: boolean;
    data: {
      rows: [];
      total: number;
    };
  };

  type LoginRequestData = {
    username: string;
    code: string;
  };

  const username = ref('');
  const code = ref('');
  const onSubmit = async (values: LoginRequestData) => {
    console.log('submit1', values);

    const result = await sourceApi.login<LoginResponseData>({
      mobile: values.username,
      code: values.code,
    });

    // console.log(result.data.rows);
  };
</script>

<style scoped>
  body {
    font-size: 12px;
  }
</style>
