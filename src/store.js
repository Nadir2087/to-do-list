import { createStore } from 'vuex'


const store = createStore({
    state(){
        return{
            nodes:[
                {title: 'One', tasks:['hello ', 'my name', 'df'], completed: ['hello ']},
                {title: 'Two', tasks:['hello ', 'my name', 'df'], completed: ['my']},
                {title: 'Tree', tasks:['hello ', 'my name', 'df'], completed: ['hi']},
            ],
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
        }
    },
    actions:{
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
    }
})

export default store