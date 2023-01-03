"""Server for earthquake  app."""

from flask import (Flask, render_template, request, session,
                   redirect, jsonify, send_from_directory)
from model import connect_to_db, db, Earthquake
from jinja2 import StrictUndefined
import json

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

@app.route("/mapbox2")
def mapbox2():
    """Interactive map showing earthquakes over time"""
    return render_template("mapbox2.html")


@app.route("/map/earthquakes")
def earthquake_map():
    """Shows a map of earthquakes"""
    return render_template("gmap.html")

@app.route("/api/earthquakes")
def earthquake_info():
    earthquakes_map = []
    # for earthquake in Earthquake.query.limit(100):
    for earthquake in Earthquake.query.all():
        geoJSON_object = {
        "type": "Point",
        "coordinates": [
            earthquake.longitude,
            earthquake.latitude,
            earthquake.depth
            ]
            }

        earthquakes_map.append({
            "url": earthquake.url,
            "latitude": earthquake.latitude,
            "longitude": earthquake.longitude,
            "coordinates": earthquake.coordinates,
            "geometry": geoJSON_object,
            "location": earthquake.location,
            "magnitude": earthquake.magnitude,
            "dateTime": earthquake.dateTime,
            "depth":earthquake.depth
        })
    data_object = {
        "type": "FeatureCollection",
        "features":earthquakes_map
    }

    return jsonify(data_object)


@app.route("/map/static/<path:resource>")
def get_resource(resource):
    return send_from_directory("static", resource)


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)