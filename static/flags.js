//Hello World
$(function(){
	$('body').append('Hello World <br>--------------------------------------<br>');
});

//Adding structure and images
$(function(){
	var br=$('<div/>');
	br.append($('<div/>',{text:'Brazil'}));
	br.append($('<img/>',{src:'../static/br.gif'}));
	$('body').append(br);
});

$(function(){
	var fr=$('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'../static/fr.gif'}));
	$('body').append(fr);
});

$(function(){
	var gr=$('<div/>');
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'../static/gr.gif'}));
	$('body').append(gr,'<br>--------------------------------------<br>');
});
////End adding structure and images

//Implementing css
$(function(){
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');

	$('div').css('width','206');
	$('div:eq(0)').css('border','2px solid black');
	$('div:eq(2)').css('border','2px solid black');
	$('div:eq(4)').css('border','2px solid black');
	$('div:eq(0)').css('padding','24px');
	$('div:eq(2)').css('padding','24px');
	$('div:eq(4)').css('padding','24px');
	$('div').css('display','inline-block');
	$('div').css('margin','1ex');

});
//End Implementing css

//Using an Array of values
$(function(){
	var clist=[
	["br","Brazil"],
	["fr","France"],
	["gr","Greece"],
	["za","South Africa"],
		];
	$(function(){
		createOne();
	});
	$(function createOne(){
		var i=Math.floor(clist.length*Math.random());
		var code=clist[i][0];
		var name=clist[i][1];
		var qu=$('<div id="qu"/>');
		qu.append($('<div/>',{text:name,id:'ans'}).hide());
		qu.append($('<img/>',{src:'../static/'+code+'.gif'}));
		qu.append($('<input/>',{id:'response'}));
		$('body').append(qu);
		$('#response').keyup(function(){
			if($('#response').val()==$('#ans').text()){
				alert("Well Done");
			}
			});
	});
//css
	$(function(){
	$('#qu').css('border','solid 3px gray');
	$('#qu').css('width',350);
	$('#qu').css('padding','24px');
//end css

});

});

// $(function(){
// 	$('#response').keyup(function(){
// 	if($('#response').val()==$('#ans').text()){
// 		alert("Well Done");
// 	}
// 	});
// });
//End Using an Array of values