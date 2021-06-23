<template>
  <view class="todolist">
    <view>
      <input type="text" placeholder="请输入任务" v-model="task"/>
      <button size="mini" type="primary" @click="addTask" >添加</button>
      <view :class="item.status" v-for="item in showList" :key="item._id" @click="toggle(item._id, item.status)">{{ item.task }}</view>
      <view @click="clickBtn">
        <button data-btn="all" type="default" :class="curBtn === 'all' ? 'active' : ''" size="mini">全部</button>
        <button data-btn="done" type="default" size="mini" :class="{ active: curBtn === 'done' }">已完成</button>
        <button data-btn="undone" type="default" size="mini" :class="{ active: curBtn === 'undone' }">未完成</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      task: '',
      curBtn: 'all' //all done undone
    };
  },
  computed: {
    showList() {
      switch (this.curBtn) {
        case 'all':
          return this.list;
        case 'undone':
          return this.list.filter(item => item.status === 'undone');
        case 'done':
          return this.list.filter(item => item.status === 'done');
        default:
          return this.list;
      }
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      uni.request({
        url: 'http://jacklv.cn/todolist/getTasks',
        success: res => {
          if (res.data.code === 1) {
            this.list = res.data.data;
          }
        }
      });
    },
    addTask() {
      //获取表单值 把数据传到后端 更新数据
      console.log(this.task)
      if (!this.task) return;
      
      //有值发送到后端
      uni.request({
        url: 'http://jacklv.cn/todolist/addTask',
        method: 'post',
        data: {
          task: this.task
        },
        success: res => {
          this.getData();
        }
      });
    },
    toggle(_id, status) {
      //修改任务状态
      uni.request({
        url: 'http://jacklv.cn/todolist/changeTaskStatus',
        method: 'post',
        data: {
          _id,
          status
        },
        success: res => {
          this.getData();
        }
      });
    },
    clickBtn(e) {
      const { btn } = e.target.dataset;
      this.curBtn = btn;
    }
  }
};
</script>

<style lang="scss">
.todolist {
  .done {
    color: orange;
    text-decoration: line-through;
  }
  .undone {
    color: red;
  }
  .active {
    background-color: #fff;
    color: red;
  }
}
</style>
