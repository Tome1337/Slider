/*Name this external file gallery.js*/

function upDate(previewPic){
document.getElementById('image').innerHTML= previewPic.alt;

  var pic = document.getElementsByTagName('img').src;
 document.getElementById('image').style.backgroundImage= "url('" + previewPic.src + "')";
}
