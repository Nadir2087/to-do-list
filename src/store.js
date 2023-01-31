import { createStore } from 'vuex'


const store = createStore({
    state(){
        return{
            nodes:[
                {title: 'One', 'tasks':['hello ', 'my name', 'df']},
                {title: 'Two', 'tasks':['hello ', 'my name', 'df']},
                {title: 'Tree', 'tasks':['hello ', 'my name', 'df']},
            ]
        }
    },
    mutations:{
        ADDNODETONODES(state, data){
            state.nodes.unshift(data)
        }
    },
    actions:{
        ADDNODE({commit},node){
            commit('ADDNODETONODES', node)
        }

    },
    getters:{
        allNodes(state){
            return state.nodes
        }
    }
})

export default store