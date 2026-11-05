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