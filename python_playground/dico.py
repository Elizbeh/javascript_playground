"""new_campaign = {
    "campaign_manager": "Spencer Smith",
    "campaign_name": "We love dogs campaign",
    "start_date": "01/01/2020",
    "end_date": "01/01/2021",
    "relevant_influencers": ["@MyDogLover", "@DogFoodFavorites"]
}
print(new_campaign["campaign_manager"])

conversion_rates = {}
conversion_rates["facebook"] = 3.2
conversion_rates["twitter"] = 1.2

print(conversion_rates)
fruits ={"apple": "red","banana": "yellow", "orange": "orange"}

#print(fruits)
fruits["kiwi"] = "green"
print(fruits)
print("#########################")
banana_color = fruits["banana"]
print(banana_color)
print("#########################")
fruits["apple"] = "green"
print(fruits)

numbers = [1, 4, 5, 7, 8]
sum = 0
for num in numbers:
    sum += num
print(sum)"""

numbers = [1, 4, 5, 7, 8]
numbersAverage = 0
for num in numbers:
    numbersAverage += num / len(numbers)
print(numbersAverage)

numbers = [1, 4, 5, 7, 8]
display_numbers = []
for num in numbers:
    if num > numbersAverage:
        display_numbers.append(num)
print(display_numbers)