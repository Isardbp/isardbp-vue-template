<template>
  <div class="about">
    <h1 class="titleAbout">This is an about page</h1>
    <div class="cardGroup">
	    <div>
		    <b-card-group deck>
		      <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
		        <b-card-text id="textExample">{{this.$store.state.exampleText}}</b-card-text>
		        <div class="row">
		        	<div class="col">
			        	<b-button id="jqueryButton">Jquery Test</b-button>
			        </div>
			        <div class="col">
			        	<b-button @click="refreshText">Refresh text</b-button>
			        </div>
		        </div>
		      </b-card>

		      <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
		        <b-card-text>{{testData}} aslkdjfh</b-card-text>
		        <b-button @click="getDataTest">Axios tets</b-button>
		      </b-card>

		      <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
		        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
		      </b-card>
		    </b-card-group>
	  	</div>
		<div class="mt-3">
		    <b-card-group deck>
		      <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
		        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
		      </b-card>

		      <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
		        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
		      </b-card>

		      <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
		        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
		      </b-card>
		    </b-card-group>
		</div>
		<div class="mt-3">
		    <b-card-group deck>
		      <b-card bg-variant="light" header="Light" class="text-center">
		        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
		      </b-card>

		      <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
		        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
		      </b-card>

		      <b-card header="Default" class="text-center">
		        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
		      </b-card>
		    </b-card-group>
		</div>
	</div>
  </div>
</template>

<script>
	import store from '../store'
    export default {
        computed : {
        	testData: function(){ return store.getters.testData }
        },
        components : {

        },
        data() {
            return {
                data1: 'Hola',
            }
        },
        beforeCreate(){
        	console.log("beforeCreate")
        },
        created(){
        	console.log("created")
        	this.displayNoneJquey()
        },
        beforeMount(){
        	console.log("beforeMount")
        },
        mounted(){
        	console.log("mounted")
        	this.udpateData1("Isardbp")
        },
        beforeUpdate(){
        	console.log("beforeUpdate")
        },
        updated(){
        	console.log("updated")
        },
        beforeDestroy(){
        	console.log("beforeDestroy")
        },
        destroyed(){
        	console.log("destroyed")
        },
        methods: {
        	udpateData1(name){
        		this.data1 = this.data1 + ' ' + name
        	},
        	displayNoneJquey(){
				$(document).ready(function(){
				  $("#jqueryButton").click(function(){
				  	if($('#textExample').css('display') == 'none'){
				  		$("#textExample").css("display", "block");
					} else if($('#textExample').css('display') == 'block') {
						$("#textExample").css("display", "none");
					}
				  });
				});
			},
			refreshText(){
				store.state.exampleText = 'other text changed'
			},
			getDataTest() {
				store.dispatch('getTestData')
				.then(function(res) {
					console.log(this.testData)
				})
		       .catch(err => alert(err))

			}
        }
  }
</script>

<style lang="scss">
	.cardGroup{
		width: 70%;
		margin: auto;
		margin-top: 5vw;
	}
	.titleAbout{
		margin-top: 2vw;
	}
	.textExample{
		display: block;
	}
</style>