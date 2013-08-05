---
layout: post
date: <%= grunt.template.date(new Date(2013, 05, 06), 'yyyy-mm-dd') %>
title: <%= grunt.file.readJSON('package.json').name %>
category: static
excerpt: <%= grunt.option('excerpt') %>
js: resources/js/static/<%= grunt.file.readJSON('package.json').name %>.min.js
---
{% prism javascript linenos %}
{% endprism %}
---