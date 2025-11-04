import pandas as pd
import os
import json
from sqlalchemy import create_engine
import psycopg2


def get_mean_value_from_table(col_name):
    """Compute mean_value of column <col_name>"""

    # we laoad the dblogin from the json file
    # NOTE: You need to save your login credentials in a json file to run this code
    with open("db_login.json", "r") as f:
        dblogin = json.load(f)

    # TODO Task 4: initialize database connection

    # TODO Task 4: Read column from database
    # NOTE: The table is NOT geographic data! Thus, simply use pd.read_sql(...) to read the table

    # TODO Task 4: compute mean
    pass  # placeholder - can be deleted
