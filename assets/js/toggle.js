$(document).ready(function(){
			$("a#filter-toggle").on("click", function(event){
				event.preventDefault();
				$("form#filters").toggleClass("hide-for-small");
				
			});
			
	});

