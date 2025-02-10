# Redis - Short Notes  

## 📌 Basics  
- **Redis:** In-memory database for caching, session storage, and real-time messaging.  
- **Main Purpose:** Fast data retrieval, reducing DB load, and improving performance. 


## ⚡ Caching & Memoization  
- **Memoization:** Stores function results to avoid redundant calculations.  
- **API Caching:** Speeds up database queries by caching responses.  
- **Efficient Retrieval:** Uses TTL for expiration and optimized access.  
- **Stateless Storage:** Keeps data separate for easy access.  



## ⏳ Expiry & TTL  
- **Using TTL:** Manage key expiration.  
- **Setting Expiry:** Auto-delete data after a set time.  
- **Rate Limits:** Control requests using timers and expiration.  


## 🔄 Redis Operations  
- **String & List Commands:** Insert and retrieve multiple elements.  
- **Data Manipulation:** Modify, refresh, and manage stored values.  
- **Order Management:** Sort and retrieve data based on scores.  
- **Client IP Tracking:** Store and increment IP-based request counts. 