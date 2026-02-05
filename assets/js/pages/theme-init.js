$(document).ready(function () {
  // Initialize DataTable with a custom "Add" button
  var table = $("#datatable-buttons").DataTable({
    lengthChange: false,
    buttons: [
      {
        text: 'Add Theme',
        action: function () {
          $('#exampleModalLabel').text('Add Theme');
          $('#country-form')[0].reset();
          $('#btn-save-country').text('Save Theme');
          $('#exampleModal').modal('show');
        }
      }
    ]
  });

  table.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");

  // Fix dropdown styling
  $("#datatable_length select").addClass("form-select form-select-sm");

  // Enable Bootstrap tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // --- EDIT BUTTON CLICK HANDLER ---
  $('#datatable-buttons tbody').on('click', '.btn.edit', function (e) {
    e.preventDefault();

    var $row = $(this).closest('tr');

    // ✅ Get values from table
    var country = $row.find('td:eq(1)').text().trim();
    var theme   = $row.find('td:eq(2)').text().trim();

    // ✅ Update modal title
    $('#exampleModalLabel').text('Edit Theme');

    // ✅ Set Theme input
    $('#country-link').val(theme);

    // ✅ Set Country dropdown (Select2 safe)
    $('select.select2').val(country).trigger('change');

    // ✅ Update button text
    $('#btn-save-country').text('Update Theme');

    // ✅ Show modal
    $('#exampleModal').modal('show');
});
});