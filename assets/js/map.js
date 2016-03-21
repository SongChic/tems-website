var map;
jQuery(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 43.467866,
        lng:  -80.520608,
    });
    map.addMarker({
        lat: 43.467866,
        lng:  -80.520608,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">TEMS Academy</h5><p><span class="region">Canada TEMS Academy 33 Bridgeport Road East,</span><br><span class="postal-code">Waterloo, Ontario N2J 2J4</span><br><span class="country-name">Canada</span></p>'
        }
        
    });

});