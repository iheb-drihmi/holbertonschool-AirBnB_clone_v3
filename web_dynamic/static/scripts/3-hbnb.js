$(document).ready(function () {
    const checkedDict = {};
  
    $('.amenities input[type="checkbox"]').change(function () {
      if ($(this).prop('checked')) {
        const id = $(this).attr('data-id');
        const name = $(this).attr('data-name');
        checkedDict[id] = name;
      } else {
        const key = $(this).attr('data-id');
        delete checkedDict[key];
      }
  
      const amenList = [];
      $.each(checkedDict, function (key, val) {
        amenList.push(val);
      });
      const amenStr = amenList.join(', ');
      if (amenStr.length < 20) {
        $('.amenities h4').text(amenStr);
      } else {
        $('.amenities h4').text(amenStr.substring(0, 20) + '...');
      }
    });
  
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
      if (textStatus === 'success') {
        if (data.status === 'OK') {
          $('#api_status').addClass('available');
        } else {
          $('#api_status').removeClass('available');
        }
      }
    });
  
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json', // Set the Content-Type to JSON
      data: JSON.stringify({}), // Convert data to JSON format
      success: function (response) {
        response.forEach((place) => {
          const placeStr = `<article>
          <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">$${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${place.max_guest} ${place.max_guest !== 1 ? 'Guests' : 'Guest'}</div>
            <div class="number_rooms">${place.number_rooms} ${place.number_rooms !== 1 ? 'Bedrooms' : 'Bedroom'}</div>
            <div class="number_bathrooms">${place.number_bathrooms} ${place.number_bathrooms !== 1 ? 'Bathrooms' : 'Bathroom'}</div>
          </div>
          <div class="description">${place.description}</div>
        </article>`;
          // const placeStr = `<article>hi</article>`;
          $('.places').append(placeStr);
        });
        console.log('Success:', response);
      },
      error: function (error) {
        console.error('Error:', error);
      }
    });
  });
