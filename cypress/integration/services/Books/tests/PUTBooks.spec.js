import * as PUTBooks from '../requests/Books/PUTBooks.request';
import * as GETBooks from '../requests/Books/GETBooks.request';
import * as POSTBooks from '../requests/Books/POSTBooks.request';

describe ('PUT Books',()=>{
    it('Alterar um livro',()=>{
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Teste Livro alterado');
            })
        })
    });

    it('Criar e alterar um livro', () => {
        POSTBooks.addBook().then((resAddBook) => {
            PUTBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Teste Livro alterado');
            })
        })
    });
});