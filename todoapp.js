new Vue({
    el: '#todo',

    data: {
        header: 'Todo List',
        newItem: '',
        list:[]
    

    },
    
    methods: {
        add()
        {
           this.list.push({name:this.newItem, check: false});  
           this.newItem=''; 
        },
        remove(ind)
        {
            this.list.splice(ind,1);
        }
    }

});