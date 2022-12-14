from model import db, Earthquake, connect_to_db

def create_earthquake(entry):
    earthquake = Earthquake(url=entry["url"], latitude=entry["latitude"], longitude=entry["longitude"], 
    magnitude=entry["magnitude"], dateTime=entry["dateTime"], type=entry["type"], depth=entry["depth"], id=entry["id"]) 
    return earthquake


if __name__ == '__main__':
    from server import app
    connect_to_db(app)