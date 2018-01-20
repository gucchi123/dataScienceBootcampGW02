google.maps.event.addDomListener(window, 'load', init);
function init() {
  var latlng = new google.maps.LatLng(任意の座標,任意の座標);
  var myOptions = {
    zoom: 18, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP,/*表示タイプの指定*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeControl: false,/*マップタイプ・コントローラの制御*/
    scaleControl: false,/*地図のスケールコントローラの表示*/
    streetViewControl: false,/*ストリートビューの表示*/
    scrollwheel: false/*ホイール操作でのズーム値の変更*/
  };
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
}
