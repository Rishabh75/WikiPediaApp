$(document).ready(function(){
	$('.keyword').keypress(function(e){

		if(e.which==13){
			$('.submit').click();
		}

	});

	$('.submit').click(function(){

		var keyword=$('.keyword').val();
		var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+keyword+"&format=json&callback=?";

		$.ajax({
			type :"GET",
			url :url,
			async:false,
			dataType:"json",
			success:function(data){
				$(".result").html("");
				
				for(var i=0;i<data[1].length;i++){
					$(".result").append("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><br><p>"+data[2][i]+"</p></li>");
				}
				
				$(".keyword").val("");
			},
			error:function(error){
				alert("Error");
			}

		});

	});

});