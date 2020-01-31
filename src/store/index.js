import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	exampleText: 'exampleText from vuex',

  	testData: [],
  	testDataStatus: ''
  },
  mutations: {
  	test_data_request(state){
  		state.testDataStatus = 'loading'
  	},
  	test_data_success(state){
  		state.testDataStatus = 'success'
  	},
  	test_data_error(state){
  		state.testDataStatus = 'error'
  	},
  	get_test_data(state, data){
      this.state.testData = data
      console.table(state.testData["foo1"])
      console.table(state.testData["foo2"])

  	}
  },
  actions: {
  	getTestData({commit}) {
  		return new Promise((resolve, reject) => {
  			commit('test_data_request')
  			axios({url: 'https://postman-echo.com/get', method: 'GET', params: {foo1: 'bar1', foo2: 'bar2'}})
	        .then(resp => {
	          console.table(resp.data.args)
            commit('get_test_data', resp.data.args)
	          
            //commit('test_data_success')
	          //resolve(resp)
	        })
	        .catch(err => {
	          commit('test_data_error', err)
	          reject(err)
	        })
  		})
  	}
  },
  modules: {
  	testDataStatus: state => state.testDataStatus,
  	testData: state => state.testData
  }
})
