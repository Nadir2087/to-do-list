<template>
  <section class="td-home">
    <div class="container">
        <header class="header">
            <div class="header-container">
                <div class="header-logo">TO_DO</div>
                <div class="add-node">
                    <router-link to="/tasks" class="btn">Add Node</router-link>
                </div>
            </div>
        </header>
        <div class="node_board">
            <div class="node_board-container">
                <div class="node" v-for="(nade,inx) in allNodes" :key="inx">
                    <h3 class="title">{{ nade.title }}</h3>
                    <ul>
                        <li><span class="clik"></span>{{nade.tasks[0]}}</li>
                        <li><span class="clik"></span>{{nade.tasks[1]}}</li>
                        <li><span class="clik"></span>{{nade.tasks[2]}}</li>
                    </ul>
                        <div class="btns">
                            <div @click="change(inx)" class="change">change</div>
                            <div @click="warning(inx)" class="del">del</div>
                        </div>
                </div>
    
            </div>
        </div>
    </div>
    <transition>
      <div class="bg" v-if="war">
        <div class="win">
            <div class="warning"><p>Вы точно хотите удалить ваши записи?</p></div>
            <div class="win_btns">
            <div @click="delNode(warningInx)" class="div yes">Yes</div>
            <div @click="war=false" class="div no">No</div>
          </div>
      </div>
    </div>
    </transition>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:"td-home",
    data(){
        return{
            war: false,
            warningInx:null
        }
    },
    methods:{
        ...mapActions(['CHANGENODE','DELITNODE', 'LOK_NODE']),

        change(inx){
            this.CHANGENODE(this.allNodes[inx])
            this.$router.push('/change/'+inx)
            // this.CHANGENODE('hello')
        },
        delNode(inx){
            this.DELITNODE(inx)
            this.war = false
        },
        warning(inx){
            this.war = true
            this.warningInx = inx
        }
    },  
    computed:mapGetters(['allNodes','nowNodes']),
    // mounted(){
    //     if (localStorage.getItem('nodes')) {
    //         try {
    //             let c = JSON.parse(localStorage.getItem('nodes'))
    //             // this.$store.state.nodes = JSON.parse(localStorage.getItem('nodes'));
    //             this.LOK_NODE(c);
    //         } catch(e) {
    //             localStorage.removeItem('nodes');
    //         }
    //     }
        
    //     }
}
</script >

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.td-home{
    font-family: 'Roboto', sans-serif;
    .container{
    background: #F9F9F9;
    max-width: 1200px;
    margin: 0 auto;

        .header{
            position: relative;
            z-index: 1;
            height: 60px;
            padding: 0 20px;
            background: #fff;
            box-shadow: 0 4px 10px #7777;
            .header-container{
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .header-logo{
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                    font-size: 25px;
                }
                .add-node{
                    .btn{
                        cursor: pointer;
                        text-decoration: none;
                        padding: 10px;
                        border: 0 ;
                        border-radius: 10px;
                        background: rgb(24, 128, 197);
                        color: #fff;
                        font-size: 18px;
                    }
                }
            }
        }
        .node_board{
            .node_board-container{
                display: flex;
                flex-wrap: wrap;
                padding: 20px;
                .node{
                    overflow: hidden;
                    cursor: pointer;
                    box-sizing: border-box;
                    padding: 10px;
                    width: 200px;
                    margin: 10px 16px;
                    // height: 180px;
                    background: #fff;
                    box-shadow: 0 4px 10px #7777;

                    .title{
                        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                        margin: 0;
                        padding: 0;
                        font-size: 25px;
                        text-align: center;
                    }
                    ul {
                        font-size: 20px;
                        padding: 0;
                        li{
                            display: flex;
                            align-items: center;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.123);
                            margin: 0 0 10px 0;
                            list-style: none;
                            .clik{
                                width: 10px;
                                height: 10px;
                                border: 3px solid #000;
                                border-radius: 50%;
                                margin-right: 10px;
                            }
                        }
                    }
                    .btns{
                        display: flex;
                        justify-content: space-between;
                    }
                }
                .btns {
                    color: #fff;
                    div{
                        border-radius: 10px;
                        text-align: center;
                        padding: 10px;
                        width: 55px;
                    }
                    .change {
                        background: rgb(5, 144, 168);
                    }
                    .del {
                        background: rgb(202, 103, 103);
                    }
                }
            }
            
            
        }
    }
    .bg {
    position: absolute;
    top: 0;right: 0;z-index: 9;
    background: rgba(99, 99, 99, 0.37);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  .win {
    border-radius: 15px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    width: 400px;
    height: 300px;
    background: #fff;
    .warning {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80%;
      font-size: 25px;
      text-align: center;
    }
    .win_btns {
      height: 20%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      justify-content: space-between;
      .div{
        border-radius: 10px;
        margin-bottom: 20px;
        cursor: pointer;
        width: 70px;
        text-align: center;
        padding: 10px 0;
        color: #fff;
      }
      .yes {
        background: red;
      }
      .no {
        background: green;
      }


    }
  }
 
}
}
</style>