<template>
  <el-col v-show="userRouterData" :span="15" >
    <el-form label-width="80px" style="width: 50%; margin-left: auto; margin-right: auto; margin-top: 50px; ">
      <el-form-item label="名称*">
        <el-input v-model="companyName"/>
        <el-button style="margin-top: 20px;">保存2</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
// import owner from '../owner'
// export default {
//   data() {
//     return {
//       a: 'hello'
//     }
//   },
//   methods() {
//   },
//   mounted() {
//   }
// }
</script>
