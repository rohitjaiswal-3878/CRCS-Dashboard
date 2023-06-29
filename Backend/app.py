from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import pandas as pd
from datetime import datetime
import numpy as np
import csv 

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/api/state',methods=['GET'])
def get_societies_by_state():
    state_societies=get_societies('State')
    return jsonify(state_societies)



@app.route('/api/type',methods=['GET'])
def get_societies_by_type():
    type_societies=get_societies('type')
    return jsonify(type_societies)


@app.route('/api/year',methods=['GET'])
def get_societies_by_year():
    year_societies=get_societies('date_of_registration')
    return jsonify(year_societies)


@app.route('/api/data', methods=['GET'])
def get_data():
    data = []

    with open('data.csv', 'r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            data.append(row)

    return jsonify(data)

@app.route('/api/records', methods=['GET'])
def get_bar_records():
    selected_label = request.args.get('label')
    selected_chart = request.args.get('chart')
    df = pd.read_csv('data.csv')

    if selected_chart == 'state':
        filtered_data = df[df['State'] == selected_label]
    elif selected_chart == 'type':
        filtered_data = df[df['type'] == selected_label]
    elif selected_chart== 'year':
        filtered_data = df[df['date_of_registration'].str.startswith(selected_label)]
    else :
        return jsonify([])
    records_json = filtered_data.to_json(orient='records')
    return jsonify(records_json)




def get_societies(param):
    societies={}
    with open('data.csv','r') as file:
        csv_reader=csv.DictReader(file)
        for row in csv_reader:
            general=row[param]
            if(param=='date_of_registration'):
                year = general.split('-')[0]
                if year in societies:
                    societies[year]+=1
                else:
                    societies[year]=1
            else:
                if general in societies:
                    societies[general]+=1
                else:
                    societies[general]=1
    return societies












# @app.route('/api/type', methods=['GET'])
# def get_data():
#     society_totals = {}
#     for entry in dataset:
#         society_type = entry['Types_of_Society']
#         societies_registered = entry['Number_of_Societies_Registered']
#         if society_type in society_totals:
#             society_totals[society_type] += societies_registered
#         else:
#             society_totals[society_type] = societies_registered

#     return jsonify(society_totals)

# @app.route('/api/state', methods=['GET'])
# def get_society_totals():
#     state_totals = {}
#     for entry in dataset:
#         state = entry["State"]
#         registered_societies = entry["Number_of_Societies_Registered"]
#         if state in state_totals:
#             state_totals[state] += registered_societies
#         else:
#             state_totals[state] = registered_societies
#     return jsonify(state_totals)


# @app.route('/api/year', methods=['GET'])
# def get_year_wise():
#     year_totals = {}
#     for entry in dataset:
#         year = entry["Year_of_Register"]
#         registered_societies = entry["Number_of_Societies_Registered"]
#         if year in year_totals:
#             year_totals[year] += registered_societies
#         else:
#             year_totals[year] = registered_societies
#     return jsonify(year_totals)

# @app.route('/api/data', methods=['GET'])
# def get_records():
#     print("from here")
#     return jsonify(dataset)

if __name__ == '__main__':
    app.run(debug=True)