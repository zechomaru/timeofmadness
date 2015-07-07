// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require froala_editor.min.js
//= require plugins/colors.min.js
//= require plugins/block_styles.min.js
//= require plugins/char_counter.min.js
//= require plugins/file_upload.min.js
//= require plugins/font_family.min.js
//= require plugins/font_size.min.js
//= require plugins/fullscreen.min.js
//= require plugins/lists.min.js
//= require plugins/inline_styles.min.js
//= require plugins/media_manager.min.js
//= require plugins/tables.min.js
//= require plugins/urls.min.js
//= require plugins/video.min.js
//= require turbolinks
//= require_tree .
$('.froala-editor').editable({ inlineMode: false});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-62993698-1', 'auto');
ga('send', 'pageview');


$(".adsbygoogle").each(function () { (adsbygoogle = window.adsbygoogle || []).push({}); });
