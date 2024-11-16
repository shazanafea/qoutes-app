  var quotes=[
   {'author': ' Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken'
    },
   {'author': ' Frank Zappa', 
     'quote': 'So many books, so little time'
    },
   {'author': ' Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
   {'author': ' Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
   {'author': ' Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
   {'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
    },

]

function generateQoute(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
   var randomQoute = quotes[randomIndex].quote;
   var randomWriter = quotes[randomIndex].author;
   var quote = document.getElementById("Qoutes");
   var author = document.getElementById("writers");
   quote.textContent = randomQoute;
   author.textContent = randomWriter;
}
