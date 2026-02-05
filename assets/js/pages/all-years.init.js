$(document).ready(function() {
    
     // --- PART 1: DATATABLES INITIALIZATION ---
 
     // Initialize the main table (assuming you might have one without buttons)
     // If you don't have a table with id="datatable", you can remove this line.
     $("#datatable").DataTable();
 
     // Your main table with the buttons
     $("#datatable-buttons").DataTable({
         lengthChange: false,
         buttons: [
             {
                 text: 'Add Year', // This is the "Add Country" button
                 action: function(e, dt, node, config) {
                     
                     // --- This is the "ADD" logic ---
                     
                     // 1. Set the modal title
                     $('#exampleModalLabel').text('Add New Country');
                     
                     // 2. Clear the input field
                     $('#country-name').val('');
                     
                     // 3. Set the save button text
                     $('#btn-save-country').text('Save Country');
                     
                     // 4. Show the modal
                     $('#exampleModal').modal('show');
                 }
             }
         ]
     }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");
 
     
     // This is from the original template, it styles the "show entries" dropdown
     $("#datatable_length select").addClass("form-select form-select-sm");
 
 
     // --- PART 2: NEW CLICK HANDLER FOR "EDIT" BUTTONS ---
 
     // Listens for clicks on any ".edit" button inside the table body
     $('#datatable-buttons tbody').on('click', '.btn.edit', function(e) {
         
         // 1. Prevent the <a> tag from navigating
         e.preventDefault();
 
         // 2. Get the parent row (tr) of the button you clicked
         var $row = $(this).closest('tr');
         
         // 3. Find the data in that row's second cell (index 1)
         var countryName = $row.find('td:eq(1)').text();
 
         // --- This is the "EDIT" logic ---
         
         // 4. Set the modal title
         $('#exampleModalLabel').text('Edit Country');
         
         // 5. Populate the input field with the data
         $('#country-name').val(countryName);
         
         // 6. Set the save button text
         $('#btn-save-country').text('Update Country');
         
         // 7. Show the modal
         $('#exampleModal').modal('show');
     });
 
     
     // --- PART 3: (OPTIONAL) ENABLE TOOLTIPS ---
     // Your <a> tags have data-bs-toggle="tooltip". 
     // This line finds all of them and makes the tooltips work.
     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
       return new bootstrap.Tooltip(tooltipTriggerEl)
     });
 
 });