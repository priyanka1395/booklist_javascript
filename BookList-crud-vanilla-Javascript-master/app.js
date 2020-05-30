//UI part

//Book class
var Book = function (name, author, isbn) {
    this.book_name = name;
    this.book_author = author;
    this.book_isbn = isbn;
}

Book.prototype.alertMessage = function (message, className) {
    var alertDiv = document.createElement("div");
    alertDiv.innerHTML = message;
    alertDiv.className = `alert alert-${className}`;

    var formRef = document.getElementById("book-form");
    var con = document.querySelector(".container");
    con.insertBefore(alertDiv, formRef);

    setTimeout(function () {
        alertDiv.remove();
    }, 1000);

}

Book.prototype.clearField = function () {
    document.getElementById('book_title').value = "";
    document.getElementById('book_author').value = "";
    document.getElementById('book_isbn').value = "";
}

Book.prototype.addBook = function (book) {
    var trREf = document.createElement("tr");
    console.log(trREf);

    var cell1 = document.createElement('td');
    var cellTxt = document.createTextNode(book.book_name);
    cell1.appendChild(cellTxt);

    var cell2 = document.createElement('td');
    var cellTxt2 = document.createTextNode(book.book_author);
    cell2.appendChild(cellTxt2);

    var cell3 = document.createElement('td');
    var cellTxt3 = document.createTextNode(book.book_isbn);
    cell3.appendChild(cellTxt3);

    var cell4 = document.createElement('td');
    var btn = document.createElement("button");
    btn.className = "btn btn-danger";
    var btnTxt = document.createTextNode("Delete");
    btn.appendChild(btnTxt);
    var that = this;
    btn.addEventListener('click', function (ev) {
        trREf.remove();
        that.alertMessage("Book record deleted successfully !", "danger");
    })
    cell4.appendChild(btn);

    trREf.appendChild(cell1);
    trREf.appendChild(cell2);
    trREf.appendChild(cell3);
    trREf.appendChild(cell4);

    // trREf.innerHTML = `
    // <td>${book.book_name}</td>
    // <td>${book.book_author}</td>
    // <td>${book.book_isbn}</td>
    // `;


    var tableRef = document.getElementById("book-list");
    tableRef.appendChild(trREf);
    this.clearField();
}


console.log("Hello app");
document.getElementById("book-form").addEventListener('submit', function (e) {
    var book_title = document.getElementById("book_title").value;
    var book_author = document.getElementById("book_author").value;
    var book_isbn = document.getElementById("book_isbn").value;

    var bookObj = new Book(book_title, book_author, book_isbn);
    if (book_title == "" || book_author == "" || book_isbn == "") {
        bookObj.alertMessage("Fields can not be empty !", "danger");
    }
    else {
        bookObj.addBook(bookObj);
        bookObj.alertMessage("Record Saved ! ", "success");
    }


    e.preventDefault();

})