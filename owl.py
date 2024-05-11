# Import the owlready2 library
from owlready2 import *

# Create a new ontology
onto = get_ontology("http://example.org/onto.owl")

# Define classes in the ontology
with onto:
    class Animal(Thing):
        pass

    class Plant(Thing):
        pass

    class Eats(ObjectProperty):
        domain = [Animal]
        range = [Plant]

# Create individuals (instances of classes)
with onto:
    rabbit = Animal("Rabbit")
    carrot = Plant("Carrot")
    rabbit.eats = carrot

# Save the ontology to a file
onto.save(file="my_ontology.owl", format="rdfxml")

# Print out the classes and individuals
print(list(onto.classes()))
print(list(onto.individuals()))

# Perform reasoning and classification (if needed)
# You will need to install a reasoner like HermiT or Pellet
# sync_reasoner()  # Uncomment this line if you have a reasoner installed

# Note: This is a very basic example. In a real-world scenario, you would have more complex class hierarchies,
# properties, and individuals. Additionally, you would need to handle CRUD operations through an API and connect
# to a database to store and retrieve your ontology data.