movies = []
theaters = set()
ticket_price = (250,350,300)
customers = {}
 
def add_movie(title, genere, showtime):
    movies.append({'title' : title, 'genere' : genere, 'showtime' : showtime})
 
    print(f"Added Movie -------------------------------------------\nTitle : {title}\nGenere : {genere}\nShowtime : {showtime}\n")
    return
 
def remove_movie(title):
    for movie in movies:
        if(movie['title'] == title):
            movies.remove(movie)
            print(f"Removed Movie --------------------------------------\nTitle : {title}\nGenere : {movie['genere']}\nShowtime : {movie['showtime']}\n")
    return        
 
def add_theater(theater_name):
    theaters.add(theater_name)
 
    print("Theater Added :",theater_name)
 
def add_customer(customer_name):
    customers[customer_name] = []
    return
 
def book_ticket(customer_name, movie_title):
    for movie in movies:
        if movie["title"] == movie_title:
            customers[customer_name].append(movie_title)
            print(f"Ticket booked for '{customer_name}' to watch '{movie_title}'.")
            return
 
def print_data():
    print("\nMovies Available:")
    for movie in movies:
        print(f"  {movie['title']} ({movie['genere']}) at {movie['showtime']}")
 
    print("\nTheaters Available:")
    for theater in theaters:
        print(f"  {theater}")
 
    print("\nTicket Pricing:")
    print(f"  Prices: {ticket_price}")
 
    print("\nCustomer Bookings:")
    for customer, bookings in customers.items():
        print(f"  {customer}: {', '.join(bookings) if bookings else 'No bookings yet'}")
 
add_movie("jab we met", "Action", "21:20")
add_movie("MehulJi", "Adventurous", "15:10")
add_movie("Total Dhamaal", "Sci-Fi", "10:50")
 
# remove_movie("Juman Ji")
 
add_theater("PVR")
add_theater("Galaxy")
add_theater("Minerva")
 
print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
 
add_customer("Ishit")
add_customer("Gargi")
add_customer("Pari")
 
 
book_ticket("Ishit", "Jab we met")
book_ticket("Ananya", "Total Dhamaal")
book_ticket("Riya", "Mehulji")
 
print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
 
print_data()