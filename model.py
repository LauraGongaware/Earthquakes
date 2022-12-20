"""Model for earthquake."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Earthquake(db.Model):
    """An earthquake."""

    __tablename__ = "earthquakes"

    earthquake_id = db.Column(db.Integer,
                        autoincrement=True,
                        primary_key=True)
    url = db.Column(db.String)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    coordinates = db.Column(db.String)
    geojson = db.Column(db.String)
    location = db.Column(db.String)
    magnitude = db.Column(db.Float)
    dateTime = db.Column(db.DateTime)
    type = db.Column(db.String)
    depth = db.Column(db.Float)
    id = db.Column(db.String)
    
def connect_to_db(flask_app, db_uri="postgresql:///earthquakes", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")

    def __repr__(self):
        return f'<Earthquake id={self.location} on {self.dateTime}'


if __name__ == "__main__":
    from server import app

    # Call connect_to_db(app, echo=False) if your program output gets
    # too annoying; this will tell SQLAlchemy not to print out every
    # query it executes.

    connect_to_db(app)