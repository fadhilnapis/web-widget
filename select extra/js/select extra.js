function addLink() {
	var tagnamenye = event.target;
	var tress=false;
	for(var f=0;f<allowTagCopy.length;f++){
		if(tagnamenye.tagName.toLowerCase()==allowTagCopy[f]||tagnamenye.id==allowTagCopy[f]){
			tress = true;
			break;
		}
	}
	if(!tress){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var copytext = selection + extraText;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
	}
}
document.oncopy = addLink;