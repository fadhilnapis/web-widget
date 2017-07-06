var win=null;
function goToslotchange(y){
	var to = document.getElementById("q3");
	for(i=0;i<to.length;i++){
		to.options[i].selected=false;
	}
	to.options[y-1].selected=true;
	document.getElementById("kogfld").getElementsByTagName("input")[0].focus();
}
function changeDiget(){
	var monthlong = document.getElementById("q4");
	var monthlongmain = monthlong.options[monthlong.selectedIndex].value;
	var secrnum1 = parseInt(monthlongmain.split('bulan')[0]);
	
	var slotnumber = document.getElementById("q3");
	var secrnum2 = parseInt(slotnumber.selectedIndex+1);
	
 	var websitekau = document.getElementById("q1");
	var websitemainname = websitekau.value.split('://')[1].split('/')[0];
	var secrnum34 = (websitemainname.length+7<10)? '0'+websitemainname.length+7 : websitemainname.length+7;
	
	var bannerurl = document.getElementById("q2");
	var secrnum567 = (bannerurl.value.length<100) ? '0'+bannerurl.value.length : bannerurl.value.length;
	
	var emailadress = document.getElementById("email");
	var secrnum89 = (emailadress.value.length<100) ? '0'+emailadress.value.length : bannerurl.value.length;
	
	var theAgreeCode = secrnum2 +''+ secrnum1 +''+ secrnum34 +''+ secrnum567+''+secrnum89+'0123';
	document.getElementById("q9").value = theAgreeCode;
}
function getCode(){
	var monthlong = document.getElementById("q4");
	var monthlongmain = monthlong.options[monthlong.selectedIndex].value;
	var secrnum1 = parseInt(monthlongmain.split('bulan')[0]);
	
	var slotnumber = document.getElementById("q3");
	var secrnum2 = parseInt(slotnumber.selectedIndex+1);
	
 	var websitekau = document.getElementById("q1");
	var websitemainname = websitekau.value.split('://')[1].split('/')[0];
	var secrnum34 = (websitemainname.length+7<10)? '0'+websitemainname.length+7 : websitemainname.length+7;
	
	var bannerurl = document.getElementById("q2");
	var secrnum567 = (bannerurl.value.length<100) ? '0'+bannerurl.value.length : bannerurl.value.length;
	
	var emailadress = document.getElementById("email");
	var secrnum89 = (emailadress.value.length<100) ? '0'+emailadress.value.length : bannerurl.value.length;
	
	var theAgreeCode = secrnum2 +''+ secrnum1 +''+ secrnum34 +''+ secrnum567+''+secrnum89+'0123';
	document.getElementById("q9").value = theAgreeCode;
	alert(theAgreeCode);
}
function printIt(){
 	var websitekau = document.getElementById("q1");
	var websitemainname = websitekau.value.split('://')[1].split('/')[0];
	var secrnum34 = (websitemainname.length+7<10)? '0'+websitemainname.length+7 : websitemainname.length+7;
	
	var slotnumber = document.getElementById("q3");
	var slotnumbermain = slotnumber.options[slotnumber.selectedIndex].value.split('Slot ')[1];
	var secrnum2 = parseInt(slotnumber.selectedIndex+1);
	
	var monthlong = document.getElementById("q4");
	var monthlongmain = monthlong.options[monthlong.selectedIndex].value;
	var secrnum1 = parseInt(monthlongmain.split('bulan')[0]);
	
	var bannerurl = document.getElementById("q2");
	var secrnum567 = (bannerurl.value.length<100) ? '0'+bannerurl.value.length : bannerurl.value.length;
	
	var emailadress = document.getElementById("email");
	var secrnum89 = (emailadress.value.length<100) ? '0'+emailadress.value.length : bannerurl.value.length;
	
	var mesejakutu = document.getElementById("q5");
	
	var theAgreeCode =secrnum2 +''+  secrnum1 +''+ secrnum34 +''+ secrnum567+''+secrnum89+'0123';
	var windowelementlah = '<div style="text-align: center;">\n<span style="font-size: x-large;">Advertisment Agreement(Penyewa)</span></div>\n<div style="text-align: left;">\n<br /></div>\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Website kami('+websitemainname+') menerima HantuJavascript(HJS) sebagai salah satu tempat pengiklanan kami. Kami telah memilih slot '+slotnumbermain+' sebagai slot pilihan kami yang muktamat. Kami setuju bahawa iklan kami disiarkan selama '+monthlongmain+'. Kami telah mensetujui butiran kami diisi seperti di bawah.<br/><center><table class="" cellspacing="0" cellpadding="0">\n <tbody><tr>\n  <td width="155" valign="top">\n  <p>E-mail</p>\n  </td>\n  <td width="155" valign="top">\n  <p>: '+emailadress.value+'.</p>\n  </td>\n </tr>\n <tr>\n  <td width="155" valign="top">\n  <p>Website</p>\n  </td>\n  <td width="155" valign="top">\n  <p>: <a style="color:#000;" href="'+websitekau.value+'">'+websitekau.value+'</a>.</p>\n  </td>\n </tr>\n <tr>\n  <td width="155" valign="top">\n  <p>URL banner</p>\n  </td>\n  <td width="155" valign="top">\n  <p>: <a style="color:#000;" href="'+bannerurl.value+'">'+bannerurl.value+'</a>.</p>\n  </td>\n </tr>\n <tr>\n  <td width="155" valign="top">\n  <p>Slot</p>\n  </td>\n  <td width="155" valign="top">\n  <p>: '+slotnumber.options[slotnumber.selectedIndex].value+'.</p>\n  </td>\n </tr>\n <tr>\n  <td width="155" valign="top">\n  <p>Tempoh<o:p></o:p></p>\n  </td>\n  <td width="155" valign="top">\n  <p>: '+monthlongmain+'.</p>\n  </td>\n </tr>\n <tr>\n  <td width="155" valign="top">\n  <p>Mesej</p>\n  </td>\n  <td width="155" valign="top">\n  <p>: '+mesejakutu.value+'.</p>\n  </td>\n </tr>\n</tbody></table></center><br/>Kami mensetujui syarat-syarat yang telah ditetapkan seperti:-<br />\n<br />\n<ol>\n<li>Tidak meletakkan flash file yang berat, meganggu, scam javascript dan berbunyi.</li>\n<li>Tidak menghantar gambar lucah yang menonjol..</li>\n<li>Tidak meletakkan sesuatu hidden-program dalam sub URL..</li>\n</ol>\n<br />\n<br />\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Kami tidak akan mengugut atau meminta semula wang selepas perletakan banner iklan kami kecuali dengan sebab munasabah dan bukanya sebab kesalahan pemilihan.<br />\n<br />\n<center><table><tbody><tr><td style="text-align:center;line-height:180%;">Kod Persetujuan<br />('+theAgreeCode+')</td><td style="width:50%"></td><td style="text-align:center;line-height:180%;">Pengakuan Dari<br/>(Pemilik '+websitemainname+')</td></tr></tbody></table></center>';
    win = window.open();
    self.focus();
	
    win.document.open();
    win.document.write('<'+'html'+'><'+'head'+'><'+'style'+'>');
    win.document.write('body, td { font-family: Verdana; font-size: 10pt;}');
    win.document.write('<'+'/'+'style'+'><'+'/'+'head'+'><'+'body'+'>');
    win.document.write(windowelementlah);
    win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
	win.focus();
    win.print();
	changeDiget();
}