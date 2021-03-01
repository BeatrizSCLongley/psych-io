Rails.application.routes.draw do
  root to: 'pages#home'
  post 'contacts', to: 'contacts#create'
end
