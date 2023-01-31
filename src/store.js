import { createStore } from 'vuex'


const store = createStore({
    state(){
        return{
            nodes:[
                {title: 'One', 'tasks':['hello ', 'my name', 'df']},
                {title: 'Two', 'tasks':['hello ', 'my name', 'df']},
                {title: 'Tree', 'tasks':['hello ', 'my name', 'df']},
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