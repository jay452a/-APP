<template>
  <section>
    <!--<span v-for="item in renderData" @click="toChildren(item)">
      <mt-cell
        :title="item.deptName"
        :value="item.children?item.children.length:''"
        :is-link="item.children?true:false">
        <img slot="icon" src="" width="24" height="24" v-if="!item.children">
      </mt-cell>
      </span>-->
    <h3>{{title}}</h3>
    <ul>
      <li v-for="item in renderData" @click="toChildren(item)" v-if="item.children">
        <p>{{item.deptName}}<label class="number">{{item.children.length}}</label><i class="mint-cell-allow-right"></i></p>
      </li>
    </ul>
    <ul style="margin-top: 10px">
      <li v-for="item in renderData" @click="toChildren(item)" v-if="!item.children">
        <p>
          <span class="pic">{{item.deptName.substring(item.deptName.length-2,item.deptName.length)}}</span>{{item.deptName}}
        </p>
      </li>
    </ul>
  </section>
</template>
<script>
  const tree = [
    {
      deptName: '渣渣辉',
      level: 1,
      id: 3,
      pid: 0
    },
    {
      deptName: '部门一',
      level: 1,
      id: 'ss',
      pid: 0,
      children: [
        {
          deptName: '文鹏',
          level: 2,
          id: 12,
          pid: 'ss'
        },
        {
          deptName: '毛文杰',
          level: 2,
          id: 123,
          pid: 'ss'
        }
      ]
    },
    {
      deptName: '部门二',
      level: 1,
      id: '2s',
      pid: 0,
      children: [
        {
          deptName: '二_子部门',
          level: 2,
          id: 12,
          pid: '2s',
          children: [
            {
              deptName: '文鹏2',
              level: 3,
              id: 12,
              pid: 12
            }
          ]
        },
        {
          deptName: '毛文杰2',
          level: 2,
          id: 123,
          pid: '2s'
        }
      ]
    }
  ]
  export default {
    data() {
      return {
        allData: tree,
        renderData: [],
        level: this.$store.state.addressBook.organizeLevel,
        title: '民革市委'
      }
    },
    methods: {
      toChildren(data) {
        if (!data.children) {
          return
        }
        this.title = data.deptName
        const id = data.id
        console.log(id)
        this.renderData = data.children
        window.location.href = '#/addressBook/myOrganize/' + id
      },
      initData(id) {
        // pid位子元素的pid
        if (id === 'default') {
          this.renderData = tree
          this.title = '民革党委'
          return
        }
        var getData = []
        var title = ''
        function search(id, alldata) {
          let isSub = true
          for (let i = 0; i < alldata.length; i++) {
            if (alldata[i].pid === id) {
              getData.push(alldata[i])
              isSub = false
            }
            if (alldata[i].id === id) {
              title = alldata[i].deptName
            }
          }
          if (!isSub) {
            return getData
          }
          if (isSub) {
            for (let j = 0; j < alldata.length; j++) {
              if (alldata[j].children) {
                search(id, alldata[j].children)
              }
            }
          }
        }
        search(id, this.allData)
        console.log(getData, 'get')
        if (getData.length > 0) {
          this.renderData = getData
          this.title = title
        }
        return getData
      }
    },
    created() {
      console.log(this.allData)
      const level = this.$store.state.addressBook.organizeLevel
      if (level === 'default') {
        this.renderData = tree
      }
      // this.$store.dispatch('changeOrganizeLevel', 2)
    },
    watch: {
      $route(val) {
        const paramId = val.params.id
        console.log(paramId, 'my')
        this.initData(paramId)
      }
    }
  }
</script>
<style lang="scss" scoped>
  h3{
    font-weight: 100;
    padding: 10px ;
  }
  ul li{
    background: white;
    width: 100%;
    padding: 14px 10px;
    position: relative;
    span.pic{
      width: 40px;
      height:40px;
      background: #65b2fa;
      display: inline-block;
      border-radius: 50%;
      line-height: 40px;
      text-align: center;
      color: white;
      margin-right: 15px;
    }
    &:after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background: #dcdcdc;
      bottom:0;
      left:0;
    }
    &:active{
      background: #f2f2f2;
    }
    label.number{
      position: absolute;
      right: 30px;
      font-weight: 100;
      color: #626262;
    }
  }
</style>
