class PagesController < ApplicationController
  def home
    # needs to be here to render the partial on home page
    @contact = Contact.new
  end
end
