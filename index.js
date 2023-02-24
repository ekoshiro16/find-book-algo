/*
You are a web developer for a major publishing company. A big part of your job is managing the inventory data of all of the books your company owns, which, to put it lightly, is a LOT. You have found it extremely time consuming and tedious to look through the list of inventory data manually, as there are too many books to do this efficiently.

We need to write a function called removeSpecificBookByText that takes in 2 parameters: one called bookList (an array of objects, where each object element represents a book), and another called text (a string that contains an excerpt from the "text" key of a novel object element). 

Your function should return a new array that contains all book objects that do NOT contain the text argument value. 

For example:
Consider this book array.
let companyInventory = [
    {
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        text: "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean."
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstory",
        text: "Happy families are all alike; every unhappy family is unhappy in its own way."
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
    },
    {
        title: "Metamorphosis",
        author: "Franz Kafka",
        text: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect."
    }
];

For example, if you called your function with the above array variable and another argument value of "insect" (representing your search "text"). Like:

console.log(
    removeSpecificBookByText(companyInventory, "insect")
)

You would get back an array with all books EXCEPT for the "Metamorphosis" novel, since that book contains the text of "insect". 
*/

// Write your code below: 