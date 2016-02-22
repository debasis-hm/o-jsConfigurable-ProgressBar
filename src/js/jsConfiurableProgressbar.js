function origamijsConfigurableProgress_bar(parms) {

		let db = this;

	    db.draw_ProgressBar = function(parms){


   				if( parms.animationstyle == "o-progressBar"){

					let jsonDatalength = parms.dataLabels.length;

					if(jsonDatalength){

						var index = -1;

						setInterval(function() {
							index++;
							if(index < jsonDatalength){

								var parentDiv = document.getElementById(parms.dataLabels[index].progresshtmlElement);
								var outerclsinfo = parms.dataLabels[index].outerBackgroundclassName;
								if(outerclsinfo){parentDiv.classList.add(outerclsinfo);}							

										var innerDiv = document.createElement("DIV");
										var innerclsinfo = parms.dataLabels[index].className;
										innerDiv.classList.add(innerclsinfo);
										parentDiv.appendChild(innerDiv);
										var width = 0;
										var progressjson = parms.dataLabels[index].progress;
										if(progressjson){

											var progress = setInterval(function () { 
													if (width == progressjson) {
														 clearInterval(progress);						
													}
													else{
														width++;
														innerDiv.style.display = "inline-block";
														innerDiv.style.width = width+ "%";													   
													    innerDiv.innerHTML = width+ "%";													    	
													}
																	    
										     }, 30); 
										}


							}
						},100);
					}
				}
				else {

     				console.log("please provide a type .");
				}

	    };

	};

 let ojsConfigurableProgressbarobj = new origamijsConfigurableProgress_bar();
	export default function (parms) {
		if(parms!= undefined){
			   ojsConfigurableProgressbarobj.draw_ProgressBar(parms);
		}	   
	 
	}
