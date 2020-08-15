$(function(){
	/*$(".openModal").click(function(e){
		setModal('2','SIMPANG WASPADA');
	});*/
});

function setModal(id,tlt){
	/*jQuery.ajax({
		type:'POST',url:base_url+"mplayer/mvideo/"+id,success:function(data) {
			bootbox.dialog({
				//"class" : "class-with-width",
				message: data,
				title: tlt,
				closeButton: true
			})
		}
	}); */
	location.href = base_url+"mplayer/mvideo?ist="+id;
}