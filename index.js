var set_editor = prompt("select editor html or bootstrap");
function update() {
  var idoc = document.getElementById("iframe").contentWindow.document; // setting iframe as an output window

  idoc.open();
  idoc.write(editor.getValue()); // getting the value from editor and displaying it on iframe
  idoc.close();
}
var nom_html = `<!DOCTYPE html>
<html>
  <head>
    <title> Document </title>
  </head>
  <body>
    <p> Welcome </p>
  </body>
</html>`;
var boot_html = `<!DOCTYPE html>
<html>
  <head>
    <title> Document </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1 class="display-3">Welcome </h1>
    </div>
  </body>
</html>`
//setting up the editor
function setupEditor() {
  window.editor = ace.edit("editor"); //making editor div as an editor
  editor.setTheme("ace/theme/tomorrow_night_blue"); // theme of the editor
  editor.getSession().setMode("ace/mode/html"); //editor mode
  if (set_editor == 'html' || set_editor == 'Html'){
  editor.setValue(
    nom_html,
    1
  ); //1 = moves cursor to end
  }
  else if (set_editor == 'Bootstrap' || set_editor == 'bootstrap' ) {
    editor.setValue(
      boot_html,
      1
    );
  }
  editor.getSession().on("change", function () {
    update(); //updatind the output when ever anything changes
  });

  //focusing cursor on editor
  editor.focus();

  // option for editor
  editor.setOptions({
    fontSize: "16pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible: false,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(true);
}

// getting started
function ready() {
  setupEditor();
  update();
}
