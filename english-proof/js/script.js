$(document).ready(function(){
    //code here
    var code = $(".codemirror-textarea")[0];
    var editor = CodeMirror.fromTextArea(code, {
        theme : "ayu-dark",
        lineNumbers : true
    });
});