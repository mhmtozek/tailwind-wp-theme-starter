<?php
function gabfire_2026_assets() {
wp_enqueue_style(
'gabfire-style',
get_template_directory_uri() . '/dist/css/style.css',
[],
filemtime(get_template_directory() . '/dist/css/style.css')
);
}
add_action('wp_enqueue_scripts', 'gabfire_2026_assets');