<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="styles/main.css">
    </head>
    <body>
		<div class="<%= grunt.file.readJSON('package.json').name %>"></div>
        <script data-main="js/main" src="components/requirejs/require.js"></script>

    </body>
</html>
