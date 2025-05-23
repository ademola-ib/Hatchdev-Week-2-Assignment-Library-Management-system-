"use strict";
class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
}
class Member {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addMember(member) {
        this.members.push(member);
    }
    listBooks() {
        console.log("\n Library Books:");
        this.books.forEach(book => {
            console.log(`- ${book.id}: "${book.title}" by ${book.author}`);
        });
    }
    listMembers() {
        console.log("\n Library Members:");
        this.members.forEach(member => {
            console.log(`- ${member.id}: ${member.name}`);
        });
    }
}
const library = new Library();
library.addBook(new Book("Mechanics of Materials", "Stephen Timoshenko", 1));
library.addBook(new Book("Fluid Mechanics", "R . K Bansal", 2));
library.addMember(new Member("Ibraheem", 1));
library.addMember(new Member("Ademola", 2));
library.addMember(new Member("Yusuf", 3));
library.addMember(new Member("Adeola", 4));
library.addMember(new Member("Adenike", 5));
library.addMember(new Member("Shakirat", 6));
library.addMember(new Member("Adejumo", 7));
library.listBooks();
library.listMembers();
