var vm = new Vue({
	el: "main",
	data: {
		title: 'Codeblocks',
		pages: []
	},
	mounted: function(){
		const app = this;
		fetch("/pages").then(function(data){
			return data.json();
		}).then(function(json){
			console.log(json);
			app.pages = json;
		});
	}
});