// 1. Initialize the library array and the loop control variable
const library = [];

document.getElementById("start-btn").addEventListener("click", startApp);

function startApp() {
  let running = true;

  while (running) {
    const choice = prompt(`
  📚 Book Tracker
  1. Add Book
  2. List Books
  3. Mark Book as Read
  4. List Unread Books
  5. Remove Book
  6. Exit
  Enter your choice:`);

    if (choice === null) {
      running = false;
      break;
    }

    switch (choice) {
      case "1":
        addBook();
        break;
      case "2":
        listBooks();
        break;
      case "3": {
        const title = prompt("Enter the title of the book to mark as read:");
        markAsRead(title);
        break;
      }
      case "4":
        listUnreadBooks();
        break;
      case "5": {
        const title = prompt("Enter the title of the book to remove:");
        if (title !== null) {
          removeBook(title);
        }
        break;
      }
      case "6":
        running = false;
        alert("Goodbye!");
        break;
      default:
        alert("Invalid choice.");
    }
  }
}

// 2. Implement the required functions

function addBook() {

  const title = prompt("Enter the book's title:");

  if (title === null) {

    return;

  }



  const author = prompt("Enter the book's author:");

  if (author === null) {

    return;

  }



  const trimmedTitle = title.trim();

  const trimmedAuthor = author.trim();

  if (!trimmedTitle || !trimmedAuthor) {

    alert("Book title and author cannot be empty.");

    return;

  }

 
  // Create the book object

  const book = {

    title: trimmedTitle,

    author: trimmedAuthor,

    isRead: false // Books are unread by default when added

  };

  // Use push() to add the new object to the end of the array

  library.push(book);

  alert(`"${trimmedTitle}" has been added to your library!`);

}

function listBooks() {

  if (library.length === 0) {

    console.log("Your library is currently empty.");

    return;

  }

 

  console.log("--- Your Library ---");

console.log("--- Your Library ---");

  // Use forEach() to iterate through every book in the array

  library.forEach(book => {

    const status = book.isRead ? "Read" : "Unread";

    console.log(`${book.title} by ${book.author} [${status}]`);

  });

  alert("Check your browser console to see the list of books!");

}



function markAsRead(title) {

  if (title === null || !title.trim()) {

    return;

  }

   // Use find() to locate the first book object that matches the title

  const normalizedTitle = title.trim().toLowerCase();

  const book = library.find(b => b.title.toLowerCase() === normalizedTitle);

 

  if (book) {

    book.isRead = true; // Update the object's property

    alert(`"${book.title}" has been marked as read!`);

  } else {

    alert("Book not found. Please check the spelling.");

  }

}



function listUnreadBooks() {

  // Filter creates a new array of only the books where isRead is false

  const unreadBooks = library.filter(book => book.isRead === false);

 

  if (unreadBooks.length === 0) {

    console.log("You have no unread books!");

    return;

  }

 

  console.log("--- Unread Books ---");

  unreadBooks.forEach(book => console.log(`${book.title} by ${book.author}`));

}


function removeBook(title) {
  if (title === null || !title.trim()) {
    return;
  }

  // findIndex returns the position (e.g., 0, 1, 2). If not found, it returns -1.
  const normalizedTitle = title.trim().toLowerCase();
  const index = library.findIndex(b => b.title.toLowerCase() === normalizedTitle);
  
  if (index !== -1) {
    // splice removes items starting at the given index. The '1' means remove one item.
    const [book] = library.splice(index, 1);
    alert(`"${book.title}" has been removed.`);
  } else {
    alert("Book not found.");
  }
}

