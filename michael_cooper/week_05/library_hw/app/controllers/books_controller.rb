class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def create
    Book.create book_params
    redirect_to books_path
  end

  def new
    @book = Book.new
  end

  def edit
    @book = Book.find params[:id]
  end

  def show
    @book = Book.find params[:id]
  end

  def update
    b = Book.find params[:id]
    b.update book_params
    redirect_to b
  end

  def destroy
    book = Book.find params[:id]
    book.destroy
    redirect_to books_path
  end

  private
  def book_params
    params.require(:book).permit(:title, :genre, :year, :cover, :author_id)
  end
end
