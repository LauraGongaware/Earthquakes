import json
from datetime import datetime
import os

import crud
import model
import server

os.system('dropdb earthquakes')
os.system('createdb earthquakes')

model.connect_to_db(server.app)
model.db.create_all()


earthquake_json = open('Data/query.json').read()
query_dictionary = json.loads(earthquake_json)['features']

# for key, value in query_dictionary.items():
#     break

def parse_entry(entry):
    return { 
    "url":entry["properties"]["url"],
    "latitude":entry["geometry"]["coordinates"][1],
    "longitude":entry["geometry"]["coordinates"][0],
    "magnitude":float(entry["properties"]["mag"]),
    "dateTime":datetime.fromtimestamp(entry["properties"]["time"]/1000.0),
    "type":entry["properties"]["type"],
    "depth":float(entry["geometry"]["coordinates"][2]),
    "id":entry["properties"]["ids"],
    }

db_entries = []

for entry in query_dictionary:
    results = parse_entry(entry)

    db_earthquake = crud.create_earthquake(results)
    db_entries.append(db_earthquake)

model.db.session.add_all(db_entries)
model.db.session.commit()

# with open("earthquake_db", "w") as outfile:
#     json.dump(results, outfile, default=str)