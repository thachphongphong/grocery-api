/**
 * Created by dtlinh on 12/1/2015.
 */
$(document).ready(function() {
    $('#datatable tfoot th').each( function () {
        var title = $('#example thead th').eq( $(this).index() ).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    });
    $('#datatable').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
             url: "store/storelist",
            "dataSrc": "result"},
        "columns": [
            { "data": "name" },
            { "data": "postalCode" },
            { "data": "city" },
            { "data": "country" },
            { "data": "address" },
            { "data": "ownerEmail" },
            { "data": "category.name" },
            { "data": "isVerified" }
        ]
    });
});

