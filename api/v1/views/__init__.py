#!/usr/bin/python3
"""Script that creates the Blueprint Flask Class and import modules"""
from flask import Blueprint
from api.v1.views.index import app_views as index_views
from api.v1.views.states import app_views as states_views
from api.v1.views.cities import app_views as cities_views
from api.v1.views.amenities import app_views as amenities_views
from api.v1.views.users import app_views as users_views
from api.v1.views.places import app_views as places_views
from api.v1.views.places_reviews import app_views as places_reviews_views

app_views = Blueprint('app_views', __name__, url_prefix='/api/v1')

# Register the blueprints from the imported modules
app_views.register_blueprint(index_views)
app_views.register_blueprint(states_views)
app_views.register_blueprint(cities_views)
app_views.register_blueprint(amenities_views)
app_views.register_blueprint(users_views)
app_views.register_blueprint(places_views)
app_views.register_blueprint(places_reviews_views)
