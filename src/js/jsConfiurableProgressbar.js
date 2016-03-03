function origamijsConfigurableProgress_bar(parms) {

		let db = this;


	    db.draw_ProgressBar = function(parms){


   				if( parms.animationstyle == "o-progressBar"){

					let jsonDatalength = parms.dataLabels.length;

					if(jsonDatalength){

						let index = -1;

						setInterval(function() {
							index++;
							if(index < jsonDatalength){

								let parentDiv = document.getElementById(parms.dataLabels[index].progresshtmlElement);
								let outerclsinfo = parms.dataLabels[index].outerBackgroundclassName;
								if(outerclsinfo){parentDiv.classList.add(outerclsinfo);}							

										let innerDiv = document.createElement("DIV");
										let innerclsinfo = parms.dataLabels[index].className;
										innerDiv.classList.add(innerclsinfo);
										parentDiv.appendChild(innerDiv);
										let width = 0;
										let progressjson = parms.dataLabels[index].progress;
										if(!progressjson){
											
											if(progressjson >= 0 && progressjson <= 100){
												let progress = setInterval(function () { 
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
											else {

												console.log("please enter valid data.");
											}
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
