<template>
    <div>
        <div>
            <input v-model="inputValue"/>
            &nbsp;&nbsp;&nbsp;
            <button @click="handleSubmit">提交</button>
            <ul>
                <!--
                <li v-for="(item,index) in list">
                    {{item}}
                </li>
                -->
                <todo-item v-for="(item,index) of list" @delete="handleDelete" :content='item' :index='index' :key="index">

                </todo-item>
            </ul>
        </div>
    </div>
</template>
<script>
import TodoItem from '@/components/TodoItem'
export default {
    components:{
        'todo-item':TodoItem
    },
    data(){
      return{
          inputValue:'',
          list:[]
      }
    },
    methods:{
        handleSubmit(){
            this.list.push(this.inputValue)
            this.inputValue = ''
        },
        handleDelete(index){
            this.list.splice(index,1)
        }
    }
}
</script>
<style  scoped>

</style>

