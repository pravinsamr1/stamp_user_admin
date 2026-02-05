$(document).ready(function () {

    function updateSelectedValues() {
        const country = $('#countrySelect').val();
        const year = $('#yearSelect').val();

        // Country
        if (country) {
            $('#selectedCountryInput').val(country);
        } else {
            $('#selectedCountryInput').val('');
        }

        // Year
        if (year) {
            $('#selectedYearInput').val(year);
        } else {
            $('#selectedYearInput').val('');
        }
    }

    // When country changes
    $('#countrySelect').on('change', function () {
        updateSelectedValues();
    });

    // When year changes
    $('#yearSelect').on('change', function () {
        updateSelectedValues();
    });

});