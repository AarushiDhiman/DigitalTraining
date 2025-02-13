purchase_amount = int(input("Enter amount of purchase: "))
discount=0
if purchase_amount>=1000:
    discount=20
if purchase_amount>=500 and purchase_amount<1000:
    discount=10
discount_price=purchase_amount*discount/100
final_amount=purchase_amount-discount_price

print("Discount: ",discount)
print("Discounted Price: ",discount_price,"%")
print("Final Amount: ",final_amount)
