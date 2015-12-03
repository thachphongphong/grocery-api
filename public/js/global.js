/**
 * Created by dtlinh on 11/3/2015.
 */
// DOM Ready =============================================================
$(document).ready(function () {
    $('#navigate a').on('click', movepage);

});

// Functions =============================================================

//move to page
function movepage(event) {
    event.preventDefault();

    switch (this.id) {
        case 'home':
            window.location.href = '/';
            break;
        case 'store':
            window.location.href = '/store';
            break;
    }
    ;

};