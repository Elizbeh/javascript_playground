import csv

with open(r"C:\Users\eliz0\OneDrive\Bureau\open-classroom\python_playground\etl_webscraping\favorite_colors.csv") as file:
    reader = csv.reader(file, delimiter=",")
    for line in reader:
        print(line)

"""with open("hello.txt") as f:
    for line in f:
        print(f"Here is {line}")
"""