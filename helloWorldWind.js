const wwd = new WorldWind.WorldWindow('canvasOne')
console.log(wwd) // this object have methods like event listeners and stuff...

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

// Add on layers for the globe
wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

// Drawing a Placemark

// Placemarks gives the North-West meters (on hover)
var placemarkLayer = new WorldWind.RenderableLayer("Placemark")
wwd.addLayer(placemarkLayer)

// Creating a placemark attributes

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

// placemark attributes object which contains the methods to perform something

placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.0);

            placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/plain-red.png";

// Defining the position of the placemark
var position = new WorldWind.Position(27.0, 78.0, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

// Labels to show
placemark.label = "Placemark\n" +
    "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
    "Lon " + placemark.position.longitude.toPrecision(5).toString();
placemark.alwaysOnTop = true;

// Adding
placemarkLayer.addRenderable(placemark);


// ================================== 3D SHAPES ===========================================

var polygonLayer = new WorldWind.RenderableLayer()
wwd.addLayer(polygonLayer)

// Its attributes
var polygonAttributes = new WorldWind.ShapeAttributes(null)
polygonAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.75);
polygonAttributes.outlineColor = WorldWind.Color.BLUE;
polygonAttributes.drawOutline = true;
polygonAttributes.applyLighting = true;

// Defining boundaries

var boundaries = [];
boundaries.push(new WorldWind.Position(20.0, -75.0, 700000.0));
boundaries.push(new WorldWind.Position(25.0, -85.0, 700000.0));
boundaries.push(new WorldWind.Position(20.0, -95.0, 700000.0));

var polygon = new WorldWind.Polygon(boundaries, polygonAttributes);
polygon.extrude = true;
polygonLayer.addRenderable(polygon);