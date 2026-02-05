// $(document).ready(function(){$("#datatable").DataTable(),$("#datatable-buttons").DataTable({lengthChange:!1,buttons:["copy","excel","pdf","colvis"]}).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"),$("#datatable_length select").addClass("form-select form-select-sm")});

$(document).ready(function () {

    // ---------------------------------
    // SIMPLE TABLE (#datatable)
    // ---------------------------------
    if ($('#datatable').length) {
        $('#datatable').DataTable({
            pageLength: 50,  
            lengthChange: true,
            lengthMenu: [10, 25, 50, 100]
        });

        $('#datatable_length select')
            .addClass('form-select form-select-sm');
    }

    // ---------------------------------
    // TABLE WITH BUTTONS (#datatable-buttons)
    // ---------------------------------
    if ($('#datatable-buttons').length) {

        const table = $('#datatable-buttons').DataTable({
            pageLength: 50,
            lengthChange: true,
            lengthMenu: [10, 25, 50, 100],
            dom: 'Bfrtip',
            buttons: [
                {
                    text: 'Add Country',
                    className: 'btn btn-primary',
                    action: function () {
                        $('#exampleModalLabel').text('Add New Country');
                        $('#country-name').val('');
                        $('#btn-save-country').text('Save Country');
                        $('#exampleModal').modal('show');
                    }
                }
            ]
        });

        table.buttons()
            .container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

        $('#datatable-buttons_length select')
            .addClass('form-select form-select-sm');

        // EDIT BUTTON
        $('#datatable-buttons tbody').on('click', '.btn.edit', function (e) {
            e.preventDefault();

            const row = $(this).closest('tr');
            const countryName = row.find('td:eq(1)').text();

            $('#exampleModalLabel').text('Edit Country');
            $('#country-name').val(countryName);
            $('#btn-save-country').text('Update Country');
            $('#exampleModal').modal('show');
        });
        
    }

    // ---------------------------------
    // TOOLTIPS
    // ---------------------------------
    const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));

});