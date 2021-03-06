Rails.application.routes.draw do
  mount Bootsy::Engine => '/bootsy', as: 'bootsy'
  get 'getting/index'

  devise_for :bloguers, controllers: {sessions: 'bloguers/sessions', registrations: 'bloguers/registrations'}

  root 'home#index'
  get 'quieres-ser-un-bloguer', to: 'getting#index', as: 'getting'
  get 'bloguers/:id', to: 'bloguers#show', as: 'bloguer'
  get 'bloguer/:id', to: 'bloguers#edit', as: 'perfil'
  put 'bloguer/:id', to: 'bloguers#update'
  get 'bloguers', to: 'bloguers#index'
  #post 'posts/new', to: 'posts#image'
  #get 'post/:id' => 'posts#new'
  resources :posts
  #resources :bloguers
  #namespace :bloguer, path: '/' do

    # Directs /admin/products/* to Admin::ProductsController
    # (app/controllers/admin/products_controller.rb)
   # get 'bloguer', to: 'index#index'
  #end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
