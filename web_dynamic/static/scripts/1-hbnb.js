const selectedAmenities = {};
$('input[type=checkbox]').change(function () {
  if ($(this).is(':checked')) { selectedAmenities[$(this).attr('data-id')] = $(this).attr('data-name'); }
  else {
    delete selectedAmenities[$(this).attr('data-id')]
  }
  const title = $('div.amenities h4');
  title.text(Object.values(selectedAmenities))
  
    });
