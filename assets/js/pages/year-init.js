$(document).ready(function () {
  // Initialize DataTable with a custom "Add" button
  var table = $("#datatable-buttons").DataTable({
    lengthChange: false,
    buttons: [
      {
        text: 'Add Year',
        action: function () {
          $('#exampleModalLabel').text('Add Year');
          $('#country-form')[0].reset();
          $('#btn-save-country').text('Add Year');
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

    // ✅ Correct column (Year is index 1)
    var year = $row.find('td:eq(1)').text().trim();

    $('#exampleModalLabel').text('Edit Year');

    // ✅ Correct input ID
    $('#country-link').val(year);

    $('#btn-save-country').text('Update Year');
    $('#exampleModal').modal('show');
});
});
