class SiteController < ApplicationController 
    skip_before_action :require_login 
    layout "application"

    def index 
        render component: 'Main'
    end 
end
    