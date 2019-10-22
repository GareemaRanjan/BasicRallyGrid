Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
    launch: function() {
        //Write app code here
        console.log("hello");
        this._loaddata();
    				//API Docs: https://help.rallydev.com/apps/2.1/doc/
   
},

_loaddata:function() {

	     var my_store= Ext.create('Rally.data.wsapi.Store', {
				    		model: 'User Story',
				    		autoLoad: true,
				    		listeners: {
        		load: function(mystore, mydata, success) {
            //process data
            		console.log(mystore);
            		// console.log(mydata);
            		console.log(success);
            		this._loadgrid(mystore)
        },
        scope:this
    },
    fetch: ['FormattedID','Name', 'ScheduleState']
});
    

},

_loadgrid: function(mystore){
	var my_grid= Ext.create('Rally.ui.grid.Grid',{
            			store: mystore,
            			columnCfgs:['FormattedID','Name','ScheduleState']

            		});

            		console.log("my grid ", my_grid);
            		this.add(my_grid);
            		console.log(this);
}
});