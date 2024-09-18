//Step 1:
const library = [
    {
      title: "The 48 Laws of Power.",
      author: "Robert Greene",
      status: {
        own: true,
        reading: true,
        read: false
      }
    },
    
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      status: {
        own: true,
        reading: false,
        read: true
      }
    },

    {
      title: "How to Talk to Anyone",
      author: "Leil Lowndes",
      status: {
        own: true,
        reading: false,
        read: true
      }
    }
  ];


//Step 2:
library.forEach(book => book.status.read = true);

//Step 3:
const { title: firstBook } = library[0];
console.log(firstBook); 

//Step 4:
const libraryJson = JSON.stringify(library);
console.log(libraryJson);

