var from=document.getElementById('from').value;
var to=document.getElementById('to').value;

function convert(){
    var XHR=new XHRRequest();
    var url="http://api.fixer.io/latest?symbols="+from+","+to;
    XHR.open("GET",url,true);
    XHR.send();
    XHR.onreadystatechange=function(){
        if(XHR.readyState==4&&XHR.status==200){
            var result=XHR.responseText;
            alert(result);
            var jsResult=JSON.parse(result);
        }
    }
}