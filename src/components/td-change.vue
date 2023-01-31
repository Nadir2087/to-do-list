<template>
  <section class="td-tasks">
    <div class="container">
    <h1 style="color:red;text-align: center;">{{ error }}</h1>
      <div class="title">
      <!-- <h2>title</h2> -->
      <input v-model="nowNodes.title" class="input" type="text" placeholder="Title" autofocus>
        <!-- <p>{{ this.$store.state.nodes }}</p> -->
      <div class="btns">
        <div class="del">&#9746;</div>
      <div  @click="save" class="seve">save</div>
      </div>

    </div>
    <div class="tasks">
      <div class="task"  @click="computed(inx)" v-for="(task,inx) in nowNodes.tasks" :key="inx">
        <div class="text">
          <div class="chek"></div>
          {{ task }}
        </div>

        <div @click="delTask(inx)" class="del_task">del</div>
      </div>
      <div class="task" v-if="input">
        <div class="text">
          <div class="chek"></div>
          <input class="input" @keypress.enter="addTask" type="text" placeholder="Введите новую задачу!"  v-model="input_now">
        </div>
      </div>
    </div>
    <div class="newTask">
      <button class="btn" @click="addTask" :class="{btn_on:input}">ADD NEW TASK</button>
    </div>
    <div class="c-tasks">
      <div class="c-task"  @click="notComputed(inx)" v-for="(task,inx) in nowNodes.completed" :key="inx">
        <div class="c-text">
          <div class="c-chek"></div>
          {{ task }}
        </div>

        <div @click="delTask(inx)" class="c-del_task">del</div>
      </div>
    </div>
    </div>
   

  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
name:'td-tasks',
data(){
  return{
    input:false,
    node:{title:'', tasks: []},
    input_now: null,
    error: null
  }
},
methods:{
  ...mapActions(['ADDNODE','COMPUTED_TO_TASK', 'NOT_COMPUTED_TO_TASK']),
  addTask(){
    if(this.input == false){
      this.input = true
    }else{ 
      if(this.input_now.length > 0){
        this.nowNodes.tasks.push(this.input_now)
        this.input_now = null
      }
    }
  },
  delTask(inx){
    this.nowNodes.tasks.splice(inx,1)
  },
  save(){
    this.$router.push('/')
    
  },
  computed(inx){
    this.COMPUTED_TO_TASK(inx)
  },
  notComputed(inx){
    this.NOT_COMPUTED_TO_TASK(inx)
  }
},
computed: mapGetters(['nowNodes'])
}
</script>

<style lang="scss">
input{
  border: 0;
}
input:focus, textarea:focus, select:focus {
  outline: none !important;
}
.td-tasks
{
  background: #DAE0F5;
  height: 100vh;
  padding: 20px 0;
  .container{
    max-width: 800px;
    margin: 0 auto;
  }
  .title{
    margin-bottom: 25px;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(5, 103, 148);
    color: #fff;
    input{
      font-size: 25px;
      background: 0;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      

    }
    .btns{
      cursor: pointer;
      display: flex;
      align-items: center;

      .del{
        font-size: 30px;
        margin-right: 10px;
        color: red;

      }
      .seve{
        padding: 10px 15px;
        border-radius: 10px;
        background: rgb(99, 99, 190);
      }  
    }
  }
  .c-tasks {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    background: rgb(218, 218, 218);
    border-radius: 15px;
    min-height: 65px;
    .task {
      border-bottom: 1px solid rgba(0, 0, 0, 0.185);
      padding: 10px 20px;
      display: flex;
      font-size: 20px;
      justify-content: space-between;
      align-items: center;
    }
    .text{
      display: flex;
      align-items: center;
      .input{
        font-size: 20px;
        padding: 10px;
        border: 0;
        width: 33em;
      }
    }
    .chek {
      width: 20px;
      height: 20px;
      border: 1px solid #000;
      border-radius: 50%;
      margin-right: 20px;
    }
    .del_task {
      padding: 10px 20px;
      border-radius: 10px;
      background: red;
      color: #fff;
    }
  }
  .newTask {
    
    text-align: center;
    width: 100%;
    margin: 0 auto;
    .btn {
      position: relative;
      top: -25px;
      padding: 20px;
      border-radius: 25px;
      border: 0;
      background: rgb(5, 103, 148);
      color: #fff;
      transition: all .3s ease;
    }
    .btn_on{
      top:10px;
    }
  }
  .c-tasks {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    background: rgb(221, 221, 221);
    border-radius: 15px;
    min-height: 65px;
  .c-task {
      border-bottom: 1px solid rgba(0, 0, 0, 0.185);
      padding: 10px 20px;
      display: flex;
      font-size: 20px;
      justify-content: space-between;
      align-items: center;
    }
    .c-text{
      text-decoration:line-through;
      display: flex;
      align-items: center;
      .input{
        font-size: 20px;
        padding: 10px;
        border: 0;
        width: 33em;
      }
    }
    .c-chek {
      width: 20px;
      height: 20px;
      border: 1px solid #000;
      background: #000;
      border-radius: 50%;
      margin-right: 20px;
    }
    .c-del_task {
      padding: 10px 20px;
      border-radius: 10px;
      background: red;
      color: #fff;
    }
  }
  }
</style>