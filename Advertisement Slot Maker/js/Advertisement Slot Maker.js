function isNum(args)
{
args = args.toString();

if (args.length == 0)
return false;

for (var i = 0;  i<args.length;  i++)
{
	if ((args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9") && args.substring(i, i+1) != ".")
		{
		return false;
		}
}

return true;

}
function change(varr)
{
var aa = varr.value;

	if(isNum(aa))
	{
	
	}
	else
	{
		aa = aa.substring(0,aa.length-1);
		document.first.frac.value = aa;
	}
}

function hcfof(num1,num2)
{
	var firnum,secnum; 
	if(num1<num2)
	{
	 firnum = num1;
	 secnum = num2;
	}
	else
	{
	 firnum = num2;
	 secnum = num1;
	}
	
	var rem = (secnum%firnum);

	while(rem > 0)
	{
		secnum = firnum;
		firnum = rem;
		rem = (secnum%firnum);
	}
	
	var hcf = firnum;

	return hcf;
}


function calfrac(aa)
{

	if(isNum(aa))
	{
	 aa=aa*1;
  	 var bb = Math.floor(aa);
	 var cc = aa-bb;
	
	 var dd = 1;	
	 if(cc != 0)
	 	dd = Math.pow(10,aa.toString().length-2);
	 var ee = Math.round(aa*dd);

	 var hcf = hcfof(ee,dd);
  	 ee = ee/hcf;
	 dd = dd/hcf;	
	 dok = (ee>dd)? ""+Math.floor(ee /dd)+"<sup><font size=-2>"+(ee - (dd * Math.floor(ee /dd)))+"</font></sup>/<sub><font size=-2>"+dd+"</font></sub>" : "<sup><font size=-2>"+ee+"</font></sup>/<sub><font size=-2>"+dd+"</font></sub>";
	 if(dd==1){
		dok = (dd*ee) * Math.pow(10,aa.toString().length-1);
	 }
	 return dok;
	}
	else{}
}


function color(test)
{

	for(var j=2; j<6; j++)
	{
		var myI=document.getElementsByTagName("input").item(j);
		myI.style.backgroundColor=test;
	
	}
}


function color1(test)
{
var myI=document.getElementsByTagName("table").item(0);
//myI.setAttribute("style",ch);
myI.style.backgroundColor=test;
}
function updatPrevieAdSlot(){
	var islotfadz, iwsizefad, ihsizefad, iratefadz, ivcncyfad, ilocalfad, ifpricfad, inpricfad;
	var noslotfad, osizefadz, wsizefadz, hsizefadz, oratefadz, vcancyfad, locatefad, sizefract, fpricefad, npricefad;
	var fa, fe, fi, fo, fu;
	var slotName, exBannerHeight, exBannerWidth, joinSimpliSize, starRate, vacancyNumber, theLocation, joinFracSize, firstPrice, nextPrice;
	var oslotname, exampleBanner, aboutRate, aboutVacancy, aboutLocation, aboutFracSize, aboutOfferPrice;
	islotfadz = document.getElementById('islotfadz');
	iwsizefad = document.getElementById('iwsizefad');
	ihsizefad = document.getElementById('ihsizefad');
	iratefadz = document.getElementById('iratefadz');
	ivcncyfad = document.getElementById('ivcncyfad');
	ilocalfad = document.getElementById('ilocalfad');
	ifpricfad = document.getElementById('ifpricfad');
	inpricfad = document.getElementById('inpricfad');
	
	oslotname = document.getElementById('oslotname');
	exampleBanner = document.getElementById('exampleBanner');
	aboutRate = document.getElementById('aboutRate');
	aboutVacancy = document.getElementById('aboutVacancy');
	aboutLocation = document.getElementById('aboutLocation');
	aboutFracSize = document.getElementById('aboutFracSize');
	aboutOfferPrice = document.getElementById('aboutOfferPrice');
	
	noslotfad = 'Slot '+islotfadz.value;
	osizefadz = iwsizefad.value+'&times;'+ihsizefad.value;
	wsizefadz = parseInt(iwsizefad.value);
	hsizefadz = parseInt(ihsizefad.value);
	oratefadz = '&#9733;&#9733;&#9733;&#9733;&#9733;';
	fa = (hsizefadz/wsizefadz>=1)? parseFloat(hsizefadz/wsizefadz) : Math.round((hsizefadz/wsizefadz)*Math.pow(10,2))/Math.pow(10,2);
	if(wsizefadz>hsizefadz){
		fe='120px';
		fi=((hsizefadz/wsizefadz)*120)+'px';
	}else{
		if(wsizefadz==hsizefadz){
			fe='120px';
			fi='120px';
		}else{
			fe=((wsizefadz/hsizefadz)*120)+'px';
			fi='120px';
		}
	}
	vcancyfad = ivcncyfad.value;
	locatefad = ilocalfad.value;
	sizefract = '1&times;'+calfrac(fa);
	oneprcfad = 'RM'+ifpricfad.value+'.00/1month<br/>RM'+inpricfad.value+'.00/2month';
	oratefadz = '';
	for(i=1;i<=iratefadz.max;i++){
		if(i<=iratefadz.value){
			oratefadz += '&#9733;';
		}else{
			oratefadz += '&#9734;';
		}
	}
	
	oslotname.innerHTML = noslotfad;
	exampleBanner.innerHTML = osizefadz;
	exampleBanner.style.width = fe;
	exampleBanner.style.height = fi;
	aboutRate.innerHTML = oratefadz;
	aboutVacancy.innerHTML = vcancyfad;
	aboutLocation.innerHTML = locatefad;
	aboutFracSize.innerHTML = sizefract;
	aboutOfferPrice.innerHTML = oneprcfad;
}
function creatAdsSlot(){
	var islotfadz, iwsizefad, ihsizefad, iratefadz, ivcncyfad, ilocalfad, ifpricfad, inpricfad;
	var noslotfad, osizefadz, wsizefadz, hsizefadz, oratefadz, vcancyfad, locatefad, sizefract, fpricefad, npricefad;
	var fa, fe, fi, fo, fu;
	var slotName, exBannerHeight, exBannerWidth, joinSimpliSize, starRate, vacancyNumber, theLocation, joinFracSize, firstPrice, nextPrice;
	
	islotfadz = document.getElementById('islotfadz');
	iwsizefad = document.getElementById('iwsizefad');
	ihsizefad = document.getElementById('ihsizefad');
	iratefadz = document.getElementById('iratefadz');
	ivcncyfad = document.getElementById('ivcncyfad');
	ilocalfad = document.getElementById('ilocalfad');
	ifpricfad = document.getElementById('ifpricfad');
	inpricfad = document.getElementById('inpricfad');
	
	noslotfad = 'Slot '+islotfadz.value;
	osizefadz = iwsizefad.value+'&times;'+ihsizefad.value;
	wsizefadz = parseInt(iwsizefad.value);
	hsizefadz = parseInt(ihsizefad.value);
	oratefadz = '&#9733;&#9733;&#9733;&#9733;&#9733;';
	fa = (hsizefadz/wsizefadz>=1)? parseFloat(hsizefadz/wsizefadz) : Math.round((hsizefadz/wsizefadz)*Math.pow(10,2))/Math.pow(10,2);
	if(wsizefadz>hsizefadz){
		fe='120px';
		fi=((hsizefadz/wsizefadz)*120)+'px';
	}else{
		if(wsizefadz==hsizefadz){
			fe='120px';
			fi='120px';
		}else{
			fe=((wsizefadz/hsizefadz)*120)+'px';
			fi='120px';
		}
	}
	vcancyfad = ivcncyfad.value;
	locatefad = ilocalfad.value;
	sizefract = '1&times;'+calfrac(fa);
	oneprcfad = 'RM'+ifpricfad.value+'.00/1month<br/>RM'+inpricfad.value+'.00/2month';
	oratefadz = '';
	for(i=1;i<=iratefadz.max;i++){
		if(i<=iratefadz.value){
			oratefadz += '&#9733;';
		}else{
			oratefadz += '&#9734;';
		}
	}
	
	fo = document.getElementById('outputtext');
	
	fo.value = '';
	fo.value += '<table onclick="goToslotchange('+islotfadz.value+')" class="adstable" cellspacing="0px">';
	fo.value += '<tbody class="adsbody">';
	fo.value += '<tr><th colspan="3" class="adstitle">'+noslotfad+'</th></tr>';
	fo.value += '<tr><th colspan="3" class="adsthumbnail">';
	fo.value += '<center><div style="border:1px solid #000;width:'+fe+';height:'+fi+';display:table-cell;vertical-align:middle;">'+osizefadz+'</div></center>';
	fo.value += '</th></tr>';
	fo.value += '<tr><td class="adsthink">Rate</td><td class="none">:</td><td class="adsans rate">'+oratefadz+'/td></tr>';
	fo.value += '<tr><td class="adsthink">Vacancy</td><td class="none">:</td><td class="adsans vacancy">'+vcancyfad+'</td></tr>';
	fo.value += '<tr><td class="adsthink">Location</td><td class="none">:</td><td class="adsans location">'+locatefad+'</td></tr>';
	fo.value += '<tr><td class="adsthink">Size</td><td class="none">:</td><td class="adsans size">'+sizefract+'</td></tr>';
	fo.value += '<tr><td class="adsthink">Price</td><td class="none">:</td><td class="adsans price">'+oneprcfad+'</td></tr>';
	fo.value += '</tbody>';
	fo.value += '</table>';
	$("#onetable").show("slide");
	fo.select();
	fo.focus();
}