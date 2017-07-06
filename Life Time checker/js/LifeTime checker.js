//born
function goStartCheckLife(){
	var nowdte=new Date();
	var q=nowdte.getYear();
	var o=nowdte.getMonth();
	var y=nowdte.getDate();
	for(nd=0;nd<document.getElementById('nowday').options.length;nd++){
		document.getElementById('nowday').options[nd].selected=false;
		if(document.getElementById('nowday').options[nd].value==y){
			document.getElementById('nowday').options[nd].selected=true;
		}
	}
	for(nm=0;nm<document.getElementById('nowmonth').options.length;nm++){
		document.getElementById('nowmonth').options[nm].selected=false;
		if(nm==o){
			document.getElementById('nowmonth').options[nm].selected=true;
		}
	}
	for(ny=0;ny<document.getElementById('nowyear').options.length;ny++){
		document.getElementById('nowyear').options[ny].selected=false;
		if(document.getElementById('nowyear').options[ny].value==(q+1900)){
			document.getElementById('nowyear').options[ny].selected=true;
		}
	}
}
function goCheckLife(){
	var DateFormat = new DecimalFormat("###,###,###");
	var birthdayval = document.getElementById('daybrth');
	var birthmonthval = document.getElementById('monthbrth');
	var birthyearval = document.getElementById('yearbirth');
	var g=birthdayval.value+' '+birthmonthval.value+' '+birthyearval.value;
	var f = new Date(g);
	var w=f.getYear();
	var p=f.getMonth();
	var m=f.getDate();
	//now
	var birthdayval = document.getElementById('nowday');
	var birthmonthval = document.getElementById('nowmonth');
	var birthyearval = document.getElementById('nowyear');
	var e=birthdayval.value+' '+birthmonthval.value+' '+birthyearval.value;
	var nowdte=new Date(e);
	var q=nowdte.getYear();
	var o=nowdte.getMonth();
	var y=nowdte.getDate();
	var u=q-w;
	r=(24 -(p-o))%12;
	h=(y-m);
	if(o-p<0){
	u=u-1;
	}
	sec=(nowdte-f)/1000;
	min=(nowdte-f)/1000/60;
	hour=(nowdte-f)/1000/60/60;
	day=(nowdte-f)/1000/60/60/24;
	month=(nowdte-f)/1000/60/60/24/31;
	year=(nowdte-f)/1000/60/60/24/366;
	var godks = '';
	godks += 'Your life time<br>';
	godks += u+' year, '+r+' month, '+parseInt(day%31)+' day...<table><tbody>';
	godks += '<tr><td>Equal to </td><td style="text-align:right">'+parseInt(q-w)+'</td><td> year...</td></tr>';
	godks += '<tr><td>Equal to </td><td style="text-align:right">'+DateFormat.format(month)+'</td><td> month...</td></tr>';
	godks += '<tr><td>Equal to </td><td style="text-align:right">'+DateFormat.format(day)+'</td><td> day...</td></tr>';
	godks += '<tr><td>Equal to </td><td style="text-align:right">'+DateFormat.format(hour)+'</td><td> hour...</td></tr>';
	godks += '<tr><td>Equal to </td><td style="text-align:right">'+DateFormat.format(min)+'</td><td> min...</td></tr>';
	godks += '<tr><td>Equal to </td><td style="text-align:right">'+DateFormat.format(sec)+'</td><td> sec...</td></tr></tbody></table>';
	document.getElementById('resultPot').innerHTML = godks;
}