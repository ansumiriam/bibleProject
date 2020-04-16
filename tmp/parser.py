import json 
  
file_name = '/Users/Ansu/personal/personal proj/bibleProject/bibleText/en_bbe.json'
# Opening JSON file 
f = open(file_name) 
  
# returns JSON object as  
# a dictionary 
data = json.loads(f.read()) 
  
# Iterating through the json 
# list 
for book in data:
    # if (book["book"] == "Genesis"):
    print(book["book"], len(book["chapters"]))
  
# Closing file 
f.close() 