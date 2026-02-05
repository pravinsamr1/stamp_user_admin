$(document).ready(function () {
  // Initialize DataTable with a custom "Add" button
  var table = $("#datatable-buttons").DataTable({
    lengthChange: false,
    buttons: [
      {
        text: 'Add New Link',
        action: function () {
          $('#exampleModalLabel').text('Add New Link');
          $('#country-form')[0].reset();
          $('#btn-save-country').text('Save Link');
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
    var title = $row.find('td:eq(3)').text().trim();
    var link  = $row.find('td:eq(4)').text().trim();

    // ✅ Update modal
    $('#exampleModalLabel').text('Edit Link');

    // ✅ Fill inputs
    $('#country-title').val(title);
    $('#country-link').val(link);

    // ❌ Image cannot be pre-filled (browser restriction)
    $('#country-image').val('');

    $('#btn-save-country').text('Update Link');
    $('#exampleModal').modal('show');
});
});