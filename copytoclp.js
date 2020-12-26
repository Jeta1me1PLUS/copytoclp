/**  * 复制内容到粘贴板  *
 *  content : 需要复制的内容  *
 * message : 复制完后的提示，不传则默认提示"复制成功"  */
function copyToClip(content) {
  var aux = document.createElement("input");
  aux.setAttribute("value", content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  var a = 1;

  console.log("复制成功", content);
}
function copyX(param) {
  conck(param, "x");
}
function copyY(param) {
  conck(param, "y");
}
function conck(param, Axis) {
  // console.log("🚀 ~ file: copytoclp.js ~ line 22 ~ conck ~ Axis", Axis);
  console.log(param);
  var datax = param.name;
  // console.log("🚀 ~ file: copy.html ~ line 45 ~ conck ~ datax", datax);
  var datay = param.data;
  // console.log("🚀 ~ file: copy.html ~ line 46 ~ conck ~ datay", datay);
  if (Axis == "x") {
    copyToClip(datax);
  } else if (Axis == "y") {
    copyToClip(datay);
  }

  // alert(datay);
}
