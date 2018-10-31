<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>组织结构</span>
      </div>
    </el-card>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="组织结构" name="first">
        <el-row>
          <el-col v-show="!userRouterData" :span="6" style="border-left: 1px solid #ddd; border-right: 1px solid #ddd">
            <el-tree :data="datatree" :default-expanded-keys="[10001]" :default-checked-keys="[10002]" accordion node-key="number" class="datatree" @node-click="getRouter"/>
          </el-col>
          <el-col :span="15">
            <el-form label-width="80px" style="width: 50%; margin-left: auto; margin-right: auto; margin-top: 50px; ">
              <el-form-item label="名称*">
                <el-input v-model="dataTreeNode"/>
              </el-form-item>
              <el-form-item label="编号*">
                <el-input v-model="dataTreeNumber"/>
              </el-form-item>
              <el-form-item label="上级*">
                <el-input v-model="parentNode"/>
              </el-form-item>
              <el-button style="margin-top: 20px;">保存</el-button>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="自定义字段" name="second">
        <el-tabs v-model="custom" tpye="card">
          <el-tab-pane label="全部字段" name="customAll">
            <el-button icon="el-icon-plus" style="margin-bottom: 10px;">添加字段</el-button>
            <el-row>
              <el-col :span="4"><span class="grid-content bg-purple">字段名称</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">字段描述</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple">字段类型</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">显示顺序</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple">必填</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">常用</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">可见</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">状态</span></el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="分布字段" name="customDistribution">
            <el-row>
              <el-col :span="4"><span class="grid-content bg-purple">字段名称</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">字段描述</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple">字段类型</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">显示顺序</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple">必填</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">常用</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">可见</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">状态</span></el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="部分字段" name="customPart">
            <el-row>
              <el-col :span="4"><span class="grid-content bg-purple">字段名称</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">字段描述</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple">字段类型</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">显示顺序</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple">必填</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">常用</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">可见</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">状态</span></el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Organmazation',
  data() {
    return {
      dataTreeNode: '',
      dataTreeNumber: '',
      parentNode: '',
      companyName: '鸿合科技2',
      activeName: 'first',
      custom: 'customAll',
      userRouterData: false,
      datatree: [{
        number: 10001,
        label: '鸿合科技2',
        children: [{
          label: '北北大区',
          number: 10002
        }, {
          label: '鸿合科技-信息部',
          number: 10003,
          children: [{
            label: '鸿合科技信息部',
            number: 10004,
            children: [{
              label: 'flag',
              number: 10005
            }]
          }, {
            label: '123',
            number: 10006
          }]
        }, {
          label: '鸿合科技-财务部',
          number: 10007,
          children: [{
            label: '鸿合科技财务部',
            number: 10008,
            children: [{
              label: '123',
              number: 10009
            }, {
              label: '456',
              number: 10010
            }]
          }]
        }]
      }]
    }
  },
  created() {
    console.log('this: ', this)
    axios.get('http://api.haomo-studio.com/org/swagger-ui.html#/department-type-controller')
      .then(function(data) {
        console.log('data: ', data)
      })
      .catch(function(err) {
        console.log('err: ', err)
      })
  },
  mounted() {
    // this.$router.push({name: 'Beibei'})
  },
  methods: {
    getRouter(data, node, oneself) {
      console.log('node: ', node)
      this.dataTreeNode = node.data.label // 名称
      this.dataTreeNumber = node.data.number // 编号
      this.parentNode = node.parent.data.label // 上级
      // this.$route.params.team = this.dataTreeNumber // 编号
      // this.$router.push( '/organmazation/'+ this.dataTreeNumber)
      // console.log('this.$route: ', this.$route)
    }
    // getData() {
    //   request({
    //     url: '/honghe/v1/departments',
    //     method: 'get'
    //   })
    // }
  }
}
</script>

<style scoped>
.grid-content{
  font-size: 12px;
  padding: 8px;
  color: #666;
  font-family: "微软雅黑";
}
.datatree{
  width: 60%;
  margin: 0 auto;
}
</style>
