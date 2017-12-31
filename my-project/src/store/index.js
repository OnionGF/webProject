
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import * as mt from './mutation-type'
import * as at from './action-type'
import multiply from './mul'


const state = {
    count: 10
}
//getters只是用来修饰 state 进行过滤的效果
const getters = {
    check(state){
        return state.count<0?0:state.count
    }
}

//mutations用来修改state数据
const mutations = {
    [mt.INCREMENT](state){
        state.count+=3
    },
    [mt.DECREMENT](state){
        if(state.count>0){
           state.count--
        }
    }
}

//主要用来接收数据，处理异步操作
const actions = {
     async [at.INCREMENT](context){ 
        console.time('text')        
        context.commit(mt.INCREMENT,await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(0)
                resolve()
            },2000)
        })) 
    },
    // async [at.DECREMENT](context){
    //     await context.dispatch(at.INCREMENT)
    //     await new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log(1)
    //             // resolve()  //如果resolve()不执行，就不会执行下面的语句
    //         },2000)
    //     })
    //     console.timeEnd('text')
    //     context.commit(mt.DECREMENT)
    // }
    async [at.DECREMENT]({dispatch,commit}){
        await dispatch(at.INCREMENT)
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(1)
                resolve()  //如果resolve()不执行，就不会执行下面的语句
            },2000)
        })
        console.timeEnd('text')
        commit(mt.DECREMENT)
    }
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules:{
        m:multiply
    }
})