import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';


const store = createStore({
    state(){
        return{
            nodes:[],
            nowNodes: []
        }
    },
    mutations:{
        ADDNODETONODES(state, data){
            state.nodes.unshift(data)
        },
        NOWNODE(state,node){
            state.nowNodes = node
        },
        DELNODE(state,inx){
            state.nodes.splice(inx,1)
        },
        COMPUTEDTASK(state, task){
            state.nowNodes.completed.push(state.nowNodes.tasks[task])
            state.nowNodes.tasks.splice(task,1)
        },
        NOTCOMPUTEDTASK(state, task){
            state.nowNodes.tasks.push(state.nowNodes.completed[task])
            state.nowNodes.completed.splice(task,1)
        },
        LOK(state, nod){
            state.nodes = nod
        }
    },
    actions:{
        LOK_NODE({commit}, node){
            commit('LOK', node)
        },
        ADDNODE({commit},node){
            commit('ADDNODETONODES', node)
        },
        CHANGENODE({commit}, node){
            commit('NOWNODE',node)
        },
        DELITNODE({commit},inx){
            commit('DELNODE',inx)
        },
        COMPUTED_TO_TASK({commit}, task){
            commit('COMPUTEDTASK', task)
        },
        NOT_COMPUTED_TO_TASK({commit}, task){
            commit('NOTCOMPUTEDTASK', task)
        }

    },
    getters:{
        allNodes(state){
            return state.nodes
        },
        nowNodes(state){
            return state.nowNodes
        }
    },
    plugins: [createPersistedState()]
})

export default store