import Marker from "./images/marker.png";
function MyMarker() {

    //set my lat and lng
    const myLocation = {
        lat: 55.03643196045474,
        lng: -1.565409044218999
    }

    const handleClick = () => {
        // Open Google Maps with the specified location in a new browser tab
        window.open(`https://www.google.com/maps/search/?api=1&query=${myLocation.lat},${myLocation.lng}`);
    }

    //render the image that opens a google maps with a marker
    return (

        <img src={Marker} alt="location marker" style={{ height: "25px", width: "25px", cursor: 'pointer' }} onClick={handleClick} />

    );

}
export default MyMarker;