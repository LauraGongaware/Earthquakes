"""Server for earthquake  app."""

from flask import (Flask, render_template, request, session,
                   redirect, jsonify, send_from_directory)
from model import connect_to_db, db, Earthquake
from jinja2 import StrictUndefined

app = Flask(__name__)
# app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined

@app.route("/")
def homepage():
    """View Homepage"""
    return render_template("homepage.html")

@app.route("/mapbox")
def mapbox():
    """Interactive map showing earthquakes over time"""
    return render_template("mapbox.html")


@app.route("/map/earthquakes")
def earthquake_map():
    """Shows a map of earthquakes"""
    return render_template("gmap.html")

@app.route("/api/earthquakes")
def earthquake_info():
    earthquakes_map = []
    for earthquake in Earthquake.query.limit(100):
        earthquakes_map.append({
            "url": earthquake.url,
            "latitude": earthquake.latitude,
            "longitude": earthquake.longitude,
            "coordinates": earthquake.coordinates,
            "geojson": earthquake.geojson,
            "location": earthquake.location,
            "magnitude": earthquake.magnitude,
            "dateTime": earthquake.dateTime,
            "type":earthquake.type,
            "depth":earthquake.depth
        })
    return jsonify(earthquakes_map)


@app.route("/map/static/<path:resource>")
def get_resource(resource):
    return send_from_directory("static", resource)


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)