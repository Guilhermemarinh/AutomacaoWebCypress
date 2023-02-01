import * as DELETEBooks from '../../requests/Books/DELETEBooks.request';
import * as GETBooks from '../../requests/Books/GETBooks.request';
import * as POSTBooks from '../../requests/Books/POSTBooks.request';

describe ('DELETE Books',() => {
    it('Deletar um livro',() => {
        GETBooks.allBooks().then((resAllBooks) => {
            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });

    it('Criar e excluir um livro', () => {
        POSTBooks.addBook().then((resAddBook) => {
            DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) =>{
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });
});