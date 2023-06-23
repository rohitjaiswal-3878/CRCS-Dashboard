from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import pandas as pd
from datetime import datetime
import numpy as np

dataset = [
    {
        "Id": 1,
        "State": "Maharashtra",
        "Number_of_Societies_Registered": 563,
        "Year_of_Register": 2010,
        "Types_of_Society": "Transport",
    },
    {
        "Id": 2,
        "State": "Karnataka",
        "Number_of_Societies_Registered": 742,
        "Year_of_Register": 2012,
        "Types_of_Society": "Labour",
    },
    {
        "Id": 3,
        "State": "Tamil Nadu",
        "Number_of_Societies_Registered": 489,
        "Year_of_Register": 2015,
        "Types_of_Society": "Agro",
    },
    {
        "Id": 4,
        "State": "Maharashtra",
        "Number_of_Societies_Registered": 563,
        "Year_of_Register": 2011,
        "Types_of_Society": "Others",
    },
    {
        "Id": 5,
        "State": "Uttar Pradesh",
        "Number_of_Societies_Registered": 821,
        "Year_of_Register": 2013,
        "Types_of_Society": "Consumer",
    },
    {
        "Id": 6,
        "State": "Karnataka",
        "Number_of_Societies_Registered": 742,
        "Year_of_Register": 2016,
        "Types_of_Society": "Multi-purpose",
    },
    {
        "Id": 7,
        "State": "Tamil Nadu",
        "Number_of_Societies_Registered": 489,
        "Year_of_Register": 2014,
        "Types_of_Society": "Fisheries",
    },
    {
        "Id": 8,
        "State": "Maharashtra",
        "Number_of_Societies_Registered": 563,
        "Year_of_Register": 2017,
        "Types_of_Society": "Dairy",
    },
    {
        "Id": 9,
        "State": "Uttar Pradesh",
        "Number_of_Societies_Registered": 821,
        "Year_of_Register": 2018,
        "Types_of_Society": "Transport",
    },
    {
        "Id": 10,
        "State": "Karnataka",
        "Number_of_Societies_Registered": 742,
        "Year_of_Register": 2019,
        "Types_of_Society": "Labour",
    },
    {
        "Id": 11,
        "State": "Tamil Nadu",
        "Number_of_Societies_Registered": 489,
        "Year_of_Register": 2020,
        "Types_of_Society": "Agro",
    },
    {
        "Id": 12,
        "State": "Maharashtra",
        "Number_of_Societies_Registered": 563,
        "Year_of_Register": 2021,
        "Types_of_Society": "Others",
    },
    {
        "Id": 13,
        "State": "Uttar Pradesh",
        "Number_of_Societies_Registered": 821,
        "Year_of_Register": 2022,
        "Types_of_Society": "Consumer",
    },
    {
        "Id": 14,
        "State": "Karnataka",
        "Number_of_Societies_Registered": 742,
        "Year_of_Register": 2023,
        "Types_of_Society": "Multi-purpose",
    },
]

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/api/type', methods=['GET'])
def get_data():
    society_totals = {}
    for entry in dataset:
        society_type = entry['Types_of_Society']
        societies_registered = entry['Number_of_Societies_Registered']
        if society_type in society_totals:
            society_totals[society_type] += societies_registered
        else:
            society_totals[society_type] = societies_registered

    return jsonify(society_totals)

@app.route('/api/state', methods=['GET'])
def get_society_totals():
    state_totals = {}
    for entry in dataset:
        state = entry["State"]
        registered_societies = entry["Number_of_Societies_Registered"]
        if state in state_totals:
            state_totals[state] += registered_societies
        else:
            state_totals[state] = registered_societies
    return jsonify(state_totals)


@app.route('/api/year', methods=['GET'])
def get_year_wise():
    year_totals = {}
    for entry in dataset:
        year = entry["Year_of_Register"]
        registered_societies = entry["Number_of_Societies_Registered"]
        if year in year_totals:
            year_totals[year] += registered_societies
        else:
            year_totals[year] = registered_societies
    return jsonify(year_totals)


if __name__ == '__main__':
    app.run(debug=True)