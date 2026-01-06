<?php
/**
 * Plugin Name: Plugin UI Test
 * Description: A plugin to test the @wedevs/plugin-ui package with Tailwind CSS 4.
 * Version: 1.0.0
 * Author: weDevs
 */

add_action( 'admin_menu', function() {
    add_menu_page(
        'Plugin UI Test',
        'UI Test',
        'manage_options',
        'plugin-ui-test',
        function() {
            echo '<div id="plugin-ui-test-app"></div>';
        },
        'dashicons-layout',
        100
    );
} );

add_action( 'admin_enqueue_scripts', function( $hook ) {
    if ( 'toplevel_page_plugin-ui-test' !== $hook ) {
        // return;
    }

    $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

    wp_enqueue_script(
        'plugin-ui-test-script',
        plugin_dir_url( __FILE__ ) . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    // Load plugin-ui styles
    wp_enqueue_style(
        'plugin-ui-test-style',
        plugin_dir_url( __FILE__ ) . 'build/index.css',
        [],
        $asset_file['version']
    );
    
    // Load local styles (includes purple button classes)
    wp_enqueue_style(
        'plugin-ui-test-local-style',
        plugin_dir_url( __FILE__ ) . 'build/style-index.css',
        [ 'plugin-ui-test-style' ],
        $asset_file['version']
    );
} );
