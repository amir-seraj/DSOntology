from flask import Flask, jsonify, request
from pymongo import MongoClient
# from SPARQLWrapper import SPARQLWrapper, JSON

app = Flask(__name__)

client = MongoClient('mongodb+srv://test:771377@cluster0.06rut.mongodb.net/')
db = client['test']
collection = db['music']

ONTOLOGY_IRI = 'http://example.com/ontology/'

# Model
class Entity:
    def __init__(self, name, description):
        self.name = name
        self.description = description

    def to_json_ld(self):
        return {
            "@context": ONTOLOGY_IRI,
            "@type": "MusicEntity",
            "name": self.name,
            "description": self.description
        }

@app.route('/ontology', methods=['GET'])
def get_ontology():
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

# # Set up your SPARQL endpoint
# sparql = SPARQLWrapper("your_sparql_endpoint_url")

# @app.route('/sparql', methods=['GET'])
# def query_sparql():
#     # Get the SPARQL query from request arguments
#     query = request.args.get('query', '')
#     sparql.setQuery(query)
#     sparql.setReturnFormat(JSON)
    
#     try:
#         # Execute the query and convert the result to JSON
#         results = sparql.query().convert()
#         # Return the results as JSON
#         return jsonify(results)
#     except Exception as e:
#         return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)