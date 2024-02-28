(function ($) {
    // Sidebar.
    var $sidebar = $('#sidebar'),
        $sidebar_inner = $sidebar.children('.inner');

    // Inactive by default on <= large.
    breakpoints.on('<=large', function () {
        $sidebar.addClass('inactive');
    });

    breakpoints.on('>large', function () {
        $sidebar.removeClass('inactive');
    });
})