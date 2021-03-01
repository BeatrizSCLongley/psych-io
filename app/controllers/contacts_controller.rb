class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      redirect_to root_path, notice: "Thank you for your contact.We have successfully received your email"
      message = ContactMailer.with(contact: @contact).new_contact
      message.deliver_later
    else
      # Can I render a create?
      render :create, notice: "There was an error while submiting your contact form. Please try again"
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :topic, :message, :terms)
  end
end
