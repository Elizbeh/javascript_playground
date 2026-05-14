def monthly_salary(annual_salary):
    return annual_salary//12

def  weekly_salary(monthly_salary):
    return monthly_salary // 4

def hourly_salary(weekly_salary, hours_worked):
    return f"Your hourly wage is {weekly_salary // hours_worked} dollars"
    
#print(monthly_salary(13000))

#print(weekly_salary(2000))

print(hourly_salary(500, 30))