from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

# Set up MongoDB connection
client = MongoClient('mongodb+srv://test:771377@cluster0.06rut.mongodb.net/')
db = client['test']
collection = db['music']

# Define the base IRI for your ontology
ONTOLOGY_IRI = 'http://example.com/ontology/'

# Model
class Entity:
    def __init__(self, name, description):
        self.name = name
        self.description = description

    def to_json_ld(self):
        # Return the data in JSON-LD format
        return {
            "@context": ONTOLOGY_IRI,
            "@type": "MusicEntity",
            "name": self.name,
            "description": self.description
        }

@app.route('/ontology', methods=['GET'])
def get_ontology():
    # Serve the ontology definition (this should be replaced with the actual ontology content)
    ontology_definition = {
        "@context": {
            "@vocab": ONTOLOGY_IRI
        },
        "MusicEntity": {
            "@id": ONTOLOGY_IRI + "MusicEntity",
            "@type": "rdfs:Class",
            "rdfs:comment": "A class representing a musical entity, such as a song, album, or artist."
        },
        "name": {
            "@id": ONTOLOGY_IRI + "name",
            "@type": "rdf:Property",
            "rdfs:comment": "The name of the music entity."
        },
        "description": {
            "@id": ONTOLOGY_IRI + "description",
            "@type": "rdf:Property",
            "rdfs:comment": "A brief description of the music entity."
        }
        # Add more properties and classes as needed
    }
    return jsonify(ontology_definition)

@app.route('/', methods=['POST'])
def create_entity():
    try:
        data = request.json
        entity = Entity(data['name'], data['description'])
        collection.insert_one(entity.to_json_ld())
        return jsonify(entity.to_json_ld()), 201

    except Exception as e:
        app.logger.error(f"An error occurred: {e}")
        app.logger.error(f"Request data: {request.data}")
        app.logger.error(f"Request headers: {request.headers}")
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)