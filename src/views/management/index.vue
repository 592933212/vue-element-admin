<template>
  <div>
    <div class="dashboard-container">
      <div id="myChart" :style="{width: '500px', height: '300px'}"/>
      <div id="myChart2" :style="{width: '500px', height: '300px'}"/>
      <div id="myChart3" :style="{width: '500px', height: '300px'}"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.drawLine()
    this.drawLine2()
    this.drawLine3()
  },
  methods: {
    drawLine() {
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: { text: '柱状图' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 10, 36, 10, 10, 20]
        }]
      })
    },
    drawLine2() {
      const myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      myChart2.setOption({
        title: { text: '折线图' },
        tooltip: {},
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'A部门人均GDP',
            type: 'line',
            stack: '$',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'B部门人均GDP',
            type: 'line',
            stack: '$',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'C部门人均GDP',
            type: 'line',
            stack: '$',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'D部门人均GDP',
            type: 'line',
            stack: '$',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'E部门人均GDP',
            type: 'line',
            stack: '$',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    },
    drawLine3() {
      const myChart3 = this.$echarts.init(document.getElementById('myChart3'))
      myChart3.setOption({
        background: 'white',
        title: { text: '饼图' },
        tooltip: {},
        series: [{
          name: '人数',
          type: 'pie',
          clockwise: true,
          data: [
            { name: '1班', value: 53 },
            { name: '2班', value: 52 },
            { name: '3班', value: 49 }
          ]
        }]
      })
    }
  }
}
</script>

<style>
</style>
